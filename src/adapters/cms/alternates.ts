/**
 * Placeholder adapters — implement when migrating off Payload.
 * Keep the CmsAdapter interface stable so repositories never change.
 */

import { StaticCmsAdapter } from "./static.adapter";
import type { CmsAdapter, CmsProviderName } from "./types";

function createPlaceholder(name: CmsProviderName): CmsAdapter {
  const base = new StaticCmsAdapter();
  return new Proxy(base, {
    get(target, prop, receiver) {
      if (prop === "name") return name;
      return Reflect.get(target, prop, receiver);
    },
  }) as CmsAdapter;
}

export const SanityCmsAdapter = {
  create: () => createPlaceholder("sanity"),
};

export const ContentfulCmsAdapter = {
  create: () => createPlaceholder("contentful"),
};

export const StrapiCmsAdapter = {
  create: () => createPlaceholder("strapi"),
};
