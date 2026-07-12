# Developer Handover

This document is enough for a new engineer to operate and extend the Primordial Studio site **without tribal knowledge**.

## Product snapshot

- Public marketing site for **Primordial Studio** (“Building Digital Products That Matter.”).
- Launch shape: **rich homepage** (sections) + legal pages + reserved-route redirects.
- Dark-first premium aesthetic; **do not redesign** sections or the design system unless product explicitly requests it.

## Tech stack

| Layer       | Choice                                                   |
| ----------- | -------------------------------------------------------- |
| Framework   | Next.js 15 App Router (`15.4.11` pinned)                 |
| Language    | TypeScript strict                                        |
| Styling     | Tailwind CSS v4 + design tokens                          |
| UI          | shadcn/ui                                                |
| Motion      | Framer Motion + GSAP + Lenis                             |
| State       | Zustand                                                  |
| Theme       | next-themes                                              |
| CMS         | Payload 3 (optional) behind adapters; default **static** |
| Testing     | Vitest + Playwright                                      |
| Package mgr | pnpm                                                     |
| Deploy      | Vercel + GitHub Actions                                  |

## Environment setup

```bash
pnpm install
cp .env.example .env.local
# edit NEXT_PUBLIC_SITE_URL, secrets as needed
pnpm dev
```

- Site: http://localhost:3000
- Admin (Payload): http://localhost:3000/admin when `CMS_PROVIDER=payload`

## Folder structure (mental model)

```
src/
  app/            # Routes, SEO (robots/sitemap/OG), API, admin
  features/       # Homepage sections (primary product UI)
  components/     # Shared layout, navigation, forms, SEO, UI
  cms/            # Payload collections & globals
  adapters/cms/   # static | payload | future providers
  repositories/   # Data access + cache
  services/       # Use-cases (content, inbox)
  config/         # env, security, flags, backup
  analytics/      # Consent + providers
  monitoring/     # Boundaries, error reporting hooks
  performance/    # Web vitals, hints
  motion/ animations/ effects/  # Motion infrastructure
  constants/      # Routes, nav, site, tokens
  lib/            # SEO, fonts, logger
  hooks/ stores/ styles/ types/ utils/
```

UI **must not** import Payload SDK directly — go through services → repositories → adapters.

## Design system

- Tokens and guidance: [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md), [LAYOUT_SYSTEM.md](./LAYOUT_SYSTEM.md).
- Prefer existing section patterns and `components/ui`.
- Motion: gate with `usePrefersReducedMotion`.

## CMS

| Mode      | When                           | Behavior                        |
| --------- | ------------------------------ | ------------------------------- |
| `static`  | Default launch                 | Seeded content in code/adapters |
| `payload` | When editorial workflow needed | SQLite/Postgres + `/admin`      |

Collections include projects, services, posts, FAQs, media, contact requests, newsletter subscribers, etc. Empty Payload collections fall back to static seed where implemented.

## Routing reality (launch)

- Live content: `/`, `/privacy`, `/terms`.
- IA anchors: `/#about`, `/#services`, `/#portfolio`, … via `HOME_SECTIONS`.
- Reserved paths (`/about`, `/services`, `/work`, …) use `SectionRedirect` until real templates ship.
- Do not add thin URLs to the sitemap until pages render real content (`getDynamicSitemapEntries` currently returns `[]`).

## Testing

```bash
pnpm test:unit
pnpm test:e2e      # playwright install --with-deps once
pnpm ci            # lint + types + unit + build
```

## Monitoring & analytics

- Feature-flagged: Vercel Analytics, Speed Insights, GA4, GTM, Plausible, Clarity.
- Cookie consent gates non-essential trackers.
- Sentry/LogRocket behind flags — wire DSN for production.
- Health: `/api/health`.

## Coding standards

- Conventional Commits; Husky lint-staged + commitlint.
- `@/` imports; logger instead of `console.log`.
- Typed env via `@/config/env`.
- See [CONTRIBUTING.md](./CONTRIBUTING.md).

## Key docs index

| Doc                                                                    | Purpose                |
| ---------------------------------------------------------------------- | ---------------------- |
| [ARCHITECTURE.md](./ARCHITECTURE.md)                                   | Layers & environments  |
| [DEPLOYMENT.md](./DEPLOYMENT.md)                                       | Vercel / CI / rollback |
| [MAINTENANCE.md](./MAINTENANCE.md)                                     | Ops cadence            |
| [launch/FINAL_PRODUCTION_AUDIT.md](./launch/FINAL_PRODUCTION_AUDIT.md) | Launch verdict         |
| [ROADMAP.md](./ROADMAP.md)                                             | Future work            |
| [POST_LAUNCH.md](./POST_LAUNCH.md)                                     | First 30 days          |
| [VERSIONING.md](./VERSIONING.md)                                       | SemVer policy          |
| [RELEASE_NOTES.md](./RELEASE_NOTES.md)                                 | Launch notes           |

## Future roadmap (summary)

See [ROADMAP.md](./ROADMAP.md): dedicated pages, case studies, blog, i18n, auth portal, AI assistant, etc.
