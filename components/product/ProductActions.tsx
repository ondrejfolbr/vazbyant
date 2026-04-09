"use client"

import * as React from "react"

import { SizeSelector } from "@/components/product/SizeSelector"
import { ProductAddToCart } from "@/components/cart/ProductAddToCart"
import { QuickOrderForm } from "@/components/quick-order-form"
import type { Size } from "@/components/product/SizeSelector"

interface ProductActionsProps {
  productId: string
  slug: string
  name: string
  price: number
  image: string
  category: "smutecni" | "svatebni" | "kytice" | "firemni"
  isFuneral: boolean
}

function ProductActions({
  productId,
  slug,
  name,
  price,
  image,
  category,
  isFuneral,
}: ProductActionsProps) {
  const [selectedSize, setSelectedSize] = React.useState<Size>("M")

  return (
    <>
      <SizeSelector defaultSize="M" onSizeChange={setSelectedSize} />
      <ProductAddToCart
        productId={productId}
        slug={slug}
        name={name}
        price={price}
        image={image}
        category={category}
        variant={selectedSize}
      />
      {isFuneral && (
        <QuickOrderForm
          productId={productId}
          slug={slug}
          name={name}
          price={price}
          image={image}
          category={category}
          selectedSize={selectedSize}
        />
      )}
    </>
  )
}

export { ProductActions }
