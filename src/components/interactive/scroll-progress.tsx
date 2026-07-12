"use client";

import { motion, useSpring, useTransform } from "framer-motion";

import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

type ScrollProgressBarProps = {
  className?: string;
};

/**
 * Top-edge scroll progress — transform-only width via scaleX.
 */
function ScrollProgressBar({ className }: ScrollProgressBarProps) {
  const progress = useScrollProgress();
  const prefersReducedMotion = usePrefersReducedMotion();
  const spring = useSpring(progress, {
    stiffness: prefersReducedMotion ? 500 : 120,
    damping: prefersReducedMotion ? 40 : 28,
    mass: 0.35,
  });
  const scaleX = useTransform(spring, [0, 1], [0, 1]);

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-x-0 top-0 z-[9990] h-[2px]",
        className,
      )}
      aria-hidden
    >
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-accent-blue via-foreground to-accent-purple"
        style={{ scaleX }}
      />
    </div>
  );
}

export { ScrollProgressBar };
