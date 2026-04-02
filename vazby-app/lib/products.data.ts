export interface Product {
  id: number
  name: string
  slug: string
  price: number
  category: string
  subcategory: string
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

export interface SubcategoryMeta {
  label: string
  description: string
  category: string
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

export const subcategories: Record<string, SubcategoryMeta> = {
  // Smuteční
  "smutecni/kytice": {
    label: "Pohřební kytice",
    description:
      "Jemné smuteční kytice v tlumených tónech — vyjadřují úctu a tiché souznění.",
    category: "smutecni",
  },
  "smutecni/vence": {
    label: "Smuteční věnce",
    description:
      "Tradiční věnce z čerstvých květin. Kruhový tvar symbolizuje věčnost a nekonečnou vzpomínku.",
    category: "smutecni",
  },
  "smutecni/rakev": {
    label: "Kytice na rakev",
    description:
      "Podélné kompozice určené k položení na rakev. Elegantní a důstojné aranžmá.",
    category: "smutecni",
  },
  "smutecni/urna": {
    label: "Kytice na urnu",
    description:
      "Menší aranžmá určená k urně. Světlé tóny symbolizují naději a klid.",
    category: "smutecni",
  },
  "smutecni/dekorace": {
    label: "Pietní dekorace",
    description:
      "Květinové dekorace pro pietní místa, hřbitovy a vzpomínková setkání.",
    category: "smutecni",
  },
  "smutecni/kose": {
    label: "Květinové koše",
    description:
      "Elegantní květinové koše jako projev soustrasti a vzpomínky.",
    category: "smutecni",
  },

  // Svatební
  "svatebni/kytice": {
    label: "Svatební kytice",
    description:
      "Kytice pro nevěstu — od romantických po moderní, přesně podle vašich představ.",
    category: "svatebni",
  },
  "svatebni/dekorace": {
    label: "Dekorace obřadu",
    description:
      "Kompletní květinová výzdoba obřadního místa — ulička, oltář, vstupní brána.",
    category: "svatebni",
  },
  "svatebni/doplnky": {
    label: "Doplňky",
    description:
      "Korsáže, květinové náramky, ozdoby do vlasů a další svatební doplňky.",
    category: "svatebni",
  },

  // Kytice & Dárky
  "kytice/narozeniny": {
    label: "Narozeninové kytice",
    description:
      "Veselé a barevné kytice, které potěší k narozeninám i svátku.",
    category: "kytice",
  },
  "kytice/sezonni": {
    label: "Sezónní květiny",
    description:
      "Valentýn, Dušičky, Vánoce — aktuální sezónní nabídka, která se mění s přírodou.",
    category: "kytice",
  },
  "kytice/firemni": {
    label: "Firemní květiny",
    description:
      "Elegantní květiny pro firemní prostory, recepce, eventy i jako dárek partnerům.",
    category: "kytice",
  },
  "kytice/predplatne": {
    label: "VK BOX / Předplatné",
    description:
      "Každý měsíc čerstvá sezónní kytice až k vašim dveřím. Překvapení od našich floristů.",
    category: "kytice",
  },
}

export const products: Product[] = [
  // ── Smuteční — kytice ──
  {
    id: 1,
    name: "Smuteční kytice Klid",
    slug: "smutecni-kytice-klid",
    price: 1490,
    category: "smutecni",
    subcategory: "kytice",
    badge: null,
    description:
      "Jemná smuteční kytice v tlumených tónech bílé a krémové. Vyjadřuje úctu a tiché souznění.",
    composition: "Bílé růže, eustoma, eucalyptus, gypsophila, zeleň.",
    delivery:
      "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Kytici uchovávejte v čerstvé vodě. Vydrží 5–7 dní.",
  },
  {
    id: 13,
    name: "Smuteční kytice Útěcha",
    slug: "smutecni-kytice-utecha",
    price: 1690,
    category: "smutecni",
    subcategory: "kytice",
    badge: null,
    description:
      "Kytice v jemných lila a bílých tónech. Vyjadřuje hlubokou soustrast a blízkost.",
    composition: "Fialové a bílé eustomy, levandule, eucalyptus, zeleň.",
    delivery:
      "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Kytici uchovávejte v čerstvé vodě. Vydrží 5–7 dní.",
  },
  {
    id: 14,
    name: "Smuteční kytice Odchod",
    slug: "smutecni-kytice-odchod",
    price: 1890,
    category: "smutecni",
    subcategory: "kytice",
    badge: null,
    description:
      "Větší smuteční kytice s liliemi a bílými růžemi. Důstojná a elegantní.",
    composition: "Bílé lilie, růže, chryzantémy, ruskus, asparagus.",
    delivery:
      "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Kytici uchovávejte v čerstvé vodě mimo přímé slunce. Vydrží 5–7 dní.",
  },

  // ── Smuteční — věnce ──
  {
    id: 2,
    name: "Věnec Vzpomínka",
    slug: "venec-vzpominka",
    price: 2890,
    category: "smutecni",
    subcategory: "vence",
    badge: null,
    description:
      "Tradiční smuteční věnec z čerstvých květin. Kruhový tvar symbolizuje věčnost a nekonečnou vzpomínku.",
    composition:
      "Bílé a růžové karafiáty, chryzantémy, zeleň, stuha s nápisem.",
    delivery:
      "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
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
    description:
      "Velký smuteční věnec z bílých lilií a růží. Impozantní projev úcty.",
    composition: "Bílé lilie, růže, chryzantémy, zeleň, saténová stuha.",
    delivery:
      "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Věnec uchovávejte v chladnu. Vydrží 3–5 dní.",
  },
  {
    id: 16,
    name: "Věnec Tichá vzpomínka",
    slug: "venec-ticha-vzpominka",
    price: 2490,
    category: "smutecni",
    subcategory: "vence",
    badge: null,
    description:
      "Menší smuteční věnec z jemných pastelových květin. Vhodný pro intimní rozloučení.",
    composition: "Pastelové karafiáty, mini růže, zeleň, stuha.",
    delivery:
      "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Uchovávejte v chladném prostředí. Vydrží 3–5 dní.",
  },

  // ── Smuteční — rakev ──
  {
    id: 3,
    name: "Kytice na rakev Ticho",
    slug: "kytice-na-rakev-ticho",
    price: 3490,
    category: "smutecni",
    subcategory: "rakev",
    badge: null,
    description:
      "Podélná kytice určená k položení na rakev. Elegantní a důstojná kompozice.",
    composition: "Lilie, bílé růže, orchideje, asparagus, ruskus.",
    delivery:
      "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Kytici je možné opatrně kropit vodou pro prodloužení svěžesti.",
  },
  {
    id: 17,
    name: "Kytice na rakev Důstojnost",
    slug: "kytice-na-rakev-dustojnost",
    price: 4290,
    category: "smutecni",
    subcategory: "rakev",
    badge: null,
    description:
      "Velká podélná kompozice z bílých květin. Symbolizuje čistotu a klid.",
    composition: "Bílé růže, lilie, orchideje, eucalyptus, ruskus.",
    delivery:
      "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Opatrně kropit vodou. Vydrží 3–5 dní.",
  },

  // ── Smuteční — urna ──
  {
    id: 4,
    name: "Kytice na urnu Světlo",
    slug: "kytice-na-urnu-svetlo",
    price: 1290,
    category: "smutecni",
    subcategory: "urna",
    badge: null,
    description:
      "Menší aranžmá určené k urně. Světlé tóny symbolizují naději a klid.",
    composition: "Bílé frézie, mini růže, eucalyptus, zeleň.",
    delivery:
      "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Umístěte do nádoby s vodou. Vydrží 4–6 dní.",
  },
  {
    id: 18,
    name: "Kytice na urnu Naděje",
    slug: "kytice-na-urnu-nadeje",
    price: 990,
    category: "smutecni",
    subcategory: "urna",
    badge: null,
    description:
      "Drobné aranžmá z bílých a krémových květin. Jemné a decentní.",
    composition: "Bílé mini růže, gypsophila, zeleň.",
    delivery:
      "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Umístěte do nádoby s vodou. Vydrží 4–6 dní.",
  },

  // ── Smuteční — dekorace ──
  {
    id: 19,
    name: "Pietní dekorace Klid duše",
    slug: "pietni-dekorace-klid-duse",
    price: 1890,
    category: "smutecni",
    subcategory: "dekorace",
    badge: null,
    description:
      "Květinová dekorace pro pietní místo. Tlumené barvy, přírodní materiály.",
    composition: "Chryzantémy, vřes, mech, svíčka, zeleň.",
    delivery:
      "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Obsahuje sušené i čerstvé prvky. Vydrží 7–10 dní.",
  },
  {
    id: 20,
    name: "Pietní dekorace Vzpomínání",
    slug: "pietni-dekorace-vzpominani",
    price: 2290,
    category: "smutecni",
    subcategory: "dekorace",
    badge: null,
    description:
      "Větší dekorace s čerstvými květinami a přírodními prvky pro hřbitovní místo.",
    composition: "Chryzantémy, karafiáty, mech, šišky, sušené listy.",
    delivery:
      "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Obsahuje sušené prvky — vydrží déle (10–14 dní).",
  },

  // ── Smuteční — koše ──
  {
    id: 21,
    name: "Květinový koš Soustrast",
    slug: "kvetinovy-kos-soustrast",
    price: 2490,
    category: "smutecni",
    subcategory: "kose",
    badge: null,
    description:
      "Elegantní proutěný koš plný bílých a pastelových květin. Projev upřímné soustrasti.",
    composition: "Bílé růže, eustoma, chryzantémy, zeleň, proutěný koš.",
    delivery:
      "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Květiny v koši jsou v aranžovací hmotě. Pravidelně ji zvlhčujte. Vydrží 5–7 dní.",
  },
  {
    id: 22,
    name: "Květinový koš Památka",
    slug: "kvetinovy-kos-pamatka",
    price: 3190,
    category: "smutecni",
    subcategory: "kose",
    badge: null,
    description:
      "Velký květinový koš z čerstvých květin. Vhodný jako smuteční dar.",
    composition: "Lilie, růže, karafiáty, zeleň, proutěný koš.",
    delivery:
      "Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní den.",
    care: "Pravidelně zvlhčujte aranžovací hmotu. Vydrží 5–7 dní.",
  },

  // ── Svatební — kytice ──
  {
    id: 5,
    name: "Svatební kytice Harmonie",
    slug: "svatebni-kytice-harmonie",
    price: 2490,
    category: "svatebni",
    subcategory: "kytice",
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
    subcategory: "kytice",
    badge: null,
    description:
      "Něžná kytice inspirovaná ranní zahradou. Přirozený, lehce divoký styl.",
    composition: "Luční kvítí, drobné růže, levandule, trávy, len.",
    delivery: "Doručení v den svatby ráno. Nutná rezervace min. 14 dní předem.",
    care: "Kytici uchovávejte v čerstvé vodě mimo přímé slunce.",
  },
  {
    id: 23,
    name: "Svatební kytice Věčný slib",
    slug: "svatebni-kytice-vecny-slib",
    price: 2990,
    category: "svatebni",
    subcategory: "kytice",
    badge: "Novinka",
    description:
      "Luxusní kytice z bílých pivoněk a zahradních růží. Klasická elegance.",
    composition: "Bílé pivoňky, zahradní růže, jasmin, hedvábné stuhy.",
    delivery: "Doručení v den svatby ráno. Nutná rezervace min. 14 dní předem.",
    care: "Uchovávejte v chladnu. Před obřadem lehce pokropte.",
  },

  // ── Svatební — dekorace ──
  {
    id: 7,
    name: "Dekorace obřadu Elegance",
    slug: "dekorace-obradu-elegance",
    price: 4990,
    category: "svatebni",
    subcategory: "dekorace",
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
    id: 24,
    name: "Dekorace obřadu Romance",
    slug: "dekorace-obradu-romance",
    price: 7990,
    category: "svatebni",
    subcategory: "dekorace",
    badge: null,
    description:
      "Kompletní výzdoba pro romantický obřad — květinový oblouk, ulička, stolní dekorace.",
    composition:
      "Pivoňky, růže, hortenzie, eucalyptus, svíčky, oblouk (zapůjčení).",
    delivery:
      "Instalace v místě obřadu. Konzultace a zkouška předem v ceně.",
    care: "O dekoraci se postaráme — instalace i úklid v ceně.",
  },

  // ── Svatební — doplňky ──
  {
    id: 25,
    name: "Korsáž pro ženicha",
    slug: "korsaz-pro-zenicha",
    price: 490,
    category: "svatebni",
    subcategory: "doplnky",
    badge: null,
    description:
      "Elegantní korsáž na klopy saka. Sladíme s kytici nevěsty.",
    composition: "Mini růže, eucalyptus, stuha.",
    delivery: "Doručení v den svatby společně s kytici nevěsty.",
    care: "Uchovávejte v chladničce do nasazení.",
  },
  {
    id: 26,
    name: "Květinový náramek pro družičku",
    slug: "kvetinovy-naramek-druzicka",
    price: 590,
    category: "svatebni",
    subcategory: "doplnky",
    badge: null,
    description:
      "Jemný květinový náramek pro družičky. Přirozený a elegantní doplněk.",
    composition: "Drobné růžičky, gypsophila, zeleň, saténový pásek.",
    delivery: "Doručení v den svatby společně s ostatními květinami.",
    care: "Uchovávejte v chladničce. Pokropte před použitím.",
  },
  {
    id: 27,
    name: "Ozdoba do vlasů Květinový hřebínek",
    slug: "ozdoba-do-vlasu-kvetinovy-hrebinek",
    price: 690,
    category: "svatebni",
    subcategory: "doplnky",
    badge: null,
    description:
      "Květinový hřebínek do vlasů nevěsty. Jemné sušené a čerstvé květy.",
    composition: "Sušené květy, mini růžičky, gypsophila, kovový hřebínek.",
    delivery: "Doručení v den svatby společně s kytici nevěsty.",
    care: "Sušené květy vydrží celý den i déle.",
  },

  // ── Kytice & Dárky — narozeniny ──
  {
    id: 8,
    name: "Kytice Sluneční den",
    slug: "kytice-slunecni-den",
    price: 890,
    category: "kytice",
    subcategory: "narozeniny",
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
    subcategory: "narozeniny",
    badge: null,
    description:
      "Kytice z lučních květin — přirozená, lehká, jako procházka polem.",
    composition: "Heřmánek, chrpa, mák, trávy, len, drobné kvítí.",
    delivery: "Doručení v Praze do 3 hodin. Mimo Prahu následující den.",
    care: "Luční květiny mají kratší životnost (3–5 dní). Měňte vodu denně.",
  },
  {
    id: 28,
    name: "Kytice Radost",
    slug: "kytice-radost",
    price: 1190,
    category: "kytice",
    subcategory: "narozeniny",
    badge: null,
    description:
      "Pestrobarevná kytice plná gerber, tulipánů a fresií. Radost v každém květu.",
    composition: "Gerbery, tulipány, frézie, zeleň.",
    delivery: "Doručení v Praze do 3 hodin. Mimo Prahu následující den.",
    care: "Přistřihněte stonky, měňte vodu denně. Vydrží 7–10 dní.",
  },

  // ── Kytice & Dárky — sezónní ──
  {
    id: 12,
    name: "Sezónní — Dušičky",
    slug: "sezonni-dusicky",
    price: 990,
    category: "kytice",
    subcategory: "sezonni",
    badge: "Sezónní",
    description:
      "Pietní kytice pro vzpomínku na Dušičky. Tlumené barvy, přírodní materiály.",
    composition: "Chryzantémy, vřes, mech, šišky, sušené listy.",
    delivery: "Doručení v Praze do 3 hodin. Mimo Prahu následující den.",
    care: "Obsahuje sušené prvky — vydrží déle než čerstvé květiny (10–14 dní).",
  },
  {
    id: 29,
    name: "Valentýnská růže — 15 rudých",
    slug: "valentynska-ruze-15-rudych",
    price: 1490,
    category: "kytice",
    subcategory: "sezonni",
    badge: "Sezónní",
    description:
      "Klasický valentýnský dar — 15 dlouhých rudých růží. Symbol lásky.",
    composition: "15× rudá růže, zeleň, saténová stuha.",
    delivery: "Doručení v Praze do 3 hodin. Mimo Prahu následující den.",
    care: "Přistřihněte stonky, měňte vodu každé 2 dny. Vydrží 7–14 dní.",
  },
  {
    id: 30,
    name: "Vánoční hvězda v květináči",
    slug: "vanocni-hvezda-v-kvetinaci",
    price: 690,
    category: "kytice",
    subcategory: "sezonni",
    badge: "Sezónní",
    description:
      "Tradiční vánoční rostlina v elegantním keramickém květináči.",
    composition: "Poinsettie (vánoční hvězda), keramický květináč, mech.",
    delivery: "Doručení v Praze do 3 hodin. Mimo Prahu následující den.",
    care: "Zalévejte střídmě, nepřelévejte. Umístěte na světlé místo. Vydrží celou sezónu.",
  },

  // ── Kytice & Dárky — firemní ──
  {
    id: 11,
    name: "Firemní kytice Profesionál",
    slug: "firemni-kytice-profesional",
    price: 1590,
    category: "kytice",
    subcategory: "firemni",
    badge: null,
    description:
      "Elegantní kytice pro firemní prostory, recepce nebo jako dárek obchodním partnerům.",
    composition: "Bílé lilie, anthurium, zeleň, minimalistická vazba.",
    delivery:
      "Pravidelné doručení dle dohody. Jednorázově do 24 hodin v Praze.",
    care: "Přistřihněte stonky, měňte vodu každé 2 dny. Vydrží 7–14 dní.",
  },
  {
    id: 31,
    name: "Firemní dekorace Recepce",
    slug: "firemni-dekorace-recepce",
    price: 2490,
    category: "kytice",
    subcategory: "firemni",
    badge: null,
    description:
      "Květinová dekorace pro firemní recepce a lobby. Pravidelná výměna možná.",
    composition: "Orchideje, anthurium, monstera, zeleň, designová váza.",
    delivery:
      "Doručení a instalace v Praze do 24 hodin. Pravidelné doručení dle dohody.",
    care: "O pravidelnou výměnu se postaráme v rámci předplatného.",
  },

  // ── Kytice & Dárky — předplatné ──
  {
    id: 10,
    name: "VK BOX — měsíční předplatné",
    slug: "vk-box-mesicni-predplatne",
    price: 1290,
    category: "kytice",
    subcategory: "predplatne",
    badge: "Předplatné",
    description:
      "Každý měsíc čerstvá sezónní kytice až k vašim dveřím. Překvapení od našich floristů.",
    composition: "Sezónní mix — každý měsíc jiný, vždy čerstvý.",
    delivery: "Doručení první pracovní pondělí v měsíci.",
    care: "Návod k péči přiložen v každém boxu.",
  },
  {
    id: 32,
    name: "VK BOX — čtvrtletní předplatné",
    slug: "vk-box-ctvrtletni-predplatne",
    price: 3490,
    category: "kytice",
    subcategory: "predplatne",
    badge: "Předplatné",
    description:
      "3 měsíce čerstvých květin za zvýhodněnou cenu. Každý měsíc jiná sezónní kytice.",
    composition: "Sezónní mix — 3 doručení, vždy jiný, vždy čerstvý.",
    delivery: "Doručení první pracovní pondělí v měsíci po dobu 3 měsíců.",
    care: "Návod k péči přiložen v každém boxu.",
  },
]

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
