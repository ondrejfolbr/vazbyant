# Vazby Květin — Audit & TODO

Audit provedený 2026-04-08. Kompletní průchod všech stránek, komponent a funkcí.

---

## P0 — Kritické (blokují použitelnost)

- [x] **Rozbité 404 stránky z navigace** — odstraněny mrtvé linky z nav, včetně `/smutecni/na-prani/`
- [x] **Custom `not-found.tsx`** — branded 404 stránka s česky textem a navigačními kartami
- [x] **Custom `error.tsx` + `global-error.tsx`** — branded error boundaries s českým textem
- [x] **Produktové fotky** — všech 31 produktů má reálné Unsplash obrázky
- [x] **Product detail galerie** — plnohodnotná galerie s thumbnaily a fade přechody

## P1 — Důležité

- [x] **Hero obrázky na podstránkách** — přidány Unsplash background images na všech 5 podstránkách + dynamic [category] route
- [x] **Stránka O nás — placeholder obrázky** — nahrazeny 4 placeholdery next/image s Unsplash fotkami
- [x] **Stránka Svatební — placeholder obrázky** — nahrazeny 3 service card + 6 gallery placeholderů; stejně tak Kytice page
- [x] **Chybějící stránky vytvořit nebo odstranit z nav:** — odstraněny mrtvé linky z mega menu, simpleLinks i footerNav
  - [x] `/reference` — odstraněno ze simpleLinks a footerNav
  - [x] `/firemni` — odstraněno z mega menu a footerNav
  - [x] `/predplatne` — odstraněno z mega menu a footerNav
  - [x] `/na-prani` — odstraněno z mega menu
- [x] **Sociální sítě** — Instagram a Facebook linky nahrazeny `#` placeholder (čeká na reálné URL profilu)
- [x] **Kontakt — mapa je placeholder** — nahrazeno Google Maps iframe embedem pro Mirošovická 704, Mnichovice
- [x] **SEO metadata** — přidány generateMetadata pro [category] a [category]/[slug] routes; všechny statické stránky už měly descriptions
- [x] **Chybějící video `hero-home.mp4`** — odstraněna reference, homepage nyní používá pouze `/hero-home-2.jpg`

## P2 — Vylepšení

- [x] **Filtry na kategoriích nefunkční** — nahrazeny funkčními filtry (podkategorie, cenový rozsah, řazení) v CategoryFilters komponentě
- [x] **Velikostní selektor (S/M/L) nefunguje** — SizeSelector s useState, variant se předává do košíku
- [x] **"Načíst další" tlačítko nefunguje** — klientská paginace (9 produktů na stránku) integrovaná do CategoryFilters
- [x] **"Rychlá objednávka" nemá handler** — přidá produkt do košíku + redirect na /objednavka s prefill kondolenčního vzkazu
- [x] **`loading.tsx` states** — 3 route-specifické loading skeletony (root, category, product detail)
- [x] **Breadcrumbs na product detail** — reusable Breadcrumb komponenta s ol/li, přidána na product detail i subcategory
- [x] **Vyhledávání** — Cmd+K search dialog s fulltextovým vyhledáváním přes produkty
- [x] **`/potvrzeni/` přístupná přímo** — guard přes sessionStorage, redirect na / bez platné objednávky

## P3 — Nice-to-have / UX doporučení

- [x] **Cart drawer — název produktu se ořezává** — `truncate` nahrazeno `line-clamp-2` pro dvouřádkový zobrazení
- [x] **Checkout platba kartou** — fake formulář nahrazen textem "Budete přesměrováni na platební bránu"
- [x] **Hardcoded číslo objednávky** — generuje se náhodné VK-{rok}-{číslo}
- [x] **Fake bankovní údaje** — číslo účtu i VS zobrazují placeholder "— bude doplněno —"
- [x] **Footer — otvírací doby neuvádí sobotu** — přidáno "So: Zavřeno"
- [x] **Homepage CTA** — CTA nyní vede na `/smutecni/`
- [x] **Mega menu featured product hardcoded** — featured product nyní čte z navbar.data.ts
- [x] **Desktop nav label "Vazby"** — přejmenováno na "Nabídka"
- [x] **Product card hover overlay** — hover efekty omezeny na `@media (hover: hover)`, na touch zařízeních se nezobrazují

---

## Statistiky

- **Celkem stránek:** 13 route groups
- **Funkčních:** 9 (/, /smutecni, /svatebni, /kytice, /o-nas, /rady-a-tipy, /kontakt, /kosik, /objednavka, /potvrzeni)
- **404:** 4 (/reference, /firemni, /predplatne, /na-prani)
- **Produktů celkem:** ~30
- **Produktů s obrázkem:** 7
- **Produktů bez obrázku:** 23
- **Console errors:** 0
