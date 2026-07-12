"use client";

import { useEffect } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { reportError } from "@/monitoring/report";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    reportError(error, { digest: error.digest, path: "app/error" });
  }, [error]);

  return (
    <main className="container-page flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="mb-3 text-sm tracking-wide text-text-muted uppercase">
        500
      </p>
      <h1 className="max-w-xl text-4xl font-extrabold tracking-tight text-foreground">
        Something went wrong
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-text-secondary">
        An unexpected error occurred. Please try again. If the problem
        continues, contact us.
      </p>
      <div className="mt-8 flex gap-3">
        <Button type="button" onClick={reset}>
          Try again
        </Button>
        <Button asChild variant="outline">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </main>
  );
}
