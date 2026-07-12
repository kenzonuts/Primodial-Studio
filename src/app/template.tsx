"use client";

import { PageTransition } from "@/motion/page-transition";

/**
 * App Router template — runs on navigation for subtle page transitions.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
