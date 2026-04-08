# Spec: Nákupní košík — vazbykvetin.cz
**Určeno pro: Claude Code**
**Stav: ready to implement**

---

## 0. Autoritativní zdroje — pořadí priority

Při jakémkoli konfliktu platí toto pořadí:

1. `CLAUDE.md` — stack, architektura, konvence (závazné)
2. Tento dokument — košík & checkout spec
3. `VAZBYKVETIN_SPEC.md` — design tokeny, komponenty, copy
4. `vazbyant.vercel.app/styleguide` — vizuální reference

---

## 1. Stack (z CLAUDE.md — beze změny)

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **Tailwind CSS 4**
- **TypeScript** (strict mode)
- **shadcn/ui** — `radix-luma` style, `hugeicons` ikony
- **react-hook-form** + **zod** — formuláře
- **Motion** — animace (jen client islands)
- **Zustand** — cart state (přidej jako dependency)

### Architektura server/client

- Stránky `/kosik` a `/objednavka` jsou **server components** (page.tsx)
- Cart drawer, quantity selector, step navigation = **client leaf islands**
- `CartStore` (Zustand) žije v client kontextu, nikdy na serveru
- Přes server/client boundary jdou pouze serializovatelné props

---

## 2. Design tokeny

Tokeny přebírají přesně z `VAZBYKVETIN_SPEC.md` sekce 1. Jsou definované v `globals.css` jako CSS custom properties a namapované v Tailwind CSS 4 `@theme`.

### Typografie — autoritativně (dle `app/layout.tsx`)

Projekt používá **tři fonty** v přesně dané hierarchii:

```
1. Latino Gothic Variable  — Adobe Typekit (primární, heading i body)
2. Cormorant Garamond      — Google Fonts fallback pro headings
3. DM Sans                 — Google Fonts fallback pro body/UI
```

**Načítání — přesně dle `layout.tsx`, neměnit:**

```tsx
// Adobe Typekit — primární font (Latino Gothic Variable)
// Načítán v <head> jako první
<link rel="stylesheet" href="https://use.typekit.net/dnw8jfr.css" />

// Google Fonts fallbacky
const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading-fallback",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
})
```

**CSS variables (dle globals.css projektu):**

```css
--font-heading: 'latino-gothic', var(--font-heading-fallback), Georgia, serif;
--font-body:    'latino-gothic', var(--font-sans), 'Helvetica Neue', Arial, sans-serif;
--font-mono:    'JetBrains Mono', monospace;
```

> Typekit ID `dnw8jfr` je součástí projektu — neměnit, netlačit jiný font.
> Košík a checkout dědí font automaticky přes CSS cascade — žádná extra konfigurace není potřeba.

### Barvy — klíčové tokeny pro košík

```css
/* Primární akce */
--color-deep-plum:    #522953;  /* CTA buttons, active states */
--color-deep-plum-90: #63396A;  /* hover na primary button */
--color-deep-plum-10: #F3EEF3;  /* subtle badge bg */

/* Akcenty */
--color-plum-50:      #9873B4;  /* secondary hover, progress bar */
--color-plum-10:      #EDE6F3;  /* badge backgrounds */

/* Neutraly */
--color-neutral-black:  #090708;  /* primary text */
--color-neutral-600:    #6B6769;  /* muted text, captions */
--color-neutral-300:    #D0CDCF;  /* borders, dividers */
--color-neutral-200:    #E8E6E7;  /* subtle borders */
--color-neutral-100:    #F5F4F4;  /* page background */
--color-neutral-white:  #FFFFFF;  /* drawer background, cards */

/* Sémantické */
--color-success: #2E7D32;
--color-error:   #C62828;
```

### Transitions

```css
--transition-fast:   150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-base:   300ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow:   500ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-spring: 500ms cubic-bezier(0.34, 1.56, 0.64, 1);
```

---

## 3. URL struktura (z VAZBYKVETIN_SPEC sitemap)

```
/kosik          → Stránka košíku (záložní, SEO-friendly)
/objednavka     → Checkout (3 kroky)
/potvrzeni      → Potvrzení objednávky
```

Cart Drawer je **globální overlay** dostupný z každé stránky — není vázaný na `/kosik`.

---

## 4. Zustand Cart Store

Přidej `zustand` jako npm dependency.

```typescript
// store/cart-store.ts
// "use client" — nikdy neimportovat v server components

interface CartItem {
  productId: string;
  slug: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: 'smutecni' | 'svatebni' | 'kytice' | 'firemni';
  variant?: string;
}

interface CartStore {
  items: CartItem[];
  isDrawerOpen: boolean;

  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, delta: number) => void;
  clearCart: () => void;

  openDrawer: () => void;
  closeDrawer: () => void;

  totalItems: () => number;
  totalPrice: () => number;
  shippingCost: () => number;   // 0 nad 1500 Kč, jinak 150 Kč
  grandTotal: () => number;
}
```

`addItem` chování: pokud `productId` + `variant` již existuje → navýší `quantity`. Jinak přidá novou položku a zavolá `openDrawer()`.

Persistence: `zustand/middleware` → `persist` do `localStorage`. Key: `vk-cart`.

---

## 5. Cart Drawer

**Komponenta:** `components/cart/CartDrawer.tsx` — client component.
Postavená na **shadcn/ui Sheet** (side: right).

### Trigger
- Košík ikona v NavBaru: `hugeicons` `ShoppingBag` + badge s počtem položek
- Po `addItem()` se drawer automaticky otevře
- Ikona dostane pulse `scale(1.2) → 1` přes Motion při přidání

### Layout (480px desktop / fullscreen mobile)

```
┌─────────────────────────────────────┐
│  Vaše vazby            [×]          │
│  ─────────────────────────────────  │
│                                     │
│  [80×80]  Název vazby               │
│           Smuteční          1 490 Kč│
│           [−] 1 [+]   [odstranit ↗] │  ← odstranit visible on hover
│                                     │
│  [80×80]  Název vazby               │
│           Svatební          4 980 Kč│
│           [−] 2 [+]   [odstranit ↗] │
│                                     │
│  ─────────────────────────────────  │
│  ████████████░░░░  1 490 / 1 500 Kč │  ← progress bar
│  Do dopravy zdarma zbývá 10 Kč     │
│  ─────────────────────────────────  │
│  Doprava                     150 Kč │
│  Celkem                   6 620 Kč  │
│                                     │
│  [    Dokončit objednávku        ]  │  ← primary
│  [    Pokračovat v nákupu        ]  │  ← ghost
└─────────────────────────────────────┘
```

### Prázdný stav

```
        [SVG inline — květ / větvička]

    Zatím tu nic není.
    Pomůžeme vám vybrat.

    [ Prohlédnout vazby ]              → /smutecni/
```

### Progress bar k dopravě zdarma
- Zobrazuje se vždy do dosažení 1 500 Kč
- Fill: `--color-plum-50`, track: `--color-neutral-200`
- Text:
  - Pod limitem: `"Do dopravy zdarma zbývá {X} Kč"`
  - Nad limitem: `"Dopravu máte zdarma ✓"` (success color)
- Fill animace: `width` transition `--transition-base`

### Animace (Motion)
- Otevření draweru: `x: "100%" → 0`, `--transition-base`
- Zavření: `x: 0 → "100%"`, `--transition-fast`
- Overlay: `opacity: 0 → 0.4`, stejný timing
- Odebrání položky: `opacity → 0` + `height` collapse, `--transition-base`

### Přístupnost
- `role="dialog"` + `aria-modal="true"` — shadcn Sheet řeší nativně
- `aria-label="Zavřít košík"` na × button
- Focus trap — shadcn Sheet nativně
- `aria-live="polite"` na badge počtu položek v NavBaru
- Escape zavírá drawer

---

## 6. Checkout — `/objednavka`

`app/objednavka/page.tsx` → server component, layout wrapper.
`components/checkout/CheckoutFlow.tsx` → client component, drží step state.

### Step Indicator

```
① Doručení  ────────  ② Platba  ────────  ③ Souhrn
```

- Aktivní krok: `--color-deep-plum` kruh + bold label
- Dokončený: checkmark + `--color-plum-50`
- Budoucí: `--color-neutral-300`, disabled vizuálně

Přechod mezi kroky: `opacity 0→1` + `translateX(20px)→0`, `--transition-base`

---

### Krok 1 — Doručení & kontakt

#### Způsob doručení — Radio Cards

```
┌───────────────────────┐  ┌───────────────────────┐
│  Doručení domů        │  │  Osobní odběr         │
│  Praha a okolí        │  │  Praha – Mnichovice   │
│  150 Kč               │  │  Zdarma               │
└───────────────────────┘  └───────────────────────┘
```

Selected: `border: 2px solid --color-deep-plum`, `bg: --color-deep-plum-10`

#### Formulář

`react-hook-form` + `zod`. Validace `onBlur`. Chybová hláška inline pod polem.

Vždy povinné: Jméno a příjmení, E-mail, Telefon.

Podmíněně (jen "Doručení domů"): Ulice + čp., Město, PSČ.

Volitelné: Poznámka (textarea, max 500 znaků).
Placeholder: `"Datum doručení, jméno zesnulého, přání na stuhu…"`

```typescript
const deliverySchema = z.object({
  deliveryType: z.enum(['home', 'pickup']),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().regex(/^\+?[0-9\s\-]{9,}$/),
  street: z.string().optional(),
  city: z.string().optional(),
  zip: z.string().regex(/^\d{3}\s?\d{2}$/).optional(),
  note: z.string().max(500).optional(),
}).superRefine((data, ctx) => {
  if (data.deliveryType === 'home') {
    if (!data.street) ctx.addIssue({ path: ['street'], code: 'custom', message: 'Zadejte ulici' });
    if (!data.city)   ctx.addIssue({ path: ['city'],   code: 'custom', message: 'Zadejte město' });
    if (!data.zip)    ctx.addIssue({ path: ['zip'],    code: 'custom', message: 'Zadejte PSČ' });
  }
});
```

---

### Krok 2 — Platba

#### Způsob platby — Radio Cards

```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│  Platební    │  │  Bankovní    │  │  Dobírka     │
│  karta       │  │  převod      │  │  +50 Kč      │
└──────────────┘  └──────────────┘  └──────────────┘
```

**Karta (mock):**
- Číslo karty — live formát `1234 5678 9012 3456`
- Expiry — `MM/YY`
- CVV — masked `***`

**Bankovní převod — statické instrukce:**
```
Číslo účtu:        123456789 / 0800
Variabilní symbol: VK-2024-0042
Splatnost:         5 pracovních dnů
```

**Dobírka:** info text, +50 Kč do `grandTotal`.

---

### Krok 3 — Souhrn

```
Vaše objednávka
─────────────────────────────────────────────
[img 60×60]  Smuteční kytice Klid    1 490 Kč
             Smuteční · qty: 1

[img 60×60]  Věnec Vzpomínka         2 890 Kč
             Smuteční · qty: 1
─────────────────────────────────────────────
Doručení     Domů — Praha             150 Kč
Platba       Platební karta
Celkem                              4 530 Kč
─────────────────────────────────────────────

[ ← Zpět k platbě ]   [ Potvrdit objednávku ]
```

`Potvrdit objednávku` → `clearCart()` → `router.push('/potvrzeni')`

---

## 7. Potvrzení — `/potvrzeni`

```
                ✓

      Objednávka přijata.

  Potvrzení pošleme na jan@email.cz

  Číslo objednávky: VK-2024-0042

  ───────────────────────────────────
  Jsme tu, pokud budete potřebovat
  cokoliv upřesnit nebo změnit.

  Volejte: +420 604 585 271
  ───────────────────────────────────

      [ Zpět na hlavní stránku ]
```

- Stagger fade-in: ikona → nadpis → detail → kontakt → button (`--transition-slow`)
- Žádné konfety, žádná oslava — smuteční segment
- Stránka funguje i bez předchozího checkout flow (přímý URL) — neutrální verze bez dat objednávky

---

## 8. Microcopy — závazné

| Generický | Správně |
|---|---|
| Košík | Vaše vazby |
| Přidat do košíku | Vybrat tuto vazbu |
| Pokladna / Checkout | Dokončit objednávku |
| Odeslat formulář | Potvrdit objednávku |
| Formulář odeslán | Objednávka přijata. |
| Pokračovat | Pokračovat v nákupu |

Chybové hlášky: bez vykřičníků, klidný tón.
- ✓ `"Zadejte prosím e-mailovou adresu"`
- ✗ `"E-mail je povinný!"`

---

## 9. Obrázky — placeholdery

```
https://placehold.co/400x500/F3EEF3/522953?text=Vazba
https://placehold.co/80x80/F3EEF3/522953?text=VK
https://placehold.co/60x60/F3EEF3/522953?text=VK
```

Produktové fotky: aspect `4:5`, `object-fit: cover`.
Thumbnaily v draweru: `80×80px`. Miniatury v souhrnu: `60×60px`.

---

## 10. Mock produktová data

```typescript
// lib/mock-products.ts
export const MOCK_PRODUCTS = [
  { id: "1",  slug: "smutecni-kytice-klid",      name: "Smuteční kytice Klid",        price: 1490, category: "smutecni", badge: null },
  { id: "2",  slug: "venec-vzpominka",            name: "Věnec Vzpomínka",             price: 2890, category: "smutecni", badge: null },
  { id: "3",  slug: "kytice-na-rakev-ticho",      name: "Kytice na rakev Ticho",       price: 3490, category: "smutecni", badge: null },
  { id: "4",  slug: "kytice-na-urnu-svetlo",      name: "Kytice na urnu Světlo",       price: 1290, category: "smutecni", badge: null },
  { id: "5",  slug: "svatebni-kytice-harmonie",   name: "Svatební kytice Harmonie",    price: 2490, category: "svatebni", badge: "Oblíbené" },
  { id: "6",  slug: "svatebni-ranni-rosa",        name: "Svatební kytice Ranní rosa",  price: 1990, category: "svatebni", badge: null },
  { id: "7",  slug: "dekorace-obradu-elegance",   name: "Dekorace obřadu Elegance",    price: 4990, category: "svatebni", badge: null },
  { id: "8",  slug: "kytice-slunecni-den",        name: "Kytice Sluneční den",         price: 890,  category: "kytice",  badge: "Novinka" },
  { id: "9",  slug: "kytice-polni-sen",           name: "Kytice Polní sen",            price: 790,  category: "kytice",  badge: null },
  { id: "10", slug: "vk-box-predplatne",          name: "VK BOX — měsíční předplatné", price: 1290, category: "kytice",  badge: "Předplatné" },
  { id: "11", slug: "firemni-kytice-profesional", name: "Firemní kytice Profesionál",  price: 1590, category: "firemni", badge: null },
  { id: "12", slug: "sezonni-dusicky",            name: "Sezónní — Dušičky",           price: 990,  category: "kytice",  badge: "Sezónní" },
] as const;
```

---

## 11. Soubory k vytvoření

```
store/
  cart-store.ts

components/
  cart/
    CartDrawer.tsx
    CartItem.tsx
    CartSummary.tsx
    CartEmpty.tsx
  checkout/
    CheckoutFlow.tsx
    StepIndicator.tsx
    Step1Delivery.tsx
    Step2Payment.tsx
    Step3Summary.tsx

app/
  kosik/page.tsx
  objednavka/page.tsx
  potvrzeni/page.tsx

lib/
  mock-products.ts

hooks/
  use-cart.ts
```

---

## 12. Mimo scope tohoto zadání

- Reálné platební brány
- Backend / API volání
- Uživatelské účty / autentizace
- E-mailové notifikace
- CMS integrace
- NavBar a Footer (separátní task)

---

## 13. Definition of Done

- [ ] `CartDrawer` — slide-in/out zprava přes Motion, shadcn Sheet
- [ ] Přidání produktu → drawer se otevře + pulse animace ikony košíku
- [ ] Změna množství + odebrání s fade animací
- [ ] Progress bar dopravy (limit 1 500 Kč) s dynamickým textem
- [ ] Checkout `/objednavka` — 3 kroky, step indicator, animované přechody
- [ ] Zod validace — inline chybové hlášky, ne toasty
- [ ] `/potvrzeni` — `clearCart()` + stagger fade-in
- [ ] Košík perzistuje přes refresh (localStorage via Zustand persist)
- [ ] Typografie: Cormorant Garamond headings, DM Sans body
- [ ] Barvy: přesné CSS tokeny, žádné hardcoded hex v komponentách
- [ ] Microcopy dle tabulky sekce 8
- [ ] Responzivní: mobile (fullscreen drawer) / tablet / desktop
- [ ] `npm run lint && npm run typecheck && npm run build` — 0 chyb

---

*Verze 2.0 — aligned s CLAUDE.md + VAZBYKVETIN_SPEC.md · April 2026*
