import type { Metadata } from "next";

import { seoConfig } from "@/config/seo";
import {
  SITE_DESCRIPTION,
  SITE_LOCALE,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/constants/site";

const DEFAULT_OG_IMAGE = seoConfig.defaultOgImage;

export type BuildMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  locale?: string;
  alternateLocales?: string[];
};

/**
 * Builds consistent page metadata with Open Graph + Twitter cards.
 * Use from any `page.tsx` / `layout.tsx` via `generateMetadata` or static export.
 */
export function buildMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = "",
  image = DEFAULT_OG_IMAGE,
  noIndex = false,
  keywords = [...seoConfig.keywords],
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  locale = SITE_LOCALE,
  alternateLocales = [...seoConfig.locales],
}: BuildMetadataInput = {}): Metadata {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const url = `${SITE_URL}${path}`;
  const ogImage = image.startsWith("http")
    ? image
    : image.startsWith("/api/og")
      ? `${SITE_URL}${image}`
      : `${SITE_URL}${image}`;

  const languages: Record<string, string> = {};
  for (const loc of alternateLocales) {
    languages[loc] = url;
  }

  return {
    metadataBase: new URL(SITE_URL),
    title: title
      ? pageTitle
      : {
          default: `${SITE_NAME} — ${SITE_TAGLINE}`,
          template: `%s | ${SITE_NAME}`,
        },
    description,
    applicationName: SITE_NAME,
    authors: authors?.map((name) => ({ name })) ?? [
      { name: SITE_NAME, url: SITE_URL },
    ],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    keywords,
    category: "technology",
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      type,
      locale,
      url,
      siteName: SITE_NAME,
      title: pageTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title ?? SITE_NAME,
        },
      ],
      ...(type === "article"
        ? {
            publishedTime,
            modifiedTime,
            authors: authors ?? [SITE_NAME],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [ogImage],
      creator: seoConfig.twitterHandle,
      site: seoConfig.twitterHandle,
    },
    verification: {
      google: seoConfig.verification.google,
      other: Object.fromEntries(
        Object.entries(seoConfig.verification.other).filter(([, value]) =>
          Boolean(value),
        ) as [string, string][],
      ),
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

/** Dynamic OG image URL helper for future blog/portfolio pages */
export function buildOgImageUrl(params: {
  title: string;
  description?: string;
  type?: string;
}): string {
  const search = new URLSearchParams({
    title: params.title,
    ...(params.description ? { description: params.description } : {}),
    ...(params.type ? { type: params.type } : {}),
  });
  return `/api/og?${search.toString()}`;
}
