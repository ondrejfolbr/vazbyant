"use client"

import { useCartStore, totalItems, totalPrice, shippingCost, grandTotal } from "@/store/cart-store"
import type { CartItem } from "@/store/cart-store"

export function useCart() {
  const items = useCartStore((s) => s.items)
  const isDrawerOpen = useCartStore((s) => s.isDrawerOpen)
  const addItem = useCartStore((s) => s.addItem)
  const removeItem = useCartStore((s) => s.removeItem)
  const updateQuantity = useCartStore((s) => s.updateQuantity)
  const clearCart = useCartStore((s) => s.clearCart)
  const openDrawer = useCartStore((s) => s.openDrawer)
  const closeDrawer = useCartStore((s) => s.closeDrawer)

  return {
    items,
    isDrawerOpen,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    openDrawer,
    closeDrawer,
    totalItems: totalItems(items),
    totalPrice: totalPrice(items),
    shippingCost: shippingCost(items),
    grandTotal: grandTotal(items),
  }
}

export type { CartItem }
