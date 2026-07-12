import { HOME_SECTIONS } from "@/constants/routes";
import type { Project, ProjectFilter } from "@/types/portfolio";

export const PORTFOLIO_SECTION_COPY = {
  eyebrow: "Portfolio",
  headline: "Work that proves the craft behind the promise.",
  description:
    "Selected engagements where quality, performance, scalability, and thoughtful design were non-negotiable—from product platforms to immersive experiences.",
  ctaLabel: "View all work",
  ctaHref: HOME_SECTIONS.portfolio,
} as const;

export const PORTFOLIO_FILTERS: {
  id: ProjectFilter;
  label: string;
}[] = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "ai", label: "AI" },
  { id: "roblox", label: "Roblox" },
  { id: "branding", label: "Branding" },
  { id: "ui-ux", label: "UI/UX" },
  { id: "3d", label: "3D" },
];

/**
 * Homepage portfolio placeholders — replace coverImage / narrative when assets ship.
 */
export const HOME_PROJECTS: Project[] = [
  {
    id: "renbok",
    slug: "renbok",
    title: "RENBOK",
    summary:
      "Adventure platform for discovery, navigation, and shared journeys.",
    description:
      "A mobile adventure platform connecting places, people, and routes—engineered for realtime maps, resilient data, and a calm outdoor-first experience.",
    status: "shipped",
    category: "mobile",
    filters: ["mobile", "ui-ux"],
    services: ["mobile-application", "ui-ux-design"],
    technologies: ["Flutter", "Supabase", "Google Maps"],
    features: ["Realtime location", "Route discovery", "Shared adventures"],
    year: 2025,
    coverImage: "",
    gallery: [],
    overview: "An adventure platform designed for exploration at scale.",
    problem: "Fragmented outdoor discovery tools with weak map fidelity.",
    solution: "A unified Flutter app with live maps and durable backend sync.",
    timeline: "Discovery → Design → Build → Launch",
    client: "RENBOK",
    href: HOME_SECTIONS.portfolio,
    caseStudyReady: false,
    featured: true,
    liveUrl: undefined,
    githubUrl: undefined,
  },
  {
    id: "exoduze",
    slug: "exoduze",
    title: "Exoduze",
    summary: "NFT marketplace built for speed, clarity, and on-chain trust.",
    description:
      "A Solana-native marketplace experience with a precise trading interface, type-safe architecture, and performance-first Next.js delivery.",
    status: "shipped",
    category: "web",
    filters: ["web", "ui-ux"],
    services: ["website-development", "software-engineering", "ui-ux-design"],
    technologies: ["Next.js", "Solana", "TypeScript"],
    features: ["Minting flows", "Marketplace UI", "Wallet UX"],
    year: 2024,
    coverImage: "",
    gallery: [],
    href: HOME_SECTIONS.portfolio,
    caseStudyReady: false,
    featured: false,
  },
  {
    id: "primordial-studio",
    slug: "primordial-studio",
    title: "Primordial Studio",
    summary: "Corporate website for a Creative Technology Studio.",
    description:
      "The official Primordial Studio presence—editorial layout, intentional motion, and a system designed to scale with the brand.",
    status: "in-progress",
    category: "web",
    filters: ["web", "branding", "ui-ux"],
    services: ["website-development", "brand-identity", "ui-ux-design"],
    technologies: ["Next.js", "GSAP", "Framer Motion"],
    features: ["Design system", "Motion language", "SEO foundation"],
    year: 2026,
    coverImage: "",
    gallery: [],
    href: HOME_SECTIONS.portfolio,
    caseStudyReady: false,
    featured: false,
  },
  {
    id: "restaurant-management",
    slug: "restaurant-management-system",
    title: "Restaurant Management System",
    summary: "Operations dashboard for modern restaurant teams.",
    description:
      "A management system unifying orders, inventory signals, and staff workflows through a clear, high-density dashboard experience.",
    status: "shipped",
    category: "product",
    filters: ["web", "ui-ux"],
    services: ["software-engineering", "ui-ux-design"],
    technologies: ["Next.js", "PostgreSQL", "Dashboard"],
    features: ["Order ops", "Inventory views", "Role-based access"],
    year: 2025,
    coverImage: "",
    gallery: [],
    href: HOME_SECTIONS.portfolio,
    caseStudyReady: false,
    featured: false,
  },
  {
    id: "roblox-multiplayer",
    slug: "roblox-multiplayer-experience",
    title: "Roblox Multiplayer Experience",
    summary: "A multiplayer world with systems, economy, and polished UI.",
    description:
      "Production-minded Roblox development spanning gameplay systems, economy loops, interface craft, and multiplayer stability.",
    status: "shipped",
    category: "game",
    filters: ["roblox", "ui-ux"],
    services: ["roblox-development", "ui-ux-design"],
    technologies: ["Roblox Studio", "Lua", "UI", "Economy"],
    features: ["Multiplayer loops", "Economy design", "In-experience UI"],
    year: 2025,
    coverImage: "",
    gallery: [],
    href: HOME_SECTIONS.portfolio,
    caseStudyReady: false,
    featured: false,
  },
  {
    id: "ai-dashboard",
    slug: "artificial-intelligence-dashboard",
    title: "Artificial Intelligence Dashboard",
    summary: "An automation console powered by modern AI workflows.",
    description:
      "A dashboard for orchestrating assistants, monitoring automation, and turning AI capability into reliable operational leverage.",
    status: "shipped",
    category: "ai",
    filters: ["ai", "web", "ui-ux"],
    services: [
      "artificial-intelligence",
      "software-engineering",
      "ui-ux-design",
    ],
    technologies: ["OpenAI", "Next.js", "Automation"],
    features: ["Assistant ops", "Workflow automation", "Insight views"],
    year: 2025,
    coverImage: "",
    gallery: [],
    href: HOME_SECTIONS.portfolio,
    caseStudyReady: false,
    featured: false,
  },
];

export function filterProjects(
  projects: Project[],
  filter: ProjectFilter,
): Project[] {
  if (filter === "all") return projects;
  return projects.filter((project) => project.filters.includes(filter));
}

export function getFeaturedProject(projects: Project[]): Project | undefined {
  return projects.find((project) => project.featured) ?? projects[0];
}
