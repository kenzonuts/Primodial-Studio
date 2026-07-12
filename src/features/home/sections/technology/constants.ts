import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Cloud,
  Gamepad2,
  Layout,
  Server,
  Smartphone,
  Sparkles,
} from "lucide-react";

export const TECHNOLOGY_SECTION_COPY = {
  eyebrow: "Tech Stack",
  headline: "Tools chosen for clarity, scale, and longevity.",
  description:
    "Primordial Studio selects reliable technologies that stay maintainable, perform under pressure, and remain ready for what comes next.",
} as const;

export type TechCategory = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  technologies: string[];
};

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Interfaces with precision, performance, and motion craft.",
    icon: Layout,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description:
      "Durable systems, clean APIs, and data that stays trustworthy.",
    icon: Server,
    technologies: [".NET", "Node.js", "Supabase", "PostgreSQL", "REST API"],
  },
  {
    id: "mobile",
    title: "Mobile",
    description: "Cross-platform products with native-feeling experience.",
    icon: Smartphone,
    technologies: ["Flutter", "React Native"],
  },
  {
    id: "cloud",
    title: "Cloud",
    description: "Delivery pipelines and infrastructure built for velocity.",
    icon: Cloud,
    technologies: ["Vercel", "Cloudflare", "Docker", "GitHub Actions"],
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    description: "Practical intelligence layered into real product workflows.",
    icon: Brain,
    technologies: ["OpenAI", "Local AI", "Automation", "LLM Integration"],
  },
  {
    id: "game",
    title: "Game Development",
    description: "Immersive systems for multiplayer worlds and live economies.",
    icon: Gamepad2,
    technologies: ["Roblox Studio", "Lua"],
  },
  {
    id: "design",
    title: "Design",
    description: "Visual systems and prototypes that guide engineering.",
    icon: Sparkles,
    technologies: ["Figma", "Spline", "Adobe Illustrator", "Adobe Photoshop"],
  },
];
