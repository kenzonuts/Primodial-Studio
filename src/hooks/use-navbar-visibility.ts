"use client";

import { useEffect, useState } from "react";

import { NAVBAR } from "@/constants/grid";
import { useScrollDirection } from "@/hooks/use-scroll-direction";

type NavbarVisibility = {
  isSolid: boolean;
  isHidden: boolean;
  scrollY: number;
};

/**
 * Navbar chrome behavior:
 * - solidify after small scroll
 * - hide on scroll down past threshold
 * - reveal on scroll up
 */
export function useNavbarVisibility(): NavbarVisibility {
  const direction = useScrollDirection();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isSolid = scrollY > NAVBAR.solidifyScrollY;
  const isHidden = direction === "down" && scrollY > NAVBAR.hideScrollY;

  return { isSolid, isHidden, scrollY };
}
