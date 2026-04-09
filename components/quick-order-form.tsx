"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"

interface QuickOrderFormProps {
  className?: string
  productId: string
  slug: string
  name: string
  price: number
  image: string
  category: "smutecni" | "svatebni" | "kytice" | "firemni"
  selectedSize: string
}

function QuickOrderForm({
  className,
  productId,
  slug,
  name,
  price,
  image,
  category,
  selectedSize,
}: QuickOrderFormProps) {
  const router = useRouter()
  const { addItem } = useCart()
  const [message, setMessage] = React.useState("")
  const maxLength = 300

  function handleQuickOrder() {
    addItem({
      productId,
      slug,
      name,
      price,
      image,
      category,
      variant: selectedSize,
    })

    if (message.trim()) {
      sessionStorage.setItem(
        "vk-quick-order",
        JSON.stringify({ condolenceMessage: message.trim() }),
      )
    }

    router.push("/objednavka")
  }

  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-sm border border-border bg-deep-plum-10 p-5",
        className,
      )}
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="condolence"
          className="text-[length:var(--font-size-body-sm)] font-[30] text-foreground"
        >
          Kondolenční kartička
          <span className="ml-1 font-[30] text-muted-foreground">
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

      <Button
        variant="accent"
        size="lg"
        className="w-full"
        onClick={handleQuickOrder}
      >
        Rychlá objednávka
      </Button>
      <p className="text-center text-[length:var(--font-size-caption)] text-muted-foreground">
        Přeskočí košík — přejdete rovnou k dokončení objednávky
      </p>
    </div>
  )
}

export { QuickOrderForm }
