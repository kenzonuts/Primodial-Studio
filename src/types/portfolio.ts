import type { ServiceRouteSlug } from "@/constants/routes";

export type ProjectStatus =
  "published" | "draft" | "archived" | "in-progress" | "shipped";

export type ProjectFilter =
  "all" | "web" | "mobile" | "ai" | "roblox" | "branding" | "ui-ux" | "3d";

export type ProjectCategory =
  | "product"
  | "brand"
  | "experience"
  | "platform"
  | "game"
  | "ai"
  | "web"
  | "mobile";

/**
 * Portfolio / case study content model — supports full case study pages.
 * Optional fields are reserved for future expansion without API changes.
 */
export type Project = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  status: ProjectStatus;
  category: ProjectCategory;
  filters: ProjectFilter[];
  services: ServiceRouteSlug[];
  technologies: string[];
  features: string[];
  year: number;
  coverImage: string;
  gallery: string[];
  /** Case study narrative slots */
  overview?: string;
  problem?: string;
  solution?: string;
  timeline?: string;
  results?: {
    label: string;
    value: string;
  }[];
  client?: string;
  href?: string;
  caseStudyReady: boolean;
  /** Future enrichment */
  video?: string;
  githubUrl?: string;
  liveUrl?: string;
  awards?: string[];
  statistics?: { label: string; value: string }[];
  testimonial?: { quote: string; author: string; role?: string };
  featured?: boolean;
};
