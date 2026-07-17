import type { MetadataRoute } from "next";

const BASE_URL = "https://tebatsoseshayi.co.za";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/resume", "/privacy-policy", "/terms-of-use", "/cookie-policy", "/accessibility", "/disclaimer"];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.5,
  }));
}