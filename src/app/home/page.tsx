"use client";
//i18n
import ChangeLang from "@/components/ChangeLang";
import { useTranslations } from "next-intl";
import Typography from "@mui/material/Typography";
import ChangeTheme from "@/components/ChangeTheme";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <>
      <Typography variant="h1">{t("welcome")}</Typography>
      <ChangeLang />
      <ChangeTheme />
    </>
  );
}
