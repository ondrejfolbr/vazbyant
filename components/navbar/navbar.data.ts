export interface NavLink {
  label: string
  href: string
}

export interface MegaMenuGroup {
  heading: string
  href: string
  items: NavLink[]
}

export interface MegaMenuCategory {
  label: string
  href: string
  subcategories: NavLink[]
  groups?: MegaMenuGroup[]
  cta?: { label: string; href: string }
}

export const megaMenuCategories: MegaMenuCategory[] = [
  {
    label: "Vazby",
    href: "/smutecni/",
    subcategories: [],
    groups: [
      {
        heading: "Smuteční květiny",
        href: "/smutecni/",
        items: [
          { label: "Pohřební kytice", href: "/smutecni/kytice/" },
          { label: "Smuteční věnce", href: "/smutecni/vence/" },
          { label: "Kytice na rakev", href: "/smutecni/rakev/" },
          { label: "Kytice na urnu", href: "/smutecni/urna/" },
          { label: "Pietní dekorace", href: "/smutecni/dekorace/" },
          { label: "Květinové koše", href: "/smutecni/kose/" },
        ],
      },
      {
        heading: "Svatební květiny",
        href: "/svatebni/",
        items: [
          { label: "Svatební kytice", href: "/svatebni/kytice/" },
          { label: "Dekorace obřadu", href: "/svatebni/dekorace/" },
          { label: "Doplňky", href: "/svatebni/doplnky/" },
        ],
      },
      {
        heading: "Kytice & Dárky",
        href: "/kytice/",
        items: [
          { label: "Narozeninové", href: "/kytice/narozeniny/" },
          { label: "Sezónní", href: "/kytice/sezonni/" },
          { label: "Firemní květiny", href: "/kytice/firemni/" },
          { label: "VK BOX / Předplatné", href: "/kytice/predplatne/" },
        ],
      },
    ],
    cta: { label: "Rychlá objednávka", href: "/smutecni/" },
  },
]

export const simpleLinks: NavLink[] = [
  { label: "Reference", href: "/reference/" },
  { label: "O nás", href: "/o-nas/" },
  { label: "Rady a tipy", href: "/rady-a-tipy/" },
  { label: "Kontakt", href: "/kontakt/" },
]

export const footerNav: NavLink[] = [
  { label: "Vazby", href: "/smutecni/" },
  { label: "Reference", href: "/reference/" },
  { label: "O nás", href: "/o-nas/" },
  { label: "Rady a tipy", href: "/rady-a-tipy/" },
  { label: "Kontakt", href: "/kontakt/" },
]
