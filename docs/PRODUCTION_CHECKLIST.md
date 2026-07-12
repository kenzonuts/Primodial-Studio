# Production Hardening Checklist

Track launch hardening. Detailed audits live under [docs/launch/](./launch/README.md).

## Quality

- [x] `pnpm lint` — zero errors (verified 2026-07-12)
- [x] `pnpm typecheck` — zero errors (verified 2026-07-12)
- [x] `pnpm test:unit` — green (17/17)
- [ ] `pnpm test:e2e` — green (install Playwright browsers; run on preview)
- [x] `pnpm build` — green on release candidate (verified 2026-07-12 locally)
- [x] No leftover `console.log` policy — use `logger`
- [ ] `pnpm audit --prod` — re-run at cutover (registry flaked during audit)

## SEO & a11y

- [x] Metadata + OG image routes present
- [x] `robots.txt` + `sitemap.xml` (real pages only)
- [x] JSON-LD on root + homepage FAQ/breadcrumb
- [x] Skip link + main landmark
- [ ] Cookie consent keyboard pass on preview
- [ ] Live Rich Results / social debugger on prod URL

## Security

- [x] Security headers (CSP, HSTS, XFO, Referrer-Policy, Permissions-Policy)
- [x] `/admin` blocked in robots
- [x] Secrets via env — `.env.example` documented
- [x] Forms sanitized (`src/utils/sanitize.ts`)
- [ ] Rate limiting on contact/newsletter (Upstash or equivalent)

## Performance

- [ ] Lighthouse Performance ≥ 95 (prod URL)
- [x] Fonts via `next/font`
- [x] Image pipeline via `next/image` where used
- [ ] Bundle report reviewed (`pnpm analyze`) on main

## Observability

- [x] `/api/health`
- [ ] Vercel Analytics / Speed Insights confirmed receiving prod traffic
- [ ] Sentry DSN + flag when ready
- [x] Error pages (`error`, `global-error`, `not-found`)

## Routing / IA (launch)

- [x] Nav/footer use live homepage sections (`HOME_SECTIONS`)
- [x] Reserved routes redirect to sections (`SectionRedirect`)
- [x] Legal pages `/privacy`, `/terms`
- [x] Dynamic sitemap gated until detail pages exist

## Ops

- [ ] Backup strategy reviewed if Payload DB enabled
- [ ] Rollback path tested once on Vercel
- [ ] Staging/preview env parity checked
- [ ] Release workflow green before major cutover
