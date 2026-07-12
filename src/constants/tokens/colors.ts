/**
 * Semantic color tokens — mirror CSS variables for JS/GSAP/canvas.
 * Never hardcode hex values in components; use these or Tailwind classes.
 */

export const colorTokens = {
  background: "var(--background)",
  surface: "var(--surface)",
  surfaceSecondary: "var(--surface-secondary)",
  surfaceElevated: "var(--surface-elevated)",

  foreground: "var(--foreground)",
  textPrimary: "var(--text-primary)",
  textSecondary: "var(--text-secondary)",
  textMuted: "var(--text-muted)",
  textDisabled: "var(--text-disabled)",

  border: "var(--border)",
  borderSubtle: "var(--border-subtle)",
  borderStrong: "var(--border-strong)",

  primary: "var(--primary)",
  primaryHover: "var(--primary-hover)",
  primaryForeground: "var(--primary-foreground)",

  accentBlue: "var(--accent-blue)",
  accentBlueHover: "var(--accent-blue-hover)",
  accentPurple: "var(--accent-purple)",
  accentPurpleHover: "var(--accent-purple-hover)",

  success: "var(--success)",
  successForeground: "var(--success-foreground)",
  warning: "var(--warning)",
  warningForeground: "var(--warning-foreground)",
  danger: "var(--danger)",
  dangerForeground: "var(--danger-foreground)",

  disabled: "var(--disabled)",
  disabledForeground: "var(--disabled-foreground)",

  overlay: "var(--overlay)",
  glass: "var(--glass-bg)",
  glassBorder: "var(--glass-border)",
  selection: "var(--selection)",
  scrollbar: "var(--scrollbar)",
  scrollbarThumb: "var(--scrollbar-thumb)",
  focusRing: "var(--ring)",
  skeleton: "var(--skeleton)",
  loading: "var(--loading)",
} as const;

/** Raw brand palette (reference only — prefer semantic tokens). */
export const brandPalette = {
  background: "#050505",
  surface: "#111111",
  surfaceSecondary: "#0C0C0C",
  surfaceElevated: "#161616",
  primary: "#FFFFFF",
  secondary: "#B5B5B5",
  muted: "#8A8A8A",
  border: "#222222",
  accentBlue: "#4F8CFF",
  accentPurple: "#7C5CFF",
  success: "#3DDC97",
  warning: "#FFC857",
  danger: "#FF5D73",
} as const;

export type ColorToken = keyof typeof colorTokens;
