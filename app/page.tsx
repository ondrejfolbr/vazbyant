import Image from "next/image"
import Link from "next/link"

import { Hero } from "@/components/hero"
import { CategoryCard } from "@/components/category-card"
import { ProductCard } from "@/components/product-card"
import { SectionHeading } from "@/components/ui/section-heading"
import { HighlightSlider } from "@/components/highlight-slider"
import { Button } from "@/components/ui/button"

import { products } from "@/lib/products.data"

export default function Page() {
  const featured = products.slice(0, 4)

  return (
    <main>
      {/* Sekce 1: Hero */}
      <Hero
        heading="Vazby pro život. Vazby pro loučení."
        subheading="Navrhujeme květiny pro chvíle, na kterých záleží."
        ctaText="Prohlédnout nabídku"
        ctaHref="/kytice/"
        backgroundImages={["/hero-home.mp4", "/hero-home-2.jpg"]}
      />

      {/* Sekce 2: Vstupní rozcestník */}
      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto grid max-w-[var(--max-width-site)] grid-cols-1 gap-6 px-[var(--spacing-section-x)] md:grid-cols-3">
          <CategoryCard
            title="Smuteční květiny"
            subtitle="S respektem a pochopením"
            href="/smutecni/"
            image="/category-kytice.jpg"
          />
          <CategoryCard
            title="Květinové sety"
            subtitle="Kompletní květinový servis"
            href="/smutecni/"
            image="/category-sety.jpg"
          />
          <CategoryCard
            title="Věnce"
            subtitle="Důstojná vzpomínka"
            href="/smutecni/vence/"
            image="/category-vence-fialovy.jpg"
          />
        </div>
      </section>

      {/* Sekce 3: Vybrané produkty */}
      <section className="py-[var(--spacing-section-y)]">
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
            <Button asChild size="md">
              <Link href="/kytice/">Zobrazit vše</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sekce 4: Brand story */}
      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto grid max-w-[var(--max-width-site)] grid-cols-1 items-center gap-12 px-[var(--spacing-section-x)] lg:grid-cols-12">
          <div className="flex flex-col gap-5 lg:col-span-5">
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
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm lg:col-span-7">
            <Image
              src="/mamut-ctverec.png"
              alt="Mamut — maskot Vazby Květin"
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Sekce 6: Highlight slider */}
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
