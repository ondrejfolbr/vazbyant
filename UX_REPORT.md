# UX Report — Vazby Květin

Items requiring design decisions. NOT implemented to avoid making visual/UX choices autonomously.

---

## Error States

### 1. Image load failure fallback

- **Current:** If a product image URL fails (404, network error), Next.js `<Image>` shows a broken image icon. No `onError` handler exists on any Image component.
- **Where:** `components/product-card.tsx`, `components/product-gallery.tsx`, `components/cart/CartItem.tsx`, `components/cart/CartPageContent.tsx`, `components/category-card.tsx`
- **Recommendation:** Add `onError` callback that replaces `src` with a branded placeholder (e.g. plum-10 background with the mammoth silhouette or a generic flower icon). Requires design of the placeholder visual.

### 2. Checkout empty cart — navigation back

- **File:** `components/checkout/CheckoutFlow.tsx:22-32`
- **Current:** Shows "Košík je prázdný" with "Přidejte produkty pro dokončení objednávky." but no navigation link back.
- **Recommendation:** Add a CTA button linking to `/smutecni/` or homepage, matching the CartEmpty component pattern.

---

## Loading States

### 3. Loading skeletons — coverage gaps

- **Existing:** `app/loading.tsx`, `app/[category]/loading.tsx`, `app/[category]/[slug]/loading.tsx` — these provide basic pulse animations.
- **Missing:** No loading states for:
  - `/svatebni/` — static page, acceptable
  - `/kytice/` — static page, acceptable
  - `/rady-a-tipy/` — static page, acceptable
  - `/o-nas/` — static page, acceptable
  - `/kontakt/` — static page, acceptable
- **Note:** Since all pages except the dynamic `[category]` and `[category]/[slug]` routes are statically rendered, loading states for them are unnecessary. Current coverage is correct.

### 4. CategoryFilters — "load more" loading state

- **File:** `components/category/CategoryFilters.tsx:148-159`
- **Current:** "Načíst další" button loads more products instantly (client-side pagination). No loading state needed since data is already in memory.
- **Status:** No issue.

### 5. Search dialog — loading indicator

- **File:** `components/search/SearchDialog.tsx`
- **Current:** Search is synchronous (client-side filter of in-memory products array). Results appear instantly. No loading state needed.
- **Future:** If search moves to server-side API, add a loading spinner/skeleton inside the results area.

---

## Form Validation

### 6. Step1Delivery — existing validation is solid

- **File:** `components/checkout/Step1Delivery.tsx`
- **Current:** Zod schema with Czech-language error messages, `mode: "onBlur"`, `aria-invalid` on fields, `aria-describedby` linking errors to inputs, `role="alert"` on error messages.
- **Status:** Complete. No changes needed.

### 7. LoginView — no form validation

- **File:** `components/profile/ProfileDrawer.tsx:99-153`
- **Current:** Email and password inputs have no validation — this is sample/scaffold UI, not connected to a real auth backend.
- **Recommendation:** When auth is implemented, add zod validation with inline errors matching the Step1Delivery pattern.

### 8. Quick order form — condolence textarea

- **File:** `components/quick-order-form.tsx`
- **Current:** Character counter shows `{length}/{maxLength}` but no validation error if exceeded (input is sliced at max length via `onChange`). This is correct behavior — prevents exceeding limit rather than showing error after the fact.
- **Status:** No issue.

---

## Console

### 9. No runtime errors in console

- **Status:** Clean. Only Fast Refresh HMR messages during development (expected, not visible in production).
- **Note:** The Fast Refresh "full reload" warnings happen because some files export both React components and non-React values (e.g. `CartItem.tsx` exports both `CartItemRow` component and `formatPrice` utility). This is a DX optimization opportunity but has no user-facing impact.
