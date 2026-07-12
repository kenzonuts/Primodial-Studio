"use client";

import { useEffect } from "react";

type SectionRedirectProps = {
  /** Homepage section id without `#` (e.g. `about`, `services`). */
  sectionId: string;
};

/**
 * Client redirect to a homepage hash.
 * HTTP Location headers often drop fragments; this preserves scroll targets.
 */
export function SectionRedirect({ sectionId }: SectionRedirectProps) {
  useEffect(() => {
    window.location.replace(`/#${sectionId}`);
  }, [sectionId]);

  return (
    <main className="flex min-h-[40vh] items-center justify-center px-6">
      <p className="text-sm text-muted-foreground">Redirecting…</p>
    </main>
  );
}
