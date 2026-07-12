"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

import { registerGsapPlugins, ScrollTrigger, gsap } from "@/motion/gsap";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

type SmoothScrollContextValue = {
  lenis: Lenis | null;
  scrollTo: (target: string | number | HTMLElement, options?: object) => void;
};

const SmoothScrollContext = createContext<SmoothScrollContextValue>({
  lenis: null,
  scrollTo: () => undefined,
});

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

type SmoothScrollProviderProps = {
  children: ReactNode;
};

/**
 * Lenis smooth scroll + ScrollTrigger sync.
 * Falls back to native scroll when reduced motion is preferred.
 */
export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      document.documentElement.classList.remove("lenis");
      return;
    }

    registerGsapPlugins();

    const instance = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });

    lenisRef.current = instance;
    setLenis(instance);
    document.documentElement.classList.add("lenis");

    instance.on("scroll", ScrollTrigger.update);

    const ticker = (time: number) => {
      instance.raf(time * 1000);
    };
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(ticker);
      instance.destroy();
      lenisRef.current = null;
      setLenis(null);
      document.documentElement.classList.remove("lenis");
    };
  }, [prefersReducedMotion]);

  /** Scroll restoration — native history + Lenis sync */
  useEffect(() => {
    if (typeof window === "undefined") return;
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const restore = () => {
      const y = window.scrollY || 0;
      lenisRef.current?.scrollTo(y, { immediate: true });
    };

    restore();
    window.addEventListener("popstate", restore);
    return () => window.removeEventListener("popstate", restore);
  }, [lenis]);

  const value = useMemo<SmoothScrollContextValue>(
    () => ({
      lenis,
      scrollTo: (target, options) => {
        if (lenisRef.current) {
          lenisRef.current.scrollTo(target, options);
          return;
        }
        if (typeof target === "number") {
          window.scrollTo({ top: target, behavior: "smooth" });
        } else if (typeof target === "string") {
          document
            .querySelector(target)
            ?.scrollIntoView({ behavior: "smooth" });
        } else {
          target.scrollIntoView({ behavior: "smooth" });
        }
      },
    }),
    [lenis],
  );

  return (
    <SmoothScrollContext.Provider value={value}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
