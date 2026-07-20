import { HOME_SECTIONS, projectSectionHref } from "@/constants/routes";
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
    coverImage: "/assets/work/renbok-cover.webp",
    gallery: [],
    overview: "An adventure platform designed for exploration at scale.",
    problem: "Fragmented outdoor discovery tools with weak map fidelity.",
    solution: "A unified Flutter app with live maps and durable backend sync.",
    timeline: "Discovery → Design → Build → Launch",
    client: "RENBOK",
    href: projectSectionHref("renbok"),
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
    href: projectSectionHref("exoduze"),
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
    href: projectSectionHref("primordial-studio"),
    caseStudyReady: false,
    featured: false,
  },
  {
    id: "gen-z-grow",
    slug: "gen-z-grow",
    title: "GEN-Z GROW",
    summary:
      "Empowering healthier generations through interactive nutrition education, child growth tracking, and collaborative learning.",
    description:
      "A comprehensive digital platform designed to support children, parents, and educators with assessments, personalized learning, growth monitoring, community discussions, and research-driven analytics for stunting prevention.",
    status: "shipped",
    category: "platform",
    filters: ["web", "ui-ux"],
    services: ["software-engineering", "website-development", "ui-ux-design"],
    technologies: ["React", "ASP.NET Core", "Supabase", "PostgreSQL"],
    features: [
      "Nutrition education",
      "Growth tracking",
      "Personalized learning",
      "Community & analytics",
    ],
    year: 2025,
    coverImage: "/assets/work/gen-z-grow-cover.webp",
    gallery: [],
    problem:
      "Stunting prevention needs coordinated education, monitoring, and research-ready data across families and schools.",
    solution:
      "An interactive platform for assessments, learning paths, growth tracking, community discussion, and analytics.",
    client: "GEN-Z GROW",
    href: projectSectionHref("gen-z-grow"),
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
    href: projectSectionHref("roblox-multiplayer-experience"),
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
    href: projectSectionHref("artificial-intelligence-dashboard"),
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
