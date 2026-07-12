import { PayloadCmsAdapter } from "./payload.adapter";
import { StaticCmsAdapter } from "./static.adapter";
import type { CmsAdapter, CmsProviderName } from "./types";

export type {
  CmsAdapter,
  CmsProviderName,
  DomainProject,
  DomainService,
  DomainFaq,
  DomainPost,
  DomainTestimonial,
  DomainTechnology,
  DomainSiteSettings,
  DomainSocialLink,
  DomainNavLink,
  ContactRequestInput,
  NewsletterInput,
  SeoMeta,
  MediaAsset,
} from "./types";

export { StaticCmsAdapter } from "./static.adapter";
export { PayloadCmsAdapter } from "./payload.adapter";

let cached: CmsAdapter | null = null;

/**
 * Resolve active CMS adapter from env.
 * Default: `static` (identical UI, zero DB required).
 * Set `CMS_PROVIDER=payload` to use Payload Local API with static fallback.
 */
export function getCmsAdapter(): CmsAdapter {
  if (cached) return cached;

  const provider = (process.env.CMS_PROVIDER || "static") as CmsProviderName;

  switch (provider) {
    case "payload":
      cached = new PayloadCmsAdapter();
      break;
    case "sanity":
    case "contentful":
    case "strapi":
      // Reserved — implement adapter and switch here without touching UI.
      cached = new StaticCmsAdapter();
      break;
    case "static":
    default:
      cached = new StaticCmsAdapter();
      break;
  }

  return cached;
}

/** Test helper — reset singleton between provider switches */
export function resetCmsAdapter() {
  cached = null;
}
