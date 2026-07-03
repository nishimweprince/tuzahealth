import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/seo";

const ROUTES = ["", "/about", "/services", "/compliance", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
