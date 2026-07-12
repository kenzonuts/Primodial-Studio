/**
 * Elevation / shadow tokens.
 */

export const shadows = {
  none: "none",
  sm: "var(--shadow-sm)",
  md: "var(--shadow-md)",
  lg: "var(--shadow-lg)",
  floating: "var(--shadow-floating)",
  glass: "var(--shadow-glass)",
  glow: "var(--shadow-glow)",
  focus: "var(--shadow-focus)",
} as const;

export type ShadowToken = keyof typeof shadows;
