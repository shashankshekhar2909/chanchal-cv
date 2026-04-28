import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.beingchanchal.com",
      lastModified: "2026-04-28",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.beingchanchal.com/content-strategist-bengaluru",
      lastModified: "2026-04-28",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.beingchanchal.com/lifecycle-messaging-specialist",
      lastModified: "2026-04-28",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.beingchanchal.com/seo-copywriter-india",
      lastModified: "2026-04-28",
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
