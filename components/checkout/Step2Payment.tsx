"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export type PaymentMethod = "card" | "transfer" | "cod"

interface Step2PaymentProps {
  onNext: (method: PaymentMethod) => void
  onBack: () => void
  defaultMethod?: PaymentMethod
}

function Step2Payment({ onNext, onBack, defaultMethod = "card" }: Step2PaymentProps) {
  const [method, setMethod] = React.useState<PaymentMethod>(defaultMethod)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onNext(method)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      {/* Payment method radio cards */}
      <fieldset className="flex flex-col gap-3">
        <legend className="mb-2 text-[length:var(--font-size-body)] font-[30] text-foreground">
          Způsob platby
        </legend>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {(
            [
              { value: "card" as const, label: "Platební karta", sublabel: null },
              { value: "transfer" as const, label: "Bankovní převod", sublabel: null },
              { value: "cod" as const, label: "Dobírka", sublabel: "+50 Kč" },
            ] as const
          ).map((option) => (
            <label
              key={option.value}
              className={cn(
                "cursor-pointer rounded-sm border-2 p-4 transition-colors",
                method === option.value
                  ? "border-deep-plum bg-deep-plum-10"
                  : "border-border hover:border-neutral-300",
              )}
            >
              <input
                type="radio"
                name="paymentMethod"
                value={option.value}
                checked={method === option.value}
                onChange={() => setMethod(option.value)}
                className="sr-only"
              />
              <span className="text-[length:var(--font-size-body)] font-[30] text-foreground">
                {option.label}
              </span>
              {option.sublabel && (
                <span className="mt-1 block text-[length:var(--font-size-body-sm)] text-muted-foreground">
                  {option.sublabel}
                </span>
              )}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Payment details */}
      {method === "card" && <CardFields />}
      {method === "transfer" && <TransferInfo />}
      {method === "cod" && <CodInfo />}

      <div className="flex justify-between">
        <Button type="button" variant="ghost" size="lg" onClick={onBack}>
          Zpět
        </Button>
        <Button type="submit" size="lg">
          Pokračovat k souhrnu
        </Button>
      </div>
    </form>
  )
}

function CardFields() {
  return (
    <div className="flex flex-col items-center gap-3 rounded-sm border border-border p-6 text-center">
      <p className="text-[length:var(--font-size-body)] text-foreground">
        Po dokončení objednávky budete přesměrováni na zabezpečenou platební
        bránu.
      </p>
      <p className="text-[length:var(--font-size-body-sm)] text-muted-foreground">
        Platba je zpracována přes šifrované spojení. Vaše údaje jsou v bezpečí.
      </p>
    </div>
  )
}

function TransferInfo() {
  return (
    <div className="flex flex-col gap-3 rounded-sm border border-border p-6">
      <p className="text-[length:var(--font-size-body)] font-[30] text-foreground">
        Údaje pro platbu
      </p>
      <dl className="flex flex-col gap-2 text-[length:var(--font-size-body-sm)]">
        <div className="flex justify-between">
          <dt className="text-muted-foreground">Číslo účtu</dt>
          <dd className="font-[30] text-foreground">— bude doplněno —</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-muted-foreground">Variabilní symbol</dt>
          <dd className="font-[30] text-foreground">— přiřazeno po potvrzení —</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-muted-foreground">Splatnost</dt>
          <dd className="font-[30] text-foreground">5 pracovních dnů</dd>
        </div>
      </dl>
    </div>
  )
}

function CodInfo() {
  return (
    <div className="rounded-sm border border-border p-6">
      <p className="text-[length:var(--font-size-body)] text-muted-foreground">
        Platba při převzetí zásilky. K celkové ceně bude připočítáno{" "}
        <span className="font-[30] text-foreground">50 Kč</span> za dobírku.
      </p>
    </div>
  )
}

export { Step2Payment }
