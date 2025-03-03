"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Alert, Snackbar, Typography, Box, Button } from "@mui/material";
import { CiWifiOff } from "react-icons/ci";

interface OfflineDetectorProps {
  children?: React.ReactNode;
}

const OfflineDetector: React.FC<OfflineDetectorProps> = ({ children }) => {
  const [isOnline, setIsOnline] = useState<boolean>(true);
  const [showOfflineMessage, setShowOfflineMessage] = useState<boolean>(false);

  useEffect(() => {
    // Set initial online status
    setIsOnline(navigator.onLine);

    // Event listeners for online/offline status changes
    const handleOnline = () => {
      setIsOnline(true);
      setShowOfflineMessage(false);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowOfflineMessage(true);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const handleClose = () => {
    setShowOfflineMessage(false);
  };

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
          <Typography variant="body2">
            شما آفلاین هستید. برخی از قابلیت‌ها ممکن است در دسترس نباشند.
          </Typography>
        </Box>
      )}

      {/* Snackbar notification when going offline */}
      <Snackbar
        open={showOfflineMessage}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity="warning"
          variant="filled"
          onClose={handleClose}
          sx={{ width: "100%" }}
          action={
            <Button
              color="inherit"
              size="small"
              onClick={() => window.location.reload()}
            >
              تلاش مجدد
            </Button>
          }
        >
          اتصال اینترنت قطع شد. برخی از قابلیت‌ها ممکن است در دسترس نباشند.
        </Alert>
      </Snackbar>
    </>
  );
};

export default OfflineDetector;
