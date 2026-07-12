# Launch Checklist

Use this as the official cutover runbook. Check every box before announcing the site publicly.

## T-7 days

- [ ] Confirm production domain DNS (A/AAAA or CNAME → Vercel)
- [ ] Create Vercel project; link GitHub repo
- [ ] Mirror `.env.example` into Vercel **Preview** and **Production**
- [ ] Set `NEXT_PUBLIC_SITE_URL` to canonical HTTPS URL
- [ ] `CMS_PROVIDER=static` for launch (or Payload with seeded DB + secret)
- [ ] Rotate any placeholder `PAYLOAD_SECRET`
- [ ] Verify `/api/health` on a preview deployment
- [ ] Legal copy reviewed (Privacy + Terms)
- [ ] Contact inbox / CMS destination verified for form submissions
- [ ] Re-run `pnpm audit --prod` and triage

## T-2 days

- [ ] `pnpm ci` green on release candidate
- [ ] Playwright browsers installed; smoke e2e on preview
- [ ] Manual keyboard pass (Tab, Enter, Escape on nav/menus/forms)
- [ ] Mobile + desktop visual smoke on preview URL
- [ ] OG/Twitter card debugger on preview (or prod after cutover)
- [ ] Cookie consent appears when flag enabled; analytics gated
- [ ] 404 page reachable (`/this-page-does-not-exist`)
- [ ] Security headers checked (securityheaders.com or `curl -I`)

## T-0 cutover

- [ ] Merge to `main` (or promote production deployment)
- [ ] Custom domain attached; HTTPS certificate issued
- [ ] Production `/api/health` returns ok
- [ ] Homepage loads; all primary nav anchors scroll correctly
- [ ] Contact form success path tested once with real email
- [ ] Newsletter subscribe tested once
- [ ] `https://<domain>/robots.txt` and `/sitemap.xml` valid
- [ ] Submit sitemap in Google Search Console (+ Bing if used)
- [ ] Enable Vercel Analytics / Speed Insights as planned
- [ ] Announce internally; monitor errors for 60 minutes

## T+1 day

- [ ] Review Vercel Analytics + Speed Insights
- [ ] Spot-check Core Web Vitals
- [ ] Confirm no spike in 404s for intentional routes
- [ ] File tickets for any P1/P2 from live traffic
- [ ] Tag git release `v0.1.0` (or current version)

## Abort / rollback

1. In Vercel → Deployments → promote previous Production deployment.
2. If DNS issue: revert DNS TTL-safe change.
3. Communicate status; do not hot-patch design on launch day unless P0.
