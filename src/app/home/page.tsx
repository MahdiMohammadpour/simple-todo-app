"use client";
//i18n
import { useTranslations } from "next-intl";
import Typography from "@mui/material/Typography";
import { Box, Paper, Stack } from "@mui/material";
import NetworkAwareButton from "@/components/NetworkAwareButton";
import useNetworkStatus from "@/utils/useNetworkStatus";
import { Poppins } from "@/assets/fonts/constants";

export default function Home() {
  const t = useTranslations("HomePage");
  const { isOnline, effectiveType } = useNetworkStatus();

  return (
    <Box sx={{ p: 3, maxWidth: 800, mx: "auto" }}>
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          {t("status")} {t("network")}
        </Typography>
        <Typography variant="body1">
          {t("network-status")} : {isOnline ? "آنلاین" : "آفلاین"}
        </Typography>
        {effectiveType && (
          <Typography variant="body1" fontFamily={Poppins}>
            {t("network-type")} : {effectiveType}
          </Typography>
        )}
      </Paper>
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
