import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Obchodní podmínky",
  description:
    "Obchodní podmínky e-shopu Vazby Květin — objednávky, dodání, reklamace a další podmínky nákupu.",
}

export default function ObchodniPodminkyPage() {
  return (
    <main className="py-[var(--spacing-section-y)]">
      <div className="mx-auto max-w-[var(--max-width-narrow)] px-[var(--spacing-section-x)]">
        <h1 className="mb-12 font-heading text-[length:var(--font-size-h1)] leading-snug font-[40] text-foreground">
          Obchodní podmínky
        </h1>

        <div className="flex flex-col gap-10 text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mb-4 font-heading text-[length:var(--font-size-h3)] leading-snug font-[40] text-foreground">
              1. Základní ustanovení
            </h2>
            <p>
              Tyto obchodní podmínky upravují práva a povinnosti smluvních stran
              při nákupu zboží prostřednictvím internetového obchodu
              vazbykvetin.cz, provozovaného společností VAZBY KVĚTIN s.r.o., se
              sídlem Mirošovická 704, 251 64 Mnichovice, IČO: — bude doplněno —.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-[length:var(--font-size-h3)] leading-snug font-[40] text-foreground">
              2. Objednávka a uzavření kupní smlouvy
            </h2>
            <p className="mb-3">
              Objednávku je možné učinit prostřednictvím internetového obchodu,
              telefonicky na čísle +420 604 585 271, nebo e-mailem na adrese
              info@vazbykvetin.cz.
            </p>
            <p className="mb-3">
              Kupní smlouva vzniká potvrzením objednávky ze strany prodávajícího.
              Potvrzení je zasíláno na e-mailovou adresu uvedenou kupujícím.
            </p>
            <p>
              Prodávající si vyhrazuje právo objednávku odmítnout v případě, že
              není schopen zajistit požadované zboží v požadovaném termínu.
              O takové skutečnosti bude kupující neprodleně informován.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-[length:var(--font-size-h3)] leading-snug font-[40] text-foreground">
              3. Ceny a platební podmínky
            </h2>
            <p className="mb-3">
              Ceny uvedené v internetovém obchodě jsou konečné a zahrnují DPH.
              Cena je platná v okamžiku odeslání objednávky.
            </p>
            <p>
              Platbu je možné provést platební kartou online, bankovním převodem
              nebo v hotovosti při osobním odběru. U doručení na adresu je možná
              platba na dobírku s příplatkem 50 Kč.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-[length:var(--font-size-h3)] leading-snug font-[40] text-foreground">
              4. Dodání zboží
            </h2>
            <p className="mb-3">
              Květiny doručujeme osobně v rámci Prahy a okolí. Doručení je možné
              v den objednávky, pokud je objednávka přijata do 12:00 hodin.
            </p>
            <p className="mb-3">
              Cena doručení činí 150 Kč. Při objednávce nad 1 500 Kč je doručení
              zdarma.
            </p>
            <p>
              Osobní odběr je možný na adrese Mirošovická 704, Mnichovice,
              v otevíracích hodinách vazárny.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-[length:var(--font-size-h3)] leading-snug font-[40] text-foreground">
              5. Reklamace
            </h2>
            <p className="mb-3">
              Vzhledem k povaze zboží (čerstvé květiny) je kupující povinen
              zkontrolovat stav zásilky při převzetí. Reklamaci je nutné uplatnit
              neprodleně, nejpozději do 24 hodin od převzetí.
            </p>
            <p>
              Reklamaci je možné uplatnit telefonicky na čísle +420 604 585 271 nebo
              e-mailem na info@vazbykvetin.cz. K reklamaci prosím přiložte
              fotografii zboží.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-[length:var(--font-size-h3)] leading-snug font-[40] text-foreground">
              6. Odstoupení od smlouvy
            </h2>
            <p className="mb-3">
              Spotřebitel má právo odstoupit od smlouvy do 14 dnů od převzetí
              zboží bez udání důvodu. Toto právo se nevztahuje na zboží
              podléhající rychlé zkáze (čerstvé květiny), zboží upravené podle
              přání spotřebitele, ani na zboží, které bylo po dodání nenávratně
              smíšeno s jiným zbožím.
            </p>
            <p>
              Vzhledem k tomu, že většina nabízeného zboží podléhá rychlé zkáze,
              odstoupení od smlouvy se ve většině případů neuplatní.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-heading text-[length:var(--font-size-h3)] leading-snug font-[40] text-foreground">
              7. Závěrečná ustanovení
            </h2>
            <p className="mb-3">
              Tyto obchodní podmínky jsou platné a účinné od — bude doplněno —.
              Prodávající si vyhrazuje právo obchodní podmínky měnit. Aktuální
              znění je vždy dostupné na těchto stránkách.
            </p>
            <p>
              Vztahy neupravené těmito obchodními podmínkami se řídí právním
              řádem České republiky, zejména zákonem č. 89/2012 Sb., občanský
              zákoník, a zákonem č. 634/1992 Sb., o ochraně spotřebitele.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
