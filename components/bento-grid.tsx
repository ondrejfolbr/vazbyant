import { cn } from "@/lib/utils"

interface BentoColumn {
  title: string
  body?: string
  imageLabel: string
  imageFirst?: boolean
}

interface BentoGridProps {
  columns: BentoColumn[]
  className?: string
}

function BentoTextBlock({ title, body }: { title: string; body?: string }) {
  return (
    <div className="flex flex-col gap-3 py-6">
      <h3 className="font-heading text-[length:var(--font-size-h3)] leading-snug font-[40] text-foreground">
        {title}
      </h3>
      {body && (
        <p className="text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
          {body}
        </p>
      )}
    </div>
  )
}

function BentoImageBlock({ label }: { label: string }) {
  return (
    <div className="flex aspect-[3/4] items-center justify-center bg-neutral-100 text-[length:var(--font-size-caption)] text-neutral-400">
      {label}
    </div>
  )
}

function BentoGrid({ columns, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {columns.map((col, index) => (
        <div key={index} className="flex flex-col gap-2">
          {col.imageFirst ? (
            <>
              <BentoImageBlock label={col.imageLabel} />
              <BentoTextBlock title={col.title} body={col.body} />
            </>
          ) : (
            <>
              <BentoTextBlock title={col.title} body={col.body} />
              <BentoImageBlock label={col.imageLabel} />
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export { BentoGrid }
export type { BentoGridProps, BentoColumn }
