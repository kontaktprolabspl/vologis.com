# CLAUDE.md — vologis.com

## Projekt

Pełna przebudowa serwisu vologis.com — B2B logistics consulting, transport i spedycja, zarządzanie łańcuchem dostaw. Firma z Jarocina, działająca od 2011, rynki PL + EU. Klient biznesowy: właściciel/zarząd firm produkcyjnych, dystrybucyjnych, e-commerce.

Cel strony: generowanie leadów B2B (formularz + Calendly). NIE e-commerce, NIE strefa klienta, NIE blog z komentarzami.

## Commands

```bash
npm run dev       # Start dev server (localhost:4321)
npm run build     # Production build to dist/
npm run preview   # Preview production build locally
```

---

## Stack technologiczny


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
- Bootstrap, Material UI, shadcn (chyba że Hallmark tego wymaga)
- Cookies consent (brak ciasteczek lub open-source)

---

## Brand

```
Navy (primary):    #0d1b2a
Red (accent):      #cc1f1f
Blue (secondary):  #4a90d9
White:             #ffffff
Gray light:        #f8fafc
Gray text:         #64748b
```

Typografia: Inter lub podobna geometryczna sans-serif. Bold na nagłówkach, regular na body.

Ton komunikacji: ekspercki, partnerski, konkretny. Bez corporate-speak. Bez "świadczymy usługi najwyższej jakości".

---

## Struktura URL

### Core pages (stałe)

```
/                                    Strona główna
/o-nas                               O firmie
/uslugi/doradztwo-logistyczne        Hub usług logistycznych
/uslugi/transport-spedycja           Transport i spedycja
/uslugi/zarzadzanie-lancuchem-dostaw Supply chain management
/proces                              Jak pracujemy
/wiedza                              Hub artykułów (5 startowych)
/kontakt                             Formularz + Calendly
/regulamin                           Regulamin
/polityka-prywatnosci                Polityka prywatności
```

### Programmatic SEO (~50 URL)

```
/uslugi/transport-[region]
  Przykłady: transport-mazowieckie, transport-wielkopolskie,
  transport-slaskie, transport-dolnoslaskie, transport-malopolskie,
  transport-lodzkie, transport-pomorskie, transport-kujawsko-pomorskie,
  transport-warminsko-mazurskie, transport-podlaskie, transport-lubelskie,
  transport-podkarpackie, transport-swietokrzyskie, transport-opolskie,
  transport-lubuskie, transport-zachodniopomorskie
  (~16 województw × 2 = ~32 URL łącznie z wariantem EN)

/uslugi/doradztwo-logistyczne-[branza]
  Przykłady: doradztwo-logistyczne-fmcg, doradztwo-logistyczne-automotive,
  doradztwo-logistyczne-ecommerce, doradztwo-logistyczne-produkcja,
  doradztwo-logistyczne-farmacja, doradztwo-logistyczne-budownictwo,
  doradztwo-logistyczne-retail, doradztwo-logistyczne-dystrybucja
  (~15 URL)
```

Szablony programmatic generowane z danych JSON — jeden komponent Astro, dane z pliku.

---

## SEO / GEO / AEO

### SEO
- `<title>` i `<meta description>` unikalne dla każdej strony
- `sitemap.xml` generowany automatycznie przez Astro
- `robots.txt`
- Canonical URLs
- Breadcrumbs (BreadcrumbList schema)
- OG tags (og:title, og:description, og:image) dla każdej strony
- hreflang: `pl` i `en` na każdej stronie

### GEO
- `llms.txt` w katalogu głównym
- Geo meta tagi (`geo.region`, `geo.placename`, `geo.position`)
- NAP (Name, Address, Phone) spójne w stopce i schema

### AEO
- FAQ schema (FAQPage) na każdej podstronie usługowej
- Speakable schema na stronach z kluczowymi treściami
- Q&A bloki na podstronach usługowych

### Schema markup
- `Organization` — w `<head>` na każdej stronie
- `LocalBusiness` — strona główna i /kontakt
- `Service` — każda podstrona usługowa
- `BreadcrumbList` — każda podstrona
- `Article` — podstrony /wiedza
- `FAQPage` — podstrony usługowe i /proces

---

## Integracje

| Serwis | Cel | Sposób |
|--------|-----|--------|
| Calendly | Umawianie spotkań | Embed widget na /kontakt i popup CTA |
| Google Analytics 4 | Analityka | `<script>` w `<head>` |
| Google Search Console | SEO | Meta tag weryfikacji |
| Google Business Profile | Wizytówka | Schema markup + konfiguracja zewnętrzna |
| Klaviyo | Lead form + automation | Embed formularza JS |
| Microsoft Clarity | Heatmapy | `<script>` w `<head>` |
| Cloudflare | DNS, CDN, SSL, hosting | Cloudflare Pages deploy |

---

## Strona główna — sekcje (kolejność)

1. **Hero** — nagłówek H1, podtytuł, CTA "Umów konsultację" (Calendly) + CTA secondary "Zobacz usługi"
2. **Liczby** — lata doświadczenia, liczba projektów, rynki/kraje (dane od klienta)
3. **Usługi** — 3 karty: Doradztwo logistyczne / Transport i spedycja / Zarządzanie SCM
4. **Proces** — skrócony (3-4 kroki), link do /proces
5. **Referencje** — loga klientów + 1-2 cytaty
6. **Wiedza** — 3 ostatnie artykuły
7. **LinkedIn widget** — embed aktywności (best effort)
8. **CTA końcowe** — "Umów bezpłatną konsultację" + formularz Klaviyo

---

## Strona /proces — sekcje

Etapy procesu pracy Vologis (dane od klienta — wypełni ankietę):
- Diagnoza → Analiza → Rekomendacja → Wdrożenie → Monitoring
- Każdy etap: nazwa, opis, czas trwania, co klient dostaje
- HowTo schema

---

## Content

- Treści AI-generated przez Prolabs (PL + EN)
- Review i akceptacja po stronie Vologis
- Ton: ekspercki, konkretny, bez ogólników
- Unikaj: "kompleksowe usługi", "najwyższa jakość", "profesjonalne podejście"
- Używaj: liczb, nazw branż, konkretnych efektów ("redukcja kosztów o X%")
- Każda podstrona programmatic ma unikalny H1, intro (150-200 słów), FAQ (5 pytań), CTA

---

## Czego NIE robić

- Nie dodawaj CMS
- Nie dodawaj cookies consent (brak ciasteczek lub open-source rozwiązanie)
- Nie konfiguruj Google Ads ani Meta Ads
- Nie rób link buildingu
- Nie dodawaj strefy klienta
- Nie używaj animacji które spowalniają LCP
- Nie generuj kodu po stronie serwera dla statycznych treści
- Nie używaj obrazków bez `alt`, `width`, `height`
- Nie używaj inline styles zamiast Tailwind klas

---

## Deploy

```bash
# Build
npm run build

# Preview lokalnie
npm run preview

# Deploy na Cloudflare Pages
# Połącz repo z Cloudflare Pages dashboard
# Build command: npm run build
# Output directory: dist
```

---

## Pliki i konwencje

```
src/
  pages/           Strony Astro (.astro)
  components/      Komponenty wielokrotnego użytku
  layouts/         Layout główny (BaseLayout.astro)
  content/         Treści MD dla /wiedza
  data/            JSON dla programmatic SEO (regiony, branże)
  styles/          globals.css (Tailwind base)
public/
  robots.txt
  llms.txt
  sitemap.xml      (generowany przez @astrojs/sitemap)
  og/              OG images
```

Nazwy plików: kebab-case. Komponenty: PascalCase.

---

## Kontakt / dane projektu

- Klient: Vologis Sp. z o.o., Jarocin
- Wykonawca: Prolabs / Michał Abram
- Umowa: PRL-2026-05-VOL
- Kontakt Prolabs: michal@prolabs.pl / +48 666 022 000
