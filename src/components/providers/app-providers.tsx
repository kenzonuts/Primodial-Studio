"use client";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LocaleProvider } from "@/contexts/locale";

type AppProvidersProps = {
  children: React.ReactNode;
};

/**
 * Root client-side providers composition.
 * Locale is ready for i18n; NavigationChrome is opt-in for advanced shells.
 */
export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <TooltipProvider>
          {children}
          <Toaster />
        </TooltipProvider>
      </LocaleProvider>
    </ThemeProvider>
  );
}
