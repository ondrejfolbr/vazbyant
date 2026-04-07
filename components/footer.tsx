import Link from "next/link"

import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"
import { footerNav } from "@/components/navbar/navbar.data"

interface FooterProps {
  className?: string
}

function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn("bg-deep-plum", className)}
    >
      <div className="mx-auto max-w-[var(--max-width-site)] px-[var(--spacing-section-x)] py-20 lg:py-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1fr_1fr]">
          {/* Column 1: Logo + social */}
          <div className="flex flex-col gap-8">
            <Link href="/" aria-label="Vazby Květin — domů">
              <Logo layout="stacked" variant="white" />
            </Link>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex size-10 items-center justify-center rounded-full border border-neutral-white/20 text-neutral-white transition-colors hover:border-neutral-white/40 hover:bg-neutral-white/10"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex size-10 items-center justify-center rounded-full border border-neutral-white/20 text-neutral-white transition-colors hover:border-neutral-white/40 hover:bg-neutral-white/10"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 1.09.07 1.373.14v3.32c-.149-.017-.408-.024-.732-.024-1.04 0-1.441.394-1.441 1.42v2.702h3.94l-.674 3.667h-3.266v8.168C19.396 23.21 24 18.13 24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.628 3.874 10.35 9.101 11.691Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-5">
            <span className="text-[length:var(--font-size-overline)] font-[30] uppercase tracking-widest text-neutral-white/40">
              Navigace
            </span>
            <nav className="flex flex-col gap-3">
              {footerNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[length:var(--font-size-body)] text-neutral-white/70 transition-colors hover:text-neutral-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col gap-5">
            <span className="text-[length:var(--font-size-overline)] font-[30] uppercase tracking-widest text-neutral-white/40">
              Kontakt
            </span>
            <div className="flex flex-col gap-3 text-[length:var(--font-size-body)] text-neutral-white/70">
              <p className="font-[30] text-neutral-white">VAZBY KVĚTIN s.r.o.</p>
              <address className="not-italic leading-relaxed">
                Mirošovická 704
                <br />
                251 64 Mnichovice
              </address>
              <p>
                Po–Pá: 7:00–15:30 hod.
                <br />
                Ne: 7:00–12:00 hod.
              </p>
              <a
                href="tel:+420604585271"
                className="transition-colors hover:text-neutral-white"
              >
                604 585 271
              </a>
              <a
                href="mailto:info@vazbykvetin.cz"
                className="transition-colors hover:text-neutral-white"
              >
                info@vazbykvetin.cz
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-white/10">
        <div className="mx-auto flex max-w-[var(--max-width-site)] flex-wrap items-center justify-between gap-4 px-[var(--spacing-section-x)] py-5">
          <div className="flex flex-wrap items-center gap-4 text-[length:var(--font-size-body-sm)] text-neutral-white/30">
            <span>Součást ekosystému PEGAS</span>
            <a
              href="https://pohrebpegas.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-neutral-white/60"
            >
              pohrebpegas.cz
            </a>
          </div>
          <span className="text-[length:var(--font-size-body-sm)] text-neutral-white/20">
            © {new Date().getFullYear()} Vazby květin
          </span>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
export type { FooterProps }
