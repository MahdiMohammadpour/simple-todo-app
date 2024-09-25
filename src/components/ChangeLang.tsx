"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
//i18n
import { useTranslations } from "next-intl";
//mui
import Button from "@mui/material/Button";

export default function ChangeLang() {
  const t = useTranslations("HomePage");
  const router = useRouter();

  const changeLanguage = (locale: string) => {
    Cookies.set("NEXT_LOCALE", locale);
    router.refresh();
  };
  return (
    <Button
      variant="outlined"
      onClick={() => {
        changeLanguage(Cookies.get("NEXT_LOCALE") === "fa" ? "en" : "fa");
      }}
    >
      {t("change-lang")}
    </Button>
  );
}
