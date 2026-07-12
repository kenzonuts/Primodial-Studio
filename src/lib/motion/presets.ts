import { duration, easing } from "@/constants/tokens";

/**
 * Shared Framer Motion transition presets.
 * Always respect prefers-reduced-motion at the call site.
 */
export const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: duration.normal,
    ease: easing.easeOut,
  },
} as const;

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    duration: duration.normal,
    ease: easing.easeOut,
  },
} as const;

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
} as const;
