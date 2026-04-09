# Vazby Květin — Audit & TODO

Audit provedený 2026-04-08. Kompletní průchod všech stránek, komponent a funkcí.

---

## P0 — Kritické (blokují použitelnost)

- [ ] **Rozbité 404 stránky z navigace** — `/reference`, `/firemni`, `/predplatne`, `/na-prani` vedou na default Next.js 404, přitom jsou linkované z hlavní nav a footeru
- [ ] **Custom `not-found.tsx`** — chybí branded 404 stránka (teď je černá s anglickým textem)
- [ ] **Custom `error.tsx` + `global-error.tsx`** — žádné error boundary, runtime error zobrazí default Next.js error
- [ ] **Produktové fotky** — 23 z 30 produktů nemá obrázek (`image: null`), zobrazuje se šedý placeholder "Foto produktu"
- [ ] **Product detail galerie** — hlavní foto je placeholder "Hlavní foto produktu", thumbnaily jsou čísla "1, 2, 3, 4"

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

- [ ] **Filtry na kategoriích nefunkční** — tlačítka "Typ vazby", "Cenový rozsah", "Barva", "Řazení" nic nedělají
- [ ] **Velikostní selektor (S/M/L) nefunguje** — žádný state management, nekomunikuje s košíkem, nemění cenu
- [ ] **"Načíst další" tlačítko nefunguje** — na stránkách kategorií nemá logiku
- [ ] **"Rychlá objednávka" nemá handler** — tlačítko na product detail nemá submit logiku
- [ ] **`loading.tsx` states** — žádné loading skeletony, při přechodu mezi stránkami je prázdná stránka
- [ ] **Breadcrumbs na product detail** — subcategory stránky mají, product detail ne
- [ ] **Vyhledávání** — e-shop s 30+ produkty nemá search
- [ ] **`/potvrzeni/` přístupná přímo** — stránka potvrzení by neměla být dostupná bez objednávky

## P3 — Nice-to-have / UX doporučení

- [ ] **Cart drawer — název produktu se ořezává** — "Kytice na rakev Tic..." nemá dost prostoru
- [ ] **Checkout platba kartou** — formulář vypadá funkčně ale nic nedělá; lepší "Budete přesměrováni na platební bránu"
- [ ] **Hardcoded číslo objednávky** — potvrzení vždy ukazuje "VK-2024-0042"
- [ ] **Fake bankovní údaje** — platba převodem ukazuje "123456789 / 0800"
- [ ] **Footer — otvírací doby neuvádí sobotu** (kontaktní stránka ano — "Sobota: Zavřeno")
- [ ] **Homepage CTA** — "Prohlédnout nabídku" vede na `/kytice/`, mělo by vést na `/smutecni/` (hlavní obor)
- [ ] **Mega menu featured product hardcoded** — "Kytice na rakev Ticho" napevno v navbar data
- [ ] **Desktop nav label "Vazby"** — příliš obecný, doporučuji "Nabídka" nebo "Smuteční květiny"
- [ ] **Product card hover overlay** — na mobilu se zobrazí permanentně, na desktopu zakrývá obrázek

---

## Statistiky

- **Celkem stránek:** 13 route groups
- **Funkčních:** 9 (/, /smutecni, /svatebni, /kytice, /o-nas, /rady-a-tipy, /kontakt, /kosik, /objednavka, /potvrzeni)
- **404:** 4 (/reference, /firemni, /predplatne, /na-prani)
- **Produktů celkem:** ~30
- **Produktů s obrázkem:** 7
- **Produktů bez obrázku:** 23
- **Console errors:** 0
