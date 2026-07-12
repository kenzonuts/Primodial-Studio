# Release Notes

## v0.1.0 — Public launch candidate (2026-07-12)

### Highlights

- Full homepage narrative: Hero → About → Services → Portfolio → Process → Technology → Why Us → FAQ → CTA → Contact → Footer
- Enterprise foundations: SEO metadata/JSON-LD, robots/sitemap, security headers, analytics consent, health endpoint, error boundaries
- CMS architecture: static default + Payload-ready adapters
- Legal pages: Privacy Policy, Terms of Service
- Launch hygiene: nav/footer use live section anchors; reserved routes redirect to sections; sitemap lists only real content pages

### Quality

- TypeScript strict, ESLint, Prettier, Vitest unit suite
- CI workflows for PR / main / release
- Accessibility foundations: skip link, landmarks, reduced motion, form ARIA

### Known limitations

- Service and case-study **detail templates** not yet shipped (redirects/anchors)
- Live Lighthouse scores must be measured on production URL
- API rate limiting and Sentry wiring are post-launch hardening items
- `pnpm audit` may need a clean network run at cutover

### Upgrade / deploy notes

1. Set env from `.env.example` on Vercel.
2. Prefer `CMS_PROVIDER=static` unless Payload is provisioned.
3. Follow [launch/LAUNCH_CHECKLIST.md](./launch/LAUNCH_CHECKLIST.md).
