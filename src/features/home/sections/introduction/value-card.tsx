import type { LucideIcon } from "lucide-react";

import { Icon } from "@/components/shared/icon";
import { cn } from "@/lib/utils";

type ValueCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
};

function ValueCard({ icon, title, description, className }: ValueCardProps) {
  return (
    <article
      className={cn(
        "group glass relative flex h-full flex-col gap-4 rounded-2xl p-6 transition-[transform,border-color,box-shadow] duration-[var(--duration-normal)] ease-[var(--ease-out)] hover:-translate-y-1 hover:border-white/10 hover:shadow-glow",
        className,
      )}
    >
      <div className="flex size-10 items-center justify-center rounded-xl border border-white/8 bg-white/[0.03] text-accent-blue transition-colors duration-[var(--duration-fast)] group-hover:border-accent-blue/30 group-hover:bg-accent-blue/10">
        <Icon icon={icon} size="md" />
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

export { ValueCard, type ValueCardProps };
