# Primordial Studio

Official website for **Primordial Studio** — a Creative Technology Studio.

> Building Digital Products That Matter.

## Stack

| Layer           | Choice                          |
| --------------- | ------------------------------- |
| Framework       | Next.js 15 (App Router)         |
| Language        | TypeScript (strict)             |
| Styling         | Tailwind CSS v4                 |
| UI              | shadcn/ui                       |
| Animation       | Framer Motion + GSAP            |
| CMS             | Payload 3 (SQLite / adaptered)  |
| State           | Zustand                         |
| Theme           | next-themes (dark-first)        |
| Font            | Plus Jakarta Sans (`next/font`) |
| Testing         | Vitest + Playwright             |
| Package manager | pnpm                            |
| Deploy          | Vercel                          |

## Architecture

Feature-based structure under `src/`:

```
src/
  app/           # Routes, layouts, SEO, API, health, OG
  components/    # Shared UI, layout, navigation, consent
  features/      # Domain features (homepage sections)
  cms/           # Payload collections + globals
  adapters/      # CMS providers (static | payload | …)
  repositories/  # Cached data access
  services/      # Application services
  config/        # Env, security, analytics, flags
  analytics/     # Consent + tracking
  monitoring/    # Errors + boundaries
  performance/   # Web vitals + hints
  hooks/         # Reusable React hooks
  lib/           # SEO, fonts, logger, utils
  stores/        # Zustand stores
  styles/        # Global CSS + design tokens
  constants/     # Site constants
  types/         # Shared TypeScript types
  utils/         # Pure helpers
```

Full map: [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md)

## Documentation

| Doc                                                            | Purpose                                                   |
| -------------------------------------------------------------- | --------------------------------------------------------- |
| [Developer handover](./docs/DEVELOPER_HANDOVER.md)             | Onboarding without tribal knowledge                       |
| [Launch pack](./docs/launch/README.md)                         | Production audit + launch/QA/SEO/a11y/security checklists |
| [Architecture](./docs/ARCHITECTURE.md)                         | Layers, domains, environments                             |
| [Deployment](./docs/DEPLOYMENT.md)                             | Vercel, CI/CD, rollback                                   |
| [Deployment checklist](./docs/launch/DEPLOYMENT_CHECKLIST.md)  | Cutover smoke checks                                      |
| [Maintenance](./docs/MAINTENANCE.md)                           | Ops cadence + dependency hygiene                          |
| [Post-launch](./docs/POST_LAUNCH.md)                           | First 30 days                                             |
| [Roadmap](./docs/ROADMAP.md)                                   | Phase 1–5 product plan                                    |
| [Troubleshooting](./docs/TROUBLESHOOTING.md)                   | Common failures                                           |
| [Coding standards](./docs/CODING_STANDARDS.md)                 | Engineering rules                                         |
| [Contributing](./docs/CONTRIBUTING.md)                         | PR workflow                                               |
| [Production checklist](./docs/PRODUCTION_CHECKLIST.md)         | Launch hardening tracker                                  |
| [Release notes](./docs/RELEASE_NOTES.md)                       | v0.1.0 launch candidate                                   |
| [Versioning](./docs/VERSIONING.md)                             | SemVer policy                                             |
| [Design system](./docs/DESIGN_SYSTEM.md)                       | Tokens & components                                       |
| [Information architecture](./docs/INFORMATION_ARCHITECTURE.md) | Sitemap & story                                           |
| [Layout system](./docs/LAYOUT_SYSTEM.md)                       | Grid & sections                                           |

## Getting started

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Admin (when `CMS_PROVIDER=payload`): [http://localhost:3000/admin](http://localhost:3000/admin)

## Scripts

| Command          | Description                      |
| ---------------- | -------------------------------- |
| `pnpm dev`       | Turbopack dev server             |
| `pnpm build`     | Production build                 |
| `pnpm start`     | Serve production build           |
| `pnpm lint`      | ESLint                           |
| `pnpm format`    | Prettier write                   |
| `pnpm typecheck` | TypeScript `--noEmit`            |
| `pnpm test:unit` | Vitest unit tests                |
| `pnpm test:e2e`  | Playwright end-to-end            |
| `pnpm analyze`   | Bundle analyzer (`ANALYZE=true`) |
| `pnpm ci`        | Lint + typecheck + unit + build  |

## CI/CD

GitHub Actions run on PRs, `main`, and releases:

- Lint / format / typecheck
- Unit + e2e tests
- Production build
- Optional bundle analysis on main

See [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md).

## Conventions

- **Commits**: Conventional Commits (`feat:`, `fix:`, `chore:`, …)
- **Hooks**: Husky → lint-staged + commitlint
- **Imports**: `@/*` path aliases
- **Logging**: `@/lib/logger` (no raw `console.log` in app code)
- **Env**: `@/config/env` typed validation
- **UI**: Prefer shadcn in `components/ui`; compose in `features/`

## Environment

See `.env.example` for the full list. Minimum:

| Variable               | Purpose                         |
| ---------------------- | ------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL (SEO / OG)        |
| `CMS_PROVIDER`         | `static` (default) or `payload` |
| `PAYLOAD_SECRET`       | Required when using Payload     |

## License

Proprietary — Primordial Studio. All rights reserved.
