import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    host: "https://www.beingchanchal.com",
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.beingchanchal.com/sitemap.xml",
  };
}
