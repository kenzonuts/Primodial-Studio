"use client";

import { Suspense, useEffect } from "react";

import { trackEvent } from "@/analytics/track";
import {
  usePageViewTracking,
  useScrollDepthTracking,
} from "@/hooks/use-analytics";

/**
 * Bridges existing CustomEvents + consent updates into the analytics bus.
 */
function AnalyticsBridgeInner() {
  usePageViewTracking();
  useScrollDepthTracking();

  useEffect(() => {
    const onContact = () =>
      trackEvent({ name: "contact_submit", payload: { source: "website" } });
    const onNewsletter = () =>
      trackEvent({ name: "newsletter_submit", payload: { source: "website" } });
    const onConsent = (event: Event) => {
      const detail = (event as CustomEvent).detail as Record<string, unknown>;
      trackEvent({
        name: "consent_update",
        payload: {
          analytics: Boolean(detail.analytics),
          marketing: Boolean(detail.marketing),
        },
      });
    };

    window.addEventListener("contact_form_submit", onContact);
    window.addEventListener("newsletter_subscribe", onNewsletter);
    window.addEventListener("consent_update", onConsent);

    return () => {
      window.removeEventListener("contact_form_submit", onContact);
      window.removeEventListener("newsletter_subscribe", onNewsletter);
      window.removeEventListener("consent_update", onConsent);
    };
  }, []);

  return null;
}

export function AnalyticsBridge() {
  return (
    <Suspense fallback={null}>
      <AnalyticsBridgeInner />
    </Suspense>
  );
}
