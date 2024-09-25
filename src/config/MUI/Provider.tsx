"use client";
import React, { ReactNode } from "react";
import Cookies from "js-cookie";
//mui
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

export default function Provider({ children }: { children: ReactNode }) {
  const locale =
    Cookies.get("NEXT_LOCALE") || process.env.NEXT_PUBLIC_DEF_LOCALE;
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  const cacheltR = createCache({
    key: "mui",
  });
  return (
    <CacheProvider value={locale === "fa" ? cacheRtl : cacheltR}>
      <ThemeProvider theme={theme}>
        {children}
        <CssBaseline />
      </ThemeProvider>
    </CacheProvider>
  );
}
