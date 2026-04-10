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
        ctaHref="/smutecni/"
        backgroundImage="/hero-home-2.jpg"
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
          <div className="flex flex-col items-center gap-8 text-center">
            <Image
              src="/mamut-homepage.png"
              alt="Mamut — maskot Vazby Květin"
              width={1133}
              height={1620}
              className="h-auto w-full max-w-[360px] object-contain"
              sizes="(min-width: 1024px) 35vw, 100vw"
            />
            <p className="max-w-xs text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
              Mamut je pam{"\u011B"}{"\u0165"}. To, co z{"\u016F"}st{"\u00E1"}v{"\u00E1"}.
              <br />
              Stejn{"\u011B"} jako vzpom{"\u00ED"}nky na ty, kte{"\u0159"}{"\u00ED"} tu byli s n{"\u00E1"}mi.
              <br />
              Stejn{"\u011B"} jako vazby mezi lidmi, kter{"\u00E9"} nekon{"\u010D"}{"\u00ED"}.
            </p>
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
