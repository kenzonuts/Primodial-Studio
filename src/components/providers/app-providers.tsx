"use client";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { MotionProvider } from "@/components/providers/motion-provider";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { LoadingScreen } from "@/components/interactive/loading-screen";
import { ScrollProgressBar } from "@/components/interactive/scroll-progress";
import { InteractiveCursor } from "@/components/interactive/cursor";
import { CookieConsent } from "@/components/consent/cookie-consent";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LocaleProvider } from "@/contexts/locale";
import { ConsentProvider } from "@/analytics/consent";
import { AnalyticsProvider } from "@/analytics/provider";
import { AppErrorBoundary } from "@/monitoring/error-boundary";
import { WebVitalsReporter } from "@/performance/web-vitals";
import { ScrollStorytelling } from "@/motion/scroll-storytelling";

type AppProvidersProps = {
  children: React.ReactNode;
};

/**
 * Root client-side providers — theme, locale, motion, analytics, consent.
 */
export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <ConsentProvider>
          <MotionProvider>
            <SmoothScrollProvider>
              <TooltipProvider>
                <AppErrorBoundary>
                  <LoadingScreen />
                  <ScrollProgressBar />
                  <InteractiveCursor />
                  <ScrollStorytelling />
                  <WebVitalsReporter />
                  {children}
                  <CookieConsent />
                  <AnalyticsProvider />
                  <Toaster />
                </AppErrorBoundary>
              </TooltipProvider>
            </SmoothScrollProvider>
          </MotionProvider>
        </ConsentProvider>
      </LocaleProvider>
    </ThemeProvider>
  );
}
