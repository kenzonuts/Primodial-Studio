"use client";

import { useEffect } from "react";

import { featureFlags } from "@/config/feature-flags";
import { reportMessage } from "@/monitoring/report";

type Metric = {
  name: string;
  value: number;
  id: string;
  rating?: string;
};

/**
 * Reports Core Web Vitals when the browser supports `web-vitals` via dynamic import.
 * Falls back to PerformanceObserver for LCP when the package is absent.
 */
export function WebVitalsReporter() {
  useEffect(() => {
    if (!featureFlags.monitoring.webVitals) return;

    let cancelled = false;

    const send = (metric: Metric) => {
      if (cancelled) return;
      if (typeof window !== "undefined") {
        window.dispatchEvent(
          new CustomEvent("ps_web_vital", { detail: metric }),
        );
      }
      // Optional beacon endpoint for first-party collection
      const endpoint = process.env.NEXT_PUBLIC_WEB_VITALS_ENDPOINT;
      if (endpoint) {
        const body = JSON.stringify(metric);
        if (navigator.sendBeacon) {
          navigator.sendBeacon(endpoint, body);
        }
      }
    };

    // Lightweight LCP observer without adding a dependency
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const last = entries[entries.length - 1];
        if (!last) return;
        send({
          name: "LCP",
          value: last.startTime,
          id: `lcp-${Date.now()}`,
        });
      });
      observer.observe({ type: "largest-contentful-paint", buffered: true });
      return () => {
        cancelled = true;
        observer.disconnect();
      };
    } catch {
      reportMessage("web_vitals_observer_unavailable");
    }

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
