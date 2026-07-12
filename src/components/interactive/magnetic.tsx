"use client";

import {
  useCallback,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";

import { useMagnetic } from "@/hooks/use-magnetic";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

/**
 * Magnetic wrapper — transform-only pull toward pointer.
 */
function Magnetic({ children, className, strength = 0.25 }: MagneticProps) {
  const ref = useMagnetic<HTMLDivElement>({ strength });

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}

type RippleHostProps = {
  children: ReactNode;
  className?: string;
};

type Ripple = { id: number; x: number; y: number };

function RippleHost({ children, className }: RippleHostProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const prefersReducedMotion = usePrefersReducedMotion();
  const idRef = useRef(0);

  const onPointerDown = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion) return;
      const rect = event.currentTarget.getBoundingClientRect();
      const id = ++idRef.current;
      setRipples((prev) => [
        ...prev,
        { id, x: event.clientX - rect.left, y: event.clientY - rect.top },
      ]);
      window.setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 600);
    },
    [prefersReducedMotion],
  );

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onPointerDown={onPointerDown}
    >
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          aria-hidden
          className="pointer-events-none absolute z-[5] size-3 animate-[cta-ripple_0.6s_ease-out_forwards] rounded-full bg-white/30"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
}

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
};

/**
 * Very subtle mouse tilt — max ~4deg, desktop only.
 */
function TiltCard({ children, className, maxTilt = 4 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const frame = useRef(0);

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !ref.current) return;
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;

    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.transform = `perspective(900px) rotateX(${-py * maxTilt}deg) rotateY(${px * maxTilt}deg) translateZ(0)`;
    });
  };

  const onLeave = () => {
    if (!ref.current) return;
    if (frame.current) cancelAnimationFrame(frame.current);
    ref.current.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)";
  };

  return (
    <div
      ref={ref}
      data-card
      data-cursor="card"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={cn(
        "transition-transform duration-[var(--duration-fast)] ease-[var(--ease-out)] will-change-transform",
        className,
      )}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}

export { Magnetic, RippleHost, TiltCard };
