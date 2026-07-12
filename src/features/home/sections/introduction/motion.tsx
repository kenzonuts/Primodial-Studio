"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

import { EASE_OUT } from "@/animations/easings";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { cn } from "@/lib/utils";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Soft blur-in — transform/opacity/filter only */
  blur?: boolean;
} & Omit<HTMLMotionProps<"div">, "children" | "initial" | "animate">;

/**
 * Section entrance — used across homepage storytelling.
 * Enhanced with optional blur-in; layout-neutral.
 */
function FadeIn({
  children,
  className,
  delay = 0,
  y = 22,
  blur = true,
  ...props
}: FadeInProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { ref, isInView } = useSectionInView<HTMLDivElement>({
    threshold: 0.12,
    rootMargin: "0px 0px -6% 0px",
  });

  const hidden = {
    opacity: 0,
    y,
    ...(blur ? { filter: "blur(8px)" } : {}),
  };
  const visible = {
    opacity: 1,
    y: 0,
    ...(blur ? { filter: "blur(0px)" } : {}),
  };

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={prefersReducedMotion ? false : hidden}
      animate={isInView || prefersReducedMotion ? visible : hidden}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.7,
        delay: prefersReducedMotion ? 0 : delay,
        ease: EASE_OUT,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

function Stagger({ children, className, delay = 0 }: StaggerProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { ref, isInView } = useSectionInView<HTMLDivElement>({
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView || prefersReducedMotion ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: prefersReducedMotion ? 0 : 0.07,
            delayChildren: prefersReducedMotion ? 0 : delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

const staggerItemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className={className}
      variants={
        prefersReducedMotion
          ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
          : staggerItemVariants
      }
    >
      {children}
    </motion.div>
  );
}

export { FadeIn, Stagger, StaggerItem, EASE_OUT };
