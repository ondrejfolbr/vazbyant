import type { Metadata } from "next"

import { CheckoutFlow } from "@/components/checkout/CheckoutFlow"

export const metadata: Metadata = {
  title: "Objednávka",
  description: "Dokončení objednávky — Vazby Květin.",
}

export default function ObjednavkaPage() {
  return (
    <main>
      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-narrow)] px-[var(--spacing-section-x)]">
          <CheckoutFlow />
        </div>
      </section>
    </main>
  )
}
