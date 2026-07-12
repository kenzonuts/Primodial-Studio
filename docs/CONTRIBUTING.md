# Contribution Guide

## Branching

1. Branch from `main`
2. Use Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, `test:`, `ci:`)
3. Open a PR — GitHub Actions must pass

## Local setup

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

## Quality commands

| Command          | Use                                  |
| ---------------- | ------------------------------------ |
| `pnpm lint`      | ESLint                               |
| `pnpm format`    | Prettier                             |
| `pnpm typecheck` | TypeScript                           |
| `pnpm test:unit` | Vitest                               |
| `pnpm test:e2e`  | Playwright (builds/serves as needed) |
| `pnpm ci`        | Lint + types + unit + build          |

Husky runs lint-staged + commitlint on commit.

## Coding standards

- **TypeScript strict** — no `any` unless justified and isolated
- **Path aliases** — `@/*` imports
- **Features** — keep section UI in `src/features/*`; shared primitives in `src/components`
- **CMS** — UI → services → repositories → adapters only
- **Logging** — use `logger` from `@/lib/logger` (no raw `console.log` in app code)
- **Env** — use `env` from `@/config/env`
- **UI** — do not redesign existing homepage sections without an explicit request

## Testing expectations

- Unit tests for utilities, contracts, and pure logic
- E2E smoke for navigation, forms, accessibility landmarks, 404
- Prefer `tests/utils/render.tsx` for RTL helpers

## PR checklist

- [ ] Lint / typecheck / unit pass locally
- [ ] No UI/layout/animation changes unless requested
- [ ] Env vars documented in `.env.example` when added
- [ ] Docs updated when architecture changes
