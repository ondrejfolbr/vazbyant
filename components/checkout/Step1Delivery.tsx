"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const deliverySchema = z
  .object({
    deliveryType: z.enum(["home", "pickup"]),
    firstName: z.string().min(2, "Zadejte prosím jméno"),
    lastName: z.string().min(2, "Zadejte prosím příjmení"),
    email: z.string().email("Zadejte prosím platnou e-mailovou adresu"),
    phone: z.string().regex(/^\+?[0-9\s\-]{9,}$/, "Zadejte prosím platné telefonní číslo"),
    street: z.string().optional(),
    city: z.string().optional(),
    zip: z.string().optional(),
    note: z.string().max(500, "Poznámka může mít maximálně 500 znaků").optional(),
  })
  .superRefine((data, ctx) => {
    if (data.deliveryType === "home") {
      if (!data.street || data.street.length < 2)
        ctx.addIssue({ path: ["street"], code: "custom", message: "Zadejte prosím ulici a číslo" })
      if (!data.city || data.city.length < 2)
        ctx.addIssue({ path: ["city"], code: "custom", message: "Zadejte prosím město" })
      if (!data.zip || !/^\d{3}\s?\d{2}$/.test(data.zip))
        ctx.addIssue({ path: ["zip"], code: "custom", message: "Zadejte prosím platné PSČ" })
    }
  })

export type DeliveryFormData = z.infer<typeof deliverySchema>

interface Step1DeliveryProps {
  onNext: (data: DeliveryFormData) => void
  defaultValues?: Partial<DeliveryFormData>
}

function Step1Delivery({ onNext, defaultValues }: Step1DeliveryProps) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<DeliveryFormData>({
    resolver: zodResolver(deliverySchema),
    defaultValues: {
      deliveryType: "home",
      ...defaultValues,
    },
    mode: "onBlur",
  })

  React.useEffect(() => {
    try {
      const raw = sessionStorage.getItem("vk-quick-order")
      if (raw) {
        const data = JSON.parse(raw) as { condolenceMessage?: string }
        if (data.condolenceMessage && !watch("note")) {
          setValue("note", `Kondolenční kartička: ${data.condolenceMessage}`)
        }
      }
    } catch {
      // Ignore invalid JSON
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const deliveryType = watch("deliveryType")

  return (
    <form onSubmit={handleSubmit(onNext)} className="flex flex-col gap-8">
      {/* Delivery type radio cards */}
      <fieldset className="flex flex-col gap-3">
        <legend className="mb-2 text-[length:var(--font-size-body)] font-[30] text-foreground">
          Způsob doručení
        </legend>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <label
            className={cn(
              "cursor-pointer rounded-sm border-2 p-4 transition-colors",
              deliveryType === "home"
                ? "border-deep-plum bg-deep-plum-10"
                : "border-border hover:border-neutral-300",
            )}
          >
            <input
              type="radio"
              value="home"
              className="sr-only"
              {...register("deliveryType")}
            />
            <span className="text-[length:var(--font-size-body)] font-[30] text-foreground">
              Doručení domů
            </span>
            <span className="mt-1 block text-[length:var(--font-size-body-sm)] text-muted-foreground">
              Praha a okolí
            </span>
            <span className="mt-1 block text-[length:var(--font-size-body-sm)] font-[30] text-foreground">
              150 Kč
            </span>
          </label>
          <label
            className={cn(
              "cursor-pointer rounded-sm border-2 p-4 transition-colors",
              deliveryType === "pickup"
                ? "border-deep-plum bg-deep-plum-10"
                : "border-border hover:border-neutral-300",
            )}
          >
            <input
              type="radio"
              value="pickup"
              className="sr-only"
              {...register("deliveryType")}
            />
            <span className="text-[length:var(--font-size-body)] font-[30] text-foreground">
              Osobní odběr
            </span>
            <span className="mt-1 block text-[length:var(--font-size-body-sm)] text-muted-foreground">
              Praha – Mnichovice
            </span>
            <span className="mt-1 block text-[length:var(--font-size-body-sm)] font-[30] text-[var(--color-success)]">
              Zdarma
            </span>
          </label>
        </div>
      </fieldset>

      {/* Contact info */}
      <fieldset className="flex flex-col gap-4">
        <legend className="mb-1 text-[length:var(--font-size-body)] font-[30] text-foreground">
          Kontaktní údaje
        </legend>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField label="Jméno" error={errors.firstName?.message}>
            <Input
              {...register("firstName")}
              placeholder="Jan"
              aria-invalid={!!errors.firstName}
            />
          </FormField>
          <FormField label="Příjmení" error={errors.lastName?.message}>
            <Input
              {...register("lastName")}
              placeholder="Novák"
              aria-invalid={!!errors.lastName}
            />
          </FormField>
        </div>
        <FormField label="E-mail" error={errors.email?.message}>
          <Input
            type="email"
            {...register("email")}
            placeholder="jan@email.cz"
            aria-invalid={!!errors.email}
          />
        </FormField>
        <FormField label="Telefon" error={errors.phone?.message}>
          <Input
            type="tel"
            {...register("phone")}
            placeholder="+420 604 585 271"
            aria-invalid={!!errors.phone}
          />
        </FormField>
      </fieldset>

      {/* Address — only for home delivery */}
      {deliveryType === "home" && (
        <fieldset className="flex flex-col gap-4">
          <legend className="mb-1 text-[length:var(--font-size-body)] font-[30] text-foreground">
            Doručovací adresa
          </legend>
          <FormField label="Ulice a číslo popisné" error={errors.street?.message}>
            <Input
              {...register("street")}
              placeholder="Květinová 42"
              aria-invalid={!!errors.street}
            />
          </FormField>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField label="Město" error={errors.city?.message}>
              <Input
                {...register("city")}
                placeholder="Praha"
                aria-invalid={!!errors.city}
              />
            </FormField>
            <FormField label="PSČ" error={errors.zip?.message}>
              <Input
                {...register("zip")}
                placeholder="110 00"
                aria-invalid={!!errors.zip}
              />
            </FormField>
          </div>
        </fieldset>
      )}

      {/* Note */}
      <fieldset className="flex flex-col gap-2">
        <legend className="mb-1 text-[length:var(--font-size-body)] font-[30] text-foreground">
          Poznámka k objednávce
        </legend>
        <Textarea
          {...register("note")}
          placeholder="Datum doručení, jméno zesnulého, přání na stuhu…"
          rows={3}
        />
        {errors.note && (
          <p className="text-[length:var(--font-size-caption)] text-[var(--color-error)]">
            {errors.note.message}
          </p>
        )}
      </fieldset>

      <div className="flex justify-end">
        <Button type="submit" size="lg">
          Pokračovat k platbě
        </Button>
      </div>
    </form>
  )
}

function FormField({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label className="text-[length:var(--font-size-body-sm)] text-muted-foreground">
        {label}
      </Label>
      {children}
      {error && (
        <p className="text-[length:var(--font-size-caption)] text-[var(--color-error)]">
          {error}
        </p>
      )}
    </div>
  )
}

export { Step1Delivery }
