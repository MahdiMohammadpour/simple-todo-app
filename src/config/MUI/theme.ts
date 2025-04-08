// theme.ts
import { createTheme, Theme } from "@mui/material/styles";
import type { PaletteMode } from "@mui/material";
import { IranSans, Poppins } from "@/assets/fonts/constants";

export function getTheme(mode: PaletteMode, locale: string): Theme {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: "#62b6cb",
      },
      secondary: {
        main: "#5fa8d3",
      },
      background: {
        default: mode === "dark" ? "#0d1b2a" : "#ffffff",
        paper: mode === "dark" ? "#1b4965" : "#cae9ff",
      },
      text: {
        primary: mode === "dark" ? "#ffffff" : "#000000",
        secondary: mode === "dark" ? "#eef4ed" : "#335c67",
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
