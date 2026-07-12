/**
 * Analytics provider configuration — IDs from env, never hardcode secrets.
 */

export const analyticsConfig = {
  ga4MeasurementId: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || "",
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || "",
  plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "",
  plausibleSrc:
    process.env.NEXT_PUBLIC_PLAUSIBLE_SRC ||
    "https://plausible.io/js/script.js",
  clarityId: process.env.NEXT_PUBLIC_CLARITY_ID || "",
  searchConsoleVerification:
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  bingVerification: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
} as const;

export type AnalyticsEventName =
  | "page_view"
  | "cta_click"
  | "nav_click"
  | "portfolio_click"
  | "service_click"
  | "contact_submit"
  | "newsletter_submit"
  | "external_link"
  | "github_click"
  | "social_click"
  | "not_found"
  | "search"
  | "scroll_depth"
  | "download"
  | "consent_update";

export type AnalyticsEventPayload = Record<
  string,
  string | number | boolean | null | undefined
>;
