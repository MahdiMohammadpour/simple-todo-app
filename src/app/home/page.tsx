"use client";
//i18n
import ChangeLang from "@/components/ChangeLang";
import { useTranslations } from "next-intl";
import Typography from "@mui/material/Typography";
import ChangeTheme from "@/components/ChangeTheme";
import useToken from "@/utils/useToken";

export default function Home() {
  const t = useTranslations("HomePage");
  const { token, notificationPermissionStatus } = useToken();
  console.log(token);
  return (
    <>
      <Typography variant="h1">{t("welcome")}</Typography>
      {notificationPermissionStatus === "granted" ? (
        <Typography variant="h5">
          Permission to receive notifications has been granted.
        </Typography>
      ) : notificationPermissionStatus !== null ? (
        <Typography variant="h6">
          You have not granted permission to receive notifications. Please
          enable notifications in your browser settings.
        </Typography>
      ) : null}
      <ChangeLang />
      <ChangeTheme />
    </>
  );
}
