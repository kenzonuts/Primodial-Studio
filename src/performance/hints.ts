/**
 * Performance helpers — preconnect hints and image priority guidance.
 */

export const performanceHints = {
  preconnect: [
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://plausible.io",
    "https://www.clarity.ms",
    "https://vitals.vercel-insights.com",
  ],
  dnsPrefetch: [
    "https://www.googletagmanager.com",
    "https://plausible.io",
    "https://www.clarity.ms",
  ],
} as const;

export function shouldPrioritizeImage(role: "hero" | "logo" | "content") {
  return role === "hero" || role === "logo";
}
