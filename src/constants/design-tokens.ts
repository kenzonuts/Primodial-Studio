/**
 * Design token compatibility layer + re-exports.
 * Prefer importing from `@/constants/tokens`.
 */

import { brandPalette } from "./tokens/colors";
import { fontFamily, fontWeight, typeScale } from "./tokens/typography";
import { space, sectionSpace } from "./tokens/spacing";
import { duration, easing } from "./tokens/motion";

export {
  colorTokens,
  brandPalette,
  typeScale,
  space,
  radius,
  shadows,
  duration,
  durationMs,
  easing,
  easingCss,
  motionPresets,
  breakpoints,
  containers,
  containerPadding,
  iconSize,
  zIndex,
} from "./tokens";

/** @deprecated Use `brandPalette` */
export const colors = brandPalette;

/** @deprecated Use `typeScale` / `fontFamily` */
export const typography = {
  fontFamily,
  fontWeight,
  scale: typeScale,
} as const;

/** @deprecated Use `space` / `sectionSpace` */
export const spacing = {
  ...space,
  sectionY: {
    mobile: sectionSpace.yMobile,
    desktop: sectionSpace.yDesktop,
  },
  containerMax: "90rem",
  containerPaddingX: {
    mobile: "1.25rem",
    desktop: "3rem",
  },
} as const;

/** @deprecated Use `duration` / `easing` from `@/constants/tokens` */
export const motion = {
  duration: {
    fast: duration.fast,
    base: duration.normal,
    slow: duration.slow,
    slower: duration.verySlow,
  },
  ease: {
    out: easing.easeOut,
    inOut: easing.easeInOut,
  },
} as const;
