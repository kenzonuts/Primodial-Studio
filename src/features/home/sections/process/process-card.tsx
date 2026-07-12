"use client";

import {
  useCallback,
  useState,
  type FocusEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Icon } from "@/components/shared/icon";
import type { ProcessStep } from "@/features/home/sections/process/constants";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

type ProcessCardProps = {
  step: ProcessStep;
  className?: string;
};

function ProcessCard({ step, className }: ProcessCardProps) {
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
      data-process-step={step.id}
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
          "glass relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-[transform,border-color,box-shadow] duration-[var(--duration-normal)] ease-[var(--ease-out)]",
          "hover:-translate-y-1.5 hover:border-white/15 hover:shadow-[0_20px_50px_rgb(0_0_0/0.4),0_0_36px_rgb(79_140_255/0.1)]",
          "focus-within:-translate-y-1.5 focus-within:border-white/15 focus-within:shadow-[0_20px_50px_rgb(0_0_0/0.4),0_0_36px_rgb(79_140_255/0.1)]",
        )}
      >
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-[var(--duration-normal)]",
            hovered && "opacity-100",
          )}
          style={{
            background: `radial-gradient(340px circle at ${spot.x}% ${spot.y}%, rgb(79 140 255 / 0.12), transparent 50%)`,
          }}
        />

        <div className="relative z-10 flex items-start justify-between gap-3">
          <motion.span
            className={cn(
              "text-4xl font-bold tracking-tight tabular-nums transition-colors duration-[var(--duration-normal)] md:text-5xl",
              hovered ? "text-accent-blue/40" : "text-white/10",
            )}
            animate={
              prefersReducedMotion ? undefined : hovered ? { y: -2 } : { y: 0 }
            }
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden
          >
            {step.step}
          </motion.span>
          <div
            className={cn(
              "flex size-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-accent-blue transition-[transform,border-color,background-color,box-shadow] duration-[var(--duration-normal)]",
              hovered &&
                "rotate-6 border-accent-blue/30 bg-accent-blue/10 shadow-[0_0_20px_rgb(79_140_255/0.2)]",
            )}
          >
            <Icon icon={step.icon} size="md" />
          </div>
        </div>

        <div className="relative z-10 mt-5 flex flex-1 flex-col">
          <p className="text-[0.6875rem] font-medium tracking-[0.14em] text-text-muted uppercase">
            Step {step.step}
          </p>
          <h3 className="mt-2 text-[1.125rem] font-semibold tracking-tight text-foreground">
            {step.title}
          </h3>
          <p className="mt-2 text-[0.875rem] leading-relaxed text-text-secondary">
            {step.description}
          </p>

          <div className="mt-auto flex items-center pt-5">
            <motion.span
              className="inline-flex items-center gap-1.5 text-[0.75rem] font-medium text-accent-blue"
              initial={false}
              animate={
                prefersReducedMotion
                  ? { opacity: 0.7 }
                  : hovered
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -6 }
              }
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              aria-hidden={!hovered}
            >
              Next phase
              <ArrowRight className="size-3.5" />
            </motion.span>
          </div>
        </div>
      </div>
    </article>
  );
}

export { ProcessCard, type ProcessCardProps };
