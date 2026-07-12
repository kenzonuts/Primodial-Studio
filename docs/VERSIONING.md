# Versioning Strategy

## Scheme

Semantic Versioning **MAJOR.MINOR.PATCH** (`package.json`).

| Bump  | When                                                            |
| ----- | --------------------------------------------------------------- |
| MAJOR | Breaking IA changes, forced migrations, incompatible CMS schema |
| MINOR | New user-facing pages/features (blog, case studies, portal)     |
| PATCH | Fixes, copy, dependency patches, docs, a11y/SEO fixes           |

Launch baseline: **`0.1.0`** (pre-1.0 while detail pages and portal are incomplete).  
Public marketing stability does **not** require 1.0; move to **`1.0.0`** when dedicated core pages + monitoring + rate limits are live and the audit is unconditional GO.

## Release process

1. PR with Conventional Commits.
2. CI green + preview QA.
3. Merge to `main` → Vercel production.
4. GitHub Release / tag `vX.Y.Z` with notes from [RELEASE_NOTES.md](./RELEASE_NOTES.md).
5. Update this file’s “current” line if process changes.

## Branching

- `main` — production
- `feat/*`, `fix/*` — short-lived
- Avoid long-lived forks; use feature flags for incomplete work
