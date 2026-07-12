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

/**
 * Live homepage section anchors — use these until dedicated App Router pages ship.
 * Prevents 404s from nav/footer during single-page launch.
 */
export const HOME_SECTIONS = {
  home: "/",
  about: "/#about",
  services: "/#services",
  portfolio: "/#portfolio",
  process: "/#process",
  technology: "/#technology",
  whyUs: "/#why-us",
  faq: "/#faq",
  contact: "/#contact",
  cta: "/#start-a-project",
} as const;

export const SERVICE_SLUGS = [
  "software-engineering",
  "website-development",
  "mobile-application",
  "ui-ux-design",
  "brand-identity",
  "artificial-intelligence",
  "creative-technology",
  "roblox-development",
  "3d-visualization",
] as const;

export type ServiceRouteSlug = (typeof SERVICE_SLUGS)[number];

export const SERVICE_ROUTES = SERVICE_SLUGS.map((slug) => ({
  slug,
  href: ROUTES.service(slug),
}));

/**
 * Sitemap — only routes that currently resolve (no phantom URLs).
 * Expand when dedicated pages ship.
 */
export const SITEMAP_ROUTES = [
  ROUTES.home,
  ROUTES.privacy,
  ROUTES.terms,
] as const;

export type AppRoute =
  | (typeof ROUTES)[keyof typeof ROUTES]
  | ReturnType<typeof ROUTES.service>
  | ReturnType<typeof ROUTES.project>
  | ReturnType<typeof ROUTES.career>
  | ReturnType<typeof ROUTES.article>;
