import {
  HOME_SECTIONS,
  ROUTES,
  SERVICE_SLUGS,
  type ServiceRouteSlug,
} from "@/constants/routes";
import type {
  FooterNavigation,
  MegaMenuColumn,
  NavigationItem,
  NavigationTree,
} from "@/types/navigation";

const SERVICE_LABELS: Record<ServiceRouteSlug, string> = {
  "software-engineering": "Software Engineering",
  "website-development": "Website Development",
  "mobile-application": "Mobile Application",
  "ui-ux-design": "UI / UX Design",
  "brand-identity": "Brand Identity",
  "artificial-intelligence": "Artificial Intelligence",
  "creative-technology": "Creative Technology",
  "roblox-development": "Roblox Development",
  "3d-visualization": "3D Visualization",
};

/** Until /services/[slug] pages ship, deep-link to the homepage services section. */
export const SERVICE_NAV_ITEMS: NavigationItem[] = SERVICE_SLUGS.map(
  (slug) => ({
    id: slug,
    label: SERVICE_LABELS[slug],
    href: HOME_SECTIONS.services,
  }),
);

export const SERVICES_MEGA_MENU: MegaMenuColumn[] = [
  {
    id: "build",
    title: "Build",
    items: SERVICE_NAV_ITEMS.filter((item) =>
      [
        "software-engineering",
        "website-development",
        "mobile-application",
        "artificial-intelligence",
      ].includes(item.id),
    ),
  },
  {
    id: "design",
    title: "Design",
    items: SERVICE_NAV_ITEMS.filter((item) =>
      ["ui-ux-design", "brand-identity", "3d-visualization"].includes(item.id),
    ),
  },
  {
    id: "create",
    title: "Create",
    items: SERVICE_NAV_ITEMS.filter((item) =>
      ["creative-technology", "roblox-development"].includes(item.id),
    ),
  },
];

/**
 * Primary site navigation — points at live homepage sections for launch.
 */
export const PRIMARY_NAVIGATION: NavigationTree = {
  items: [
    {
      id: "home",
      label: "Home",
      href: HOME_SECTIONS.home,
    },
    {
      id: "about",
      label: "About",
      href: HOME_SECTIONS.about,
    },
    {
      id: "services",
      label: "Services",
      href: HOME_SECTIONS.services,
      megaMenu: SERVICES_MEGA_MENU,
    },
    {
      id: "portfolio",
      label: "Portfolio",
      href: HOME_SECTIONS.portfolio,
    },
    {
      id: "technology",
      label: "Technology",
      href: HOME_SECTIONS.technology,
    },
    {
      id: "contact",
      label: "Contact",
      href: HOME_SECTIONS.contact,
    },
  ],
  cta: {
    id: "start-project",
    label: "Start Your Project",
    href: HOME_SECTIONS.cta,
  },
  utilities: {
    themeToggle: true,
    search: true,
    language: true,
    dashboard: true,
  },
};

export const FOOTER_NAVIGATION: FooterNavigation = {
  company: [
    { id: "about", label: "About", href: HOME_SECTIONS.about },
    { id: "services", label: "Services", href: HOME_SECTIONS.services },
    { id: "portfolio", label: "Portfolio", href: HOME_SECTIONS.portfolio },
    { id: "technology", label: "Technology", href: HOME_SECTIONS.technology },
    { id: "process", label: "Process", href: HOME_SECTIONS.process },
  ],
  work: [{ id: "work", label: "All work", href: HOME_SECTIONS.portfolio }],
  services: SERVICE_NAV_ITEMS,
  resources: [
    {
      id: "blog",
      label: "Blog",
      href: ROUTES.blog,
      status: "planned",
    },
    {
      id: "careers",
      label: "Careers",
      href: ROUTES.careers,
      status: "planned",
    },
    { id: "privacy", label: "Privacy Policy", href: ROUTES.privacy },
    { id: "terms", label: "Terms of Service", href: ROUTES.terms },
  ],
  legal: [
    { id: "privacy", label: "Privacy Policy", href: ROUTES.privacy },
    { id: "terms", label: "Terms of Service", href: ROUTES.terms },
  ],
  newsletterReady: true,
};
