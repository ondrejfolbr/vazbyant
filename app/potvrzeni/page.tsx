import type { Metadata } from "next"

import { ConfirmationContent } from "@/components/checkout/ConfirmationContent"

export const metadata: Metadata = {
  title: "Potvrzení objednávky",
  description: "Vaše objednávka byla přijata — Vazby Květin.",
}

export default function PotvrzeniPage() {
  return (
    <main>
      <section className="flex min-h-[60vh] items-center py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-narrow)] px-[var(--spacing-section-x)] text-center">
          <ConfirmationContent />
        </div>
      </section>
    </main>
  )
}
