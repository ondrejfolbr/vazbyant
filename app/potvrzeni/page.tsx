import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Potvrzení objednávky",
  description: "Vaše objednávka byla přijata — Vazby Květin.",
}

export default function PotvrzeniPage() {
  return (
    <main>
      <section className="flex min-h-[60vh] items-center py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-narrow)] px-[var(--spacing-section-x)] text-center">
          {/* Success icon */}
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-plum-10">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-deep-plum"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>

          <h1 className="font-heading text-[length:var(--font-size-h1)] leading-snug font-[40] text-foreground">
            Děkujeme za objednávku.
          </h1>

          <p className="mt-4 text-[length:var(--font-size-body-lg)] leading-relaxed text-muted-foreground">
            Vaši objednávku jsme přijali a brzy se vám ozveme s potvrzením.
            Potvrzení najdete také ve svém e-mailu.
          </p>

          {/* Order number placeholder */}
          <div className="mx-auto mt-8 max-w-sm rounded-sm border border-border p-6">
            <span className="text-[length:var(--font-size-caption)] uppercase tracking-wider text-muted-foreground">
              Číslo objednávky
            </span>
            <p className="mt-1 font-sans text-[length:var(--font-size-h3)] font-[30] text-foreground">
              #VK-2024-0001
            </p>
          </div>

          {/* Contact info */}
          <p className="mt-8 text-[length:var(--font-size-body)] text-muted-foreground">
            Máte otázky? Zavolejte nám na{" "}
            <a
              href="tel:+420604585271"
              className="text-foreground underline transition-colors hover:text-deep-plum-70"
            >
              604 585 271
            </a>{" "}
            nebo napište na{" "}
            <a
              href="mailto:info@vazbykvetin.cz"
              className="text-foreground underline transition-colors hover:text-deep-plum-70"
            >
              info@vazbykvetin.cz
            </a>
            .
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/">Zpět na hlavní stránku</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/kytice/">Prohlédnout nabídku</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
