/**
 * Hero section copy — keep presentation components free of marketing strings.
 */

export const HERO_COPY = {
  eyebrow: "Creative Technology Studio",
  headline: "We engineer digital products that earn their place.",
  description:
    "Primordial Studio partners with ambitious teams to design, build, and scale exceptional software, experiences, and creative technology—from AI systems to immersive platforms.",
  primaryCta: {
    label: "Start Your Project",
    href: "/contact",
  },
  secondaryCta: {
    label: "Explore Our Work",
    href: "/work",
  },
} as const;

export const HERO_FLOATING_CARDS = [
  {
    id: "engineering",
    label: "Software Engineering",
    meta: "Systems · Scale",
    x: "8%",
    y: "18%",
    delay: 0.15,
  },
  {
    id: "design",
    label: "Product Design",
    meta: "Interface · Brand",
    x: "52%",
    y: "12%",
    delay: 0.28,
  },
  {
    id: "ai",
    label: "AI Solutions",
    meta: "Intelligence · Craft",
    x: "28%",
    y: "58%",
    delay: 0.4,
  },
] as const;
