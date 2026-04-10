"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import type { Product } from "@/lib/products.data"

type SortOption = "default" | "price-asc" | "price-desc" | "name-asc"

const SORT_OPTIONS: { label: string; value: SortOption }[] = [
  { label: "Výchozí řazení", value: "default" },
  { label: "Nejlevnější", value: "price-asc" },
  { label: "Nejdražší", value: "price-desc" },
  { label: "Název A–Z", value: "name-asc" },
]

const PAGE_SIZE = 9

interface SubcategoryOption {
  slug: string
  label: string
}

interface CategoryFiltersProps {
  products: Product[]
  subcategories?: SubcategoryOption[]
}

function CategoryFilters({ products, subcategories }: CategoryFiltersProps) {
  const [activeSubcategory, setActiveSubcategory] = React.useState<string | null>(null)
  const [sort, setSort] = React.useState<SortOption>("default")
  const [visibleCount, setVisibleCount] = React.useState(PAGE_SIZE)

  // Filter
  let filtered = products

  if (activeSubcategory) {
    filtered = filtered.filter((p) => p.subcategory === activeSubcategory)
  }

  // Sort
  if (sort === "price-asc") {
    filtered = [...filtered].sort((a, b) => a.price - b.price)
  } else if (sort === "price-desc") {
    filtered = [...filtered].sort((a, b) => b.price - a.price)
  } else if (sort === "name-asc") {
    filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name, "cs"))
  }

  // Pagination
  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  // Reset pagination when filters change
  React.useEffect(() => {
    setVisibleCount(PAGE_SIZE)
  }, [activeSubcategory, sort])

  return (
    <>
      {/* Filter bar */}
      <div className="mb-10 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
        {/* Left — subcategory pills */}
        <div className="flex flex-wrap items-center gap-2">
          {subcategories && subcategories.length > 0 && (
            <>
              <button
                type="button"
                onClick={() => setActiveSubcategory(null)}
                className={`rounded-full px-4 py-1.5 text-[length:var(--font-size-body-sm)] transition-colors ${
                  activeSubcategory === null
                    ? "bg-deep-plum text-neutral-white"
                    : "bg-deep-plum-10 text-muted-foreground hover:text-foreground"
                }`}
              >
                Vše
              </button>
              {subcategories.map((sc) => (
                <button
                  key={sc.slug}
                  type="button"
                  onClick={() => setActiveSubcategory(sc.slug)}
                  className={`rounded-full px-4 py-1.5 text-[length:var(--font-size-body-sm)] transition-colors ${
                    activeSubcategory === sc.slug
                      ? "bg-deep-plum text-neutral-white"
                      : "bg-deep-plum-10 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {sc.label}
                </button>
              ))}
            </>
          )}
        </div>

        {/* Right — sort + count */}
        <div className="flex items-center gap-3">
          <span className="text-[length:var(--font-size-caption)] text-muted-foreground">
            {filtered.length} produktů
          </span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            aria-label="Řazení produktů"
            className="rounded-sm border border-border bg-background px-3 py-1.5 text-[length:var(--font-size-body-sm)] text-muted-foreground focus:border-deep-plum focus:outline-none"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Product grid */}
      {visible.length > 0 ? (
        <ul className="grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product) => (
            <li key={product.id}>
              <ProductCard
                image={product.image}
                title={product.name}
                price={product.price}
                badge={product.badge}
                slug={product.slug}
                category={product.category}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center gap-4 py-20 text-center">
          <p className="text-[length:var(--font-size-body-lg)] text-muted-foreground">
            Žádné produkty neodpovídají vybraným filtrům.
          </p>
          <button
            type="button"
            onClick={() => setActiveSubcategory(null)}
            className="text-[length:var(--font-size-body)] text-deep-plum underline transition-colors hover:text-deep-plum-70"
          >
            Zobrazit všechny produkty
          </button>
        </div>
      )}

      {/* Load more */}
      {hasMore && (
        <div className="mt-12 flex flex-col items-center gap-2">
          <Button
            size="md"
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
          >
            Načíst další
          </Button>
          <span className="text-[length:var(--font-size-caption)] text-muted-foreground">
            Zobrazeno {visible.length} z {filtered.length}
          </span>
        </div>
      )}
    </>
  )
}

export { CategoryFilters }
