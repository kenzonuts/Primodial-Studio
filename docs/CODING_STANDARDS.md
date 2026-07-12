# Coding Standards

Companion to [CONTRIBUTING.md](./CONTRIBUTING.md). These rules keep the codebase enterprise-maintainable.

## Principles

1. **No drive-by redesigns** — match existing section and token patterns.
2. **Feature modules own UI** — shared primitives in `components/`; domain in `features/`.
3. **CMS isolation** — UI → services → repositories → adapters only.
4. **Typed boundaries** — public helpers and API payloads typed; Zod for env and forms where present.
5. **A11y by default** — labels, focus, reduced motion, semantic landmarks.
6. **Observable** — use `@/lib/logger`; never leak secrets to clients.

## Naming

- Components: `PascalCase` files matching export (`hero-section.tsx` → `HeroSection`).
- Hooks: `use-*.ts`.
- Constants: `SCREAMING_SNAKE` or domain `as const` objects.
- Routes: single source in `src/constants/routes.ts`.

## React

- Prefer Server Components by default; `"use client"` only for interactivity.
- Follow existing motion hooks; do not add `useMemo`/`useCallback` unless the codebase pattern requires it or profiling says so.
- Keep client bundles lean — lazy-load heavy visuals when already patterned.

## CSS / UI

- Use design tokens / Tailwind theme — no one-off hex sprawl.
- Do not introduce card chrome in hero or decorative card clutter.
- Respect layout system docs.

## Git

- Conventional Commits: `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `test:`, `perf:`.
- Small PRs; include preview QA notes for UI-affecting changes.

## Forbidden for launch branches

- Committing `.env`, credentials, or DB files.
- Expanding sitemap with redirect-only URLs.
- Disabling lint/security headers to “make it work.”
