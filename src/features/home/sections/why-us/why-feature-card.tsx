"use client";

import {
  useCallback,
  useState,
  type FocusEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import type { LucideIcon } from "lucide-react";

import { Icon } from "@/components/shared/icon";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

type WhyFeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
};

function WhyFeatureCard({
  icon,
  title,
  description,
  className,
}: WhyFeatureCardProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [hovered, setHovered] = useState(false);
  const [spot, setSpot] = useState({ x: 40, y: 30 });

  const onPointerMove = useCallback(
    (event: ReactPointerEvent<HTMLElement>) => {
      if (prefersReducedMotion) return;
      const rect = event.currentTarget.getBoundingClientRect();
      setSpot({
        x: ((event.clientX - rect.left) / rect.width) * 100,
        y: ((event.clientY - rect.top) / rect.height) * 100,
      });
    },
    [prefersReducedMotion],
  );

  return (
    <article
      className={cn("group relative h-full", className)}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onPointerMove={onPointerMove}
      onFocus={(event: FocusEvent<HTMLElement>) => {
        if (event.currentTarget.contains(event.target)) setHovered(true);
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setHovered(false);
        }
      }}
    >
      <div
        className={cn(
          "relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-border/80 bg-surface/40 p-6 transition-[transform,border-color,background-color,box-shadow] duration-[var(--duration-normal)] ease-[var(--ease-out)]",
          "hover:-translate-y-1 hover:border-white/12 hover:bg-surface-elevated/65 hover:shadow-[0_18px_44px_rgb(0_0_0/0.4),0_0_32px_rgb(79_140_255/0.08)]",
          "focus-within:-translate-y-1 focus-within:border-white/12 focus-within:shadow-[0_18px_44px_rgb(0_0_0/0.4),0_0_32px_rgb(79_140_255/0.08)]",
        )}
      >
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-[var(--duration-normal)]",
            hovered && "opacity-100",
          )}
          style={{
            background: `radial-gradient(320px circle at ${spot.x}% ${spot.y}%, rgb(79 140 255 / 0.1), transparent 55%)`,
          }}
        />

        <div
          className={cn(
            "relative z-10 flex size-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-accent-blue transition-[transform,border-color,background-color,box-shadow] duration-[var(--duration-normal)]",
            hovered &&
              "rotate-6 border-accent-blue/30 bg-accent-blue/10 shadow-[0_0_20px_rgb(79_140_255/0.2)]",
          )}
        >
          <Icon icon={icon} size="md" />
        </div>

        <div className="relative z-10 space-y-2">
          <h3 className="text-[1.0625rem] font-semibold tracking-tight text-foreground">
            {title}
          </h3>
          <p className="text-[0.875rem] leading-relaxed text-text-secondary">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

export { WhyFeatureCard, type WhyFeatureCardProps };
