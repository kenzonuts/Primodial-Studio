import { featureFlags } from "@/config/feature-flags";
import { monitoringConfig } from "@/config/monitoring";
import { logger } from "@/lib/logger";

type ErrorContext = {
  digest?: string;
  path?: string;
  extra?: Record<string, unknown>;
};

/**
 * Central error reporter — structured logs + optional Sentry/LogRocket.
 */
export function reportError(error: unknown, context: ErrorContext = {}) {
  const payload = {
    message: error instanceof Error ? error.message : String(error),
    stack: error instanceof Error ? error.stack : undefined,
    ...context,
  };

  logger.error("application_error", payload);

  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("ps_error", { detail: payload }));
  }

  if (featureFlags.monitoring.sentry && monitoringConfig.sentryDsn) {
    const sentry = (
      globalThis as typeof globalThis & {
        Sentry?: { captureException: (err: unknown, ctx?: object) => void };
      }
    ).Sentry;
    sentry?.captureException(error, { extra: context });
  }

  if (featureFlags.monitoring.logrocket && monitoringConfig.logRocketAppId) {
    const lr = (
      globalThis as typeof globalThis & {
        LogRocket?: { captureException: (err: unknown) => void };
      }
    ).LogRocket;
    lr?.captureException(error);
  }
}

export function reportMessage(
  message: string,
  extra?: Record<string, unknown>,
) {
  reportError(new Error(message), { extra });
}
