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
          { label: "Kytice na rakev", href: "/smutecni/rakev/" },
          { label: "Kytice na rakev — převislé", href: "/smutecni/rakev-previsle/" },
          { label: "Exkluzivní smuteční vazby", href: "/smutecni/exkluzivni/" },
          { label: "Kytice na položení", href: "/smutecni/polozeni/" },
          { label: "Kytice volně vázané", href: "/smutecni/volne-vazane/" },
          { label: "Věnce", href: "/smutecni/vence/" },
          { label: "Aranžmá do stojanů", href: "/smutecni/stojany/" },
          { label: "Aranžmá na přání", href: "/smutecni/na-prani/" },
        ],
      },
      {
        heading: "Svatební květiny",
        href: "/svatebni/",
        items: [
          { label: "Kytice pro nevěsty", href: "/svatebni/kytice/" },
          { label: "Kytice pro družičky", href: "/svatebni/druzicky/" },
          { label: "Klopy", href: "/svatebni/klopy/" },
          { label: "Květinová výzdoba stolů", href: "/svatebni/dekorace/" },
          { label: "Svatební komplety", href: "/svatebni/komplety/" },
        ],
      },
      {
        heading: "Ostatní kytice",
        href: "/kytice/",
        items: [
          { label: "Z lásky", href: "/kytice/z-lasky/" },
          { label: "Pro maminky", href: "/kytice/pro-maminky/" },
          { label: "Pro muže", href: "/kytice/pro-muze/" },
          { label: "Kytičky pro dětičky", href: "/kytice/pro-deti/" },
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
  { label: "Smuteční květiny", href: "/smutecni/" },
  { label: "Svatební květiny", href: "/svatebni/" },
  { label: "Ostatní kytice", href: "/kytice/" },
  { label: "Reference", href: "/reference/" },
  { label: "O nás", href: "/o-nas/" },
  { label: "Rady a tipy", href: "/rady-a-tipy/" },
  { label: "Kontakt", href: "/kontakt/" },
]
