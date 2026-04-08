"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface CartItem {
  productId: string
  slug: string
  name: string
  price: number
  quantity: number
  image: string
  category: "smutecni" | "svatebni" | "kytice" | "firemni"
  variant?: string
}

interface CartState {
  items: CartItem[]
  isDrawerOpen: boolean
}

interface CartActions {
  addItem: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, delta: number) => void
  clearCart: () => void
  openDrawer: () => void
  closeDrawer: () => void
}

export type CartStore = CartState & CartActions

const FREE_SHIPPING_THRESHOLD = 1500
const SHIPPING_COST = 150

export function totalItems(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity, 0)
}

export function totalPrice(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0)
}

export function shippingCost(items: CartItem[]): number {
  const total = totalPrice(items)
  return total >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST
}

export function grandTotal(items: CartItem[]): number {
  return totalPrice(items) + shippingCost(items)
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      isDrawerOpen: false,

      addItem: (newItem) =>
        set((state) => {
          const existing = state.items.find(
            (i) =>
              i.productId === newItem.productId && i.variant === newItem.variant,
          )

          if (existing) {
            return {
              items: state.items.map((i) =>
                i.productId === existing.productId &&
                i.variant === existing.variant
                  ? { ...i, quantity: i.quantity + (newItem.quantity ?? 1) }
                  : i,
              ),
              isDrawerOpen: true,
            }
          }

          return {
            items: [
              ...state.items,
              { ...newItem, quantity: newItem.quantity ?? 1 },
            ],
            isDrawerOpen: true,
          }
        }),

      removeItem: (productId) =>
        set((state) => ({
          items: state.items.filter((i) => i.productId !== productId),
        })),

      updateQuantity: (productId, delta) =>
        set((state) => ({
          items: state.items
            .map((i) =>
              i.productId === productId
                ? { ...i, quantity: i.quantity + delta }
                : i,
            )
            .filter((i) => i.quantity > 0),
        })),

      clearCart: () => set({ items: [] }),

      openDrawer: () => set({ isDrawerOpen: true }),
      closeDrawer: () => set({ isDrawerOpen: false }),
    }),
    {
      name: "vk-cart",
      partialize: (state) => ({ items: state.items }),
    },
  ),
)
