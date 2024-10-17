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

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_TITLE_PROJECT,
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
        <StoreProvider>
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
        </StoreProvider>
      </body>
    </html>
  );
}
