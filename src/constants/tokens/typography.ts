/**
 * Typography scale — Plus Jakarta Sans.
 * Sizes are rem-based; responsive steps handled via CSS utilities / Text component.
 */

export const fontFamily = {
  sans: "var(--font-plus-jakarta-sans), ui-sans-serif, system-ui, sans-serif",
  mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
} as const;

export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
} as const;

/**
 * Type ramp. `lg` is the desktop default; `sm` is the mobile floor.
 */
export const typeScale = {
  displayXl: {
    fontSize: { sm: "3rem", lg: "4.5rem" },
    lineHeight: { sm: "1.1", lg: "1.05" },
    letterSpacing: "-0.04em",
    fontWeight: fontWeight.extrabold,
  },
  displayLg: {
    fontSize: { sm: "2.5rem", lg: "3.75rem" },
    lineHeight: { sm: "1.12", lg: "1.08" },
    letterSpacing: "-0.035em",
    fontWeight: fontWeight.extrabold,
  },
  displayMd: {
    fontSize: { sm: "2rem", lg: "3rem" },
    lineHeight: { sm: "1.15", lg: "1.1" },
    letterSpacing: "-0.03em",
    fontWeight: fontWeight.bold,
  },
  headingXl: {
    fontSize: { sm: "1.75rem", lg: "2.25rem" },
    lineHeight: "1.2",
    letterSpacing: "-0.025em",
    fontWeight: fontWeight.bold,
  },
  headingLg: {
    fontSize: { sm: "1.5rem", lg: "1.875rem" },
    lineHeight: "1.25",
    letterSpacing: "-0.02em",
    fontWeight: fontWeight.bold,
  },
  headingMd: {
    fontSize: { sm: "1.25rem", lg: "1.5rem" },
    lineHeight: "1.3",
    letterSpacing: "-0.015em",
    fontWeight: fontWeight.semibold,
  },
  headingSm: {
    fontSize: { sm: "1.125rem", lg: "1.25rem" },
    lineHeight: "1.35",
    letterSpacing: "-0.01em",
    fontWeight: fontWeight.semibold,
  },
  bodyLg: {
    fontSize: { sm: "1.0625rem", lg: "1.125rem" },
    lineHeight: "1.65",
    letterSpacing: "-0.01em",
    fontWeight: fontWeight.regular,
  },
  bodyMd: {
    fontSize: "1rem",
    lineHeight: "1.6",
    letterSpacing: "-0.005em",
    fontWeight: fontWeight.regular,
  },
  bodySm: {
    fontSize: "0.875rem",
    lineHeight: "1.55",
    letterSpacing: "0",
    fontWeight: fontWeight.regular,
  },
  caption: {
    fontSize: "0.75rem",
    lineHeight: "1.45",
    letterSpacing: "0.01em",
    fontWeight: fontWeight.medium,
  },
  button: {
    fontSize: "0.875rem",
    lineHeight: "1",
    letterSpacing: "-0.01em",
    fontWeight: fontWeight.medium,
  },
  label: {
    fontSize: "0.8125rem",
    lineHeight: "1.4",
    letterSpacing: "0.01em",
    fontWeight: fontWeight.medium,
  },
  code: {
    fontSize: "0.875rem",
    lineHeight: "1.6",
    letterSpacing: "0",
    fontWeight: fontWeight.regular,
  },
} as const;

export type TypeScaleKey = keyof typeof typeScale;
