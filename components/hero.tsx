import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface HeroProps {
  heading: string
  subheading?: string
  ctaText?: string
  ctaHref?: string
  variant?: "full" | "sub"
  className?: string
}

function Hero({
  heading,
  subheading,
  ctaText,
  ctaHref,
  variant = "full",
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative flex items-end overflow-hidden",
        variant === "full" ? "min-h-screen" : "min-h-[60vh]",
        className,
      )}
    >
      {/* Image placeholder */}
      <div className="absolute inset-0 bg-deep-plum-80">
        <div className="flex h-full items-center justify-center text-[length:var(--font-size-body)] text-deep-plum-70">
          Hero fotografie
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% to-neutral-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[var(--max-width-site)] flex-col gap-5 px-[var(--spacing-section-x)] pb-[var(--spacing-section-y)]">
        <h1 className="hero-stagger hero-stagger-1 max-w-3xl font-heading text-[length:var(--font-size-display)] leading-snug font-[40] text-neutral-white">
          {heading}
        </h1>
        {subheading && (
          <p className="hero-stagger hero-stagger-2 max-w-xl text-[length:var(--font-size-body-lg)] leading-relaxed text-neutral-white">
            {subheading}
          </p>
        )}
        {ctaText && ctaHref && (
          <div className="hero-stagger hero-stagger-3 mt-2">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-neutral-white/40 text-neutral-white hover:border-plum-30 hover:bg-neutral-white/10 hover:text-neutral-white"
            >
              <Link href={ctaHref}>{ctaText}</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

export { Hero }
export type { HeroProps }
