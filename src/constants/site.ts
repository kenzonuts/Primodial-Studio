/**
 * Brand & site constants — identity + re-exports for navigation/routes.
 */

export const SITE_NAME = "Primordial Studio" as const;

export const SITE_TAGLINE = "Building Digital Products That Matter." as const;

export const SITE_DESCRIPTION =
  "Primordial Studio is a Creative Technology Studio specializing in software engineering, website and mobile development, UI/UX design, brand identity, artificial intelligence, creative technology, Roblox development, and 3D visualization. We partner with startups, businesses, and creators to transform ambitious ideas into exceptional digital products." as const;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://primordial.studio";

export const SITE_LOCALE = "en_US" as const;

export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/primordialstudio",
  github: "https://github.com/primordialstudio",
  linkedin: "https://linkedin.com/company/primordialstudio",
} as const;

export const CONTACT_EMAIL = "hello@primordial.studio" as const;

export const SERVICES = [
  "Software Engineering",
  "Website Development",
  "Mobile Application",
  "UI/UX Design",
  "Brand Identity",
  "Artificial Intelligence",
  "Creative Technology",
  "Roblox Development",
  "3D Visualization",
] as const;

export {
  PRIMARY_NAVIGATION,
  FOOTER_NAVIGATION,
  SERVICE_NAV_ITEMS,
  SERVICES_MEGA_MENU,
} from "./navigation";

export { ROUTES, SERVICE_SLUGS, SITEMAP_ROUTES } from "./routes";
