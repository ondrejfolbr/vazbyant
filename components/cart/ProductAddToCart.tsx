"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"

interface ProductAddToCartProps {
  productId: string
  slug: string
  name: string
  price: number
  image: string
  category: "smutecni" | "svatebni" | "kytice" | "firemni"
  variant?: string
}

function ProductAddToCart({
  productId,
  slug,
  name,
  price,
  image,
  category,
  variant,
}: ProductAddToCartProps) {
  const [quantity, setQuantity] = React.useState(1)
  const { addItem } = useCart()

  function handleAdd() {
    addItem({
      productId,
      slug,
      name,
      price,
      image,
      category,
      variant,
      quantity,
    })
    setQuantity(1)
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Quantity selector */}
      <div className="flex flex-col gap-2">
        <span className="text-[length:var(--font-size-body-sm)] font-[30] text-muted-foreground">
          Počet kusů
        </span>
        <div className="inline-flex items-center rounded-sm border border-border">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="flex size-11 items-center justify-center text-muted-foreground transition-colors hover:bg-deep-plum-10 hover:text-foreground disabled:opacity-40"
            disabled={quantity <= 1}
            aria-label="Snížit množství"
          >
            −
          </button>
          <span className="flex w-12 items-center justify-center font-sans text-[length:var(--font-size-body)] font-[30] text-foreground">
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
      </div>

      {/* Add to cart button */}
      <Button size="lg" className="w-full" onClick={handleAdd}>
        Vybrat tuto vazbu
      </Button>
    </div>
  )
}

export { ProductAddToCart }
