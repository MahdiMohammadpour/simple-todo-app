import type { Metadata } from "next";
//redux
import StoreProvider from "@/config/Redux/StoreProvider";
//css
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
//i18n
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
//mui
import MuiProvider from "@/config/MUI/Provider";
//fonts
import { iranSansLocalFont, poppinsLocalFont } from "@/assets/fonts";
import OfflineDetector from "@/components/OfflineDetector";
import Header from "@/components/header/Header";
import { Box } from "@mui/material";
import Head from "next/head";

export const metadata: Metadata = {
  title: "todo app",
  description: "a simple todo app",
  generator: "Next.js",
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  alternates: {
    languages: {
      fa: "/fa",
      en: "/en",
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "fa" ? "rtl" : "ltr"}>
      <Head>
        <title>{metadata.title?.toString()}</title>
        <meta
          name="description"
          content={metadata.description?.toString() || ""}
        />
        <meta name="viewport" content={metadata.viewport?.toString() || ""} />
      </Head>
      <body
        className={`${poppinsLocalFont.variable} ${iranSansLocalFont.variable}`}
      >
        <StoreProvider>
          <NextIntlClientProvider messages={messages}>
            <MuiProvider>
              <OfflineDetector>
                <Box
                  sx={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.86)), url('/images/background.png')`,
                    backgroundRepeat: "repeat",
                    minHeight: "100vh",
                    width: "100%",
                  }}
                >
                  <>
                    <Header />
                    {children}
                  </>
                </Box>
                <ToastContainer
                  position="bottom-left"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="colored"
                />
              </OfflineDetector>
            </MuiProvider>
          </NextIntlClientProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
