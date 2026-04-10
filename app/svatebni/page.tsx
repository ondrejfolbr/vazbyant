import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Svatební květiny",
  description:
    "Svatební kytice, dekorace obřadu a doplňky — vše na míru vašemu dni. Domluvte si nezávaznou konzultaci.",
}

const SERVICES: Array<{
  title: string
  description: string
}> = [
  {
    title: "Svatební kytice",
    description:
      "Buketky pro nevěstu i družičky — romantické, přirozené, na míru. Pracujeme s čerstvými květinami a posloucháme spíš náladu než trendové palety.",
  },
  {
    title: "Dekorace obřadu",
    description:
      "Výzdoba uličky, oltáře, vstupní brány a stolů. Kompletní květinový servis od konzultace po instalaci a úklid.",
  },
  {
    title: "Doplňky",
    description:
      "Korsáže, věnečky, stuhy a vazy. Detaily, které sladí celek — vše v souladu s vaší kyticí a výzdobou.",
  },
]

const PROCESS_STEPS: Array<{
  number: string
  title: string
  description: string
}> = [
  {
    number: "01",
    title: "Konzultace",
    description:
      "Sejdeme se a promluvíme o vaší představě — barvy, styl, místo, rozpočet. Můžeme i online.",
  },
  {
    number: "02",
    title: "Návrh",
    description:
      "Připravíme návrh s doporučením květin a barevností. Ukážeme reference podobných realizací.",
  },
  {
    number: "03",
    title: "Realizace",
    description:
      "V den svatby vše připravíme, dovezeme a nainstalujeme. Po obřadu uklidíme. Vy se staráte jen o sebe.",
  },
]

const SERVICE_IMAGES: Record<string, string> = {
  "Svatební kytice": "/svatebni-kytice-detail.jpg",
  "Dekorace obřadu": "/svatebni-aranzma.jpg",
  Doplňky: "/svatebni-doplnky.jpg",
}

const GALLERY_IMAGES = [
  "/svatebni-nevesta.jpg",
  "/svatebni-kytice-detail.jpg",
  "/svatebni-doplnky.jpg",
  "/svatebni-aranzma.jpg",
  "/svatebni-darkova.jpg",
  "/svatebni-zlute.jpg",
]

export default function SvatebniPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden">
        <Image
          src="/svatebni-nevesta.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% to-neutral-black/60" />
        <div className="relative z-10 mx-auto w-full max-w-[var(--max-width-site)] px-[var(--spacing-section-x)] pb-[var(--spacing-section-y)]">
          <p className="hero-stagger hero-stagger-1 mb-4 text-[length:var(--font-size-body)] leading-relaxed text-neutral-white/80">
            Pro váš den
          </p>
          <h1 className="hero-stagger hero-stagger-2 max-w-2xl font-heading text-[length:var(--font-size-display)] leading-snug font-[40] text-neutral-white">
            Svatební květiny
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-narrow)] px-[var(--spacing-section-x)]">
          <h2 className="font-heading text-[length:var(--font-size-h1)] leading-snug font-[40] text-foreground">
            Květiny, které podtrhnou váš den.
          </h2>
          <p className="mt-6 text-[length:var(--font-size-body-lg)] leading-relaxed text-muted-foreground">
            Každá svatba je jiná a květiny by to měly odrážet. Nepracujeme ze
            šablon — začínáme rozhovorem o tom, co je pro vás důležité.
            Navrhneme a vyrobíme vše od kytice po výzdobu obřadu.
          </p>
        </div>
      </section>

      {/* CO NABÍZÍME */}
      <section className="bg-deep-plum-10 py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-section-x)]">
          <span className="text-[length:var(--font-size-overline)] font-[40] uppercase tracking-widest text-plum-50">
            Co nabízíme
          </span>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <div key={service.title} className="flex flex-col gap-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src={SERVICE_IMAGES[service.title] ?? ""}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                </div>
                <h3 className="font-heading text-[length:var(--font-size-h3)] font-[40] text-foreground">
                  {service.title}
                </h3>
                <p className="text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UKÁZKY REALIZACÍ */}
      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-section-x)]">
          <span className="text-[length:var(--font-size-overline)] font-[40] uppercase tracking-widest text-plum-50">
            Realizace
          </span>
          <h2 className="mt-4 font-heading text-[length:var(--font-size-h2)] leading-snug font-[40] text-foreground">
            Z našich svateb
          </h2>
          <p className="mt-4 text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
            Každá zakázka je originál. Tady je pár ukázek, jak to může
            vypadat.
          </p>

          {/* Gallery grid */}
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3">
            {GALLERY_IMAGES.map((img, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] overflow-hidden rounded-sm"
              >
                <Image
                  src={img}
                  alt={`Svatební realizace ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JAK TO PROBÍHÁ */}
      <section className="bg-deep-plum-10 py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-section-x)]">
          <span className="text-[length:var(--font-size-overline)] font-[40] uppercase tracking-widest text-plum-50">
            Jak to probíhá
          </span>
          <h2 className="mt-4 font-heading text-[length:var(--font-size-h2)] leading-snug font-[40] text-foreground">
            Od prvního setkání po váš den
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
            {PROCESS_STEPS.map((step) => (
              <div key={step.number} className="flex flex-col gap-3">
                <h3 className="font-heading text-[length:var(--font-size-h4)] font-[40] text-foreground">
                  {step.title}
                </h3>
                <p className="text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-narrow)] px-[var(--spacing-section-x)] text-center">
          <h2 className="font-heading text-[length:var(--font-size-h2)] leading-snug font-[40] text-foreground">
            Domluvíme se a vymyslíme společně.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[length:var(--font-size-body-lg)] leading-relaxed text-muted-foreground">
            Nezávazná konzultace je první krok. Řeknete nám, co máte rádi, a
            my navrhneme, jak to převést do květin.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/kontakt/">Domluvit konzultaci</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="tel:+420604585271">Zavolat 604 585 271</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
