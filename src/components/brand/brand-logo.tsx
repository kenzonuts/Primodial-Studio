import Image from "next/image";

import { SITE_NAME } from "@/constants/site";
import { BRAND_ASSETS } from "@/constants/brand";
import { cn } from "@/lib/utils";

export type BrandLogoVariant = "mark" | "full";

type BrandLogoProps = {
  variant?: BrandLogoVariant;
  /** Visual height in px — width follows intrinsic aspect ratio. Ignored when `fill`. */
  height?: number;
  className?: string;
  priority?: boolean;
  /** When true, force light (inverted) mark regardless of theme. */
  inverted?: boolean;
  /** Fill parent (parent must be `relative` with defined size). */
  fill?: boolean;
  sizes?: string;
};

const INTRINSIC = {
  mark: { width: 461, height: 459 },
  full: { width: 822, height: 703 },
} as const;

/**
 * Official Primordial Studio logo — monochrome asset, auto-inverts in dark mode.
 */
function BrandLogo({
  variant = "mark",
  height = variant === "mark" ? 28 : 72,
  className,
  priority = false,
  inverted,
  fill = false,
  sizes,
}: BrandLogoProps) {
  const intrinsic = INTRINSIC[variant];
  const width = Math.round((height * intrinsic.width) / intrinsic.height);
  const src = variant === "mark" ? BRAND_ASSETS.mark : BRAND_ASSETS.logo;
  const tone = inverted ? "invert" : "dark:invert";

  if (fill) {
    return (
      <Image
        src={src}
        alt={SITE_NAME}
        fill
        sizes={sizes ?? "280px"}
        priority={priority}
        className={cn("object-contain select-none", tone, className)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={SITE_NAME}
      width={width}
      height={height}
      priority={priority}
      className={cn(
        "h-auto w-auto object-contain select-none",
        tone,
        className,
      )}
    />
  );
}

export { BrandLogo, type BrandLogoProps };
