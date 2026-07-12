import type { ServiceRouteSlug } from "@/constants/routes";

export type ProjectStatus = "published" | "draft" | "archived";

export type ProjectCategory =
  "product" | "brand" | "experience" | "platform" | "game" | "ai";

/**
 * Portfolio / case study content model — supports full case study pages.
 */
export type Project = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  status: ProjectStatus;
  category: ProjectCategory;
  services: ServiceRouteSlug[];
  technologies: string[];
  features: string[];
  year: number;
  coverImage: string;
  gallery: string[];
  results?: {
    label: string;
    value: string;
  }[];
  client?: string;
  href?: string;
  caseStudyReady: boolean;
};
