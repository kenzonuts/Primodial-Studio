# Accessibility Audit (WCAG 2.2 AA)

## Implemented (code-verified)

| Criterion               | Evidence                                                   | Status |
| ----------------------- | ---------------------------------------------------------- | ------ |
| Skip navigation         | Skip link → `#main-content` in root layout                 | OK     |
| Main landmark           | `<main id="main-content">` on homepage                     | OK     |
| Language                | `<html lang="en">`                                         | OK     |
| Focus styles            | Focus-visible rings on interactive UI primitives           | OK*    |
| Reduced motion          | `usePrefersReducedMotion` + CSS media query                | OK     |
| Form labels / errors    | Contact + newsletter: labels, `aria-invalid`, live regions | OK     |
| Decorative content      | `aria-hidden` on ambient layers                            | OK     |
| Filter / tabs semantics | Portfolio chips `aria-label` / `aria-selected`             | OK     |
| Loading affordance      | Loading screen `aria-busy` / progress valuetext            | OK     |
| Custom cursor           | `aria-hidden`; fine pointer only                           | OK     |

\* Full keyboard matrix must be manually confirmed on preview.

## Manual test script (required)

1. **Keyboard only:** Tab through header → mega menu → sections → forms → footer.
2. **Focus order** matches visual order; no focus trap except intentional dialogs/menus.
3. **Escape** closes mobile nav / menus.
4. **Screen reader** (VoiceOver or NVDA): landmarks, skip link, FAQ, form errors announced.
5. **Contrast:** text/secondary on dark backgrounds — spot-check hero, footer, muted labels.
6. **Zoom 200%:** content usable, no loss of functionality.
7. **prefers-reduced-motion: reduce:** no essential content hidden behind motion.

## Known watch items

- Mega menu keyboard patterns must match disclosed disclosure / menubar expectations.
- Consent banner must be dismissible and focusable without blocking skip link.
- Color contrast on low-emphasis secondary text — validate against AA (4.5:1 body, 3:1 large).

## Sign-off

- [ ] Keyboard pass signed
- [ ] Screen reader pass signed
- [ ] Contrast spot-check signed
- [ ] Reduced-motion pass signed

**Target:** WCAG 2.2 Level AA for public marketing pages.
