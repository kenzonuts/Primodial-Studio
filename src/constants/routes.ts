/**
 * Canonical route map — single source of truth for App Router paths.
 * Future routes are marked but must not be linked in primary nav until live.
 */

export const ROUTES = {
  home: "/",
  about: "/about",
  services: "/services",
  service: (slug: string) => `/services/${slug}` as const,
  work: "/work",
  project: (slug: string) => `/work/${slug}` as const,
  technology: "/technology",
  process: "/process",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
  // Future — reserved
  careers: "/careers",
  career: (slug: string) => `/careers/${slug}` as const,
  blog: "/blog",
  article: (slug: string) => `/blog/${slug}` as const,
  search: "/search",
  dashboard: "/dashboard",
} as const;

export const SERVICE_SLUGS = [
  "software-engineering",
  "ui-ux-design",
  "branding",
  "artificial-intelligence",
  "creative-technology",
  "digital-experiences",
  "roblox-development",
] as const;

export type ServiceRouteSlug = (typeof SERVICE_SLUGS)[number];

export const SERVICE_ROUTES = SERVICE_SLUGS.map((slug) => ({
  slug,
  href: ROUTES.service(slug),
}));

/** Routes included in sitemap.xml (shipped pages only). */
export const SITEMAP_ROUTES = [
  ROUTES.home,
  ROUTES.about,
  ROUTES.services,
  ...SERVICE_SLUGS.map((slug) => ROUTES.service(slug)),
  ROUTES.work,
  ROUTES.technology,
  ROUTES.process,
  ROUTES.contact,
  ROUTES.privacy,
  ROUTES.terms,
] as const;

export type AppRoute =
  | (typeof ROUTES)[keyof typeof ROUTES]
  | ReturnType<typeof ROUTES.service>
  | ReturnType<typeof ROUTES.project>
  | ReturnType<typeof ROUTES.career>
  | ReturnType<typeof ROUTES.article>;
