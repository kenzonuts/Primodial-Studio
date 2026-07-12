# Deployment Guide

## Prerequisites

- Node.js 20+
- pnpm 10.14+
- Vercel project linked to this repository

## Local production build

```bash
pnpm install
cp .env.example .env.local
# set PAYLOAD_SECRET to a long random string
pnpm ci          # lint + typecheck + unit + build
pnpm start
```

Health check: [http://localhost:3000/api/health](http://localhost:3000/api/health)

## Vercel

1. Import the Git repository in Vercel.
2. Framework preset: **Next.js**.
3. Build command: `pnpm build`
4. Install command: `pnpm install`
5. Output: default Next.js output (no override).
6. Copy environment variables from `.env.example`.

### Required production env

| Variable               | Purpose                                        |
| ---------------------- | ---------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL                             |
| `PAYLOAD_SECRET`       | Payload encryption secret (≥8 chars)           |
| `CMS_PROVIDER`         | `static` or `payload`                          |
| `DATABASE_URI`         | SQLite path or Postgres URL when using Payload |

### Recommended

| Variable                               | Purpose                   |
| -------------------------------------- | ------------------------- |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Search Console            |
| Analytics IDs + matching feature flags | GA4 / Plausible / Clarity |
| `NEXT_PUBLIC_SENTRY_DSN` + flag        | Error monitoring          |

## CI/CD

GitHub Actions:

| Workflow                             | Trigger          | Purpose                       |
| ------------------------------------ | ---------------- | ----------------------------- |
| `.github/workflows/pull-request.yml` | PR               | Lint, types, unit, build, e2e |
| `.github/workflows/main.yml`         | push to main     | Full gates + optional analyze |
| `.github/workflows/release.yml`      | release / manual | Release verification          |

Vercel deploys previews on PRs and production on main when the Vercel Git integration is enabled. Promote only when Actions are green.

## Rollback

1. Vercel Dashboard → Deployments → previous production → **Promote**
2. Or Instant Rollback on the current production deployment

## CMS admin

1. Set `CMS_PROVIDER=payload`
2. Deploy / run locally
3. Open `/admin` and create the first user
4. Empty collections fall back to static seed content

## Bundle analysis

```bash
pnpm analyze
```

Opens an interactive report for JS chunks (set `ANALYZE=true`).
