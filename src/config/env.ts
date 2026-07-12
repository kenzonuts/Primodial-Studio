import { z } from "zod";

/**
 * Typed environment validation — fail fast in production, soft-warn in development.
 */

const serverSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  PAYLOAD_SECRET: z.string().min(8).optional(),
  DATABASE_URI: z.string().optional(),
  CMS_PROVIDER: z
    .enum(["static", "payload", "sanity", "contentful", "strapi"])
    .default("static"),
  CMS_REVALIDATE_SECONDS: z.coerce.number().positive().default(60),
  SENTRY_ORG: z.string().optional(),
  SENTRY_PROJECT: z.string().optional(),
  OTEL_EXPORTER_OTLP_ENDPOINT: z.string().optional(),
  VERCEL_ENV: z.enum(["development", "preview", "production"]).optional(),
  VERCEL_URL: z.string().optional(),
});

const clientSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000"),
  NEXT_PUBLIC_COOKIE_CONSENT: z.string().optional(),
  NEXT_PUBLIC_ANALYTICS_VERCEL: z.string().optional(),
  NEXT_PUBLIC_ANALYTICS_SPEED_INSIGHTS: z.string().optional(),
  NEXT_PUBLIC_ANALYTICS_GA4: z.string().optional(),
  NEXT_PUBLIC_ANALYTICS_GTM: z.string().optional(),
  NEXT_PUBLIC_ANALYTICS_PLAUSIBLE: z.string().optional(),
  NEXT_PUBLIC_ANALYTICS_CLARITY: z.string().optional(),
  NEXT_PUBLIC_GA4_MEASUREMENT_ID: z.string().optional(),
  NEXT_PUBLIC_GTM_ID: z.string().optional(),
  NEXT_PUBLIC_PLAUSIBLE_DOMAIN: z.string().optional(),
  NEXT_PUBLIC_CLARITY_ID: z.string().optional(),
  NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: z.string().optional(),
  NEXT_PUBLIC_BING_SITE_VERIFICATION: z.string().optional(),
  NEXT_PUBLIC_TWITTER_HANDLE: z.string().optional(),
  NEXT_PUBLIC_SENTRY_DSN: z.string().optional(),
  NEXT_PUBLIC_LOGROCKET_APP_ID: z.string().optional(),
  NEXT_PUBLIC_REPORT_WEB_VITALS: z.string().optional(),
  NEXT_PUBLIC_MONITORING_SENTRY: z.string().optional(),
  NEXT_PUBLIC_MONITORING_LOGROCKET: z.string().optional(),
  NEXT_PUBLIC_WEB_VITALS_ENDPOINT: z.string().optional(),
});

export type ServerEnv = z.infer<typeof serverSchema>;
export type ClientEnv = z.infer<typeof clientSchema>;

function formatZodError(error: z.ZodError): string {
  return error.issues
    .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
    .join("\n");
}

function parseEnv<T extends z.ZodType>(
  schema: T,
  raw: Record<string, unknown>,
  label: string,
): z.infer<T> {
  const cleaned = Object.fromEntries(
    Object.entries(raw).filter(
      ([, value]) => value !== undefined && value !== "",
    ),
  );
  const result = schema.safeParse(cleaned);
  if (result.success) return result.data;

  const message = `Invalid ${label} environment:\n${formatZodError(result.error)}`;
  if (process.env.NODE_ENV === "production") {
    throw new Error(message);
  }
  console.warn(message);
  return schema.parse({});
}

const serverEnv = parseEnv(
  serverSchema,
  {
    NODE_ENV: process.env.NODE_ENV,
    PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
    DATABASE_URI: process.env.DATABASE_URI,
    CMS_PROVIDER: process.env.CMS_PROVIDER,
    CMS_REVALIDATE_SECONDS: process.env.CMS_REVALIDATE_SECONDS,
    SENTRY_ORG: process.env.SENTRY_ORG,
    SENTRY_PROJECT: process.env.SENTRY_PROJECT,
    OTEL_EXPORTER_OTLP_ENDPOINT: process.env.OTEL_EXPORTER_OTLP_ENDPOINT,
    VERCEL_ENV: process.env.VERCEL_ENV,
    VERCEL_URL: process.env.VERCEL_URL,
  },
  "server",
);

const clientEnv = parseEnv(
  clientSchema,
  {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_COOKIE_CONSENT: process.env.NEXT_PUBLIC_COOKIE_CONSENT,
    NEXT_PUBLIC_ANALYTICS_VERCEL: process.env.NEXT_PUBLIC_ANALYTICS_VERCEL,
    NEXT_PUBLIC_ANALYTICS_SPEED_INSIGHTS:
      process.env.NEXT_PUBLIC_ANALYTICS_SPEED_INSIGHTS,
    NEXT_PUBLIC_ANALYTICS_GA4: process.env.NEXT_PUBLIC_ANALYTICS_GA4,
    NEXT_PUBLIC_ANALYTICS_GTM: process.env.NEXT_PUBLIC_ANALYTICS_GTM,
    NEXT_PUBLIC_ANALYTICS_PLAUSIBLE:
      process.env.NEXT_PUBLIC_ANALYTICS_PLAUSIBLE,
    NEXT_PUBLIC_ANALYTICS_CLARITY: process.env.NEXT_PUBLIC_ANALYTICS_CLARITY,
    NEXT_PUBLIC_GA4_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID,
    NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
    NEXT_PUBLIC_PLAUSIBLE_DOMAIN: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN,
    NEXT_PUBLIC_CLARITY_ID: process.env.NEXT_PUBLIC_CLARITY_ID,
    NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    NEXT_PUBLIC_BING_SITE_VERIFICATION:
      process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
    NEXT_PUBLIC_TWITTER_HANDLE: process.env.NEXT_PUBLIC_TWITTER_HANDLE,
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
    NEXT_PUBLIC_LOGROCKET_APP_ID: process.env.NEXT_PUBLIC_LOGROCKET_APP_ID,
    NEXT_PUBLIC_REPORT_WEB_VITALS: process.env.NEXT_PUBLIC_REPORT_WEB_VITALS,
    NEXT_PUBLIC_MONITORING_SENTRY: process.env.NEXT_PUBLIC_MONITORING_SENTRY,
    NEXT_PUBLIC_MONITORING_LOGROCKET:
      process.env.NEXT_PUBLIC_MONITORING_LOGROCKET,
    NEXT_PUBLIC_WEB_VITALS_ENDPOINT:
      process.env.NEXT_PUBLIC_WEB_VITALS_ENDPOINT,
  },
  "client",
);

export const env = {
  ...serverEnv,
  ...clientEnv,
  isDev: serverEnv.NODE_ENV === "development",
  isProd: serverEnv.NODE_ENV === "production",
  isTest: serverEnv.NODE_ENV === "test",
  isPreview: serverEnv.VERCEL_ENV === "preview",
  appEnv:
    serverEnv.VERCEL_ENV ??
    (serverEnv.NODE_ENV === "production" ? "production" : "development"),
} as const;

export type AppEnv = typeof env;
