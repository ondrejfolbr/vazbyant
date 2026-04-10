import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookies",
  description:
    "Informace o používání cookies na webu vazbykvetin.cz — jaké cookies používáme a jak je spravovat.",
}

export default function CookiesPage() {
  return (
    <main className="py-[var(--spacing-section-y)]">
      <div className="mx-auto max-w-[var(--max-width-narrow)] px-[var(--spacing-section-x)]">
        <h1 className="mb-12 font-heading text-[length:var(--font-size-h1)] leading-snug font-[40] text-foreground">
          Cookies
        </h1>

        <div className="flex flex-col gap-10 text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mb-4 font-heading text-[length:var(--font-size-h3)] leading-snug font-[40] text-foreground">
              Co jsou cookies
            </h2>
            <p>
              Cookies jsou malé textové soubory, které se ukládají ve vašem
              prohlížeči při návštěvě webových stránek. Pomáhají nám zajistit
              správné fungování webu, zapamatovat si vaše preference a
              zlepšovat naše služby.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-[length:var(--font-size-h3)] leading-snug font-[40] text-foreground">
              Jaké cookies používáme
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-[length:var(--font-size-body)] font-medium text-foreground">
                  Nezbytné cookies
                </h3>
                <p>
                  Tyto cookies jsou nutné pro základní fungování webu — správné
                  zobrazení stránek, fungování košíku a zpracování objednávky.
                  Nelze je vypnout.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-[length:var(--font-size-body)] font-medium text-foreground">
                  Analytické cookies
                </h3>
                <p>
                  Pomáhají nám pochopit, jak návštěvníci web používají —
                  které stránky jsou navštěvovány nejčastěji a jak se
                  návštěvníci po webu pohybují. Data jsou anonymizována.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-[length:var(--font-size-body)] font-medium text-foreground">
                  Marketingové cookies
                </h3>
                <p>
                  Slouží k zobrazování relevantních reklam a měření účinnosti
                  reklamních kampaní. V současné době marketingové cookies
                  nepoužíváme.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-[length:var(--font-size-h3)] leading-snug font-[40] text-foreground">
              Správa cookies
            </h2>
            <p className="mb-3">
              Většinu cookies můžete spravovat prostřednictvím nastavení svého
              prohlížeče. Cookies můžete odmítnout nebo smazat. Upozorňujeme,
              že vypnutí některých cookies může omezit funkčnost webu.
            </p>
            <p>
              Návody pro správu cookies v jednotlivých prohlížečích najdete
              v nápovědě vašeho prohlížeče.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-[length:var(--font-size-h3)] leading-snug font-[40] text-foreground">
              Další informace
            </h2>
            <p>
              Podrobnější informace o zpracování vašich údajů najdete v{" "}
              <a
                href="/zasady-ochrany-osobnich-udaju"
                className="text-foreground underline underline-offset-4 transition-colors hover:text-deep-plum"
              >
                Zásadách ochrany osobních údajů
              </a>
              . S dotazy se můžete obrátit na info@vazbykvetin.cz.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
