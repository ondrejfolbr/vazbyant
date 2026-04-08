import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

interface HeroCategoryItem {
  title: string
  href: string
}

interface HeroSplitProps {
  headingLine1: string
  headingLine2: string
  subheading?: string
  categories: HeroCategoryItem[]
  className?: string
}

function HeroSplit({
  headingLine1,
  headingLine2,
  subheading,
  categories,
  className,
}: HeroSplitProps) {
  return (
    <section
      className={cn(
        "bg-neutral-white",
        className,
      )}
    >
      <div className="lg:flex lg:max-h-[1000px] lg:items-center lg:py-[100px]">
        {/* Left — Mammoth 35%, pinned to left edge */}
        <div className="flex items-center justify-start px-[var(--spacing-section-x)] py-10 lg:w-[35%] lg:shrink-0 lg:px-0 lg:py-0">
          <Image
            src="/mamut.png"
            alt=""
            width={760}
            height={900}
            className="h-auto max-h-[700px] w-full object-contain object-left"
            priority
          />
        </div>

        {/* Right — Heading, subheading, 3 cards — 65% */}
        <div className="flex min-w-0 flex-1 flex-col gap-8 px-[var(--spacing-section-x)] pb-12 lg:pl-4 lg:pr-[var(--spacing-section-x)] lg:pb-0">
          {/* Heading — two lines */}
          <div className="flex flex-col gap-4">
            <h1 className="font-heading text-[length:var(--font-size-display)] leading-snug font-[40] text-foreground">
              {headingLine1}
              <br />
              {headingLine2}
            </h1>
            {subheading && (
              <p className="max-w-lg text-[length:var(--font-size-body-lg)] leading-relaxed text-muted-foreground">
                {subheading}
              </p>
            )}
          </div>

          {/* 3 Category cards — static, no slider */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group relative block h-[300px] overflow-hidden bg-neutral-100 transition-all duration-[var(--transition-base)] hover:shadow-[var(--shadow-md)]"
              >
                <div className="flex h-full items-center justify-center text-[length:var(--font-size-caption)] text-neutral-400">
                  Foto kategorie
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-black/50 to-transparent p-4 pt-8">
                  <h3 className="font-heading text-[length:var(--font-size-body)] leading-snug font-[40] text-neutral-white">
                    {cat.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { HeroSplit }
export type { HeroSplitProps, HeroCategoryItem }
