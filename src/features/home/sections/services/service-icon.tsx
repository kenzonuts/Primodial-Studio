import type { LucideIcon } from "lucide-react";

import { Icon } from "@/components/shared/icon";
import { cn } from "@/lib/utils";

type ServiceIconProps = {
  icon: LucideIcon;
  className?: string;
  hovered?: boolean;
};

function ServiceIcon({ icon, className, hovered }: ServiceIconProps) {
  return (
    <div
      className={cn(
        "flex size-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-accent-blue transition-[transform,border-color,background-color,box-shadow] duration-[var(--duration-normal)] ease-[var(--ease-out)]",
        hovered &&
          "rotate-6 border-accent-blue/30 bg-accent-blue/10 shadow-[0_0_24px_rgb(79_140_255/0.2)]",
        className,
      )}
    >
      <Icon icon={icon} size="md" />
    </div>
  );
}

export { ServiceIcon, type ServiceIconProps };
