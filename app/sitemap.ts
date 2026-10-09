import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = process.env.NEXT_PUBLIC_SITE_URL;
  if (!origin || !/^https:\/\//i.test(origin)) return [];
  const base = origin.replace(/\/$/, "");
  const paths = ["/", "/privacy", "/terms"];
  const concepts = ["restaurant", "saas", "fashion", "real-estate", "portfolio", "ecommerce"];
  return [...paths, ...concepts.map((slug) => `/concepts/${slug}`)].map((path) => ({ url: `${base}${path}` }));
}
