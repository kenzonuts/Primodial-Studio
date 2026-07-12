import type { ServiceRouteSlug } from "@/constants/routes";

export type Service = {
  slug: ServiceRouteSlug;
  name: string;
  tagline: string;
  overview: string;
  benefits: string[];
  processSteps: {
    title: string;
    description: string;
  }[];
  technologies: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

/** Service page section order — do not reorder without IA review. */
export const SERVICE_PAGE_SECTIONS = [
  "hero",
  "overview",
  "benefits",
  "process",
  "technology",
  "faq",
  "cta",
] as const;

export type ServicePageSection = (typeof SERVICE_PAGE_SECTIONS)[number];
