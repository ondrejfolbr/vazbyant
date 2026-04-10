"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

interface ImageSliderProps {
  images: Array<{ src: string; alt: string }>
  aspectRatio?: string
  interval?: number
  className?: string
}

function ImageSlider({
  images,
  aspectRatio = "aspect-square",
  interval = 4000,
  className,
}: ImageSliderProps) {
  const [active, setActive] = useState(0)

  const next = useCallback(() => {
    setActive((i) => (i + 1) % images.length)
  }, [images.length])

  const prev = useCallback(() => {
    setActive((i) => (i - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    const timer = setInterval(next, interval)
    return () => clearInterval(timer)
  }, [next, interval])

  if (images.length === 0) return null

  return (
    <div className={cn("relative overflow-hidden rounded-sm", aspectRatio, className)}>
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          className={cn(
            "object-cover transition-opacity duration-500 ease-out",
            i === active ? "opacity-100" : "opacity-0",
          )}
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority={i === 0}
        />
      ))}

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-black/30 text-neutral-white transition-colors hover:bg-neutral-black/50"
            aria-label="Předchozí"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-3 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-black/30 text-neutral-white transition-colors hover:bg-neutral-black/50"
            aria-label="Další"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === active ? "w-4 bg-neutral-white" : "w-1.5 bg-neutral-white/50",
              )}
              aria-label={`Obrázek ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export { ImageSlider }
