export default function RootLoading() {
  return (
    <main>
      <div className="h-[280px] animate-pulse bg-muted" />
      <div className="mx-auto max-w-[var(--max-width-site)] px-[var(--spacing-section-x)] py-[var(--spacing-section-y)]">
        <div className="mb-8 h-8 w-64 animate-pulse rounded-sm bg-muted" />
        <div className="space-y-4">
          <div className="h-4 w-full animate-pulse rounded-sm bg-muted" />
          <div className="h-4 w-3/4 animate-pulse rounded-sm bg-muted" />
          <div className="h-4 w-5/6 animate-pulse rounded-sm bg-muted" />
        </div>
      </div>
    </main>
  )
}
