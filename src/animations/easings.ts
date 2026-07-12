/**
 * Shared animation easings — Framer Motion + GSAP compatible.
 * Prefer these over ad-hoc curves for consistency.
 */

export const EASE_OUT = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
export const EASE_SOFT = [0.22, 1, 0.36, 1] as const;

/** GSAP string easings */
export const GSAP_EASE = {
  out: "power3.out",
  inOut: "power2.inOut",
  soft: "power2.out",
  expo: "expo.out",
} as const;

export const MOTION_DURATION = {
  instant: 0.12,
  fast: 0.2,
  normal: 0.32,
  slow: 0.45,
  page: 0.35,
  loading: 1.4,
} as const;
