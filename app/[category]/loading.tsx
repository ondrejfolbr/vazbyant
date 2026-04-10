export default function CategoryLoading() {
  return (
    <main id="main-content">
      <div className="h-[280px] animate-pulse bg-muted" />
      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-site)] px-[var(--spacing-section-x)]">
          <div className="mb-8 flex items-end justify-between">
            <div className="h-4 w-24 animate-pulse rounded-sm bg-muted" />
          </div>
          <div className="mb-10 flex items-center gap-3 border-y border-border py-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-9 w-28 animate-pulse rounded-sm bg-muted" />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="aspect-[4/5] animate-pulse rounded-sm bg-muted" />
                <div className="h-4 w-3/4 animate-pulse rounded-sm bg-muted" />
                <div className="h-4 w-1/3 animate-pulse rounded-sm bg-muted" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
