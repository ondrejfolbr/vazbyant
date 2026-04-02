import { Hero } from "@/components/hero"
import { SectionHeading } from "@/components/ui/section-heading"

export default function KontaktPage() {
  return (
    <main>
      <Hero
        heading="Kontakt"
        subheading="Jsme tu pro vás — osobně, telefonicky i online."
        variant="sub"
      />

      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-site)] px-[var(--spacing-section-x)]">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            {/* Contact info */}
            <div className="flex flex-col gap-10 lg:col-span-5">
              <div className="flex flex-col gap-6">
                <SectionHeading
                  overline="Prodejna"
                  heading="Navštivte nás"
                />
                <div className="flex flex-col gap-4 text-[length:var(--font-size-body)] text-muted-foreground">
                  <address className="not-italic leading-relaxed">
                    <span className="font-[40] text-foreground">
                      Vazby květin
                    </span>
                    <br />
                    Ulice 123
                    <br />
                    110 00 Praha 1
                  </address>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-[length:var(--font-size-overline)] font-[40] uppercase tracking-widest text-foreground">
                  Otevírací doba
                </span>
                <div className="flex flex-col gap-2 text-[length:var(--font-size-body)] text-muted-foreground">
                  <div className="flex justify-between border-b border-border pb-2">
                    <span>Pondělí — Pátek</span>
                    <span className="font-[40] text-foreground">
                      8:00 — 18:00
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span>Sobota</span>
                    <span className="font-[40] text-foreground">
                      9:00 — 14:00
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Neděle</span>
                    <span className="font-[40] text-foreground">Zavřeno</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-[length:var(--font-size-overline)] font-[40] uppercase tracking-widest text-foreground">
                  Spojte se s námi
                </span>
                <div className="flex flex-col gap-3 text-[length:var(--font-size-body)]">
                  <a
                    href="tel:+420000000000"
                    className="text-foreground transition-colors hover:text-deep-plum"
                  >
                    +420 XXX XXX XXX
                  </a>
                  <a
                    href="mailto:info@vazbykvetin.cz"
                    className="text-foreground transition-colors hover:text-deep-plum"
                  >
                    info@vazbykvetin.cz
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-[length:var(--font-size-overline)] font-[40] uppercase tracking-widest text-foreground">
                  Urgentní objednávky
                </span>
                <p className="text-[length:var(--font-size-body-sm)] leading-relaxed text-muted-foreground">
                  Pro urgentní smuteční objednávky volejte na telefonní linku —
                  jsme k dispozici i mimo otevírací dobu. Doručení v Praze do 4
                  hodin.
                </p>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="flex flex-col gap-6 lg:col-span-7">
              <div className="flex aspect-[4/3] items-center justify-center rounded-sm bg-neutral-200">
                <span className="text-[length:var(--font-size-body-sm)] text-neutral-400">
                  Mapa — Google Maps embed
                </span>
              </div>

              {/* Contact form placeholder */}
              <div className="rounded-sm border border-border p-8">
                <h3 className="mb-6 font-heading text-[length:var(--font-size-h3)] font-[40] text-foreground">
                  Napište nám
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label className="text-[length:var(--font-size-body-sm)] font-[30] text-foreground">
                        Jméno
                      </label>
                      <div className="h-11 rounded-sm border border-border bg-background px-3" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[length:var(--font-size-body-sm)] font-[30] text-foreground">
                        E-mail
                      </label>
                      <div className="h-11 rounded-sm border border-border bg-background px-3" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[length:var(--font-size-body-sm)] font-[30] text-foreground">
                      Telefon
                    </label>
                    <div className="h-11 rounded-sm border border-border bg-background px-3" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[length:var(--font-size-body-sm)] font-[30] text-foreground">
                      Zpráva
                    </label>
                    <div className="h-32 rounded-sm border border-border bg-background px-3" />
                  </div>
                  <div className="h-11 w-full rounded-sm bg-deep-plum text-center leading-[2.75rem] text-[length:var(--font-size-body-sm)] font-[30] text-neutral-white">
                    Odeslat zprávu
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
