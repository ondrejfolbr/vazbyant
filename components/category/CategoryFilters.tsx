"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import type { Product } from "@/lib/products.data"

type SortOption = "default" | "price-asc" | "price-desc" | "name-asc"

const PRICE_RANGES = [
  { label: "Do 2 000 Kč", min: 0, max: 2000 },
  { label: "2 000–4 000 Kč", min: 2000, max: 4000 },
  { label: "4 000–6 000 Kč", min: 4000, max: 6000 },
  { label: "Nad 6 000 Kč", min: 6000, max: Infinity },
] as const

const SORT_OPTIONS: { label: string; value: SortOption }[] = [
  { label: "Výchozí", value: "default" },
  { label: "Cena vzestupně", value: "price-asc" },
  { label: "Cena sestupně", value: "price-desc" },
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
  const [activePriceRange, setActivePriceRange] = React.useState<number | null>(null)
  const [sort, setSort] = React.useState<SortOption>("default")
  const [visibleCount, setVisibleCount] = React.useState(PAGE_SIZE)

  const hasActiveFilters = activeSubcategory !== null || activePriceRange !== null || sort !== "default"

  // Filter
  let filtered = products

  if (activeSubcategory) {
    filtered = filtered.filter((p) => p.subcategory === activeSubcategory)
  }

  if (activePriceRange !== null) {
    const range = PRICE_RANGES[activePriceRange]
    filtered = filtered.filter((p) => p.price >= range.min && p.price < range.max)
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
  }, [activeSubcategory, activePriceRange, sort])

  function clearFilters() {
    setActiveSubcategory(null)
    setActivePriceRange(null)
    setSort("default")
  }

  return (
    <>
      {/* Product count */}
      <div className="mb-8 flex items-end justify-between">
        <span className="text-[length:var(--font-size-body-sm)] text-muted-foreground">
          {filtered.length} produktů
        </span>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="text-[length:var(--font-size-body-sm)] text-muted-foreground underline transition-colors hover:text-foreground"
          >
            Zrušit filtry
          </button>
        )}
      </div>

      {/* Filter bar */}
      <div className="mb-10 flex flex-wrap items-center gap-3 border-y border-border py-4">
        {/* Subcategory filter */}
        {subcategories && subcategories.length > 0 && (
          <select
            value={activeSubcategory ?? ""}
            onChange={(e) => setActiveSubcategory(e.target.value || null)}
            className="rounded-sm border border-border bg-background px-4 py-2 text-[length:var(--font-size-body-sm)] text-muted-foreground transition-colors hover:border-deep-plum-80 hover:text-foreground focus:border-deep-plum focus:outline-none"
          >
            <option value="">Podkategorie</option>
            {subcategories.map((sc) => (
              <option key={sc.slug} value={sc.slug}>
                {sc.label}
              </option>
            ))}
          </select>
        )}

        {/* Price range filter */}
        <select
          value={activePriceRange ?? ""}
          onChange={(e) => setActivePriceRange(e.target.value !== "" ? Number(e.target.value) : null)}
          className="rounded-sm border border-border bg-background px-4 py-2 text-[length:var(--font-size-body-sm)] text-muted-foreground transition-colors hover:border-deep-plum-80 hover:text-foreground focus:border-deep-plum focus:outline-none"
        >
          <option value="">Cenový rozsah</option>
          {PRICE_RANGES.map((range, i) => (
            <option key={i} value={i}>
              {range.label}
            </option>
          ))}
        </select>

        {/* Sort */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortOption)}
          className="rounded-sm border border-border bg-background px-4 py-2 text-[length:var(--font-size-body-sm)] text-muted-foreground transition-colors hover:border-deep-plum-80 hover:text-foreground focus:border-deep-plum focus:outline-none"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Active filters chips */}
      {hasActiveFilters && (
        <div className="mb-6 flex flex-wrap gap-2">
          {activeSubcategory && (
            <span className="inline-flex items-center gap-1.5 rounded-sm bg-deep-plum-10 px-3 py-1 text-[length:var(--font-size-caption)] text-foreground">
              {subcategories?.find((s) => s.slug === activeSubcategory)?.label}
              <button
                type="button"
                onClick={() => setActiveSubcategory(null)}
                className="ml-1 text-muted-foreground hover:text-foreground"
                aria-label="Odebrat filtr"
              >
                ×
              </button>
            </span>
          )}
          {activePriceRange !== null && (
            <span className="inline-flex items-center gap-1.5 rounded-sm bg-deep-plum-10 px-3 py-1 text-[length:var(--font-size-caption)] text-foreground">
              {PRICE_RANGES[activePriceRange].label}
              <button
                type="button"
                onClick={() => setActivePriceRange(null)}
                className="ml-1 text-muted-foreground hover:text-foreground"
                aria-label="Odebrat filtr"
              >
                ×
              </button>
            </span>
          )}
        </div>
      )}

      {/* Product grid */}
      {visible.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product) => (
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
      ) : (
        <div className="flex flex-col items-center gap-4 py-20 text-center">
          <p className="text-[length:var(--font-size-body-lg)] text-muted-foreground">
            Žádné produkty neodpovídají vybraným filtrům.
          </p>
          <button
            type="button"
            onClick={clearFilters}
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
