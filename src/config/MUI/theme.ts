"use client";
import Cookies from "js-cookie";
//mui
import { createTheme } from "@mui/material/styles";
//fonts
import { IranSans, Poppins } from "@/assets/fonts/constants";

const locale = Cookies.get("NEXT_LOCALE") || process.env.NEXT_PUBLIC_DEF_LOCALE;
const theme = createTheme({
  typography: {
    fontFamily:
      locale === "fa"
        ? [Poppins, IranSans, "Arial", "Helvetica", "sans-serif"].join(",")
        : [IranSans, Poppins, "Arial", "Helvetica", "sans-serif"].join(","),
  },

  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#f5f5f5",
    },
  },
});

export default theme;
