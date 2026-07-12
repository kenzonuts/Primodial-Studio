import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Handshake,
  Layers,
  Palette,
  ShieldCheck,
  Sparkles,
  Gauge,
  Infinity,
} from "lucide-react";

export const WHY_US_COPY = {
  eyebrow: "Why Us",
  headline: "A partner measured by what lasts—not what launches once.",
  description:
    "Primordial Studio is built for teams who want more than a finished ticket. We focus on quality, scalable systems, clear collaboration, and products that keep creating value long after release.",
} as const;

export const TRUST_QUOTE = {
  eyebrow: "Our Standard",
  quote:
    "We do not ship disposable software. We craft digital products meant to earn trust, carry weight, and improve with time.",
  attribution: "Primordial Studio",
} as const;

export type WhyFeature = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const WHY_FEATURES: WhyFeature[] = [
  {
    id: "engineering-excellence",
    title: "Engineering Excellence",
    description:
      "We build maintainable software designed for long-term scalability.",
    icon: Layers,
  },
  {
    id: "design-with-purpose",
    title: "Design with Purpose",
    description: "Every interface is crafted to solve real business problems.",
    icon: Palette,
  },
  {
    id: "modern-technology",
    title: "Modern Technology",
    description: "We use reliable and future-ready technologies.",
    icon: Sparkles,
  },
  {
    id: "transparent-collaboration",
    title: "Transparent Collaboration",
    description: "Open communication throughout every stage of development.",
    icon: Handshake,
  },
  {
    id: "performance-first",
    title: "Performance First",
    description: "Fast, optimized, and accessible digital experiences.",
    icon: Gauge,
  },
  {
    id: "long-term-partnership",
    title: "Long-Term Partnership",
    description: "We continue improving products after launch.",
    icon: Infinity,
  },
];

export const VALUES_COPY = {
  eyebrow: "Values",
  headline: "Principles that shape how we work.",
  description:
    "These are not slogans. They are the operating standards behind every engagement.",
} as const;

export type CompanyValue = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const COMPANY_VALUES: CompanyValue[] = [
  {
    id: "innovation",
    title: "Innovation",
    description:
      "We adopt new methods when they improve outcomes—not when they inflate the stack.",
    icon: Sparkles,
  },
  {
    id: "craftsmanship",
    title: "Craftsmanship",
    description:
      "Details compound. Interfaces, systems, and interactions are refined until they feel inevitable.",
    icon: Layers,
  },
  {
    id: "integrity",
    title: "Integrity",
    description:
      "Clear estimates, honest tradeoffs, and accountability for the work we put into the world.",
    icon: ShieldCheck,
  },
  {
    id: "continuous-learning",
    title: "Continuous Learning",
    description:
      "We stay sharp—studying tools, patterns, and practice so your product never stands still.",
    icon: BookOpen,
  },
];
