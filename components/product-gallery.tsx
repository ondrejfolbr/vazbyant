"use client"

import { useState } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

interface ProductGalleryProps {
  images: string[]
  alt: string
}

export function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  if (images.length === 0) {
    return (
      <div className="flex aspect-[4/5] items-center justify-center bg-plum-10">
        <span className="text-[length:var(--font-size-body)] text-plum-50">
          Foto produktu
        </span>
      </div>
    )
  }

  return (
    <div>
      {/* Main image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-plum-10">
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={i === 0 ? alt : `${alt} — foto ${i + 1}`}
            fill
            className={cn(
              "object-cover transition-opacity duration-300 ease-out",
              i === activeIndex ? "opacity-100" : "opacity-0",
            )}
            sizes="(min-width: 1024px) 58vw, 100vw"
            priority={i === 0}
          />
        ))}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-3">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={cn(
                "relative aspect-square overflow-hidden transition-opacity",
                i === activeIndex
                  ? "border-2 border-deep-plum opacity-100"
                  : "border border-border opacity-60 hover:opacity-80",
              )}
            >
              <Image
                src={src}
                alt={`${alt} — náhled ${i + 1}`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 14vw, 25vw"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
