"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

interface QuantitySelectorProps {
  className?: string
}

function QuantitySelector({ className }: QuantitySelectorProps) {
  const [quantity, setQuantity] = React.useState(1)

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-sm border border-border",
        className,
      )}
    >
      <button
        type="button"
        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
        className="flex size-11 items-center justify-center text-muted-foreground transition-colors hover:bg-deep-plum-10 hover:text-foreground disabled:opacity-40"
        disabled={quantity <= 1}
        aria-label="Snížit množství"
      >
        −
      </button>
      <span className="flex w-12 items-center justify-center font-mono text-[length:var(--font-size-body)] font-[30] text-foreground">
        {quantity}
      </span>
      <button
        type="button"
        onClick={() => setQuantity((q) => q + 1)}
        className="flex size-11 items-center justify-center text-muted-foreground transition-colors hover:bg-deep-plum-10 hover:text-foreground"
        aria-label="Zvýšit množství"
      >
        +
      </button>
    </div>
  )
}

export { QuantitySelector }
