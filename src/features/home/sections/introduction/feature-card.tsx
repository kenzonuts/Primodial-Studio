import type { LucideIcon } from "lucide-react";

import { Icon } from "@/components/shared/icon";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
};

function FeatureCard({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <article
      className={cn(
        "group relative flex h-full gap-4 rounded-2xl border border-border/80 bg-surface/40 p-5 transition-[background-color,border-color,transform] duration-[var(--duration-normal)] ease-[var(--ease-out)] hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-elevated/80",
        className,
      )}
    >
      <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/8 bg-white/[0.03] text-accent-purple transition-colors group-hover:border-accent-purple/25 group-hover:bg-accent-purple/10">
        <Icon icon={icon} size="sm" />
      </div>
      <div className="space-y-1.5">
        <h3 className="text-[0.9375rem] font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="text-body-sm leading-relaxed text-text-secondary">
          {description}
        </p>
      </div>
    </article>
  );
}

export { FeatureCard, type FeatureCardProps };
