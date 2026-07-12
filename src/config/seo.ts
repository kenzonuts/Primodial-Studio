import { SITE_NAME, SITE_URL } from "@/constants/site";

/**
 * Default SEO keywords + verification — used by metadata helpers.
 */
export const seoConfig = {
  siteName: SITE_NAME,
  siteUrl: SITE_URL,
  defaultLocale: "en",
  locales: ["en"] as const,
  defaultOgImage: "/assets/og/default.png",
  twitterHandle: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@primordialstudio",
  keywords: [
    "Primordial Studio",
    "Creative Technology Studio",
    "Software Engineering",
    "Website Development",
    "Mobile Application",
    "UI/UX Design",
    "Brand Identity",
    "Artificial Intelligence",
    "Creative Technology",
    "Roblox Development",
    "3D Visualization",
    "Digital Products",
  ],
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: {
      "msvalidate.01":
        process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || undefined,
    },
  },
} as const;
