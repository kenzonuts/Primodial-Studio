"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

/**
 * Register GSAP plugins once (client-only).
 * Safe to call repeatedly.
 */
export function registerGsapPlugins() {
  if (typeof window === "undefined" || registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

/**
 * Kill all ScrollTriggers and clear GSAP global timelines — use on unmount of experience layer.
 */
export function destroyGsapScroll() {
  if (typeof window === "undefined") return;
  ScrollTrigger.getAll().forEach((t) => t.kill());
}

export { gsap, ScrollTrigger };
