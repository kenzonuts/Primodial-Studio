# QA Checklist

## Functional

- [ ] Hero CTA scrolls/navigates to start-project / contact as designed
- [ ] Primary nav: Home, About, Services, Portfolio, Technology, Contact
- [ ] Mega menu opens/closes; Escape closes; focus returns
- [ ] Mobile nav: open, navigate, close; body scroll locked while open
- [ ] Services cards / portfolio cards / section CTAs do not 404
- [ ] FAQ accordion keyboard operable
- [ ] Contact form: empty submit errors; invalid email; success state; loading state
- [ ] Newsletter: invalid email; success; duplicate handling if applicable
- [ ] Footer links: company, resources, legal
- [ ] Planned links (Blog/Careers) not exposed as live 404s
- [ ] Privacy + Terms readable
- [ ] Back-to-top appears after scroll and returns to top
- [ ] Theme toggle (if enabled) does not break layout
- [ ] Loading screen dismisses; site usable if JS slow
- [ ] `/about`, `/services`, `/work`, `/contact`, `/process`, `/technology` redirect to sections
- [ ] Unknown path → branded 404 → Home

## Visual (no redesign — regression only)

- [ ] Typography hierarchy intact per section
- [ ] Spacing rhythm consistent with design system
- [ ] Colors/contrast readable in dark (default) and light if toggled
- [ ] No unintended overflow-x on any viewport
- [ ] Images/placeholders do not collapse layout
- [ ] Animation consistency: no stuck transforms / invisible content after motion

## API

- [ ] `POST /api/contact` rejects invalid payloads
- [ ] `POST /api/newsletter` rejects invalid email
- [ ] `GET /api/health` 200 with expected shape
- [ ] No stack traces leaked to clients in production

## Regression commands

```bash
pnpm lint
pnpm typecheck
pnpm test:unit
pnpm format:check
pnpm build
pnpm test:e2e   # when browsers installed
```
