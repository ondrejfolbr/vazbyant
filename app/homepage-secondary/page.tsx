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
  { title: "Smuteční\na pietní květiny", href: "/smutecni/", image: "/category-kytice.jpg" },
  { title: "Další služby", href: "/svatebni/", image: "/category-sety.jpg" },
  { title: "Uvážeme na\npřání", href: "/kytice/", image: "/category-vence-fialovy.jpg" },
]

const bentoColumns = [
  {
    title: "Součást ekosystému Pegas",
    body: "Vazby Květin jsou součástí pohřební služby PEGAS — firmy, která již více než 30 let pomáhá rodinám v nejtěžších chvílích. Díky této vazbě rozumíme kontextu loučení a dokážeme nabídnout květiny s citem, respektem a pochopením.",
    imageLabel: "Foto Pegas",
    imageSrc: "/about-photo.jpg",
    imageFirst: false,
  },
  {
    title: "Naše vazárna",
    body: "Za každou kyticí stojí ruce našich floristek — lidí, kteří svému řemeslu rozumí a dávají do něj srdce. Ve vazárně vznikají květinové vazby na míru, s důrazem na detail, sezónnost a osobní příběh každé objednávky.",
    imageLabel: "Foto vazárna",
    imageSrc: "/category-vence-jaro.jpg",
    imageFirst: true,
  },
  {
    title: "Květiny, které vypráví",
    body: "Každá vazba má svůj příběh. Od tradičních věnců po neotřelé tvary — letadla, hudební nástroje nebo půllitr piva. Naše floristky dokážou do květin přenést osobnost a vzpomínku. Jeden věnec vyžaduje přes 20 kg zeleně a dvě hodiny ruční práce.",
    imageLabel: "Foto floristika",
    imageSrc: "/category-vence.jpg",
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
      <section className="pt-[calc(var(--spacing-section-y)*0.8-50px)] pb-[calc(var(--spacing-section-y)*0.8)]">
        <div className="mx-auto max-w-[var(--max-width-site)] px-[var(--spacing-section-x)]">
          <SectionHeading
            heading="Vybrané pro vás"
            alignment="center"
            className="mb-12"
          />

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
            <Button asChild variant="secondary" size="md">
              <Link href="/kytice/">Zobrazit vše</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section 3: Bento Feature Grid */}
      <section className="py-[calc(var(--spacing-section-y)*0.8)]">
        <div className="mx-auto max-w-[var(--max-width-site)] px-[var(--spacing-section-x)]">
          <BentoGrid columns={bentoColumns} />
        </div>
      </section>

      {/* Section 4: Brand Story */}
      <section className="py-[calc(var(--spacing-section-y)*0.7)]">
        <div className="mx-auto grid max-w-[70%] grid-cols-1 items-center gap-6 px-[var(--spacing-section-x)] lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <SectionHeading
              overline="O nás"
              heading="Květinářství, které rozumí chvílím, kdy na tom záleží."
              body="Známe prostředí loučení a víme, jak důležité je umět vyjádřit pocity ve chvílích, kdy na tom záleží. Budujeme květinářství, které těmto situacím rozumí. Neprodáváme jen květiny — nabízíme způsob, jak něco říct, když slova nestačí."
            />
            <div>
              <Button asChild size="md">
                <Link href="/o-nas/">Více o nás</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/mamut-homepage.png"
              alt="Mamut — maskot Vazby Květin"
              width={1133}
              height={1620}
              className="h-auto w-full max-w-[360px] object-contain"
              sizes="(min-width: 1024px) 35vw, 100vw"
            />
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
