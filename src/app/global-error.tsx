"use client";

import { useEffect } from "react";

import { reportError } from "@/monitoring/report";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

/**
 * Root layout error boundary — must include its own html/body.
 */
export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    reportError(error, { digest: error.digest, path: "app/global-error" });
  }, [error]);

  return (
    <html lang="en" className="dark">
      <body className="bg-background font-sans text-foreground antialiased">
        <main className="mx-auto flex min-h-dvh max-w-xl flex-col items-start justify-center px-6 py-24">
          <p className="mb-3 text-sm tracking-wide text-neutral-400 uppercase">
            Critical error
          </p>
          <h1 className="text-3xl font-bold tracking-tight">
            The application failed to load
          </h1>
          <p className="mt-4 text-base text-neutral-400">
            Please refresh the page. Our team has been notified.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-8 rounded-md bg-white px-4 py-2 text-sm font-medium text-black"
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
