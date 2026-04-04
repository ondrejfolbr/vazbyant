import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"

export const metadata: Metadata = {
  title: "Košík",
  description: "Váš nákupní košík — Vazby Květin.",
}

export default function KosikPage() {
  return (
    <main>
      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-section-x)]">
          <SectionHeading heading="Váš košík" />

          {/* Empty cart state */}
          <div className="mt-12 flex flex-col items-center gap-6 py-20 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-plum-10">
              <span className="text-[length:var(--font-size-h2)] text-plum-50">
                0
              </span>
            </div>
            <p className="text-[length:var(--font-size-body-lg)] text-muted-foreground">
              Košík je zatím prázdný.
            </p>
            <p className="max-w-md text-[length:var(--font-size-body)] text-muted-foreground">
              Prohlédněte si naši nabídku a vyberte květiny pro svou
              příležitost.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/smutecni/">Smuteční květiny</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/svatebni/">Svatební květiny</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/kytice/">Kytice &amp; Dárky</Link>
              </Button>
            </div>
          </div>

          {/* Cart items placeholder structure */}
          <div className="mt-16 hidden">
            <div className="divide-y divide-border border-y border-border">
              {/* Cart item row — hidden, ready for integration */}
              <div className="flex items-center gap-6 py-6">
                <div className="h-24 w-24 shrink-0 rounded-sm bg-plum-10" />
                <div className="flex flex-1 flex-col gap-1">
                  <span className="text-[length:var(--font-size-body)] font-[30] text-foreground">
                    Název produktu
                  </span>
                  <span className="font-sans text-[length:var(--font-size-body-sm)] text-muted-foreground">
                    1 490 Kč
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-sans text-[length:var(--font-size-body)] font-[30] text-foreground">
                    1 490 Kč
                  </span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="mt-8 flex flex-col items-end gap-4">
              <div className="flex w-full max-w-sm justify-between border-t border-border pt-4">
                <span className="text-[length:var(--font-size-body)] text-muted-foreground">
                  Celkem
                </span>
                <span className="font-sans text-[length:var(--font-size-h3)] font-[30] text-foreground">
                  1 490 Kč
                </span>
              </div>
              <Button asChild size="lg">
                <Link href="/objednavka/">Pokračovat k objednávce</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
