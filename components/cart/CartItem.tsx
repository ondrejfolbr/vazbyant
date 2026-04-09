"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"

import { useCart } from "@/hooks/use-cart"
import type { CartItem as CartItemType } from "@/store/cart-store"

const CATEGORY_LABELS: Record<string, string> = {
  smutecni: "Smuteční",
  svatebni: "Svatební",
  kytice: "Kytice",
  firemni: "Firemní",
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
    minimumFractionDigits: 0,
  }).format(price)
}

interface CartItemProps {
  item: CartItemType
}

function CartItemRow({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart()
  const [isRemoving, setIsRemoving] = React.useState(false)

  function handleRemove() {
    setIsRemoving(true)
    setTimeout(() => removeItem(item.productId), 300)
  }

  return (
    <AnimatePresence>
      {!isRemoving && (
        <motion.div
          layout
          initial={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0, marginBottom: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="group flex gap-4 border-b border-border py-4 last:border-b-0"
        >
          {/* Thumbnail */}
          <div className="relative size-20 shrink-0 overflow-hidden bg-deep-plum-10">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>

          {/* Details */}
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <span className="truncate text-[length:var(--font-size-body)] font-[30] text-foreground">
              {item.name}
            </span>
            <span className="text-[length:var(--font-size-caption)] text-muted-foreground">
              {CATEGORY_LABELS[item.category] ?? item.category}
            </span>
            {item.variant && (
              <span className="text-[length:var(--font-size-caption)] text-muted-foreground">
                {" · "}Velikost {item.variant}
              </span>
            )}

            <div className="mt-auto flex items-center justify-between">
              {/* Quantity controls */}
              <div className="inline-flex items-center rounded-sm border border-border">
                <button
                  type="button"
                  onClick={() => updateQuantity(item.productId, -1)}
                  className="flex size-8 items-center justify-center text-[length:var(--font-size-body-sm)] text-muted-foreground transition-colors hover:bg-deep-plum-10 hover:text-foreground disabled:opacity-40"
                  disabled={item.quantity <= 1}
                  aria-label="Snížit množství"
                >
                  −
                </button>
                <span className="flex w-8 items-center justify-center text-[length:var(--font-size-body-sm)] font-[30] text-foreground">
                  {item.quantity}
                </span>
                <button
                  type="button"
                  onClick={() => updateQuantity(item.productId, 1)}
                  className="flex size-8 items-center justify-center text-[length:var(--font-size-body-sm)] text-muted-foreground transition-colors hover:bg-deep-plum-10 hover:text-foreground"
                  aria-label="Zvýšit množství"
                >
                  +
                </button>
              </div>

              {/* Remove */}
              <button
                type="button"
                onClick={handleRemove}
                className="text-[length:var(--font-size-caption)] text-muted-foreground opacity-0 transition-opacity hover:text-foreground group-hover:opacity-100 focus-visible:opacity-100"
                aria-label={`Odebrat ${item.name}`}
              >
                Odebrat
              </button>
            </div>
          </div>

          {/* Price */}
          <span className="shrink-0 text-[length:var(--font-size-body)] font-[30] text-foreground">
            {formatPrice(item.price * item.quantity)}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export { CartItemRow, formatPrice }
