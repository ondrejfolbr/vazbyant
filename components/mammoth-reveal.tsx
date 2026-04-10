import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

function MammothReveal() {
  return (
    <section className="py-[calc(var(--spacing-section-y)*0.7)]">
      <div className="mx-auto grid max-w-[var(--max-width-content)] grid-cols-1 items-center gap-12 px-[var(--spacing-section-x)] lg:grid-cols-2">
        {/* Left column — brand story */}
        <div className="flex flex-col gap-5">
          <h2 className="font-heading text-[length:var(--font-size-h2)] leading-snug font-[40] text-foreground">
            Květinářství, které rozumí chvílím,<br />kdy na tom záleží.
          </h2>
          <p className="max-w-xl text-[length:var(--font-size-body-lg)] leading-relaxed text-muted-foreground">
            Známe prostředí loučení a víme, jak důležité je umět vyjádřit
            pocity ve chvílích, kdy na tom záleží. Budujeme květinářství,
            které těmto situacím rozumí. Neprodáváme jen květiny — nabízíme
            způsob, jak něco říct, když slova nestačí.
          </p>
          <div>
            <Button asChild size="md">
              <Link href="/o-nas/">Více o nás</Link>
            </Button>
          </div>
        </div>

        {/* Right column — mammoth */}
        <div className="flex items-center justify-center">
          <Image
            src="/mamut-homepage.png"
            alt="Mamut — maskot Vazby Květin"
            width={1133}
            height={1620}
            className="h-auto w-full max-w-[480px] object-contain"
            sizes="(min-width: 1024px) 35vw, 100vw"
          />
        </div>
      </div>
    </section>
  )
}

export { MammothReveal }
