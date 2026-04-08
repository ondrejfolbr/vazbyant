"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "motion/react"

import { useCart } from "@/hooks/use-cart"
import { StepIndicator } from "@/components/checkout/StepIndicator"
import { Step1Delivery } from "@/components/checkout/Step1Delivery"
import { Step2Payment } from "@/components/checkout/Step2Payment"
import { Step3Summary } from "@/components/checkout/Step3Summary"
import type { DeliveryFormData } from "@/components/checkout/Step1Delivery"
import type { PaymentMethod } from "@/components/checkout/Step2Payment"

function CheckoutFlow() {
  const router = useRouter()
  const { items, clearCart } = useCart()
  const [step, setStep] = React.useState(1)
  const [deliveryData, setDeliveryData] = React.useState<DeliveryFormData | null>(null)
  const [paymentMethod, setPaymentMethod] = React.useState<PaymentMethod>("card")

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4 py-20 text-center">
        <p className="text-[length:var(--font-size-body-lg)] text-muted-foreground">
          Košík je prázdný
        </p>
        <p className="text-[length:var(--font-size-body)] text-muted-foreground">
          Přidejte produkty pro dokončení objednávky.
        </p>
      </div>
    )
  }

  function handleStep1(data: DeliveryFormData) {
    setDeliveryData(data)
    setStep(2)
  }

  function handleStep2(method: PaymentMethod) {
    setPaymentMethod(method)
    setStep(3)
  }

  function handleConfirm() {
    clearCart()
    router.push("/potvrzeni/")
  }

  return (
    <div>
      <StepIndicator currentStep={step} />

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          {step === 1 && (
            <Step1Delivery
              onNext={handleStep1}
              defaultValues={deliveryData ?? undefined}
            />
          )}
          {step === 2 && (
            <Step2Payment
              onNext={handleStep2}
              onBack={() => setStep(1)}
              defaultMethod={paymentMethod}
            />
          )}
          {step === 3 && deliveryData && (
            <Step3Summary
              deliveryData={deliveryData}
              paymentMethod={paymentMethod}
              onBack={() => setStep(2)}
              onConfirm={handleConfirm}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export { CheckoutFlow }
