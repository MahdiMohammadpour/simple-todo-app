"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
// i18n
// mui
import { Typography, useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
// icons

export default function ChangeLang() {
  const router = useRouter();
  const currentLocale = Cookies.get("NEXT_LOCALE") || "fa";
  const nextLocale = currentLocale === "fa" ? "en" : "fa";
  const theme = useTheme();
  const mode = theme.palette.mode;

  const changeLanguage = () => {
    Cookies.set("NEXT_LOCALE", nextLocale);
    router.refresh();
  };

  return (
    <IconButton
      onClick={changeLanguage}
      color="inherit"
      sx={{
        bgcolor: mode === "dark" ? "#171F26" : "#FFFFFF",
        width: "56px",
        height: "56px",
        border : mode === "dark" ? "none" : "1px solid #E7E7E7"
      }}
    >
      <Typography
        sx={{
          fontSize: 16,
          fontWeight: 700,
          padding: 1,
          color: mode === "dark" ? "#A3ABB2" : "#3D3D3D", 
          
        }}
      >
        {nextLocale.toUpperCase()}
      </Typography>
    </IconButton>
  );
}
