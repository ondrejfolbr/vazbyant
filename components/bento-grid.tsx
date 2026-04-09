import Image from "next/image"

import { cn } from "@/lib/utils"

interface BentoColumn {
  title: string
  body?: string
  imageLabel: string
  imageSrc?: string
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

function BentoImageBlock({ label, src }: { label: string; src?: string }) {
  return (
    <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
      {src ? (
        <Image
          src={src}
          alt={label}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
      ) : (
        <div className="flex h-full items-center justify-center text-[length:var(--font-size-caption)] text-neutral-400">
          {label}
        </div>
      )}
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
              <BentoImageBlock label={col.imageLabel} src={col.imageSrc} />
              <BentoTextBlock title={col.title} body={col.body} />
            </>
          ) : (
            <>
              <BentoTextBlock title={col.title} body={col.body} />
              <BentoImageBlock label={col.imageLabel} src={col.imageSrc} />
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export { BentoGrid }
export type { BentoGridProps, BentoColumn }
