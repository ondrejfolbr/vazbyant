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
        heading: "Smuteční & pietní květiny",
        href: "/smutecni/",
        items: [
          { label: "Kytice na rakev", href: "/smutecni/rakev/" },
          { label: "Převislé kytice na rakev", href: "/smutecni/rakev-previsle/" },
          { label: "Exkluzivní smuteční vazby", href: "/smutecni/exkluzivni/" },
          { label: "Kytice na položení", href: "/smutecni/polozeni/" },
          { label: "Kytice volně vázané", href: "/smutecni/volne-vazane/" },
          { label: "Věnce", href: "/smutecni/vence/" },
        ],
      },
      {
        heading: "",
        href: "/smutecni/",
        items: [
          { label: "Květinová aranžmá do stojanů", href: "/smutecni/stojany/" },
          { label: "Aranžmá na přání", href: "/smutecni/na-prani/" },
          { label: "Pietní dekorace", href: "/smutecni/dekorace/" },
          { label: "Květiny k výročí úmrtí", href: "/smutecni/vyroci/" },
          { label: "Květiny k rozloučení / VIP", href: "/smutecni/vip/" },
          { label: "Květinové koše", href: "/smutecni/kose/" },
        ],
      },
      {
        heading: "Další služby",
        href: "/svatebni/",
        items: [
          { label: "Svatební květiny", href: "/svatebni/" },
          { label: "Firemní květiny", href: "/firemni/" },
          { label: "Květinové předplatné", href: "/predplatne/" },
          { label: "Květiny na přání", href: "/na-prani/" },
        ],
      },
    ],
    cta: { label: "Rychlá objednávka", href: "/smutecni/" },
  },
]

export const simpleLinks: NavLink[] = [
  { label: "Reference", href: "/reference/" },
  { label: "O nás", href: "/o-nas/" },
  { label: "Inspirace & rady", href: "/rady-a-tipy/" },
  { label: "Kontakt", href: "/kontakt/" },
]

export const footerNav: NavLink[] = [
  { label: "Smuteční květiny", href: "/smutecni/" },
  { label: "Svatební květiny", href: "/svatebni/" },
  { label: "Firemní květiny", href: "/firemni/" },
  { label: "Květinové předplatné", href: "/predplatne/" },
  { label: "Reference", href: "/reference/" },
  { label: "O nás", href: "/o-nas/" },
  { label: "Inspirace & rady", href: "/rady-a-tipy/" },
  { label: "Kontakt", href: "/kontakt/" },
]
