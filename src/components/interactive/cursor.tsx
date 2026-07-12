"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

import { useMotionExperience } from "@/components/providers/motion-provider";
import { cn } from "@/lib/utils";

type CursorState = "default" | "link" | "button" | "card" | "text" | "hidden";

/**
 * Custom cursor — desktop / fine pointer only.
 * States driven by data-cursor attributes and semantic elements.
 */
function InteractiveCursor() {
  const { cursorEnabled } = useMotionExperience();
  const [state, setState] = useState<CursorState>("default");
  const [visible, setVisible] = useState(false);
  const pos = useRef({ x: 0, y: 0 });

  const x = useSpring(0, { stiffness: 420, damping: 38, mass: 0.35 });
  const y = useSpring(0, { stiffness: 420, damping: 38, mass: 0.35 });
  const glowX = useSpring(0, { stiffness: 180, damping: 32, mass: 0.5 });
  const glowY = useSpring(0, { stiffness: 180, damping: 32, mass: 0.5 });

  useEffect(() => {
    if (!cursorEnabled) {
      document.documentElement.classList.remove("has-custom-cursor");
      return;
    }

    document.documentElement.classList.add("has-custom-cursor");

    const resolveState = (target: Element | null): CursorState => {
      if (!target) return "default";
      const hit = target.closest(
        "[data-cursor], a, button, [role='button'], input, textarea, select, p, h1, h2, h3, h4, h5, h6, [data-card]",
      );
      if (!hit) return "default";

      const explicit = hit.getAttribute("data-cursor") as CursorState | null;
      if (explicit) return explicit;

      if (hit.matches("a")) return "link";
      if (hit.matches("button, [role='button']")) return "button";
      if (hit.matches("[data-card]")) return "card";
      if (hit.matches("input, textarea, select")) return "text";
      if (hit.matches("p, h1, h2, h3, h4, h5, h6")) return "text";
      return "default";
    };

    const onMove = (event: PointerEvent) => {
      pos.current = { x: event.clientX, y: event.clientY };
      x.set(event.clientX);
      y.set(event.clientY);
      glowX.set(event.clientX);
      glowY.set(event.clientY);
      setVisible(true);
      setState(resolveState(event.target as Element));
    };

    const onLeave = () => setVisible(false);
    const onDown = () => setState((s) => (s === "hidden" ? s : s));

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [cursorEnabled, glowX, glowY, x, y]);

  if (!cursorEnabled) return null;

  const size =
    state === "button" || state === "link"
      ? 44
      : state === "card"
        ? 56
        : state === "text"
          ? 6
          : 16;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9997] hidden md:block"
      aria-hidden
    >
      <motion.div
        className="absolute top-0 left-0 rounded-full bg-[radial-gradient(circle,rgb(79_140_255/0.22),transparent_70%)]"
        style={{
          x: glowX,
          y: glowY,
          width: 160,
          height: 160,
          marginLeft: -80,
          marginTop: -80,
          opacity: visible ? 1 : 0,
        }}
      />
      <motion.div
        className={cn(
          "absolute top-0 left-0 rounded-full border border-white/40 bg-white/10 backdrop-blur-[2px] transition-[width,height,background-color,border-color] duration-200",
          state === "button" && "border-accent-blue/50 bg-accent-blue/15",
          state === "link" && "border-foreground/40 bg-foreground/10",
          state === "card" && "border-white/25 bg-white/5",
          state === "text" && "border-transparent bg-foreground",
        )}
        style={{
          x,
          y,
          width: size,
          height: size,
          marginLeft: -size / 2,
          marginTop: -size / 2,
          opacity: visible ? 1 : 0,
          mixBlendMode: state === "text" ? "difference" : "normal",
        }}
      />
    </div>
  );
}

export { InteractiveCursor };
