"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

/** Future backend — swap implementer without changing UI contract */
export const NEWSLETTER_INTEGRATIONS = {
  apiEndpoint: "/api/newsletter",
  analyticsEvent: "newsletter_subscribe",
  providerReady: true,
} as const;

type NewsletterProps = {
  className?: string;
  heading?: string;
  description?: string;
};

function Newsletter({
  className,
  heading = "Stay in the loop",
  description = "Product notes, studio updates, and selected work—no noise.",
}: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(NEWSLETTER_INTEGRATIONS.apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      if (typeof window !== "undefined") {
        window.dispatchEvent(
          new CustomEvent(NEWSLETTER_INTEGRATIONS.analyticsEvent, {
            detail: { email },
          }),
        );
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("idle");
      setError("Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div
        className={cn(
          "flex items-start gap-3 rounded-2xl border border-success/25 bg-success/5 p-4",
          className,
        )}
        role="status"
        aria-live="polite"
      >
        <CheckCircle2
          className="mt-0.5 size-5 shrink-0 text-success"
          aria-hidden
        />
        <div>
          <p className="text-sm font-medium text-foreground">
            You&apos;re subscribed
          </p>
          <p className="mt-1 text-[0.8125rem] text-text-secondary">
            Thanks—we&apos;ll keep it thoughtful and infrequent.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("space-y-3", className)}>
      {(heading || description) && (
        <div className="space-y-1">
          {heading ? (
            <p className="text-sm font-medium text-foreground">{heading}</p>
          ) : null}
          {description ? (
            <p className="text-[0.8125rem] leading-relaxed text-text-muted">
              {description}
            </p>
          ) : null}
        </div>
      )}

      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-2 sm:flex-row sm:items-start"
        noValidate
        data-api={NEWSLETTER_INTEGRATIONS.apiEndpoint}
      >
        <div className="min-w-0 flex-1 space-y-1.5">
          <Label htmlFor="newsletter-email" className="sr-only">
            Email address
          </Label>
          <Input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (error) setError(null);
            }}
            aria-invalid={Boolean(error) || undefined}
            aria-describedby={error ? "newsletter-error" : undefined}
            className={cn(
              "h-11 rounded-xl border-border/80 bg-surface/60",
              error && "border-danger",
            )}
          />
          {error ? (
            <p
              id="newsletter-error"
              className="text-[0.75rem] text-danger"
              role="alert"
            >
              {error}
            </p>
          ) : null}
        </div>
        <Button
          type="submit"
          size="lg"
          isLoading={status === "loading"}
          className="h-11 shrink-0 rounded-xl sm:min-w-[7.5rem]"
        >
          {status === "loading" ? "Subscribing" : "Subscribe"}
        </Button>
      </form>
    </div>
  );
}

export { Newsletter };
