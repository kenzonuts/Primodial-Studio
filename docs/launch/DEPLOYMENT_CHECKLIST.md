# Deployment Checklist

Companion to [docs/DEPLOYMENT.md](../DEPLOYMENT.md).

## GitHub

- [ ] Default branch protected (`main`)
- [ ] Required checks: lint, typecheck, unit, build
- [ ] Secrets only in GitHub Actions / Vercel — not in repo
- [ ] Conventional Commits + Husky enabled locally

## Vercel

- [ ] Framework: Next.js
- [ ] Install: `pnpm install`
- [ ] Build: `pnpm build`
- [ ] Node version aligned with project (20+)
- [ ] Preview deployments on PRs
- [ ] Production deploys from `main` only
- [ ] Environment variables set for Preview + Production
- [ ] `NEXT_PUBLIC_SITE_URL` differs if preview should not self-canonical to prod (optional)

## Domain & HTTPS

- [ ] Apex + `www` strategy decided (redirect one → canonical)
- [ ] DNS configured; certificate Active
- [ ] HSTS observed on responses

## Caching & compression

- [ ] Vercel CDN serving static assets (`_next/static`)
- [ ] `next/image` optimization enabled (default)
- [ ] No accidental `Cache-Control: no-store` on marketing HTML unless required

## Health & rollback

- [ ] Monitor `GET /api/health`
- [ ] Document rollback: Vercel → previous deployment → Promote
- [ ] On-call owner for first 48 hours

## Smoke after each production deploy

```bash
curl -fsS https://<domain>/api/health
curl -fsS https://<domain>/robots.txt | head
curl -fsS https://<domain>/sitemap.xml | head
curl -fsS -o /dev/null -w "%{http_code}\n" https://<domain>/
curl -fsS -o /dev/null -w "%{http_code}\n" https://<domain>/privacy
```
