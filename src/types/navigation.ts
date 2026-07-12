export type NavigationStatus = "live" | "planned" | "hidden";

export type NavigationItem = {
  id: string;
  label: string;
  href: string;
  external?: boolean;
  description?: string;
  status?: NavigationStatus;
  megaMenu?: MegaMenuColumn[];
  children?: NavigationItem[];
};

export type MegaMenuColumn = {
  id: string;
  title: string;
  items: NavigationItem[];
};

export type NavigationUtilities = {
  themeToggle: boolean;
  search: boolean;
  language: boolean;
  dashboard: boolean;
};

export type NavigationTree = {
  items: NavigationItem[];
  cta: NavigationItem;
  utilities: NavigationUtilities;
};

export type FooterNavigation = {
  company: NavigationItem[];
  work: NavigationItem[];
  services: NavigationItem[];
  resources: NavigationItem[];
  legal: NavigationItem[];
  newsletterReady: boolean;
};

export type NavbarChromeState = {
  isSolid: boolean;
  isHidden: boolean;
  isMegaMenuOpen: boolean;
  isMobileOpen: boolean;
};
