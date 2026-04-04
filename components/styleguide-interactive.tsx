"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { QuantitySelector } from "@/components/quantity-selector"
import { QuickOrderForm } from "@/components/quick-order-form"

function StyleguideInteractive() {
  return (
    <div className="flex flex-col gap-[var(--spacing-section-y)]">
      {/* ── Buttons ─────────────────────────────────────────── */}
      <section className="flex flex-col gap-8">
        <h2 className="font-heading text-[length:var(--font-size-h2)] font-[40] text-foreground">
          Buttons
        </h2>

        {/* Variants */}
        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-[length:var(--font-size-h3)] font-[40] text-foreground">
            Variants
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="default">Default</Button>
            <Button variant="accent">Accent</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>

        {/* Sizes */}
        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-[length:var(--font-size-h3)] font-[40] text-foreground">
            Sizes
          </h3>
          <div className="flex flex-wrap items-end gap-3">
            <Button variant="default" size="xs">
              Extra Small
            </Button>
            <Button variant="default" size="sm">
              Small
            </Button>
            <Button variant="default" size="default">
              Default
            </Button>
            <Button variant="default" size="md">
              Medium
            </Button>
            <Button variant="default" size="lg">
              Large
            </Button>
          </div>
        </div>

        {/* States */}
        <div className="flex flex-col gap-4">
          <h3 className="font-heading text-[length:var(--font-size-h3)] font-[40] text-foreground">
            States
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="default">Enabled</Button>
            <Button variant="default" disabled>
              Disabled
            </Button>
            <Button variant="outline">Enabled</Button>
            <Button variant="outline" disabled>
              Disabled
            </Button>
          </div>
        </div>
      </section>

      {/* ── Accordion ───────────────────────────────────────── */}
      <section className="flex flex-col gap-8">
        <h2 className="font-heading text-[length:var(--font-size-h2)] font-[40] text-foreground">
          Accordion
        </h2>
        <Accordion type="single" collapsible className="max-w-xl">
          <AccordionItem value="1">
            <AccordionTrigger>Popis produktu</AccordionTrigger>
            <AccordionContent>
              <p>
                Ručně vázaná kytice z čerstvých květin prémiové kvality. Každá
                kytice je originální a připravena na zakázku naším floristickým
                týmem.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionTrigger>Složení</AccordionTrigger>
            <AccordionContent>
              <p>
                Růže, karafiáty, eukalyptus, gypsophila a sezónní zeleň.
                Přesné složení se může mírně lišit dle dostupnosti.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="3">
            <AccordionTrigger>Doručení</AccordionTrigger>
            <AccordionContent>
              <p>
                Doručujeme po celé Praze. Standardní doručení do 24 hodin,
                expresní do 4 hodin. Smuteční květiny doručíme přímo na místo
                obřadu.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* ── Quantity Selector ───────────────────────────────── */}
      <section className="flex flex-col gap-8">
        <h2 className="font-heading text-[length:var(--font-size-h2)] font-[40] text-foreground">
          Quantity Selector
        </h2>
        <QuantitySelector />
      </section>

      {/* ── Quick Order Form ────────────────────────────────── */}
      <section className="flex flex-col gap-8">
        <h2 className="font-heading text-[length:var(--font-size-h2)] font-[40] text-foreground">
          Quick Order Form
        </h2>
        <QuickOrderForm className="max-w-md" />
      </section>
    </div>
  )
}

export { StyleguideInteractive }
