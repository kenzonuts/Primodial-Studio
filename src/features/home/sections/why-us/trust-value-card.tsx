import type { LucideIcon } from "lucide-react";

import { Icon } from "@/components/shared/icon";
import { cn } from "@/lib/utils";

type TrustValueCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
};

function TrustValueCard({
  icon,
  title,
  description,
  className,
}: TrustValueCardProps) {
  return (
    <article
      className={cn(
        "group glass relative flex h-full flex-col gap-5 rounded-2xl p-7 transition-[transform,border-color,box-shadow] duration-[var(--duration-normal)] ease-[var(--ease-out)] hover:-translate-y-1 hover:border-white/12 hover:shadow-glow",
        className,
      )}
    >
      <div className="flex size-14 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] text-accent-purple transition-[transform,border-color,background-color,box-shadow] duration-[var(--duration-normal)] group-hover:rotate-3 group-hover:border-accent-purple/30 group-hover:bg-accent-purple/10 group-hover:shadow-[0_0_24px_rgb(124_92_255/0.2)]">
        <Icon icon={icon} size="lg" />
      </div>
      <div className="space-y-2">
        <h3 className="text-heading-sm text-foreground">{title}</h3>
        <p className="text-body-sm leading-relaxed text-text-secondary">
          {description}
        </p>
      </div>
    </article>
  );
}

export { TrustValueCard, type TrustValueCardProps };
