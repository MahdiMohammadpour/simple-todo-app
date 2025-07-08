// theme.ts
import { IranSans, Poppins } from "@/assets/fonts/constants";
import type { PaletteMode } from "@mui/material";
import { createTheme, Theme } from "@mui/material/styles";

export function getTheme(mode: PaletteMode, locale: string): Theme {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "dark" ? "#FFE071" : "#FBD144",
      },
      secondary: {
        main: mode === "dark" ? "#171F26" : "#FFFFFF",
      },
      background: {
        default: mode === "dark" ? "#0C151D" : "#E9EBEC",
        paper: mode === "dark" ? "#0C151D" : "#fff",
      },
      text: {
        primary: mode === "dark" ? "#F1F2F4" : "#3D3D3D",
        secondary: mode === "dark" ? "#A3ABB2" : "#575757",
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
            boxShadow:"none",
            borderRadius:"10px"
          },
        },
      },
    },
  });
}
