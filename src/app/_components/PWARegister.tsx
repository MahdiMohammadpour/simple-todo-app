"use client";
import { useEffect } from "react";

const PWARegister = () => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("✅ Service Worker Registered:", registration);

          // Check for updates
          registration.addEventListener("updatefound", () => {
            const newWorker = registration.installing;
            console.log("Service Worker update found!");

            if (newWorker) {
              newWorker.addEventListener("statechange", () => {
                if (
                  newWorker.state === "installed" &&
                  navigator.serviceWorker.controller
                ) {
                  console.log("New content is available; please refresh.");
                  // You could show a notification to the user here
                }
              });
            }
          });
        })
        .catch((error) => {
          console.error("❌ Service Worker Registration Failed:", error);
        });

      // Handle service worker updates
      let refreshing = false;
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (!refreshing) {
          refreshing = true;
          window.location.reload();
        }
      });
    }
  }, []);

  return null;
};

export default PWARegister;
