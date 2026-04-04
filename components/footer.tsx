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
      className={cn("border-t border-border bg-deep-plum-10", className)}
    >
      <div className="mx-auto max-w-[var(--max-width-site)] px-[var(--spacing-section-x)] py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Column 1: Logo + claim + social */}
          <div className="flex flex-col gap-5">
            <Link href="/" aria-label="Vazby Květin — domů">
              <Logo className="h-4" />
            </Link>
            <p className="max-w-xs text-[length:var(--font-size-body-sm)] leading-relaxed text-muted-foreground">
              Vazby mezi lidmi, které nekončí.
            </p>
            {/* Social icons placeholder */}
            <div className="flex gap-3">
              {["Fb", "Ig", "Li"].map((icon) => (
                <div
                  key={icon}
                  className="flex size-9 items-center justify-center rounded-sm border border-deep-plum-80/30 text-[length:var(--font-size-caption)] font-[30] text-foreground transition-colors hover:border-deep-plum hover:bg-deep-plum hover:text-neutral-white"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-4">
            <span className="text-[length:var(--font-size-overline)] font-[40] uppercase tracking-widest text-foreground">
              Navigace
            </span>
            <nav className="flex flex-col gap-2.5">
              {footerNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[length:var(--font-size-body-sm)] text-muted-foreground transition-colors hover:text-deep-plum"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col gap-4">
            <span className="text-[length:var(--font-size-overline)] font-[40] uppercase tracking-widest text-foreground">
              Kontakt
            </span>
            <div className="flex flex-col gap-2.5 text-[length:var(--font-size-body-sm)] text-muted-foreground">
              <address className="not-italic leading-relaxed">
                Ulice 123
                <br />
                110 00 Praha 1
              </address>
              <a
                href="tel:+420000000000"
                className="transition-colors hover:text-deep-plum"
              >
                +420 XXX XXX XXX
              </a>
              <a
                href="mailto:info@vazbykvetin.cz"
                className="transition-colors hover:text-deep-plum"
              >
                info@vazbykvetin.cz
              </a>
              <p className="text-foreground">Po–Pá 8:00–18:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-deep-plum/10">
        <div className="mx-auto flex max-w-[var(--max-width-site)] flex-wrap items-center justify-between gap-4 px-[var(--spacing-section-x)] py-4">
          <div className="flex flex-wrap items-center gap-2 text-[length:var(--font-size-caption)] text-muted-foreground">
            <span>Součást ekosystému PEGAS</span>
            <span className="text-border">·</span>
            <a
              href="https://pohrebpegas.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-deep-plum"
            >
              pohrebpegas.cz
            </a>
          </div>
          <span className="text-[length:var(--font-size-caption)] text-muted-foreground/60">
            © {new Date().getFullYear()} Vazby květin
          </span>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
export type { FooterProps }
