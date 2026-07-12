# Primordial Studio — Layout System

Structural layout rules for the official website.  
Works with [INFORMATION_ARCHITECTURE.md](./INFORMATION_ARCHITECTURE.md) and the Design System tokens.

---

## 1. Design philosophy

- Desktop-first composition, mobile-optimized execution
- Large whitespace, calm rhythm, no layout thrash
- Reusable primitives over one-off page CSS
- Animation hooks prepared; motion never required for comprehension

---

## 2. Grid rules

### Breakpoints

| Name    | Width  | Columns | Gutter | Margin |
| ------- | ------ | ------- | ------ | ------ |
| Mobile  | 390px  | 4       | 16px   | 20px   |
| Tablet  | 768px  | 8       | 24px   | 32px   |
| Laptop  | 1024px | 12      | 24px   | 40px   |
| Desktop | 1280px | 12      | 32px   | 48px   |
| Wide    | 1440px | 12      | 32px   | 48px   |

### Containers

| Token   | Max width | Use                       |
| ------- | --------- | ------------------------- |
| `sm`    | 640px     | Narrow forms              |
| `md`    | 768px     | Compact content           |
| `lg`    | 1024px    | Standard sections         |
| `xl`    | 1280px    | Default page              |
| `2xl`   | 1440px    | Wide marketing            |
| `prose` | 720px     | Long reading              |
| `full`  | 100%      | Edge-to-edge (hero media) |

### Content widths

| Role                | Width          |
| ------------------- | -------------- |
| Reading (body)      | ≤ 720px        |
| Section title block | ≤ 720–800px    |
| Card grids          | Full container |
| Hero copy           | ≤ 40–48rem     |

### Spacing rhythm (vertical)

| Density | Mobile   | Desktop   |
| ------- | -------- | --------- |
| Compact | 48–64px  | 64–80px   |
| Default | 64–80px  | 96–128px  |
| Hero    | 80–120px | 120–160px |

Horizontal: container padding only — never arbitrary page margins.

---

## 3. Layout primitives

| Primitive                    | Job                                           |
| ---------------------------- | --------------------------------------------- |
| `Wrapper`                    | Full-bleed background / clip context          |
| `Container`                  | Max-width + responsive padding                |
| `Section` / `SectionWrapper` | Vertical rhythm + optional container          |
| `Stack`                      | One-dimensional spacing (vertical/horizontal) |
| `Grid`                       | 12-col responsive grid                        |
| `Split`                      | Two-pane (copy / media)                       |
| `HeroLayout`                 | Full-viewport narrative frame                 |
| `ContentLayout`              | Title + prose + aside                         |
| `PortfolioLayout`            | Index & case study frames                     |
| `ServiceLayout`              | Service page frame                            |
| `CtaLayout`                  | Conversion band                               |
| `ContactLayout`              | Form + details                                |

---

## 4. Section contract

Every section implements:

```ts
type SectionContract = {
  id: string; // stable anchor
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  content: ReactNode; // main body
  action?: ReactNode; // CTA cluster
  spacing?: "sm" | "md" | "lg" | "xl";
  containerSize?: ContainerSize;
  animation?: SectionAnimationHook;
};
```

**Responsive rules**

- Stack Split panes below `tablet`
- Grids collapse 12 → 8 → 4
- No horizontal scroll at any breakpoint
- CLS: reserve media aspect ratios

**Animation hooks (prepared)**

`fade` · `reveal` · `slide` · `scale` · `parallax` · `text-reveal` · `image-reveal` · `counter` · `cards` · `background`

Hooks attach via `data-animate` + `useSectionInView`; reduced-motion disables transforms.

---

## 5. Responsive strategy

1. **Compose at 1440** — ideal narrative layout
2. **Tighten at 1280 / 1024** — reduce gaps, keep 12-col
3. **Reflow at 768** — Split → stack; 8-col grids
4. **Focus at 390** — single column, larger tap targets, sticky CTA when needed
5. **Ultra-wide (>1440)** — container caps; backgrounds may full-bleed

**Non-negotiables**

- No layout shift from fonts/images (next/font + sizes)
- No horizontal overflow
- Touch targets ≥ 44×44px on mobile nav

---

## 6. Scroll experience

- Smooth scroll for in-page anchors (disabled under reduced motion)
- Navbar hide/reveal does not jump content (compensating spacer or overlay header)
- Section order on homepage is fixed by IA — do not reorder for decoration
- Parallax intensity ≤ subtle; never obscures text

---

## 7. Implementation map

| Concern        | Source                                      |
| -------------- | ------------------------------------------- |
| Tokens         | `src/styles/tokens`, `src/constants/tokens` |
| Grid constants | `src/constants/grid.ts`                     |
| Primitives     | `src/components/layout/*`                   |
| Templates      | `src/templates/*`                           |
| Nav chrome     | `src/components/navigation/*`               |
| Section types  | `src/types/section.ts`                      |
| Homepage order | `src/constants/homepage.ts`                 |
