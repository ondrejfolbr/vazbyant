import type { Metadata } from "next"
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
import { CategoryFilters } from "@/components/category/CategoryFilters"
import { ProductActions } from "@/components/product/ProductActions"
import { ProductGallery } from "@/components/product-gallery"
import { Breadcrumb } from "@/components/ui/breadcrumb"
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

export async function generateMetadata({
  params,
}: SlugPageProps): Promise<Metadata> {
  const { category, slug } = await params

  const subcategoryMeta = getSubcategory(category, slug)
  if (subcategoryMeta) {
    return {
      title: subcategoryMeta.label,
      description: subcategoryMeta.description,
    }
  }

  const product = getProductBySlug(category, slug)
  if (!product) {
    return {}
  }

  const categoryMeta = categories[product.category]
  const categoryLabel = categoryMeta?.label ?? product.category

  return {
    title: product.name,
    description: `${product.name} — ${categoryLabel}. ${product.description}`,
  }
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
          <Breadcrumb
            items={[
              { label: categoryMeta.label, href: `/${category}/` },
              { label: subcategoryMeta.label },
            ]}
          />
          <SectionHeading
            heading={subcategoryMeta.label}
            body={subcategoryMeta.description}
          />
        </div>
      </section>

      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-site)] px-[var(--spacing-section-x)]">
          {subcategoryProducts.length > 0 ? (
            <CategoryFilters products={subcategoryProducts} />
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
        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left — Gallery */}
          <div className="lg:col-span-7">
            <ProductGallery
              images={product.images.length > 0 ? product.images : product.image ? [product.image] : []}
              alt={product.name}
            />
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

            {/* Size selector, add to cart, and quick order */}
            <ProductActions
              productId={String(product.id)}
              slug={product.slug}
              name={product.name}
              price={product.price}
              image={product.image ?? "/category-kytice.jpg"}
              category={product.category as "smutecni" | "svatebni" | "kytice" | "firemni"}
              isFuneral={isFuneral}
            />
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
                  image={p.image}
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
