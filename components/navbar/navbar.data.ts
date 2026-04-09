export interface NavLink {
  label: string
  href: string
}

export interface MegaMenuGroup {
  heading: string
  href: string
  items: NavLink[]
}

export interface MegaMenuFeatured {
  title: string
  href: string
  image: string
  price: string
}

export interface MegaMenuCategory {
  label: string
  href: string
  subcategories: NavLink[]
  groups?: MegaMenuGroup[]
  cta?: { label: string; href: string }
  featured?: MegaMenuFeatured
}

export const megaMenuCategories: MegaMenuCategory[] = [
  {
    label: "Nabídka",
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
        ],
      },
    ],
    cta: { label: "Rychlá objednávka", href: "/smutecni/" },
    featured: {
      title: "Kytice na rakev Ticho",
      href: "/smutecni/kytice-na-rakev-ticho/",
      image:
        "https://images.unsplash.com/photo-1535046173-1e4f853c48aa?w=600&h=750&fit=crop&auto=format",
      price: "3 490 Kč",
    },
  },
]

export const simpleLinks: NavLink[] = [
  { label: "O nás", href: "/o-nas/" },
  { label: "Inspirace & rady", href: "/rady-a-tipy/" },
  { label: "Kontakt", href: "/kontakt/" },
]

export const footerNav: NavLink[] = [
  { label: "Smuteční květiny", href: "/smutecni/" },
  { label: "Svatební květiny", href: "/svatebni/" },
  { label: "O nás", href: "/o-nas/" },
  { label: "Inspirace & rady", href: "/rady-a-tipy/" },
  { label: "Kontakt", href: "/kontakt/" },
]
