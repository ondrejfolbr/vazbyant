# VAZBY KVĚTIN — Kompletní specifikace pro implementaci

## KONTEXT PROJEKTU

Redesign e-shopu vazbykvetin.cz — květinářství napojené na pohřební službu PEGAS (pohrebpegas.cz). Web prodává smuteční, svatební a dárkové květiny. Cíl: minimalistický e-shop na úrovni rituals.cz, tonálně konzistentní s brandem PEGAS.

Dvě primární cílové skupiny:
- **Pozůstalí** — urgentní nákup, emoční stav, potřebují rychlý flow (3 kliknutí k objednávce)
- **Svatební páry** — plánují dopředu, browzují inspiraci, potřebují galerie a varianty

Brand positioning: "Navrhujeme květiny pro chvíle, na kterých záleží."
Dvojznačnost názvu: "vazby" = květinová vazba + lidská vazba.

---

## 1. DESIGN TOKENS

### 1.1 Barvy

```json
{
  "color": {
    "primary": {
      "deep-plum": "#522953",
      "deep-plum-90": "#63396A",
      "deep-plum-80": "#754A81",
      "deep-plum-70": "#865B98",
      "deep-plum-10": "#F3EEF3"
    },
    "accent": {
      "plum-50": "#9873B4",
      "plum-30": "#C4AEDA",
      "plum-10": "#EDE6F3"
    },
    "neutral": {
      "black": "#090708",
      "gray-900": "#1A1718",
      "gray-800": "#2D2A2C",
      "gray-700": "#4A4648",
      "gray-600": "#6B6769",
      "gray-500": "#8E8A8C",
      "gray-400": "#B0ADAF",
      "gray-300": "#D0CDCF",
      "gray-200": "#E8E6E7",
      "gray-100": "#F5F4F4",
      "gray-50": "#FAFAFA",
      "white": "#FFFFFF"
    },
    "warm-gray": {
      "50": "#D8D4D7"
    },
    "cool-gray": {
      "50": "#D0D1DB"
    },
    "light-blue": {
      "50": "#C5DBF7"
    },
    "semantic": {
      "success": "#2E7D32",
      "error": "#C62828",
      "warning": "#F9A825",
      "info": "#1565C0"
    }
  }
}
```

### 1.2 Typografie

PEGAS brand používá LatinoGothic Variable. Pro web VK použijeme:
- **Headings**: `"LatinoGothic", "Cormorant Garamond", Georgia, serif` — pokud LatinoGothic není dostupná jako webfont, fallback na Cormorant Garamond (Google Fonts, vizuálně nejbližší — elegantní, široká, tichá)
- **Body**: `"DM Sans", "Helvetica Neue", Arial, sans-serif` — čistý, moderní, výborná čitelnost
- **Mono/detail**: `"JetBrains Mono", monospace` — pro ceny, kódy

```json
{
  "typography": {
    "font-family": {
      "heading": "'Cormorant Garamond', Georgia, serif",
      "body": "'DM Sans', 'Helvetica Neue', Arial, sans-serif",
      "mono": "'JetBrains Mono', monospace"
    },
    "font-size": {
      "display-xl": "clamp(3rem, 5vw, 5rem)",
      "display": "clamp(2.5rem, 4vw, 4rem)",
      "h1": "clamp(2rem, 3vw, 3rem)",
      "h2": "clamp(1.5rem, 2.5vw, 2.25rem)",
      "h3": "clamp(1.25rem, 2vw, 1.75rem)",
      "h4": "1.25rem",
      "body-lg": "1.125rem",
      "body": "1rem",
      "body-sm": "0.875rem",
      "caption": "0.75rem",
      "overline": "0.6875rem"
    },
    "font-weight": {
      "light": 300,
      "regular": 400,
      "medium": 500,
      "semibold": 600,
      "bold": 700
    },
    "line-height": {
      "tight": 1.1,
      "snug": 1.25,
      "normal": 1.5,
      "relaxed": 1.75
    },
    "letter-spacing": {
      "tight": "-0.02em",
      "normal": "0",
      "wide": "0.05em",
      "wider": "0.1em",
      "widest": "0.2em"
    }
  }
}
```

### 1.3 Spacing (8px grid)

```json
{
  "spacing": {
    "0": "0",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem",
    "32": "8rem",
    "40": "10rem",
    "section-y": "clamp(4rem, 8vw, 8rem)",
    "section-x": "clamp(1rem, 5vw, 6rem)"
  }
}
```

### 1.4 Layout

```json
{
  "layout": {
    "max-width": "1440px",
    "content-width": "1200px",
    "narrow-width": "800px",
    "grid-columns": 12,
    "grid-gap": "1.5rem",
    "container-padding": "clamp(1rem, 5vw, 6rem)"
  },
  "breakpoints": {
    "sm": "640px",
    "md": "768px",
    "lg": "1024px",
    "xl": "1280px",
    "2xl": "1440px"
  }
}
```

### 1.5 Efekty

```json
{
  "border-radius": {
    "none": "0",
    "sm": "0.25rem",
    "md": "0.5rem",
    "lg": "1rem",
    "full": "9999px"
  },
  "shadow": {
    "sm": "0 1px 2px rgba(9,7,8,0.05)",
    "md": "0 4px 12px rgba(9,7,8,0.08)",
    "lg": "0 8px 24px rgba(9,7,8,0.12)",
    "xl": "0 16px 48px rgba(9,7,8,0.16)"
  },
  "transition": {
    "fast": "150ms cubic-bezier(0.4, 0, 0.2, 1)",
    "base": "300ms cubic-bezier(0.4, 0, 0.2, 1)",
    "slow": "500ms cubic-bezier(0.4, 0, 0.2, 1)",
    "spring": "500ms cubic-bezier(0.34, 1.56, 0.64, 1)"
  }
}
```

---

## 2. SITEMAP & INFORMAČNÍ ARCHITEKTURA

### 2.1 Strom stránek

```
/                           → Homepage
├── /smutecni/              → Smuteční květiny (landing page)
│   ├── /smutecni/kytice/   → Pohřební kytice
│   ├── /smutecni/vence/    → Smuteční věnce
│   ├── /smutecni/rakev/    → Kytice na rakev
│   ├── /smutecni/urna/     → Kytice na urnu
│   ├── /smutecni/dekorace/ → Pietní dekorace
│   ├── /smutecni/kose/     → Květinové koše
│   └── /smutecni/[slug]/   → Detail produktu (PDP)
├── /svatebni/              → Svatební květiny (landing page)
│   ├── /svatebni/kytice/   → Svatební kytice
│   ├── /svatebni/dekorace/ → Dekorace obřadu
│   ├── /svatebni/doplnky/  → Doplňky (stuhy, vazy)
│   └── /svatebni/[slug]/   → Detail produktu (PDP)
├── /kytice/                → Kytice & Dárky (landing page)
│   ├── /kytice/narozeniny/ → Narozeninové
│   ├── /kytice/sezonni/    → Sezónní (Valentýn, Dušičky, Vánoce)
│   ├── /kytice/firemni/    → Firemní květiny / B2B
│   ├── /kytice/predplatne/ → VK BOX / Předplatné
│   └── /kytice/[slug]/     → Detail produktu (PDP)
├── /o-nas/                 → O nás
├── /kontakt/               → Kontakt
├── /kosik/                 → Košík
├── /objednavka/            → Checkout
└── /potvrzeni/             → Potvrzení objednávky
```

### 2.2 Navigace — hlavní

5 top-level položek, Rituals-styl mega menu:

| Pozice | Label | Odkaz | Mega menu obsah |
|--------|-------|-------|-----------------|
| 1 | Smuteční | /smutecni/ | 6 podkategorií + hero obrázek + "Rychlá objednávka" CTA |
| 2 | Svatební | /svatebni/ | 3 podkategorií + inspirační obrázek |
| 3 | Kytice & Dárky | /kytice/ | 4 podkategorií + sezónní highlight |
| 4 | O nás | /o-nas/ | bez mega menu, přímý link |
| 5 | Kontakt | /kontakt/ | bez mega menu, přímý link |

Utility nav (vpravo): Košík (ikona + badge) + Telefon (+420 XXX XXX XXX)

### 2.3 Footer

Tři sloupce + spodní pás:
- **Sl. 1**: Logo VK (mamut) + claim + social ikony
- **Sl. 2**: Navigace (Smuteční, Svatební, Kytice, O nás, Kontakt)
- **Sl. 3**: Kontakt (adresa, telefon, email, otevírací doba)
- **Spodní pás**: "Součást ekosystému PEGAS" + link na pohrebpegas.cz + copyright

---

## 3. WIREFRAME SPECIFIKACE — HOMEPAGE

Struktura sekcí odshora dolů. Wireframe = čistý layout, grayscale, placeholder obrázky (šedé boxy s popiskem).

### Sekce 1: Hero (fullscreen)
- **Layout**: Fullscreen (100vh), obrázek na celou plochu, tmavý overlay gradient zdola
- **Obsah**: Claim "Vazby pro život. Vazby pro loučení." (display font, bílá), sub-text "Navrhujeme květiny pro chvíle, na kterých záleží." (body font), CTA button "Prohlédnout nabídku"
- **Chování**: Sticky navbar se zmenší při scrollu, hero obrázek má jemný parallax

### Sekce 2: Vstupní rozcestník (3 karty)
- **Layout**: 3 sloupce, rovnoměrné, gap 1.5rem
- **Karta**: Vysoká fotka (aspect 3:4), overlay gradient, kategorie název dole (h3), krátký popisek, hover = zoom obrázku + opacity overlay
- **Obsah karet**:
  1. "Smuteční květiny" — "S respektem a pochopením" → /smutecni/
  2. "Svatební květiny" — "Pro váš den" → /svatebni/
  3. "Kytice & Dárky" — "Když slova nestačí" → /kytice/

### Sekce 3: Vybrané produkty
- **Layout**: Heading "Vybrané pro vás" + grid 4 sloupce
- **Product card**: Fotka (1:1), název, cena, hover = CTA "Do košíku" slide-up
- **Pod gridem**: Link "Zobrazit vše" → /kytice/

### Sekce 4: Brand story blok
- **Layout**: 2 sloupce (text vlevo 5col, obrázek vpravo 7col), vertikálně centrováno
- **Obsah**: Overline "O nás", Heading "Květinářství, které rozumí chvílím, kdy na tom záleží.", Body text (2 odstavce z "Kdo jsme?"), CTA "Více o nás" → /o-nas/

### Sekce 5: Trust strip — propojení s PEGAS
- **Layout**: Úzký horizontální pás, centrovaný
- **Obsah**: Logo PEGAS (malé) + text "Součást ekosystému pohřební služby PEGAS" + link "pohrebpegas.cz"
- **Styl**: Jemný, neutrální, nepřebíjí — gray-100 background

### Sekce 6: Sezónní highlight (volitelná)
- **Layout**: Fullwidth banner, obrázek + overlay text
- **Obsah**: Aktuální sezónní nabídka (Dušičky / Vánoce / Valentýn — mění se dynamicky)

### Sekce 7: Footer
- Viz specifikace výše (2.3)

---

## 4. WIREFRAME SPECIFIKACE — KATEGORIE STRÁNKA

### Layout
- **Header**: Název kategorie (h1) + krátký popisek + počet produktů
- **Filtr**: Horizontální lišta nad gridem (typ vazby, cenový rozsah, barva, řazení)
- **Grid**: 3 sloupce desktop, 2 sloupce tablet, 1 sloupec mobil
- **Pagination**: "Načíst další" button (ne stránkování čísly)

### Product Card (komponenta)
- Fotka (aspect 1:1, object-fit cover)
- Název produktu (h4, heading font)
- Cena (mono font, semibold)
- Hover state: overlay s CTA "Přidat do košíku"
- Volitelně: badge "Novinka" / "Oblíbené" / "Sezónní"

---

## 5. WIREFRAME SPECIFIKACE — PRODUCT DETAIL PAGE (PDP)

### Layout
- **2 sloupce**: Galerie vlevo (7col), Info vpravo (5col), sticky
- **Galerie**: Hlavní fotka velká + thumbnaily pod ní (scroll)
- **Info blok**: Název (h1), cena, krátký popis, velikost/varianta selector, počet kusů, CTA "Přidat do košíku" (primary button fullwidth), sekundární "Rychlá objednávka" (pro smuteční)
- **Pod foldem**: Accordion — "Popis", "Složení kytice", "Dodání", "Péče o květiny"
- **Related**: Grid 4col "Mohlo by se vám líbit"

### Speciální flow pro smuteční produkty
- Prominentní "Rychlá objednávka" CTA — přeskočí košík, jde rovnou do checkout s předvyplněným formulářem
- Možnost přidat kondolenční kartičku (textarea + preview)
- Urgentní dodání info: "Doručíme do 4 hodin v Praze"

---

## 6. KOMPONENTOVÝ SYSTÉM

### 6.1 Button

| Varianta | Použití | Styl |
|----------|---------|------|
| Primary | Hlavní CTA | bg: deep-plum, text: white, hover: deep-plum-90 |
| Secondary | Sekundární akce | border: deep-plum, text: deep-plum, hover: bg deep-plum-10 |
| Ghost | Terciální | text: deep-plum, underline, hover: bg gray-50 |
| Accent | Promo/sezónní | bg: plum-50, text: white |

Velikosti: sm (h: 36px), md (h: 44px), lg (h: 52px)
Border-radius: sm (4px)

### 6.2 NavBar
- Fixed top, bg white, shadow-sm on scroll
- Logo vlevo, nav links center, utility vpravo
- Mega menu: fullwidth dropdown, max-height 400px, 4 sloupce + image
- Mobile: hamburger → fullscreen overlay s navigací

### 6.3 ProductCard
- Props: image, title, price, badge?, slug, category
- Hover: image scale 1.05, overlay fade-in s CTA
- Transition: base (300ms)

### 6.4 CategoryCard (vstupní rozcestník)
- Props: image, title, subtitle, href
- Aspect ratio: 3:4
- Overlay: linear-gradient(transparent 40%, rgba(9,7,8,0.7))
- Hover: image scale 1.03, text slide-up 8px

### 6.5 Hero
- Props: backgroundImage, heading, subheading, ctaText, ctaHref
- Overlay: linear-gradient(transparent 30%, rgba(9,7,8,0.6))
- Min-height: 100vh (homepage), 60vh (subpages)

### 6.6 SectionHeading
- Props: overline?, heading, body?, alignment (left | center)
- Overline: overline size, uppercase, letter-spacing widest, plum-50 color
- Heading: h2 size, heading font, tight line-height

### 6.7 TrustStrip
- Props: logo (PEGAS), text, linkText, linkHref
- Minimal: gray-100 bg, centered, body-sm size

### 6.8 Footer
- 3-column grid + bottom bar
- Logo + social + nav links + contact info

### 6.9 MegaMenu
- Trigger: hover/click na nav link
- Content: slotted — sloupce s linky + featured image
- Animace: fade-in + slide-down (fast transition)

### 6.10 Accordion
- Props: items[{title, content}]
- Jeden otevřený najednou
- Ikona: chevron rotace 180°

---

## 7. IMPLEMENTAČNÍ POKYNY

### Tech stack
- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS** (custom config s design tokeny)
- **CSS custom properties** pro barvy (umožňuje budoucí dark mode / theming)

### Postup implementace

**Krok 1: Scaffold projektu**
```bash
npx create-next-app@latest vazbykvetin --typescript --tailwind --app --src-dir
```

**Krok 2: Tailwind config**
Aplikovat design tokeny do `tailwind.config.ts` — extend colors, fontFamily, spacing, fontSize, breakpoints.

**Krok 3: CSS custom properties**
Vytvořit `globals.css` s CSS custom properties pro barvy — `--color-primary`, `--color-accent`, atd.

**Krok 4: Google Fonts**
Import Cormorant Garamond (400, 500, 600, 700) a DM Sans (400, 500, 600) v `layout.tsx`.

**Krok 5: Komponenty — atomické**
Button → SectionHeading → ProductCard → CategoryCard → Accordion

**Krok 6: Komponenty — kompozitní**
NavBar → MegaMenu → Hero → TrustStrip → Footer

**Krok 7: Stránky — wireframe verze (grayscale)**
Všechny stránky bez barev — jen layout, spacing, typografie v gray. Placeholder obrázky jako šedé boxy s textem.

**Krok 8: Obarvení**
Aplikovat barvy, hover states, transitions, shadow. Grayscale → full color.

**Krok 9: Responzivita**
Mobile-first refinement — mega menu → hamburger, grid 3→2→1 col, hero text sizing.

**Krok 10: Micro-interakce**
Scroll-triggered reveals (IntersectionObserver), navbar shrink, card hovers, page transitions.

### Konvence
- Složky: `src/components/`, `src/app/`, `src/lib/`, `src/styles/`
- Naming: PascalCase pro komponenty, kebab-case pro soubory
- Každá komponenta: `ComponentName.tsx` + exporty v `index.ts`

---

## 8. COPY DECK — KLÍČOVÉ TEXTY

### Homepage Hero
- **Heading**: "Vazby pro život. Vazby pro loučení."
- **Sub**: "Navrhujeme květiny pro chvíle, na kterých záleží."
- **CTA**: "Prohlédnout nabídku"

### Vstupní rozcestník
- Karta 1: "Smuteční květiny" / "S respektem a pochopením"
- Karta 2: "Svatební květiny" / "Pro váš den"
- Karta 3: "Kytice & Dárky" / "Když slova nestačí"

### O nás blok
- **Overline**: "O nás"
- **Heading**: "Květinářství, které rozumí chvílím, kdy na tom záleží."
- **Body**: "Známe prostředí loučení a víme, jak důležité je umět vyjádřit pocity ve chvílích, kdy na tom záleží. Budujeme květinářství, které těmto situacím rozumí. Neprodáváme jen květiny — nabízíme způsob, jak něco říct, když slova nestačí."
- **CTA**: "Více o nás"

### Trust strip
- "Součást ekosystému pohřební služby PEGAS"

### Footer claim
- "Vazby mezi lidmi, které nekončí."

---

## 9. VIZUÁLNÍ PRAVIDLA (Z BRAND MANUÁLU PEGAS)

- **Kompozice**: Vzdušnost, prostor, nechat dýchat. Preferovat středové nebo horizontálně vyvážené uspořádání.
- **Fotografie**: Přirozené měkké světlo, neutrální barvy, ticho a klid. Náznak místo popisu.
- **Ilustrace**: Jemné, polorealistické, přírodní struktury — PEGAS používá křídla, VK používá mamuta a květinové motivy.
- **Celkový pocit**: Klidný, důstojný, lidský. Žádný patos, žádná dramatičnost. Prostor pro osobní prožitek.

---

## 10. PLACEHOLDER DATA — PRODUKTY (pro wireframe)

```json
[
  {"id": 1, "name": "Smuteční kytice Klid", "price": 1490, "category": "smutecni", "badge": null},
  {"id": 2, "name": "Věnec Vzpomínka", "price": 2890, "category": "smutecni", "badge": null},
  {"id": 3, "name": "Kytice na rakev Ticho", "price": 3490, "category": "smutecni", "badge": null},
  {"id": 4, "name": "Kytice na urnu Světlo", "price": 1290, "category": "smutecni", "badge": null},
  {"id": 5, "name": "Svatební kytice Harmonie", "price": 2490, "category": "svatebni", "badge": "Oblíbené"},
  {"id": 6, "name": "Svatební kytice Ranní rosa", "price": 1990, "category": "svatebni", "badge": null},
  {"id": 7, "name": "Dekorace obřadu Elegance", "price": 4990, "category": "svatebni", "badge": null},
  {"id": 8, "name": "Kytice Sluneční den", "price": 890, "category": "kytice", "badge": "Novinka"},
  {"id": 9, "name": "Kytice Polní sen", "price": 790, "category": "kytice", "badge": null},
  {"id": 10, "name": "VK BOX — měsíční předplatné", "price": 1290, "category": "kytice", "badge": "Předplatné"},
  {"id": 11, "name": "Firemní kytice Profesionál", "price": 1590, "category": "firemni", "badge": null},
  {"id": 12, "name": "Sezónní — Dušičky", "price": 990, "category": "kytice", "badge": "Sezónní"}
]
```
