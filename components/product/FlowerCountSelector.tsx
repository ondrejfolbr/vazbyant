"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

const FLOWER_COUNTS = [10, 15, 20, 30] as const
type FlowerCount = (typeof FLOWER_COUNTS)[number]

interface FlowerCountSelectorProps {
  defaultCount?: FlowerCount
  onCountChange: (count: FlowerCount) => void
}

function FlowerCountSelector({
  defaultCount = 20,
  onCountChange,
}: FlowerCountSelectorProps) {
  const [selected, setSelected] = React.useState<FlowerCount>(defaultCount)

  function handleSelect(count: FlowerCount) {
    setSelected(count)
    onCountChange(count)
  }

  return (
    <div className="flex flex-col gap-2">
      <span className="text-[length:var(--font-size-body-sm)] font-[30] text-muted-foreground">
        Množství květů
      </span>
      <div className="flex flex-wrap gap-2">
        {FLOWER_COUNTS.map((count) => (
          <button
            key={count}
            type="button"
            onClick={() => handleSelect(count)}
            className={cn(
              "flex h-10 items-center justify-center rounded-sm border px-4 text-[length:var(--font-size-body-sm)] font-[30] transition-colors",
              selected === count
                ? "border-deep-plum bg-deep-plum text-neutral-white"
                : "border-border text-muted-foreground hover:border-deep-plum-80 hover:text-foreground",
            )}
            aria-pressed={selected === count}
          >
            {count} květů
          </button>
        ))}
      </div>
    </div>
  )
}

export { FlowerCountSelector }
export type { FlowerCount }
