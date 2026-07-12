"use client";

import { motion } from "framer-motion";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

type HeroScrollIndicatorProps = {
  className?: string;
  targetId?: string;
};

function HeroScrollIndicator({
  className,
  targetId = "about",
}: HeroScrollIndicatorProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <a
      href={`#${targetId}`}
      className={cn(
        "group absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-text-muted transition-colors hover:text-foreground focus-visible:rounded-md focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none sm:bottom-8",
        className,
      )}
      aria-label="Scroll to next section"
    >
      <span className="text-[0.625rem] font-medium tracking-[0.2em] uppercase">
        Scroll
      </span>
      <span className="relative flex h-10 w-6 items-start justify-center rounded-full border border-white/15 bg-white/[0.03] pt-1.5">
        <motion.span
          className="block size-1 rounded-full bg-foreground/80"
          animate={
            prefersReducedMotion
              ? undefined
              : { y: [0, 12, 0], opacity: [1, 0.35, 1] }
          }
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </span>
    </a>
  );
}

export { HeroScrollIndicator };
