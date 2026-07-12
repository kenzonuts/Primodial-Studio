/**
 * Brand & site constants — single source of truth for identity, SEO, and nav.
 */

export const SITE_NAME = "Primordial Studio" as const;

export const SITE_TAGLINE = "Building Digital Products That Matter." as const;

export const SITE_DESCRIPTION =
  "Primordial Studio is a Creative Technology Studio specializing in software engineering, UI/UX design, branding, artificial intelligence, creative technology, digital experiences, and Roblox development. We partner with startups, businesses, and creators to transform ambitious ideas into exceptional digital products." as const;

/**
 * Production canonical URL. Override via NEXT_PUBLIC_SITE_URL in env.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://primordial.studio";

export const SITE_LOCALE = "en_US" as const;

export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/primordialstudio",
  github: "https://github.com/primordialstudio",
  linkedin: "https://linkedin.com/company/primordialstudio",
} as const;

export const CONTACT_EMAIL = "hello@primordial.studio" as const;

export const NAVIGATION = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  "Software Engineering",
  "UI/UX Design",
  "Branding",
  "Artificial Intelligence",
  "Creative Technology",
  "Digital Experiences",
  "Roblox Development",
] as const;
