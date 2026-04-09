# P2 Enhancements — Design Spec

**Date:** 2026-04-09
**Scope:** All 8 P2 items from AUDIT-TODO.md

---

## 1. Category Filters (Client-side)

**Current state:** 4 non-functional placeholder buttons ("Typ vazby", "Cenovy rozsah", "Barva", "Razeni").

**Problem:** Products have no `color` or `type` attributes. Only filterable fields: `subcategory`, `price`, `badge`.

**Design:**
- Replace the 4 placeholder buttons with **3 functional filter controls**:
  - **Podkategorie** — dropdown select listing available subcategories for the current category
  - **Cenovy rozsah** — preset range buttons (do 2000 Kc, 2000-4000 Kc, 4000-6000 Kc, nad 6000 Kc)
  - **Razeni** — sort dropdown (Cena vzestupne, Cena sestupne, Nazev A-Z)
- Remove "Barva" and "Typ vazby" buttons entirely — no data supports them.
- Filtering is **client-side** — all products are already loaded as static data.
- New client component `CategoryFilters` wraps the filter UI and state, renders filtered product grid.
- Active filters shown as removable chips below the filter bar.
- "Zrusit filtry" link to reset all.

**Files affected:**
- `app/[category]/page.tsx` — wrap product grid in client filter component
- `components/category/CategoryFilters.tsx` — new client component
- `lib/products.data.ts` — add helper functions for distinct subcategories and price ranges

---

## 2. Size Selector (S/M/L) — Visual Only

**Current state:** 3 hardcoded divs with no state.

**Design:**
- Add local `useState` for selected size, default to "M".
- Highlight selected size with `border-primary` style.
- Pass `variant` (selected size) to `addItem()` in cart store.
- No price change — size is visual/informational only.
- Cart item displays variant label (e.g., "Velikost: M").

**Files affected:**
- `app/[category]/[slug]/page.tsx` — extract size selector to client island
- `components/product/SizeSelector.tsx` — new client component
- `components/cart/CartItem.tsx` — display variant if present

---

## 3. "Load More" Button

**Current state:** Button exists, no logic.

**Design:**
- Client-side pagination: show first **9 products**, then **9 more** per click.
- Button text: "Nacist dalsi" with count "(zobrazeno X z Y)".
- Hide button when all products are shown.
- Works with filtered results — pagination resets when filters change.
- Part of the `CategoryFilters` client component (shared state with filters).

**Files affected:**
- `components/category/CategoryFilters.tsx` — pagination state integrated with filter state

---

## 4. Quick Order ("Rychla objednavka")

**Current state:** Form UI exists on funeral product detail pages. Submit button has no handler.

**Design:**
- Validate form fields (name, phone, delivery address) with Zod schema.
- On valid submit:
  1. Add product to cart with `variant: selectedSize` and condolence message metadata.
  2. Store prefilled delivery data in sessionStorage (`vk-quick-order`).
  3. Redirect to `/objednavka`.
- Checkout flow reads sessionStorage and prefills Step 1 (delivery) if quick order data exists.
- SessionStorage is cleared after checkout completion.

**Files affected:**
- `components/quick-order-form.tsx` — add Zod validation and submit handler
- `components/checkout/Step1Delivery.tsx` — read prefill data from sessionStorage
- `components/checkout/CheckoutFlow.tsx` — clear sessionStorage on completion

---

## 5. Loading Skeletons (loading.tsx)

**Current state:** No loading.tsx files anywhere.

**Design:**
- Create **3 route-specific loading skeletons** that match final layouts:
  - `app/[category]/loading.tsx` — hero skeleton + 3x3 product card grid skeleton
  - `app/[category]/[slug]/loading.tsx` — gallery placeholder + info panel skeleton
  - `app/loading.tsx` — generic page skeleton (header area + content blocks)
- Skeletons use Tailwind `animate-pulse` on neutral `bg-muted` blocks.
- Match exact dimensions of final components to prevent layout shift.
- No spinner — pulse animation only, consistent with brand's calm aesthetic.

**Files affected:**
- `app/loading.tsx` — new
- `app/[category]/loading.tsx` — new
- `app/[category]/[slug]/loading.tsx` — new

---

## 6. Breadcrumbs on Product Detail

**Current state:** Subcategory pages have inline hardcoded breadcrumbs. Product detail has none.

**Design:**
- Create reusable `Breadcrumb` component (server component).
- Schema: array of `{ label: string, href?: string }` — last item has no href (current page).
- Product detail breadcrumb: Domov > {Category} > {Subcategory} > {Product Name}
- Also refactor existing subcategory breadcrumbs to use the same component.
- Semantic HTML: `<nav aria-label="Navigace">` with `<ol>` list.

**Files affected:**
- `components/ui/breadcrumb.tsx` — new reusable component
- `app/[category]/[slug]/page.tsx` — add breadcrumbs to product detail view
- `app/[category]/page.tsx` — refactor existing inline breadcrumbs (if subcategory view)

---

## 7. Search (Cmd+K Dialog)

**Current state:** No search functionality exists.

**Design:**
- **Trigger:** Magnifying glass icon in navbar + `Cmd+K` / `Ctrl+K` keyboard shortcut.
- **UI:** Modal dialog (shadcn/ui `Dialog`) with search input and results list.
- **Search logic:** Client-side fuzzy match over `name`, `description`, `composition` fields.
  - Simple substring matching (no external library needed for 30 products).
  - Results grouped by category.
  - Show product thumbnail, name, category, and price per result.
  - Max 8 results displayed.
- **Navigation:** Arrow keys to navigate results, Enter to select, Esc to close.
- **Empty state:** "Zadejte hledany vyraz" when input is empty, "Zadne vysledky" when no matches.
- Client component mounted in root layout.

**Files affected:**
- `components/search/SearchDialog.tsx` — new client component
- `components/search/SearchTrigger.tsx` — navbar icon button
- `components/navbar/navbar.tsx` — add search trigger icon
- `app/layout.tsx` — mount SearchDialog

---

## 8. Confirmation Page Guard (/potvrzeni/)

**Current state:** Page is accessible directly via URL with hardcoded order number.

**Design:**
- On mount, check for `vk-order-confirmed` flag in sessionStorage.
- If flag is missing → redirect to `/` with `router.replace()`.
- Checkout flow sets this flag right before redirecting to `/potvrzeni/`.
- Flag is cleared after confirmation page mounts (one-time use).
- The hardcoded order number "VK-2024-0042" remains as-is (P3 item).

**Files affected:**
- `components/checkout/ConfirmationContent.tsx` — add guard check
- `components/checkout/CheckoutFlow.tsx` — set sessionStorage flag before redirect

---

## Technical Decisions

1. **No new dependencies** — all features use existing stack (React state, Zustand, shadcn/ui, Zod).
2. **Client islands only where needed** — filters, search, size selector, quick order form are client components. Breadcrumbs and loading skeletons are server components.
3. **SessionStorage for ephemeral flow state** (quick order prefill, confirmation guard) — not persisted across sessions, which is correct behavior.
4. **No URL-based filter state** — simpler implementation, acceptable for 30 products with static data.

## Out of Scope

- Backend API integration (all data remains static)
- Real order processing / payment
- Color or type attributes on products (no data exists)
- Hardcoded order number fix (P3)
