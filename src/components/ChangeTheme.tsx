"use client";
import React, { useContext } from "react";
//i18n
import { useTranslations } from "next-intl";
//mui
import { Button } from "@mui/material";
//context
import { ColorModeContext } from "@/config/MUI/Provider";

export default function ChangeTheme() {
  const { toggleColorMode } = useContext(ColorModeContext);
  const t = useTranslations("HomePage");
  return (
    <Button variant="contained" onClick={toggleColorMode}>
      {t("change-theme")}
    </Button>
  );
}
