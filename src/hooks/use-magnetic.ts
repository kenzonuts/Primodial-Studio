"use client";

import { useCallback, useEffect, useRef, type RefObject } from "react";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { usePointerFine } from "@/hooks/use-pointer-fine";

type MagneticOptions = {
  strength?: number;
  radius?: number;
};

/**
 * Subtle magnetic pull toward the pointer — desktop only, transform-only.
 */
export function useMagnetic<T extends HTMLElement = HTMLElement>(
  options: MagneticOptions = {},
): RefObject<T | null> {
  const { strength = 0.28, radius = 80 } = options;
  const ref = useRef<T | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const pointerFine = usePointerFine();
  const frame = useRef(0);

  const reset = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate3d(0,0,0)";
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion || !pointerFine) return;

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = event.clientX - cx;
      const dy = event.clientY - cy;
      const dist = Math.hypot(dx, dy);

      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        if (dist > radius) {
          el.style.transform = "translate3d(0,0,0)";
          return;
        }
        el.style.transform = `translate3d(${dx * strength}px, ${dy * strength}px, 0)`;
      });
    };

    const onLeave = () => {
      if (frame.current) cancelAnimationFrame(frame.current);
      reset();
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      if (frame.current) cancelAnimationFrame(frame.current);
      reset();
    };
  }, [prefersReducedMotion, pointerFine, radius, reset, strength]);

  return ref;
}
