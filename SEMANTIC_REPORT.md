# Semantic HTML Report — Vazby Květin

Items that were NOT changed because they would affect visual rendering or require design decisions.

---

## 1. Mega menu subcategory links — could be `<ul>/<li>`

- **File:** `components/navbar/navbar.tsx` (MegaMenuPanel, lines 240-290)
- **Problem:** Menu groups and items are rendered as flat `<div>/<Link>` elements. Semantically, these should be `<ul>/<li>` nested lists.
- **Risk:** Adding `<ul>/<li>` here would require careful CSS reset to avoid altering the mega menu layout. The mega menu uses complex grid layout with `.flex-col` and `.gap-1` that may interact differently with `<ul>/<li>` default styles.
- **Recommendation:** Wrap groups in `<ul className="list-none p-0 m-0">` and items in `<li>`. Test carefully with the mega menu open.

## 2. Mobile menu links — could be `<ul>/<li>`

- **File:** `components/navbar/navbar.tsx` (MobileMenu, lines 322-398)
- **Problem:** All mobile menu items are flat `<div>/<Link>/<span>` elements. They should be a nested list for screen readers.
- **Risk:** Similar to mega menu — the layout uses flex-col with specific gaps. `<li>` default `display: list-item` could interfere.
- **Recommendation:** Same approach as #1 with list-none reset.

## 3. Cart items — could be `<ul>/<li>`

- **File:** `components/cart/CartDrawer.tsx`, `components/cart/CartPageContent.tsx`
- **Problem:** Cart items are rendered in a scrollable div with `items.map()`. Semantically, these are a list.
- **Risk:** `CartItem` uses `<motion.div>` with `layout` animation prop. Wrapping in `<li>` could affect Framer Motion's layout animation behavior.
- **Recommendation:** Test with `<ul>` wrapper and `<li>` around each `CartItemRow` to verify animation is unaffected.

## 4. Footer social icons — could be `<ul>/<li>`

- **File:** `components/footer.tsx:28-52`
- **Problem:** Social icon links are in a flex div, not a list.
- **Risk:** Minimal visual risk with `list-none` reset.
- **Recommendation:** Wrap in `<ul className="list-none p-0 m-0 flex items-center gap-5">` with `<li>` per link.

## 5. CategoryCard — could be `<article>`

- **File:** `components/category-card.tsx`
- **Problem:** CategoryCard renders as a plain `<Link>`. Unlike ProductCard (now `<article>`), CategoryCard doesn't have its own heading level — it uses `<h3>` inside a link.
- **Risk:** Wrapping in `<article>` would add an extra wrapper element that could shift layout behavior since CategoryCard uses `aspect-[3/4]` directly on the link.
- **Recommendation:** Add `<article>` wrapper with `className` forwarding, similar to ProductCard refactor.

## 6. Checkout steps — heading hierarchy inside steps

- **File:** `components/checkout/Step1Delivery.tsx`, `Step2Payment.tsx`, `Step3Summary.tsx`
- **Problem:** Each step uses `<fieldset>/<legend>` for form groups, which is correct. However, the legends act as visual headings but don't participate in the heading hierarchy (there's a sr-only `<h1>` on the page, then legends).
- **Note:** This is valid HTML — `<legend>` inside `<fieldset>` is the correct pattern for form groups. No change needed.

## 7. Bento grid — image blocks as figures

- **File:** `components/bento-grid.tsx`
- **Problem:** Images in the bento grid could be wrapped in `<figure>` with `<figcaption>` for better semantics.
- **Risk:** `<figure>` has default margins in most browsers which would shift the layout.
- **Recommendation:** If implementing, add `className="m-0"` to the `<figure>` element.
