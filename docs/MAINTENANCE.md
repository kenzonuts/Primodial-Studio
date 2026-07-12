# Maintenance Guide

## Cadence

| Cadence   | Tasks                                                                  |
| --------- | ---------------------------------------------------------------------- |
| Daily     | Skim Vercel logs / Analytics anomalies; health check uptime            |
| Weekly    | Dependency digest; CWV trend; Search Console coverage                  |
| Monthly   | `pnpm update` (minor/patch) in a PR; rotate review of security headers |
| Quarterly | Major dependency upgrades (Next, Payload, React); a11y re-audit        |
| Annually  | Legal page review; backup restore drill; roadmap re-prioritization     |

## Content updates

1. Prefer CMS (`CMS_PROVIDER=payload`) for projects, FAQs, testimonials when live.
2. With `static`, edit seeded constants under `src/features/home/sections/*/constants.ts` and content adapters.
3. Never edit production DB from a laptop without backup.

## Dependency maintenance

```bash
pnpm outdated
pnpm audit --prod
pnpm update
pnpm ci
```

Pin intentional majors (Next is pinned for Payload peer compatibility — see `package.json`).

## Security updates

- Apply critical CVEs within 72 hours.
- Re-test CSP after adding scripts.
- Rotate `PAYLOAD_SECRET` only with a planned maintenance window.

## Backup strategy

- Vercel deployments are immutable artifacts (instant rollback).
- If Payload SQLite/Postgres is used: follow `src/config/backup.ts` guidance; snapshot DB before migrations.
- Keep `.env` in a secrets manager (1Password / Vercel), not in git.

## Update strategy

1. Branch → PR → preview URL → QA checklist subset → merge.
2. Avoid Friday production releases for high-risk dependency bumps.
3. Feature flags (`src/config` / env) for analytics and monitoring.

## Troubleshooting (quick)

| Symptom              | Check                                                   |
| -------------------- | ------------------------------------------------------- |
| Blank page           | Browser console; `error.tsx` / Vercel function logs     |
| Forms fail           | `/api/contact` status; sanitize validation; CMS adapter |
| Wrong canonical / OG | `NEXT_PUBLIC_SITE_URL`                                  |
| Admin broken         | Soft CSP path; `PAYLOAD_SECRET`; DB URI                 |
| Motion jank          | Device GPU; reduced-motion; Lenis + ScrollTrigger sync  |
| Build OOM / disk     | Clear `.next`; `pnpm store prune`                       |

See also [Developer Handover](./DEVELOPER_HANDOVER.md) and [Post-Launch Plan](./POST_LAUNCH.md).
