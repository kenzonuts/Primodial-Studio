"use client";

import { useEffect, useState } from "react";

/**
 * True when the primary pointer is fine (mouse/trackpad) — used to gate custom cursor.
 */
export function usePointerFine(): boolean {
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const update = () => setFine(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return fine;
}
