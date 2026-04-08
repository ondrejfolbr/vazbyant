"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import type { CartItem } from "@/store/cart-store"

interface AddToCartButtonProps {
  product: Omit<CartItem, "quantity">
  quantity?: number
  className?: string
}

function AddToCartButton({ product, quantity = 1, className }: AddToCartButtonProps) {
  const { addItem } = useCart()

  function handleClick() {
    addItem({ ...product, quantity })
  }

  return (
    <Button size="lg" className={className} onClick={handleClick}>
      Vybrat tuto vazbu
    </Button>
  )
}

export { AddToCartButton }
