"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import { SheetClose } from "@/components/ui/sheet"
import { useCart } from "@/hooks/use-cart"
import { formatPrice } from "@/components/cart/CartItem"

const FREE_SHIPPING_THRESHOLD = 1500

function CartSummary() {
  const { totalPrice: total, shippingCost: shipping, grandTotal: grand, closeDrawer } = useCart()

  const progress = Math.min(total / FREE_SHIPPING_THRESHOLD, 1)
  const remaining = FREE_SHIPPING_THRESHOLD - total
  const isFreeShipping = remaining <= 0

  return (
    <div className="mt-auto flex flex-col gap-4 border-t border-border p-6">
      {/* Progress bar */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-neutral-200">
            <div
              className="h-full rounded-full bg-plum-50 transition-all duration-[var(--transition-base)]"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          <span className="shrink-0 text-[length:var(--font-size-caption)] text-muted-foreground">
            {formatPrice(total)} / {formatPrice(FREE_SHIPPING_THRESHOLD)}
          </span>
        </div>
        <p
          className={`text-[length:var(--font-size-caption)] ${
            isFreeShipping ? "text-[var(--color-success)]" : "text-muted-foreground"
          }`}
        >
          {isFreeShipping
            ? "Dopravu máte zdarma \u2713"
            : `Do dopravy zdarma zbývá ${formatPrice(remaining)}`}
        </p>
      </div>

      {/* Totals */}
      <div className="flex flex-col gap-1">
        <div className="flex justify-between text-[length:var(--font-size-body-sm)] text-muted-foreground">
          <span>Doprava</span>
          <span>{shipping === 0 ? "Zdarma" : formatPrice(shipping)}</span>
        </div>
        <div className="flex justify-between text-[length:var(--font-size-body)] font-[30] text-foreground">
          <span>Celkem</span>
          <span>{formatPrice(grand)}</span>
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-col gap-2">
        <SheetClose asChild>
          <Button asChild size="lg" className="w-full">
            <Link href="/objednavka/" onClick={closeDrawer}>
              Dokončit objednávku
            </Link>
          </Button>
        </SheetClose>
        <SheetClose asChild>
          <Button variant="ghost" size="lg" className="w-full">
            Pokračovat v nákupu
          </Button>
        </SheetClose>
      </div>
    </div>
  )
}

export { CartSummary }
