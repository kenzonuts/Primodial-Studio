"use client";

import {
  useCallback,
  useState,
  type FocusEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";

import { Icon } from "@/components/shared/icon";
import type { TechCategory } from "@/features/home/sections/technology/constants";
import { TechnologyBadge } from "@/features/home/sections/technology/technology-badge";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

type TechnologyCardProps = {
  category: TechCategory;
  className?: string;
};

function TechnologyCard({ category, className }: TechnologyCardProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [hovered, setHovered] = useState(false);
  const [spot, setSpot] = useState({ x: 50, y: 30 });

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
      data-tech-category={category.id}
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
          "relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-surface/45 p-6 transition-[transform,border-color,background-color,box-shadow] duration-[var(--duration-normal)] ease-[var(--ease-out)]",
          "hover:-translate-y-1.5 hover:border-white/15 hover:bg-surface-elevated/70 hover:shadow-[0_20px_50px_rgb(0_0_0/0.42),0_0_40px_rgb(124_92_255/0.08)]",
          "focus-within:-translate-y-1.5 focus-within:border-white/15 focus-within:shadow-[0_20px_50px_rgb(0_0_0/0.42),0_0_40px_rgb(124_92_255/0.08)]",
        )}
      >
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-[var(--duration-normal)]",
            hovered && "opacity-100",
          )}
          style={{
            background: `radial-gradient(380px circle at ${spot.x}% ${spot.y}%, rgb(124 92 255 / 0.12), transparent 50%)`,
          }}
        />

        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-px rounded-[15px] opacity-0 transition-opacity duration-[var(--duration-normal)]",
            hovered && "opacity-100",
          )}
          style={{
            background:
              "linear-gradient(135deg, rgb(79 140 255 / 0.3), transparent 42%, transparent 58%, rgb(124 92 255 / 0.22))",
            padding: 1,
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />

        <div className="relative z-10 flex items-start justify-between gap-3">
          <div
            className={cn(
              "flex size-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-accent-purple transition-[transform,border-color,background-color,box-shadow] duration-[var(--duration-normal)]",
              hovered &&
                "rotate-6 border-accent-purple/30 bg-accent-purple/10 shadow-[0_0_22px_rgb(124_92_255/0.22)]",
            )}
          >
            <Icon icon={category.icon} size="md" />
          </div>
          <span className="text-[0.6875rem] font-medium tracking-[0.14em] text-text-muted uppercase">
            Stack
          </span>
        </div>

        <div className="relative z-10 mt-5">
          <h3 className="text-[1.125rem] font-semibold tracking-tight text-foreground">
            {category.title}
          </h3>
          <p className="mt-2 text-[0.875rem] leading-relaxed text-text-secondary">
            {category.description}
          </p>
        </div>

        <ul
          className="relative z-10 mt-5 flex flex-wrap gap-2"
          aria-label={`${category.title} technologies`}
        >
          {category.technologies.map((tech, index) => (
            <li key={tech}>
              <TechnologyBadge label={tech} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export { TechnologyCard, type TechnologyCardProps };
