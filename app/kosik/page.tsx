import type { Metadata } from "next"

import { CartPageContent } from "@/components/cart/CartPageContent"

export const metadata: Metadata = {
  title: "Košík",
  description: "Váš nákupní košík — Vazby Květin.",
}

export default function KosikPage() {
  return (
    <main id="main-content">
      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-section-x)]">
          <h1 className="font-heading text-[length:var(--font-size-h2)] leading-snug font-[40] text-foreground">
            Vaše vazby
          </h1>
          <div className="mt-12">
            <CartPageContent />
          </div>
        </div>
      </section>
    </main>
  )
}
