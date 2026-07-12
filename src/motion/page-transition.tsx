"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { pageTransitionVariants } from "@/animations/variants";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type PageTransitionProps = {
  children: ReactNode;
};

/**
 * Route-level fade / scale / blur transition (200–400ms).
 * Mount via app/template.tsx.
 */
function PageTransition({ children }: PageTransitionProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransitionVariants}
      className="min-h-dvh"
    >
      {children}
    </motion.div>
  );
}

export { PageTransition };
