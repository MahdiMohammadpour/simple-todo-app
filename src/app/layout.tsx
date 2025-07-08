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
import Head from "next/head";
import InstallPrompt from "./_components/InstallPrompt";
import NotificationHandler from "./_components/NotificationHandler";
import PWARegister from "./_components/PWARegister";


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
export const metadata: Metadata = {
  title: {
    default: "مهدی محمدپور | توسعه‌دهنده فرانت‌اند",
    template: "%s | مهدی محمدپور",
  },
  description:
    "مهدی محمدپور، توسعه‌دهنده فرانت‌اند در تهران با تخصص در React، Next.js، TypeScript و Material UI. بیش از دو سال تجربه در توسعه وب‌اپلیکیشن‌های مدرن و کاربرپسند.",
  keywords: [
    "توسعه‌دهنده فرانت‌اند",
    "برنامه‌نویس React",
    "Next.js",
    "TypeScript",
    "Material UI",
    "تهران",
    "وب‌اپلیکیشن",
    "Front-end Developer",
    "React Developer",
    "Next.js Developer",
    "Web Development",
  ],
  generator: "Next.js",
  manifest: "/manifest.json",
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "/icon-512.png" },
    { rel: "icon", url: "/icon-512.png" },
  ],
  alternates: {
    languages: {
      "fa": "/fa",
      "en": "/en",
    },
  },
};

// متا دیتای داینامیک برای هر زبان
const getLocalizedMetadata = (locale: string) => ({
  title:
    locale === "fa"
      ? "مهدی محمدپور | توسعه‌دهنده فرانت‌اند"
      : "Mehdi Mohammadpour | Front-end Developer",
  description:
    locale === "fa"
      ? "مهدی محمدپور، توسعه‌دهنده فرانت‌اند در تهران با تخصص در React، Next.js، TypeScript و Material UI. بیش از دو سال تجربه در توسعه وب‌اپلیکیشن‌های مدرن و کاربرپسند."
      : "Mehdi Mohammadpour, a Front-end Developer in Tehran with expertise in React, Next.js, TypeScript, and Material UI. Over two years of experience in building modern, user-friendly web applications.",
  keywords:
    locale === "fa"
      ? [
          "توسعه‌دهنده فرانت‌اند",
          "برنامه‌نویس React",
          "Next.js",
          "TypeScript",
          "Material UI",
          "تهران",
          "وب‌اپلیکیشن",
        ]
      : [
          "Front-end Developer",
          "React Developer",
          "Next.js Developer",
          "TypeScript",
          "Material UI",
          "Tehran",
          "Web Development",
        ],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  const localizedMetadata = getLocalizedMetadata(locale);

  return (
    <html lang={locale} dir={locale === "fa" ? "rtl" : "ltr"}>
      <Head>
        <title>{localizedMetadata.title}</title>
        <meta name="description" content={localizedMetadata.description} />
        <meta name="keywords" content={localizedMetadata.keywords.join(", ")} />
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
                <Header />
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
