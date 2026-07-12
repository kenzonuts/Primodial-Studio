/**
 * Motion tokens — durations (seconds) and cubic-bezier easings.
 * Always gate animations with prefers-reduced-motion.
 */

export const duration = {
  fast: 0.15,
  normal: 0.25,
  slow: 0.4,
  verySlow: 0.7,
} as const;

/** Milliseconds for CSS / setTimeout consumers. */
export const durationMs = {
  fast: 150,
  normal: 250,
  slow: 400,
  verySlow: 700,
} as const;

export const easing = {
  easeOut: [0.16, 1, 0.3, 1] as const,
  easeInOut: [0.65, 0, 0.35, 1] as const,
  spring: [0.34, 1.56, 0.64, 1] as const,
  linear: [0, 0, 1, 1] as const,
} as const;

export const easingCss = {
  easeOut: "cubic-bezier(0.16, 1, 0.3, 1)",
  easeInOut: "cubic-bezier(0.65, 0, 0.35, 1)",
  spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  linear: "linear",
} as const;

export const motionPresets = {
  hover: { duration: duration.fast, ease: easing.easeOut },
  pageTransition: { duration: duration.slow, ease: easing.easeInOut },
  loading: { duration: duration.verySlow, ease: easing.linear },
  scroll: { duration: duration.normal, ease: easing.easeOut },
} as const;
