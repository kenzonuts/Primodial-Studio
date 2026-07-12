# Troubleshooting Guide

## Build fails / disk full

```bash
rm -rf .next
pnpm store prune
pnpm install
pnpm build
```

Next + Payload builds are large; ensure adequate disk before `pnpm ci`.

## Type errors after pull

```bash
pnpm install
pnpm payload:types   # if Payload schema changed
pnpm typecheck
```

## Contact / newsletter API returns 400

- Check required fields and email format.
- Server sanitizes and truncates — overly long `description` is clipped then validated.
- Inspect Network tab payload; ensure `Content-Type: application/json`.

## Contact API 500

- CMS adapter / Payload DB connectivity.
- With `CMS_PROVIDER=static`, ensure static inbox adapter is implemented and not throwing.
- Check Vercel function logs; use `logger`, not client-visible stacks.

## Admin UI blank or CSP errors

- `/admin` uses a softer CSP in middleware.
- Confirm `PAYLOAD_SECRET` and `DATABASE_URI`.
- Hard-refresh; clear service workers if any.

## Smooth scroll / ScrollTrigger desync

- Lenis + GSAP Sync lives in smooth-scroll provider.
- Reproduce with reduced motion on/off.
- Avoid adding competing scroll libraries.

## Flash of wrong theme

- `suppressHydrationWarning` on `<html>`; next-themes handles class.
- Ensure no manual `localStorage` theme writes outside the provider.

## OG image wrong

- Confirm `NEXT_PUBLIC_SITE_URL`.
- Hit `/opengraph-image` and `/api/og` on the same deployment.
- Purge social debugger cache after fixes.

## Preview looks fine, production wrong

- Diff Preview vs Production env vars.
- Confirm production deployment is the commit you expect (Vercel → Deployments).

## Health check failing

`GET /api/health` — if down, treat as P0; rollback and inspect Node runtime logs.
