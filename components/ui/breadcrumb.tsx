import Link from "next/link"
import { cn } from "@/lib/utils"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Navigace"
      className={cn("mb-4 text-[length:var(--font-size-body-sm)] text-muted-foreground", className)}
    >
      <ol className="flex items-center gap-2">
        <li>
          <Link href="/" className="transition-colors hover:text-foreground">
            Domů
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {item.href ? (
              <Link
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export { Breadcrumb }
export type { BreadcrumbItem }
