/**
 * Legacy aliases — prefer types from navigation.ts / portfolio.ts.
 */

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type ThemeMode = "dark" | "light" | "system";
