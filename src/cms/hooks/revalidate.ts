import type { CollectionAfterChangeHook } from "payload";

/**
 * On-demand revalidation tags for Next.js cache.
 * Wire specific paths in adapters/services via `revalidateTag`.
 */
export const revalidateCollection =
  (tag: string): CollectionAfterChangeHook =>
  ({ doc, req }) => {
    try {
      // Dynamic import to avoid edge issues during Payload init
      void import("next/cache").then(({ revalidateTag }) => {
        revalidateTag(tag);
        if (doc?.slug) {
          revalidateTag(`${tag}:${doc.slug}`);
        }
      });
    } catch {
      req.payload.logger.warn(`Failed to revalidate tag: ${tag}`);
    }
    return doc;
  };
