"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import { SheetClose } from "@/components/ui/sheet"

function CartEmpty() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-20 text-center">
      {/* Decorative flower SVG */}
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        className="text-plum-30"
      >
        <path
          d="M32 8c-4 8-12 14-12 22s5.4 14 12 14 12-6 12-14S36 16 32 8Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32 44v12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M26 50c-4-2-8-1-10 2M38 50c4-2 8-1 10 2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      <div className="flex flex-col gap-2">
        <p className="text-[length:var(--font-size-body-lg)] font-[30] text-foreground">
          Zatím tu nic není.
        </p>
        <p className="text-[length:var(--font-size-body)] text-muted-foreground">
          Pomůžeme vám vybrat.
        </p>
      </div>

      <SheetClose asChild>
        <Button asChild size="lg">
          <Link href="/smutecni/">Prohlédnout vazby</Link>
        </Button>
      </SheetClose>
    </div>
  )
}

export { CartEmpty }
