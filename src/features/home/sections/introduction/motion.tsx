"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { cn } from "@/lib/utils";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
} & Omit<HTMLMotionProps<"div">, "children" | "initial" | "animate">;

function FadeIn({
  children,
  className,
  delay = 0,
  y = 20,
  ...props
}: FadeInProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { ref, isInView } = useSectionInView<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: "0px 0px -8% 0px",
  });

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={prefersReducedMotion ? false : { opacity: 0, y }}
      animate={
        isInView || prefersReducedMotion
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y }
      }
      transition={{
        duration: prefersReducedMotion ? 0 : 0.65,
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
    threshold: 0.12,
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
            staggerChildren: prefersReducedMotion ? 0 : 0.08,
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
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT },
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
