export interface NavLink {
  label: string
  href: string
}

export interface MegaMenuCategory {
  label: string
  href: string
  subcategories: NavLink[]
  cta?: { label: string; href: string }
}

export const megaMenuCategories: MegaMenuCategory[] = [
  {
    label: "Smuteční",
    href: "/smutecni/",
    subcategories: [
      { label: "Pohřební kytice", href: "/smutecni/kytice/" },
      { label: "Smuteční věnce", href: "/smutecni/vence/" },
      { label: "Kytice na rakev", href: "/smutecni/rakev/" },
      { label: "Kytice na urnu", href: "/smutecni/urna/" },
      { label: "Pietní dekorace", href: "/smutecni/dekorace/" },
      { label: "Květinové koše", href: "/smutecni/kose/" },
    ],
    cta: { label: "Rychlá objednávka", href: "/smutecni/" },
  },
  {
    label: "Svatební",
    href: "/svatebni/",
    subcategories: [
      { label: "Svatební kytice", href: "/svatebni/kytice/" },
      { label: "Dekorace obřadu", href: "/svatebni/dekorace/" },
      { label: "Doplňky", href: "/svatebni/doplnky/" },
    ],
  },
  {
    label: "Kytice & Dárky",
    href: "/kytice/",
    subcategories: [
      { label: "Narozeninové", href: "/kytice/narozeniny/" },
      { label: "Sezónní", href: "/kytice/sezonni/" },
      { label: "Firemní květiny", href: "/kytice/firemni/" },
      { label: "VK BOX / Předplatné", href: "/kytice/predplatne/" },
    ],
  },
]

export const simpleLinks: NavLink[] = [
  { label: "O nás", href: "/o-nas/" },
  { label: "Kontakt", href: "/kontakt/" },
]

export const footerNav: NavLink[] = [
  { label: "Smuteční", href: "/smutecni/" },
  { label: "Svatební", href: "/svatebni/" },
  { label: "Kytice & Dárky", href: "/kytice/" },
  { label: "O nás", href: "/o-nas/" },
  { label: "Kontakt", href: "/kontakt/" },
]
