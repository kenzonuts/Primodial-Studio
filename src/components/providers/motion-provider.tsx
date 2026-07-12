"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { usePointerFine } from "@/hooks/use-pointer-fine";
import { useUIStore } from "@/stores/ui-store";

type MotionContextValue = {
  reducedMotion: boolean;
  pointerFine: boolean;
  cursorEnabled: boolean;
  isAppReady: boolean;
};

const MotionContext = createContext<MotionContextValue>({
  reducedMotion: false,
  pointerFine: false,
  cursorEnabled: false,
  isAppReady: true,
});

export function useMotionExperience() {
  return useContext(MotionContext);
}

type MotionProviderProps = {
  children: ReactNode;
};

/**
 * Global motion flags — single source for reduced motion, cursor, readiness.
 */
export function MotionProvider({ children }: MotionProviderProps) {
  const reducedMotion = usePrefersReducedMotion();
  const pointerFine = usePointerFine();
  const isAppReady = useUIStore((s) => s.isAppReady);

  const value = useMemo(
    () => ({
      reducedMotion,
      pointerFine,
      cursorEnabled: pointerFine && !reducedMotion,
      isAppReady,
    }),
    [reducedMotion, pointerFine, isAppReady],
  );

  return (
    <MotionContext.Provider value={value}>{children}</MotionContext.Provider>
  );
}
