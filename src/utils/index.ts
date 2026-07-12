/**
 * Formats an absolute URL from a path, using the site origin.
 */
export function absoluteUrl(path = "", origin: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${origin.replace(/\/$/, "")}${normalizedPath === "/" ? "" : normalizedPath}`;
}

/**
 * Narrows unknown errors into a readable message for logging / UI.
 */
export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === "string") {
    return error;
  }

  return "An unexpected error occurred.";
}

/**
 * Delays resolution — useful for staggered UI demos and testing skeletons.
 * Prefer real async boundaries in production flows.
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
