import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Informace pro spotřebitele",
  description:
    "Práva spotřebitele, mimosoudní řešení sporů a další zákonné informace — Vazby Květin s.r.o.",
}

export default function InformaceProSpotrebitelePage() {
  return (
    <main className="py-[var(--spacing-section-y)]">
      <div className="mx-auto max-w-[var(--max-width-narrow)] px-[var(--spacing-section-x)]">
        <h1 className="mb-12 font-heading text-[length:var(--font-size-h1)] leading-snug font-[40] text-foreground">
          Informace pro spotřebitele
        </h1>

        <div className="flex flex-col gap-10 text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mb-4 font-heading text-[length:var(--font-size-h3)] leading-snug font-[40] text-foreground">
              Prodávající
            </h2>
            <p>
              VAZBY KVĚTIN s.r.o.
              <br />
              Mirošovická 704, 251 64 Mnichovice
              <br />
              IČO: — bude doplněno —
              <br />
              DIČ: — bude doplněno —
              <br />
              Zapsána v obchodním rejstříku vedeném Městským soudem v Praze.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-[length:var(--font-size-h3)] leading-snug font-[40] text-foreground">
              Kontakt
            </h2>
            <p>
              Telefon:{" "}
              <a
                href="tel:+420604585271"
                className="text-foreground underline underline-offset-4 transition-colors hover:text-deep-plum"
              >
                +420 604 585 271
              </a>
              <br />
              E-mail:{" "}
              <a
                href="mailto:info@vazbykvetin.cz"
                className="text-foreground underline underline-offset-4 transition-colors hover:text-deep-plum"
              >
                info@vazbykvetin.cz
              </a>
              <br />
              Provozovna: Mirošovická 704, 251 64 Mnichovice
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-[length:var(--font-size-h3)] leading-snug font-[40] text-foreground">
              Práva spotřebitele
            </h2>
            <p className="mb-3">
              Spotřebitel má právo odstoupit od smlouvy uzavřené distančním
              způsobem do 14 dnů ode dne převzetí zboží, a to bez udání důvodu.
              Toto právo se nevztahuje na zboží podléhající rychlé zkáze
              (čerstvé květiny) ani na zboží upravené podle přání spotřebitele.
            </p>
            <p>
              Podrobnosti o odstoupení od smlouvy a reklamačním řízení najdete
              v{" "}
              <a
                href="/obchodni-podminky"
                className="text-foreground underline underline-offset-4 transition-colors hover:text-deep-plum"
              >
                Obchodních podmínkách
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-[length:var(--font-size-h3)] leading-snug font-[40] text-foreground">
              Mimosoudní řešení sporů
            </h2>
            <p className="mb-3">
              V případě sporu mezi spotřebitelem a prodávajícím, který se
              nepodaří vyřešit vzájemnou dohodou, má spotřebitel právo obrátit
              se na subjekt mimosoudního řešení spotřebitelských sporů, kterým
              je:
            </p>
            <p className="mb-3">
              <strong className="text-foreground">
                Česká obchodní inspekce
              </strong>
              <br />
              Ústřední inspektorát — oddělení ADR
              <br />
              Štěpánská 44, 110 00 Praha 1
              <br />
              Web:{" "}
              <a
                href="https://adr.coi.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-4 transition-colors hover:text-deep-plum"
              >
                adr.coi.cz
              </a>
              <br />
              E-mail: adr@coi.cz
            </p>
            <p>
              Spotřebitel může rovněž využít platformu pro řešení sporů online
              (ODR) na adrese{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-4 transition-colors hover:text-deep-plum"
              >
                ec.europa.eu/consumers/odr
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-[length:var(--font-size-h3)] leading-snug font-[40] text-foreground">
              Dozorové orgány
            </h2>
            <ul className="list-inside list-disc space-y-2">
              <li>
                <strong className="text-foreground">
                  Česká obchodní inspekce
                </strong>{" "}
                — dozor nad ochranou spotřebitele (coi.cz)
              </li>
              <li>
                <strong className="text-foreground">
                  Úřad pro ochranu osobních údajů
                </strong>{" "}
                — dozor nad zpracováním osobních údajů (uoou.cz)
              </li>
              <li>
                <strong className="text-foreground">
                  Živnostenský úřad
                </strong>{" "}
                — dozor nad dodržováním živnostenského zákona
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
