# Accessibility Report — Vazby Květin

Issues requiring visual/design decisions. These were NOT changed to preserve the current design.

---

## Color Contrast Issues (WCAG AA)

### 1. Footer — Legal links

- **File:** `components/footer.tsx:114`
- **Problem:** `text-neutral-white/40` on `bg-deep-plum` (#522953) — contrast ratio ~1.9:1
- **WCAG AA requires:** 4.5:1 for small text
- **Recommendation:** Increase opacity to at least `/70` (approx 4.5:1) or use `text-neutral-white/80`

### 2. Footer — Bottom bar ("Součást ekosystému PEGAS")

- **File:** `components/footer.tsx:125`
- **Problem:** `text-neutral-white/30` on `bg-deep-plum` — contrast ratio ~1.5:1
- **WCAG AA requires:** 4.5:1 for small text
- **Recommendation:** Increase opacity to at least `/70`

### 3. Footer — Copyright text

- **File:** `components/footer.tsx:137`
- **Problem:** `text-neutral-white/20` on `bg-deep-plum` — contrast ratio ~1.3:1
- **WCAG AA requires:** 4.5:1 for small text
- **Recommendation:** Increase opacity to at least `/60`

### 4. Overline labels — `text-plum-50` on light backgrounds

- **Files:** Multiple pages (`app/svatebni/page.tsx`, `app/kytice/page.tsx`, `app/rady-a-tipy/page.tsx`)
- **Problem:** `text-plum-50` (#9873B4) on white or `bg-deep-plum-10` (#F3EEF3) — contrast ratio ~3.1:1
- **WCAG AA requires:** 4.5:1 for small text (overlines at `font-size-overline: 0.6875rem`)
- **Recommendation:** Use `text-deep-plum-80` (#754A81, ~5.4:1) or `text-deep-plum-70` (#865B98, ~4.2:1) for these labels

### 5. Highlight slider — body text on deep-plum

- **File:** `components/highlight-slider.tsx:84`
- **Problem:** `text-neutral-white/70` on `bg-deep-plum` — contrast ratio ~4.1:1
- **WCAG AA requires:** 4.5:1 for body text at 1rem
- **Recommendation:** Increase opacity to `/80` (approx 5.2:1)

### 6. O nas page — mammoth section body text

- **File:** `app/o-nas/page.tsx:234`
- **Problem:** `text-neutral-white/80` on `bg-deep-plum` — contrast ratio ~5.2:1 — PASSES AA
- **Note:** This is borderline. Passes AA but fails AAA (7:1). Consider `/90` for better readability.

### 7. Footer — navigation links

- **File:** `components/footer.tsx:62`
- **Problem:** `text-neutral-white/70` on `bg-deep-plum` — contrast ratio ~4.1:1
- **WCAG AA requires:** 4.5:1 for body text
- **Recommendation:** Increase to `/80`

### 8. Hero slideshow — dot indicators

- **File:** `components/hero-slideshow.tsx:105`
- **Problem:** Inactive dots use `bg-neutral-white/40` on dark photo backgrounds — may fail contrast depending on photo
- **Recommendation:** Increase to `/60` or add a subtle shadow for guaranteed contrast

### 9. Category filter pills — inactive state

- **File:** `components/category/CategoryFilters.tsx:76`
- **Problem:** `text-muted-foreground` (#532853) on `bg-deep-plum-10` (#F3EEF3) — contrast ratio ~6.5:1 — PASSES
- **Note:** This combination is actually fine.

---

## Non-Contrast Visual Issues

### 10. Cart item remove button — visibility

- **File:** `components/cart/CartItem.tsx:102`
- **Problem:** "Odebrat" button has `opacity-0` by default and only shows on `group-hover` and `focus-visible`. Keyboard users can reach it but might not realize it exists until focused. Mobile users have no hover state.
- **Recommendation:** Consider always showing the button or using a different disclosure pattern on mobile.

### 11. Product card hover overlay

- **File:** `components/product-card.tsx:60-63`
- **Problem:** "Detail produktu" CTA only appears on hover. Not accessible to touch/mobile users.
- **Note:** The entire card is a link, so functionality is not blocked. This is a UX enhancement only.
