import Image from "next/image"
import Link from "next/link"

import { HeroSplit } from "@/components/hero-split"
import { ProductCard } from "@/components/product-card"
import { BentoGrid } from "@/components/bento-grid"
import { HighlightSlider } from "@/components/highlight-slider"
import { SectionHeading } from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"

import { products } from "@/lib/products.data"

const heroCategories = [
  { title: "Smuteční\na pietní květiny", href: "/smutecni/" },
  { title: "Další služby", href: "/svatebni/" },
  { title: "Uvážeme na\npřání", href: "/kytice/" },
]

const bentoColumns = [
  {
    title: "Součást ekosystému Pegas",
    body: "Vazby Květin jsou součástí pohřební služby PEGAS — firmy, která již více než 30 let pomáhá rodinám v nejtěžších chvílích. Díky této vazbě rozumíme kontextu loučení a dokážeme nabídnout květiny s citem, respektem a pochopením.",
    imageLabel: "Foto Pegas",
    imageFirst: false,
  },
  {
    title: "Naše vazárna",
    body: "Za každou kyticí stojí ruce našich floristek — lidí, kteří svému řemeslu rozumí a dávají do něj srdce. Ve vazárně vznikají květinové vazby na míru, s důrazem na detail, sezónnost a osobní příběh každé objednávky.",
    imageLabel: "Foto vazárna",
    imageFirst: true,
  },
  {
    title: "Květiny, které vypráví",
    body: "Každá vazba má svůj příběh. Od tradičních věnců po neotřelé tvary — letadla, hudební nástroje nebo půllitr piva. Naše floristky dokážou do květin přenést osobnost a vzpomínku. Jeden věnec vyžaduje přes 20 kg zeleně a dvě hodiny ruční práce.",
    imageLabel: "Foto floristika",
    imageFirst: false,
  },
]

export default function HomepageSecondaryPage() {
  const featured = products.slice(0, 4)

  return (
    <main>
      {/* Section 1: Split Hero */}
      <HeroSplit
        headingLine1="Vazby pro život."
        headingLine2="Vazby pro loučení."
        subheading="Navrhujeme květiny pro chvíle, na kterých záleží."
        categories={heroCategories}
      />

      {/* Section 2: Featured Products */}
      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-site)] px-[var(--spacing-section-x)]">
          <div className="mb-10 flex items-start justify-between">
            <SectionHeading
              heading="Vybrané pro vás"
              alignment="center"
              className="flex-1"
            />

            {/* Grid/List toggle (visual only) */}
            <div className="flex gap-1">
              <button
                type="button"
                aria-label="Zobrazení mřížka"
                className="flex size-9 items-center justify-center bg-neutral-800 text-neutral-white"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect x="1" y="1" width="6" height="6" fill="currentColor" />
                  <rect
                    x="9"
                    y="1"
                    width="6"
                    height="6"
                    fill="currentColor"
                  />
                  <rect
                    x="1"
                    y="9"
                    width="6"
                    height="6"
                    fill="currentColor"
                  />
                  <rect
                    x="9"
                    y="9"
                    width="6"
                    height="6"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Zobrazení seznam"
                className="flex size-9 items-center justify-center bg-neutral-200 text-neutral-600"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="1"
                    y="2"
                    width="14"
                    height="3"
                    fill="currentColor"
                  />
                  <rect
                    x="1"
                    y="7"
                    width="14"
                    height="3"
                    fill="currentColor"
                  />
                  <rect
                    x="1"
                    y="12"
                    width="14"
                    height="3"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
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

          <div className="mt-10 flex justify-center">
            <Button asChild variant="outline" size="md">
              <Link href="/kytice/">Zobrazit vše</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 3: Bento Feature Grid */}
      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-site)] px-[var(--spacing-section-x)]">
          <BentoGrid columns={bentoColumns} />
        </div>
      </section>

      {/* Section 4: Brand Story Card */}
      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-narrow)] px-[var(--spacing-section-x)]">
          <div className="grid grid-cols-1 items-center gap-8 border border-neutral-200 p-8 md:grid-cols-2 md:p-12">
            <div className="flex flex-col gap-5">
              <SectionHeading
                overline="O nás"
                heading="Květinářství, které rozumí chvílím, kdy na tom záleží."
                body="Známe prostředí loučení a víme, jak důležité je umět vyjádřit pocity ve chvílích, kdy na tom záleží. Budujeme květinářství, které těmto situacím rozumí. Neprodáváme jen květiny — nabízíme způsob, jak něco říct, když slova nestačí."
              />
              <div>
                <Button asChild variant="outline" size="md">
                  <Link href="/o-nas/">Více o nás</Link>
                </Button>
              </div>
            </div>

            {/* Mammoth illustration */}
            <div className="flex items-center justify-center">
              <Image
                src="/mamut.png"
                alt=""
                width={400}
                height={480}
                className="h-auto w-full max-w-[240px] object-contain opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Highlight Slider (reusing existing component) */}
      <HighlightSlider
        slides={[
          {
            heading: "Letní kolekce 2026",
            ctaText: "Zobrazit nabídku",
            ctaHref: "/kytice/sezonni/",
            image: "/category-sety.jpg",
          },
          {
            heading: "Smuteční věnce s osobním věnováním",
            ctaText: "Prohlédnout věnce",
            ctaHref: "/smutecni/vence/",
            image: "/category-vence-fialovy.jpg",
          },
          {
            heading: "Květinové sety pro kompletní rozloučení",
            ctaText: "Zjistit více",
            ctaHref: "/smutecni/",
            image: "/about-photo.jpg",
          },
        ]}
      />
    </main>
  )
}
