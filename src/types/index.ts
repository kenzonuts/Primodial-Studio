/**
 * Shared domain types for the Primordial Studio website.
 */

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type ServiceSlug =
  | "software-engineering"
  | "ui-ux-design"
  | "branding"
  | "artificial-intelligence"
  | "creative-technology"
  | "digital-experiences"
  | "roblox-development";

export type ProjectStatus = "published" | "draft" | "archived";

export type Project = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  status: ProjectStatus;
  services: ServiceSlug[];
  year: number;
  coverImage: string;
};

export type ThemeMode = "dark" | "light" | "system";
