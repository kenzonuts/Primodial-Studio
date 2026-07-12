import type { LucideIcon } from "lucide-react";
import {
  Compass,
  FlaskConical,
  Lightbulb,
  Map,
  PenTool,
  Rocket,
} from "lucide-react";

export const PROCESS_SECTION_COPY = {
  eyebrow: "Process",
  headline: "A clear path from ambition to shipped product.",
  description:
    "Every engagement follows a structured process—focused on clarity, collaboration, scalable systems, and long-term product success.",
} as const;

export type ProcessStep = {
  id: string;
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "discovery",
    step: "01",
    title: "Discovery",
    description:
      "Understand business goals, users, competitors, and project requirements before a single line of code.",
    icon: Lightbulb,
  },
  {
    id: "strategy",
    step: "02",
    title: "Strategy",
    description:
      "Define product direction, architecture, timeline, and technical planning with measurable milestones.",
    icon: Map,
  },
  {
    id: "design",
    step: "03",
    title: "Design",
    description:
      "Create wireframes, interfaces, prototypes, and design systems that feel inevitable in use.",
    icon: PenTool,
  },
  {
    id: "development",
    step: "04",
    title: "Development",
    description:
      "Build scalable, secure, and maintainable software with modern technologies and clean architecture.",
    icon: Compass,
  },
  {
    id: "testing",
    step: "05",
    title: "Testing",
    description:
      "Validate quality, accessibility, responsiveness, performance, and reliability before release.",
    icon: FlaskConical,
  },
  {
    id: "launch-growth",
    step: "06",
    title: "Launch & Growth",
    description:
      "Deploy, monitor, iterate, and continuously evolve the product after it reaches the world.",
    icon: Rocket,
  },
];
