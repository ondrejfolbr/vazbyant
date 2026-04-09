# P2 Enhancements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement all 8 P2 audit items: category filters, size selector, load more, quick order, loading skeletons, breadcrumbs, search, and confirmation page guard.

**Architecture:** Client-side filtering/search over static product data (Zustand store for cart, React state for filters). Server components for breadcrumbs and loading skeletons. SessionStorage for ephemeral checkout flow state.

**Tech Stack:** Next.js 16 (App Router), React 19, Tailwind CSS 4, Zustand, shadcn/ui, Zod, Motion

---

## File Structure

```
components/
  ui/breadcrumb.tsx              — NEW: reusable breadcrumb nav component
  category/CategoryFilters.tsx   — NEW: client component for filters + pagination + grid
  product/SizeSelector.tsx       — NEW: client component for S/M/L selection
  search/SearchDialog.tsx        — NEW: client component for Cmd+K search modal
app/
  loading.tsx                    — NEW: root loading skeleton
  [category]/loading.tsx         — NEW: category listing skeleton
  [category]/[slug]/loading.tsx  — NEW: product detail / subcategory skeleton
  [category]/page.tsx            — MODIFY: use CategoryFilters instead of inline grid
  [category]/[slug]/page.tsx     — MODIFY: add breadcrumbs, use SizeSelector, pass size to cart
components/
  quick-order-form.tsx           — MODIFY: add Zod validation + submit handler
  cart/CartItem.tsx               — MODIFY: display variant label
  cart/ProductAddToCart.tsx        — MODIFY: accept variant prop from SizeSelector
  navbar/navbar.tsx               — MODIFY: add search trigger icon
  checkout/CheckoutFlow.tsx       — MODIFY: set confirmation flag, read quick-order prefill
  checkout/Step1Delivery.tsx      — MODIFY: read quick-order prefill from sessionStorage
  checkout/ConfirmationContent.tsx — MODIFY: add guard redirect
```

---

### Task 1: Breadcrumb Component

**Files:**
- Create: `components/ui/breadcrumb.tsx`

- [ ] **Step 1: Create the Breadcrumb component**

```tsx
// components/ui/breadcrumb.tsx
import Link from "next/link"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Navigace"
      className="mb-4 flex items-center gap-2 text-[length:var(--font-size-body-sm)] text-muted-foreground"
    >
      <Link href="/" className="transition-colors hover:text-foreground">
        Domů
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          <span>/</span>
          {item.href ? (
            <Link
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}

export { Breadcrumb }
export type { BreadcrumbItem }
```

- [ ] **Step 2: Add breadcrumbs to product detail page**

In `app/[category]/[slug]/page.tsx`, import and render `Breadcrumb` inside `ProductDetailPage` at the top of the content area (before the two-column grid). Add it right after line 229 (`<div className="mx-auto max-w-[var(--max-width-site)]...>`):

```tsx
import { Breadcrumb } from "@/components/ui/breadcrumb"
```

Inside `ProductDetailPage`, before the two-column grid div, add:

```tsx
<Breadcrumb
  items={[
    {
      label: categories[product.category]?.label ?? product.category,
      href: `/${product.category}/`,
    },
    ...(product.subcategory
      ? [
          {
            label:
              subcategories[`${product.category}/${product.subcategory}`]
                ?.label ?? product.subcategory,
            href: `/${product.category}/${product.subcategory}/`,
          },
        ]
      : []),
    { label: product.name },
  ]}
/>
```

- [ ] **Step 3: Refactor subcategory breadcrumbs to use the component**

In the `SubcategoryPage` component (same file), replace the inline `<nav>` breadcrumb (lines 113-122) with:

```tsx
<Breadcrumb
  items={[
    { label: categoryMeta.label, href: `/${category}/` },
    { label: subcategoryMeta.label },
  ]}
/>
```

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: Build succeeds with no errors.

- [ ] **Step 5: Commit**

```bash
git add components/ui/breadcrumb.tsx app/\[category\]/\[slug\]/page.tsx
git commit -m "feat: add reusable breadcrumb component to product detail pages"
```

---

### Task 2: Loading Skeletons

**Files:**
- Create: `app/loading.tsx`
- Create: `app/[category]/loading.tsx`
- Create: `app/[category]/[slug]/loading.tsx`

- [ ] **Step 1: Create root loading skeleton**

```tsx
// app/loading.tsx
export default function RootLoading() {
  return (
    <main>
      {/* Hero skeleton */}
      <div className="h-[280px] animate-pulse bg-muted" />

      <div className="mx-auto max-w-[var(--max-width-site)] px-[var(--spacing-section-x)] py-[var(--spacing-section-y)]">
        {/* Heading skeleton */}
        <div className="mb-8 h-8 w-64 animate-pulse rounded-sm bg-muted" />
        {/* Content skeleton */}
        <div className="space-y-4">
          <div className="h-4 w-full animate-pulse rounded-sm bg-muted" />
          <div className="h-4 w-3/4 animate-pulse rounded-sm bg-muted" />
          <div className="h-4 w-5/6 animate-pulse rounded-sm bg-muted" />
        </div>
      </div>
    </main>
  )
}
```

- [ ] **Step 2: Create category listing skeleton**

```tsx
// app/[category]/loading.tsx
export default function CategoryLoading() {
  return (
    <main>
      {/* Hero skeleton */}
      <div className="h-[280px] animate-pulse bg-muted" />

      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-site)] px-[var(--spacing-section-x)]">
          {/* Product count skeleton */}
          <div className="mb-8 flex items-end justify-between">
            <div className="h-4 w-24 animate-pulse rounded-sm bg-muted" />
          </div>

          {/* Filter bar skeleton */}
          <div className="mb-10 flex items-center gap-3 border-y border-border py-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-9 w-28 animate-pulse rounded-sm bg-muted"
              />
            ))}
          </div>

          {/* Product grid skeleton — 3x3 */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="aspect-[4/5] animate-pulse rounded-sm bg-muted" />
                <div className="h-4 w-3/4 animate-pulse rounded-sm bg-muted" />
                <div className="h-4 w-1/3 animate-pulse rounded-sm bg-muted" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
```

- [ ] **Step 3: Create product detail / subcategory skeleton**

```tsx
// app/[category]/[slug]/loading.tsx
export default function SlugLoading() {
  return (
    <main>
      <div className="mx-auto max-w-[var(--max-width-site)] px-[var(--spacing-section-x)] py-12">
        {/* Breadcrumb skeleton */}
        <div className="mb-4 flex items-center gap-2">
          <div className="h-4 w-12 animate-pulse rounded-sm bg-muted" />
          <div className="h-4 w-4 animate-pulse rounded-sm bg-muted" />
          <div className="h-4 w-32 animate-pulse rounded-sm bg-muted" />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Gallery skeleton */}
          <div className="lg:col-span-7">
            <div className="aspect-square animate-pulse rounded-sm bg-muted" />
            <div className="mt-3 flex gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="size-16 animate-pulse rounded-sm bg-muted"
                />
              ))}
            </div>
          </div>

          {/* Info skeleton */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="h-8 w-3/4 animate-pulse rounded-sm bg-muted" />
            <div className="h-6 w-1/3 animate-pulse rounded-sm bg-muted" />
            <div className="space-y-2">
              <div className="h-4 w-full animate-pulse rounded-sm bg-muted" />
              <div className="h-4 w-5/6 animate-pulse rounded-sm bg-muted" />
            </div>
            <div className="flex gap-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="h-10 w-14 animate-pulse rounded-sm bg-muted"
                />
              ))}
            </div>
            <div className="h-12 w-full animate-pulse rounded-sm bg-muted" />
          </div>
        </div>
      </div>
    </main>
  )
}
```

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 5: Commit**

```bash
git add app/loading.tsx app/\[category\]/loading.tsx app/\[category\]/\[slug\]/loading.tsx
git commit -m "feat: add loading skeletons for category and product detail pages"
```

---

### Task 3: Size Selector

**Files:**
- Create: `components/product/SizeSelector.tsx`
- Modify: `app/[category]/[slug]/page.tsx` — replace inline size divs, pass variant to ProductAddToCart
- Modify: `components/cart/CartItem.tsx` — display variant label

- [ ] **Step 1: Create SizeSelector client component**

```tsx
// components/product/SizeSelector.tsx
"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

const SIZES = ["S", "M", "L"] as const
type Size = (typeof SIZES)[number]

interface SizeSelectorProps {
  defaultSize?: Size
  onSizeChange: (size: Size) => void
}

function SizeSelector({ defaultSize = "M", onSizeChange }: SizeSelectorProps) {
  const [selected, setSelected] = React.useState<Size>(defaultSize)

  function handleSelect(size: Size) {
    setSelected(size)
    onSizeChange(size)
  }

  return (
    <div className="flex flex-col gap-2">
      <span className="text-[length:var(--font-size-body-sm)] font-[30] text-muted-foreground">
        Velikost
      </span>
      <div className="flex gap-2">
        {SIZES.map((size) => (
          <button
            key={size}
            type="button"
            onClick={() => handleSelect(size)}
            className={cn(
              "flex h-10 w-14 items-center justify-center rounded-sm border text-[length:var(--font-size-body-sm)] font-[30] transition-colors",
              selected === size
                ? "border-deep-plum bg-deep-plum text-neutral-white"
                : "border-border text-muted-foreground hover:border-deep-plum-80 hover:text-foreground",
            )}
            aria-pressed={selected === size}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  )
}

export { SizeSelector }
export type { Size }
```

- [ ] **Step 2: Create a client wrapper for the product detail interaction zone**

The product detail page is a server component. We need a small client island that wraps SizeSelector + ProductAddToCart so they share the selected size state.

```tsx
// components/product/ProductActions.tsx
"use client"

import * as React from "react"

import { SizeSelector } from "@/components/product/SizeSelector"
import { ProductAddToCart } from "@/components/cart/ProductAddToCart"
import { QuickOrderForm } from "@/components/quick-order-form"
import type { Size } from "@/components/product/SizeSelector"

interface ProductActionsProps {
  productId: string
  slug: string
  name: string
  price: number
  image: string
  category: "smutecni" | "svatebni" | "kytice" | "firemni"
  isFuneral: boolean
}

function ProductActions({
  productId,
  slug,
  name,
  price,
  image,
  category,
  isFuneral,
}: ProductActionsProps) {
  const [selectedSize, setSelectedSize] = React.useState<Size>("M")

  return (
    <>
      <SizeSelector defaultSize="M" onSizeChange={setSelectedSize} />
      <ProductAddToCart
        productId={productId}
        slug={slug}
        name={name}
        price={price}
        image={image}
        category={category}
        variant={selectedSize}
      />
      {isFuneral && (
        <QuickOrderForm
          productId={productId}
          slug={slug}
          name={name}
          price={price}
          image={image}
          category={category}
          selectedSize={selectedSize}
        />
      )}
    </>
  )
}

export { ProductActions }
```

- [ ] **Step 3: Update ProductDetailPage to use ProductActions**

In `app/[category]/[slug]/page.tsx`, in the `ProductDetailPage` component:

1. Add import: `import { ProductActions } from "@/components/product/ProductActions"`
2. Remove imports of `ProductAddToCart`, `QuickOrderForm`
3. Replace the variant selector div (lines 265-283), the `<ProductAddToCart>` (lines 286-293), and `{isFuneral && <QuickOrderForm />}` (line 296) with:

```tsx
<ProductActions
  productId={String(product.id)}
  slug={product.slug}
  name={product.name}
  price={product.price}
  image={product.image ?? "/category-kytice.jpg"}
  category={product.category as "smutecni" | "svatebni" | "kytice" | "firemni"}
  isFuneral={isFuneral}
/>
```

- [ ] **Step 4: Display variant in CartItem**

In `components/cart/CartItem.tsx`, add the variant display after the category label (after line 65):

```tsx
{item.variant && (
  <span className="text-[length:var(--font-size-caption)] text-muted-foreground">
    {" · "}Velikost {item.variant}
  </span>
)}
```

- [ ] **Step 5: Verify build**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 6: Commit**

```bash
git add components/product/SizeSelector.tsx components/product/ProductActions.tsx app/\[category\]/\[slug\]/page.tsx components/cart/CartItem.tsx
git commit -m "feat: add functional size selector with variant tracking in cart"
```

---

### Task 4: Category Filters + Load More

**Files:**
- Create: `components/category/CategoryFilters.tsx`
- Modify: `app/[category]/page.tsx` — replace inline grid + filters with CategoryFilters
- Modify: `app/[category]/[slug]/page.tsx` — replace inline filters in SubcategoryPage

- [ ] **Step 1: Create CategoryFilters client component**

```tsx
// components/category/CategoryFilters.tsx
"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
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
  const [activeSubcategory, setActiveSubcategory] = React.useState<
    string | null
  >(null)
  const [activePriceRange, setActivePriceRange] = React.useState<number | null>(
    null,
  )
  const [sort, setSort] = React.useState<SortOption>("default")
  const [visibleCount, setVisibleCount] = React.useState(PAGE_SIZE)

  const hasActiveFilters =
    activeSubcategory !== null || activePriceRange !== null || sort !== "default"

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
            onChange={(e) =>
              setActiveSubcategory(e.target.value || null)
            }
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
          onChange={(e) =>
            setActivePriceRange(e.target.value !== "" ? Number(e.target.value) : null)
          }
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
            variant="outline"
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
```

- [ ] **Step 2: Update category page to use CategoryFilters**

Replace the entire content of `app/[category]/page.tsx`:

```tsx
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

  return (
    <main>
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
```

- [ ] **Step 3: Update SubcategoryPage to use CategoryFilters**

In `app/[category]/[slug]/page.tsx`, in the `SubcategoryPage` component:

1. Add import: `import { CategoryFilters } from "@/components/category/CategoryFilters"`
2. Replace the filter bar div (lines 141-152), the product grid (lines 155-179), and the load more button (lines 182-189) with:

```tsx
<CategoryFilters products={subcategoryProducts} />
```

Remove the existing inline product count display (lines 133-138) since `CategoryFilters` renders its own.

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 5: Commit**

```bash
git add components/category/CategoryFilters.tsx app/\[category\]/page.tsx app/\[category\]/\[slug\]/page.tsx
git commit -m "feat: add functional category filters with sorting and load more"
```

---

### Task 5: Quick Order Handler

**Files:**
- Modify: `components/quick-order-form.tsx`
- Modify: `components/checkout/CheckoutFlow.tsx`
- Modify: `components/checkout/Step1Delivery.tsx`

- [ ] **Step 1: Update QuickOrderForm with validation and submit handler**

Replace the entire `components/quick-order-form.tsx`:

```tsx
// components/quick-order-form.tsx
"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"

interface QuickOrderFormProps {
  className?: string
  productId: string
  slug: string
  name: string
  price: number
  image: string
  category: "smutecni" | "svatebni" | "kytice" | "firemni"
  selectedSize: string
}

function QuickOrderForm({
  className,
  productId,
  slug,
  name,
  price,
  image,
  category,
  selectedSize,
}: QuickOrderFormProps) {
  const router = useRouter()
  const { addItem } = useCart()
  const [message, setMessage] = React.useState("")
  const maxLength = 300

  function handleQuickOrder() {
    // Add product to cart
    addItem({
      productId,
      slug,
      name,
      price,
      image,
      category,
      variant: selectedSize,
    })

    // Store condolence message in sessionStorage for checkout
    if (message.trim()) {
      sessionStorage.setItem(
        "vk-quick-order",
        JSON.stringify({ condolenceMessage: message.trim() }),
      )
    }

    // Redirect to checkout
    router.push("/objednavka")
  }

  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-sm border border-border bg-deep-plum-10 p-5",
        className,
      )}
    >
      {/* Urgent delivery badge */}
      <div className="flex items-center gap-2 rounded-sm bg-deep-plum/10 px-3 py-2">
        <div className="size-2 rounded-full bg-deep-plum" />
        <span className="text-[length:var(--font-size-body-sm)] font-[30] text-deep-plum">
          Doručíme do 4 hodin v Praze
        </span>
      </div>

      {/* Condolence card */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="condolence"
          className="text-[length:var(--font-size-body-sm)] font-[30] text-foreground"
        >
          Kondolenční kartička
          <span className="ml-1 font-[30] text-muted-foreground">
            (volitelné)
          </span>
        </label>
        <textarea
          id="condolence"
          value={message}
          onChange={(e) => setMessage(e.target.value.slice(0, maxLength))}
          placeholder="Váš osobní vzkaz na kartičce..."
          rows={3}
          className="resize-none rounded-sm border border-border bg-background px-3 py-2.5 text-[length:var(--font-size-body-sm)] text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-plum-50 focus:ring-2 focus:ring-plum-50/20"
        />
        <span className="self-end text-[length:var(--font-size-caption)] text-muted-foreground">
          {message.length}/{maxLength}
        </span>
      </div>

      {/* Quick order CTA */}
      <Button
        variant="accent"
        size="lg"
        className="w-full"
        onClick={handleQuickOrder}
      >
        Rychlá objednávka
      </Button>
      <p className="text-center text-[length:var(--font-size-caption)] text-muted-foreground">
        Přeskočí košík — přejdete rovnou k dokončení objednávky
      </p>
    </div>
  )
}

export { QuickOrderForm }
```

- [ ] **Step 2: Update Step1Delivery to read quick-order prefill**

In `components/checkout/Step1Delivery.tsx`, add a note prefill from sessionStorage. After the `useForm` call (line 50-57), add:

```tsx
React.useEffect(() => {
  const quickOrderData = sessionStorage.getItem("vk-quick-order")
  if (quickOrderData) {
    try {
      const parsed = JSON.parse(quickOrderData) as { condolenceMessage?: string }
      if (parsed.condolenceMessage) {
        // Prefill the note field with condolence message
        const currentNote = watch("note")
        if (!currentNote) {
          // react-hook-form setValue needs to be imported
          // We'll handle this in the form setup
        }
      }
    } catch {
      // Ignore invalid JSON
    }
  }
}, [])
```

Actually, a simpler approach — read sessionStorage to set `defaultValues` for the form. Update the `Step1Delivery` component to merge quick-order data into defaultValues:

In `components/checkout/Step1Delivery.tsx`, update the component body. After the destructured `useForm`, add `setValue` to the destructured result:

```tsx
const {
  register,
  handleSubmit,
  watch,
  setValue,
  formState: { errors },
} = useForm<DeliveryFormData>({
  // ...existing config
})
```

Then add this effect after the `useForm` call:

```tsx
React.useEffect(() => {
  try {
    const raw = sessionStorage.getItem("vk-quick-order")
    if (raw) {
      const data = JSON.parse(raw) as { condolenceMessage?: string }
      if (data.condolenceMessage && !watch("note")) {
        setValue("note", `Kondolenční kartička: ${data.condolenceMessage}`)
      }
    }
  } catch {
    // Ignore
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
```

- [ ] **Step 3: Clear quick-order data after checkout**

In `components/checkout/CheckoutFlow.tsx`, update the `handleConfirm` function (line 45-48):

```tsx
function handleConfirm() {
  clearCart()
  sessionStorage.removeItem("vk-quick-order")
  sessionStorage.setItem("vk-order-confirmed", "true")
  router.push("/potvrzeni/")
}
```

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 5: Commit**

```bash
git add components/quick-order-form.tsx components/checkout/Step1Delivery.tsx components/checkout/CheckoutFlow.tsx
git commit -m "feat: wire up quick order form with cart integration and checkout redirect"
```

---

### Task 6: Confirmation Page Guard

**Files:**
- Modify: `components/checkout/ConfirmationContent.tsx`
- Modify: `components/checkout/CheckoutFlow.tsx` (already done in Task 5 Step 3)

- [ ] **Step 1: Add guard to ConfirmationContent**

In `components/checkout/ConfirmationContent.tsx`, add the redirect guard. Update the imports and component body:

Add imports at the top:

```tsx
import { useRouter } from "next/navigation"
```

Inside the `ConfirmationContent` function, before the return statement, add:

```tsx
const router = useRouter()
const [allowed, setAllowed] = React.useState(false)

React.useEffect(() => {
  const confirmed = sessionStorage.getItem("vk-order-confirmed")
  if (confirmed) {
    sessionStorage.removeItem("vk-order-confirmed")
    setAllowed(true)
  } else {
    router.replace("/")
  }
}, [router])

if (!allowed) {
  return null
}
```

- [ ] **Step 2: Verify the flag is set in CheckoutFlow**

Confirm that `handleConfirm` in `CheckoutFlow.tsx` already includes `sessionStorage.setItem("vk-order-confirmed", "true")` from Task 5 Step 3. If Task 5 hasn't been done yet, add this line now.

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 4: Commit**

```bash
git add components/checkout/ConfirmationContent.tsx components/checkout/CheckoutFlow.tsx
git commit -m "feat: add confirmation page guard to prevent direct URL access"
```

---

### Task 7: Search Dialog

**Files:**
- Create: `components/search/SearchDialog.tsx`
- Modify: `components/navbar/navbar.tsx`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Create SearchDialog client component**

```tsx
// components/search/SearchDialog.tsx
"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

import { products } from "@/lib/products.data"
import type { Product } from "@/lib/products.data"

function formatPrice(price: number): string {
  return new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
    minimumFractionDigits: 0,
  }).format(price)
}

function searchProducts(query: string): Product[] {
  if (!query.trim()) return []
  const q = query.toLowerCase()
  return products
    .filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.composition.toLowerCase().includes(q),
    )
    .slice(0, 8)
}

function SearchDialog() {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")
  const [activeIndex, setActiveIndex] = React.useState(0)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const results = searchProducts(query)

  // Keyboard shortcut: Cmd+K / Ctrl+K
  React.useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setOpen(true)
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Focus input when dialog opens
  React.useEffect(() => {
    if (open) {
      // Small delay to let dialog render
      requestAnimationFrame(() => inputRef.current?.focus())
    } else {
      setQuery("")
      setActiveIndex(0)
    }
  }, [open])

  // Reset active index on query change
  React.useEffect(() => {
    setActiveIndex(0)
  }, [query])

  function handleSelect(product: Product) {
    setOpen(false)
    router.push(`/${product.category}/${product.slug}/`)
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, results.length - 1))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === "Enter" && results[activeIndex]) {
      e.preventDefault()
      handleSelect(results[activeIndex])
    } else if (e.key === "Escape") {
      setOpen(false)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center pt-[15vh]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-neutral-black/40 backdrop-blur-sm"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Dialog */}
      <div
        role="dialog"
        aria-label="Vyhledavani"
        className="relative w-full max-w-lg rounded-sm border border-border bg-background shadow-2xl"
      >
        {/* Search input */}
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0 text-muted-foreground"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Hledat produkty..."
            className="flex-1 bg-transparent text-[length:var(--font-size-body)] text-foreground placeholder:text-muted-foreground/60 outline-none"
          />
          <kbd className="rounded bg-muted px-2 py-0.5 text-[length:var(--font-size-caption)] text-muted-foreground">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto p-2">
          {query.trim() === "" ? (
            <p className="px-3 py-6 text-center text-[length:var(--font-size-body-sm)] text-muted-foreground">
              Zadejte hledaný výraz
            </p>
          ) : results.length === 0 ? (
            <p className="px-3 py-6 text-center text-[length:var(--font-size-body-sm)] text-muted-foreground">
              Žádné výsledky pro &ldquo;{query}&rdquo;
            </p>
          ) : (
            <ul role="listbox">
              {results.map((product, i) => (
                <li
                  key={product.id}
                  role="option"
                  aria-selected={i === activeIndex}
                  onClick={() => handleSelect(product)}
                  onMouseEnter={() => setActiveIndex(i)}
                  className={`flex cursor-pointer items-center gap-3 rounded-sm px-3 py-2.5 transition-colors ${
                    i === activeIndex
                      ? "bg-deep-plum-10"
                      : "hover:bg-muted/50"
                  }`}
                >
                  <div className="relative size-10 shrink-0 overflow-hidden rounded-sm bg-muted">
                    {product.image && (
                      <Image
                        src={product.image}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[length:var(--font-size-body-sm)] font-[30] text-foreground">
                      {product.name}
                    </p>
                    <p className="text-[length:var(--font-size-caption)] text-muted-foreground">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer hint */}
        {results.length > 0 && (
          <div className="border-t border-border px-4 py-2 text-center text-[length:var(--font-size-caption)] text-muted-foreground">
            ↑↓ navigace · Enter vybrat
          </div>
        )}
      </div>
    </div>
  )
}

export { SearchDialog }
```

- [ ] **Step 2: Add search trigger to navbar**

In `components/navbar/navbar.tsx`, add a search trigger button in the utility nav section. Find the `{/* Utility nav */}` div (around line 106) and add the search button before the phone link:

```tsx
{/* Search trigger */}
<button
  type="button"
  onClick={() => document.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }))}
  className="flex size-10 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-deep-plum-10 hover:text-foreground"
  aria-label="Vyhledávání (⌘K)"
>
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
</button>
```

- [ ] **Step 3: Mount SearchDialog in root layout**

In `app/layout.tsx`, add the SearchDialog import and render it inside the body, after the `<CartDrawer />` component:

```tsx
import { SearchDialog } from "@/components/search/SearchDialog"
```

Add inside the body:

```tsx
<SearchDialog />
```

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 5: Commit**

```bash
git add components/search/SearchDialog.tsx components/navbar/navbar.tsx app/layout.tsx
git commit -m "feat: add Cmd+K search dialog with product search"
```

---

### Task 8: Final Verification

- [ ] **Step 1: Run full verification suite**

```bash
npm run lint
npm run typecheck
npm run build
```

Expected: All three commands pass with no errors.

- [ ] **Step 2: Update AUDIT-TODO.md**

Mark all P2 items as completed in `AUDIT-TODO.md` — change `- [ ]` to `- [x]` for each P2 item.

- [ ] **Step 3: Final commit**

```bash
git add AUDIT-TODO.md
git commit -m "docs: mark all P2 audit items as completed"
```
