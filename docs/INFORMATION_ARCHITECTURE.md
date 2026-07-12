# Primordial Studio — Information Architecture

Official IA for the Primordial Studio website.  
Horizon: 5–10 years. Quality bar: Apple · Stripe · Vercel · Linear · Framer · OpenAI.

**Primary objective:** Build trust.  
**Secondary:** Showcase expertise · Explain services · Present portfolio · Generate leads · Strengthen brand.

This is not a freelancer portfolio. It is an international Creative Technology Studio.

---

## 1. Complete Sitemap

### Public (v1)

| Route              | Purpose                     | Priority |
| ------------------ | --------------------------- | -------- |
| `/`                | Trust + narrative entry     | P0       |
| `/about`           | Company story, values, team | P0       |
| `/services`        | Service index               | P0       |
| `/services/[slug]` | Individual service depth    | P0       |
| `/work`            | Portfolio index             | P0       |
| `/work/[slug]`     | Case study / project        | P0       |
| `/technology`      | Stack, craft, capabilities  | P1       |
| `/process`         | How we work                 | P1       |
| `/contact`         | Lead capture                | P0       |
| `/privacy`         | Privacy Policy              | P0       |
| `/terms`           | Terms of Service            | P0       |

### System

| Route                   | Purpose                   |
| ----------------------- | ------------------------- |
| `/404` (implicit)       | Soft recovery + path home |
| `/robots.txt`           | Crawlers                  |
| `/sitemap.xml`          | Discovery                 |
| `/manifest.webmanifest` | PWA metadata              |

### Future (architecture reserved — do not ship empty shells as marketing pages)

| Route             | Purpose            | Status   |
| ----------------- | ------------------ | -------- |
| `/careers`        | Hiring             | Planned  |
| `/careers/[slug]` | Role detail        | Planned  |
| `/blog`           | Thought leadership | Planned  |
| `/blog/[slug]`    | Article            | Planned  |
| `/dashboard`      | Client portal      | Reserved |
| `/search`         | Global search      | Reserved |

### Service slugs (stable)

1. `software-engineering`
2. `ui-ux-design`
3. `branding`
4. `artificial-intelligence`
5. `creative-technology`
6. `digital-experiences`
7. `roblox-development`

---

## 2. Homepage Architecture (storytelling)

Scroll tells one story: **who we are → what we do → proof → how → why us → act**.

| #   | Section ID      | Purpose                       | Why it exists                                                           |
| --- | --------------- | ----------------------------- | ----------------------------------------------------------------------- |
| 1   | `hero`          | Brand + promise + primary CTA | First trust signal; must answer “who / what / for whom” in one viewport |
| 2   | `introduction`  | Studio positioning            | Separates us from freelance portfolios; establishes company-scale voice |
| 3   | `social-proof`  | Logos / metrics / trust marks | Reduces risk for buyers before services                                 |
| 4   | `services`      | Capability map                | Scannable path into `/services/[slug]`                                  |
| 5   | `featured-work` | Selected proof                | Evidence over claims                                                    |
| 6   | `process`       | Engagement model              | Removes “how do we start?” friction                                     |
| 7   | `technology`    | Craft signal                  | Credibility for technical buyers                                        |
| 8   | `why-us`        | Differentiation               | Why Primordial vs alternatives                                          |
| 9   | `testimonials`  | Peer validation               | Future-ready slot; hide until real content                              |
| 10  | `faq`           | Objection handling            | SEO + conversion assist                                                 |
| 11  | `cta`           | Conversion moment             | Single clear next step                                                  |
| 12  | `footer`        | Orientation + legal           | Global exit routes                                                      |

**Rules**

- One job per section.
- Eyebrow → Title → Subtitle/Description → Content → Action.
- No decorative sections without conversion or trust value.
- Testimonials render only when ≥ 1 published quote exists.

---

## 3. Navigation Structure

### Primary (desktop)

| Label      | Href          | Notes                          |
| ---------- | ------------- | ------------------------------ |
| Work       | `/work`       | Portfolio                      |
| Services   | `/services`   | Mega-menu ready (service list) |
| Technology | `/technology` | Craft                          |
| Process    | `/process`    | Method                         |
| About      | `/about`      | Company                        |
| Contact    | `/contact`    | CTA destination                |

**Trailing CTA:** “Start a project” → `/contact`

### Secondary / utility (ready, not all visible v1)

- Theme toggle
- Language switcher
- Search
- Dashboard entry (authenticated)

### Mobile

- Full-screen or sheet panel
- Same IA as desktop; CTA pinned bottom
- Focus trap + Escape to close
- Body scroll lock while open

### Behavior

| Behavior            | Spec                                         |
| ------------------- | -------------------------------------------- |
| Sticky              | Always available after first paint           |
| Transparent         | Over hero; solidifies after scroll threshold |
| Hide on scroll down | After threshold, while scrolling down        |
| Reveal on scroll up | Immediate                                    |
| Mega menu           | Services (and later Resources)               |
| A11y                | Keyboard, ARIA expanded/controls, skip link  |

### Footer IA

- Company (About, Process, Contact)
- Work
- Services (all slugs)
- Resources (Technology, Blog future, Careers future)
- Legal (Privacy, Terms)
- Social
- Newsletter slot (ready, dormant until list exists)

---

## 4. Page Templates (content architecture)

### Service page

`Hero → Overview → Benefits → Process → Technology → FAQ → CTA`

### Portfolio / case study

`Cover → Title/Category/Stack → Description → Features → Gallery → Results → CTA → Related`

### Contact

`Hero → Form + Company info → Social → FAQ → CTA`

### About

`Hero → Story → Values → Team (optional) → Clients → CTA`

### Technology / Process

`Hero → Narrative sections → Proof → CTA`

---

## 5. Component Hierarchy

```
App Shell
├── SkipLink
├── Providers (Theme, Tooltip, Toast, future Locale/Auth)
├── SiteHeader (Navbar)
│   ├── Brand
│   ├── PrimaryNav / MegaMenu
│   ├── Utility (Theme, Search, Lang)
│   └── MobileNav
├── Main
│   └── PageTemplate
│       └── Sections[] (feature modules)
└── SiteFooter
```

**Ownership**

| Layer                   | Owns                   |
| ----------------------- | ---------------------- |
| `components/ui`         | Atoms                  |
| `components/shared`     | Molecules              |
| `components/layout`     | Structural layout      |
| `components/navigation` | Nav systems            |
| `templates`             | Page skeletons         |
| `features/*`            | Domain sections + data |
| `app/*`                 | Routes only            |

---

## 6. Folder Structure (target)

```
src/
  app/                          # Next.js routes only
  components/
    layout/                     # Container, Section, Grid, Stack, Split, Wrapper
    navigation/                 # Desktop, Mobile, MegaMenu shells
    shared/
    ui/
    typography/
    providers/
  templates/                    # Hero, Content, Portfolio, Service, Contact, CTA
  features/
    home/sections/              # One folder per homepage section
    about/
    services/
    work/
    technology/
    process/
    contact/
    legal/
  contexts/                     # Locale, Navigation chrome, future Auth
  constants/
    routes.ts
    navigation.ts
    homepage.ts
    grid.ts
  types/
    navigation.ts
    section.ts
    portfolio.ts
    service.ts
    layout.ts
  hooks/                        # Scroll, navbar, section-in-view
  lib/motion/                   # Animation presets + section hooks
```

---

## 7. UX Best Practices

1. **Trust before tactics** — proof and clarity outrank cleverness.
2. **Scannable hierarchy** — founders skim; make the story readable in 10 seconds.
3. **One primary CTA per viewport** — secondary links stay quiet.
4. **Honest empty states** — never fake logos or testimonials.
5. **Performance is UX** — LCP-critical hero; defer below-fold media.
6. **Keyboard = mouse** — every nav path reachable without a pointer.
7. **Future without clutter** — reserve routes/slots; ship only real content.
8. **International company tone** — precise, calm, confident; no hype filler.

---

## Related docs

- [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) — visual language
- [LAYOUT_SYSTEM.md](./LAYOUT_SYSTEM.md) — grid, spacing, responsive, section rules
