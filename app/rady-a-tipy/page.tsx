import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Rady a tipy",
  description:
    "Smuteční květiny a etiketa — jak vybrat květiny, co napsat na stuhu, jak kondolovat. Průvodce od Vazby Květin.",
}

const FLOWERS: Array<{ name: string; description: string }> = [
  {
    name: "Růže",
    description:
      "Symbolizuje lásku, ale i pomíjivost života. Dostupná celoročně ve stovkách odrůd.",
  },
  {
    name: "Karafiát",
    description:
      "Cenově dostupná, odolná, vydrží čerstvá i dva až tři týdny. Široká škála barev.",
  },
  {
    name: "Lilie",
    description:
      "Spojována s nadějí, čistotou, novým zrozením. Na pohřeb se hodí bílé, žluté nebo fialové květy.",
  },
  {
    name: "Gerbera",
    description:
      "Jedna z nejpoužívanějších řezaných květin na světě. Barevná škála je téměř neomezená.",
  },
  {
    name: "Chryzantéma",
    description:
      "V mnoha kulturách přímo spojována s památkou zemřelých. Odolná, dlouho vydrží.",
  },
  {
    name: "Kala",
    description: "Elegantní, čistá linie. Symbolizuje čistotu a oddanost.",
  },
  {
    name: "Orchidej",
    description: "Exotická, působivá. Vyjadřuje hluboký respekt.",
  },
]

const BINDING_TYPES: Array<{ name: string; description: string }> = [
  {
    name: "Vazba na rakev",
    description:
      "Pokládá se na rakev během obřadu. Bývá bohatá, často doplněná smuteční stuhou s citátem.",
  },
  {
    name: "Kytice na položení",
    description:
      "Určená na hrob po skončení obřadu. Často se skládá z odolnějších druhů, aby vydržela i několik týdnů.",
  },
  {
    name: "Kytice do ruky",
    description:
      "Vhodná pro vzdálenější členy rodiny nebo děti. Na závěr obřadu se pokládá nebo vhazuje do hrobu.",
  },
  {
    name: "Věnce",
    description:
      "Tradiční forma rozloučení. Pokládají se kolem rakve, do stojanů, nebo přímo na hrob.",
  },
  {
    name: "Aranžmá do stojanů",
    description:
      "Bohaté vazby, které souměrně dotvářejí důstojnost obřadní síně.",
  },
]

export default function RadyATipyPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-deep-plum-80">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% to-neutral-black/60" />
        <div className="relative z-10 mx-auto w-full max-w-[var(--max-width-site)] px-[var(--spacing-section-x)] pb-[var(--spacing-section-y)]">
          <p className="hero-stagger hero-stagger-1 mb-4 text-[length:var(--font-size-body)] leading-relaxed text-neutral-white/80">
            Květiny pro chvíle, kdy slova nestačí.
          </p>
          <h1 className="hero-stagger hero-stagger-2 max-w-2xl font-heading text-[length:var(--font-size-display)] leading-snug font-[40] text-neutral-white">
            Rady a tipy
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-narrow)] px-[var(--spacing-section-x)]">
          <h2 className="font-heading text-[length:var(--font-size-h1)] leading-snug font-[40] text-foreground">
            Smuteční květiny a etiketa
          </h2>
          <p className="mt-6 text-[length:var(--font-size-body-lg)] leading-relaxed text-muted-foreground">
            Rozloučení je jednou z nejtěžších chvil. A právě proto by výběr
            květin neměl být dalším zdrojem stresu. Tady najdete vše, co
            potřebujete vědět — klidně, srozumitelně, bez zbytečného tlaku.
          </p>
        </div>
      </section>

      {/* JAK VYBRAT */}
      <section className="bg-deep-plum-10 py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-narrow)] px-[var(--spacing-section-x)]">
          <span className="text-[length:var(--font-size-overline)] font-[40] uppercase tracking-widest text-plum-50">
            Průvodce výběrem
          </span>
          <h2 className="mt-4 font-heading text-[length:var(--font-size-h2)] leading-snug font-[40] text-foreground">
            Jak vybrat smuteční květiny
          </h2>
          <p className="mt-6 text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
            Výběr záleží především na vás — na vašem vztahu k zesnulému a na
            tom, co chcete květinami říct. Neexistuje špatná volba, pokud
            vychází z upřímného citu.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <TipCard
              title="Sezónnost"
              text="Ne všechny květiny jsou dostupné po celý rok. Když si nejste jistí, zeptejte se nás — poradíme a navrhneme alternativu."
            />
            <TipCard
              title="Počet květin"
              text="Tradice říká sudý počet. Výjimkou je rozloučení s mladým člověkem, kde se často nosí jedna bílá růže."
            />
            <TipCard
              title="Živé, nebo umělé?"
              text="Živé květiny působí přirozeně a krásně voní. Umělé vydrží déle a nevyžadují péči. Obojí má své místo."
            />
            <TipCard
              title="Barvy"
              text="Pro muže se obvykle volí tmavší odstíny — červená, fialová, modrá. Pro ženy světlejší tóny. Nejlepší vodítko je, co měl zesnulý rád."
            />
          </div>
        </div>
      </section>

      {/* DRUHY VAZEB */}
      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-narrow)] px-[var(--spacing-section-x)]">
          <span className="text-[length:var(--font-size-overline)] font-[40] uppercase tracking-widest text-plum-50">
            Druhy vazeb
          </span>
          <h2 className="mt-4 font-heading text-[length:var(--font-size-h2)] leading-snug font-[40] text-foreground">
            Druhy smutečních vazeb
          </h2>
          <p className="mt-6 text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
            Každá vazba má svůj účel a místo v obřadu.
          </p>

          <div className="mt-10 flex flex-col gap-6">
            {BINDING_TYPES.map((item) => (
              <div
                key={item.name}
                className="border-l-2 border-plum-50 py-2 pl-6"
              >
                <h3 className="font-heading text-[length:var(--font-size-h4)] font-[40] text-foreground">
                  {item.name}
                </h3>
                <p className="mt-2 text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SMUTEČNÍ STUHA */}
      <section className="bg-deep-plum-10 py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-narrow)] px-[var(--spacing-section-x)]">
          <span className="text-[length:var(--font-size-overline)] font-[40] uppercase tracking-widest text-plum-50">
            Stuha
          </span>
          <h2 className="mt-4 font-heading text-[length:var(--font-size-h2)] leading-snug font-[40] text-foreground">
            Co napsat na smuteční stuhu
          </h2>
          <p className="mt-6 text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
            Stuha je součástí věnce nebo kytice. Tradičně má dva cípy.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-3 rounded-sm border border-border bg-background p-6">
              <span className="text-[length:var(--font-size-body-sm)] font-[40] uppercase tracking-wide text-plum-50">
                Levý cíp
              </span>
              <p className="text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
                Vzkaz zemřelému nebo jeho oslovení.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-sm border border-border bg-background p-6">
              <span className="text-[length:var(--font-size-body-sm)] font-[40] uppercase tracking-wide text-plum-50">
                Pravý cíp
              </span>
              <p className="text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
                Váš vztah k zemřelému (např. &bdquo;Synové s rodinami&ldquo;).
              </p>
            </div>
          </div>

          <p className="mt-8 text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
            Žádná striktní pravidla neexistují. Text by měl vycházet z vás.
            Můžete zvolit barvu stuhy i písma — tradiční varianty jsou černá,
            bílá, vínová, modrá a zelená. V našem e-shopu stuhu přidáte ke
            každé vazbě.
          </p>
        </div>
      </section>

      {/* SYMBOLIKA KVĚTIN */}
      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-narrow)] px-[var(--spacing-section-x)]">
          <span className="text-[length:var(--font-size-overline)] font-[40] uppercase tracking-widest text-plum-50">
            Symbolika
          </span>
          <h2 className="mt-4 font-heading text-[length:var(--font-size-h2)] leading-snug font-[40] text-foreground">
            Oblíbené květiny a jejich symbolika
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FLOWERS.map((flower) => (
              <div key={flower.name} className="flex flex-col gap-2">
                <h3 className="font-heading text-[length:var(--font-size-h4)] font-[40] text-foreground">
                  {flower.name}
                </h3>
                <p className="text-[length:var(--font-size-body-sm)] leading-relaxed text-muted-foreground">
                  {flower.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ETIKETA */}
      <section className="bg-deep-plum-10 py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-narrow)] px-[var(--spacing-section-x)]">
          <span className="text-[length:var(--font-size-overline)] font-[40] uppercase tracking-widest text-plum-50">
            Etiketa
          </span>
          <h2 className="mt-4 font-heading text-[length:var(--font-size-h2)] leading-snug font-[40] text-foreground">
            Etiketa na pohřbu
          </h2>
          <p className="mt-6 text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
            Nemusíte se bát, že něco uděláte špatně. Samotná přítomnost a
            upřímná účast je to nejdůležitější.
          </p>

          {/* Oblečení */}
          <div className="mt-10 flex flex-col gap-6">
            <h3 className="font-heading text-[length:var(--font-size-h3)] font-[40] text-foreground">
              Oblečení
            </h3>
            <p className="text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
              Čím bližší vztah k zesnulému, tím tmavší oblečení. V rámci rodiny
              je černá samozřejmostí. U vzdálenějších známých stačí tmavé tóny.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <EtiketaCard
                title="Muži"
                text="Tmavý oblek, bílá košile, černá kravata, černé boty."
              />
              <EtiketaCard
                title="Ženy"
                text="Černé šaty nebo kostým, bez výrazných šperků, střídmý make-up."
              />
              <EtiketaCard
                title="Děti"
                text="Tmavší oblečení, nemusí být nutně černé."
              />
            </div>
          </div>

          {/* Kondolence */}
          <div className="mt-12 flex flex-col gap-6">
            <h3 className="font-heading text-[length:var(--font-size-h3)] font-[40] text-foreground">
              Jak kondolovat
            </h3>
            <p className="text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
              Neexistuje šablona. Někdy stačí pevný stisk ruky. Tiše pronesená
              slova postačují. Vhodný čas pro kondolenci je přibližně dva týdny
              po úmrtí. Při obřadu stačí tiché podání ruky.
            </p>
            <p className="text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
              Pokud chcete kondolovat písemně, zvolte rukou psaný dopis na
              bílém papíru. Ne e-mail, ne SMS.
            </p>
          </div>

          {/* Hostina */}
          <div className="mt-12 flex flex-col gap-6">
            <h3 className="font-heading text-[length:var(--font-size-h3)] font-[40] text-foreground">
              Pohřební hostina
            </h3>
            <p className="text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
              Dnes spíše klidný oběd pro nejbližší. Účast není povinná, stejně
              jako organizace. Pokud se rozhodnete hostinu uspořádat, zajistěte
              hostům dopravu.
            </p>
          </div>
        </div>
      </section>

      {/* PŘEDÁNÍ KVĚTIN */}
      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-narrow)] px-[var(--spacing-section-x)]">
          <span className="text-[length:var(--font-size-overline)] font-[40] uppercase tracking-widest text-plum-50">
            Prakticky
          </span>
          <h2 className="mt-4 font-heading text-[length:var(--font-size-h2)] leading-snug font-[40] text-foreground">
            Jak kytici na pohřbu předat
          </h2>
          <p className="mt-6 text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
            Smuteční květiny by měly být v obřadní síni s dostatečným
            předstihem, aby je květinář stihl naaranžovat. Domluvte se s
            pohřební službou na detailech včas.
          </p>
          <p className="mt-4 text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
            Dobří floristé květiny dopraví přímo na místo a zajistí aranžování
            v obřadní místnosti.
          </p>
        </div>
      </section>

      {/* HISTORIE */}
      <section className="border-y border-border bg-deep-plum-10 py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-narrow)] px-[var(--spacing-section-x)]">
          <span className="text-[length:var(--font-size-overline)] font-[40] uppercase tracking-widest text-plum-50">
            Historie
          </span>
          <h2 className="mt-4 font-heading text-[length:var(--font-size-h2)] leading-snug font-[40] text-foreground">
            Historie smutečních květin
          </h2>
          <p className="mt-6 text-[length:var(--font-size-body-lg)] leading-relaxed text-muted-foreground">
            Zvyk uctívat zemřelé květinami sahá k neolitickým kulturám. Tradice
            zdobení hrobů se k nám dostala ve 13. století spolu s
            křesťanstvím. V 17. století vznikl zvyk pokládání věnců — tehdy
            ještě z nekvetoucích rostlin, jako je vavřín nebo jmelí. Od 19.
            století se začaly používat pestřejší, kvetoucí varianty se stuhou.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-narrow)] px-[var(--spacing-section-x)] text-center">
          <h2 className="font-heading text-[length:var(--font-size-h2)] leading-snug font-[40] text-foreground">
            Pomůžeme vám
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[length:var(--font-size-body-lg)] leading-relaxed text-muted-foreground">
            Pokud si nejste jistí výběrem, neváhejte se ozvat. Rozumíme tomu,
            čím procházíte, a rádi poradíme — s květinami i s tím, co k nim
            patří.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/smutecni/">Vybrat smuteční vazbu</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/kontakt/">Napsat nám</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

function TipCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex flex-col gap-3 rounded-sm border border-border p-6">
      <h3 className="font-heading text-[length:var(--font-size-h4)] font-[40] text-foreground">
        {title}
      </h3>
      <p className="text-[length:var(--font-size-body-sm)] leading-relaxed text-muted-foreground">
        {text}
      </p>
    </div>
  )
}

function EtiketaCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex flex-col gap-2 rounded-sm border border-border bg-background p-5">
      <span className="text-[length:var(--font-size-body-sm)] font-[40] text-foreground">
        {title}
      </span>
      <p className="text-[length:var(--font-size-caption)] leading-relaxed text-muted-foreground">
        {text}
      </p>
    </div>
  )
}
