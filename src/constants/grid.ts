/**
 * Layout grid constants — mirrors docs/LAYOUT_SYSTEM.md.
 */

export const GRID = {
  columns: {
    mobile: 4,
    tablet: 8,
    laptop: 12,
    desktop: 12,
    wide: 12,
  },
  gutters: {
    mobile: 16,
    tablet: 24,
    laptop: 24,
    desktop: 32,
    wide: 32,
  },
  margins: {
    mobile: 20,
    tablet: 32,
    laptop: 40,
    desktop: 48,
    wide: 48,
  },
  maxWidth: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1440,
    prose: 720,
  },
  readingWidth: 720,
  titleWidth: 800,
  heroCopyWidth: 768,
} as const;

export const SECTION_SPACING = {
  sm: { mobile: 48, desktop: 64 },
  md: { mobile: 64, desktop: 80 },
  lg: { mobile: 80, desktop: 128 },
  xl: { mobile: 96, desktop: 160 },
} as const;

export const NAVBAR = {
  height: 64,
  solidifyScrollY: 24,
  hideScrollY: 120,
} as const;
