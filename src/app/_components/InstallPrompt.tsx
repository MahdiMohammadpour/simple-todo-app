"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Button, Box, Typography } from "@mui/material";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => void;
  userChoice: Promise<{ outcome: string }>;
}

const InstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isIos, setIsIos] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    setIsMobile(/Mobi|Android|iPhone|iPad/i.test(userAgent));
    setIsIos(/iPhone|iPad|iPod/i.test(userAgent) && /Safari/i.test(userAgent));

    if (localStorage.getItem("pwaInstalled")) {
      setIsInstalled(true);
      return;
    }

    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handler as EventListener);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handler as EventListener
      );
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
          localStorage.setItem("pwaInstalled", "true");
          setIsInstalled(true);
        } else {
          console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null);
      });
    }
  };

  if (!isMobile || isInstalled || (!deferredPrompt && !isIos)) {
    return null;
  }

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#fff",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
        zIndex: 9999,
      }}
    >
      {isIos ? (
        <>
          <Typography variant="body1" sx={{ textAlign: "center", mb: 1 }}>
            برای نصب PWA، روی دکمه Share در Safari بزنید و سپس Add to Home Screen را انتخاب کنید.
          </Typography>
        </>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={handleInstallClick}
          sx={{ fontSize: "1.2rem", padding: "0.8rem 1.5rem" }}
        >
          نصب PWA
        </Button>
      )}
    </Box>
  );
};

export default InstallPrompt;
