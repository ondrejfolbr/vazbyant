import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

interface CategoryCardProps {
  title: string
  subtitle: string
  href: string
  image?: string
  className?: string
}

function CategoryCard({
  title,
  subtitle,
  href,
  image,
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
      {/* Image */}
      {image ? (
        <Image
          src={image}
          alt={title}
          fill
          className="card-image object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.02]"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
      ) : (
        <div className="card-image absolute inset-0 bg-deep-plum-80">
          <div className="flex h-full items-center justify-center text-[length:var(--font-size-body-sm)] text-deep-plum-70">
            Foto kategorie
          </div>
        </div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-neutral-black/70" />

      {/* Text content */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-6">
        <h3 className="font-heading text-[length:var(--font-size-h2)] leading-snug font-[40] text-neutral-white">
          {title}
        </h3>
        <p className="text-[length:var(--font-size-body)] text-neutral-white/80">
          {subtitle}
        </p>
        <span className="card-cta mt-2 self-start border-b border-neutral-white/40 pb-0.5 text-[length:var(--font-size-body)] font-[30] text-neutral-white">
          Prohlédnout
        </span>
      </div>
    </Link>
  )
}

export { CategoryCard }
export type { CategoryCardProps }
