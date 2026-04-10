"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

function MammothReveal() {
  const [revealed, setRevealed] = React.useState(false)

  return (
    <section className="py-[calc(var(--spacing-section-y)*0.7)]">
      <div className="mx-auto grid max-w-[70%] grid-cols-1 items-center gap-6 px-[var(--spacing-section-x)] lg:grid-cols-2">
        {/* Left column — text swaps on hover */}
        <div className="relative flex flex-col gap-5">
          {/* Default brand story */}
          <div
            className="flex flex-col gap-5 transition-opacity duration-500 ease-out"
            style={{ opacity: revealed ? 0 : 1, pointerEvents: revealed ? "none" : "auto" }}
          >
            <h2 className="font-heading text-[length:var(--font-size-h2)] leading-snug font-[40] text-foreground">
              Květinářství, které rozumí chvílím, kdy na tom záleží.
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

          {/* Mammoth poem — revealed on hover */}
          <div
            className="absolute inset-0 flex flex-col justify-center gap-4 transition-opacity duration-500 ease-out"
            style={{ opacity: revealed ? 1 : 0, pointerEvents: revealed ? "auto" : "none" }}
          >
            <p className="font-heading text-[length:var(--font-size-h2)] leading-snug font-[40] text-foreground">
              Mamut je paměť.
              <br />
              To, co zůstává.
            </p>
            <p className="max-w-md text-[length:var(--font-size-body-lg)] leading-relaxed text-muted-foreground">
              Stejně jako vzpomínky na ty, kteří tu byli s námi.
              <br />
              Stejně jako vazby mezi lidmi, které nekončí.
            </p>
          </div>
        </div>

        {/* Right column — mammoth */}
        <div
          className="flex items-center justify-center"
          onMouseEnter={() => setRevealed(true)}
          onMouseLeave={() => setRevealed(false)}
        >
          <Image
            src="/mamut-homepage.png"
            alt="Mamut — maskot Vazby Květin"
            width={1133}
            height={1620}
            className="h-auto w-full max-w-[480px] cursor-pointer object-contain transition-transform duration-500 ease-out"
            style={{ transform: revealed ? "scale(1.03)" : "scale(1)" }}
            sizes="(min-width: 1024px) 35vw, 100vw"
          />
        </div>
      </div>
    </section>
  )
}

export { MammothReveal }
