"use client";
import React, { useContext } from "react";
// i18n
import { useTranslations } from "next-intl";
// mui
import { IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// react-icons
import { FiSun, FiMoon } from "react-icons/fi";
// context
import { ColorModeContext } from "@/config/MUI/Provider";

export default function ChangeTheme() {
  const { toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();
  const t = useTranslations("HomePage");

  return (
    <IconButton
      sx={{ ml: 1 }}
      onClick={toggleColorMode}
      color="inherit"
      aria-label={t("change-theme")}
    >
      {theme.palette.mode === "dark" ? (
        <FiSun size={20} />
      ) : (
        <FiMoon size={20} />
      )}
    </IconButton>
  );
}
