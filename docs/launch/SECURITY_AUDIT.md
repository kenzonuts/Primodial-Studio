# Security Audit

## Headers

Applied via `src/middleware.ts` + `src/config/security.ts` (and next.config where mirrored):

| Header                           | Intent                                 | Status |
| -------------------------------- | -------------------------------------- | ------ |
| `Strict-Transport-Security`      | HTTPS enforcement                      | OK     |
| `X-Frame-Options: DENY`          | Clickjacking                           | OK     |
| `X-Content-Type-Options`         | MIME sniffing                          | OK     |
| `Referrer-Policy`                | Leak reduction                         | OK     |
| `Permissions-Policy`             | Disable sensitive APIs                 | OK     |
| `Content-Security-Policy`        | Default lockdown + analytics allowlist | OK*    |
| Softer CSP for `/admin` + `/api` | Payload compatibility                  | OK     |

\* Re-validate CSP when enabling new third-party scripts (GTM, Clarity, etc.).

## Application

| Control                 | Status      | Notes                                       |
| ----------------------- | ----------- | ------------------------------------------- |
| Env validation          | OK          | `src/config/env.ts`                         |
| Secrets not in git      | OK*         | `.env*` gitignored; never commit            |
| Contact sanitization    | OK          | `sanitizeText` / `sanitizeEmail`            |
| Newsletter sanitization | OK          | Same utils                                  |
| Admin robots disallow   | OK          | `/admin/` in robots                         |
| Rate limiting           | **Pending** | Prepare Upstash / edge limiter before abuse |
| Dependency audit        | **Retry**   | `pnpm audit` failed (network) — re-run      |

## Environment hygiene

- [ ] No production secrets in client `NEXT_PUBLIC_*` beyond intended IDs
- [ ] Distinct Preview vs Production secrets where applicable
- [ ] Payload secret ≥ 32 random bytes recommended
- [ ] Database file / cloud credentials not publicly downloadable

## Forms

- Client + server validation for contact and newsletter
- No raw HTML stored from user input without sanitization
- Error responses do not echo sensitive internals

## Pre-launch security commands

```bash
pnpm audit --prod
curl -sI https://<prod-domain> | grep -iE 'strict-transport|content-security|x-frame|referrer|permissions'
```

## Residual risk acceptance

Until rate limiting ships, contact endpoints are a soft abuse surface — monitor Vercel logs and enable limiter in week 1 if traffic warrants.
