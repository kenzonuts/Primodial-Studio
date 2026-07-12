import {
  CONTACT_EMAIL,
  SERVICES,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
} from "@/constants/site";

/**
 * Organization JSON-LD for rich results.
 * Inject via <script type="application/ld+json"> in the root layout.
 */
export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    email: CONTACT_EMAIL,
    sameAs: Object.values(SOCIAL_LINKS),
    knowsAbout: [...SERVICES],
  } as const;
}

/**
 * WebSite JSON-LD — enables sitelinks search box eligibility later.
 */
export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  } as const;
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
