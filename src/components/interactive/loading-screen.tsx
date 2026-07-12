"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { BrandLogo } from "@/components/brand";
import { SITE_NAME } from "@/constants/site";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { useUIStore } from "@/stores/ui-store";
import { EASE_OUT, MOTION_DURATION } from "@/animations/easings";
import { cn } from "@/lib/utils";

const MAX_MS = 1500;

/**
 * Premium boot loader — max 1.5s, auto-dismiss, non-blocking after exit.
 */
function LoadingScreen() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { isAppReady, hasSeenLoader, setAppReady, setHasSeenLoader } =
    useUIStore();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (hasSeenLoader) {
      setAppReady(true);
      setVisible(false);
      return;
    }

    if (prefersReducedMotion) {
      setProgress(100);
      setAppReady(true);
      setHasSeenLoader(true);
      setVisible(false);
      return;
    }

    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const next = Math.min(100, (elapsed / MAX_MS) * 100);
      setProgress(next);

      if (elapsed >= MAX_MS) {
        setProgress(100);
        setVisible(false);
        setHasSeenLoader(true);
        // Mark ready after exit animation begins
        window.setTimeout(() => setAppReady(true), 320);
        return;
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [hasSeenLoader, prefersReducedMotion, setAppReady, setHasSeenLoader]);

  // Safety: never block interaction longer than MAX_MS + buffer
  useEffect(() => {
    const id = window.setTimeout(() => {
      setAppReady(true);
      setHasSeenLoader(true);
      setVisible(false);
    }, MAX_MS + 500);
    return () => window.clearTimeout(id);
  }, [setAppReady, setHasSeenLoader]);

  return (
    <AnimatePresence>
      {visible && !isAppReady ? (
        <motion.div
          className={cn(
            "fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-background",
          )}
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            filter: "blur(6px)",
            transition: { duration: 0.35, ease: EASE_OUT },
          }}
          aria-busy="true"
          aria-live="polite"
          role="status"
        >
          <motion.div
            className="relative flex flex-col items-center gap-8"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE_OUT }}
          >
            <div className="relative">
              <motion.div
                aria-hidden
                className="absolute inset-0 -m-8 rounded-full bg-[radial-gradient(circle,rgb(79_140_255/0.35),transparent_65%)] blur-2xl"
                animate={{
                  opacity: [0.35, 0.7, 0.35],
                  scale: [0.92, 1.05, 0.92],
                }}
                transition={{
                  duration: MOTION_DURATION.loading,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <BrandLogo
                variant="full"
                height={96}
                priority
                className="relative max-w-[14rem] md:max-w-[16rem]"
              />
              <span className="sr-only">{SITE_NAME}</span>
            </div>

            <div className="flex w-40 flex-col gap-2">
              <div
                className="h-[2px] overflow-hidden rounded-full bg-white/10"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(progress)}
                aria-label="Loading"
              >
                <motion.div
                  className="h-full origin-left rounded-full bg-foreground/80"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-center font-mono text-[0.625rem] tracking-widest text-text-muted uppercase">
                {Math.round(progress)}%
              </p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export { LoadingScreen };
