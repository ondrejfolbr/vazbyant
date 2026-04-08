"use client"

import * as React from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { formatPrice } from "@/components/cart/CartItem"
import type { DeliveryFormData } from "@/components/checkout/Step1Delivery"
import type { PaymentMethod } from "@/components/checkout/Step2Payment"

const CATEGORY_LABELS: Record<string, string> = {
  smutecni: "Smuteční",
  svatebni: "Svatební",
  kytice: "Kytice",
  firemni: "Firemní",
}

const PAYMENT_LABELS: Record<PaymentMethod, string> = {
  card: "Platební karta",
  transfer: "Bankovní převod",
  cod: "Dobírka",
}

interface Step3SummaryProps {
  deliveryData: DeliveryFormData
  paymentMethod: PaymentMethod
  onBack: () => void
  onConfirm: () => void
}

function Step3Summary({
  deliveryData,
  paymentMethod,
  onBack,
  onConfirm,
}: Step3SummaryProps) {
  const { items, shippingCost: shipping, grandTotal: grand } = useCart()

  const codSurcharge = paymentMethod === "cod" ? 50 : 0
  const finalTotal = grand + codSurcharge

  return (
    <div className="flex flex-col gap-8">
      <h2 className="font-heading text-[length:var(--font-size-h3)] font-[40] text-foreground">
        Vaše objednávka
      </h2>

      {/* Items */}
      <div className="divide-y divide-border border-y border-border">
        {items.map((item) => (
          <div key={item.productId} className="flex items-center gap-4 py-4">
            <div className="relative size-[60px] shrink-0 overflow-hidden bg-deep-plum-10">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                sizes="60px"
              />
            </div>
            <div className="flex flex-1 flex-col gap-0.5">
              <span className="text-[length:var(--font-size-body)] font-[30] text-foreground">
                {item.name}
              </span>
              <span className="text-[length:var(--font-size-caption)] text-muted-foreground">
                {CATEGORY_LABELS[item.category] ?? item.category} · ks: {item.quantity}
              </span>
            </div>
            <span className="shrink-0 text-[length:var(--font-size-body)] font-[30] text-foreground">
              {formatPrice(item.price * item.quantity)}
            </span>
          </div>
        ))}
      </div>

      {/* Delivery & payment info */}
      <div className="flex flex-col gap-3 text-[length:var(--font-size-body-sm)]">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Doručení</span>
          <span className="text-foreground">
            {deliveryData.deliveryType === "home"
              ? `Domů — ${deliveryData.city}`
              : "Osobní odběr — Mnichovice"}
            {" · "}
            {shipping === 0 ? "Zdarma" : formatPrice(shipping)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Platba</span>
          <span className="text-foreground">
            {PAYMENT_LABELS[paymentMethod]}
            {codSurcharge > 0 && ` · +${formatPrice(codSurcharge)}`}
          </span>
        </div>
        <div className="flex justify-between border-t border-border pt-3 text-[length:var(--font-size-body)] font-[30]">
          <span className="text-foreground">Celkem</span>
          <span className="text-foreground">{formatPrice(finalTotal)}</span>
        </div>
      </div>

      {/* Contact details */}
      <div className="flex flex-col gap-1 rounded-sm border border-border p-4 text-[length:var(--font-size-body-sm)]">
        <span className="font-[30] text-foreground">
          {deliveryData.firstName} {deliveryData.lastName}
        </span>
        <span className="text-muted-foreground">{deliveryData.email}</span>
        <span className="text-muted-foreground">{deliveryData.phone}</span>
        {deliveryData.deliveryType === "home" && deliveryData.street && (
          <span className="text-muted-foreground">
            {deliveryData.street}, {deliveryData.city} {deliveryData.zip}
          </span>
        )}
        {deliveryData.note && (
          <span className="mt-2 text-muted-foreground italic">
            {deliveryData.note}
          </span>
        )}
      </div>

      {/* Actions */}
      <div className="flex justify-between">
        <Button type="button" variant="ghost" size="lg" onClick={onBack}>
          Zpět k platbě
        </Button>
        <Button size="lg" onClick={onConfirm}>
          Potvrdit objednávku
        </Button>
      </div>
    </div>
  )
}

export { Step3Summary }
