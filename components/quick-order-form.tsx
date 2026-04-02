"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface QuickOrderFormProps {
  className?: string
}

function QuickOrderForm({ className }: QuickOrderFormProps) {
  const [message, setMessage] = React.useState("")
  const maxLength = 300

  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-sm border border-border bg-deep-plum-10 p-5",
        className,
      )}
    >
      {/* Urgent delivery badge */}
      <div className="flex items-center gap-2 rounded-sm bg-deep-plum/10 px-3 py-2">
        <div className="size-2 rounded-full bg-deep-plum" />
        <span className="text-[length:var(--font-size-body-sm)] font-medium text-deep-plum">
          Doručíme do 4 hodin v Praze
        </span>
      </div>

      {/* Condolence card */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="condolence"
          className="text-[length:var(--font-size-body-sm)] font-medium text-foreground"
        >
          Kondolenční kartička
          <span className="ml-1 font-normal text-muted-foreground">
            (volitelné)
          </span>
        </label>
        <textarea
          id="condolence"
          value={message}
          onChange={(e) => setMessage(e.target.value.slice(0, maxLength))}
          placeholder="Váš osobní vzkaz na kartičce..."
          rows={3}
          className="resize-none rounded-sm border border-border bg-background px-3 py-2.5 text-[length:var(--font-size-body-sm)] text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-plum-50 focus:ring-2 focus:ring-plum-50/20"
        />
        <span className="self-end text-[length:var(--font-size-caption)] text-muted-foreground">
          {message.length}/{maxLength}
        </span>
      </div>

      {/* Quick order CTA */}
      <Button variant="accent" size="lg" className="w-full">
        Rychlá objednávka
      </Button>
      <p className="text-center text-[length:var(--font-size-caption)] text-muted-foreground">
        Přeskočí košík — přejdete rovnou k dokončení objednávky
      </p>
    </div>
  )
}

export { QuickOrderForm }
