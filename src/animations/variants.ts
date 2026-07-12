import type { Variants, Transition } from "framer-motion";

import { EASE_OUT, EASE_IN_OUT, EASE_SOFT, MOTION_DURATION } from "./easings";

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: MOTION_DURATION.normal, ease: EASE_OUT },
  },
};

export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: MOTION_DURATION.normal, ease: EASE_OUT },
  },
};

export const blurInVariants: Variants = {
  hidden: { opacity: 0, filter: "blur(8px)", y: 12 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: MOTION_DURATION.slow, ease: EASE_SOFT },
  },
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: MOTION_DURATION.normal, ease: EASE_OUT },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.04,
    },
  },
};

export const pageTransitionVariants: Variants = {
  initial: { opacity: 0, scale: 0.992, filter: "blur(4px)" },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: MOTION_DURATION.page, ease: EASE_IN_OUT },
  },
  exit: {
    opacity: 0,
    scale: 0.995,
    filter: "blur(3px)",
    transition: { duration: MOTION_DURATION.fast, ease: EASE_IN_OUT },
  },
};

export const wordRevealVariants: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.55, ease: EASE_OUT },
  },
};

export const charRevealVariants: Variants = {
  hidden: { opacity: 0, y: "0.4em" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.4, ease: EASE_OUT },
  },
};

export const defaultTransition: Transition = {
  duration: MOTION_DURATION.normal,
  ease: EASE_OUT,
};

export const reducedMotionTransition: Transition = {
  duration: 0,
};
