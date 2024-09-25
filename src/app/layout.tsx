import type { Metadata } from "next";
//mui
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
//css
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
//i18n
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Provider from "@/config/MUI/Provider";
import { iranSansLocalFont, poppinsLocalFont } from "@/assets/fonts";

export const metadata: Metadata = {
  title: "Base",
  description: "Nextjs + MUI",
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
      <body
        className={`${poppinsLocalFont.variable} ${iranSansLocalFont.variable}`}
      >
        <NextIntlClientProvider messages={messages}>
          <AppRouterCacheProvider options={{ key: "css" }}>
            <Provider>
              {children}
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
            </Provider>
          </AppRouterCacheProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
