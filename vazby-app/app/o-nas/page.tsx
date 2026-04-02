import { Hero } from "@/components/hero"
import { SectionHeading } from "@/components/ui/section-heading"

export default function ONasPage() {
  return (
    <main>
      <Hero
        heading="O nás"
        subheading="Květinářství, které rozumí chvílím, kdy na tom záleží."
        variant="sub"
      />

      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-site)] px-[var(--spacing-section-x)]">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            {/* Text */}
            <div className="flex flex-col gap-8 lg:col-span-6">
              <SectionHeading
                overline="Kdo jsme"
                heading="Známe prostředí loučení a víme, jak důležité je umět vyjádřit pocity."
              />
              <div className="flex flex-col gap-5 text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
                <p>
                  Vazby květin vznikly jako součást ekosystému pohřební služby
                  PEGAS. Roky zkušeností s doprovázením rodin v nejtěžších
                  chvílích nás naučily, jak důležitá je každá maličkost — včetně
                  květin, které doprovázejí poslední rozloučení.
                </p>
                <p>
                  Neprodáváme jen květiny — nabízíme způsob, jak něco říct, když
                  slova nestačí. Každá kytice, věnec nebo dekorace je
                  připravena s respektem, pochopením a citem pro detail.
                </p>
                <p>
                  Postupně jsme rozšířili nabídku o svatební květiny a dárkové
                  kytice, protože věříme, že květiny patří ke všem důležitým
                  chvílím v životě — nejen k loučení, ale i k oslavám, lásce a
                  vděčnosti.
                </p>
              </div>
            </div>

            {/* Image placeholder */}
            <div className="flex aspect-[4/5] items-center justify-center rounded-sm bg-plum-10 lg:col-span-6">
              <span className="text-[length:var(--font-size-body-sm)] text-plum-50">
                Foto — náš tým / prodejna
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-border py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-site)] px-[var(--spacing-section-x)]">
          <SectionHeading
            overline="Naše hodnoty"
            heading="Na čem stavíme"
            alignment="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {[
              {
                title: "Respekt a pochopení",
                text: "Každou zakázku přijímáme s vědomím, že za ní stojí příběh. Přistupujeme k vám s respektem a empatií — ať jde o smuteční květiny nebo svatební kytici.",
              },
              {
                title: "Řemeslná kvalita",
                text: "Pracujeme pouze s čerstvými květinami od prověřených dodavatelů. Každé aranžmá je ruční práce našich zkušených floristů.",
              },
              {
                title: "Spolehlivost",
                text: "V kritických chvílích je spolehlivost základ. Doručujeme včas, komunikujeme transparentně a děláme, co slíbíme.",
              },
            ].map((value) => (
              <div key={value.title} className="flex flex-col gap-3">
                <h3 className="font-heading text-[length:var(--font-size-h4)] font-[40] text-foreground">
                  {value.title}
                </h3>
                <p className="text-[length:var(--font-size-body-sm)] leading-relaxed text-muted-foreground">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PEGAS connection */}
      <section className="bg-neutral-100 py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-site)] px-[var(--spacing-section-x)]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="flex aspect-[3/2] items-center justify-center rounded-sm bg-plum-10 lg:col-span-5">
              <span className="text-[length:var(--font-size-body-sm)] text-plum-50">
                Logo / foto PEGAS
              </span>
            </div>
            <div className="flex flex-col gap-5 lg:col-span-7">
              <SectionHeading
                overline="Součást ekosystému PEGAS"
                heading="Pohřební služba PEGAS — tradice a důvěra od roku 1995."
              />
              <p className="text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
                Pohřební služba PEGAS je jednou z nejzkušenějších pohřebních
                služeb v České republice. Vazby květin jsou přirozeným
                rozšířením služeb, které PEGAS nabízí — od kompletního zajištění
                pohřbu po květinovou výzdobu a smuteční dary.
              </p>
              <a
                href="https://pohrebpegas.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start text-[length:var(--font-size-body-sm)] text-deep-plum underline underline-offset-4 transition-colors hover:text-deep-plum-90"
              >
                pohrebpegas.cz
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
