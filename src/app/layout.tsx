import type { Metadata } from "next";
//mui
//css
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
//i18n
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import MuiProvider from "@/config/MUI/Provider";
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
          <MuiProvider>
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
          </MuiProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
