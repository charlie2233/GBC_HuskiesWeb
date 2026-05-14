import type { MetadataRoute } from "next";
import { mainRoutes, siteUrl, storeItems } from "@/lib/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-05-14T00:00:00.000Z");

  const pageRoutes: MetadataRoute.Sitemap = mainRoutes.map((route) => ({
    url: `${siteUrl}${route.path === "/" ? "" : route.path}`,
    lastModified,
    changeFrequency: route.path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: route.priority,
  }));

  const storeProductRoutes: MetadataRoute.Sitemap = storeItems.map((item) => ({
    url: `${siteUrl}/store/${item.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.62,
  }));

  return [...pageRoutes, ...storeProductRoutes];
}
