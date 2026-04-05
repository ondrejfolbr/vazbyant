"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"
import {
  megaMenuCategories,
  simpleLinks,
} from "@/components/navbar/navbar.data"
import type { MegaMenuCategory } from "@/components/navbar/navbar.data"

function NavBar() {
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null)
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  const megaMenuOpen = activeMenu !== null

  React.useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  function handleEnter(label: string) {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    setActiveMenu(label)
  }

  function handleLeave() {
    closeTimer.current = setTimeout(() => {
      setActiveMenu(null)
    }, 150)
  }

  return (
    <>
      {/* Backdrop blur overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 transition-all duration-500 ease-[var(--ease-default)]",
          megaMenuOpen
            ? "pointer-events-auto bg-neutral-black/20 backdrop-blur-sm"
            : "pointer-events-none bg-transparent backdrop-blur-none",
        )}
        aria-hidden="true"
        onMouseEnter={handleLeave}
      />

      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-[var(--transition-base)]",
          scrolled
            ? "bg-background/95 shadow-[var(--shadow-sm)] backdrop-blur-sm"
            : "bg-background",
        )}
      >
        <div className="mx-auto flex h-16 max-w-[var(--max-width-site)] items-center justify-between px-[var(--spacing-section-x)]">
          {/* Logo */}
          <Link href="/" aria-label="Vazby Květin — domů">
            <Logo className="h-5" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" role="navigation">
            {megaMenuCategories.map((cat) => (
              <div
                key={cat.label}
                onMouseEnter={() => handleEnter(cat.label)}
                onMouseLeave={handleLeave}
              >
                <Link
                  href={cat.href}
                  className={cn(
                    "nav-link rounded-sm px-3 py-2 text-[length:var(--font-size-body)] font-[30] text-muted-foreground transition-colors duration-[var(--transition-fast)] hover:text-foreground",
                    activeMenu === cat.label && "text-foreground",
                  )}
                >
                  {cat.label}
                </Link>
              </div>
            ))}
            {simpleLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="nav-link rounded-sm px-3 py-2 text-[length:var(--font-size-body)] font-[30] text-muted-foreground transition-colors duration-[var(--transition-fast)] hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Utility nav */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+420604585271"
              className="hidden text-[length:var(--font-size-body-sm)] text-muted-foreground transition-colors hover:text-foreground md:block"
            >
              604 585 271
            </a>
            <Link
              href="/kosik/"
              className="relative flex size-10 items-center justify-center rounded-sm text-foreground transition-colors hover:bg-deep-plum-10"
              aria-label="Košík"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 6h12l-1.5 7H7.5L6 6Z" />
                <path d="M6 6 5 2H2" />
                <circle cx="9" cy="17" r="1" />
                <circle cx="15" cy="17" r="1" />
              </svg>
              <span className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-deep-plum text-[10px] font-[30] text-neutral-white">
                0
              </span>
            </Link>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex size-10 items-center justify-center rounded-sm text-foreground transition-colors hover:bg-deep-plum-10 lg:hidden"
              aria-label={mobileOpen ? "Zavřít menu" : "Otevřít menu"}
              aria-expanded={mobileOpen}
            >
              <div className="flex w-5 flex-col gap-1.5">
                <span
                  className={cn(
                    "h-px w-full bg-current transition-all duration-[var(--transition-fast)]",
                    mobileOpen && "translate-y-[3.5px] rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "h-px w-full bg-current transition-all duration-[var(--transition-fast)]",
                    mobileOpen && "-translate-y-[3.5px] -rotate-45",
                  )}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mega menu dropdown */}
        {megaMenuCategories.map((cat) => (
          <MegaMenuPanel
            key={cat.label}
            category={cat}
            open={activeMenu === cat.label}
            onEnter={() => handleEnter(cat.label)}
            onLeave={handleLeave}
          />
        ))}
      </header>

      {/* Mobile overlay */}
      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}

      {/* Spacer for fixed header */}
      <div className="h-16" />
    </>
  )
}

function MegaMenuPanel({
  category,
  open,
  onEnter,
  onLeave,
}: {
  category: MegaMenuCategory
  open: boolean
  onEnter: () => void
  onLeave: () => void
}) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={cn(
        "absolute right-0 left-0 border-t border-border bg-background transition-all duration-300 ease-[var(--ease-default)]",
        open
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-2 opacity-0",
      )}
    >
      <div className="mx-auto grid max-w-[var(--max-width-site)] grid-cols-[1fr_1fr_1fr_1fr_300px] gap-8 px-[var(--spacing-section-x)] py-8">
        {/* Subcategory links */}
        <div className="col-span-3 grid grid-cols-3 gap-6">
          {category.subcategories.map((sub) => (
            <Link
              key={sub.href}
              href={sub.href}
              className="rounded-sm px-3 py-2 text-[length:var(--font-size-body-sm)] text-muted-foreground transition-colors hover:bg-deep-plum-10 hover:text-deep-plum"
            >
              {sub.label}
            </Link>
          ))}
          {category.cta && (
            <Link
              href={category.cta.href}
              className="mt-2 inline-flex items-center rounded-sm border border-deep-plum px-4 py-2 text-[length:var(--font-size-body)] font-[30] text-deep-plum transition-colors hover:bg-deep-plum-10"
            >
              {category.cta.label}
            </Link>
          )}
        </div>

        {/* Featured image placeholder */}
        <div className="col-span-1 flex items-center justify-center rounded-sm bg-plum-10">
          <span className="text-[length:var(--font-size-caption)] text-plum-50">
            Foto
          </span>
        </div>
      </div>
    </div>
  )
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-40 flex flex-col bg-background pt-16">
      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 py-6">
        {megaMenuCategories.map((cat) => (
          <div key={cat.label} className="flex flex-col">
            <Link
              href={cat.href}
              onClick={onClose}
              className="py-3 font-heading text-[length:var(--font-size-h3)] font-[40] text-foreground"
            >
              {cat.label}
            </Link>
            <div className="flex flex-col gap-1 pb-4 pl-4">
              {cat.subcategories.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  onClick={onClose}
                  className="py-1.5 text-[length:var(--font-size-body)] text-muted-foreground transition-colors hover:text-deep-plum"
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
        {simpleLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={onClose}
            className="py-3 font-heading text-[length:var(--font-size-h3)] font-[40] text-foreground"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="border-t border-border px-6 py-4">
        <a
          href="tel:+420604585271"
          className="text-[length:var(--font-size-body-sm)] text-muted-foreground"
        >
          604 585 271
        </a>
      </div>
    </div>
  )
}

export { NavBar }
