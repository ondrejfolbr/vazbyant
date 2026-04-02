import Link from "next/link"

import { Button } from "@/components/ui/button"
import { QuantitySelector } from "@/components/quantity-selector"
import { products } from "@/lib/products.data"

export default function KosikPage() {
  // Sample cart items for wireframe
  const cartItems = [products[0], products[4], products[7]]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0)
  const shipping = 0
  const total = subtotal + shipping

  function formatPrice(price: number) {
    return new Intl.NumberFormat("cs-CZ", {
      style: "currency",
      currency: "CZK",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <main>
      <div className="mx-auto max-w-[var(--max-width-site)] px-[var(--spacing-section-x)] py-12">
        <h1 className="mb-10 font-heading text-[length:var(--font-size-h1)] font-[40] text-foreground">
          Košík
        </h1>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Cart items */}
          <div className="flex flex-col gap-0 lg:col-span-8">
            {/* Header */}
            <div className="hidden border-b border-border pb-4 text-[length:var(--font-size-body-sm)] text-muted-foreground md:grid md:grid-cols-[1fr_120px_120px_40px] md:gap-6">
              <span>Produkt</span>
              <span className="text-center">Množství</span>
              <span className="text-right">Cena</span>
              <span />
            </div>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-[80px_1fr] gap-4 border-b border-border py-6 md:grid-cols-[80px_1fr_120px_120px_40px] md:gap-6"
              >
                {/* Thumbnail */}
                <div className="flex aspect-square items-center justify-center rounded-sm bg-plum-10">
                  <span className="text-[length:var(--font-size-caption)] text-plum-50">
                    Foto
                  </span>
                </div>

                {/* Name & info */}
                <div className="flex flex-col gap-1">
                  <Link
                    href={`/${item.category}/${item.slug}`}
                    className="font-heading text-[length:var(--font-size-body)] font-[40] text-foreground hover:text-deep-plum"
                  >
                    {item.name}
                  </Link>
                  <span className="text-[length:var(--font-size-caption)] text-muted-foreground">
                    Velikost: M
                  </span>
                </div>

                {/* Quantity */}
                <div className="flex items-center justify-center max-md:col-span-2 max-md:mt-2">
                  <QuantitySelector />
                </div>

                {/* Price */}
                <div className="flex items-center justify-end font-mono text-[length:var(--font-size-body)] font-[30] text-foreground max-md:col-span-2">
                  {formatPrice(item.price)}
                </div>

                {/* Remove */}
                <div className="flex items-center justify-center max-md:col-start-2 max-md:row-start-2 max-md:justify-end">
                  <button
                    type="button"
                    className="flex size-8 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-neutral-100 hover:text-foreground"
                    aria-label="Odebrat"
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 flex flex-col gap-6 rounded-sm border border-border p-6">
              <h2 className="font-heading text-[length:var(--font-size-h4)] font-[40] text-foreground">
                Souhrn objednávky
              </h2>

              <div className="flex flex-col gap-3 text-[length:var(--font-size-body-sm)]">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Mezisoučet</span>
                  <span className="font-mono font-[30] text-foreground">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Doručení</span>
                  <span className="font-mono font-[30] text-foreground">
                    {shipping === 0 ? "Zdarma" : formatPrice(shipping)}
                  </span>
                </div>
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between">
                    <span className="font-[40] text-foreground">Celkem</span>
                    <span className="font-mono text-[length:var(--font-size-body)] font-[40] text-foreground">
                      {formatPrice(total)}
                    </span>
                  </div>
                </div>
              </div>

              <Button asChild size="lg" className="w-full">
                <Link href="/objednavka/">Pokračovat k objednávce</Link>
              </Button>

              <Button asChild variant="ghost" size="md" className="w-full">
                <Link href="/">Pokračovat v nákupu</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
