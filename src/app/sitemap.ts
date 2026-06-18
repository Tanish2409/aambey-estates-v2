import type { MetadataRoute } from "next";
import { locations, services, siteConfig } from "@/content/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...locations.map((l) => ({
      url: `${siteConfig.url}/locations/${l.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.88,
    })),
    ...services.map((s) => ({
      url: `${siteConfig.url}/services/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.84,
    })),
  ];
}
