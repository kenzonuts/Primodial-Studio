"use client";

import { Component, type ErrorInfo, type ReactNode } from "react";
import Link from "next/link";

import { reportError } from "@/monitoring/report";
import { Button } from "@/components/ui/button";

type Props = {
  children: ReactNode;
  fallback?: ReactNode;
};

type State = {
  hasError: boolean;
};

/**
 * Client error boundary — catches render errors without redesigning pages.
 */
export class AppErrorBoundary extends Component<Props, State> {
  override state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  override componentDidCatch(error: Error, info: ErrorInfo) {
    reportError(error, {
      extra: { componentStack: info.componentStack },
    });
  }

  override render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div
          role="alert"
          className="mx-auto flex min-h-[40vh] max-w-lg flex-col items-start justify-center px-6 py-16"
        >
          <p className="text-sm tracking-wide text-text-muted uppercase">
            Error
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-foreground">
            Something went wrong
          </h2>
          <p className="mt-3 text-sm text-text-secondary">
            An unexpected error occurred. You can try again or return home.
          </p>
          <div className="mt-6 flex gap-3">
            <Button
              type="button"
              onClick={() => this.setState({ hasError: false })}
            >
              Try again
            </Button>
            <Button asChild variant="outline">
              <Link href="/">Home</Link>
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
