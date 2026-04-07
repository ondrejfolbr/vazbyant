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
            <div className="flex items-center gap-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center text-neutral-white transition-opacity duration-300 hover:opacity-70"
              >
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none">
                  <path d="M19.543 0C23.65 0 26.987 3.32 26.987 7.405v12.034c0 4.086-3.337 7.405-7.444 7.405H7.444C3.337 26.855 0 23.525 0 19.44V7.405C0 3.32 3.337 0 7.444 0h12.099ZM7.456 2.387a5.03 5.03 0 0 0-5.056 5.03v12.034a5.03 5.03 0 0 0 5.056 5.03h12.098a5.03 5.03 0 0 0 5.056-5.03V7.405a5.03 5.03 0 0 0-5.056-5.03H7.456v.012ZM13.494 6.395a7.027 7.027 0 1 1 0 14.055 7.027 7.027 0 0 1 0-14.055Zm0 2.42a4.607 4.607 0 1 0 0 9.214 4.607 4.607 0 0 0 0-9.214Z" fill="currentColor"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center justify-center text-neutral-white transition-opacity duration-300 hover:opacity-70"
              >
                <svg width="11" height="22" viewBox="0 0 11 22" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.15 22V11.962h3.24l.484-3.909H7.14V5.556c0-1.136.3-1.903 1.867-1.903H11V.153A20.24 20.24 0 0 0 8.088 0C5.224 0 3.25 1.821 3.25 5.167v2.886H0v3.909h3.25V22h3.9Z" fill="currentColor"/>
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
