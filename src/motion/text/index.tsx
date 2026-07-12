"use client";

import { motion } from "framer-motion";
import type { ElementType, ReactNode } from "react";

import {
  charRevealVariants,
  staggerContainerVariants,
  wordRevealVariants,
} from "@/animations/variants";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { cn } from "@/lib/utils";

type TextRevealBase = {
  children: string;
  className?: string;
  as?: ElementType;
  delay?: number;
};

function splitWords(text: string) {
  return text.split(/(\s+)/).filter(Boolean);
}

/**
 * Word-by-word reveal — SplitText-compatible (overflow mask per word).
 */
function WordReveal({
  children,
  className,
  as: Tag = "span",
  delay = 0,
}: TextRevealBase) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { ref, isInView } = useSectionInView<HTMLElement>({ threshold: 0.2 });
  const words = splitWords(children);

  if (prefersReducedMotion) {
    return (
      <Tag className={className} ref={ref as never}>
        {children}
      </Tag>
    );
  }

  return (
    <Tag className={cn("inline", className)} ref={ref as never}>
      <motion.span
        className="inline"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          ...staggerContainerVariants,
          visible: {
            transition: {
              staggerChildren: 0.035,
              delayChildren: delay,
            },
          },
        }}
        aria-label={children}
      >
        {words.map((word, index) =>
          /\s+/.test(word) ? (
            <span key={`s-${index}`}>{word}</span>
          ) : (
            <span
              key={`w-${index}`}
              className="inline-block overflow-hidden align-bottom"
            >
              <motion.span
                className="inline-block"
                variants={wordRevealVariants}
              >
                {word}
              </motion.span>
            </span>
          ),
        )}
      </motion.span>
    </Tag>
  );
}

/**
 * Character reveal — use sparingly on short headlines.
 */
function CharReveal({
  children,
  className,
  as: Tag = "span",
  delay = 0,
}: TextRevealBase) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { ref, isInView } = useSectionInView<HTMLElement>({ threshold: 0.2 });
  const chars = Array.from(children);

  if (prefersReducedMotion) {
    return (
      <Tag className={className} ref={ref as never}>
        {children}
      </Tag>
    );
  }

  return (
    <Tag className={cn("inline", className)} ref={ref as never}>
      <motion.span
        className="inline"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: { staggerChildren: 0.018, delayChildren: delay },
          },
        }}
        aria-label={children}
      >
        {chars.map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            className="inline-block"
            variants={charRevealVariants}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}

type FadeUpTextProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

function FadeUpText({ children, className, delay = 0 }: FadeUpTextProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { ref, isInView } = useSectionInView<HTMLDivElement>({
    threshold: 0.15,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      animate={
        isInView || prefersReducedMotion
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 16 }
      }
      transition={{
        duration: prefersReducedMotion ? 0 : 0.55,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Mask reveal — clip-path wipe upward.
 */
function MaskReveal({ children, className, delay = 0 }: FadeUpTextProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { ref, isInView } = useSectionInView<HTMLDivElement>({
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      className={cn("overflow-hidden", className)}
      initial={
        prefersReducedMotion
          ? false
          : { clipPath: "inset(100% 0 0 0)", opacity: 0.6 }
      }
      animate={
        isInView || prefersReducedMotion
          ? { clipPath: "inset(0% 0 0 0)", opacity: 1 }
          : { clipPath: "inset(100% 0 0 0)", opacity: 0.6 }
      }
      transition={{
        duration: prefersReducedMotion ? 0 : 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Soft gradient shimmer across text — decorative, not required for meaning.
 */
function GradientReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <span
      className={cn(
        "bg-[linear-gradient(110deg,var(--foreground)_0%,var(--accent-blue)_45%,var(--accent-purple)_70%,var(--foreground)_100%)] bg-size-[200%_100%] bg-clip-text text-transparent",
        !prefersReducedMotion && "animate-[gradient-reveal_4s_ease_infinite]",
        className,
      )}
    >
      {children}
    </span>
  );
}

export { WordReveal, CharReveal, FadeUpText, MaskReveal, GradientReveal };
