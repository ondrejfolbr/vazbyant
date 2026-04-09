import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "O nás",
  description:
    "Vazárna květin je součástí pohřební služby PEGAS. Smuteční a svatební vazby — ručně, čerstvé, s ohledem na příležitost.",
}

export default function ONasPage() {
  return (
    <main>
      {/* 1. HERO */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1920&q=80"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% to-neutral-black/60" />
        <div className="relative z-10 mx-auto w-full max-w-[var(--max-width-site)] px-[var(--spacing-section-x)] pb-[var(--spacing-section-y)]">
          <h1 className="hero-stagger hero-stagger-1 max-w-2xl font-heading text-[length:var(--font-size-display)] leading-snug font-[40] text-neutral-white">
            Každá vazba nese něco, co slova nedokážou.
          </h1>
        </div>
      </section>

      {/* 2. KDO JSME */}
      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto grid max-w-[var(--max-width-content)] grid-cols-1 items-center gap-12 px-[var(--spacing-section-x)] lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <span className="text-[length:var(--font-size-overline)] font-[40] uppercase tracking-widest text-plum-50">
              Kdo jsme
            </span>
            <h2 className="font-heading text-[length:var(--font-size-h1)] leading-snug font-[40] text-foreground">
              Floristé, kteří myslí jako průvodci okamžikem.
            </h2>
            <div className="flex flex-col gap-4 text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
              <p>
                Vazárna květin je součástí pohřební služby PEGAS. Vznikla proto,
                že květ není jen dekorace — je to gesto. Tichý, ale viditelný.
                V momentech, kdy se hledají slova, mluví za nás.
              </p>
              <p>
                Pracujeme jako floristé, ale myslíme jako průvodci okamžikem.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80"
              alt="Floristka při práci"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* 3. CO DĚLÁME */}
      <section className="bg-deep-plum-10 py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-section-x)]">
          <span className="text-[length:var(--font-size-overline)] font-[40] uppercase tracking-widest text-plum-50">
            Co děláme
          </span>

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Smuteční */}
            <div className="flex flex-col gap-6">
              <div className="relative aspect-[3/2] overflow-hidden rounded-sm">
                <Image
                  src="https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=800&q=80"
                  alt="Smuteční vazba"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <h3 className="font-heading text-[length:var(--font-size-h2)] leading-snug font-[40] text-foreground">
                Smuteční vazby
              </h3>
              <p className="text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
                Věnce, kytice a výzdoba pro poslední rozloučení. Připravíme je
                tak, aby odpovídaly člověku, kterého jste znali — ne katalogu.
                Spolupracujeme přímo s pohřební službou PEGAS, takže vše
                proběhne bez zbytečných kroků a bez dalšího zatížení pro vás.
              </p>
            </div>

            {/* Svatební */}
            <div className="flex flex-col gap-6">
              <div className="relative aspect-[3/2] overflow-hidden rounded-sm">
                <Image
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80"
                  alt="Svatební kytice"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <h3 className="font-heading text-[length:var(--font-size-h2)] leading-snug font-[40] text-foreground">
                Svatební vazby
              </h3>
              <p className="text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
                Buketky, výzdoba obřadu, dekorace stolu. Pracujeme s
                přirozenými materiály a posloucháme spíš náladu než trendové
                palety. Výsledek je váš — ne náš.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. JAK PRACUJEME */}
      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto grid max-w-[var(--max-width-content)] grid-cols-1 items-center gap-12 px-[var(--spacing-section-x)] lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm lg:order-2">
            <Image
              src="https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800&q=80"
              alt="Detail ruční práce"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="flex flex-col gap-6 lg:order-1">
            <span className="text-[length:var(--font-size-overline)] font-[40] uppercase tracking-widest text-plum-50">
              Jak pracujeme
            </span>
            <h2 className="font-heading text-[length:var(--font-size-h1)] leading-snug font-[40] text-foreground">
              Začneme otázkou, ne ceníkem.
            </h2>
            <div className="flex flex-col gap-4 text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
              <p>
                Nepracujeme ve velkém. Každá zakázka dostane čas a pozornost.
                Nic nevyrábíme na sklad — vazby vznikají čerstvé, ručně, s
                ohledem na příležitost.
              </p>
              <p>
                Pokud nevíte přesně co chcete, nevadí. Začneme otázkou, ne
                ceníkem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROPOJENÍ S PEGAS */}
      <section className="border-y border-border bg-deep-plum-10 py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-narrow)] px-[var(--spacing-section-x)] text-center">
          <span className="text-[length:var(--font-size-overline)] font-[40] uppercase tracking-widest text-plum-50">
            Součást ekosystému PEGAS
          </span>
          <p className="mt-6 text-[length:var(--font-size-body-lg)] leading-relaxed text-muted-foreground">
            Jako součást PEGASE sdílíme stejný přístup: tiché, pevné, bez
            zbytečného tlaku. Věříme, že kvalita se pozná — a nemusí se
            vysvětlovat.
          </p>
          <div className="mt-8">
            <Button asChild variant="outline" size="md">
              <a
                href="https://pohrebpegas.cz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Více o pohřební službě PEGAS
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 6. DVOJITÉ CTA */}
      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto grid max-w-[var(--max-width-content)] grid-cols-1 gap-8 px-[var(--spacing-section-x)] md:grid-cols-2">
          {/* Urgentní */}
          <div className="flex flex-col gap-5 border border-border p-8 lg:p-10">
            <h2 className="font-heading text-[length:var(--font-size-h2)] leading-snug font-[40] text-foreground">
              Potřebujete vazbu na rozloučení?
            </h2>
            <p className="text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
              Ozvěte se — postaráme se o vše rychle a bez komplikací.
            </p>
            <div className="mt-auto pt-4">
              <Button asChild size="lg" className="w-full">
                <Link href="/kontakt/">Kontaktujte nás</Link>
              </Button>
            </div>
          </div>

          {/* Plánovací */}
          <div className="flex flex-col gap-5 border border-border p-8 lg:p-10">
            <h2 className="font-heading text-[length:var(--font-size-h2)] leading-snug font-[40] text-foreground">
              Plánujete svatbu?
            </h2>
            <p className="text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
              Rádi se s vámi potkáme a promluvíme o vašich představách.
            </p>
            <div className="mt-auto pt-4">
              <Button asChild variant="outline" size="lg" className="w-full">
                <Link href="/kontakt/">Domluvit konzultaci</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
