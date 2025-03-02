"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { onMessage } from "firebase/messaging";
import useToken from "@/utils/useToken";
import { messaging } from "@/config/firebase/firebase";

const NotificationHandler = () => {
  const router = useRouter();
  const { token } = useToken();

  useEffect(() => {
    const setupListener = async () => {
      if (!token) return;

      console.log(
        `NotificationHandler: onMessage registered with token ${token}`
      );
      const m = await messaging();
      if (!m) return;

      const unsubscribe = onMessage(m, (payload) => {
        if (Notification.permission !== "granted") return;

        console.log("Foreground push notification received:", payload);
        const link = payload.fcmOptions?.link || payload.data?.link;

        // Show toast notification
        toast.info(
          `${payload.notification?.title}: ${payload.notification?.body}`,
          {
            onClick: () => {
              if (link) {
                router.push(link);
              }
            },
          }
        );

        // Create browser notification
        const n = new Notification(payload.notification?.title || "پیام جدید", {
          body: payload.notification?.body || "یک پیام جدید دریافت شده است",
          data: link ? { url: link } : undefined,
        });

        // Handle notification click
        n.onclick = (event) => {
          event.preventDefault();
          const link = (event.target as Notification)?.data?.url;
          if (link) {
            router.push(link);
            window.focus();
          }
        };
      });

      return unsubscribe;
    };

    let unsubscribe: (() => void) | null = null;

    setupListener().then((unsub) => {
      if (unsub) {
        unsubscribe = unsub;
      }
    });

    return () => unsubscribe?.();
  }, [token, router]);

  return null;
};

export default NotificationHandler;
