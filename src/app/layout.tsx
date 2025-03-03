import type { Metadata } from "next";
//redux
import StoreProvider from "@/config/Redux/StoreProvider";
//css
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
//i18n
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
//mui
import MuiProvider from "@/config/MUI/Provider";
//fonts
import { iranSansLocalFont, poppinsLocalFont } from "@/assets/fonts";
import Head from "next/head";
import PWARegister from "./_components/PWARegister";
import InstallPrompt from "./_components/InstallPrompt";
import NotificationHandler from "./_components/NotificationHandler";
import OfflineDetector from "@/components/OfflineDetector";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_TITLE_PROJECT,
  description: "Nextjs + MUI",
};
const metadata_pwa = {
  title: process.env.NEXT_PUBLIC_TITLE_PROJECT,
  description: "Nextjs + MUI",
  generator: "Next.js",
  manifest: "../manifest.json",
  keywords: ["react", "nextjs", "base"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "icon-512.png" },
    { rel: "icon", url: "icon-512.png" },
  ],
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
        <title>{metadata_pwa.title}</title>
        <meta name="description" content={metadata_pwa.description} />
        <meta name="generator" content={metadata_pwa.generator} />
        <link rel="manifest" href={metadata_pwa.manifest} />
        <meta name="keywords" content={metadata_pwa.keywords.join(", ")} />
        {metadata_pwa.themeColor.map(({ media, color }, index) => (
          <meta key={index} name="theme-color" media={media} content={color} />
        ))}
        <meta name="viewport" content={metadata_pwa.viewport} />
        {metadata_pwa.icons.map(({ rel, url }, index) => (
          <link key={index} rel={rel} href={url} />
        ))}
      </Head>
      <body
        className={`${poppinsLocalFont.variable} ${iranSansLocalFont.variable}`}
      >
        <StoreProvider>
          <NextIntlClientProvider messages={messages}>
            <MuiProvider>
              <OfflineDetector>
                <InstallPrompt />
                <NotificationHandler />

                {children}
                <PWARegister />
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
