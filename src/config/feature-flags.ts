/**
 * Feature flags for production integrations — toggle via env without code changes.
 */

function flag(name: string, fallback = false): boolean {
  const value = process.env[name];
  if (value === undefined) return fallback;
  return value === "1" || value === "true" || value === "yes";
}

export const featureFlags = {
  analytics: {
    vercel: flag("NEXT_PUBLIC_ANALYTICS_VERCEL", true),
    speedInsights: flag("NEXT_PUBLIC_ANALYTICS_SPEED_INSIGHTS", true),
    ga4: flag("NEXT_PUBLIC_ANALYTICS_GA4", false),
    gtm: flag("NEXT_PUBLIC_ANALYTICS_GTM", false),
    plausible: flag("NEXT_PUBLIC_ANALYTICS_PLAUSIBLE", false),
    clarity: flag("NEXT_PUBLIC_ANALYTICS_CLARITY", false),
  },
  monitoring: {
    sentry: flag("NEXT_PUBLIC_MONITORING_SENTRY", false),
    logrocket: flag("NEXT_PUBLIC_MONITORING_LOGROCKET", false),
    otel: flag("NEXT_PUBLIC_MONITORING_OTEL", false),
    webVitals: flag("NEXT_PUBLIC_REPORT_WEB_VITALS", true),
  },
  consent: {
    required: flag("NEXT_PUBLIC_COOKIE_CONSENT", true),
  },
  seo: {
    ogImageApi: flag("NEXT_PUBLIC_OG_IMAGE_API", true),
  },
} as const;

export type FeatureFlags = typeof featureFlags;
