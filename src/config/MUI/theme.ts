// theme.ts
import { createTheme, Theme } from "@mui/material/styles";
import type { PaletteMode } from "@mui/material";
import { IranSans, Poppins } from "@/assets/fonts/constants";

export function getTheme(mode: PaletteMode, locale: string): Theme {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#dc004e",
      },
      background: {
        default: mode === "dark" ? "#121212" : "#f5f5f5",
        paper: mode === "dark" ? "#1d1d1d" : "#ffffff",
      },
      text: {
        primary: mode === "dark" ? "#ffffff" : "#000000",
        secondary: mode === "dark" ? "#b3b3b3" : "#333333",
      },
    },
    typography: {
      fontFamily:
        locale === "fa"
          ? [IranSans, "Arial", "Helvetica", "sans-serif"].join(",")
          : [Poppins, "Arial", "Helvetica", "sans-serif"].join(","),
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
    },
  });
}
