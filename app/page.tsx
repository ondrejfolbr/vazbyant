import Image from "next/image"
import Link from "next/link"

import { Hero } from "@/components/hero"
import { MammothReveal } from "@/components/mammoth-reveal"
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
        heading={<>Vazby pro život.<br />Vazby pro loučení.</>}
        subheading="Navrhujeme květiny pro chvíle, na kterých záleží."
        ctaText="Prohlédnout nabídku"
        ctaHref="/smutecni/"
        backgroundImages={["/hero-home-2.jpg", "/hero-onas.png", "/hero-home.jpg", "/hero-lucni.png", "/zivot/zivot-4.jpg", "/hero-venec.jpg", "/hero-smutecni.jpg"]}
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

      {/* Sekce 4: Brand story with mammoth reveal */}
      <MammothReveal />

      {/* Sekce 6: Highlight slider */}
      <HighlightSlider
        slides={[
          {
            heading: "Letní kolekce 2026",
            body: "Čerstvé sezónní kytice z lokálních květin. Každý týden nová nabídka podle toho, co právě kvete.",
            ctaText: "Zobrazit nabídku",
            ctaHref: "/kytice/sezonni/",
            image: "/category-sety.jpg",
          },
          {
            heading: "Smuteční věnce s osobním věnováním",
            body: "Každý věnec vážeme ručně a na míru. Přidáme stuhu s textem, který za vás řekne to důležité.",
            ctaText: "Prohlédnout věnce",
            ctaHref: "/smutecni/vence/",
            image: "/category-vence-fialovy.jpg",
          },
          {
            heading: "Květinové sety pro kompletní rozloučení",
            body: "Kytice na rakev, aranžmá do stojanů a pietní dekorace — vše sladěné a připravené na klíč.",
            ctaText: "Zjistit více",
            ctaHref: "/smutecni/",
            image: "/about-photo.jpg",
          },
        ]}
      />
    </main>
  )
}
