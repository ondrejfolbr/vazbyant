import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  overline?: string
  heading: string
  body?: string
  alignment?: "left" | "center"
  className?: string
}

function SectionHeading({
  overline,
  heading,
  body,
  alignment = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        alignment === "center" && "items-center text-center",
        className,
      )}
    >
      {overline && (
        <span className="text-[length:var(--font-size-overline)] font-medium uppercase tracking-widest text-plum-50">
          {overline}
        </span>
      )}
      <h2 className="font-heading text-[length:var(--font-size-h2)] leading-tight font-semibold text-foreground">
        {heading}
      </h2>
      {body && (
        <p
          className={cn(
            "text-[length:var(--font-size-body-lg)] leading-relaxed text-muted-foreground",
            alignment === "center" ? "max-w-2xl" : "max-w-xl",
          )}
        >
          {body}
        </p>
      )}
    </div>
  )
}

export { SectionHeading }
export type { SectionHeadingProps }
