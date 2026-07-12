/**
 * Backup & disaster-recovery architecture notes (operational contract).
 * Implementation lives in hosting/infra — this module documents hooks.
 */

export const backupStrategy = {
  database: {
    provider: "sqlite-local | postgres-managed",
    cadence: "daily",
    retentionDays: 30,
    notes: [
      "Local SQLite: copy data/payload.db to encrypted object storage nightly.",
      "Production Postgres: enable provider PITR (Neon/Supabase/RDS).",
      "Verify restore quarterly with a staging drill.",
    ],
  },
  media: {
    path: "media/",
    cadence: "daily",
    notes: [
      "Sync uploads to S3/R2 with versioning.",
      "Keep CDN origin failover path documented.",
    ],
  },
  configuration: {
    sources: [".env.example", "Vercel env dashboard", "Payload globals"],
    notes: [
      "Never commit secrets.",
      "Export Vercel env as encrypted backup for DR.",
    ],
  },
  deployment: {
    rollback: "Vercel Instant Rollback / previous deployment promote",
    preview: "PR previews via Vercel Git integration",
  },
} as const;
