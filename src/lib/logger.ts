type LogLevel = "debug" | "info" | "warn" | "error";

type LogContext = Record<string, unknown>;

const LEVEL_ORDER: Record<LogLevel, number> = {
  debug: 10,
  info: 20,
  warn: 30,
  error: 40,
};

function currentMinLevel(): LogLevel {
  if (process.env.NODE_ENV === "production") return "info";
  if (process.env.NODE_ENV === "test") return "error";
  return "debug";
}

function shouldLog(level: LogLevel) {
  return LEVEL_ORDER[level] >= LEVEL_ORDER[currentMinLevel()];
}

function emit(level: LogLevel, message: string, context?: LogContext) {
  if (!shouldLog(level)) return;

  const entry = {
    level,
    message,
    ts: new Date().toISOString(),
    env: process.env.VERCEL_ENV ?? process.env.NODE_ENV,
    ...context,
  };

  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("ps_log", { detail: entry }));
  }

  // Production: structured JSON for log drains; no free-form console.log
  if (process.env.NODE_ENV === "production") {
    const line = JSON.stringify(entry);
    if (level === "error") console.error(line);
    else if (level === "warn") console.warn(line);
    else console.info(line);
    return;
  }

  const prefix = `[${level}]`;
  if (level === "error") console.error(prefix, message, context ?? "");
  else if (level === "warn") console.warn(prefix, message, context ?? "");
  else if (level === "info") console.info(prefix, message, context ?? "");
  else console.debug(prefix, message, context ?? "");
}

/**
 * Structured logger — use instead of console.* in application code.
 */
export const logger = {
  debug: (message: string, context?: LogContext) =>
    emit("debug", message, context),
  info: (message: string, context?: LogContext) =>
    emit("info", message, context),
  warn: (message: string, context?: LogContext) =>
    emit("warn", message, context),
  error: (message: string, context?: LogContext) =>
    emit("error", message, context),
  performance: (metric: string, value: number, context?: LogContext) =>
    emit("info", "performance", { metric, value, ...context }),
  analytics: (event: string, context?: LogContext) =>
    emit("debug", "analytics", { event, ...context }),
};
