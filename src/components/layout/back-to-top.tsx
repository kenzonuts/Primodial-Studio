"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { useSmoothScroll } from "@/components/providers/smooth-scroll-provider";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

type BackToTopProps = {
  className?: string;
  threshold?: number;
};

function BackToTop({ className, threshold = 480 }: BackToTopProps) {
  const [visible, setVisible] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={() => scrollTo(0, { immediate: reducedMotion })}
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reducedMotion ? undefined : { opacity: 0, y: 12 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "fixed right-5 bottom-5 z-50 inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-surface/80 text-foreground shadow-[0_12px_40px_rgb(0_0_0/0.45)] backdrop-blur-md transition-[background-color,border-color,box-shadow,transform] duration-[var(--duration-fast)] hover:border-white/20 hover:bg-surface-elevated hover:shadow-[0_0_28px_rgb(79_140_255/0.18)] focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none active:scale-[0.96] md:right-8 md:bottom-8",
            className,
          )}
        >
          <ArrowUp className="size-4" aria-hidden />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}

export { BackToTop };
