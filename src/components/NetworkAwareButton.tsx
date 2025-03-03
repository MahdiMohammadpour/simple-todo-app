"use client";

import type React from "react";
import { Button, Tooltip, type ButtonProps } from "@mui/material";
import useNetworkStatus from "@/utils/useNetworkStatus";

interface NetworkAwareButtonProps extends ButtonProps {
  onlineOnly?: boolean;
  offlineMessage?: string;
}

const NetworkAwareButton: React.FC<NetworkAwareButtonProps> = ({
  onlineOnly = false,
  offlineMessage = "این عملیات نیاز به اتصال اینترنت دارد",
  onClick,
  disabled,
  children,
  ...props
}) => {
  const { isOnline } = useNetworkStatus();

  const isDisabled = disabled || (onlineOnly && !isOnline);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onlineOnly && !isOnline) {
      return;
    }

    if (onClick) {
      onClick(event);
    }
  };

  const button = (
    <Button {...props} onClick={handleClick} disabled={isDisabled}>
      {children}
    </Button>
  );

  if (onlineOnly && !isOnline) {
    return (
      <Tooltip title={offlineMessage} arrow>
        <span>{button}</span>
      </Tooltip>
    );
  }

  return button;
};

export default NetworkAwareButton;
