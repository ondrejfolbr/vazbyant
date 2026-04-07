"use client"

import Image from "next/image"
import { useEffect, useState, useCallback } from "react"

import { cn } from "@/lib/utils"

interface HeroSlideshowProps {
  images: string[]
  interval?: number
}

function HeroSlideshow({ images, interval = 6000 }: HeroSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const advance = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(advance, interval)
    return () => clearInterval(timer)
  }, [advance, interval, images.length])

  return (
    <div className="absolute inset-0">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={i === 0}
          className={cn(
            "object-cover transition-opacity duration-[1500ms] ease-in-out",
            i === activeIndex ? "opacity-100" : "opacity-0",
          )}
          sizes="100vw"
        />
      ))}

      {/* Slide indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Slide ${i + 1}`}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === activeIndex
                  ? "w-8 bg-neutral-white"
                  : "w-1.5 bg-neutral-white/40 hover:bg-neutral-white/60",
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export { HeroSlideshow }
