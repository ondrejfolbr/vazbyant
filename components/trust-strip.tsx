import { cn } from "@/lib/utils"

interface TrustStripProps {
  text: string
  linkText?: string
  linkHref?: string
  className?: string
}

function TrustStrip({ text, linkText, linkHref, className }: TrustStripProps) {
  return (
    <section
      className={cn(
        "border-y border-border bg-deep-plum-10 py-6",
        className,
      )}
    >
      <div className="mx-auto flex max-w-[var(--max-width-site)] flex-wrap items-center justify-center gap-3 px-[var(--spacing-section-x)] text-center">
        {/* Logo placeholder */}
        <div className="flex size-8 items-center justify-center rounded-full bg-deep-plum text-[10px] font-medium text-neutral-white">
          P
        </div>
        <span className="text-[length:var(--font-size-body-sm)] text-muted-foreground">
          {text}
        </span>
        {linkText && linkHref && (
          <a
            href={linkHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[length:var(--font-size-body-sm)] font-medium text-deep-plum underline underline-offset-2 transition-colors hover:text-deep-plum-90"
          >
            {linkText}
          </a>
        )}
      </div>
    </section>
  )
}

export { TrustStrip }
export type { TrustStripProps }
