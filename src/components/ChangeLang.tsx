"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
// i18n
import { useTranslations } from "next-intl";
// mui
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
// icons
import { TfiWorld } from "react-icons/tfi";

export default function ChangeLang() {
  const t = useTranslations("HomePage");
  const router = useRouter();
  const currentLocale = Cookies.get("NEXT_LOCALE") || "fa";
  const nextLocale = currentLocale === "fa" ? "en" : "fa";

  const changeLanguage = () => {
    Cookies.set("NEXT_LOCALE", nextLocale);
    router.refresh();
  };

  return (
    <Tooltip title={t("change-lang")} arrow>
      <IconButton onClick={changeLanguage} size="medium" color="inherit">
        <TfiWorld size={20} />
        <span style={{ fontSize: 14, padding: 5 }}>
          {nextLocale.toUpperCase()}
        </span>
      </IconButton>
    </Tooltip>
  );
}
