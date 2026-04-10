import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { Hero } from "@/components/hero"
import {
  categories,
  getProductsByCategory,
  getSubcategoriesForCategory,
} from "@/lib/products.data"
import { CategoryFilters } from "@/components/category/CategoryFilters"

interface CategoryPageProps {
  params: Promise<{ category: string }>
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params
  const meta = categories[category]

  if (!meta) {
    return {}
  }

  return {
    title: meta.label,
    description: meta.description,
    openGraph: {
      title: meta.label,
      description: meta.description,
      images: meta.heroImage ? [{ url: meta.heroImage, alt: meta.label }] : undefined,
    },
  }
}

export function generateStaticParams() {
  return Object.keys(categories).map((category) => ({ category }))
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params
  const meta = categories[category]

  if (!meta) {
    notFound()
  }

  const categoryProducts = getProductsByCategory(category)
  const subs = getSubcategoriesForCategory(category).map((s) => ({
    slug: s.slug,
    label: s.meta.label,
  }))

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: meta.label,
      },
    ],
  }

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Hero
        heading={meta.label}
        subheading={meta.description}
        variant="sub"
        backgroundImage={meta.heroImage}
      />

      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-site)] px-[var(--spacing-section-x)]">
          <CategoryFilters
            products={categoryProducts}
            subcategories={subs}
          />
        </div>
      </section>
    </main>
  )
}
