"use client";

import {
  useCallback,
  useEffect,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

type HeroSpotlightProps = {
  className?: string;
  x: number;
  y: number;
  active: boolean;
};

function HeroSpotlight({ className, x, y, active }: HeroSpotlightProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    setFinePointer(media.matches);
    const onChange = () => setFinePointer(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  if (prefersReducedMotion || !finePointer) return null;

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 z-[1] transition-opacity duration-500",
        active ? "opacity-70" : "opacity-0",
        className,
      )}
      style={{
        background: `radial-gradient(520px circle at ${x}px ${y}px, rgb(79 140 255 / 0.12), transparent 55%)`,
      }}
    />
  );
}

function useHeroPointerSpotlight() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [spot, setSpot] = useState({ x: 0, y: 0, active: false });

  const onPointerMove = useCallback(
    (event: ReactPointerEvent<HTMLElement>) => {
      if (prefersReducedMotion) return;
      if (event.pointerType !== "mouse") return;
      const rect = event.currentTarget.getBoundingClientRect();
      setSpot({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        active: true,
      });
    },
    [prefersReducedMotion],
  );

  const onPointerLeave = useCallback(() => {
    setSpot((prev) => ({ ...prev, active: false }));
  }, []);

  return { spot, onPointerMove, onPointerLeave };
}

export { HeroSpotlight, useHeroPointerSpotlight };
