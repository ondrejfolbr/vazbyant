import Image from "next/image"
import Link from "next/link"

import { Hero } from "@/components/hero"
import { CategoryCard } from "@/components/category-card"
import { ProductCard } from "@/components/product-card"
import { SectionHeading } from "@/components/ui/section-heading"
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
        backgroundImages={["/hero-home.png", "/hero-home-2.png"]}
      />

      {/* Sekce 2: Vstupní rozcestník */}
      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto grid max-w-[var(--max-width-site)] grid-cols-1 gap-6 px-[var(--spacing-section-x)] md:grid-cols-3">
          <CategoryCard
            title="Kytice na rakev"
            subtitle="S respektem a pochopením"
            href="/smutecni/rakev/"
            image="/category-kytice.png"
          />
          <CategoryCard
            title="Květinové sety"
            subtitle="Kompletní květinový servis"
            href="/smutecni/"
            image="/category-sety.png"
          />
          <CategoryCard
            title="Věnce"
            subtitle="Důstojná vzpomínka"
            href="/smutecni/vence/"
            image="/category-vence-fialovy.png"
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
            <Button asChild variant="outline" size="md">
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
              <Button asChild variant="outline" size="md">
                <Link href="/o-nas/">Více o nás</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-neutral-100 lg:col-span-7">
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

      {/* Sekce 6: Sezónní highlight */}
      <section className="relative flex min-h-[50vh] items-center overflow-hidden">
        <Image
          src="/category-sety.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-neutral-black/50" />
        <div className="relative z-10 mx-auto w-full max-w-[var(--max-width-site)] px-[var(--spacing-section-x)] py-[var(--spacing-section-y)]">
          <div className="flex max-w-lg flex-col gap-4">
            <span className="text-[length:var(--font-size-overline)] font-[30] uppercase tracking-widest text-neutral-white/70">
              Sezónní nabídka
            </span>
            <h2 className="font-heading text-[length:var(--font-size-h2)] leading-snug font-[40] text-neutral-white">
              Léto 2026
            </h2>
            <p className="text-[length:var(--font-size-body)] leading-relaxed text-neutral-white">
              Čerstvé letní kytice a sety pro každou příležitost.
            </p>
            <div className="mt-2">
              <Button
                asChild
                variant="outline"
                size="md"
                className="border-neutral-white/40 text-neutral-white hover:border-plum-30 hover:bg-neutral-white/10 hover:text-neutral-white"
              >
                <Link href="/kytice/sezonni/">Zobrazit nabídku</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
