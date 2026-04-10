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
  // On mobile: show "… / parent / current" (last 2 items max)
  // On desktop: show full path
  const lastItem = items[items.length - 1]
  const parentItem = items.length >= 2 ? items[items.length - 2] : null

  return (
    <nav
      aria-label="Navigace"
      className={cn("mb-4 text-[length:var(--font-size-body-sm)] text-muted-foreground", className)}
    >
      {/* Mobile breadcrumb */}
      <ol className="flex items-center gap-2 md:hidden">
        {parentItem ? (
          <>
            <li className="flex items-center gap-2">
              <span aria-hidden="true">…</span>
              <span aria-hidden="true">/</span>
              {parentItem.href ? (
                <Link href={parentItem.href} className="transition-colors hover:text-foreground">
                  {parentItem.label}
                </Link>
              ) : (
                <span>{parentItem.label}</span>
              )}
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden="true">/</span>
              <span className="text-foreground">{lastItem?.label}</span>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/" className="transition-colors hover:text-foreground">
                Domů
              </Link>
            </li>
            {lastItem && (
              <li className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                <span className="text-foreground">{lastItem.label}</span>
              </li>
            )}
          </>
        )}
      </ol>

      {/* Desktop breadcrumb */}
      <ol className="hidden items-center gap-2 md:flex">
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
