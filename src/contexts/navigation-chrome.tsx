"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { NavbarChromeState } from "@/types/navigation";

type NavigationChromeContextValue = NavbarChromeState & {
  setMegaMenuOpen: (open: boolean) => void;
  setMobileOpen: (open: boolean) => void;
  setSolid: (solid: boolean) => void;
  setHidden: (hidden: boolean) => void;
};

const NavigationChromeContext =
  createContext<NavigationChromeContextValue | null>(null);

type NavigationChromeProviderProps = {
  children: ReactNode;
};

/**
 * Optional chrome context for advanced header orchestration.
 * SiteHeader can operate without it; dashboard / future shells may consume it.
 */
function NavigationChromeProvider({ children }: NavigationChromeProviderProps) {
  const [state, setState] = useState<NavbarChromeState>({
    isSolid: false,
    isHidden: false,
    isMegaMenuOpen: false,
    isMobileOpen: false,
  });

  const setMegaMenuOpen = useCallback((open: boolean) => {
    setState((prev) => ({ ...prev, isMegaMenuOpen: open }));
  }, []);

  const setMobileOpen = useCallback((open: boolean) => {
    setState((prev) => ({ ...prev, isMobileOpen: open }));
  }, []);

  const setSolid = useCallback((solid: boolean) => {
    setState((prev) => ({ ...prev, isSolid: solid }));
  }, []);

  const setHidden = useCallback((hidden: boolean) => {
    setState((prev) => ({ ...prev, isHidden: hidden }));
  }, []);

  const value = useMemo(
    () => ({
      ...state,
      setMegaMenuOpen,
      setMobileOpen,
      setSolid,
      setHidden,
    }),
    [state, setMegaMenuOpen, setMobileOpen, setSolid, setHidden],
  );

  return (
    <NavigationChromeContext.Provider value={value}>
      {children}
    </NavigationChromeContext.Provider>
  );
}

function useNavigationChrome() {
  const context = useContext(NavigationChromeContext);
  if (!context) {
    throw new Error(
      "useNavigationChrome must be used within NavigationChromeProvider",
    );
  }
  return context;
}

export {
  NavigationChromeProvider,
  useNavigationChrome,
  type NavigationChromeContextValue,
};
