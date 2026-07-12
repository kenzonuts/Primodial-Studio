import type { SectionAnimationHook } from "@/types/section";

/**
 * Animation hook registry for sections.
 * UI phase wires Framer Motion / GSAP to these keys.
 */
export const SECTION_ANIMATION_HOOKS: Record<
  Exclude<SectionAnimationHook, "none">,
  { description: string; reducedMotionFallback: "opacity" | "none" }
> = {
  fade: {
    description: "Opacity fade on enter",
    reducedMotionFallback: "opacity",
  },
  reveal: {
    description: "Upward reveal with fade",
    reducedMotionFallback: "opacity",
  },
  slide: {
    description: "Horizontal or vertical slide",
    reducedMotionFallback: "opacity",
  },
  scale: {
    description: "Subtle scale-in",
    reducedMotionFallback: "opacity",
  },
  parallax: {
    description: "Background depth parallax",
    reducedMotionFallback: "none",
  },
  "text-reveal": {
    description: "Staggered line/word reveal",
    reducedMotionFallback: "opacity",
  },
  "image-reveal": {
    description: "Media mask / clip reveal",
    reducedMotionFallback: "opacity",
  },
  counter: {
    description: "Numeric count-up",
    reducedMotionFallback: "none",
  },
  cards: {
    description: "Staggered card entrance",
    reducedMotionFallback: "opacity",
  },
  background: {
    description: "Ambient background motion",
    reducedMotionFallback: "none",
  },
};

export function getSectionAnimationHook(hook: SectionAnimationHook) {
  if (hook === "none") return null;
  return SECTION_ANIMATION_HOOKS[hook];
}
