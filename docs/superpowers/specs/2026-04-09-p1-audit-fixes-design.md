# P1 Audit Fixes — Design Spec

## Overview

Fix 8 P1 issues from AUDIT-TODO.md. All are content/polish fixes — no new features or architecture changes.

## Items

### 1. Hero images on subpages

Add Unsplash background images to heroes on `/smutecni/`, `/svatebni/`, `/kytice/`, `/o-nas/`, `/rady-a-tipy/`. Pass `backgroundImages` prop to existing Hero component. Choose muted, respectful photography matching brand guidelines.

**Files:** `app/smutecni/page.tsx`, `app/svatebni/page.tsx`, `app/kytice/page.tsx`, `app/o-nas/page.tsx`, `app/rady-a-tipy/page.tsx`

### 2. O nás placeholder images

Replace 4 placeholder text blocks ("Foto: floristka při práci", "Foto: smuteční vazba", "Foto: svatební kytice", "Foto: detail ruční práce") with `next/image` components using relevant Unsplash photos.

**Files:** `app/o-nas/page.tsx`

### 3. Svatební placeholder images

Replace 3 service card placeholders and 6 gallery placeholders with wedding-themed Unsplash photos using `next/image`.

**Files:** `app/svatebni/page.tsx`

### 4. Remove dead nav links

Remove `/reference`, `/firemni`, `/predplatne`, `/na-prani` from mega menu, simple links, and footer nav in navbar data. These pages don't exist and have no content planned.

**Files:** `app/components/navbar/navbar.data.ts`

### 5. Social media placeholder links

Replace `https://instagram.com` and `https://facebook.com` with `#` to avoid misleading users. Add comment noting real URLs should be provided.

**Files:** `app/components/footer.tsx`

### 6. Contact map embed

Replace the text placeholder with a Google Maps iframe embed for "Mirošovická 704, Mnichovice". Static embed, no API key needed.

**Files:** `app/kontakt/page.tsx`

### 7. SEO metadata

Add unique `description` meta to each page. Titles already exist via the template system. Add descriptions that reflect page content for search engines.

**Files:** All page.tsx files

### 8. Remove missing video reference

Remove `/hero-home.mp4` from homepage hero `backgroundImages` array. Keep only the working `/hero-home-2.jpg`.

**Files:** `app/page.tsx`

## Approach

- Use verified Unsplash photo URLs (same pattern as P0 product images)
- All changes are content/markup only — no new components or architecture
- Server components stay server components
- Follow existing patterns in the codebase
