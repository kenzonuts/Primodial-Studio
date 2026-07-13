"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, type PointerEvent as ReactPointerEvent } from "react";

import { BrandLogo } from "@/components/brand";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

type HeroVisualProps = {
  className?: string;
};

/**
 * Hero brand composition — official mark as the primary visual anchor.
 */
function HeroVisual({ className }: HeroVisualProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 60, damping: 18, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 60, damping: 18, mass: 0.4 });

  useEffect(() => {
    if (prefersReducedMotion) {
      rawX.set(0);
      rawY.set(0);
    }
  }, [prefersReducedMotion, rawX, rawY]);

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    rawX.set(px * 14);
    rawY.set(py * 10);
  };

  const onPointerLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <div
      className={cn(
        "relative mx-auto aspect-square w-full max-w-[34rem] lg:max-w-none",
        className,
      )}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      aria-hidden
    >
      {/* Soft atmosphere — supports the mark, does not compete */}
      <motion.div
        className="absolute inset-[12%] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgb(79 140 255 / 0.18), transparent 55%), radial-gradient(circle at 45% 60%, rgb(124 92 255 / 0.12), transparent 50%)",
        }}
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={
          prefersReducedMotion ? { opacity: 1 } : { opacity: [0.75, 1, 0.75] }
        }
        transition={
          prefersReducedMotion
            ? { duration: 0.5 }
            : { duration: 7, repeat: Infinity, ease: "easeInOut" }
        }
      />

      {/* Quiet orbital ring */}
      <svg
        className="pointer-events-none absolute inset-0 size-full"
        viewBox="0 0 400 400"
        fill="none"
      >
        <motion.circle
          cx="200"
          cy="200"
          r="168"
          stroke="url(#heroBrandArc)"
          strokeWidth="1"
          strokeDasharray="10 18"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={
            prefersReducedMotion
              ? { opacity: 0.35 }
              : { opacity: 0.4, rotate: 360 }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : { rotate: { duration: 80, repeat: Infinity, ease: "linear" } }
          }
          style={{ transformOrigin: "200px 200px" }}
        />
        <defs>
          <linearGradient id="heroBrandArc" x1="0" y1="0" x2="400" y2="400">
            <stop stopColor="#4F8CFF" stopOpacity="0.4" />
            <stop offset="0.5" stopColor="#7C5CFF" stopOpacity="0.15" />
            <stop offset="1" stopColor="#4F8CFF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Brand mark — primary focus */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ x, y }}
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
        animate={
          prefersReducedMotion
            ? { opacity: 1, scale: 1 }
            : { opacity: 1, scale: [1, 1.02, 1] }
        }
        transition={
          prefersReducedMotion
            ? { duration: 0.5 }
            : {
                opacity: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                scale: {
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }
        }
      >
        <div className="relative aspect-square w-[min(72%,22rem)] drop-shadow-[0_0_48px_rgb(79_140_255/0.22)] sm:w-[min(68%,24rem)]">
          <BrandLogo
            variant="mark"
            fill
            priority
            sizes="(max-width: 640px) 72vw, 384px"
          />
        </div>
      </motion.div>
    </div>
  );
}

export { HeroVisual };
