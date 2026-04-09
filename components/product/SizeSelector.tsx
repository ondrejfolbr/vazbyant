"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

const SIZES = ["S", "M", "L"] as const
type Size = (typeof SIZES)[number]

interface SizeSelectorProps {
  defaultSize?: Size
  onSizeChange: (size: Size) => void
}

function SizeSelector({ defaultSize = "M", onSizeChange }: SizeSelectorProps) {
  const [selected, setSelected] = React.useState<Size>(defaultSize)

  function handleSelect(size: Size) {
    setSelected(size)
    onSizeChange(size)
  }

  return (
    <div className="flex flex-col gap-2">
      <span className="text-[length:var(--font-size-body-sm)] font-[30] text-muted-foreground">
        Velikost
      </span>
      <div className="flex gap-2">
        {SIZES.map((size) => (
          <button
            key={size}
            type="button"
            onClick={() => handleSelect(size)}
            className={cn(
              "flex h-10 w-14 items-center justify-center rounded-sm border text-[length:var(--font-size-body-sm)] font-[30] transition-colors",
              selected === size
                ? "border-deep-plum bg-deep-plum text-neutral-white"
                : "border-border text-muted-foreground hover:border-deep-plum-80 hover:text-foreground",
            )}
            aria-pressed={selected === size}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  )
}

export { SizeSelector }
export type { Size }
