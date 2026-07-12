import type { MetadataRoute } from "next";

import { SITE_DESCRIPTION, SITE_NAME } from "@/constants/site";

/**
 * PWA manifest — icons expand as assets land in /public/assets/icons.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Primordial",
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#050505",
    theme_color: "#050505",
    categories: ["business", "productivity", "design"],
    lang: "en",
    dir: "ltr",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
        purpose: "any",
      },
      // Future maskable icons:
      // { src: "/assets/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      // { src: "/assets/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
