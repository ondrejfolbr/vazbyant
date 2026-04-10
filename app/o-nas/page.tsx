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
    <main id="main-content">
      {/* 1. HERO */}
      <section className="relative flex min-h-[100vh] items-end overflow-hidden bg-deep-plum">
        <Image
          src="/o-nas-hero.jpg"
          alt="Náš tým v květinářství"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-black/20 from-30% to-neutral-black/75" />
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
            <h2 className="font-heading text-[length:var(--font-size-h1)] leading-snug font-[40] text-foreground">
              Specializujeme se na květiny pro významné životní okamžiky.
            </h2>
            <div className="flex flex-col gap-4 text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
              <p>
                Pomáháme vám zvolit a vytvořit květiny, které odpovídají
                situaci — ať jde o radostnou událost nebo tiché rozloučení.
                Dbáme na detail, prostředí i význam, který mají nést.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src="/zivot/zivot-1.jpg"
              alt="Floristka při práci"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* 3. CO DĚLÁME */}
      <section className="bg-white py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-section-x)]">
          <h2 className="mb-10 font-heading text-[length:var(--font-size-h1)] leading-snug font-[40] text-foreground">
            Každá příležitost si zaslouží svůj květ.
          </h2>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Smuteční a pietní */}
            <div className="flex flex-col gap-4">
              <div className="relative aspect-square overflow-hidden rounded-sm">
                <Image
                  src="/smutecni-kytice.jpg"
                  alt="Smuteční vazba"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <h3 className="font-heading text-[length:var(--font-size-h3)] leading-snug font-[40] text-foreground">
                Smuteční a pietní
              </h3>
              <p className="text-[length:var(--font-size-body-sm)] leading-relaxed text-muted-foreground">
                Věnce, kytice na rakev, výzdoba obřadní síně. Připravíme vše
                tak, aby odpovídalo člověku, kterého jste znali. Ve spolupráci
                s pohřební službou PEGAS.
              </p>
            </div>

            {/* Svatební */}
            <div className="flex flex-col gap-4">
              <div className="relative aspect-square overflow-hidden rounded-sm">
                <Image
                  src="/svatebni-kytice.jpg"
                  alt="Svatební kytice"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <h3 className="font-heading text-[length:var(--font-size-h3)] leading-snug font-[40] text-foreground">
                Svatební
              </h3>
              <p className="text-[length:var(--font-size-body-sm)] leading-relaxed text-muted-foreground">
                Buketky, výzdoba obřadu, dekorace stolu. Pracujeme s
                přirozenými materiály a posloucháme spíš náladu než trendy.
              </p>
            </div>

            {/* Firemní */}
            <div className="flex flex-col gap-4">
              <div className="relative aspect-square overflow-hidden rounded-sm">
                <Image
                  src="/firemni-kvetiny.jpg"
                  alt="Firemní květiny"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <h3 className="font-heading text-[length:var(--font-size-h3)] leading-snug font-[40] text-foreground">
                Firemní
              </h3>
              <p className="text-[length:var(--font-size-body-sm)] leading-relaxed text-muted-foreground">
                Pravidelné dodávky květin do kanceláří, recepcí a
                reprezentativních prostor. Domluvíme frekvenci i styl.
              </p>
            </div>

            {/* Každodenní */}
            <div className="flex flex-col gap-4">
              <div className="relative aspect-square overflow-hidden rounded-sm">
                <Image
                  src="/kytice-radost.jpg"
                  alt="Kytice pro radost"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <h3 className="font-heading text-[length:var(--font-size-h3)] leading-snug font-[40] text-foreground">
                Kytice pro radost
              </h3>
              <p className="text-[length:var(--font-size-body-sm)] leading-relaxed text-muted-foreground">
                Narozeniny, výročí, poděkování, nebo jen tak. Čerstvé kytice
                pro každý den a každou příležitost.
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
              src="/zivot/zivot-4.jpg"
              alt="Floristka při práci ve vazárně"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="flex flex-col gap-6 lg:order-1">
            <h2 className="font-heading text-[length:var(--font-size-h1)] leading-snug font-[40] text-foreground">
              Začneme otázkou.
            </h2>
            <div className="flex flex-col gap-4 text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
              <p>
                Nepracujeme ve velkém. Každá zakázka dostane čas
                <br />
                a pozornost. Nic nevyrábíme na sklad — vazby vznikají
                čerstvé, ručně, s ohledem na příležitost.
              </p>
              <p>
                Pokud nevíte přesně co chcete, nevadí. Začneme otázkou,
                <br />
                ne ceníkem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ZE ŽIVOTA VAZÁRNY */}
      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-section-x)]">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:gap-4">
            {[
              { src: "/zivot/zivot-2.jpg", alt: "Detail květinové vazby" },
              { src: "/zivot/zivot-3.jpg", alt: "Příprava aranžmá" },
              { src: "/zivot/zivot-4.jpg", alt: "Floristka při práci" },
              { src: "/zivot/zivot-5.jpg", alt: "Výběr květin" },
              { src: "/zivot/zivot-6.jpg", alt: "Dokončování vazby" },
              { src: "/zivot/zivot-7.jpg", alt: "Finální aranžmá" },
              { src: "/zivot/zivot-8.jpg", alt: "Čerstvé květiny" },
              { src: "/zivot/zivot-9.jpg", alt: "Naše vazárna" },
            ].map((photo, i) => (
              <div
                key={photo.src}
                className={`relative overflow-hidden rounded-sm ${
                  i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-[4/3]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes={i === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 50vw"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAMUT */}
      <section className="relative overflow-hidden bg-deep-plum py-[var(--spacing-section-y)]">
        <Image
          src="/mamut-bg.png"
          alt=""
          fill
          className="object-contain object-right opacity-90"
          sizes="100vw"
        />
        <div className="relative z-10 mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-section-x)]">
          <div className="flex max-w-xl flex-col gap-6">
            <h2 className="font-heading text-[length:var(--font-size-h1)] leading-snug font-[40] text-neutral-white">
              Mamut je paměť.
              <br />
              To, co zůstává.
            </h2>
            <div className="flex flex-col gap-4 text-[length:var(--font-size-body-lg)] leading-relaxed text-neutral-white/80">
              <p>
                Stejně jako vzpomínky na ty,
                <br />
                kteří tu byli s námi.
              </p>
              <p>
                Stejně jako vazby mezi lidmi,
                <br />
                které nekončí.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROPOJENÍ S PEGAS */}
      <section className="py-[120px]">
        <div className="mx-auto max-w-[var(--max-width-narrow)] px-[var(--spacing-section-x)]">
          <p className="text-[length:var(--font-size-body-lg)] leading-relaxed text-muted-foreground">
            Jsme součástí pohřební služby PEGAS, a sdílíme stejný přístup — klidný,
            <br />
            jistý a bez zbytečného tlaku. Věříme, že kvalita je poznat.
            <br />
            A není potřeba ji vysvětlovat.
          </p>
          <div className="mt-8">
            <Button asChild size="md">
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
              Chcete květinu na přání?
            </h2>
            <p className="text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
              Řekněte nám, co máte na srdci — připravíme vazbu přesně podle
              vašich představ.
            </p>
            <div className="mt-auto pt-4">
              <Button asChild variant="secondary" size="lg" className="w-full">
                <Link href="/kontakt/">Napište nám</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
