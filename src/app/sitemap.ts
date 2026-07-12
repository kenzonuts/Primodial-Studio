import type { MetadataRoute } from "next";

import { SITEMAP_ROUTES } from "@/constants/routes";
import { SITE_URL } from "@/constants/site";
import { getDynamicSitemapEntries } from "@/services/content";

/**
 * Sitemap — static IA routes + CMS-driven project/service/post entries.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = SITEMAP_ROUTES.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/services") ? 0.8 : 0.7,
  }));

  let dynamicEntries: MetadataRoute.Sitemap = [];
  try {
    const dynamic = await getDynamicSitemapEntries();
    dynamicEntries = dynamic.map((entry) => ({
      url: `${SITE_URL}${entry.path}`,
      lastModified: entry.lastModified ?? now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch {
    // CMS unavailable — ship static routes only
  }

  return [...staticEntries, ...dynamicEntries];
}
