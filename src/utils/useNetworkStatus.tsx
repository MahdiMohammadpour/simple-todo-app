"use client";

import { useState, useEffect } from "react";

interface NetworkStatus {
  isOnline: boolean | null;
  effectiveType: string | null;
}

// تعریف دقیق‌تر برای `navigator.connection`
interface NavigatorWithConnection extends Navigator {
  connection?: {
    effectiveType?: string;
    addEventListener?: (type: string, listener: () => void) => void;
    removeEventListener?: (type: string, listener: () => void) => void;
  };
}

export const useNetworkStatus = (): NetworkStatus => {
  const [isOnline, setIsOnline] = useState<boolean | null>(null);
  const [effectiveType, setEffectiveType] = useState<string | null>(null);

  useEffect(() => {
    const navigatorWithConnection = navigator as NavigatorWithConnection;
    setIsOnline(navigatorWithConnection.onLine);
    setEffectiveType(
      navigatorWithConnection?.connection?.effectiveType ?? null
    );

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    const handleConnectionChange = () => {
      setEffectiveType(
        navigatorWithConnection?.connection?.effectiveType ?? null
      );
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    navigatorWithConnection?.connection?.addEventListener?.(
      "change",
      handleConnectionChange
    );

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      navigatorWithConnection?.connection?.removeEventListener?.(
        "change",
        handleConnectionChange
      );
    };
  }, []);

  return { isOnline, effectiveType };
};

export default useNetworkStatus;
