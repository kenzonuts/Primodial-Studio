import type { MetadataRoute } from "next";

import { BRAND_ASSETS } from "@/constants/brand";
import { SITE_DESCRIPTION, SITE_NAME } from "@/constants/site";

/**
 * PWA manifest — icons from official Primordial Studio mark.
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
        src: BRAND_ASSETS.favicon,
        sizes: "any",
        type: "image/x-icon",
        purpose: "any",
      },
      {
        src: BRAND_ASSETS.icon192,
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: BRAND_ASSETS.icon512,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: BRAND_ASSETS.appleTouchIcon,
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
