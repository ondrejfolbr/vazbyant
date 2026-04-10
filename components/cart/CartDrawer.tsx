"use client"

import * as React from "react"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { useCart } from "@/hooks/use-cart"
import { CartItemRow } from "@/components/cart/CartItem"
import { CartSummary } from "@/components/cart/CartSummary"
import { CartEmpty } from "@/components/cart/CartEmpty"

function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer } = useCart()
  const isEmpty = items.length === 0

  return (
    <Sheet open={isDrawerOpen} onOpenChange={(open) => !open && closeDrawer()}>
      <SheetContent
        side="right"
        className="flex w-full flex-col sm:max-w-[480px]"
        aria-label="Nákupní košík"
      >
        <SheetHeader>
          <SheetTitle className="font-heading text-[length:var(--font-size-h3)] font-[40]">
            Vaše vazby
          </SheetTitle>
          <SheetDescription className="sr-only">
            Obsah vašeho nákupního košíku
          </SheetDescription>
        </SheetHeader>

        {isEmpty ? (
          <CartEmpty />
        ) : (
          <>
            {/* Scrollable items */}
            <div className="flex-1 overflow-y-auto px-6">
              {items.map((item) => (
                <CartItemRow key={`${item.productId}-${item.variant ?? ""}`} item={item} />
              ))}
            </div>

            {/* Sticky summary */}
            <CartSummary />
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}

export { CartDrawer }
