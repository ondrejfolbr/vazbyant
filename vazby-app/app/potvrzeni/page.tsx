import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function PotvrzeniPage() {
  return (
    <main>
      <div className="mx-auto flex min-h-[70vh] max-w-[var(--max-width-narrow)] flex-col items-center justify-center px-[var(--spacing-section-x)] py-[var(--spacing-section-y)] text-center">
        {/* Success icon */}
        <div className="mb-8 flex size-20 items-center justify-center rounded-full bg-deep-plum-10">
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
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h1 className="mb-4 font-heading text-[length:var(--font-size-h1)] font-[40] text-foreground">
          Děkujeme za objednávku
        </h1>

        <p className="mb-2 text-[length:var(--font-size-body-lg)] leading-relaxed text-muted-foreground">
          Vaše objednávka č.{" "}
          <span className="font-mono font-[30] text-foreground">
            VK-2025-0847
          </span>{" "}
          byla úspěšně přijata.
        </p>

        <p className="mb-10 max-w-lg text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
          Potvrzení jsme odeslali na váš e-mail. O průběhu doručení vás budeme
          informovat.
        </p>

        {/* Order summary */}
        <div className="mb-10 w-full max-w-md rounded-sm border border-border p-6 text-left">
          <h2 className="mb-4 font-heading text-[length:var(--font-size-h4)] font-[40] text-foreground">
            Detail objednávky
          </h2>
          <div className="flex flex-col gap-3 text-[length:var(--font-size-body-sm)]">
            <div className="flex justify-between border-b border-border pb-2">
              <span className="text-muted-foreground">Číslo objednávky</span>
              <span className="font-mono font-[30] text-foreground">
                VK-2025-0847
              </span>
            </div>
            <div className="flex justify-between border-b border-border pb-2">
              <span className="text-muted-foreground">Datum</span>
              <span className="font-[30] text-foreground">2. 4. 2026</span>
            </div>
            <div className="flex justify-between border-b border-border pb-2">
              <span className="text-muted-foreground">Doručení</span>
              <span className="font-[30] text-foreground">
                Expresní — do 4 hodin
              </span>
            </div>
            <div className="flex justify-between border-b border-border pb-2">
              <span className="text-muted-foreground">Platba</span>
              <span className="font-[30] text-foreground">
                Kartou online — zaplaceno
              </span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="font-[40] text-foreground">Celkem</span>
              <span className="font-mono text-[length:var(--font-size-body)] font-[40] text-foreground">
                5 069 Kč
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild variant="default" size="md">
            <Link href="/">Zpět na hlavní stránku</Link>
          </Button>
          <Button asChild variant="outline" size="md">
            <Link href="/kontakt/">Kontaktovat nás</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
