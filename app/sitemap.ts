import type { MetadataRoute } from "next"

import { categories, products } from "@/lib/products.data"

const BASE_URL = "https://vazbykvetin.cz"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/o-nas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/kontakt`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/rady-a-tipy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ]

  const categoryPages: MetadataRoute.Sitemap = Object.keys(categories).map(
    (key) => ({
      url: `${BASE_URL}/${key}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }),
  )

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${BASE_URL}/${product.category}/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }))

  return [...staticPages, ...categoryPages, ...productPages]
}
