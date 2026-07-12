# Primordial Studio

Official website for **Primordial Studio** — a Creative Technology Studio.

> Building Digital Products That Matter.

## Stack

| Layer           | Choice                   |
| --------------- | ------------------------ |
| Framework       | Next.js 15 (App Router)  |
| Language        | TypeScript (strict)      |
| Styling         | Tailwind CSS v4          |
| UI              | shadcn/ui                |
| Animation       | Framer Motion + GSAP     |
| State           | Zustand                  |
| Theme           | next-themes (dark-first) |
| Font            | Plus Jakarta Sans        |
| Package manager | pnpm                     |
| Deploy          | Vercel                   |

## Architecture

Feature-based structure under `src/`:

```
src/
  app/           # Routes, layouts, SEO endpoints
  components/    # Shared UI (ui/, layout/, providers/, shared/)
  features/      # Domain features (isolated modules)
  hooks/         # Reusable React hooks
  lib/           # Framework utilities (seo, fonts, motion, cn)
  stores/        # Zustand stores
  styles/        # Global CSS + design tokens
  constants/     # Site + design token constants
  types/         # Shared TypeScript types
  utils/         # Pure helpers
```

## Design system

See [docs/DESIGN_SYSTEM.md](./docs/DESIGN_SYSTEM.md) for tokens, components, and best practices.

Reference compositions live in `src/design-system/examples/` (not routed pages).

## Getting started

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command          | Description                |
| ---------------- | -------------------------- |
| `pnpm dev`       | Start Turbopack dev server |
| `pnpm build`     | Production build           |
| `pnpm start`     | Serve production build     |
| `pnpm lint`      | ESLint                     |
| `pnpm format`    | Prettier write             |
| `pnpm typecheck` | TypeScript `--noEmit`      |

## Conventions

- **Commits**: Conventional Commits (`feat:`, `fix:`, `chore:`, …)
- **Hooks**: Husky runs `lint-staged` on commit + commitlint on message
- **Imports**: Path aliases via `@/*` (see `tsconfig.json`)
- **UI**: Prefer shadcn primitives in `components/ui`; compose features in `features/`

## Environment

| Variable               | Purpose                                      |
| ---------------------- | -------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for metadata, sitemap, OG |

## License

Proprietary — Primordial Studio. All rights reserved.
