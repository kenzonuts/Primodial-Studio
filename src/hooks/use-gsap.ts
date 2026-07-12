"use client";

import { useEffect, useLayoutEffect, useRef, type DependencyList } from "react";

import { gsap, registerGsapPlugins } from "@/motion/gsap";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Scoped GSAP context — auto-cleans on unmount.
 * Skip body when reduced motion is preferred.
 */
export function useGsap(
  factory: (gsapInstance: typeof gsap) => void,
  deps: DependencyList = [],
) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const scopeRef = useRef<HTMLElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion) return;

    registerGsapPlugins();
    const ctx = gsap.context(() => {
      factory(gsap);
    }, scopeRef);

    return () => {
      ctx.revert();
    };
  }, [prefersReducedMotion, ...deps]);

  return scopeRef;
}
