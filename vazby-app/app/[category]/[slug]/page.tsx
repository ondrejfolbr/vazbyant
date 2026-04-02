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
import { QuantitySelector } from "@/components/quantity-selector"
import { QuickOrderForm } from "@/components/quick-order-form"
import { Hero } from "@/components/hero"
import {
  products,
  subcategories,
  getProductBySlug,
  getProductsBySubcategory,
  getRelatedProducts,
} from "@/lib/products.data"

interface PageProps {
  params: Promise<{ category: string; slug: string }>
}

export function generateStaticParams() {
  const productParams = products.map((p) => ({
    category: p.category,
    slug: p.slug,
  }))

  const subcategoryParams = Object.entries(subcategories).map(([key]) => {
    const [category, slug] = key.split("/")
    return { category, slug }
  })

  return [...productParams, ...subcategoryParams]
}

export default async function Page({ params }: PageProps) {
  const { category, slug } = await params

  // Check if this is a subcategory page
  const subcategoryKey = `${category}/${slug}`
  const subcategoryMeta = subcategories[subcategoryKey]

  if (subcategoryMeta) {
    return <SubcategoryPage category={category} slug={slug} />
  }

  // Otherwise treat as product detail page
  const product = getProductBySlug(category, slug)

  if (!product) {
    notFound()
  }

  return <ProductDetailPage category={category} slug={slug} />
}

function SubcategoryPage({
  category,
  slug,
}: {
  category: string
  slug: string
}) {
  const subcategoryKey = `${category}/${slug}`
  const meta = subcategories[subcategoryKey]!
  const subcategoryProducts = getProductsBySubcategory(category, slug)

  return (
    <main>
      <Hero heading={meta.label} subheading={meta.description} variant="sub" />

      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-site)] px-[var(--spacing-section-x)]">
          <div className="mb-8 flex items-end justify-between">
            <span className="text-[length:var(--font-size-body-sm)] text-muted-foreground">
              {subcategoryProducts.length} produktů
            </span>
          </div>

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
            <div className="flex flex-col items-center gap-4 py-20">
              <p className="text-[length:var(--font-size-body)] text-muted-foreground">
                V této kategorii zatím nejsou produkty.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function ProductDetailPage({
  category,
  slug,
}: {
  category: string
  slug: string
}) {
  const product = getProductBySlug(category, slug)!
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
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="flex aspect-[4/5] items-center justify-center rounded-sm bg-plum-10">
              <span className="text-[length:var(--font-size-body)] text-plum-50">
                Hlavní foto produktu
              </span>
            </div>
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

          <div className="flex flex-col gap-6 lg:sticky lg:top-24 lg:col-span-5 lg:self-start">
            {product.badge && (
              <span className="self-start rounded-sm bg-deep-plum px-2.5 py-1 text-[length:var(--font-size-caption)] font-[30] text-neutral-white">
                {product.badge}
              </span>
            )}

            <div className="flex flex-col gap-2">
              <h1 className="font-heading text-[length:var(--font-size-h1)] leading-snug font-[40] text-foreground">
                {product.name}
              </h1>
              <span className="font-mono text-[length:var(--font-size-h3)] font-[30] text-muted-foreground">
                {formattedPrice}
              </span>
            </div>

            <p className="text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
              {product.description}
            </p>

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

            <div className="flex flex-col gap-2">
              <span className="text-[length:var(--font-size-body-sm)] font-[30] text-muted-foreground">
                Počet kusů
              </span>
              <QuantitySelector />
            </div>

            <Button size="lg" className="w-full">
              Přidat do košíku
            </Button>

            {isFuneral && <QuickOrderForm />}
          </div>
        </div>

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
