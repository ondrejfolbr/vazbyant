"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"
import {
  megaMenuCategories,
  simpleLinks,
} from "@/components/navbar/navbar.data"
import type { MegaMenuCategory } from "@/components/navbar/navbar.data"
import { CartTrigger } from "@/components/cart/CartTrigger"
import { useProfileStore } from "@/store/profile-store"

function isActive(pathname: string, href: string) {
  const norm = (s: string) => s.replace(/\/+$/, "")
  return norm(pathname) === norm(href) || pathname.startsWith(norm(href) + "/")
}

function NavBar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null)
  const openProfile = useProfileStore((s) => s.openDrawer)
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
            ? "bg-background/95 backdrop-blur-sm"
            : "bg-background",
        )}
      >
        <div className="mx-auto flex h-16 max-w-[var(--max-width-site)] items-center justify-between px-[var(--spacing-section-x)]">
          {/* Logo */}
          <Link href="/" aria-label="Vazby Květin — domů" className="text-deep-plum">
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
                    "nav-link rounded-sm px-3 py-2 text-[length:var(--font-size-body)] font-[30] text-deep-plum-80 transition-colors duration-[var(--transition-fast)] hover:text-deep-plum",
                    activeMenu === cat.label && "text-deep-plum",
                    isActive(pathname, cat.href) && "text-deep-plum font-medium",
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
                className={cn(
                  "nav-link rounded-sm px-3 py-2 text-[length:var(--font-size-body)] font-[30] text-deep-plum-80 transition-colors duration-[var(--transition-fast)] hover:text-deep-plum",
                  isActive(pathname, link.href) && "text-deep-plum font-medium",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Utility nav */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => document.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }))}
              className="flex size-10 items-center justify-center rounded-sm text-deep-plum-80 transition-colors hover:bg-deep-plum-10 hover:text-deep-plum"
              aria-label="Vyhledávání (⌘K)"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
            <a
              href="tel:+420604585271"
              className="hidden text-[length:var(--font-size-body)] font-[40] text-foreground transition-colors hover:text-foreground/70 md:block"
            >
              +420 604 585 271
            </a>
            <CartTrigger />
            <button
              type="button"
              onClick={openProfile}
              className="flex size-10 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:bg-deep-plum-10 hover:text-foreground"
              aria-label="Přihlášení"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M20 21a8 8 0 0 0-16 0" />
              </svg>
            </button>

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
      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} pathname={pathname} />}

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
  const groups = category.groups ?? []
  const hasGroups = groups.length > 0

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
      <div className="mx-auto grid max-w-[var(--max-width-site)] grid-cols-[1fr_1fr_1fr_300px] gap-8 px-[var(--spacing-section-x)] py-8">
        {hasGroups ? (
          <>
            {groups.map((group, gi) => (
              <div key={group.heading || `group-${gi}`} className="flex flex-col gap-1">
                {group.heading ? (
                  <Link
                    href={group.href}
                    className="mb-2 text-[length:var(--font-size-body-sm)] font-bold text-deep-plum transition-colors hover:text-deep-plum-80"
                  >
                    {group.heading}
                  </Link>
                ) : (
                  <div className="mb-2 h-[var(--font-size-body-sm)] leading-[var(--font-size-body-sm)]">&nbsp;</div>
                )}
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-sm py-1.5 text-[length:var(--font-size-body-sm)] text-deep-plum-80 transition-colors hover:text-deep-plum"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
          </>
        ) : (
          <div className="col-span-3 grid grid-cols-3 gap-6">
            {category.subcategories.map((sub) => (
              <Link
                key={sub.href}
                href={sub.href}
                className="rounded-sm px-3 py-2 text-[length:var(--font-size-body-sm)] text-deep-plum-80 transition-colors hover:bg-deep-plum-10 hover:text-deep-plum"
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
        )}

        {/* Featured product */}
        {category.featured && (
          <Link
            href={category.featured.href}
            className="group flex flex-col gap-3 overflow-hidden rounded-sm"
          >
            <div className="relative aspect-square overflow-hidden rounded-sm">
              <Image
                src={category.featured.image}
                alt={category.featured.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="300px"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[length:var(--font-size-body-sm)] text-foreground transition-colors group-hover:text-deep-plum">
                {category.featured.title}
              </span>
              <span className="text-[length:var(--font-size-body-sm)] text-muted-foreground">
                {category.featured.price}
              </span>
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}

function MobileMenu({ onClose, pathname }: { onClose: () => void; pathname: string }) {
  return (
    <div className="fixed inset-0 z-40 flex flex-col bg-background pt-16">
      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 py-6">
        {megaMenuCategories.map((cat) => {
          const groups = cat.groups ?? []
          const hasGroups = groups.length > 0

          return (
            <div key={cat.label} className="flex flex-col">
              <span className="py-3 font-heading text-[length:var(--font-size-h3)] font-[40] text-foreground">
                {cat.label}
              </span>
              {hasGroups ? (
                <div className="flex flex-col gap-1 pb-4 pl-4">
                  {groups.map((group, gi) => (
                    <div key={group.heading || `m-group-${gi}`} className="flex flex-col gap-1">
                      {group.heading && (
                        <Link
                          href={group.href}
                          onClick={onClose}
                          className="py-1.5 text-[length:var(--font-size-body)] font-[30] text-deep-plum-80 transition-colors hover:text-deep-plum"
                        >
                          {group.heading}
                        </Link>
                      )}
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={onClose}
                          className="py-1 pl-3 text-[length:var(--font-size-body-sm)] text-deep-plum-80 transition-colors hover:text-deep-plum"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col gap-1 pb-4 pl-4">
                  {cat.subcategories.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={onClose}
                      className="py-1.5 text-[length:var(--font-size-body)] text-deep-plum-80 transition-colors hover:text-deep-plum"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )
        })}
        {simpleLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={onClose}
            className={cn(
              "py-3 font-heading text-[length:var(--font-size-h3)] font-[40] text-deep-plum-80 transition-colors hover:text-deep-plum",
              isActive(pathname, link.href) && "text-deep-plum",
            )}
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
