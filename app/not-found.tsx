import Link from "next/link"

import { Button } from "@/components/ui/button"
import { NavigationCards } from "@/components/navigation-cards"

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-[var(--spacing-section-x)] py-[var(--spacing-section-y)]">
      <p className="mb-2 text-[length:var(--font-size-caption)] tracking-[var(--letter-spacing-widest)] text-muted-foreground uppercase">
        Stránka nenalezena
      </p>
      <h1 className="mb-3 font-heading text-[length:var(--font-size-h1)] font-[30] text-foreground">
        Omlouváme se
      </h1>
      <p className="mb-10 max-w-md text-center text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
        Stránka, kterou hledáte, neexistuje nebo byla přesunuta. Můžete se
        vrátit na hlavní stránku nebo prohlédnout naši nabídku.
      </p>

      <div className="mb-10 w-full max-w-lg">
        <NavigationCards />
      </div>

      <Button asChild size="md">
        <Link href="/">Zpět na hlavní stránku</Link>
      </Button>
    </main>
  )
}
