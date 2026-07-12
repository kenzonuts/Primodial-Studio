import type { LucideIcon } from "lucide-react";

import { iconSize, type IconSize } from "@/constants/tokens";
import { cn } from "@/lib/utils";

type IconProps = {
  icon: LucideIcon;
  size?: IconSize;
  className?: string;
  strokeWidth?: number;
  label?: string;
  "aria-hidden"?: boolean;
};

function Icon({
  icon: LucideIconComponent,
  size = "md",
  className,
  strokeWidth = 1.75,
  label,
  "aria-hidden": ariaHidden = !label,
}: IconProps) {
  return (
    <LucideIconComponent
      className={cn("shrink-0", className)}
      size={iconSize[size]}
      strokeWidth={strokeWidth}
      aria-hidden={ariaHidden}
      role={label ? "img" : undefined}
      aria-label={label}
    />
  );
}

export { Icon, type IconProps, type IconSize };
