export interface Product {
  id: number
  name: string
  slug: string
  price: number
  category: string
  subcategory: string | null
  badge: string | null
  image: string | null
  images: string[]
  description: string
  composition: string
  delivery: string
  care: string
}

export interface CategoryMeta {
  label: string
  description: string
  heroImage: string
}

export interface SubcategoryMeta {
  label: string
  description: string
  parentCategory: string
}

export const categories: Record<string, CategoryMeta> = {
  smutecni: {
    label: "Smuteční květiny",
    description:
      "Květiny pro chvíle loučení — s respektem, pochopením a důstojností.",
    heroImage:
      "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?w=1920&q=80",
  },
  svatebni: {
    label: "Svatební květiny",
    description:
      "Květinové aranžmá pro váš den — kytice, dekorace obřadu i doplňky.",
    heroImage:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80",
  },
  kytice: {
    label: "Ostatní kytice",
    description:
      "Když slova nestačí — kytice z lásky, pro maminky, pro muže i pro děti.",
    heroImage:
      "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1920&q=80",
  },
}

// ---------------------------------------------------------------------------
// Subcategories — aligned with mega menu structure
// ---------------------------------------------------------------------------

export const subcategories: Record<string, SubcategoryMeta> = {
  "smutecni/rakev": {
    label: "Kytice na rakev",
    description:
      "Podélné kompozice určené k položení na rakev — elegantní, důstojné, na míru.",
    parentCategory: "smutecni",
  },
  "smutecni/rakev-previsle": {
    label: "Převislé kytice na rakev",
    description:
      "Převislé kompozice splývající přes hranu rakve — dramatické a majestátní.",
    parentCategory: "smutecni",
  },
  "smutecni/exkluzivni": {
    label: "Exkluzivní smuteční vazby",
    description:
      "Prémiové smuteční aranžmá z nejkvalitnějších květin — na míru vašim přáním.",
    parentCategory: "smutecni",
  },
  "smutecni/polozeni": {
    label: "Kytice na položení",
    description:
      "Menší kytice určené k položení u hrobu nebo na pietní místo.",
    parentCategory: "smutecni",
  },
  "smutecni/volne-vazane": {
    label: "Kytice volně vázané",
    description:
      "Přirozeně vázané smuteční kytice — jemné, osobní, s nádechem zahrady.",
    parentCategory: "smutecni",
  },
  "smutecni/vence": {
    label: "Věnce",
    description:
      "Tradiční i moderní věnce z čerstvých květin. Kruhový tvar symbolizuje věčnou vzpomínku.",
    parentCategory: "smutecni",
  },
  "smutecni/stojany": {
    label: "Květinová aranžmá do stojanů",
    description:
      "Vysoká květinová aranžmá do stojanů pro obřadní síně a rozloučení.",
    parentCategory: "smutecni",
  },
  "smutecni/na-prani": {
    label: "Aranžmá na přání",
    description:
      "Smuteční květiny vytvořené přesně podle vašich představ — individuální konzultace.",
    parentCategory: "smutecni",
  },
  "smutecni/dekorace": {
    label: "Pietní dekorace",
    description:
      "Květinová dekorace ke stolu, k fotografii, k oltáři — s citem a respektem.",
    parentCategory: "smutecni",
  },
  "smutecni/vyroci": {
    label: "Květiny k výročí úmrtí",
    description:
      "Kytice a aranžmá pro vzpomínkové příležitosti — výročí, svátky, pietní dny.",
    parentCategory: "smutecni",
  },
  "smutecni/vip": {
    label: "Květiny k rozloučení / VIP / firemní kondolence",
    description:
      "Prémiové smuteční vazby pro významné příležitosti — VIP rozloučení, firemní kondolence.",
    parentCategory: "smutecni",
  },
  "smutecni/kose": {
    label: "Květinové koše",
    description:
      "Květinové koše ve smutečním formátu — alternativa ke klasickým kyticím.",
    parentCategory: "smutecni",
  },
}

// ---------------------------------------------------------------------------
// Products — ~25 per category
// ---------------------------------------------------------------------------

export const products: Product[] = [
  // ==========================================================================
  // SMUTEČNÍ (~25 products)
  // ==========================================================================

  // -- Kytice na rakev --
  {
    id: 1,
    name: "Kytice na rakev Ticho",
    slug: "kytice-na-rakev-ticho",
    price: 3490,
    category: "smutecni",
    subcategory: "rakev",
    badge: null,
    image: "/hero-home-2.jpg",
    images: [
      "https://images.unsplash.com/photo-1535046173-1e4f853c48aa?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1529330821961-0414396878d8?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1570112008549-e4181988109f?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1500994802273-2dd2df834939?w=600&h=750&fit=crop&auto=format",
    ],
    description:
      "Podélná kytice určená k položení na rakev. Elegantní a důstojná kompozice v bílých tónech.",
    composition: "Lilie, bílé růže, orchideje, asparagus, ruskus.",
    delivery: "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Kytici je možné opatrně kropit vodou pro prodloužení svěžesti.",
  },
  {
    id: 2,
    name: "Kytice na rakev Klid",
    slug: "kytice-na-rakev-klid",
    price: 2990,
    category: "smutecni",
    subcategory: "rakev",
    badge: null,
    image: "/kvetiny08.png",
    images: [
      "/kvetiny08.png",
    ],
    description:
      "Klasická rakevní kytice v tlumených barvách — bílá a zelená s nádechem levandule.",
    composition: "Bílé karafiáty, lisianthus, levandule, zeleň.",
    delivery: "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Kytici je možné opatrně kropit vodou pro prodloužení svěžesti.",
  },
  {
    id: 3,
    name: "Kytice na rakev Památka",
    slug: "kytice-na-rakev-pamatka",
    price: 4290,
    category: "smutecni",
    subcategory: "rakev",
    badge: "Oblíbené",
    image: "/kvetiny09.png",
    images: [
      "/kvetiny09.png",
    ],
    description:
      "Bohatá kompozice s bílými liliemi a růžemi. Nadčasová elegance pro důstojné rozloučení.",
    composition: "Bílé lilie, růže, chryzantémy, eucalyptus, gypsophila.",
    delivery: "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Kytici je možné opatrně kropit vodou pro prodloužení svěžesti.",
  },

  // -- Kytice na rakev - převislé --
  {
    id: 4,
    name: "Převislá kytice Kaskáda",
    slug: "previsla-kytice-kaskada",
    price: 4990,
    category: "smutecni",
    subcategory: "rakev",
    badge: null,
    image: "https://images.unsplash.com/photo-1606246551522-61f9ed248bd7?w=600&h=750&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1606246551522-61f9ed248bd7?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1535046173-1e4f853c48aa?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1636412669967-1411f6487176?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1631407056951-11215617b7f1?w=600&h=750&fit=crop&auto=format",
    ],
    description:
      "Převislá kompozice splývající přes hranu rakve — dramatická a majestátní.",
    composition: "Orchideje, břečťan, bílé růže, asparagus, eucalyptus.",
    delivery: "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Doporučujeme umístit do chladnějšího prostoru.",
  },
  {
    id: 5,
    name: "Převislá kytice Elegance",
    slug: "previsla-kytice-elegance",
    price: 5490,
    category: "smutecni",
    subcategory: "rakev",
    badge: null,
    image: "https://images.unsplash.com/photo-1484639726803-f17534cedb15?w=600&h=750&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1484639726803-f17534cedb15?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1606246551522-61f9ed248bd7?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1579092691423-b5f99ec64624?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1636412669967-1411f6487176?w=600&h=750&fit=crop&auto=format",
    ],
    description:
      "Velkolepá převislá kompozice s bílými orchidejemi a bohatou zelení.",
    composition: "Phalaenopsis orchideje, břečťan, ruskus, monstera listy.",
    delivery: "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Orchideje vydržel dlouho — opatrně kropit.",
  },

  // -- Exkluzivní smuteční vazby --
  {
    id: 6,
    name: "Exkluzivní vazba Royal",
    slug: "exkluzivni-vazba-royal",
    price: 7990,
    category: "smutecni",
    subcategory: "vip",
    badge: "Exkluzivní",
    image: "https://images.unsplash.com/photo-1636412669967-1411f6487176?w=600&h=750&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1636412669967-1411f6487176?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1631407056951-11215617b7f1?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1579092691423-b5f99ec64624?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1535046173-1e4f853c48aa?w=600&h=750&fit=crop&auto=format",
    ],
    description:
      "Prémiová smuteční kompozice z nejkvalitnějších importovaných květin.",
    composition: "Ecuadorské růže, cymbidium orchideje, anthurium, zeleň.",
    delivery: "Doručení v Praze do 4 hodin. Nutná rezervace 24 hodin předem.",
    care: "Květiny nejvyšší kvality — vydrží 7–10 dní.",
  },
  {
    id: 7,
    name: "Exkluzivní vazba Bílý mramor",
    slug: "exkluzivni-vazba-bily-mramor",
    price: 6490,
    category: "smutecni",
    subcategory: "vip",
    badge: "Exkluzivní",
    image: "https://images.unsplash.com/photo-1579092691423-b5f99ec64624?w=600&h=750&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1579092691423-b5f99ec64624?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1636412669967-1411f6487176?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1631407056951-11215617b7f1?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1529330821961-0414396878d8?w=600&h=750&fit=crop&auto=format",
    ],
    description:
      "Čistě bílá kompozice symbolizující čistotu a nevinnost. Prémiové květiny.",
    composition: "Bílé avalanche růže, lilie, eustoma, eucalyptus silver.",
    delivery: "Doručení v Praze do 4 hodin. Nutná rezervace 24 hodin předem.",
    care: "Květiny nejvyšší kvality — vydrží 7–10 dní.",
  },

  // -- Kytice na položení --
  {
    id: 8,
    name: "Kytice na položení Vzpomínka",
    slug: "kytice-na-polozeni-vzpominka",
    price: 1290,
    category: "smutecni",
    subcategory: "polozeni",
    badge: null,
    image: "https://images.unsplash.com/photo-1598247535869-0b843a252a40?w=600&h=750&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1598247535869-0b843a252a40?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1616515999992-408b665d6e36?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1615561199412-3c41666b19e7?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1486639107311-064febaff1c5?w=600&h=750&fit=crop&auto=format",
    ],
    description:
      "Menší kytice určená k položení u hrobu — jemná, osobní, v tlumených tónech.",
    composition: "Bílé frézie, mini růže, eucalyptus, zeleň.",
    delivery: "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Umístěte do nádoby s vodou. Vydrží 4–6 dní.",
  },
  {
    id: 9,
    name: "Kytice na položení Útěcha",
    slug: "kytice-na-polozeni-utecha",
    price: 1490,
    category: "smutecni",
    subcategory: "polozeni",
    badge: null,
    image: "/category-kytice.jpg",
    images: [
      "https://images.unsplash.com/photo-1616515999992-408b665d6e36?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1598247535869-0b843a252a40?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1610247672619-df289f408ff2?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1671366656070-b60172d9a892?w=600&h=750&fit=crop&auto=format",
    ],
    description:
      "Kytice v krémových a fialových tónech — vyjadřuje soustrast a respekt.",
    composition: "Krémové růže, fialové lisianthus, zeleň, stuha.",
    delivery: "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Kytici uchovávejte v čerstvé vodě. Vydrží 5–7 dní.",
  },
  {
    id: 10,
    name: "Kytice na položení Světlo",
    slug: "kytice-na-polozeni-svetlo",
    price: 990,
    category: "smutecni",
    subcategory: "polozeni",
    badge: null,
    image: "/seasonal-anthurie.jpg",
    images: [
      "https://images.unsplash.com/photo-1615561199412-3c41666b19e7?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1486639107311-064febaff1c5?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1610247672619-df289f408ff2?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1598247535869-0b843a252a40?w=600&h=750&fit=crop&auto=format",
    ],
    description:
      "Malá kytice ve světlých tónech — symbolizuje naději a klid.",
    composition: "Bílé karafiáty, gypsophila, eucalyptus.",
    delivery: "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Umístěte do nádoby s vodou. Vydrží 4–6 dní.",
  },

  // -- Kytice volně vázané --
  {
    id: 11,
    name: "Volně vázaná Zahradní klid",
    slug: "volne-vazana-zahradni-klid",
    price: 1690,
    category: "smutecni",
    subcategory: "volne-vazane",
    badge: null,
    image: "https://images.unsplash.com/photo-1486639107311-064febaff1c5?w=600&h=750&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1486639107311-064febaff1c5?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1598247535869-0b843a252a40?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1608153917100-3bd2426fde7c?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1580596090683-f4711170117b?w=600&h=750&fit=crop&auto=format",
    ],
    description:
      "Přirozeně vázaná kytice s nádechem zahrady — jemná, osobní, s měkkými tóny.",
    composition: "Pivoňkové růže, eucalyptus, astilbe, zeleň.",
    delivery: "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Kytici uchovávejte v čerstvé vodě. Vydrží 5–7 dní.",
  },
  {
    id: 12,
    name: "Volně vázaná Loučení",
    slug: "volne-vazana-louceni",
    price: 1890,
    category: "smutecni",
    subcategory: "volne-vazane",
    badge: null,
    image: "https://images.unsplash.com/photo-1610247672619-df289f408ff2?w=600&h=750&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1610247672619-df289f408ff2?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1671366656070-b60172d9a892?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1616515999992-408b665d6e36?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1653267409726-a77cd6b3aa78?w=600&h=750&fit=crop&auto=format",
    ],
    description:
      "Bohatá volně vázaná kytice pro rozloučení — bílé a fialové tóny.",
    composition: "Bílé růže, fialové chryzantémy, levandule, trávy.",
    delivery: "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Kytici uchovávejte v čerstvé vodě. Vydrží 5–7 dní.",
  },
  {
    id: 13,
    name: "Volně vázaná Naděje",
    slug: "volne-vazana-nadeje",
    price: 1490,
    category: "smutecni",
    subcategory: "volne-vazane",
    badge: null,
    image: "https://images.unsplash.com/photo-1671366656070-b60172d9a892?w=600&h=750&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1671366656070-b60172d9a892?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1615561199412-3c41666b19e7?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1608153917100-3bd2426fde7c?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1558860671-c7811ccf4862?w=600&h=750&fit=crop&auto=format",
    ],
    description:
      "Něžná kytice ve světlých tónech — symbolizuje naději a pokoj.",
    composition: "Bílé frézie, lisianthus, eucalyptus, gypsophila.",
    delivery: "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Kytici uchovávejte v čerstvé vodě. Vydrží 5–7 dní.",
  },

  // -- Věnce --
  {
    id: 14,
    name: "Věnec Vzpomínka",
    slug: "venec-vzpominka",
    price: 2890,
    category: "smutecni",
    subcategory: "vence",
    badge: null,
    image: "/category-vence-fialovy.jpg",
    images: [
      "https://images.unsplash.com/photo-1630168185910-60bcbf5cc8c3?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1528564031703-bf3181c2294e?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1551001626-86e913f8baf7?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1593139247120-fd48520799a3?w=600&h=750&fit=crop&auto=format",
    ],
    description:
      "Tradiční smuteční věnec z čerstvých květin. Kruhový tvar symbolizuje věčnost.",
    composition: "Bílé a růžové karafiáty, chryzantémy, zeleň, stuha s nápisem.",
    delivery: "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Věnec vydrží v čerstvém stavu 3–5 dní. Uchovávejte v chladnu.",
  },
  {
    id: 15,
    name: "Věnec Věčnost",
    slug: "venec-vecnost",
    price: 3490,
    category: "smutecni",
    subcategory: "vence",
    badge: null,
    image: "https://images.unsplash.com/photo-1528564031703-bf3181c2294e?w=600&h=750&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1528564031703-bf3181c2294e?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1630168185910-60bcbf5cc8c3?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1593139247120-fd48520799a3?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1551001626-86e913f8baf7?w=600&h=750&fit=crop&auto=format",
    ],
    description:
      "Velký smuteční věnec s bohatou květinovou výzdobou a hedvábnou stuhou.",
    composition: "Bílé růže, lilie, chryzantémy, břečťan, stuha.",
    delivery: "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Věnec vydrží v čerstvém stavu 3–5 dní. Uchovávejte v chladnu.",
  },
  {
    id: 16,
    name: "Věnec Srdce",
    slug: "venec-srdce",
    price: 3290,
    category: "smutecni",
    subcategory: "vence",
    badge: "Oblíbené",
    image: "https://images.unsplash.com/photo-1551001626-86e913f8baf7?w=600&h=750&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1551001626-86e913f8baf7?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1593139247120-fd48520799a3?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1630168185910-60bcbf5cc8c3?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1528564031703-bf3181c2294e?w=600&h=750&fit=crop&auto=format",
    ],
    description:
      "Věnec ve tvaru srdce — hluboký symbol lásky a oddanosti.",
    composition: "Červené a bílé růže, zeleň, smuteční stuha.",
    delivery: "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Věnec vydrží v čerstvém stavu 3–5 dní. Uchovávejte v chladnu.",
  },

  // -- Květinová aranžmá do stojanů --
  {
    id: 17,
    name: "Stojanové aranžmá Důstojnost",
    slug: "stojanove-aranzma-dustojnost",
    price: 3990,
    category: "smutecni",
    subcategory: "stojany",
    badge: null,
    image: "/category-sety.jpg",
    images: [
      "https://images.unsplash.com/photo-1551001626-86e913f8baf7?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1593139247120-fd48520799a3?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1500994802273-2dd2df834939?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1535046173-1e4f853c48aa?w=600&h=750&fit=crop&auto=format",
    ],
    description:
      "Vysoké květinové aranžmá do stojanu pro obřadní síně a rozloučení.",
    composition: "Bílé lilie, chryzantémy, eucalyptus, stojan (zapůjčení).",
    delivery: "Instalace v obřadní síni dle domluvy.",
    care: "O instalaci i úklid se postaráme.",
  },
  {
    id: 18,
    name: "Stojanové aranžmá Harmonie",
    slug: "stojanove-aranzma-harmonie",
    price: 4490,
    category: "smutecni",
    subcategory: "stojany",
    badge: null,
    image: "https://images.unsplash.com/photo-1630168185910-60bcbf5cc8c3?w=600&h=750&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1630168185910-60bcbf5cc8c3?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1528564031703-bf3181c2294e?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1500994802273-2dd2df834939?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1570112008549-e4181988109f?w=600&h=750&fit=crop&auto=format",
    ],
    description:
      "Velké stojanové aranžmá v bílých a fialových tónech — elegantní doplněk obřadu.",
    composition: "Bílé růže, fialové orchideje, zeleň, svíčky, stojan.",
    delivery: "Instalace v obřadní síni dle domluvy.",
    care: "O instalaci i úklid se postaráme.",
  },

  // -- Aranžmá na přání --
  {
    id: 19,
    name: "Vzpomínková kytice — výročí",
    slug: "vzpominkova-kytice-vyroci",
    price: 1290,
    category: "smutecni",
    subcategory: "vyroci",
    badge: null,
    image: "https://images.unsplash.com/photo-1608153917100-3bd2426fde7c?w=600&h=750&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1608153917100-3bd2426fde7c?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1580596090683-f4711170117b?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1558860671-c7811ccf4862?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1653267409726-a77cd6b3aa78?w=600&h=750&fit=crop&auto=format",
    ],
    description:
      "Kytice pro pietní vzpomínku — k výročí úmrtí, na Dušičky, ke svátku zesnulého.",
    composition: "Bílé chryzantémy, frézie, eucalyptus, stuha.",
    delivery: "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Kytici uchovávejte v čerstvé vodě. Vydrží 5–7 dní.",
  },
  {
    id: 20,
    name: "Vzpomínková kytice — Dušičky",
    slug: "vzpominkova-kytice-dusicky",
    price: 990,
    category: "smutecni",
    subcategory: "vyroci",
    badge: "Sezónní",
    image: "https://images.unsplash.com/photo-1580596090683-f4711170117b?w=600&h=750&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1580596090683-f4711170117b?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1653267409726-a77cd6b3aa78?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1608153917100-3bd2426fde7c?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1558860671-c7811ccf4862?w=600&h=750&fit=crop&auto=format",
    ],
    description:
      "Pietní kytice pro vzpomínku na Dušičky. Tlumené barvy, přírodní materiály.",
    composition: "Chryzantémy, vřes, mech, šišky, sušené listy.",
    delivery: "Doručení v Praze do 4 hodin. Mimo Prahu následující den.",
    care: "Obsahuje sušené prvky — vydrží déle než čerstvé květiny (10–14 dní).",
  },
  {
    id: 21,
    name: "Květinový koš Důstojnost",
    slug: "kvetinovy-kos-dustojnost",
    price: 1890,
    category: "smutecni",
    subcategory: "kose",
    badge: null,
    image: "https://images.unsplash.com/photo-1560238786-aa5717f6ba63?w=600&h=750&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1560238786-aa5717f6ba63?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1592125661285-79820f2fdf7a?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1532713031318-db2d14e4b3e1?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1630164183600-44bd79a73d34?w=600&h=750&fit=crop&auto=format",
    ],
    description:
      "Velké smuteční aranžmá na míru — kompletní květinový servis pro rozloučení.",
    composition: "Dle vašeho přání — konzultace s floristou.",
    delivery: "Doručení dle domluvy. Konzultace min. 48 hodin předem.",
    care: "O instalaci i úklid se postaráme.",
  },
  {
    id: 22,
    name: "Smuteční kytice Klid",
    slug: "smutecni-kytice-klid",
    price: 1490,
    category: "smutecni",
    subcategory: "volne-vazane",
    badge: null,
    image: "/category-kytice.jpg",
    images: [
      "https://images.unsplash.com/photo-1598247535869-0b843a252a40?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1608153917100-3bd2426fde7c?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1671366656070-b60172d9a892?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1580596090683-f4711170117b?w=600&h=750&fit=crop&auto=format",
    ],
    description:
      "Jemná smuteční kytice v tlumených tónech bílé a krémové. Vyjadřuje úctu a tiché souznění.",
    composition: "Bílé růže, eustoma, eucalyptus, gypsophila, zeleň.",
    delivery: "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Kytici uchovávejte v čerstvé vodě. Vydrží 5–7 dní.",
  },
  {
    id: 23,
    name: "Věnec Bílý kruh",
    slug: "venec-bily-kruh",
    price: 2490,
    category: "smutecni",
    subcategory: "vence",
    badge: null,
    image: "https://images.unsplash.com/photo-1593139247120-fd48520799a3?w=600&h=750&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1593139247120-fd48520799a3?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1551001626-86e913f8baf7?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1528564031703-bf3181c2294e?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1630168185910-60bcbf5cc8c3?w=600&h=750&fit=crop&auto=format",
    ],
    description:
      "Menší věnec v čistě bílém provedení — diskrétní a elegantní.",
    composition: "Bílé karafiáty, gypsophila, ruskus, stuha.",
    delivery: "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Věnec vydrží v čerstvém stavu 3–5 dní.",
  },
  {
    id: 24,
    name: "Kytice na položení Pieta",
    slug: "kytice-na-polozeni-pieta",
    price: 1790,
    category: "smutecni",
    subcategory: "polozeni",
    badge: null,
    image: "https://images.unsplash.com/photo-1616515999992-408b665d6e36?w=600&h=750&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1616515999992-408b665d6e36?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1615561199412-3c41666b19e7?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1598247535869-0b843a252a40?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1671366656070-b60172d9a892?w=600&h=750&fit=crop&auto=format",
    ],
    description:
      "Větší kytice na položení s bohatou vazbou — vhodná k vystavení u kondolence.",
    composition: "Bílé lilie, růže, chryzantémy, zeleň.",
    delivery: "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Umístěte do nádoby s vodou. Vydrží 5–7 dní.",
  },
  {
    id: 25,
    name: "Exkluzivní vazba Orchidej",
    slug: "exkluzivni-vazba-orchidej",
    price: 8990,
    category: "smutecni",
    subcategory: "vip",
    badge: "Exkluzivní",
    image: "https://images.unsplash.com/photo-1631407056951-11215617b7f1?w=600&h=750&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1631407056951-11215617b7f1?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1636412669967-1411f6487176?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1579092691423-b5f99ec64624?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1484639726803-f17534cedb15?w=600&h=750&fit=crop&auto=format",
    ],
    description:
      "Vrcholné floristické dílo — čisté linie, exotické orchideje, dokonalá kompozice.",
    composition: "Cymbidium a phalaenopsis orchideje, monstera, anthurium.",
    delivery: "Doručení v Praze do 4 hodin. Nutná rezervace 24 hodin předem.",
    care: "Orchideje vydrží 10–14 dní při správné péči.",
  },

  // -- Kytice na urnu --
  {
    id: 26,
    name: "Kytice na urnu Světlo",
    slug: "kytice-na-urnu-svetlo",
    price: 1290,
    category: "smutecni",
    subcategory: "urna",
    badge: null,
    image: "/seasonal-anthurie.jpg",
    images: [
      "https://images.unsplash.com/photo-1558860671-c7811ccf4862?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1653267409726-a77cd6b3aa78?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1608153917100-3bd2426fde7c?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1580596090683-f4711170117b?w=600&h=750&fit=crop&auto=format",
    ],
    description:
      "Menší aranžmá určené k urně. Světlé tóny symbolizují naději a klid.",
    composition: "Bílé frézie, mini růže, eucalyptus, zeleň.",
    delivery: "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Umístěte do nádoby s vodou. Vydrží 4–6 dní.",
  },
  {
    id: 27,
    name: "Kytice na urnu Tiché ráno",
    slug: "kytice-na-urnu-tiche-rano",
    price: 1490,
    category: "smutecni",
    subcategory: "urna",
    badge: null,
    image: "https://images.unsplash.com/photo-1653267409726-a77cd6b3aa78?w=600&h=750&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1653267409726-a77cd6b3aa78?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1558860671-c7811ccf4862?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1580596090683-f4711170117b?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1608153917100-3bd2426fde7c?w=600&h=750&fit=crop&auto=format",
    ],
    description:
      "Jemná kytice v krémových a bílých tónech — vhodná k urnovému rozloučení.",
    composition: "Krémové růže, lisianthus, gypsophila, zeleň.",
    delivery: "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Umístěte do nádoby s vodou. Vydrží 4–6 dní.",
  },
  {
    id: 28,
    name: "Kytice na urnu Levandule",
    slug: "kytice-na-urnu-levandule",
    price: 1190,
    category: "smutecni",
    subcategory: "urna",
    badge: null,
    image: "https://images.unsplash.com/photo-1608153917100-3bd2426fde7c?w=600&h=750&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1608153917100-3bd2426fde7c?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1653267409726-a77cd6b3aa78?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1558860671-c7811ccf4862?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1580596090683-f4711170117b?w=600&h=750&fit=crop&auto=format",
    ],
    description:
      "Kytice s levandulí a bílými květy — uklidňující a voňavá.",
    composition: "Levandule, bílé mini růže, eucalyptus.",
    delivery: "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Umístěte do nádoby s vodou. Vydrží 4–6 dní.",
  },

  // -- Květinové koše doplnění --
  {
    id: 29,
    name: "Květinový koš Vzpomínka",
    slug: "kvetinovy-kos-vzpominka",
    price: 2290,
    category: "smutecni",
    subcategory: "kose",
    badge: null,
    image: "https://images.unsplash.com/photo-1592125661285-79820f2fdf7a?w=600&h=750&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1592125661285-79820f2fdf7a?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1560238786-aa5717f6ba63?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1630164183600-44bd79a73d34?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1532713031318-db2d14e4b3e1?w=600&h=750&fit=crop&auto=format",
    ],
    description:
      "Velký květinový koš s bohatou výzdobou — vhodný k vystavení u kondolence.",
    composition: "Bílé a krémové růže, lilie, chryzantémy, proutěný koš.",
    delivery: "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Koš obsahuje aranžovací hmotu — stačí dolévat vodu. Vydrží 5–7 dní.",
  },

  // -- Květiny k výročí doplnění --
  {
    id: 30,
    name: "Vzpomínková kytice — celoroční",
    slug: "vzpominkova-kytice-celorocni",
    price: 1490,
    category: "smutecni",
    subcategory: "vyroci",
    badge: null,
    image: "https://images.unsplash.com/photo-1558860671-c7811ccf4862?w=600&h=750&fit=crop&auto=format",
    images: [
      "https://images.unsplash.com/photo-1558860671-c7811ccf4862?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1608153917100-3bd2426fde7c?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1616515999992-408b665d6e36?w=600&h=750&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1598247535869-0b843a252a40?w=600&h=750&fit=crop&auto=format",
    ],
    description:
      "Kytice vhodná k jakémukoliv vzpomínkovému dnu — jemná, nadčasová, důstojná.",
    composition: "Bílé růže, frézie, eucalyptus, hedvábná stuha.",
    delivery: "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Kytici uchovávejte v čerstvé vodě. Vydrží 5–7 dní.",
  },
]

// ---------------------------------------------------------------------------
// Query helpers
// ---------------------------------------------------------------------------

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category)
}

export function getProductsBySubcategory(
  category: string,
  subcategory: string,
): Product[] {
  return products.filter(
    (p) => p.category === category && p.subcategory === subcategory,
  )
}

export function getSubcategory(
  category: string,
  slug: string,
): SubcategoryMeta | undefined {
  return subcategories[`${category}/${slug}`]
}

export function getSubcategoriesForCategory(
  category: string,
): Array<{ slug: string; meta: SubcategoryMeta }> {
  return Object.entries(subcategories)
    .filter(([, meta]) => meta.parentCategory === category)
    .map(([key, meta]) => ({
      slug: key.split("/")[1],
      meta,
    }))
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
