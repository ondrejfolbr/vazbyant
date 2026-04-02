import Link from "next/link"

import { cn } from "@/lib/utils"

interface CategoryCardProps {
  title: string
  subtitle: string
  href: string
  className?: string
}

function CategoryCard({
  title,
  subtitle,
  href,
  className,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block aspect-[3/4] overflow-hidden rounded-sm",
        className,
      )}
    >
      {/* Image placeholder */}
      <div className="absolute inset-0 bg-deep-plum-80 transition-transform duration-[var(--transition-base)] group-hover:scale-[1.03]">
        <div className="flex h-full items-center justify-center text-[length:var(--font-size-body-sm)] text-deep-plum-70">
          Foto kategorie
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-neutral-black/70" />

      {/* Text content */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-6 transition-transform duration-[var(--transition-base)] group-hover:-translate-y-2">
        <h3 className="font-heading text-[length:var(--font-size-h3)] leading-snug font-[50] text-neutral-white">
          {title}
        </h3>
        <p className="text-[length:var(--font-size-body-sm)] text-plum-30">
          {subtitle}
        </p>
      </div>
    </Link>
  )
}

export { CategoryCard }
export type { CategoryCardProps }
