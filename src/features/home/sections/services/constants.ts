import type { LucideIcon } from "lucide-react";
import {
  AppWindow,
  Boxes,
  Brain,
  Code2,
  Gamepad2,
  Layers3,
  Palette,
  Smartphone,
  Sparkles,
} from "lucide-react";

import { ROUTES, type ServiceRouteSlug } from "@/constants/routes";

/**
 * Homepage Services catalog — future-ready fields reserved for detail pages.
 */

export const SERVICES_SECTION_COPY = {
  eyebrow: "Services",
  headline: "Capabilities shaped for ambitious digital products.",
  description:
    "From systems architecture to immersive experiences, Primordial Studio designs and engineers modern digital products with clarity, precision, and lasting craft.",
  ctaLabel: "View all services",
  ctaHref: ROUTES.services,
} as const;

export type ServiceCardModel = {
  id: ServiceRouteSlug;
  slug: ServiceRouteSlug;
  category: string;
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  href: string;
  /** Future-ready optional enrichments — do not remove from the model. */
  image?: string;
  video?: string;
  caseStudyHref?: string;
  technologies?: string[];
  pricingNote?: string;
  faqHref?: string;
};

export const HOME_SERVICES: ServiceCardModel[] = [
  {
    id: "software-engineering",
    slug: "software-engineering",
    category: "Engineering",
    title: "Software Engineering",
    description:
      "Custom software, SaaS platforms, and enterprise systems engineered for reliability, scale, and long-term maintainability.",
    features: [
      "Web Applications",
      "SaaS Platforms",
      "API Development",
      "Backend Systems",
      "Cloud Integration",
    ],
    icon: Code2,
    href: ROUTES.service("software-engineering"),
  },
  {
    id: "website-development",
    slug: "website-development",
    category: "Engineering",
    title: "Website Development",
    description:
      "Modern company websites, landing systems, and web platforms built for performance, accessibility, and conversion.",
    features: [
      "Marketing Sites",
      "Landing Pages",
      "Web Platforms",
      "Responsive Applications",
      "CMS Integration",
    ],
    icon: AppWindow,
    href: ROUTES.service("website-development"),
  },
  {
    id: "mobile-application",
    slug: "mobile-application",
    category: "Engineering",
    title: "Mobile Application",
    description:
      "Cross-platform mobile products with refined interfaces, stable architecture, and a foundation ready to grow.",
    features: [
      "Cross-Platform Apps",
      "Product Interfaces",
      "API Connectivity",
      "Performance Tuning",
      "Release Pipelines",
    ],
    icon: Smartphone,
    href: ROUTES.service("mobile-application"),
  },
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    category: "Design",
    title: "UI / UX Design",
    description:
      "Research-driven interface design focused on usability, clarity, and measurable business outcomes.",
    features: [
      "User Research",
      "Interface Systems",
      "Prototyping",
      "Design Systems",
      "Usability Testing",
    ],
    icon: Layers3,
    href: ROUTES.service("ui-ux-design"),
  },
  {
    id: "brand-identity",
    slug: "brand-identity",
    category: "Design",
    title: "Brand Identity",
    description:
      "Cohesive brand systems—logo, visual language, and identity frameworks that scale across every touchpoint.",
    features: [
      "Logo Systems",
      "Visual Identity",
      "Brand Guidelines",
      "Design Language",
      "Asset Libraries",
    ],
    icon: Palette,
    href: ROUTES.service("brand-identity"),
  },
  {
    id: "artificial-intelligence",
    slug: "artificial-intelligence",
    category: "Intelligence",
    title: "Artificial Intelligence",
    description:
      "Practical AI systems—assistants, automation, and intelligence layers that improve workflows without adding noise.",
    features: [
      "AI Integration",
      "Automation",
      "Assistants",
      "Workflow Systems",
      "Business Intelligence",
    ],
    icon: Brain,
    href: ROUTES.service("artificial-intelligence"),
  },
  {
    id: "creative-technology",
    slug: "creative-technology",
    category: "Experience",
    title: "Creative Technology",
    description:
      "Interactive experiences and immersive interfaces where technology becomes part of the narrative.",
    features: [
      "Interactive Experiences",
      "Digital Installations",
      "Immersive Interfaces",
      "Realtime Systems",
      "Creative Tooling",
    ],
    icon: Sparkles,
    href: ROUTES.service("creative-technology"),
  },
  {
    id: "roblox-development",
    slug: "roblox-development",
    category: "Experience",
    title: "Roblox Development",
    description:
      "Game systems, multiplayer experiences, and platform products built with production-grade Roblox craft.",
    features: [
      "Game Systems",
      "Scripting",
      "UI Systems",
      "Economy Design",
      "Multiplayer & Maps",
    ],
    icon: Gamepad2,
    href: ROUTES.service("roblox-development"),
  },
  {
    id: "3d-visualization",
    slug: "3d-visualization",
    category: "Visualization",
    title: "3D Visualization",
    description:
      "Product rendering, architectural visualization, and digital presentations that communicate with precision.",
    features: [
      "Product Rendering",
      "Architectural Viz",
      "Digital Presentations",
      "Scene Composition",
      "Still & Motion Assets",
    ],
    icon: Boxes,
    href: ROUTES.service("3d-visualization"),
  },
];
