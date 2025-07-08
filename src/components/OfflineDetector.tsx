"use client";

import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import type React from "react";
import { useEffect, useState } from "react";
import { CiWifiOff } from "react-icons/ci";

interface OfflineDetectorProps {
  children?: React.ReactNode;
}

const OfflineDetector: React.FC<OfflineDetectorProps> = ({ children }) => {
  const [isOnline, setIsOnline] = useState<boolean>(true);

  const translate = useTranslations("messages");

  useEffect(() => {
    // Set initial online status
    setIsOnline(navigator.onLine);

    // Event listeners for online/offline status changes
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <>
      {children}

      {/* Offline Banner - Fixed at the top when offline */}
      {!isOnline && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: "error.main",
            color: "error.contrastText",
            padding: 1,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CiWifiOff style={{ marginRight: 1 }} />
          <Typography variant="body2">{translate("offlineError")}</Typography>
        </Box>
      )}
    </>
  );
};

export default OfflineDetector;
