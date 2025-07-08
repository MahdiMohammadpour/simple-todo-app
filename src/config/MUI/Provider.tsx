"use client";
import React, { createContext, ReactNode, useMemo, useState } from "react";
import Cookies from "js-cookie";
//mui
import { ThemeProvider } from "@mui/material/styles";
import type { PaletteMode } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
//theme
import { getTheme } from "./theme";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export default function MuiProvider({ children }: { children: ReactNode }) {
  const locale =
    Cookies.get("NEXT_LOCALE") || process.env.NEXT_PUBLIC_DEF_LOCALE;
  const [mode, setMode] = useState<PaletteMode>(
    (Cookies.get("themeMode") as PaletteMode) || "dark"
  );
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === "light" ? "dark" : "light";
          Cookies.set("themeMode", newMode);
          return newMode;
        });
      },
    }),
    []
  );
  const theme = useMemo(() => getTheme(mode, locale || "en"), [mode, locale]);

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  const cacheltR = createCache({
    key: "mui",
  });
  return (
    <ColorModeContext.Provider value={colorMode}>
      <AppRouterCacheProvider options={{ key: "css" }}>
        <CacheProvider value={locale === "fa" ? cacheRtl : cacheltR}>
          <ThemeProvider theme={theme}>
            {children}
            <CssBaseline />
          </ThemeProvider>
        </CacheProvider>
      </AppRouterCacheProvider>
    </ColorModeContext.Provider>
  );
}
