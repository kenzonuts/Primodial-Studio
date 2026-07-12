"use client";

import { useEffect, useRef } from "react";

import { gsap, registerGsapPlugins, ScrollTrigger } from "@/motion/gsap";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

/**
 * Opt-in GSAP ScrollTrigger polish for `[data-parallax]` elements.
 * Layout-neutral — sections keep existing Framer reveals.
 */
function ScrollStorytelling() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const ran = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    registerGsapPlugins();

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = Number(el.dataset.parallax) || 0.1;
        gsap.fromTo(
          el,
          { y: -24 * speed },
          {
            y: 24 * speed,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement ?? el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    });

    // Refresh after fonts/images settle
    const refresh = () => ScrollTrigger.refresh();
    const t = window.setTimeout(refresh, 400);
    window.addEventListener("load", refresh);

    ran.current = true;

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("load", refresh);
      ctx.revert();
      ran.current = false;
    };
  }, [prefersReducedMotion]);

  return null;
}

export { ScrollStorytelling };
