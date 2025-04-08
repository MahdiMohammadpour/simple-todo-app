"use client";
import { Arrow } from "@/assets/icons";
import { Grid2, SvgIcon, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export default function ViewExample() {
  const t = useTranslations("Icon");
  return (
    <Grid2
      container
      spacing={2}
      size={12}
      sx={{
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5">{t("view-exam-icon")}</Typography>
      <SvgIcon inheritViewBox sx={{ width: 50, height: 50 }}>
        <Arrow />
      </SvgIcon>
      <Typography variant="h6">همچنین برای درست کردن اندازه دلخواه باید داخل کد svg آیکون عرض و ارتفاع 100% بدیم</Typography>
      <Typography variant="h6">تا بتوانیم عرض و ارتفاع داخل کامپوننت مدیریت کنیم</Typography>
      <Typography variant="h6">برای مدیریت رنگ آیکون نیز باید داخل تگ path تمامی مقدار های fill را برابر currentColor قرار بدیم</Typography>
    </Grid2>
  );
}
