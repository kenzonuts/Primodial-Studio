import type {
  AnalyticsEventName,
  AnalyticsEventPayload,
} from "@/config/analytics";

type TrackArgs = {
  name: AnalyticsEventName;
  payload?: AnalyticsEventPayload;
};

/**
 * Low-level event dispatcher — fans out to enabled providers.
 * Safe to call on server (no-op) and client.
 */
export function trackEvent({ name, payload = {} }: TrackArgs) {
  if (typeof window === "undefined") return;

  const detail = { name, ...payload, ts: Date.now() };

  // Always emit for local listeners / future adapters
  window.dispatchEvent(new CustomEvent("ps_analytics", { detail }));

  // GA4
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void })
    .gtag;
  if (typeof gtag === "function") {
    gtag("event", name, payload);
  }

  // Plausible
  const plausible = (
    window as Window & {
      plausible?: (
        event: string,
        options?: { props?: AnalyticsEventPayload },
      ) => void;
    }
  ).plausible;
  if (typeof plausible === "function") {
    plausible(name, { props: payload });
  }

  // Vercel Analytics custom events (when available)
  const va = (
    window as Window & {
      va?: (
        event: "event",
        data: { name: string; data?: AnalyticsEventPayload },
      ) => void;
    }
  ).va;
  if (typeof va === "function") {
    va("event", { name, data: payload });
  }

  if (process.env.NODE_ENV === "development") {
    // Helpful during QA — never log PII beyond provided payload
    console.debug("[analytics]", name, payload);
  }
}

export function trackPageView(path: string) {
  trackEvent({ name: "page_view", payload: { path } });
}
