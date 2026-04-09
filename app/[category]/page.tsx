import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { Hero } from "@/components/hero"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { categories, getProductsByCategory } from "@/lib/products.data"

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

  return (
    <main>
      {/* Category hero */}
      <Hero
        heading={meta.label}
        subheading={meta.description}
        variant="sub"
        backgroundImage={meta.heroImage}
      />

      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-site)] px-[var(--spacing-section-x)]">
          {/* Header with product count */}
          <div className="mb-8 flex items-end justify-between">
            <span className="text-[length:var(--font-size-body-sm)] text-muted-foreground">
              {categoryProducts.length} produktů
            </span>
          </div>

          {/* Filter bar placeholder */}
          <div className="mb-10 flex flex-wrap items-center gap-3 border-y border-border py-4">
            {["Typ vazby", "Cenový rozsah", "Barva", "Řazení"].map(
              (filter) => (
                <div
                  key={filter}
                  className="rounded-sm border border-border px-4 py-2 text-[length:var(--font-size-body-sm)] text-muted-foreground transition-colors hover:border-deep-plum-80 hover:text-foreground"
                >
                  {filter}
                </div>
              ),
            )}
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categoryProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.name}
                price={product.price}
                badge={product.badge}
                slug={product.slug}
                category={product.category}
              />
            ))}
          </div>

          {/* Load more */}
          <div className="mt-12 flex justify-center">
            <Button variant="outline" size="md">
              Načíst další
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
