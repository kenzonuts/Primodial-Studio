/**
 * Monitoring provider stubs — enable via feature flags + env when ready.
 */

export const monitoringConfig = {
  sentryDsn: process.env.NEXT_PUBLIC_SENTRY_DSN || "",
  sentryOrg: process.env.SENTRY_ORG || "",
  sentryProject: process.env.SENTRY_PROJECT || "",
  logRocketAppId: process.env.NEXT_PUBLIC_LOGROCKET_APP_ID || "",
  otelEndpoint: process.env.OTEL_EXPORTER_OTLP_ENDPOINT || "",
} as const;
