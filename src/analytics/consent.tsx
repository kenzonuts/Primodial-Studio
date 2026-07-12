"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type ConsentCategory = "necessary" | "analytics" | "marketing";

export type ConsentState = Record<ConsentCategory, boolean> & {
  decided: boolean;
};

const STORAGE_KEY = "ps-cookie-consent-v1";

const defaultConsent: ConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
  decided: false,
};

type ConsentContextValue = {
  consent: ConsentState;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (next: Partial<ConsentState>) => void;
  openPreferences: () => void;
  preferencesOpen: boolean;
  setPreferencesOpen: (open: boolean) => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

function readStored(): ConsentState {
  if (typeof window === "undefined") return defaultConsent;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultConsent;
    const parsed = JSON.parse(raw) as ConsentState;
    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
      decided: Boolean(parsed.decided),
    };
  } catch {
    return defaultConsent;
  }
}

function persist(state: ConsentState) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(new CustomEvent("consent_update", { detail: state }));
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentState>(defaultConsent);
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  useEffect(() => {
    setConsent(readStored());
  }, []);

  const commit = useCallback((next: ConsentState) => {
    const value = { ...next, necessary: true, decided: true };
    setConsent(value);
    persist(value);
    setPreferencesOpen(false);
  }, []);

  const value = useMemo<ConsentContextValue>(
    () => ({
      consent,
      acceptAll: () =>
        commit({
          necessary: true,
          analytics: true,
          marketing: true,
          decided: true,
        }),
      rejectAll: () =>
        commit({
          necessary: true,
          analytics: false,
          marketing: false,
          decided: true,
        }),
      savePreferences: (partial) =>
        commit({
          ...consent,
          ...partial,
          necessary: true,
          decided: true,
        }),
      openPreferences: () => setPreferencesOpen(true),
      preferencesOpen,
      setPreferencesOpen,
    }),
    [commit, consent, preferencesOpen],
  );

  return (
    <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
  );
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    throw new Error("useConsent must be used within ConsentProvider");
  }
  return ctx;
}

export function useAnalyticsAllowed() {
  const { consent } = useConsent();
  return consent.decided && consent.analytics;
}
