import Link from "next/link"

import { Button } from "@/components/ui/button"
import { products } from "@/lib/products.data"

export default function ObjednavkaPage() {
  const cartItems = [products[0], products[4], products[7]]
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0)

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
          Objednávka
        </h1>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Form */}
          <div className="flex flex-col gap-10 lg:col-span-7">
            {/* Contact */}
            <div className="flex flex-col gap-5">
              <h2 className="font-heading text-[length:var(--font-size-h3)] font-[40] text-foreground">
                Kontaktní údaje
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FormField label="Jméno" />
                <FormField label="Příjmení" />
                <FormField label="E-mail" />
                <FormField label="Telefon" />
              </div>
            </div>

            {/* Delivery address */}
            <div className="flex flex-col gap-5">
              <h2 className="font-heading text-[length:var(--font-size-h3)] font-[40] text-foreground">
                Doručovací adresa
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <FormField label="Ulice a číslo" />
                </div>
                <FormField label="Město" />
                <FormField label="PSČ" />
              </div>
            </div>

            {/* Delivery method */}
            <div className="flex flex-col gap-5">
              <h2 className="font-heading text-[length:var(--font-size-h3)] font-[40] text-foreground">
                Způsob doručení
              </h2>
              <div className="flex flex-col gap-3">
                <DeliveryOption
                  name="Expresní doručení Praha"
                  detail="Do 4 hodin"
                  price="199 Kč"
                  selected
                />
                <DeliveryOption
                  name="Standardní doručení"
                  detail="Následující pracovní den"
                  price="Zdarma"
                  selected={false}
                />
                <DeliveryOption
                  name="Osobní odběr"
                  detail="Na prodejně, Po–Pá 8–18"
                  price="Zdarma"
                  selected={false}
                />
              </div>
            </div>

            {/* Payment */}
            <div className="flex flex-col gap-5">
              <h2 className="font-heading text-[length:var(--font-size-h3)] font-[40] text-foreground">
                Platba
              </h2>
              <div className="flex flex-col gap-3">
                <DeliveryOption
                  name="Platba kartou online"
                  detail="Visa, Mastercard"
                  price=""
                  selected
                />
                <DeliveryOption
                  name="Bankovní převod"
                  detail="Platba předem na účet"
                  price=""
                  selected={false}
                />
                <DeliveryOption
                  name="Hotově při převzetí"
                  detail="Pouze osobní odběr"
                  price=""
                  selected={false}
                />
              </div>
            </div>

            {/* Note */}
            <div className="flex flex-col gap-5">
              <h2 className="font-heading text-[length:var(--font-size-h3)] font-[40] text-foreground">
                Poznámka k objednávce
              </h2>
              <div className="h-24 rounded-sm border border-border bg-background" />
            </div>
          </div>

          {/* Order summary sidebar */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 flex flex-col gap-6 rounded-sm border border-border p-6">
              <h2 className="font-heading text-[length:var(--font-size-h4)] font-[40] text-foreground">
                Vaše objednávka
              </h2>

              <div className="flex flex-col gap-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 border-b border-border pb-4 last:border-b-0 last:pb-0"
                  >
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-sm bg-plum-10">
                      <span className="text-[length:10px] text-plum-50">
                        Foto
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col gap-0.5">
                      <span className="text-[length:var(--font-size-body-sm)] font-[30] text-foreground">
                        {item.name}
                      </span>
                      <span className="text-[length:var(--font-size-caption)] text-muted-foreground">
                        1× · M
                      </span>
                    </div>
                    <span className="font-mono text-[length:var(--font-size-body-sm)] font-[30] text-foreground">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 border-t border-border pt-4 text-[length:var(--font-size-body-sm)]">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Mezisoučet</span>
                  <span className="font-mono font-[30] text-foreground">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Doručení</span>
                  <span className="font-mono font-[30] text-foreground">
                    199 Kč
                  </span>
                </div>
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between">
                    <span className="font-[40] text-foreground">Celkem</span>
                    <span className="font-mono text-[length:var(--font-size-body)] font-[40] text-foreground">
                      {formatPrice(subtotal + 199)}
                    </span>
                  </div>
                </div>
              </div>

              <Button asChild size="lg" className="w-full">
                <Link href="/potvrzeni/">Odeslat objednávku</Link>
              </Button>

              <p className="text-center text-[length:var(--font-size-caption)] text-muted-foreground">
                Odesláním objednávky souhlasíte s{" "}
                <span className="underline">obchodními podmínkami</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function FormField({ label }: { label: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[length:var(--font-size-body-sm)] font-[30] text-foreground">
        {label}
      </label>
      <div className="h-11 rounded-sm border border-border bg-background px-3" />
    </div>
  )
}

function DeliveryOption({
  name,
  detail,
  price,
  selected,
}: {
  name: string
  detail: string
  price: string
  selected: boolean
}) {
  return (
    <div
      className={`flex items-center gap-4 rounded-sm border px-4 py-3 transition-colors ${
        selected
          ? "border-deep-plum bg-deep-plum-10"
          : "border-border hover:border-deep-plum-80"
      }`}
    >
      <div
        className={`flex size-5 shrink-0 items-center justify-center rounded-full border-2 ${
          selected ? "border-deep-plum" : "border-neutral-300"
        }`}
      >
        {selected && <div className="size-2.5 rounded-full bg-deep-plum" />}
      </div>
      <div className="flex flex-1 flex-col">
        <span className="text-[length:var(--font-size-body-sm)] font-[30] text-foreground">
          {name}
        </span>
        <span className="text-[length:var(--font-size-caption)] text-muted-foreground">
          {detail}
        </span>
      </div>
      {price && (
        <span className="font-mono text-[length:var(--font-size-body-sm)] font-[30] text-foreground">
          {price}
        </span>
      )}
    </div>
  )
}
