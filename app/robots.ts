import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    host: "https://beingchanchal.com",
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://beingchanchal.com/sitemap.xml",
  };
}
