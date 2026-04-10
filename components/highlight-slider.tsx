"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useCallback, useEffect } from "react"

import { cn } from "@/lib/utils"

interface HighlightSlide {
  heading: string
  body?: string
  ctaText: string
  ctaHref: string
  image: string
}

interface HighlightSliderProps {
  slides: HighlightSlide[]
  interval?: number
}

function HighlightSlider({ slides, interval = 6000 }: HighlightSliderProps) {
  const [active, setActive] = useState(0)

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  useEffect(() => {
    if (slides.length <= 1) return
    const timer = setInterval(next, interval)
    return () => clearInterval(timer)
  }, [next, interval, slides.length])

  return (
    <section className="py-[var(--spacing-section-y)]">
      <div className="relative mx-auto max-w-[var(--max-width-site)] px-[var(--spacing-section-x)]">
        {/* Arrows — outside slider, PEGAS style */}
        {slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Předchozí"
              className="absolute top-1/2 left-0 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-md text-foreground transition-opacity duration-300 hover:opacity-70 lg:left-2"
            >
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 5l-8 8 8 8" />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Další"
              className="absolute top-1/2 right-0 z-10 flex size-8 -translate-y-1/2 items-center justify-center rounded-md text-foreground transition-opacity duration-300 hover:opacity-70 lg:right-2"
            >
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 5l8 8-8 8" />
              </svg>
            </button>
          </>
        )}

        {/* Slide container */}
        <div className="overflow-hidden rounded-sm">
          <div
            className="flex transition-transform duration-700 ease-[var(--ease-default)]"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className="grid w-full flex-shrink-0 grid-cols-1 lg:grid-cols-2"
              >
                {/* Text panel */}
                <div className="flex items-center bg-deep-plum px-10 py-16 lg:px-16 lg:py-24">
                  <div className="flex flex-col gap-6">
                    <h3 className="max-w-sm font-heading text-[length:var(--font-size-h2)] leading-snug font-[40] text-neutral-white">
                      {slide.heading}
                    </h3>
                    {slide.body && (
                      <p className="max-w-sm text-[length:var(--font-size-body)] leading-relaxed text-neutral-white/70">
                        {slide.body}
                      </p>
                    )}
                    <Link
                      href={slide.ctaHref}
                      className="group inline-flex items-center gap-3 text-[length:var(--font-size-body)] text-neutral-white/70 transition-colors hover:text-neutral-white"
                    >
                      {slide.ctaText}
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform group-hover:translate-x-1"
                      >
                        <path d="M4 10h12M12 5l5 5-5 5" />
                      </svg>
                    </Link>
                  </div>
                </div>
                {/* Image panel */}
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <Image
                    src={slide.image}
                    alt={slide.heading}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots — round, PEGAS style */}
        {slides.length > 1 && (
          <div className="mt-8 flex justify-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Slide ${i + 1}`}
                className={cn(
                  "size-3 rounded-full transition-all duration-300",
                  i === active
                    ? "bg-deep-plum scale-110"
                    : "bg-neutral-300 hover:bg-neutral-400",
                )}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export { HighlightSlider }
