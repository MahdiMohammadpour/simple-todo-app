"use client";
//i18n
import ChangeLang from "@/components/ChangeLang";
import { useTranslations } from "next-intl";
import Typography from "@mui/material/Typography";
import ChangeTheme from "@/components/ChangeTheme";
import { Box, Paper, Stack } from "@mui/material";
import NetworkAwareButton from "@/components/NetworkAwareButton";
import useNetworkStatus from "@/utils/useNetworkStatus";

export default function Home() {
  const t = useTranslations("HomePage");
  const { isOnline, effectiveType } = useNetworkStatus();

  return (
    <Box sx={{ p: 3, maxWidth: 800, mx: "auto" }}>
      <Typography variant="h1" sx={{ mb: 4 }}>
        {t("welcome")}
      </Typography>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          وضعیت شبکه
        </Typography>
        <Typography variant="body1">
          وضعیت اتصال: {isOnline ? "آنلاین" : "آفلاین"}
        </Typography>
        {effectiveType && (
          <Typography variant="body1">نوع اتصال: {effectiveType}</Typography>
        )}
      </Paper>

      <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
        <ChangeLang />
        <ChangeTheme />
      </Stack>

      <Stack direction="row" spacing={2}>
        <NetworkAwareButton variant="contained" color="primary">
          این دکمه همیشه فعال است
        </NetworkAwareButton>

        <NetworkAwareButton
          variant="contained"
          color="secondary"
          onlineOnly={true}
          offlineMessage="این عملیات نیاز به اتصال اینترنت دارد"
        >
          فقط در حالت آنلاین
        </NetworkAwareButton>
      </Stack>
    </Box>
  );
}
