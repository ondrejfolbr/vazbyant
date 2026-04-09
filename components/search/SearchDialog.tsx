"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

import { products } from "@/lib/products.data"
import type { Product } from "@/lib/products.data"

function formatPrice(price: number): string {
  return new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
    minimumFractionDigits: 0,
  }).format(price)
}

function searchProducts(query: string): Product[] {
  if (!query.trim()) return []
  const q = query.toLowerCase()
  return products
    .filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.composition.toLowerCase().includes(q),
    )
    .slice(0, 8)
}

function SearchDialog() {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")
  const [activeIndex, setActiveIndex] = React.useState(0)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const results = searchProducts(query)

  // Keyboard shortcut: Cmd+K / Ctrl+K
  React.useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setOpen(true)
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Focus input when dialog opens
  React.useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus())
    } else {
      setQuery("")
      setActiveIndex(0)
    }
  }, [open])

  // Reset active index on query change
  React.useEffect(() => {
    setActiveIndex(0)
  }, [query])

  function handleSelect(product: Product) {
    setOpen(false)
    router.push(`/${product.category}/${product.slug}/`)
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, results.length - 1))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === "Enter" && results[activeIndex]) {
      e.preventDefault()
      handleSelect(results[activeIndex])
    } else if (e.key === "Escape") {
      setOpen(false)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center pt-[15vh]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-neutral-black/40 backdrop-blur-sm"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Dialog */}
      <div
        role="dialog"
        aria-label="Vyhledávání"
        className="relative w-full max-w-lg rounded-sm border border-border bg-background shadow-2xl"
      >
        {/* Search input */}
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0 text-muted-foreground"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Hledat produkty..."
            className="flex-1 bg-transparent text-[length:var(--font-size-body)] text-foreground placeholder:text-muted-foreground/60 outline-none"
          />
          <kbd className="rounded bg-muted px-2 py-0.5 text-[length:var(--font-size-caption)] text-muted-foreground">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto p-2">
          {query.trim() === "" ? (
            <p className="px-3 py-6 text-center text-[length:var(--font-size-body-sm)] text-muted-foreground">
              Zadejte hledaný výraz
            </p>
          ) : results.length === 0 ? (
            <p className="px-3 py-6 text-center text-[length:var(--font-size-body-sm)] text-muted-foreground">
              Žádné výsledky pro &ldquo;{query}&rdquo;
            </p>
          ) : (
            <ul role="listbox">
              {results.map((product, i) => (
                <li
                  key={product.id}
                  role="option"
                  aria-selected={i === activeIndex}
                  onClick={() => handleSelect(product)}
                  onMouseEnter={() => setActiveIndex(i)}
                  className={`flex cursor-pointer items-center gap-3 rounded-sm px-3 py-2.5 transition-colors ${
                    i === activeIndex
                      ? "bg-deep-plum-10"
                      : "hover:bg-muted/50"
                  }`}
                >
                  <div className="relative size-10 shrink-0 overflow-hidden rounded-sm bg-muted">
                    {product.image && (
                      <Image
                        src={product.image}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[length:var(--font-size-body-sm)] font-[30] text-foreground">
                      {product.name}
                    </p>
                    <p className="text-[length:var(--font-size-caption)] text-muted-foreground">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer hint */}
        {results.length > 0 && (
          <div className="border-t border-border px-4 py-2 text-center text-[length:var(--font-size-caption)] text-muted-foreground">
            ↑↓ navigace · Enter vybrat
          </div>
        )}
      </div>
    </div>
  )
}

export { SearchDialog }
