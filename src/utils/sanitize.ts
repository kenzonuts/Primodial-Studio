/**
 * Lightweight input sanitization for forms / CMS payloads.
 * Strip control chars and normalize whitespace — not a full HTML sanitizer.
 */
export function sanitizeText(input: string, maxLength = 5000): string {
  return input
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

export function sanitizeEmail(input: string): string {
  return sanitizeText(input, 320).toLowerCase();
}

export function isValidEmail(input: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sanitizeEmail(input));
}
