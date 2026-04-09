import Link from "next/link"
import { notFound } from "next/navigation"

import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ProductCard } from "@/components/product-card"
import { ProductAddToCart } from "@/components/cart/ProductAddToCart"
import { QuickOrderForm } from "@/components/quick-order-form"
import {
  products,
  subcategories,
  categories,
  getProductBySlug,
  getRelatedProducts,
  getSubcategory,
  getProductsBySubcategory,
} from "@/lib/products.data"

interface SlugPageProps {
  params: Promise<{ category: string; slug: string }>
}

export function generateStaticParams() {
  const productParams = products.map((p) => ({
    category: p.category,
    slug: p.slug,
  }))

  const subcategoryParams = Object.keys(subcategories).map((key) => {
    const [category, slug] = key.split("/")
    return { category, slug }
  })

  return [...productParams, ...subcategoryParams]
}

export default async function SlugPage({ params }: SlugPageProps) {
  const { category, slug } = await params

  // Check if this is a subcategory first
  const subcategoryMeta = getSubcategory(category, slug)
  if (subcategoryMeta) {
    return <SubcategoryPage category={category} slug={slug} />
  }

  // Otherwise, try product
  const product = getProductBySlug(category, slug)
  if (!product) {
    notFound()
  }

  return <ProductDetailPage category={category} product={product} />
}

// --- Subcategory listing ---

interface SubcategoryPageProps {
  category: string
  slug: string
}

function SubcategoryPage({ category, slug }: SubcategoryPageProps) {
  const subcategoryMeta = getSubcategory(category, slug)
  const categoryMeta = categories[category]

  if (!subcategoryMeta || !categoryMeta) {
    notFound()
  }

  const subcategoryProducts = getProductsBySubcategory(category, slug)

  return (
    <main>
      {/* Breadcrumb-style header */}
      <section className="bg-deep-plum-10 py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-site)] px-[var(--spacing-section-x)]">
          <nav className="mb-4 flex items-center gap-2 text-[length:var(--font-size-body-sm)] text-muted-foreground">
            <Link
              href={`/${category}/`}
              className="transition-colors hover:text-foreground"
            >
              {categoryMeta.label}
            </Link>
            <span>/</span>
            <span className="text-foreground">{subcategoryMeta.label}</span>
          </nav>
          <SectionHeading
            heading={subcategoryMeta.label}
            body={subcategoryMeta.description}
          />
        </div>
      </section>

      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-site)] px-[var(--spacing-section-x)]">
          {/* Product count */}
          <div className="mb-8 flex items-end justify-between">
            <span className="text-[length:var(--font-size-body-sm)] text-muted-foreground">
              {subcategoryProducts.length}{" "}
              {subcategoryProducts.length === 1 ? "produkt" : "produktů"}
            </span>
          </div>

          {/* Filter bar */}
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
          {subcategoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {subcategoryProducts.map((product) => (
                <ProductCard
                  key={product.id}
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
                Produkty v této kategorii připravujeme.
              </p>
              <Button asChild variant="outline" size="md">
                <Link href={`/${category}/`}>
                  Zpět na {categoryMeta.label.toLowerCase()}
                </Link>
              </Button>
            </div>
          )}

          {/* Load more */}
          {subcategoryProducts.length > 6 && (
            <div className="mt-12 flex justify-center">
              <Button variant="outline" size="md">
                Načíst další
              </Button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

// --- Product detail ---

interface ProductDetailPageProps {
  category: string
  product: {
    id: number
    name: string
    slug: string
    price: number
    category: string
    subcategory: string | null
    badge: string | null
    image: string | null
    images: string[]
    description: string
    composition: string
    delivery: string
    care: string
  }
}

function ProductDetailPage({ product }: ProductDetailPageProps) {
  const related = getRelatedProducts(product)
  const isFuneral = product.category === "smutecni"

  const formattedPrice = new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
    minimumFractionDigits: 0,
  }).format(product.price)

  return (
    <main>
      <div className="mx-auto max-w-[var(--max-width-site)] px-[var(--spacing-section-x)] py-12">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left — Gallery */}
          <div className="lg:col-span-7">
            {/* Main image */}
            <div className="flex aspect-[4/5] items-center justify-center rounded-sm bg-plum-10">
              <span className="text-[length:var(--font-size-body)] text-plum-50">
                Hlavní foto produktu
              </span>
            </div>

            {/* Thumbnails */}
            <div className="mt-3 grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex aspect-square items-center justify-center rounded-sm bg-plum-10"
                >
                  <span className="text-[length:var(--font-size-caption)] text-plum-50">
                    {i}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Info (sticky) */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-24 lg:col-span-5 lg:self-start">
            {/* Badge */}
            {product.badge && (
              <span className="self-start rounded-sm bg-deep-plum px-2.5 py-1 text-[length:var(--font-size-caption)] font-[30] text-neutral-white">
                {product.badge}
              </span>
            )}

            {/* Name & price */}
            <div className="flex flex-col gap-2">
              <h1 className="font-heading text-[length:var(--font-size-h1)] leading-snug font-[40] text-foreground">
                {product.name}
              </h1>
              <span className="font-sans text-[length:var(--font-size-h3)] font-[30] text-muted-foreground">
                {formattedPrice}
              </span>
            </div>

            {/* Description */}
            <p className="text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            {/* Variant selector placeholder */}
            <div className="flex flex-col gap-2">
              <span className="text-[length:var(--font-size-body-sm)] font-[30] text-muted-foreground">
                Velikost
              </span>
              <div className="flex gap-2">
                {["S", "M", "L"].map((size, i) => (
                  <div
                    key={size}
                    className={`flex h-10 w-14 items-center justify-center rounded-sm border text-[length:var(--font-size-body-sm)] font-[30] transition-colors ${
                      i === 1
                        ? "border-deep-plum bg-deep-plum text-neutral-white"
                        : "border-border text-muted-foreground hover:border-deep-plum-80 hover:text-foreground"
                    }`}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <ProductAddToCart
              productId={String(product.id)}
              slug={product.slug}
              name={product.name}
              price={product.price}
              image={product.image ?? "/category-kytice.jpg"}
              category={product.category as "smutecni" | "svatebni" | "kytice" | "firemni"}
            />

            {/* Funeral quick order */}
            {isFuneral && <QuickOrderForm />}
          </div>
        </div>

        {/* Accordion — below fold */}
        <div className="mt-16 max-w-[var(--max-width-narrow)]">
          <Accordion type="single" collapsible>
            <AccordionItem value="popis">
              <AccordionTrigger>Popis</AccordionTrigger>
              <AccordionContent>
                <p>{product.description}</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="slozeni">
              <AccordionTrigger>Složení kytice</AccordionTrigger>
              <AccordionContent>
                <p>{product.composition}</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="dodani">
              <AccordionTrigger>Dodání</AccordionTrigger>
              <AccordionContent>
                <p>{product.delivery}</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="pece">
              <AccordionTrigger>Péče o květiny</AccordionTrigger>
              <AccordionContent>
                <p>{product.care}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="border-t border-border py-[var(--spacing-section-y)]">
          <div className="mx-auto max-w-[var(--max-width-site)] px-[var(--spacing-section-x)]">
            <SectionHeading
              heading="Mohlo by se vám líbit"
              alignment="center"
              className="mb-12"
            />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard
                  key={p.id}
                  title={p.name}
                  price={p.price}
                  badge={p.badge}
                  slug={p.slug}
                  category={p.category}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
