"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { HERO_COPY } from "@/features/home/sections/hero/constants";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

type HeroContentProps = {
  className?: string;
};

const easeOut = [0.16, 1, 0.3, 1] as const;

function HeroContent({ className }: HeroContentProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const item = (delay: number) =>
    prefersReducedMotion
      ? { initial: false as const, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: easeOut },
        };

  return (
    <div className={cn("relative z-10 max-w-xl xl:max-w-2xl", className)}>
      <motion.p
        className="mb-5 text-[0.75rem] font-medium tracking-[0.18em] text-accent-blue uppercase sm:mb-6"
        {...item(0.05)}
      >
        {HERO_COPY.eyebrow}
      </motion.p>

      <motion.h1
        id="hero-heading"
        className="text-display-md text-balance text-foreground sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.75rem]"
        {...item(0.12)}
      >
        {HERO_COPY.headline}
      </motion.h1>

      <motion.p
        className="mt-5 max-w-lg text-base leading-relaxed text-text-secondary sm:mt-6 sm:text-[1.0625rem] sm:leading-7"
        {...item(0.22)}
      >
        {HERO_COPY.description}
      </motion.p>

      <motion.div
        className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center"
        {...item(0.32)}
      >
        <Button asChild size="lg" className="group min-w-[11.5rem]">
          <Link href={HERO_COPY.primaryCta.href}>
            {HERO_COPY.primaryCta.label}
            <ArrowRight
              className="size-4 transition-transform duration-[var(--duration-fast)] group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="group min-w-[11.5rem] border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
        >
          <Link href={HERO_COPY.secondaryCta.href}>
            {HERO_COPY.secondaryCta.label}
            <ArrowUpRight
              className="size-4 transition-transform duration-[var(--duration-fast)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}

export { HeroContent };
