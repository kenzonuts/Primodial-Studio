/**
 * Security headers for production — applied via next.config + middleware.
 */

export const securityConfig = {
  contentSecurityPolicy: {
    // Report-only friendly defaults; tighten as third-parties are enabled.
    directives: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://plausible.io https://www.clarity.ms https://vercel.live",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data:",
      "connect-src 'self' https://www.google-analytics.com https://plausible.io https://*.clarity.ms https://vitals.vercel-insights.com https://vercel.live",
      "frame-src 'self' https://www.googletagmanager.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
  permissionsPolicy: [
    "camera=()",
    "microphone=()",
    "geolocation=()",
    "interest-cohort=()",
    "payment=()",
  ].join(", "),
} as const;

export function buildSecurityHeaders(): { key: string; value: string }[] {
  return [
    { key: "X-DNS-Prefetch-Control", value: "on" },
    {
      key: "Strict-Transport-Security",
      value: "max-age=63072000; includeSubDomains; preload",
    },
    { key: "X-Frame-Options", value: "DENY" },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    { key: "Permissions-Policy", value: securityConfig.permissionsPolicy },
    { key: "X-XSS-Protection", value: "0" }, // Modern browsers use CSP; legacy header disabled
    {
      key: "Content-Security-Policy",
      value: securityConfig.contentSecurityPolicy.directives,
    },
  ];
}
