"use client"

import Link from "next/link"

import { cn } from "@/lib/utils"

interface ProductCardProps {
  image?: string
  title: string
  price: number
  badge?: string | null
  slug: string
  category: string
  className?: string
}

function ProductCard({
  title,
  price,
  badge,
  slug,
  category,
  className,
}: ProductCardProps) {
  const href = `/${category}/${slug}`

  return (
    <Link
      href={href}
      className={cn("group relative flex flex-col", className)}
    >
      {/* Image placeholder 1:1 */}
      <div className="relative aspect-square overflow-hidden rounded-sm bg-neutral-200 dark:bg-neutral-800">
        <div className="flex h-full items-center justify-center text-[length:var(--font-size-caption)] text-neutral-400">
          Foto produktu
        </div>

        {badge && (
          <span className="absolute top-3 left-3 rounded-sm bg-deep-plum px-2.5 py-1 text-[length:var(--font-size-caption)] font-[30] text-neutral-white">
            {badge}
          </span>
        )}

        {/* Hover overlay with CTA */}
        <div className="absolute inset-0 flex items-end justify-center bg-deep-plum/0 pb-4 transition-[background-color] duration-[var(--transition-base)] group-hover:bg-deep-plum/40">
          <span className="translate-y-2 rounded-sm bg-neutral-white px-4 py-2.5 text-[length:var(--font-size-body-sm)] font-[30] text-deep-plum opacity-0 transition-all duration-[var(--transition-base)] group-hover:translate-y-0 group-hover:opacity-100">
            Do košíku
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="mt-3 flex flex-col gap-1">
        <h4 className="font-heading text-[length:var(--font-size-h4)] leading-snug text-foreground">
          {title}
        </h4>
        <span className="font-mono text-[length:var(--font-size-body)] font-[30] text-muted-foreground">
          {new Intl.NumberFormat("cs-CZ", {
            style: "currency",
            currency: "CZK",
            minimumFractionDigits: 0,
          }).format(price)}
        </span>
      </div>
    </Link>
  )
}

export { ProductCard }
export type { ProductCardProps }
