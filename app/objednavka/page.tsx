import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"

export const metadata: Metadata = {
  title: "Objednávka",
  description: "Dokončení objednávky — Vazby Květin.",
}

export default function ObjednavkaPage() {
  return (
    <main>
      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-section-x)]">
          <SectionHeading
            overline="Objednávka"
            heading="Dokončení objednávky"
          />

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left — Form */}
            <div className="flex flex-col gap-8 lg:col-span-7">
              {/* Contact info */}
              <fieldset className="flex flex-col gap-4">
                <legend className="text-[length:var(--font-size-body)] font-[30] text-foreground">
                  Kontaktní údaje
                </legend>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[length:var(--font-size-body-sm)] text-muted-foreground">
                      Jméno
                    </label>
                    <div className="h-11 rounded-sm border border-border bg-background" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[length:var(--font-size-body-sm)] text-muted-foreground">
                      Příjmení
                    </label>
                    <div className="h-11 rounded-sm border border-border bg-background" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[length:var(--font-size-body-sm)] text-muted-foreground">
                    E-mail
                  </label>
                  <div className="h-11 rounded-sm border border-border bg-background" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[length:var(--font-size-body-sm)] text-muted-foreground">
                    Telefon
                  </label>
                  <div className="h-11 rounded-sm border border-border bg-background" />
                </div>
              </fieldset>

              {/* Delivery */}
              <fieldset className="flex flex-col gap-4">
                <legend className="text-[length:var(--font-size-body)] font-[30] text-foreground">
                  Doručení
                </legend>
                <div className="flex flex-col gap-3">
                  {[
                    {
                      label: "Osobní odběr — Mnichovice",
                      price: "Zdarma",
                    },
                    {
                      label: "Doručení po Praze (do 4 hodin)",
                      price: "149 Kč",
                    },
                    {
                      label: "Doručení mimo Prahu (následující den)",
                      price: "199 Kč",
                    },
                  ].map((option) => (
                    <div
                      key={option.label}
                      className="flex items-center justify-between rounded-sm border border-border px-4 py-3 transition-colors hover:border-deep-plum-80"
                    >
                      <span className="text-[length:var(--font-size-body)] text-foreground">
                        {option.label}
                      </span>
                      <span className="font-sans text-[length:var(--font-size-body-sm)] text-muted-foreground">
                        {option.price}
                      </span>
                    </div>
                  ))}
                </div>
              </fieldset>

              {/* Delivery address */}
              <fieldset className="flex flex-col gap-4">
                <legend className="text-[length:var(--font-size-body)] font-[30] text-foreground">
                  Doručovací adresa
                </legend>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[length:var(--font-size-body-sm)] text-muted-foreground">
                    Ulice a číslo popisné
                  </label>
                  <div className="h-11 rounded-sm border border-border bg-background" />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[length:var(--font-size-body-sm)] text-muted-foreground">
                      Město
                    </label>
                    <div className="h-11 rounded-sm border border-border bg-background" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[length:var(--font-size-body-sm)] text-muted-foreground">
                      PSČ
                    </label>
                    <div className="h-11 rounded-sm border border-border bg-background" />
                  </div>
                </div>
              </fieldset>

              {/* Note */}
              <fieldset className="flex flex-col gap-4">
                <legend className="text-[length:var(--font-size-body)] font-[30] text-foreground">
                  Poznámka k objednávce
                </legend>
                <div className="h-28 rounded-sm border border-border bg-background" />
              </fieldset>
            </div>

            {/* Right — Order summary */}
            <div className="lg:col-span-5">
              <div className="sticky top-24 flex flex-col gap-6 rounded-sm border border-border p-6">
                <h3 className="text-[length:var(--font-size-body)] font-[30] text-foreground">
                  Shrnutí objednávky
                </h3>

                <div className="flex flex-col gap-3 text-[length:var(--font-size-body-sm)] text-muted-foreground">
                  <p>
                    Košík je prázdný — přidejte produkty pro dokončení
                    objednávky.
                  </p>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="flex justify-between">
                    <span className="text-[length:var(--font-size-body)] text-muted-foreground">
                      Celkem
                    </span>
                    <span className="font-sans text-[length:var(--font-size-h4)] font-[30] text-foreground">
                      0 Kč
                    </span>
                  </div>
                </div>

                <Button size="lg" className="w-full">
                  Odeslat objednávku
                </Button>

                <p className="text-center text-[length:var(--font-size-caption)] text-muted-foreground">
                  Odesláním objednávky souhlasíte s{" "}
                  <Link
                    href="#"
                    className="underline transition-colors hover:text-foreground"
                  >
                    obchodními podmínkami
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
