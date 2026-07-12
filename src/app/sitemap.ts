import type { MetadataRoute } from "next";

import { SITE_URL } from "@/constants/site";

/**
 * Static sitemap foundation. Extend with dynamic routes as pages ship.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = ["", "/work", "/services", "/about", "/contact"].map(
    (path) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  return routes;
}
