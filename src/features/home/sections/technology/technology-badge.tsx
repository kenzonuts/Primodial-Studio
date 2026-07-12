"use client";

import { motion } from "framer-motion";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

type TechnologyBadgeProps = {
  label: string;
  className?: string;
  index?: number;
};

function TechnologyBadge({
  label,
  className,
  index = 0,
}: TechnologyBadgeProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.span
      className={cn(
        "inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[0.6875rem] font-medium tracking-tight text-text-secondary transition-[border-color,background-color,color,transform,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-out)] hover:-translate-y-0.5 hover:border-accent-blue/30 hover:bg-accent-blue/10 hover:text-foreground hover:shadow-[0_0_16px_rgb(79_140_255/0.15)]",
        className,
      )}
      whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
      transition={{ delay: prefersReducedMotion ? 0 : index * 0.02 }}
    >
      {label}
    </motion.span>
  );
}

export { TechnologyBadge, type TechnologyBadgeProps };
