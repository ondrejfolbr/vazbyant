import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Kytice & Dárky",
  description:
    "Narozeninové kytice, sezónní květiny, firemní dodávky i měsíční předplatné. Rádi vám poradíme.",
}

const OFFERINGS: Array<{
  title: string
  description: string
}> = [
  {
    title: "Narozeninové kytice",
    description:
      "Veselé, barevné, přesně podle toho, koho znáte. Řeknete nám pár slov a my vybereme květiny, které to řeknou za vás.",
  },
  {
    title: "Sezónní květiny",
    description:
      "Valentýn, Dušičky, Vánoce — každé období má svůj květ. Připravíme aranžmá, které odpovídá příležitosti.",
  },
  {
    title: "Firemní květiny",
    description:
      "Pravidelné dodávky do kanceláří, recepcí a obchodních prostor. Nebo jednorázový dárek pro partnery a klienty.",
  },
  {
    title: "VK BOX — Předplatné",
    description:
      "Každý měsíc čerstvá sezónní kytice až k vašim dveřím. Překvapení od našich floristů — vždy jiná, vždy čerstvá.",
  },
]

const OCCASIONS: Array<{
  title: string
  text: string
}> = [
  {
    title: "Když chcete pogratulovat",
    text: "Narozeniny, jmeniny, promoce — květiny řeknou víc než pohlednice.",
  },
  {
    title: "Když chcete poděkovat",
    text: "Učitelce, sousedce, kolegyni. Malé gesto s velkým dopadem.",
  },
  {
    title: "Když chcete potěšit",
    text: "Bez důvodu. Prostě proto, že na někoho myslíte.",
  },
  {
    title: "Když chcete reprezentovat",
    text: "Firemní lobby, recepce, konferenční stůl. Květiny mluví o vašem přístupu.",
  },
]

const OFFERING_IMAGES: Record<string, string> = {
  "Narozeninové kytice":
    "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&q=80",
  "Sezónní květiny":
    "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=800&q=80",
  "Firemní květiny":
    "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80",
  "VK BOX — Předplatné":
    "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800&q=80",
}

const KYTICE_GALLERY = [
  "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&q=80",
  "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=600&q=80",
  "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=600&q=80",
  "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600&q=80",
]

export default function KyticePage() {
  return (
    <main>
      {/* HERO */}
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
          <p className="hero-stagger hero-stagger-1 mb-4 text-[length:var(--font-size-body)] leading-relaxed text-neutral-white/80">
            Když slova nestačí
          </p>
          <h1 className="hero-stagger hero-stagger-2 max-w-2xl font-heading text-[length:var(--font-size-display)] leading-snug font-[40] text-neutral-white">
            Kytice & Dárky
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-narrow)] px-[var(--spacing-section-x)]">
          <h2 className="font-heading text-[length:var(--font-size-h1)] leading-snug font-[40] text-foreground">
            Květiny na míru příležitosti.
          </h2>
          <p className="mt-6 text-[length:var(--font-size-body-lg)] leading-relaxed text-muted-foreground">
            Nejlepší kytice není ta nejdražší — je ta, která odpovídá chvíli.
            Řekněte nám, komu a proč, a my vybereme to pravé. Nebo nechte
            výběr na nás.
          </p>
        </div>
      </section>

      {/* NA JAKOU PŘÍLEŽITOST */}
      <section className="bg-deep-plum-10 py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-section-x)]">
          <span className="text-[length:var(--font-size-overline)] font-[40] uppercase tracking-widest text-plum-50">
            Příležitosti
          </span>
          <h2 className="mt-4 font-heading text-[length:var(--font-size-h2)] leading-snug font-[40] text-foreground">
            Kdy se květiny hodí
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {OCCASIONS.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-sm border border-border bg-background p-6"
              >
                <h3 className="font-heading text-[length:var(--font-size-h4)] font-[40] text-foreground">
                  {item.title}
                </h3>
                <p className="text-[length:var(--font-size-body-sm)] leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CO NABÍZÍME */}
      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-section-x)]">
          <span className="text-[length:var(--font-size-overline)] font-[40] uppercase tracking-widest text-plum-50">
            Nabídka
          </span>
          <h2 className="mt-4 font-heading text-[length:var(--font-size-h2)] leading-snug font-[40] text-foreground">
            Možnosti, které pro vás máme
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {OFFERINGS.map((item) => (
              <div key={item.title} className="flex flex-col gap-4">
                <div className="relative aspect-[3/2] overflow-hidden rounded-sm">
                  <Image
                    src={OFFERING_IMAGES[item.title] ?? ""}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
                <h3 className="font-heading text-[length:var(--font-size-h3)] font-[40] text-foreground">
                  {item.title}
                </h3>
                <p className="text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UKÁZKY */}
      <section className="bg-deep-plum-10 py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-section-x)]">
          <span className="text-[length:var(--font-size-overline)] font-[40] uppercase tracking-widest text-plum-50">
            Ukázky
          </span>
          <h2 className="mt-4 font-heading text-[length:var(--font-size-h2)] leading-snug font-[40] text-foreground">
            Z našich realizací
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {KYTICE_GALLERY.map((img, i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden rounded-sm"
              >
                <Image
                  src={img}
                  alt={`Realizace ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-narrow)] px-[var(--spacing-section-x)] text-center">
          <h2 className="font-heading text-[length:var(--font-size-h2)] leading-snug font-[40] text-foreground">
            Uděláme to za vás.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[length:var(--font-size-body-lg)] leading-relaxed text-muted-foreground">
            Řekněte nám příležitost, rozpočet a komu — a my připravíme kytici
            přesně na míru. Nebo si vyberte předplatné a nechte výběr na nás.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/kontakt/">Objednat kytici</Link>
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
