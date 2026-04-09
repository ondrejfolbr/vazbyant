"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

export interface ArrangementType {
  id: string
  label: string
  price: number
  imageIndex: number
}

const DEFAULT_ARRANGEMENT_TYPES: ArrangementType[] = [
  { id: "venec-maly", label: "Věnec malý", price: 3490, imageIndex: 2 },
  { id: "venec-velky", label: "Věnec velký", price: 4990, imageIndex: 3 },
  { id: "kytice-rakev", label: "Kytice na rakev", price: 3990, imageIndex: 4 },
  { id: "kytice-rakev-previsla", label: "Převislá kytice na rakev", price: 5490, imageIndex: 5 },
  { id: "aranzma-stojan", label: "Aranžmá do stojanu", price: 3290, imageIndex: 6 },
  { id: "kytice-polozeni", label: "Kytice na položení", price: 1990, imageIndex: 1 },
]

interface ArrangementTypeSelectorProps {
  setName: string
  types?: ArrangementType[]
  onTypeChange: (type: ArrangementType) => void
}

function ArrangementTypeSelector({
  setName,
  types = DEFAULT_ARRANGEMENT_TYPES,
  onTypeChange,
}: ArrangementTypeSelectorProps) {
  const [selected, setSelected] = React.useState<string>(types[0].id)

  function handleSelect(type: ArrangementType) {
    setSelected(type.id)
    onTypeChange(type)
    window.dispatchEvent(
      new CustomEvent("gallery-select", { detail: type.imageIndex }),
    )
  }

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("cs-CZ", {
      style: "currency",
      currency: "CZK",
      minimumFractionDigits: 0,
    }).format(price)

  return (
    <div className="flex flex-col gap-2">
      <span className="text-[length:var(--font-size-body-sm)] font-[30] text-muted-foreground">
        Druh vazby
      </span>
      <div className="flex flex-col gap-2">
        {types.map((type) => (
          <button
            key={type.id}
            type="button"
            onClick={() => handleSelect(type)}
            className={cn(
              "flex items-center justify-between rounded-sm border px-4 py-3 text-left transition-colors",
              selected === type.id
                ? "border-deep-plum bg-deep-plum-10"
                : "border-border hover:border-deep-plum-80",
            )}
            aria-pressed={selected === type.id}
          >
            <span className="text-[length:var(--font-size-body-sm)] font-[30] text-foreground">
              {setName} — {type.label}
            </span>
            <span className="text-[length:var(--font-size-body-sm)] font-[40] text-foreground">
              {formatPrice(type.price)}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

export { ArrangementTypeSelector }
