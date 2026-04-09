# P0 Critical Fixes — Design Spec

## Overview

Fix all P0 (critical, blocking usability) issues from the site audit. These are broken pages, missing error handling, and placeholder product imagery that make the site feel unfinished.

## Scope

5 items from AUDIT-TODO.md P0 section:

1. Custom `not-found.tsx` (branded 404)
2. Custom `error.tsx` (runtime error boundary)
3. Custom `global-error.tsx` (root layout error fallback)
4. Product images — fill 23 products missing photos with Unsplash flower images
5. Product detail gallery — replace placeholder with functional thumbnail-swap gallery

---

## 1. Custom 404 Page (`app/not-found.tsx`)

**Layout:** Centered content within existing root layout (NavBar + Footer remain).

**Content structure (top to bottom):**
- Overline: "Stránka nenalezena" (uppercase, muted, tracked)
- Heading: "Omlouváme se" (h1, light weight)
- Body text: "Stránka, kterou hledáte, neexistuje nebo byla přesunuta. Můžete se vrátit na hlavní stránku nebo prohlédnout naši nabídku."
- 3 navigation cards in a row:
  - Smuteční květiny → `/smutecni/`
  - Svatební květiny → `/svatebni/`
  - Kytice & dárky → `/kytice/`
- Primary CTA button: "Zpět na hlavní stránku" → `/`

**Styling:**
- Uses existing design tokens (deep-plum, neutral palette, Latino Gothic font)
- Cards: border neutral-200, uppercase plum label, muted subtitle
- Responsive: cards stack to 1 column on mobile
- No images, no illustrations — clean and dignified

**Component:** Server component, no client JS needed.

---

## 2. Custom Error Page (`app/error.tsx`)

**Layout:** Same centered layout as 404, within root layout.

**Content structure:**
- Overline: "Něco se pokazilo" (uppercase, muted, tracked)
- Heading: "Omlouváme se" (h1, light weight)
- Body text: "Došlo k neočekávané chybě. Zkuste to prosím znovu nebo se podívejte na naši nabídku."
- Same 3 navigation cards as 404
- Two CTAs:
  - Primary: "Zkusit znovu" — calls `reset()` prop from Next.js error boundary
  - Outline: "Hlavní stránka" → `/`

**Component:** Client component (`'use client'`) — required by Next.js error boundary API to access `reset()` function.

---

## 3. Global Error Page (`app/global-error.tsx`)

**Purpose:** Catches errors in root `layout.tsx` itself, when NavBar/Footer/CSS are unavailable.

**Layout:** Standalone HTML — no shared layout, no external CSS imports.

**Content structure:**
- All styles inline (root layout including globals.css may have failed)
- Brand colors hardcoded: deep-plum `#522953`, neutrals
- Font stack fallback: Georgia, serif (Typekit may not be loaded)
- Centered content:
  - Heading: "Omlouváme se"
  - Body text: "Došlo k neočekávané chybě. Zkuste to prosím znovu."
  - Single button: "Zkusit znovu" — calls `reset()`
- No navigation cards (layout is broken, nav links may not work)

**Component:** Client component (`'use client'`) — required by Next.js.

---

## 4. Product Images — Unsplash Fill

**Current state:** 23 of 30 products in `lib/products.data.ts` have `image: null`. 7 products already have images in `/public/`.

**Approach:**
- Add Unsplash image URLs directly to each product's `image` field in `lib/products.data.ts`
- Use `next/image` with Unsplash domain in `next.config.ts` `images.remotePatterns`
- Select images that match the product type:
  - Funeral flowers: muted, white/cream/pale tones, soft light
  - Wedding flowers: brighter whites, elegant arrangements
  - Bouquets: colorful but tasteful arrangements
- All images sized consistently: `w=600&h=750&fit=crop` for product cards, higher res variants for detail

**Image selection criteria (matching brand tone):**
- Soft natural light, muted colors, quiet mood
- No bright/saturated colors, no busy backgrounds
- Flowers matching Czech funeral/wedding traditions where possible

---

## 5. Product Detail Gallery (`ProductGallery` component)

**Current state:** Single placeholder div with text "Hlavní foto produktu" and numbered thumbnail placeholders "1, 2, 3, 4".

**Data model change:**
- Add `images: string[]` field to `Product` interface in `lib/products.data.ts`
- Each product gets 3–4 Unsplash URLs (different angles/compositions of similar flowers)
- Existing `image` field stays for product card thumbnails (backward compatible)
- If `images` is empty/undefined, fall back to `[image]` (single photo)

**New component:** `components/product-gallery.tsx`
- Client component (`'use client'`) — needs state for active image index
- Props: `images: string[]`, `alt: string`
- Main image: 4:5 aspect ratio, displays `images[activeIndex]`
- Thumbnail row: 4 items below main image, grid layout
  - Active: 2px deep-plum border
  - Inactive: 1px neutral-200 border, reduced opacity
- Click thumbnail → sets activeIndex, main image fades (opacity transition, 300ms ease-out)
- Uses `next/image` for all images with proper `sizes` attribute
- Responsive: thumbnails stay as 4-column grid on all breakpoints

**Integration:**
- Replace the current placeholder gallery markup in `app/[category]/[slug]/page.tsx`
- Pass `product.images` (or `[product.image]` fallback) to `ProductGallery`

---

## Shared Decisions

**Extracted component:** `NavigationCards` — reusable section with 3 category cards, used by both `not-found.tsx` and `error.tsx`. Placed in `components/navigation-cards.tsx`. Plain component (no `'use client'` directive) — works in both server and client contexts since it has no hooks or browser APIs.

**No new dependencies.** Everything uses existing stack: Next.js Image, Tailwind, Motion (for gallery fade).

**Responsive behavior:**
- 404/error pages: cards → single column below `sm` breakpoint
- Gallery thumbnails: 4-column grid always (thumbnails get smaller on mobile)

---

## Out of Scope

- Broken nav links (`/reference`, `/firemni`, `/predplatne`, `/na-prani`) — separate task to create or remove these pages
- Size selector functionality — P2 item
- Loading skeletons — P2 item
- Real product photography — using Unsplash as presentation scaffolding

---

## Files to Create/Modify

**Create:**
- `app/not-found.tsx`
- `app/error.tsx`
- `app/global-error.tsx`
- `components/product-gallery.tsx`
- `components/navigation-cards.tsx`

**Modify:**
- `lib/products.data.ts` — add `images` field, fill Unsplash URLs for all 30 products
- `app/[category]/[slug]/page.tsx` — integrate `ProductGallery`, remove placeholder markup
- `next.config.ts` — add `images.unsplash.com` to remote patterns

---

## Verification

After implementation:
1. `npm run typecheck` — no type errors
2. `npm run lint` — no lint errors
3. `npm run build` — successful build
4. Manual check: navigate to `/nonexistent-page` → branded 404 with nav cards
5. Manual check: product detail pages show gallery with working thumbnail swap
6. Manual check: all 30 products show Unsplash images on category pages
