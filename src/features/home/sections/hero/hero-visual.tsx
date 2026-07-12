"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, type PointerEvent as ReactPointerEvent } from "react";

import { HERO_FLOATING_CARDS } from "@/features/home/sections/hero/constants";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

type HeroVisualProps = {
  className?: string;
};

function FloatingCard({
  label,
  meta,
  x,
  y,
  delay,
  reducedMotion,
}: {
  label: string;
  meta: string;
  x: string;
  y: string;
  delay: number;
  reducedMotion: boolean;
}) {
  return (
    <motion.div
      className="glass absolute z-10 min-w-[9.5rem] rounded-xl px-3.5 py-3 shadow-glass"
      style={{ left: x, top: y }}
      initial={reducedMotion ? false : { opacity: 0, y: 18, scale: 0.96 }}
      animate={
        reducedMotion
          ? { opacity: 1 }
          : {
              opacity: 1,
              y: [0, -8, 0],
              scale: 1,
            }
      }
      transition={
        reducedMotion
          ? { duration: 0 }
          : {
              opacity: { delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              scale: { delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              y: {
                delay: delay + 0.6,
                duration: 5.5 + delay * 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }
      }
    >
      <p className="text-[0.6875rem] font-medium tracking-wide text-foreground">
        {label}
      </p>
      <p className="mt-1 text-[0.625rem] text-text-muted">{meta}</p>
    </motion.div>
  );
}

/**
 * Custom abstract composition — no stock art.
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
    rawX.set(px * 18);
    rawY.set(py * 14);
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
      {/* Outer ring */}
      <motion.div
        className="absolute inset-[6%] rounded-full border border-white/[0.06]"
        style={{ x, y }}
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Core orb */}
      <motion.div
        className="absolute inset-[18%] rounded-full"
        style={{
          x,
          y,
          background:
            "radial-gradient(circle at 35% 30%, rgb(255 255 255 / 0.16), transparent 35%), radial-gradient(circle at 60% 65%, rgb(79 140 255 / 0.45), transparent 50%), radial-gradient(circle at 40% 70%, rgb(124 92 255 / 0.35), rgb(5 5 5 / 0.2) 70%)",
          boxShadow:
            "0 0 80px rgb(79 140 255 / 0.25), inset 0 0 60px rgb(255 255 255 / 0.04)",
        }}
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.88 }}
        animate={
          prefersReducedMotion
            ? { opacity: 1, scale: 1 }
            : { opacity: 1, scale: [1, 1.03, 1] }
        }
        transition={
          prefersReducedMotion
            ? { duration: 0.6 }
            : {
                opacity: { duration: 0.7 },
                scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              }
        }
      />

      {/* Abstract arcs */}
      <svg
        className="absolute inset-0 size-full"
        viewBox="0 0 400 400"
        fill="none"
      >
        <motion.circle
          cx="200"
          cy="200"
          r="148"
          stroke="url(#heroArc)"
          strokeWidth="1"
          strokeDasharray="18 14"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={
            prefersReducedMotion
              ? { opacity: 0.7 }
              : { opacity: 0.7, rotate: 360 }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : { rotate: { duration: 60, repeat: Infinity, ease: "linear" } }
          }
          style={{ transformOrigin: "200px 200px" }}
        />
        <defs>
          <linearGradient id="heroArc" x1="0" y1="0" x2="400" y2="400">
            <stop stopColor="#4F8CFF" stopOpacity="0.55" />
            <stop offset="0.5" stopColor="#7C5CFF" stopOpacity="0.25" />
            <stop offset="1" stopColor="#4F8CFF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Geometric nodes */}
      <motion.span
        className="absolute top-[22%] right-[18%] size-2.5 rounded-full bg-accent-blue/90 shadow-[0_0_18px_rgb(79_140_255/0.8)]"
        animate={prefersReducedMotion ? undefined : { opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="absolute bottom-[26%] left-[16%] size-2 rounded-full bg-accent-purple/90 shadow-[0_0_16px_rgb(124_92_255/0.75)]"
        animate={prefersReducedMotion ? undefined : { opacity: [0.4, 1, 0.4] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6,
        }}
      />

      {HERO_FLOATING_CARDS.map((card) => (
        <FloatingCard
          key={card.id}
          label={card.label}
          meta={card.meta}
          x={card.x}
          y={card.y}
          delay={card.delay}
          reducedMotion={prefersReducedMotion}
        />
      ))}
    </div>
  );
}

export { HeroVisual };
