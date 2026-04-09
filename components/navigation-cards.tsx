import Link from "next/link"

const navCards = [
  { label: "Smuteční květiny", href: "/smutecni/", subtitle: "květiny" },
  { label: "Svatební květiny", href: "/svatebni/", subtitle: "květiny" },
  { label: "Kytice", href: "/kytice/", subtitle: "& dárky" },
] as const

export function NavigationCards() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {navCards.map((card) => (
        <Link
          key={card.href}
          href={card.href}
          className="group border border-border p-5 text-center transition-colors hover:border-deep-plum-80"
        >
          <span className="block text-[length:var(--font-size-caption)] font-[30] tracking-[var(--letter-spacing-wide)] text-deep-plum uppercase transition-colors group-hover:text-deep-plum-80">
            {card.label}
          </span>
          <span className="mt-1 block text-[length:var(--font-size-caption)] text-muted-foreground">
            {card.subtitle}
          </span>
        </Link>
      ))}
    </div>
  )
}
