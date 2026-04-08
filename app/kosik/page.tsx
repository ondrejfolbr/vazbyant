import type { Metadata } from "next"

import { SectionHeading } from "@/components/ui/section-heading"
import { CartPageContent } from "@/components/cart/CartPageContent"

export const metadata: Metadata = {
  title: "Košík",
  description: "Váš nákupní košík — Vazby Květin.",
}

export default function KosikPage() {
  return (
    <main>
      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-section-x)]">
          <SectionHeading heading="Vaše vazby" />
          <div className="mt-12">
            <CartPageContent />
          </div>
        </div>
      </section>
    </main>
  )
}
