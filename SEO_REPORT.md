# SEO Report — Vazby Květin

## Status: What's in place

- `lang="cs"` on `<html>` element
- Unique `<title>` on every page via Next.js metadata API (template: `%s | Vazby Květin`)
- `meta description` on every page
- `metadataBase` set to `https://vazbykvetin.cz`
- `canonical` URL via `alternates.canonical` (added)
- Open Graph tags: `og:type`, `og:locale`, `og:siteName`, `og:title`, `og:description`, `og:image`, `og:url`
- Twitter card: `summary_large_image` with title, description
- Dynamic pages (`[category]`, `[category]/[slug]`) now include per-page OG data with product/category images
- `sitemap.xml` generated from `app/sitemap.ts` — covers all pages including legal pages (added)
- `robots.txt` generated from `app/robots.ts` (created) — blocks `/styleguide/` and `/homepage-secondary/`
- Favicons: `favicon.ico`, `favicon.svg`, `apple-icon.png`, `icon.png` — all present in `app/`
- Dynamic OG image generator in `app/opengraph-image.tsx`
- Static fallback OG image at `public/og-image.jpg`
- JSON-LD structured data (`Florist` schema) in root layout

---

## Recommendations (not implemented — require design decisions)

### 1. OG image per page type

- **Current:** All pages share one OG image (`/og-image.jpg`) or the dynamic generator. Product detail pages now reference product images in OG meta, but these are product photos (square aspect ratio), not purpose-built 1200x630 OG images.
- **Recommendation:** Create OG image templates for key page types (category pages, svatebni landing page, kontakt page) at 1200x630 with brand overlay.

### 2. Twitter image

- **Current:** Twitter card inherits from OG image. No separate `twitter:image` specified.
- **Status:** This is fine — Twitter falls back to `og:image` when `twitter:image` is not set.

### 3. Product pages — structured data

- **Current:** Only root-level JSON-LD (Florist schema). Individual product pages don't have `Product` schema.
- **Recommendation:** Add JSON-LD `Product` schema on `[category]/[slug]` pages with `name`, `image`, `price`, `priceCurrency`, `availability`. This enables rich snippets in Google search.

### 4. Breadcrumb structured data

- **Current:** Visual breadcrumbs exist on category and product pages but no JSON-LD `BreadcrumbList` schema.
- **Recommendation:** Add `BreadcrumbList` JSON-LD on pages that show breadcrumbs.

### 5. Social media links in footer

- **Current:** Instagram and Facebook links use `href="#"` (placeholders).
- **Recommendation:** Replace with actual social media URLs when available. Add `sameAs` to the root JSON-LD schema.
