"use client";

import { motion } from "framer-motion";

import {
  HeroSpotlight,
  useHeroPointerSpotlight,
} from "@/features/home/sections/hero/hero-spotlight";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

type HeroBackgroundProps = {
  className?: string;
  spot: { x: number; y: number; active: boolean };
};

function HeroBackground({ className, spot }: HeroBackgroundProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div className="absolute inset-0 bg-background" />

      <motion.div
        className="absolute -top-[20%] left-[10%] h-[55%] w-[55%] rounded-full bg-[radial-gradient(circle,rgb(79_140_255/0.22),transparent_68%)] blur-3xl"
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [0, 24, 0], y: [0, 16, 0], opacity: [0.7, 1, 0.7] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[20%] right-[-10%] h-[60%] w-[50%] rounded-full bg-[radial-gradient(circle,rgb(124_92_255/0.18),transparent_70%)] blur-3xl"
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [0, -20, 0], y: [0, 22, 0], opacity: [0.55, 0.9, 0.55] }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute bottom-[-15%] left-[30%] h-[45%] w-[50%] rounded-full bg-[radial-gradient(circle,rgb(79_140_255/0.1),transparent_70%)] blur-3xl" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgb(5_5_5/0.55)_100%)]" />

      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(255 255 255 / 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(255 255 255 / 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at 70% 40%, black 10%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 70% 40%, black 10%, transparent 72%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.045] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background/80 to-transparent" />

      <HeroSpotlight x={spot.x} y={spot.y} active={spot.active} />
    </div>
  );
}

export { HeroBackground, useHeroPointerSpotlight };
