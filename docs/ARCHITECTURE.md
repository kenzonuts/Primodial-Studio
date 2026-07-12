# Architecture

Primordial Studio website — feature-based Next.js App Router platform.

## Layers

```
UI (features/components)
  → services/content
    → repositories
      → adapters/cms (static | payload | future CMS)
```

UI never imports Payload or third-party CMS SDKs directly.

## Key domains

| Domain       | Path                | Responsibility                         |
| ------------ | ------------------- | -------------------------------------- |
| App Router   | `src/app/`          | Routes, SEO endpoints, API, admin      |
| Features     | `src/features/`     | Homepage sections & domain modules     |
| Components   | `src/components/`   | Shared UI, layout, navigation, consent |
| CMS          | `src/cms/`          | Payload collections, globals, config   |
| Adapters     | `src/adapters/`     | CMS provider implementations           |
| Repositories | `src/repositories/` | Cached data access                     |
| Services     | `src/services/`     | Application use-cases                  |
| Config       | `src/config/`       | Env, security, analytics, flags        |
| Analytics    | `src/analytics/`    | Consent, tracking, providers           |
| Monitoring   | `src/monitoring/`   | Errors, boundaries                     |
| Performance  | `src/performance/`  | Web vitals, hints                      |
| Motion       | `src/motion/`       | GSAP/Framer helpers                    |
| Lib          | `src/lib/`          | SEO, fonts, logger, utils              |

## Environments

| Name        | How                               | Notes                 |
| ----------- | --------------------------------- | --------------------- |
| Development | `pnpm dev`                        | Static CMS by default |
| Preview     | Vercel PR deploy                  | `VERCEL_ENV=preview`  |
| Staging     | Vercel staging project (optional) | Mirror prod env       |
| Production  | Vercel production                 | Strict env validation |

Use `src/config/env.ts` for typed env access.

## Security

- Headers via `src/middleware.ts` + `next.config.ts`
- Soft CSP for `/admin` and Payload API
- Input sanitization in contact/newsletter APIs
- Cookie consent gates analytics scripts

## Observability

- `/api/health` — uptime probe
- `logger` — structured logs
- `reportError` — Sentry/LogRocket ready
- Vercel Analytics + Speed Insights (feature-flagged)

## Backup / DR

See `src/config/backup.ts` for database, media, config, and rollback contracts.
