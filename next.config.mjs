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
const nextConfig = {
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

// Apply both withPWA and withNextIntl plugins
export default withNextIntl(withPWA(pwaConfig)(nextConfig));
