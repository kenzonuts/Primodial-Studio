"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { useConsent } from "@/analytics/consent";
import { featureFlags } from "@/config/feature-flags";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";

/**
 * GDPR-ready cookie consent — Accept / Reject / Preferences.
 * Overlay only — does not alter page layout structure.
 */
export function CookieConsent() {
  const {
    consent,
    acceptAll,
    rejectAll,
    savePreferences,
    preferencesOpen,
    setPreferencesOpen,
    openPreferences,
  } = useConsent();

  const [draftAnalytics, setDraftAnalytics] = useState(consent.analytics);
  const [draftMarketing, setDraftMarketing] = useState(consent.marketing);

  useEffect(() => {
    setDraftAnalytics(consent.analytics);
    setDraftMarketing(consent.marketing);
  }, [consent.analytics, consent.marketing, preferencesOpen]);

  if (!featureFlags.consent.required) return null;
  if (consent.decided && !preferencesOpen) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[9996] p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
    >
      <div
        className={cn(
          "mx-auto max-w-3xl rounded-2xl border border-white/10 bg-surface/95 p-5 shadow-[0_20px_60px_rgb(0_0_0/0.45)] backdrop-blur-md md:p-6",
        )}
      >
        <h2
          id="cookie-consent-title"
          className="text-sm font-semibold text-foreground"
        >
          Cookie preferences
        </h2>
        <p
          id="cookie-consent-desc"
          className="mt-2 text-[0.8125rem] leading-relaxed text-text-secondary"
        >
          We use necessary cookies to run the site. Optional analytics cookies
          help us improve performance and experience. See our{" "}
          <Link
            href={ROUTES.privacy}
            className="underline underline-offset-2 hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"
          >
            Privacy Policy
          </Link>
          .
        </p>

        {preferencesOpen ? (
          <div className="mt-4 space-y-3">
            <label className="flex items-center justify-between gap-4 text-sm text-text-secondary">
              <span>
                <span className="font-medium text-foreground">Necessary</span>
                <span className="mt-0.5 block text-[0.75rem] text-text-muted">
                  Always on — required for core functionality.
                </span>
              </span>
              <input
                type="checkbox"
                checked
                disabled
                className="size-4"
                aria-label="Necessary cookies always enabled"
              />
            </label>
            <label className="flex items-center justify-between gap-4 text-sm text-text-secondary">
              <span>
                <span className="font-medium text-foreground">Analytics</span>
                <span className="mt-0.5 block text-[0.75rem] text-text-muted">
                  Anonymous usage and performance metrics.
                </span>
              </span>
              <input
                type="checkbox"
                className="size-4 accent-accent-blue"
                checked={draftAnalytics}
                onChange={(event) => setDraftAnalytics(event.target.checked)}
                aria-label="Enable analytics cookies"
              />
            </label>
            <label className="flex items-center justify-between gap-4 text-sm text-text-secondary">
              <span>
                <span className="font-medium text-foreground">Marketing</span>
                <span className="mt-0.5 block text-[0.75rem] text-text-muted">
                  Future campaigns and remarketing (off by default).
                </span>
              </span>
              <input
                type="checkbox"
                className="size-4 accent-accent-blue"
                checked={draftMarketing}
                onChange={(event) => setDraftMarketing(event.target.checked)}
                aria-label="Enable marketing cookies"
              />
            </label>
            <div className="flex flex-wrap gap-2 pt-2">
              <Button
                type="button"
                size="sm"
                onClick={() =>
                  savePreferences({
                    analytics: draftAnalytics,
                    marketing: draftMarketing,
                  })
                }
              >
                Save preferences
              </Button>
              <Button
                type="button"
                size="sm"
                variant="outline"
                onClick={() => setPreferencesOpen(false)}
              >
                Close
              </Button>
            </div>
          </div>
        ) : (
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <Button type="button" size="sm" onClick={acceptAll}>
              Accept all
            </Button>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={rejectAll}
            >
              Reject optional
            </Button>
            <Button
              type="button"
              size="sm"
              variant="ghost"
              onClick={openPreferences}
            >
              Preferences
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
