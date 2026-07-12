import type { MetadataRoute } from "next";

import { SITEMAP_ROUTES } from "@/constants/routes";
import { SITE_URL } from "@/constants/site";

/**
 * Static sitemap from canonical route map.
 * Extend with dynamic work/[slug] when CMS content exists.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return SITEMAP_ROUTES.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/services") ? 0.8 : 0.7,
  }));
}
