"use client";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { MotionProvider } from "@/components/providers/motion-provider";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { LoadingScreen } from "@/components/interactive/loading-screen";
import { ScrollProgressBar } from "@/components/interactive/scroll-progress";
import { InteractiveCursor } from "@/components/interactive/cursor";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LocaleProvider } from "@/contexts/locale";
import { ScrollStorytelling } from "@/motion/scroll-storytelling";

type AppProvidersProps = {
  children: React.ReactNode;
};

/**
 * Root client-side providers — theme, locale, motion experience, smooth scroll.
 */
export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <MotionProvider>
          <SmoothScrollProvider>
            <TooltipProvider>
              <LoadingScreen />
              <ScrollProgressBar />
              <InteractiveCursor />
              <ScrollStorytelling />
              {children}
              <Toaster />
            </TooltipProvider>
          </SmoothScrollProvider>
        </MotionProvider>
      </LocaleProvider>
    </ThemeProvider>
  );
}
