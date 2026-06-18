export interface KnowledgeArticle {
  title: string;
  slug: string;
  description: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  featured?: boolean;
}

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    title: "Audyt logistyczny – jak obiektywnie sprawdzić, gdzie firma traci czas, pieniądze i efektywność",
    slug: "audyt-logistyczny",
    description: "Czym jest audyt logistyczny, kiedy warto go przeprowadzić, co powinien obejmować i jak przekłada się na decyzje dotyczące magazynu, transportu, kosztów i procesów operacyjnych.",
    category: "Audyt logistyczny",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    readingTime: "8–10 min",
    featured: true,
  },
  {
    title: "AI i automatyzacja w logistyce — gdzie naprawdę warto inwestować, a gdzie to tylko moda",
    slug: "ai-automatyzacja-logistyka",
    description: "Sztuczna inteligencja i automatyzacja w logistyce: realne zastosowania, gdzie dają zwrot, a gdzie to tylko hype. Praktyczny przewodnik dla firm rozważających inwestycję.",
    category: "Systemy i dane",
    publishedAt: "2026-06-18",
    updatedAt: "2026-06-18",
    readingTime: "9–11 min",
  },
  {
    title: "Jak wybrać partnera logistycznego — i dlaczego najniższa cena prawie zawsze jest pułapką",
    slug: "wybor-partnera-logistycznego",
    description: "Wybór operatora logistycznego, firmy fulfillment lub przewoźnika: na co patrzeć poza ceną, jak weryfikować partnera i dlaczego najtańsza oferta często kosztuje najwięcej.",
    category: "Doradztwo logistyczne",
    publishedAt: "2026-06-18",
    updatedAt: "2026-06-18",
    readingTime: "8–10 min",
  },
  {
    title: "Anatomia projektu Greenfield — najdroższe błędy, które zostają z firmą na dekadę",
    slug: "projekt-greenfield-bledy",
    description: "Budowa magazynu lub centrum dystrybucyjnego od podstaw: najczęstsze błędy przy wyborze lokalizacji, projektowaniu layoutu i automatyzacji, które kosztują przez lata eksploatacji.",
    category: "Optymalizacja logistyki",
    publishedAt: "2026-06-18",
    updatedAt: "2026-06-18",
    readingTime: "9–11 min",
  },
  {
    title: "Drony w inwestycjach logistycznych — od pomiaru działki po komercjalizację obiektu",
    slug: "drony-inwestycje-logistyczne",
    description: "Jak wykorzystać drony w projektach logistycznych i inwestycyjnych: pomiary geodezyjne, ortofotomapy, monitoring budowy i materiały marketingowe. Praktyczne zastosowania i realne korzyści.",
    category: "Doradztwo logistyczne",
    publishedAt: "2026-06-18",
    updatedAt: "2026-06-18",
    readingTime: "7–9 min",
  },
  {
    title: "Interim Management w logistyce — kiedy warto wpuścić managera na czas określony",
    slug: "interim-management-logistyka",
    description: "Interim management w logistyce: kiedy czasowe wsparcie zarządcze ma sens, jak wygląda współpraca i czym różni się od zatrudnienia na etat. Praktyczny przewodnik dla zarządów.",
    category: "Doradztwo logistyczne",
    publishedAt: "2026-06-18",
    updatedAt: "2026-06-18",
    readingTime: "8–10 min",
  },
];

export const knowledgeCategories = [
  {
    title: "Transport",
    description: "Organizacja przewozów, dobór przewoźników, transport krajowy i międzynarodowy, FTL, LTL, drobnica oraz kontrola kosztów transportu.",
  },
  {
    title: "Spedycja",
    description: "Planowanie przewozu, dokumenty, komunikacja, współpraca z przewoźnikami i bezpieczeństwo realizacji zleceń.",
  },
  {
    title: "Magazyn",
    description: "Procesy magazynowe, layout, kompletacja, pakowanie, zwroty, wykorzystanie powierzchni i efektywność pracy zespołu.",
  },
  {
    title: "Optymalizacja logistyki",
    description: "Identyfikacja strat, wąskich gardeł, nadmiernych kosztów i działań, które poprawiają wydajność operacji.",
  },
  {
    title: "Łańcuch dostaw",
    description: "Planowanie przepływu towarów, zapasów, dostaw, dystrybucji i współpracy między działami oraz partnerami.",
  },
  {
    title: "Systemy i dane",
    description: "WMS, ERP, raportowanie, jakość danych, automatyzacja i decyzje logistyczne oparte na liczbach.",
  },
  {
    title: "Doradztwo logistyczne",
    description: "Audyty, rekomendacje, projekty zmian, przygotowanie do skalowania, relokacji, automatyzacji lub reorganizacji procesów.",
  },
] as const;
