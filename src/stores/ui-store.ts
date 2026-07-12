import { create } from "zustand";

type UIState = {
  isMobileNavOpen: boolean;
  isMegaMenuOpen: boolean;
  isAppReady: boolean;
  hasSeenLoader: boolean;
  setMobileNavOpen: (open: boolean) => void;
  toggleMobileNav: () => void;
  setMegaMenuOpen: (open: boolean) => void;
  setAppReady: (ready: boolean) => void;
  setHasSeenLoader: (seen: boolean) => void;
};

/**
 * Global UI chrome store — navigation overlays and shared shell state.
 */
export const useUIStore = create<UIState>((set) => ({
  isMobileNavOpen: false,
  isMegaMenuOpen: false,
  isAppReady: false,
  hasSeenLoader: false,
  setMobileNavOpen: (open) => set({ isMobileNavOpen: open }),
  toggleMobileNav: () =>
    set((state) => ({ isMobileNavOpen: !state.isMobileNavOpen })),
  setMegaMenuOpen: (open) => set({ isMegaMenuOpen: open }),
  setAppReady: (ready) => set({ isAppReady: ready }),
  setHasSeenLoader: (seen) => set({ hasSeenLoader: seen }),
}));
