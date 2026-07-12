import type { LucideIcon } from "lucide-react";
import {
  Compass,
  Handshake,
  Layers,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
  Infinity,
} from "lucide-react";

/**
 * About section content — single source of truth for copy.
 * Studio highlights use placeholders until real metrics are published.
 */

export const ABOUT_COPY = {
  eyebrow: "About Us",
  headline: "We shape technology with deliberate care.",
  description:
    "Primordial Studio is a Creative Technology Studio. We partner with founders, companies, and creators to design and engineer digital products that are clear in purpose, rigorous in craft, and built to endure.",
  mission: {
    eyebrow: "Mission",
    title: "Build products that earn trust.",
    body: "We exist to turn ambitious ideas into dependable digital products—software, experiences, and creative systems that people can rely on, understand, and grow with.",
  },
  vision: {
    eyebrow: "Vision",
    title: "A quieter standard for digital excellence.",
    body: "We aim to be the studio teams return to when quality matters more than noise—where thoughtful design, modern engineering, and long-term partnership define how digital work gets made.",
  },
  philosophy: {
    eyebrow: "Our Philosophy",
    quote:
      "Technology should clarify problems, respect people, and leave experiences better than it found them.",
    attribution: "Primordial Studio",
  },
  why: {
    eyebrow: "Why Primordial Studio",
    title: "A partner built for serious product work.",
    description:
      "We combine design depth with engineering discipline—so your product ships with clarity, scales with confidence, and stays maintainable long after launch.",
  },
  cta: {
    eyebrow: "Work with us",
    title: "Let’s build something that lasts.",
    description:
      "Share your vision. We’ll help you shape the product, the system, and the path forward—with clarity from the first conversation.",
    primary: {
      label: "Start Your Project",
      href: "/contact",
    },
    secondary: {
      label: "Explore Our Work",
      href: "/work",
    },
  },
} as const;

export type AboutValue = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const ABOUT_VALUES: AboutValue[] = [
  {
    id: "innovation",
    title: "Innovation",
    description:
      "We explore new methods carefully—adopting technology when it serves the product, not when it serves a trend.",
    icon: Sparkles,
  },
  {
    id: "craftsmanship",
    title: "Craftsmanship",
    description:
      "Details compound. Interfaces, systems, and interactions are refined until they feel inevitable.",
    icon: Wrench,
  },
  {
    id: "integrity",
    title: "Integrity",
    description:
      "We communicate clearly, estimate honestly, and stand behind the work we ship.",
    icon: ShieldCheck,
  },
  {
    id: "partnership",
    title: "Long-term Partnership",
    description:
      "We build relationships measured in outcomes and trust—not one-off deliveries.",
    icon: Handshake,
  },
];

/**
 * Placeholder metrics — replace values when real data is ready.
 * Keep labels stable for layout; only update `value` / `note`.
 */
export type StudioHighlight = {
  id: string;
  label: string;
  /** Display value. Use "—" until a real figure is approved. */
  value: string;
  note?: string;
};

export const STUDIO_HIGHLIGHTS: StudioHighlight[] = [
  {
    id: "projects",
    label: "Projects",
    value: "—",
    note: "Published count coming soon",
  },
  {
    id: "technologies",
    label: "Technologies",
    value: "—",
    note: "Stack depth coming soon",
  },
  {
    id: "industries",
    label: "Industries",
    value: "—",
    note: "Sector coverage coming soon",
  },
  {
    id: "countries",
    label: "Countries",
    value: "—",
    note: "Global reach coming soon",
  },
];

export type AboutFeature = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const ABOUT_FEATURES: AboutFeature[] = [
  {
    id: "human-centered",
    title: "Human-Centered Design",
    description:
      "Every interface begins with the people who use it—clarity first, ornament never.",
    icon: Users,
  },
  {
    id: "scalable-engineering",
    title: "Scalable Engineering",
    description:
      "Architectures that grow with your product: maintainable, observable, and ready for change.",
    icon: Layers,
  },
  {
    id: "modern-technology",
    title: "Modern Technology",
    description:
      "A contemporary stack chosen for performance, accessibility, and long-term velocity.",
    icon: Compass,
  },
  {
    id: "transparent-collaboration",
    title: "Transparent Collaboration",
    description:
      "Shared context, visible progress, and decisions you can follow—from kickoff to release.",
    icon: ShieldCheck,
  },
  {
    id: "long-term-support",
    title: "Long-Term Support",
    description:
      "We stay accountable after launch—iteration, care, and continuity when it matters.",
    icon: Infinity,
  },
  {
    id: "premium-quality",
    title: "Premium Quality",
    description:
      "A high bar for polish: motion with purpose, typography with restraint, systems with integrity.",
    icon: Sparkles,
  },
];
