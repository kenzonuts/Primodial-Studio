/**
 * CMS platform barrel — Payload config + collections live under this tree.
 * Application code should use `@/services/content` or `@/repositories`, never Payload directly.
 */
export { default as payloadConfig } from "./payload.config";
export { collections } from "./collections";
export { globals } from "./globals";
