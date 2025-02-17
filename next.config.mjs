import createNextIntlPlugin from "next-intl/plugin";
import withPWA from "next-pwa";
const withNextIntl = createNextIntlPlugin();
const pwaConfig = {
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
};

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(withPWA(pwaConfig)(nextConfig));
