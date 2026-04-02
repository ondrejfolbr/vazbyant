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
import {
  products,
  getProductBySlug,
  getRelatedProducts,
} from "@/lib/products.data"

interface ProductPageProps {
  params: Promise<{ category: string; slug: string }>
}

export function generateStaticParams() {
  return products.map((p) => ({
    category: p.category,
    slug: p.slug,
  }))
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { category, slug } = await params
  const product = getProductBySlug(category, slug)

  if (!product) {
    notFound()
  }

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
              <span className="self-start rounded-sm bg-deep-plum px-2.5 py-1 text-[length:var(--font-size-caption)] font-medium text-neutral-white">
                {product.badge}
              </span>
            )}

            {/* Name & price */}
            <div className="flex flex-col gap-2">
              <h1 className="font-heading text-[length:var(--font-size-h1)] leading-snug font-[50] text-foreground">
                {product.name}
              </h1>
              <span className="font-mono text-[length:var(--font-size-h3)] font-semibold text-muted-foreground">
                {formattedPrice}
              </span>
            </div>

            {/* Description */}
            <p className="text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            {/* Variant selector placeholder */}
            <div className="flex flex-col gap-2">
              <span className="text-[length:var(--font-size-body-sm)] font-medium text-muted-foreground">
                Velikost
              </span>
              <div className="flex gap-2">
                {["S", "M", "L"].map((size, i) => (
                  <div
                    key={size}
                    className={`flex h-10 w-14 items-center justify-center rounded-sm border text-[length:var(--font-size-body-sm)] font-medium transition-colors ${
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

            {/* Quantity */}
            <div className="flex flex-col gap-2">
              <span className="text-[length:var(--font-size-body-sm)] font-medium text-muted-foreground">
                Počet kusů
              </span>
              <QuantitySelector />
            </div>

            {/* Add to cart */}
            <Button size="lg" className="w-full">
              Přidat do košíku
            </Button>

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
