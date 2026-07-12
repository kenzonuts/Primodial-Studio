import type { ContainerSize } from "@/types/layout";

export type SectionAnimationHook =
  | "fade"
  | "reveal"
  | "slide"
  | "scale"
  | "parallax"
  | "text-reveal"
  | "image-reveal"
  | "counter"
  | "cards"
  | "background"
  | "none";

export type SectionTemplate =
  "hero" | "content" | "split" | "portfolio" | "cta" | "service" | "contact";

export type SectionSpacingToken = "sm" | "md" | "lg" | "xl";

/**
 * Canonical section contract — every marketing section should map to this shape.
 */
export type SectionContract = {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  spacing?: SectionSpacingToken;
  containerSize?: ContainerSize;
  animation?: SectionAnimationHook;
};

export type HomepageSectionId =
  | "hero"
  | "introduction"
  | "social-proof"
  | "services"
  | "featured-work"
  | "process"
  | "technology"
  | "why-us"
  | "testimonials"
  | "faq"
  | "cta"
  | "contact";

export type HomepageSectionDefinition = {
  id: HomepageSectionId;
  order: number;
  purpose: string;
  why: string;
  template: SectionTemplate;
  enabled: boolean;
  animation: SectionAnimationHook;
  href?: string;
};
