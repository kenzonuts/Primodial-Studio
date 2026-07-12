"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";

type LocaleCode = "en" | "id";

type LocaleContextValue = {
  locale: LocaleCode;
  isReady: boolean;
};

const LocaleContext = createContext<LocaleContextValue>({
  locale: "en",
  isReady: false,
});

type LocaleProviderProps = {
  children: ReactNode;
  locale?: LocaleCode;
};

/**
 * Language-ready provider — default English until i18n ships.
 */
function LocaleProvider({ children, locale = "en" }: LocaleProviderProps) {
  const value = useMemo(
    () => ({
      locale,
      isReady: false,
    }),
    [locale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

function useLocale() {
  return useContext(LocaleContext);
}

export { LocaleProvider, useLocale, type LocaleCode };
