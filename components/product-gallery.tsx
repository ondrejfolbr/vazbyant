"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

interface ProductGalleryProps {
  images: string[]
  alt: string
}

export function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % images.length)
  }, [images.length])

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    function handleGallerySelect(e: Event) {
      const index = (e as CustomEvent<number>).detail
      if (index >= 0 && index < images.length) {
        setActiveIndex(index)
      }
    }
    window.addEventListener("gallery-select", handleGallerySelect)
    return () =>
      window.removeEventListener("gallery-select", handleGallerySelect)
  }, [images.length])

  const closeBtnRef = useCallback(
    (node: HTMLButtonElement | null) => {
      if (node && lightboxOpen) node.focus()
    },
    [lightboxOpen],
  )

  useEffect(() => {
    if (!lightboxOpen) return
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxOpen(false)
      if (e.key === "ArrowRight") goNext()
      if (e.key === "ArrowLeft") goPrev()
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKey)
    }
  }, [lightboxOpen, goNext, goPrev])

  if (images.length === 0) {
    return (
      <div className="flex aspect-[4/3] items-center justify-center bg-plum-10">
        <span className="text-[length:var(--font-size-body)] text-plum-50">
          Foto produktu
        </span>
      </div>
    )
  }

  return (
    <>
      <div>
        {/* Main image — click to open lightbox */}
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="relative block w-full cursor-zoom-in overflow-hidden bg-plum-10 aspect-[4/3]"
          aria-label="Otevřít galerii"
        >
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
        </button>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="mt-3 grid grid-cols-4 gap-3">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`Zobrazit foto ${i + 1}`}
                aria-current={i === activeIndex ? "true" : undefined}
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

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-black/90"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Galerie obrázků"
        >
          {/* Close button */}
          <button
            ref={closeBtnRef}
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 z-10 flex size-10 items-center justify-center text-neutral-white/80 transition-colors hover:text-neutral-white"
            aria-label="Zavřít galerii"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Previous */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                goPrev()
              }}
              className="absolute left-4 z-10 flex size-12 items-center justify-center rounded-full bg-neutral-white/10 text-neutral-white/80 transition-colors hover:bg-neutral-white/20 hover:text-neutral-white"
              aria-label="Předchozí obrázek"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12.5 15L7.5 10L12.5 5" />
              </svg>
            </button>
          )}

          {/* Image */}
          <div
            className="relative h-[85vh] w-[85vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[activeIndex]}
              alt={activeIndex === 0 ? alt : `${alt} — foto ${activeIndex + 1}`}
              fill
              className="object-contain"
              sizes="85vw"
              priority
            />
          </div>

          {/* Next */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                goNext()
              }}
              className="absolute right-4 z-10 flex size-12 items-center justify-center rounded-full bg-neutral-white/10 text-neutral-white/80 transition-colors hover:bg-neutral-white/20 hover:text-neutral-white"
              aria-label="Další obrázek"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7.5 5L12.5 10L7.5 15" />
              </svg>
            </button>
          )}

          {/* Counter */}
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[length:var(--font-size-body-sm)] text-neutral-white/60">
            {activeIndex + 1} / {images.length}
          </span>
        </div>
      )}
    </>
  )
}
