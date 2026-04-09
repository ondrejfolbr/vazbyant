"use client"

import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

interface ProductCardProps {
  image?: string | null
  title: string
  price: number
  badge?: string | null
  slug: string
  category: string
  className?: string
}

function ProductCard({
  image,
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
      className={cn(
        "group relative flex flex-col",
        className,
      )}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden rounded-sm bg-neutral-200 dark:bg-neutral-800">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="card-image object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.02]"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          />
        ) : (
          <div className="card-image flex h-full items-center justify-center text-[length:var(--font-size-caption)] text-neutral-400">
            Foto produktu
          </div>
        )}

        {badge && (
          <span className="absolute top-3 left-3 rounded-sm bg-deep-plum px-2.5 py-1 text-[length:var(--font-size-caption)] font-[30] text-neutral-white">
            {badge}
          </span>
        )}

        {/* Hover overlay */}
        <div className="card-overlay absolute inset-0 flex items-end justify-center pb-5">
          <span className="card-cta rounded-sm bg-neutral-white px-4 py-2.5 text-[length:var(--font-size-body-sm)] font-[30] text-deep-plum">
            Detail produktu
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="mt-3 flex flex-col gap-1">
        <h4 className="font-heading text-[length:var(--font-size-h4)] leading-snug text-foreground">
          {title}
        </h4>
        <span className="font-sans text-[length:var(--font-size-body)] font-[30] text-muted-foreground">
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
