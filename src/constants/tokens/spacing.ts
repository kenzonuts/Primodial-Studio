/**
 * 8-point spacing system (values in px for clarity; use as rem in CSS).
 */

export const space = {
  0: "0px",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  8: "32px",
  10: "40px",
  12: "48px",
  16: "64px",
  20: "80px",
  24: "96px",
  32: "128px",
  40: "160px",
  48: "192px",
} as const;

export const sectionSpace = {
  yMobile: space[16],
  yTablet: space[20],
  yDesktop: space[24],
} as const;

export type SpaceToken = keyof typeof space;
