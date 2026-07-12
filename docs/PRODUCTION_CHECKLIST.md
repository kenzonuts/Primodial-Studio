# Production Hardening Checklist

## Quality

- [ ] `pnpm lint` — zero errors
- [ ] `pnpm typecheck` — zero errors
- [ ] `pnpm test:unit` — green
- [ ] `pnpm test:e2e` — green
- [ ] `pnpm build` — green
- [ ] No leftover `console.log` in application paths (use `logger`)
- [ ] No unused deps (review with `pnpm why` / knip periodically)

## SEO & a11y

- [ ] Metadata + OG image render (`/opengraph-image`, `/api/og`)
- [ ] `robots.txt` + `sitemap.xml` reachable
- [ ] JSON-LD present on homepage
- [ ] Skip link + main landmark
- [ ] Cookie consent keyboard accessible

## Security

- [ ] Security headers verified (CSP, HSTS, XFO, Referrer-Policy)
- [ ] `/admin` blocked in robots
- [ ] Secrets only in Vercel/env — never committed
- [ ] Forms sanitized (`src/utils/sanitize.ts`)
- [ ] Rate limiting plan documented for contact/newsletter (Upstash ready)

## Performance

- [ ] Lighthouse Performance ≥ 95 (prod URL)
- [ ] LCP prioritized for hero
- [ ] Images via `next/image` (AVIF/WebP)
- [ ] Fonts via `next/font` (subset + swap)
- [ ] Bundle report reviewed (`pnpm analyze`)

## Observability

- [ ] `/api/health` monitored
- [ ] Vercel Analytics / Speed Insights enabled as needed
- [ ] Sentry DSN + flag when ready
- [ ] Error pages (`error`, `global-error`, `not-found`) verified

## Ops

- [ ] Backup strategy reviewed (`src/config/backup.ts`)
- [ ] Rollback path tested once
- [ ] Staging/preview env parity checked
- [ ] Release workflow green before major cutover
