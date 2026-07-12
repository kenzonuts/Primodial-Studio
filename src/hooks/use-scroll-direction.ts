"use client";

import { useEffect, useRef, useState } from "react";

export type ScrollDirection = "up" | "down" | "none";

/**
 * Tracks vertical scroll direction for navbar hide/reveal.
 */
export function useScrollDirection(threshold = 8): ScrollDirection {
  const [direction, setDirection] = useState<ScrollDirection>("none");
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY.current;

      if (Math.abs(delta) < threshold) return;

      setDirection(delta > 0 ? "down" : "up");
      lastY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return direction;
}
