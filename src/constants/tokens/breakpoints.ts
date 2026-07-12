/**
 * Breakpoints & layout grid.
 */

export const breakpoints = {
  mobile: 390,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
  wide: 1440,
} as const;

export const containers = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1440px",
  prose: "720px",
} as const;

export const containerPadding = {
  mobile: "20px",
  tablet: "32px",
  desktop: "48px",
} as const;

export type Breakpoint = keyof typeof breakpoints;
