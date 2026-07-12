"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/layout/container";
import {
  HeroBackground,
  useHeroPointerSpotlight,
} from "@/features/home/sections/hero/hero-background";
import { HeroContent } from "@/features/home/sections/hero/hero-content";
import { HeroScrollIndicator } from "@/features/home/sections/hero/hero-scroll-indicator";
import { HeroVisual } from "@/features/home/sections/hero/hero-visual";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

type HeroSectionProps = {
  className?: string;
};

function HeroSection({ className }: HeroSectionProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { spot, onPointerMove, onPointerLeave } = useHeroPointerSpotlight();

  return (
    <section
      id="hero"
      data-section="hero"
      aria-labelledby="hero-heading"
      className={cn(
        "relative flex min-h-[100dvh] flex-col overflow-hidden",
        className,
      )}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <HeroBackground spot={spot} />

      <Container className="relative z-10 flex flex-1 flex-col justify-center pt-24 pb-24 lg:pt-28 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 xl:gap-16">
          <HeroContent />

          <motion.div
            className="relative mx-auto w-full max-w-md lg:max-w-none"
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <HeroVisual />
          </motion.div>
        </div>
      </Container>

      <HeroScrollIndicator />
    </section>
  );
}

export { HeroSection };
