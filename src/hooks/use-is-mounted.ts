"use client";

import { useEffect, useState } from "react";

/**
 * Avoids hydration mismatches for client-only values (theme, window size).
 */
export function useIsMounted(): boolean {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
