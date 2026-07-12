import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="container-page flex min-h-dvh flex-col items-start justify-center py-24">
      <p className="mb-3 text-sm tracking-wide text-secondary uppercase">404</p>
      <h1 className="max-w-xl text-4xl font-extrabold tracking-tight">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-secondary">
        The page you are looking for does not exist or has been moved.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Back to home</Link>
      </Button>
    </main>
  );
}
