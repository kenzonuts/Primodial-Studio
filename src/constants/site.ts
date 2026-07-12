/**
 * Brand & site constants — identity + re-exports for navigation/routes.
 */

export const SITE_NAME = "Primordial Studio" as const;

export const SITE_TAGLINE = "Building Digital Products That Matter." as const;

export const SITE_DESCRIPTION =
  "Primordial Studio is a Creative Technology Studio specializing in software engineering, UI/UX design, branding, artificial intelligence, creative technology, digital experiences, and Roblox development. We partner with startups, businesses, and creators to transform ambitious ideas into exceptional digital products." as const;

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
  "UI/UX Design",
  "Branding",
  "Artificial Intelligence",
  "Creative Technology",
  "Digital Experiences",
  "Roblox Development",
] as const;

export {
  PRIMARY_NAVIGATION,
  FOOTER_NAVIGATION,
  SERVICE_NAV_ITEMS,
  SERVICES_MEGA_MENU,
} from "./navigation";

export { ROUTES, SERVICE_SLUGS, SITEMAP_ROUTES } from "./routes";
