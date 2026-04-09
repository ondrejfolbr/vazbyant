export default function SlugLoading() {
  return (
    <main>
      <div className="mx-auto max-w-[var(--max-width-site)] px-[var(--spacing-section-x)] py-12">
        <div className="mb-4 flex items-center gap-2">
          <div className="h-4 w-12 animate-pulse rounded-sm bg-muted" />
          <div className="h-4 w-4 animate-pulse rounded-sm bg-muted" />
          <div className="h-4 w-32 animate-pulse rounded-sm bg-muted" />
        </div>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="aspect-square animate-pulse rounded-sm bg-muted" />
            <div className="mt-3 flex gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="size-16 animate-pulse rounded-sm bg-muted" />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="h-8 w-3/4 animate-pulse rounded-sm bg-muted" />
            <div className="h-6 w-1/3 animate-pulse rounded-sm bg-muted" />
            <div className="space-y-2">
              <div className="h-4 w-full animate-pulse rounded-sm bg-muted" />
              <div className="h-4 w-5/6 animate-pulse rounded-sm bg-muted" />
            </div>
            <div className="flex gap-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-10 w-14 animate-pulse rounded-sm bg-muted" />
              ))}
            </div>
            <div className="h-12 w-full animate-pulse rounded-sm bg-muted" />
          </div>
        </div>
      </div>
    </main>
  )
}
