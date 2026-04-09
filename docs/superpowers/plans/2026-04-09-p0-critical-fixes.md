# P0 Critical Fixes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix all P0 critical issues — branded error pages, Unsplash product images, and functional product gallery.

**Architecture:** Server components for 404/error pages (except `error.tsx` and `global-error.tsx` which must be client components per Next.js API). New `ProductGallery` client island for thumbnail swap. Unsplash images via `next/image` remote patterns. Shared `NavigationCards` component extracted for reuse.

**Tech Stack:** Next.js 16 App Router, React 19, Tailwind CSS 4, Motion (gallery fade), next/image with Unsplash remote patterns.

---

## File Structure

**Create:**
- `components/navigation-cards.tsx` — 3 category cards (Smuteční, Svatební, Kytice) reused by 404 and error pages
- `app/not-found.tsx` — branded 404 page (server component)
- `app/error.tsx` — runtime error boundary (client component)
- `app/global-error.tsx` — root layout error fallback (client component, inline styles)
- `components/product-gallery.tsx` — thumbnail-swap gallery (client component)

**Modify:**
- `next.config.mjs` — add `images.unsplash.com` to remote patterns
- `lib/products.data.ts` — add `images` field to interface, fill Unsplash URLs for all 30 products
- `app/[category]/[slug]/page.tsx` — integrate `ProductGallery`, remove placeholder gallery markup

---

### Task 1: Add Unsplash to next/image remote patterns

**Files:**
- Modify: `next.config.mjs`

- [ ] **Step 1: Update next.config.mjs**

Add `images.unsplash.com` to the existing `remotePatterns` array:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
}

export default nextConfig
```

- [ ] **Step 2: Verify dev server restarts cleanly**

Run: `npm run dev` (the dev server should restart and accept the new config)

- [ ] **Step 3: Commit**

```bash
git add next.config.mjs
git commit -m "feat: add Unsplash to next/image remote patterns"
```

---

### Task 2: Create NavigationCards component

**Files:**
- Create: `components/navigation-cards.tsx`

- [ ] **Step 1: Create the component**

```tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add components/navigation-cards.tsx
git commit -m "feat: add NavigationCards component for error pages"
```

---

### Task 3: Create branded 404 page

**Files:**
- Create: `app/not-found.tsx`

- [ ] **Step 1: Create not-found.tsx**

```tsx
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { NavigationCards } from "@/components/navigation-cards"

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-[var(--spacing-section-x)] py-[var(--spacing-section-y)]">
      <p className="mb-2 text-[length:var(--font-size-caption)] tracking-[var(--letter-spacing-widest)] text-muted-foreground uppercase">
        Stránka nenalezena
      </p>
      <h1 className="mb-3 font-heading text-[length:var(--font-size-h1)] font-[30] text-foreground">
        Omlouváme se
      </h1>
      <p className="mb-10 max-w-md text-center text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
        Stránka, kterou hledáte, neexistuje nebo byla přesunuta. Můžete se
        vrátit na hlavní stránku nebo prohlédnout naši nabídku.
      </p>

      <div className="mb-10 w-full max-w-lg">
        <NavigationCards />
      </div>

      <Button asChild size="md">
        <Link href="/">Zpět na hlavní stránku</Link>
      </Button>
    </main>
  )
}
```

- [ ] **Step 2: Verify in browser**

Navigate to `http://localhost:3000/nonexistent-page` — should show the branded 404 with NavBar, Footer, 3 category cards, and CTA button.

- [ ] **Step 3: Commit**

```bash
git add app/not-found.tsx
git commit -m "feat: add branded 404 page with navigation cards"
```

---

### Task 4: Create error.tsx

**Files:**
- Create: `app/error.tsx`

- [ ] **Step 1: Create error.tsx**

```tsx
"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import { NavigationCards } from "@/components/navigation-cards"

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({ reset }: ErrorPageProps) {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-[var(--spacing-section-x)] py-[var(--spacing-section-y)]">
      <p className="mb-2 text-[length:var(--font-size-caption)] tracking-[var(--letter-spacing-widest)] text-muted-foreground uppercase">
        Něco se pokazilo
      </p>
      <h1 className="mb-3 font-heading text-[length:var(--font-size-h1)] font-[30] text-foreground">
        Omlouváme se
      </h1>
      <p className="mb-10 max-w-md text-center text-[length:var(--font-size-body)] leading-relaxed text-muted-foreground">
        Došlo k neočekávané chybě. Zkuste to prosím znovu nebo se podívejte na
        naši nabídku.
      </p>

      <div className="mb-10 w-full max-w-lg">
        <NavigationCards />
      </div>

      <div className="flex gap-3">
        <Button size="md" onClick={reset}>
          Zkusit znovu
        </Button>
        <Button asChild variant="outline" size="md">
          <Link href="/">Hlavní stránka</Link>
        </Button>
      </div>
    </main>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/error.tsx
git commit -m "feat: add branded error page with reset and navigation cards"
```

---

### Task 5: Create global-error.tsx

**Files:**
- Create: `app/global-error.tsx`

- [ ] **Step 1: Create global-error.tsx**

This uses inline styles because the root layout (and its CSS imports) may have failed.

```tsx
"use client"

interface GlobalErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ reset }: GlobalErrorProps) {
  return (
    <html lang="cs">
      <body
        style={{
          margin: 0,
          fontFamily: "Georgia, serif",
          backgroundColor: "#FAFAFA",
          color: "#1A1718",
        }}
      >
        <main
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#8E8A8C",
              marginBottom: "0.5rem",
            }}
          >
            Něco se pokazilo
          </p>
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              margin: "0 0 0.75rem 0",
            }}
          >
            Omlouváme se
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "#6B6769",
              maxWidth: "24rem",
              lineHeight: 1.6,
              marginBottom: "2rem",
            }}
          >
            Došlo k neočekávané chybě. Zkuste to prosím znovu.
          </p>
          <button
            onClick={reset}
            style={{
              backgroundColor: "#522953",
              color: "#FFFFFF",
              border: "none",
              padding: "0.75rem 2rem",
              fontSize: "0.875rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Zkusit znovu
          </button>
        </main>
      </body>
    </html>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/global-error.tsx
git commit -m "feat: add global error page with inline styles fallback"
```

---

### Task 6: Add images field to Product interface and fill Unsplash URLs

**Files:**
- Modify: `lib/products.data.ts`

- [ ] **Step 1: Add `images` field to Product interface**

In `lib/products.data.ts`, add `images` to the `Product` interface at line 10 (after `image`):

```typescript
export interface Product {
  id: number
  name: string
  slug: string
  price: number
  category: string
  subcategory: string | null
  badge: string | null
  image: string | null
  images: string[]
  description: string
  composition: string
  delivery: string
  care: string
}
```

- [ ] **Step 2: Fill Unsplash URLs for all 30 products**

Update every product in the `products` array to:
1. Set `image` to an Unsplash URL (replacing `null` values; keep existing `/public/` paths for the 7 that have them)
2. Add `images` array with 3–4 Unsplash URLs per product

Use these Unsplash image patterns (all appended with `?w=600&h=750&fit=crop&auto=format`):

**Funeral flowers (white/cream/muted):**
- `https://images.unsplash.com/photo-1487530811176-3780de880c2d` — white lilies
- `https://images.unsplash.com/photo-1490750967868-88aa4f44baee` — white roses arrangement
- `https://images.unsplash.com/photo-1561181286-d3fee7d55364` — white orchids
- `https://images.unsplash.com/photo-1455659817273-f96807779a8a` — cream/white bouquet
- `https://images.unsplash.com/photo-1563241527-3004b7be0ffd` — funeral wreath
- `https://images.unsplash.com/photo-1471696035578-3d8c78d99571` — soft white arrangement
- `https://images.unsplash.com/photo-1508610048659-a06b669e3321` — gentle lilies
- `https://images.unsplash.com/photo-1457089328109-e5d9bd499191` — pale roses
- `https://images.unsplash.com/photo-1526047932273-341f2a7631f9` — white flower close-up
- `https://images.unsplash.com/photo-1469259943454-aa100abba749` — muted arrangement
- `https://images.unsplash.com/photo-1495231916356-a86217efff12` — white chrysanthemums
- `https://images.unsplash.com/photo-1444021465936-c6ca81d39b84` — soft lavender
- `https://images.unsplash.com/photo-1468327768560-75b778cbb551` — white freesias
- `https://images.unsplash.com/photo-1502977249166-824b3a8a4d6d` — standing arrangement
- `https://images.unsplash.com/photo-1548094990-c16ca90f1f0d` — minimalist white
- `https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797` — eucalyptus accent
- `https://images.unsplash.com/photo-1585779034823-7e9ac8faec70` — funeral basket

Each product gets `image` set to one URL (for card thumbnail) and `images` set to an array of 3–4 different URLs from this pool. Mix and match based on the product type:
- Coffin arrangements: use the larger, elongated arrangement photos
- Wreaths: use circular/wreath photos
- Small bouquets: use small, gentle bouquet photos
- VIP/exclusive: use the most elegant photos
- Urns: use the smallest, most delicate arrangements

For the 7 products that already have local images (`/hero-home-2.jpg`, `/category-kytice.jpg`, `/seasonal-anthurie.jpg`, `/category-vence-fialovy.jpg`, `/category-sety.jpg`), keep the local `image` value but still add Unsplash `images` array for the gallery.

- [ ] **Step 3: Run typecheck**

Run: `npm run typecheck`
Expected: PASS (all products now conform to updated interface)

- [ ] **Step 4: Commit**

```bash
git add lib/products.data.ts
git commit -m "feat: add Unsplash images to all 30 products"
```

---

### Task 7: Create ProductGallery component

**Files:**
- Create: `components/product-gallery.tsx`

- [ ] **Step 1: Create the gallery component**

```tsx
"use client"

import { useState } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

interface ProductGalleryProps {
  images: string[]
  alt: string
}

export function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  if (images.length === 0) {
    return (
      <div className="flex aspect-[4/5] items-center justify-center bg-plum-10">
        <span className="text-[length:var(--font-size-body)] text-plum-50">
          Foto produktu
        </span>
      </div>
    )
  }

  return (
    <div>
      {/* Main image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-plum-10">
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={i === 0 ? alt : `${alt} — foto ${i + 1}`}
            fill
            className={cn(
              "object-cover transition-opacity duration-300 ease-out",
              i === activeIndex ? "opacity-100" : "opacity-0",
            )}
            sizes="(min-width: 1024px) 58vw, 100vw"
            priority={i === 0}
          />
        ))}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-3">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={cn(
                "relative aspect-square overflow-hidden transition-opacity",
                i === activeIndex
                  ? "border-2 border-deep-plum opacity-100"
                  : "border border-border opacity-60 hover:opacity-80",
              )}
            >
              <Image
                src={src}
                alt={`${alt} — náhled ${i + 1}`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 14vw, 25vw"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
```

- [ ] **Step 2: Run typecheck**

Run: `npm run typecheck`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add components/product-gallery.tsx
git commit -m "feat: add ProductGallery component with thumbnail swap"
```

---

### Task 8: Integrate ProductGallery into product detail page

**Files:**
- Modify: `app/[category]/[slug]/page.tsx`

- [ ] **Step 1: Add import**

Add at top of file with other imports:

```tsx
import { ProductGallery } from "@/components/product-gallery"
```

- [ ] **Step 2: Replace placeholder gallery markup**

In the `ProductDetailPage` component, replace lines 201–221 (the gallery section inside `<div className="lg:col-span-7">`):

**Remove:**
```tsx
{/* Main image */}
<div className="flex aspect-[4/5] items-center justify-center rounded-sm bg-plum-10">
  <span className="text-[length:var(--font-size-body)] text-plum-50">
    Hlavní foto produktu
  </span>
</div>

{/* Thumbnails */}
<div className="mt-3 grid grid-cols-4 gap-3">
  {[1, 2, 3, 4].map((i) => (
    <div
      key={i}
      className="flex aspect-square items-center justify-center rounded-sm bg-plum-10"
    >
      <span className="text-[length:var(--font-size-caption)] text-plum-50">
        {i}
      </span>
    </div>
  ))}
</div>
```

**Replace with:**
```tsx
<ProductGallery
  images={product.images.length > 0 ? product.images : product.image ? [product.image] : []}
  alt={product.name}
/>
```

- [ ] **Step 3: Update the ProductDetailPageProps interface**

Add `images` to the product type in `ProductDetailPageProps` (line 169–183):

```tsx
interface ProductDetailPageProps {
  category: string
  product: {
    id: number
    name: string
    slug: string
    price: number
    category: string
    subcategory: string | null
    badge: string | null
    image: string | null
    images: string[]
    description: string
    composition: string
    delivery: string
    care: string
  }
}
```

- [ ] **Step 4: Run typecheck and build**

Run: `npm run typecheck && npm run build`
Expected: Both pass

- [ ] **Step 5: Verify in browser**

Navigate to `http://localhost:3000/smutecni/kytice-na-rakev-ticho`:
- Main image shows Unsplash photo
- 3–4 thumbnails visible below
- Clicking a thumbnail swaps the main image with fade animation

- [ ] **Step 6: Commit**

```bash
git add app/[category]/[slug]/page.tsx
git commit -m "feat: integrate ProductGallery into product detail page"
```

---

### Task 9: Final verification

- [ ] **Step 1: Run full verification suite**

```bash
npm run typecheck
npm run lint
npm run build
```

All three must pass.

- [ ] **Step 2: Manual smoke test**

1. `http://localhost:3000/nonexistent-page` → branded 404 with nav cards
2. `http://localhost:3000/smutecni/` → all products show Unsplash images (no grey placeholders)
3. `http://localhost:3000/smutecni/kytice-na-rakev-ticho` → gallery with working thumbnail swap
4. Check responsive: resize browser to mobile width, verify 404 cards stack and gallery thumbnails remain usable

- [ ] **Step 3: Commit any remaining fixes**

If any issues found during smoke test, fix and commit.
