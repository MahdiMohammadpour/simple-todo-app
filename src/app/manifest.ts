import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PWA Base React Next",
    short_name: "BRN",
    icons: [
      {
        src: "./icon/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "./icon/icon-384.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "./icon/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#FFFFFF",
    background_color: "#FFFFFF",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    scope: "/",
    description: "A Progressive Web App built with Next.js",
    lang: "fa",
    dir: "rtl",
    categories: ["productivity"],
    screenshots: [],
    shortcuts: [],
    prefer_related_applications: false,
  };
}
