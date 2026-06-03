# CLAUDE.md — vologis.com

## Projekt

Pełna przebudowa serwisu vologis.com — niezależne doradztwo logistyczne end-to-end, transport i spedycja, projekty Greenfield, usługi dronowe, interim management. Firma założona w 2021, rynki PL + EU (głównie UE).

**Główne USP:**
- End-to-end: nie zostawiamy klienta z raportem — bierzemy pełną odpowiedzialność za wdrożenie
- 100% niezależność: brak powiązań z operatorami, deweloperami, dostawcami technologii
- Szybkość i elastyczność: interim management, "gaszenie pożarów", quick wins
- Unikalna integracja usług dronowych z projektami logistycznymi

**Cel strony:** generowanie leadów B2B (formularz + Calendly). NIE e-commerce, NIE strefa klienta, NIE blog z komentarzami.

---

## Commands

```bash
npm run dev       # Start dev server (localhost:4321)
npm run build     # Production build to dist/
npm run preview   # Preview production build locally
```

---

## Dane firmy

```
Nazwa:   Vologis Sp. z o.o.
NIP:     6172220630
KRS:     0000902577
Adres:   ul. Wrocławska 79B, 63-200 Jarocin
Email:   biuro@vologis.com
Rynek:   PL + EU
Rok:     2021
```

---

## Architecture

- **Framework**: Astro 6 with file-based routing under `src/pages/`
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite` plugin — configured in `astro.config.mjs`, global styles in `src/styles/global.css` (must be imported in any layout)
- **TypeScript**: strict mode via `astro/tsconfigs/strict`
- **Layouts**: shared layouts live in `src/layouts/` and must import `../styles/global.css` for Tailwind to apply
- **Components**: reusable Astro components go in `src/components/`
- **Content**: static assets in `public/`, co-located or `src/assets/` for processed assets
- **Języki:** PL (default) + EN (hreflang)

Nie używaj:
- CMS (brak — treści w plikach MD/JSON)
- WordPressa, WPBakery, żadnych page builderów
- Bootstrap, Material UI, shadcn
- Cookies consent (brak ciasteczek lub open-source)
- Animacji które spowalniają LCP
- Inline styles zamiast Tailwind klas
- Obrazków bez `alt`, `width`, `height`

---

## Brand

```
Navy (primary):     #0d1b2a
Blue (secondary):   #4a90d9
Red (accent):       #cc1f1f
White:              #ffffff
Gray light:         #f8fafc
Gray text:          #64748b
Border:             #e2e8f0
```

**Typografia:** Plus Jakarta Sans (nagłówki, bold) + Inter (body, regular) — oba przez Fontsource
**Ton komunikacji:** ekspercki + partnerski. Konkretny, bez corporate-speak.

Unikaj: "kompleksowe usługi", "najwyższa jakość", "profesjonalne podejście", "świadczymy usługi"
Używaj: liczb, nazw branż, konkretnych efektów ("redukcja kosztów o 23%", "uruchomienie operacji w 6 tygodni")

**Design reference:** ChatGPT Concept "From Vision to Operational Excellence" — aerial warehouse photo hero, timeline procesu 01-05, stat bar z liczbami, biało-niebieski B2B consulting look. Podstrona /uslugi/uslugi-dronowe może używać ciemnego tła + aerial drone imagery.

---

## Persony (grupy docelowe)

Cztery precyzyjne persony — uwzględnij w hero copy, sekcji "Dla kogo" i treściach podstron usługowych:

1. **Dyrektor logistyki / Supply Chain** (firmy produkcyjne, handlowe, e-commerce)
   — Problem: brak czasu na weryfikację rynku, dziesiątki ofert do analizy
   — Szuka: gotowych, najlepszych opcji (chłodnie, ADR, farmacja)

2. **Zarząd / właściciel w restrukturyzacji**
   — Problem: wąskie gardła, wysokie koszty, niewydajne procesy
   — Szuka: kogoś do "gaszenia pożarów", interim management

3. **Inwestor / deweloper logistyczny (Greenfield)**
   — Problem: koordynacja inwestycji od lokalizacji po uruchomienie
   — Szuka: jednego partnera end-to-end bez obciążania własnych zespołów

4. **Agencja marketingowa / firma budowlana / deweloper nieruchomości**
   — Problem: brak precyzyjnych danych z powietrza, brak materiałów promocyjnych obiektów
   — Szuka: ortofotomapy, pomiary geodezyjne, wideo marketingowe z drona

---

## Struktura URL

### Core pages (11 stałych podstron)

```
/                                      301 → /pl/
/pl/                                   Strona główna
/pl/o-nas                              O firmie + CEO + filozofia + LinkedIn
/pl/uslugi/posrednictwo-logistyczne    Pośrednictwo logistyczne i fulfillment
/pl/uslugi/doradztwo-operacyjne        Doradztwo operacyjne i audyt
/pl/uslugi/projekty-greenfield         Kompleksowe projekty Greenfield
/pl/uslugi/uslugi-dronowe              Nowoczesne usługi dronowe
/pl/uslugi/interim-management          Interim management i restrukturyzacja
/pl/proces                             Jak pracujemy (5 etapów)
/pl/wiedza                             Hub artykułów (5 startowych)
/pl/kontakt                            Formularz + Calendly
/pl/regulamin                          Regulamin
/pl/polityka-prywatnosci               Polityka prywatności
```

### Nawigacja główna

```
Usługi | Branże | Proces | Wiedza | O nas | Kontakt →
```

### Programmatic SEO (~40 URL — branże × usługi)

```
# Pośrednictwo logistyczne × branże
/pl/uslugi/posrednictwo-logistyczne-fmcg
/pl/uslugi/posrednictwo-logistyczne-farmacja
/pl/uslugi/posrednictwo-logistyczne-ecommerce
/pl/uslugi/posrednictwo-logistyczne-produkcja
/pl/uslugi/posrednictwo-logistyczne-automotive
/pl/uslugi/posrednictwo-logistyczne-retail
/pl/uslugi/posrednictwo-logistyczne-chlodnia
/pl/uslugi/posrednictwo-logistyczne-adr

# Doradztwo operacyjne × branże
/pl/uslugi/doradztwo-operacyjne-fmcg
/pl/uslugi/doradztwo-operacyjne-ecommerce
/pl/uslugi/doradztwo-operacyjne-produkcja
/pl/uslugi/doradztwo-operacyjne-automotive
/pl/uslugi/doradztwo-operacyjne-farmacja
/pl/uslugi/doradztwo-operacyjne-dystrybucja

# Projekty Greenfield × branże
/pl/uslugi/projekty-greenfield-logistyka
/pl/uslugi/projekty-greenfield-magazyn
/pl/uslugi/projekty-greenfield-centrum-dystrybucji
/pl/uslugi/projekty-greenfield-cold-storage

# Interim management × kontekst
/pl/uslugi/interim-management-restrukturyzacja
/pl/uslugi/interim-management-startup-logistyczny
/pl/uslugi/interim-management-3pl
/pl/uslugi/interim-management-kryzys-operacyjny

# Usługi dronowe × zastosowanie
/pl/uslugi/drony-pomiary-geodezyjne
/pl/uslugi/drony-ortofotomapy
/pl/uslugi/drony-inspekcja-magazynow
/pl/uslugi/drony-marketing-nieruchomosci-logistycznych
/pl/uslugi/drony-monitoring-budowy
```

Szablony programmatic generowane z danych JSON — jeden komponent Astro, dane z `src/data/programmatic.json`.

---

## Proces współpracy Vologis (5 etapów — używaj tej nomenklatury)

```
Etap 1: Analiza i identyfikacja potrzeb
         → Deliverable: definicja problemu + dokumentacja przedinwestycyjna + plan działania

Etap 2: Quick Wins / Optymalizacja doraźna
         → Deliverable: natychmiastowe niskokosztowe zmiany procesowe, pierwsze wyniki

Etap 3: Wybór lokalizacji i partnerów
         → Deliverable: projekt koncepcyjny + porównanie ofert + rekomendacja

Etap 4: Wdrożenie operacyjne
         → Deliverable: uruchomione operacje, gotowy magazyn/proces w terminie

Etap 5: Optymalizacja i rozwój operacji
         → Deliverable: osiągnięte KPI + redukcja kosztów + skalowalny proces
```

Rozliczenie: zadaniowe / etapowe / success fee — elastyczne, ustalane z klientem.

---

## Strona główna — sekcje (kolejność)

1. **Hero** — H1 + podtytuł + CTA "Umów konsultację" (Calendly) + CTA secondary "Zobacz usługi"
   - Aerial warehouse photo jako tło
   - Eyebrow: "LOGISTICS CONSULTING, END TO END"
   - H1 przykład: "Od analizy do wdrożenia. Bez kompromisów."

2. **Liczby / stat bar** — 4 liczby agregatowe (do uzupełnienia przez klienta)

3. **Dla kogo** — 4 persony jako karty z ikoną, tytułem, 1-zdaniowym opisem problemu

4. **Usługi** — 5 kart: Pośrednictwo / Doradztwo operacyjne / Greenfield / Drony / Interim

5. **Proces** — skrócony timeline 5 kroków (01-05), link do /proces

6. **Anonimowe case studies** — 2-3 karty bez nazwy klienta:
   - Format: [branża] — [wynik] — [czas]
   - Przykład: "Operator 3PL, branża FMCG — redukcja kosztów operacyjnych o 23% w 4 miesiące"

7. **CEO / O nas** — zdjęcie + imię + stanowisko + 2 zdania + LinkedIn

8. **Wiedza** — 3 ostatnie artykuły

9. **CTA końcowe** — "Umów bezpłatną konsultację" + formularz Klaviyo

---

## Strona /proces

5 etapów z nazwami Vologis (patrz sekcja Proces wyżej):
- Każdy etap: numer, nazwa, opis 2-3 zdania, deliverables jako bullet lista
- HowTo schema
- Zaznacz elastyczność rozliczenia

---

## Strona /o-nas

- Filozofia firmy (niezależność, end-to-end, praktyka operacyjna)
- CEO: imię nazwisko (do uzupełnienia), stanowisko, bio 3-4 zdania, LinkedIn
- Model pracy: sieć specjalistów dobieranych do projektu
- NIE pokazujemy listy zespołu (zmienna, projektowa)

---

## Referencje / social proof

**Brak logo klientów** (umowy o poufności).

Zamiast tego:
- Anonimowe case studies: branża + wynik + czas
- Generyczne cytaty bez danych osobowych i nazw firm
- Liczby agregatowe w stat bar

---

## Content — tematy /wiedza (5 artykułów startowych)

1. Sztuczna inteligencja i automatyzacja w optymalizacji logistyki
2. Wybór partnera logistycznego — dlaczego doradztwo ważniejsze niż cena
3. Anatomia udanego projektu Greenfield — najczęstsze błędy
4. Innowacje z powietrza — drony w służbie inwestycji logistycznych
5. Interim management w logistyce — kiedy warto i jak to działa

---

## FAQ (na podstronach usługowych)

1. Czy przygotowujecie tylko audyty czy też wdrażacie zmiany?
2. Czym różnicie się od agencji nieruchomości lub brokera?
3. Jak szybko możecie pomóc przy kryzysie wydajności?
4. Czy faworyzujecie konkretnych dostawców WMS / automatyki?
5. Jakie jest zastosowanie dronów w doradztwie logistycznym?
6. Czy wewnętrzny dział logistyki nie wystarczy?

---

## SEO / GEO / AEO

### SEO
- `<title>` i `<meta description>` unikalne dla każdej strony
- `sitemap.xml` generowany automatycznie przez @astrojs/sitemap
- `robots.txt`
- Canonical URLs
- Breadcrumbs (BreadcrumbList schema)
- OG tags dla każdej strony
- hreflang: `pl` i `en` na każdej stronie

### GEO
- `llms.txt` w katalogu głównym
- Geo meta tagi (`geo.region`, `geo.placename`, `geo.position`)
- NAP spójne w stopce i schema (adres Jarocin)

### AEO
- FAQ schema (FAQPage) na każdej podstronie usługowej
- Speakable schema na stronach z kluczowymi treściami
- Q&A bloki na podstronach usługowych

### Schema markup
- `Organization` — `<head>` na każdej stronie
- `LocalBusiness` — strona główna i /kontakt
- `Service` — każda podstrona usługowa
- `BreadcrumbList` — każda podstrona
- `Article` — podstrony /wiedza
- `FAQPage` — podstrony usługowe i /proces
- `HowTo` — podstrona /proces

---

## Integracje

| Serwis | Cel | Sposób |
|--------|-----|--------|
| Calendly | Umawianie spotkań | Embed widget /kontakt + popup CTA — zakładamy nowe konto |
| Google Analytics 4 | Analityka | `<script>` w `<head>` — zakładamy nowe |
| Google Search Console | SEO | Meta tag weryfikacji — zakładamy nowe |
| Google Business Profile | Wizytówka | Schema markup — do decyzji ws. adresu |
| Klaviyo | Lead form + 1 automation flow | Embed JS — zakładamy nowe konto |
| Microsoft Clarity | Heatmapy + nagrania sesji | `<script>` w `<head>` |
| Cloudflare | DNS, CDN, SSL, hosting | Migracja z nazwa.pl |

**Email:** biuro@vologis.com (główny) + aliasy: office@, kontakt@, info@ + catch-all

---

## Czego NIE robić

- Nie dodawaj CMS
- Nie dodawaj cookies consent (brak ciasteczek lub open-source)
- Nie konfiguruj Google Ads ani Meta Ads
- Nie rób link buildingu
- Nie dodawaj strefy klienta
- Nie pokazuj listy team (dynamiczna, projektowa)
- Nie używaj logo ani nazw klientów
- Nie regionalizuj usług po województwach
- Nie używaj animacji spowalniających LCP
- Nie generuj SSR dla statycznych treści
- Nie używaj obrazków bez alt/width/height

---

## Deploy

```bash
# Build
npm run build

# Preview lokalnie
npm run preview

# Deploy na Cloudflare Pages
# Połącz repo z Cloudflare Pages dashboard
# Build command:   npm run build
# Output dir:      dist
```

---

## Pliki i konwencje

```
src/
  pages/           Strony Astro (.astro)
  components/      Komponenty (PascalCase)
  layouts/         BaseLayout.astro (musi importować ../styles/global.css)
  content/         Treści MD dla /wiedza
  data/
    programmatic.json   Dane dla ~40 URL programmatic SEO
    services.json       Dane usług
    faq.json            FAQ per usługa
  styles/
    global.css     Tailwind base (importowany w każdym layoucie)
public/
  robots.txt
  llms.txt
  og/              OG images (1200×630)
```

Nazwy plików: kebab-case. Komponenty: PascalCase.

---

## Dane projektu

- Klient: Vologis Sp. z o.o. | biuro@vologis.com | domena: nazwa.pl
- Wykonawca: Prolabs / Michał Abram | michal@prolabs.pl | +48 666 022 000
- Umowa: PRL-2026-05-VOL
