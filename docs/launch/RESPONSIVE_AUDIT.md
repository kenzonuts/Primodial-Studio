# Responsive Audit

**Method:** Code review of layout primitives + manual matrix (required on preview/prod).  
**Rule:** No layout redesign — document defects only; fix overflow/clip bugs if found.

## Breakpoints to verify

| Label       | Width     | Orientation | Priority |
| ----------- | --------- | ----------- | -------- |
| Mobile S    | 360–390   | Portrait    | P0       |
| Mobile L    | 414–430   | Portrait    | P0       |
| Mobile land | 667–844   | Landscape   | P1       |
| Tablet      | 768–834   | Portrait    | P0       |
| Tablet land | 1024–1180 | Landscape   | P1       |
| Laptop      | 1280–1440 | —           | P0       |
| Desktop     | 1536–1920 | —           | P0       |
| Ultra-wide  | 2560+     | —           | P1       |

## Pass criteria

- [ ] No horizontal scrollbar on `html`/`body`
- [ ] No clipped headlines, CTAs, or form controls
- [ ] Nav usable (hamburger ≤ tablet; desktop mega menu ≥ laptop)
- [ ] Section content readable without pinch-zoom
- [ ] Sticky/fixed chrome does not cover focus targets
- [ ] Custom cursor disabled / non-interfering on touch (`pointer: fine` only)
- [ ] Images scale without layout jump beyond expected font/async image CLS budget
- [ ] Ultra-wide: content max-width restrained (no sparse broken stretch)

## Section notes (homepage)

| Section    | Mobile risk               | Check |
| ---------- | ------------------------- | ----- |
| Hero       | Visual + CTA stacking     | [ ]   |
| About      | Stat row wrap             | [ ]   |
| Services   | Card grid columns         | [ ]   |
| Portfolio  | Filters + featured layout | [ ]   |
| Process    | Step cards                | [ ]   |
| Technology | Badge/card density        | [ ]   |
| Why Us     | Split stack               | [ ]   |
| FAQ        | Accordion width           | [ ]   |
| CTA        | Glass panel padding       | [ ]   |
| Contact    | Form + info column        | [ ]   |
| Footer     | 4-col → stack             | [ ]   |

## CLS / shift

- [ ] Fonts via `next/font` (no FOUT jump)
- [ ] Prefer explicit image dimensions / aspect containers
- [ ] Avoid injecting banners above content without reserved space (consent bar)

## Sign-off

| Device / browser      | Tester | Date | Pass |
| --------------------- | ------ | ---- | ---- |
| iPhone Safari         |        |      | [ ]  |
| Android Chrome        |        |      | [ ]  |
| iPad Safari           |        |      | [ ]  |
| Desktop Chrome        |        |      | [ ]  |
| Desktop Firefox       |        |      | [ ]  |
| Desktop Safari / Edge |        |      | [ ]  |
