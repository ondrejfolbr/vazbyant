"use client"

import Image from "next/image"
import { useEffect, useState, useCallback } from "react"

import { cn } from "@/lib/utils"

const VIDEO_EXTENSIONS = [".mp4", ".webm", ".mov"]

function isVideo(src: string): boolean {
  return VIDEO_EXTENSIONS.some((ext) => src.toLowerCase().endsWith(ext))
}

/** Derive a poster JPG path from a video path (e.g. /hero.mp4 → /hero.jpg) */
function videoPoster(src: string): string {
  return src.replace(/\.[^.]+$/, ".jpg")
}

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

  const prev = useCallback(() => {
    setActiveIndex((p) => (p - 1 + images.length) % images.length)
  }, [images.length])

  return (
    <div className="absolute inset-0">
      {images.map((src, i) =>
        isVideo(src) ? (
          <video
            key={src}
            autoPlay
            muted
            loop
            playsInline
            poster={videoPoster(src)}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-in-out",
              i === activeIndex ? "opacity-100" : "opacity-0",
            )}
          >
            <source src={src} type={`video/${src.split(".").pop()}`} />
          </video>
        ) : (
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
        ),
      )}

      {/* Click zones: left = prev, right = next */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute inset-y-0 left-0 z-10 w-1/3 cursor-w-resize"
            aria-label="Předchozí fotografie"
          />
          <button
            type="button"
            onClick={advance}
            className="absolute inset-y-0 right-0 z-10 w-1/3 cursor-e-resize"
            aria-label="Další fotografie"
          />
        </>
      )}

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
