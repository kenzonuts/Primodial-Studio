import { HOME_SECTIONS } from "@/constants/routes";
import type { HomepageSectionDefinition } from "@/types/section";

/**
 * Homepage storytelling order — do not reorder without IA review.
 * `enabled: false` sections stay in the architecture but do not render.
 */
export const HOMEPAGE_SECTIONS: readonly HomepageSectionDefinition[] = [
  {
    id: "hero",
    order: 1,
    purpose: "Brand promise and primary conversion entry",
    why: "First trust signal — who we are, what we do, for whom",
    template: "hero",
    enabled: true,
    animation: "reveal",
  },
  {
    id: "introduction",
    order: 2,
    purpose: "Position Primordial as an international studio",
    why: "Separates company narrative from freelance portfolio patterns",
    template: "content",
    enabled: true,
    animation: "fade",
  },
  {
    id: "social-proof",
    order: 3,
    purpose: "Reduce buyer risk with logos, metrics, or trust marks",
    why: "Proof before asking users to evaluate services",
    template: "content",
    enabled: true,
    animation: "fade",
  },
  {
    id: "services",
    order: 4,
    purpose: "Capability map into service detail pages",
    why: "Scannable path for founders evaluating fit",
    template: "content",
    enabled: true,
    animation: "cards",
    href: HOME_SECTIONS.services,
  },
  {
    id: "featured-work",
    order: 5,
    purpose: "Selected portfolio evidence",
    why: "Evidence outweighs claims for high-trust buyers",
    template: "portfolio",
    enabled: true,
    animation: "image-reveal",
    href: HOME_SECTIONS.portfolio,
  },
  {
    id: "process",
    order: 6,
    purpose: "Explain engagement model",
    why: "Removes ambiguity about how collaboration starts",
    template: "content",
    enabled: true,
    animation: "slide",
    href: HOME_SECTIONS.process,
  },
  {
    id: "technology",
    order: 7,
    purpose: "Signal technical craft and stack depth",
    why: "Credibility for technical and product stakeholders",
    template: "content",
    enabled: true,
    animation: "fade",
    href: HOME_SECTIONS.technology,
  },
  {
    id: "why-us",
    order: 8,
    purpose: "Differentiate Primordial Studio",
    why: "Answers why choose us versus alternatives",
    template: "split",
    enabled: true,
    animation: "reveal",
  },
  {
    id: "testimonials",
    order: 9,
    purpose: "Peer validation from real clients",
    why: "Social proof for late-funnel confidence",
    template: "content",
    enabled: false,
    animation: "cards",
  },
  {
    id: "faq",
    order: 10,
    purpose: "Handle objections and improve SEO coverage",
    why: "Converts uncertainty without a sales call",
    template: "content",
    enabled: true,
    animation: "fade",
  },
  {
    id: "cta",
    order: 11,
    purpose: "Final conversion moment",
    why: "One clear next step after the narrative arc",
    template: "cta",
    enabled: true,
    animation: "scale",
    href: HOME_SECTIONS.contact,
  },
  {
    id: "contact",
    order: 12,
    purpose: "Project intake and direct studio contact",
    why: "Converts intent into actionable project details",
    template: "contact",
    enabled: true,
    animation: "fade",
    href: HOME_SECTIONS.contact,
  },
] as const;

export const HOMEPAGE_SECTION_IDS = HOMEPAGE_SECTIONS.map(
  (section) => section.id,
);

export function getEnabledHomepageSections() {
  return HOMEPAGE_SECTIONS.filter((section) => section.enabled).sort(
    (a, b) => a.order - b.order,
  );
}
