# Post-Launch Plan

## Day 0–1

- [ ] Watch Vercel deployment + function error rates
- [ ] Confirm Analytics / Speed Insights receiving data
- [ ] Spot-check forms (one real contact + one newsletter)
- [ ] Capture baseline Lighthouse (mobile + desktop) on production URL
- [ ] Submit sitemap; request indexing for `/`
- [ ] Announce internal #launch channel with rollback owner

## Week 1

- [ ] Review Search Console: coverage, enhancements (FAQ)
- [ ] Triage 404 referrers; add redirects only if real traffic
- [ ] Enable Sentry (or equivalent) if not already
- [ ] Decide rate-limit timeline for `/api/contact` + `/api/newsletter`
- [ ] Replace any critical placeholder portfolio media
- [ ] Cross-browser smoke (Chrome, Firefox, Safari, Edge)

## Week 2–4

- [ ] CWV regression review (LCP, CLS, INP)
- [ ] Content accuracy pass with stakeholders
- [ ] Dependency patch PR
- [ ] Plan Phase 2 pages (services/work detail) from roadmap
- [ ] Backup restore drill if Payload DB is in use

## Operational checklist (ongoing)

| System            | Owner | Status |
| ----------------- | ----- | ------ |
| Analytics         |       | [ ]    |
| Search Console    |       | [ ]    |
| Sitemap submitted |       | [ ]    |
| Error monitoring  |       | [ ]    |
| Performance mon.  |       | [ ]    |
| Backup strategy   |       | [ ]    |
| Update strategy   |       | [ ]    |
| Dependency maint. |       | [ ]    |
| Security updates  |       | [ ]    |

## Incident severity

| Sev | Example                               | Response             |
| --- | ------------------------------------- | -------------------- |
| P0  | Site down / forms broken globally     | Rollback immediately |
| P1  | Major section unusable / a11y blocker | Hotfix same day      |
| P2  | Visual regression / non-critical SEO  | Fix in next PR       |
| P3  | Copy / polish                         | Backlog              |
