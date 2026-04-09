"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import {
  FlowerCountSelector,
  type FlowerCount,
} from "@/components/product/FlowerCountSelector"
import {
  RibbonConfigurator,
  type RibbonState,
} from "@/components/product/RibbonConfigurator"
import { QuickOrderForm } from "@/components/quick-order-form"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowDown01Icon } from "@hugeicons/core-free-icons"

const PRICE_MAP: Record<FlowerCount, number> = {
  10: 2190,
  15: 3190,
  20: 4288,
  30: 5990,
}

const RIBBON_PRICE = 213

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
  image,
  category,
  isFuneral,
}: ProductActionsProps) {
  const { addItem } = useCart()
  const [flowerCount, setFlowerCount] = React.useState<FlowerCount>(20)
  const [quantity, setQuantity] = React.useState(1)
  const [quickOrderOpen, setQuickOrderOpen] = React.useState(false)
  const [ribbon, setRibbon] = React.useState<RibbonState>({
    enabled: false,
    ribbonColor: "#FFFFFF",
    fontColor: "#C49A2A",
    text1: "",
    text2: "",
    note: "",
  })

  const basePrice = isFuneral ? PRICE_MAP[flowerCount] : PRICE_MAP[flowerCount]
  const totalUnitPrice = basePrice + (ribbon.enabled ? RIBBON_PRICE : 0)

  const formattedPrice = new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
    minimumFractionDigits: 0,
  }).format(totalUnitPrice)

  function handleAddToCart() {
    addItem({
      productId,
      slug,
      name,
      price: totalUnitPrice,
      image,
      category,
      variant: `${flowerCount} květů`,
      quantity,
    })
    setQuantity(1)
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Flower count selector */}
      <FlowerCountSelector
        defaultCount={20}
        onCountChange={setFlowerCount}
      />

      {/* Price */}
      <div className="flex flex-col gap-0.5">
        <span className="font-sans text-[length:var(--font-size-h2)] font-[40] text-foreground">
          {formattedPrice}
        </span>
        <span className="text-[length:var(--font-size-caption)] text-muted-foreground">
          včetně DPH
        </span>
      </div>

      {/* Ribbon configurator (funeral products only) */}
      {isFuneral && (
        <RibbonConfigurator value={ribbon} onChange={setRibbon} />
      )}

      {/* Quantity + CTA */}
      <div className="flex flex-col gap-4">
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

        <Button size="lg" className="w-full" onClick={handleAddToCart}>
          Vybrat tuto vazbu
        </Button>

        {isFuneral && (
          <div className="flex items-center gap-2 px-1">
            <div className="size-2 shrink-0 rounded-full bg-deep-plum" />
            <span className="text-[length:var(--font-size-body-sm)] font-[30] text-deep-plum">
              Doručíme do 4 hodin v Praze
            </span>
          </div>
        )}
      </div>

      {/* Quick order — collapsible accordion (funeral only) */}
      {isFuneral && (
        <div className="rounded-sm bg-plum-10">
          <button
            type="button"
            onClick={() => setQuickOrderOpen((o) => !o)}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-heading text-[length:var(--font-size-body)] font-[40] text-foreground transition-colors duration-[var(--transition-fast)] hover:bg-deep-plum-10"
            aria-expanded={quickOrderOpen}
          >
            Rychlá objednávka — přeskočit košík
            <HugeiconsIcon
              icon={ArrowDown01Icon}
              strokeWidth={2}
              className={cn(
                "size-4 shrink-0 text-plum-50 transition-transform duration-[var(--transition-fast)]",
                quickOrderOpen && "rotate-180",
              )}
            />
          </button>
          <div
            className="grid transition-[grid-template-rows] duration-[var(--transition-base)] ease-[var(--ease-default)]"
            style={{
              gridTemplateRows: quickOrderOpen ? "1fr" : "0fr",
            }}
          >
            <div className="overflow-hidden">
              <div className="px-5 pb-5">
                <QuickOrderForm
                  productId={productId}
                  slug={slug}
                  name={name}
                  price={totalUnitPrice}
                  image={image}
                  category={category}
                  selectedSize={`${flowerCount} květů`}
                  className="border-0 bg-transparent p-0"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export { ProductActions }
