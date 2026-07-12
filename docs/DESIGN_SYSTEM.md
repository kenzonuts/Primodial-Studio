# Primordial Studio Design System

Official design language for Primordial Studio.

Comparable quality bar: Apple · Linear · Stripe · Vercel · Framer · OpenAI.

---

## Principles

1. **Purpose over decoration** — every token and component exists for a job.
2. **Dark mode first** — light mode is supported via `.light`, never the reverse.
3. **Semantic tokens only** — never hardcode hex in components.
4. **One typeface** — Plus Jakarta Sans for display and body.
5. **8-point spacing** — layout rhythm is predictable.
6. **Soft motion** — short, premium easings; respect `prefers-reduced-motion`.
7. **Accessibility by default** — WCAG AA, focus rings, keyboard, ARIA.

---

## Folder map

```
src/
  styles/
    globals.css              # Base + typography utilities
    tokens/index.css         # CSS variables + Tailwind @theme
  constants/tokens/          # TS mirrors of tokens
  components/
    ui/                      # Primitives (shadcn + Primordial variants)
    shared/                  # Composed patterns (Chip, EmptyState, …)
    layout/                  # Container, Section, Navbar, Footer
    typography/              # Text primitive
  design-system/examples/    # Reference compositions (not routes)
```

---

## Tokens

### Colors (semantic)

| Token                                                              | Role                           |
| ------------------------------------------------------------------ | ------------------------------ |
| `background`                                                       | Page canvas `#050505`          |
| `surface` / `surface-secondary` / `surface-elevated`               | Layering                       |
| `text-primary` / `text-secondary` / `text-muted` / `text-disabled` | Copy hierarchy                 |
| `border` / `border-subtle` / `border-strong`                       | Separators                     |
| `primary` / `primary-hover`                                        | Primary CTA (inverted on dark) |
| `accent-blue` / `accent-purple`                                    | Brand accents — sparingly      |
| `success` / `warning` / `danger`                                   | Feedback                       |
| `overlay` / `glass` / `selection` / `skeleton` / `ring`            | System chrome                  |

**Rule:** Use Tailwind classes like `bg-surface`, `text-text-secondary`, `border-border`. For JS (GSAP/canvas), import from `@/constants/tokens`.

### Typography

| Variant                                 | Use                     |
| --------------------------------------- | ----------------------- |
| `display-xl` → `display-md`             | Hero / campaign moments |
| `heading-xl` → `heading-sm`             | Section & card titles   |
| `body-lg` → `body-sm`                   | Reading copy            |
| `caption` / `label` / `button` / `code` | UI chrome               |

```tsx
import { Text } from "@/components/typography";

<Text as="h1" variant="display-md" balance>
  Building Digital Products That Matter.
</Text>
<Text variant="body-lg" muted>
  Supporting sentence.
</Text>
```

### Spacing

Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128 · 160 · 192`

Prefer Tailwind spacing that maps to the 8-pt grid (`p-4`, `gap-6`, `py-16`, …).

### Radius

`xs · sm · md · lg · xl · 2xl · full`

### Shadows

`sm · md · lg · floating · glass · glow · focus`

### Motion

| Token     | Value                           |
| --------- | ------------------------------- |
| Fast      | 150ms                           |
| Normal    | 250ms                           |
| Slow      | 400ms                           |
| Very slow | 700ms                           |
| Ease out  | `cubic-bezier(0.16, 1, 0.3, 1)` |

### Grid / containers

Breakpoints: `390 · 768 · 1024 · 1280 · 1440`

```tsx
import { Container, SectionWrapper } from "@/components/layout";

<SectionWrapper spacing="lg">
  <Container size="xl">{/* … */}</Container>
</SectionWrapper>;
```

### Icons

Only Lucide sizes: **16 / 18 / 20 / 24 / 32** via `<Icon size="xs|sm|md|lg|xl" />`.

---

## Component inventory

### UI (`@/components/ui`)

Button · Card · Badge · Input · Textarea · Checkbox · Switch · Radio · Select · Dropdown · Dialog · Alert Dialog · Sheet · Drawer · Tooltip · Accordion · Tabs · Avatar · Breadcrumb · Navbar (layout) · Pagination · Toast (Sonner) · Alert · Command · Skeleton · Separator · Label · Scroll Area · Popover · Navigation Menu

### Shared (`@/components/shared`)

Icon · Chip · Tag · Empty State · Stat Card · Section Title · Search Input · Divider

### Layout (`@/components/layout`)

Container · Section Wrapper · Navbar · Footer

---

## Button rules

- Heights: `sm` 36 · `default` 40 · `lg` 44
- Variants: `default` · `secondary` · `outline` · `ghost` · `danger` · `link`
- Always show focus ring; support `isLoading` (native button only)
- Icon buttons use `size="icon"` + accessible `aria-label`

## Card rules

- Prefer `variant="glass"` for premium panels
- Use `interactive` for clickable cards (hover elevation + focus ring)
- Compose with `CardHeader` / `CardContent` / `CardFooter` slots

---

## Best practices

### Do

- Import from barrels (`@/components/ui`, `@/components/shared`, `@/constants/tokens`)
- Compose features in `src/features/*` using these primitives
- Gate Framer Motion / GSAP with `usePrefersReducedMotion`
- Keep accent blue/purple for emphasis, not large fills

### Don’t

- Hardcode `#4F8CFF` or other hex in JSX/CSS modules
- Invent new font sizes outside the type ramp
- Mix icon sizes outside the Icon scale
- Nest cards inside cards without a clear hierarchy
- Animate layout for decoration alone

### Accessibility checklist

- [ ] Semantic heading order
- [ ] Visible focus on all interactive controls
- [ ] `aria-label` on icon-only buttons
- [ ] Color contrast ≥ WCAG AA
- [ ] Reduced motion respected

---

## Example import

```tsx
import { Button, Card, CardHeader, CardTitle } from "@/components/ui";
import { SectionTitle } from "@/components/shared";
import { DesignSystemExamples } from "@/design-system/examples/usage";
```

See `src/design-system/examples/usage.tsx` for a living composition reference.
