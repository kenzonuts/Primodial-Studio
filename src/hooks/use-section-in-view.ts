"use client";

import { useEffect, useState } from "react";

type UseSectionInViewOptions = {
  rootMargin?: string;
  threshold?: number;
  once?: boolean;
};

/**
 * Intersection observer hook for section animation triggers.
 * Pair with `data-animate` on SectionShell.
 */
export function useSectionInView<T extends HTMLElement = HTMLElement>(
  options: UseSectionInViewOptions = {},
) {
  const {
    rootMargin = "0px 0px -10% 0px",
    threshold = 0.2,
    once = true,
  } = options;

  const [node, setNode] = useState<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsInView(false);
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [node, rootMargin, threshold, once]);

  return { ref: setNode, isInView };
}
