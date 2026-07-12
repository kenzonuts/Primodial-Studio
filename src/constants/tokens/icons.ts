/**
 * Lucide icon size scale — use only these sizes.
 */

export const iconSize = {
  xs: 16,
  sm: 18,
  md: 20,
  lg: 24,
  xl: 32,
} as const;

export type IconSize = keyof typeof iconSize;
