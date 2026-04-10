import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Zásady ochrany osobních údajů",
  description:
    "Informace o zpracování osobních údajů v souladu s GDPR — Vazby Květin s.r.o.",
}

export default function ZasadyOchranyPage() {
  return (
    <main className="py-[var(--spacing-section-y)]">
      <div className="mx-auto max-w-[var(--max-width-narrow)] px-[var(--spacing-section-x)]">
        <h1 className="mb-12 font-heading text-[length:var(--font-size-h1)] leading-snug font-[40] text-foreground">
          Zásady ochrany osobních údajů
        </h1>

        <div className="flex flex-col gap-10 text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mb-4 font-heading text-[length:var(--font-size-h3)] leading-snug font-[40] text-foreground">
              1. Správce osobních údajů
            </h2>
            <p>
              Správcem osobních údajů je společnost VAZBY KVĚTIN s.r.o., se
              sídlem Mirošovická 704, 251 64 Mnichovice, IČO: — bude doplněno —
              (dále jen &quot;správce&quot;). Kontakt: info@vazbykvetin.cz, tel.
              604 585 271.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-[length:var(--font-size-h3)] leading-snug font-[40] text-foreground">
              2. Rozsah zpracovávaných údajů
            </h2>
            <p className="mb-3">
              Při objednávce zpracováváme tyto údaje: jméno a příjmení, e-mail,
              telefonní číslo, doručovací adresu a případně poznámku
              k objednávce. Údaje jsou nezbytné pro splnění smlouvy.
            </p>
            <p>
              Při návštěvě webu mohou být zpracovávány technické údaje
              (IP adresa, typ prohlížeče, operační systém) a údaje o chování na
              webu prostřednictvím cookies. Více v sekci{" "}
              <a
                href="/cookies"
                className="text-foreground underline underline-offset-4 transition-colors hover:text-deep-plum"
              >
                Cookies
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-[length:var(--font-size-h3)] leading-snug font-[40] text-foreground">
              3. Účel a právní základ zpracování
            </h2>
            <ul className="list-inside list-disc space-y-2">
              <li>
                <strong className="text-foreground">Plnění smlouvy</strong> —
                zpracování objednávky, doručení zboží, komunikace o stavu
                objednávky.
              </li>
              <li>
                <strong className="text-foreground">Právní povinnost</strong> —
                vedení účetnictví a daňových dokladů.
              </li>
              <li>
                <strong className="text-foreground">Oprávněný zájem</strong> —
                ochrana práv správce, zlepšování služeb.
              </li>
              <li>
                <strong className="text-foreground">Souhlas</strong> — zasílání
                obchodních sdělení (pokud byl udělen).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-[length:var(--font-size-h3)] leading-snug font-[40] text-foreground">
              4. Doba uchovávání
            </h2>
            <p>
              Osobní údaje zpracováváme po dobu nezbytnou k naplnění účelu
              zpracování. Účetní doklady uchováváme po dobu 5 let od konce
              zdaňovacího období. Údaje zpracovávané na základě souhlasu
              uchováváme do jeho odvolání.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-[length:var(--font-size-h3)] leading-snug font-[40] text-foreground">
              5. Předávání údajů třetím stranám
            </h2>
            <p>
              Osobní údaje mohou být předány pouze zpracovatelům, kteří pro nás
              zajišťují služby nezbytné k plnění smlouvy — přepravní společnosti,
              poskytovatel platební brány a poskytovatel hostingu. Údaje
              nepředáváme do třetích zemí mimo EU.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-[length:var(--font-size-h3)] leading-snug font-[40] text-foreground">
              6. Vaše práva
            </h2>
            <p className="mb-3">Máte právo:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>na přístup ke svým osobním údajům,</li>
              <li>na opravu nepřesných údajů,</li>
              <li>na výmaz údajů (právo být zapomenut),</li>
              <li>na omezení zpracování,</li>
              <li>na přenositelnost údajů,</li>
              <li>vznést námitku proti zpracování,</li>
              <li>
                odvolat souhlas se zpracováním (pokud je zpracování založeno na
                souhlasu),
              </li>
              <li>
                podat stížnost u dozorového úřadu (Úřad pro ochranu osobních
                údajů, www.uoou.cz).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-[length:var(--font-size-h3)] leading-snug font-[40] text-foreground">
              7. Kontakt
            </h2>
            <p>
              S dotazy ohledně zpracování osobních údajů se můžete obrátit na
              e-mail info@vazbykvetin.cz nebo telefonicky na 604 585 271.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
