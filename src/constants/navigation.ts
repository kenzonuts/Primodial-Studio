import {
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

export const SERVICE_NAV_ITEMS: NavigationItem[] = SERVICE_SLUGS.map(
  (slug) => ({
    id: slug,
    label: SERVICE_LABELS[slug],
    href: ROUTES.service(slug),
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
 * Primary site navigation — desktop + mobile share this tree.
 * Utility slots (theme, search, locale, dashboard) are declared ready.
 */
export const PRIMARY_NAVIGATION: NavigationTree = {
  items: [
    {
      id: "home",
      label: "Home",
      href: ROUTES.home,
    },
    {
      id: "about",
      label: "About",
      href: ROUTES.about,
    },
    {
      id: "services",
      label: "Services",
      href: ROUTES.services,
      megaMenu: SERVICES_MEGA_MENU,
    },
    {
      id: "portfolio",
      label: "Portfolio",
      href: ROUTES.work,
    },
    {
      id: "technology",
      label: "Technology",
      href: ROUTES.technology,
    },
    {
      id: "contact",
      label: "Contact",
      href: ROUTES.contact,
    },
  ],
  cta: {
    id: "start-project",
    label: "Start Your Project",
    href: ROUTES.contact,
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
    { id: "about", label: "About", href: ROUTES.about },
    { id: "process", label: "Process", href: ROUTES.process },
    { id: "contact", label: "Contact", href: ROUTES.contact },
  ],
  work: [{ id: "work", label: "All work", href: ROUTES.work }],
  services: SERVICE_NAV_ITEMS,
  resources: [
    { id: "technology", label: "Technology", href: ROUTES.technology },
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
  ],
  legal: [
    { id: "privacy", label: "Privacy", href: ROUTES.privacy },
    { id: "terms", label: "Terms", href: ROUTES.terms },
  ],
  newsletterReady: true,
};
