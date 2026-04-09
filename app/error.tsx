"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import { NavigationCards } from "@/components/navigation-cards"

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({ reset }: ErrorPageProps) {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-[var(--spacing-section-x)] py-[var(--spacing-section-y)]">
      <p className="mb-2 text-[length:var(--font-size-caption)] tracking-[var(--letter-spacing-widest)] text-muted-foreground uppercase">
        Něco se pokazilo
      </p>
      <h1 className="mb-3 font-heading text-[length:var(--font-size-h1)] font-[30] text-foreground">
        Omlouváme se
      </h1>
      <p className="mb-10 max-w-md text-center text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
        Došlo k neočekávané chybě. Zkuste to prosím znovu nebo se podívejte na
        naši nabídku.
      </p>

      <div className="mb-10 w-full max-w-lg">
        <NavigationCards />
      </div>

      <div className="flex gap-3">
        <Button size="md" onClick={reset}>
          Zkusit znovu
        </Button>
        <Button asChild variant="outline" size="md">
          <Link href="/">Hlavní stránka</Link>
        </Button>
      </div>
    </main>
  )
}
