"use client";

import { useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { useAnalyticsAllowed } from "@/analytics/consent";
import { trackEvent, trackPageView } from "@/analytics/track";
import type {
  AnalyticsEventName,
  AnalyticsEventPayload,
} from "@/config/analytics";

/**
 * Reusable analytics hook — respects cookie consent for analytics category.
 */
export function useAnalytics() {
  const allowed = useAnalyticsAllowed();

  const track = useCallback(
    (name: AnalyticsEventName, payload?: AnalyticsEventPayload) => {
      if (!allowed && name !== "consent_update") return;
      trackEvent({ name, payload });
    },
    [allowed],
  );

  return { track, allowed };
}

/** Auto page-view tracking on route changes */
export function usePageViewTracking() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const allowed = useAnalyticsAllowed();

  useEffect(() => {
    if (!allowed || !pathname) return;
    const qs = searchParams?.toString();
    trackPageView(qs ? `${pathname}?${qs}` : pathname);
  }, [allowed, pathname, searchParams]);
}

/** Scroll depth milestones: 25 / 50 / 75 / 100 */
export function useScrollDepthTracking() {
  const { track, allowed } = useAnalytics();

  useEffect(() => {
    if (!allowed) return;

    const seen = new Set<number>();
    const marks = [25, 50, 75, 100];

    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      if (max <= 0) return;
      const pct = Math.round((window.scrollY / max) * 100);
      for (const mark of marks) {
        if (pct >= mark && !seen.has(mark)) {
          seen.add(mark);
          track("scroll_depth", { depth: mark });
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [allowed, track]);
}
