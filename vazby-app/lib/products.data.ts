export interface Product {
  id: number
  name: string
  slug: string
  price: number
  category: string
  badge: string | null
  description: string
  composition: string
  delivery: string
  care: string
}

export interface CategoryMeta {
  label: string
  description: string
}

export const categories: Record<string, CategoryMeta> = {
  smutecni: {
    label: "Smuteční květiny",
    description:
      "Květiny pro chvíle loučení — s respektem, pochopením a důstojností.",
  },
  svatebni: {
    label: "Svatební květiny",
    description:
      "Květinové aranžmá pro váš den — kytice, dekorace obřadu i doplňky.",
  },
  kytice: {
    label: "Kytice & Dárky",
    description:
      "Když slova nestačí — narozeninové, sezónní i firemní květiny.",
  },
}

export const products: Product[] = [
  {
    id: 1,
    name: "Smuteční kytice Klid",
    slug: "smutecni-kytice-klid",
    price: 1490,
    category: "smutecni",
    badge: null,
    description:
      "Jemná smuteční kytice v tlumených tónech bílé a krémové. Vyjadřuje úctu a tiché souznění.",
    composition: "Bílé růže, eustoma, eucalyptus, gypsophila, zeleň.",
    delivery:
      "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Kytici uchovávejte v čerstvé vodě. Vydrží 5–7 dní.",
  },
  {
    id: 2,
    name: "Věnec Vzpomínka",
    slug: "venec-vzpominka",
    price: 2890,
    category: "smutecni",
    badge: null,
    description:
      "Tradiční smuteční věnec z čerstvých květin. Kruhový tvar symbolizuje věčnost a nekonečnou vzpomínku.",
    composition:
      "Bílé a růžové karafiáty, chryzantémy, zeleň, stuha s nápisem.",
    delivery:
      "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Věnec vydržel v čerstvém stavu 3–5 dní. Uchovávejte v chladnu.",
  },
  {
    id: 3,
    name: "Kytice na rakev Ticho",
    slug: "kytice-na-rakev-ticho",
    price: 3490,
    category: "smutecni",
    badge: null,
    description:
      "Podélná kytice určená k položení na rakev. Elegantní a důstojná kompozice.",
    composition: "Lilie, bílé růže, orchideje, asparagus, ruskus.",
    delivery:
      "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Kytici je možné opatrně kropit vodou pro prodloužení svěžesti.",
  },
  {
    id: 4,
    name: "Kytice na urnu Světlo",
    slug: "kytice-na-urnu-svetlo",
    price: 1290,
    category: "smutecni",
    badge: null,
    description:
      "Menší aranžmá určené k urně. Světlé tóny symbolizují naději a klid.",
    composition: "Bílé frézie, mini růže, eucalyptus, zeleň.",
    delivery:
      "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Umístěte do nádoby s vodou. Vydrží 4–6 dní.",
  },
  {
    id: 5,
    name: "Svatební kytice Harmonie",
    slug: "svatebni-kytice-harmonie",
    price: 2490,
    category: "svatebni",
    badge: "Oblíbené",
    description:
      "Romantická svatební kytice v pastelových tónech. Ideální pro jarní a letní svatby.",
    composition: "Pivoňky, David Austin růže, eucalyptus, hedvábné stuhy.",
    delivery: "Doručení v den svatby ráno. Nutná rezervace min. 14 dní předem.",
    care: "Kytici uchovávejte v chladnu do obřadu. Před použitím lehce pokropte.",
  },
  {
    id: 6,
    name: "Svatební kytice Ranní rosa",
    slug: "svatebni-kytice-ranni-rosa",
    price: 1990,
    category: "svatebni",
    badge: null,
    description:
      "Něžná kytice inspirovaná ranní zahradou. Přirozený, lehce divoký styl.",
    composition: "Luční kvítí, drobné růže, levandule, trávy, len.",
    delivery: "Doručení v den svatby ráno. Nutná rezervace min. 14 dní předem.",
    care: "Kytici uchovávejte v čerstvé vodě mimo přímé slunce.",
  },
  {
    id: 7,
    name: "Dekorace obřadu Elegance",
    slug: "dekorace-obradu-elegance",
    price: 4990,
    category: "svatebni",
    badge: null,
    description:
      "Kompletní květinová dekorace obřadního místa. Zahrnuje výzdobu uličky, oltáře a vstupní brány.",
    composition:
      "Bílé růže, hortenzie, orchideje, zeleň, svíčky, stojany (zapůjčení).",
    delivery:
      "Instalace v místě obřadu ráno v den svatby. Konzultace předem nutná.",
    care: "O dekoraci se postaráme — instalace i úklid v ceně.",
  },
  {
    id: 8,
    name: "Kytice Sluneční den",
    slug: "kytice-slunecni-den",
    price: 890,
    category: "kytice",
    badge: "Novinka",
    description:
      "Veselá kytice plná slunečnic a žlutých tónů. Ideální dárek k narozeninám.",
    composition: "Slunečnice, solidago, germini, zeleň.",
    delivery: "Doručení v Praze do 3 hodin. Mimo Prahu následující den.",
    care: "Kytici přistřihněte a vložte do čerstvé vody. Vydrží 7–10 dní.",
  },
  {
    id: 9,
    name: "Kytice Polní sen",
    slug: "kytice-polni-sen",
    price: 790,
    category: "kytice",
    badge: null,
    description:
      "Kytice z lučních květin — přirozená, lehká, jako procházka polem.",
    composition: "Heřmánek, chrpa, mák, trávy, len, drobné kvítí.",
    delivery: "Doručení v Praze do 3 hodin. Mimo Prahu následující den.",
    care: "Luční květiny mají kratší životnost (3–5 dní). Měňte vodu denně.",
  },
  {
    id: 10,
    name: "VK BOX — měsíční předplatné",
    slug: "vk-box-mesicni-predplatne",
    price: 1290,
    category: "kytice",
    badge: "Předplatné",
    description:
      "Každý měsíc čerstvá sezónní kytice až k vašim dveřím. Překvapení od našich floristů.",
    composition: "Sezónní mix — každý měsíc jiný, vždy čerstvý.",
    delivery: "Doručení první pracovní pondělí v měsíci.",
    care: "Návod k péči přiložen v každém boxu.",
  },
  {
    id: 11,
    name: "Firemní kytice Profesionál",
    slug: "firemni-kytice-profesional",
    price: 1590,
    category: "kytice",
    badge: null,
    description:
      "Elegantní kytice pro firemní prostory, recepce nebo jako dárek obchodním partnerům.",
    composition: "Bílé lilie, anthurium, zeleň, minimalistická vazba.",
    delivery:
      "Pravidelné doručení dle dohody. Jednorázově do 24 hodin v Praze.",
    care: "Přistřihněte stonky, měňte vodu každé 2 dny. Vydrží 7–14 dní.",
  },
  {
    id: 12,
    name: "Sezónní — Dušičky",
    slug: "sezonni-dusicky",
    price: 990,
    category: "kytice",
    badge: "Sezónní",
    description:
      "Pietní kytice pro vzpomínku na Dušičky. Tlumené barvy, přírodní materiály.",
    composition: "Chryzantémy, vřes, mech, šišky, sušené listy.",
    delivery: "Doručení v Praze do 3 hodin. Mimo Prahu následující den.",
    care: "Obsahuje sušené prvky — vydrží déle než čerstvé květiny (10–14 dní).",
  },
]

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category)
}

export function getProductBySlug(
  category: string,
  slug: string,
): Product | undefined {
  return products.find((p) => p.category === category && p.slug === slug)
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit)
}
