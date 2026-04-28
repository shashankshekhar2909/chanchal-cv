import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://beingchanchal.com",
      lastModified: "2026-04-28",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
