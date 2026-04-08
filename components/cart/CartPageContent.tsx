"use client"

import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { formatPrice } from "@/components/cart/CartItem"

const CATEGORY_LABELS: Record<string, string> = {
  smutecni: "Smuteční",
  svatebni: "Svatební",
  kytice: "Kytice",
  firemni: "Firemní",
}

function CartPageContent() {
  const { items, updateQuantity, removeItem, totalPrice: total, shippingCost: shipping, grandTotal: grand } = useCart()

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center gap-6 py-20 text-center">
        <div className="flex size-20 items-center justify-center rounded-full bg-plum-10">
          <span className="text-[length:var(--font-size-h2)] text-plum-50">0</span>
        </div>
        <p className="text-[length:var(--font-size-body-lg)] text-muted-foreground">
          Zatím tu nic není.
        </p>
        <p className="max-w-md text-[length:var(--font-size-body)] text-muted-foreground">
          Pomůžeme vám vybrat.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/smutecni/">Smuteční květiny</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/svatebni/">Svatební květiny</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/kytice/">Kytice &amp; Dárky</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
      {/* Items */}
      <div className="lg:col-span-8">
        <div className="divide-y divide-border border-y border-border">
          {items.map((item) => (
            <div key={item.productId} className="group flex items-center gap-6 py-6">
              <div className="relative size-24 shrink-0 overflow-hidden bg-deep-plum-10">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <span className="text-[length:var(--font-size-body)] font-[30] text-foreground">
                  {item.name}
                </span>
                <span className="text-[length:var(--font-size-caption)] text-muted-foreground">
                  {CATEGORY_LABELS[item.category] ?? item.category}
                </span>
                <div className="mt-2 flex items-center gap-4">
                  <div className="inline-flex items-center rounded-sm border border-border">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.productId, -1)}
                      className="flex size-9 items-center justify-center text-muted-foreground transition-colors hover:bg-deep-plum-10 hover:text-foreground disabled:opacity-40"
                      disabled={item.quantity <= 1}
                      aria-label="Snížit množství"
                    >
                      −
                    </button>
                    <span className="flex w-10 items-center justify-center text-[length:var(--font-size-body-sm)] font-[30] text-foreground">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.productId, 1)}
                      className="flex size-9 items-center justify-center text-muted-foreground transition-colors hover:bg-deep-plum-10 hover:text-foreground"
                      aria-label="Zvýšit množství"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.productId)}
                    className="text-[length:var(--font-size-caption)] text-muted-foreground transition-opacity hover:text-foreground"
                    aria-label={`Odebrat ${item.name}`}
                  >
                    Odebrat
                  </button>
                </div>
              </div>
              <span className="shrink-0 font-sans text-[length:var(--font-size-body)] font-[30] text-foreground">
                {formatPrice(item.price * item.quantity)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="lg:col-span-4">
        <div className="sticky top-24 flex flex-col gap-4 rounded-sm border border-border p-6">
          <div className="flex justify-between text-[length:var(--font-size-body-sm)] text-muted-foreground">
            <span>Mezisoučet</span>
            <span>{formatPrice(total)}</span>
          </div>
          <div className="flex justify-between text-[length:var(--font-size-body-sm)] text-muted-foreground">
            <span>Doprava</span>
            <span>{shipping === 0 ? "Zdarma" : formatPrice(shipping)}</span>
          </div>
          <div className="flex justify-between border-t border-border pt-4 text-[length:var(--font-size-body)] font-[30] text-foreground">
            <span>Celkem</span>
            <span>{formatPrice(grand)}</span>
          </div>
          <Button asChild size="lg" className="mt-2 w-full">
            <Link href="/objednavka/">Dokončit objednávku</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export { CartPageContent }
