"use client";

import { useEffect, useState } from "react";

type MousePosition = {
  x: number;
  y: number;
};

/**
 * Tracks pointer position with rAF batching — GPU-friendly consumers only.
 */
export function useMousePosition(enabled = true): MousePosition {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    if (!enabled) return;

    let frame = 0;
    let latest = { x: 0, y: 0 };

    const onMove = (event: PointerEvent) => {
      latest = { x: event.clientX, y: event.clientY };
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        setPosition(latest);
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [enabled]);

  return position;
}
