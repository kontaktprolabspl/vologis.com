/**
 * Single source of truth for Vologis site data.
 * Import from here in layouts, schemas, components — never hardcode NAP elsewhere.
 *
 * TODO: Verify exact founding year for schema (KRS 2021, operations from 2011).
 * TODO: Add default OG image path once /og/home.jpg is created.
 */

export const SITE = {
  /* ── Identity ──────────────────────────────────────────── */
  name: "Vologis",
  legalName: "Vologis Sp. z o.o.",
  url: "https://vologis.com" as const,
  nip: "6172220630",
  krs: "0000902577",

  /* ── Contact / NAP ─────────────────────────────────────── */
  contact: {
    email: "biuro@vologis.com",
    /** E.164 format for schema.org telephone */
    phone: "+48533037996",
    /** Human-readable display format */
    phoneDisplay: "+48 533 037 996",
  },

  /* ── Address ────────────────────────────────────────────── */
  address: {
    street: "ul. Wrocławska 79B",
    postalCode: "63-200",
    locality: "Jarocin",
    region: "Wielkopolskie",
    /** ISO 3166-2 region code for geo.region meta tag */
    regionCode: "PL-WP",
    country: "PL",
    countryName: "Polska",
    /** Coordinates from KRS/maps — verify before publishing */
    geo: {
      lat: 51.9694,
      lng: 17.4975,
    },
  },

  /* ── Social ─────────────────────────────────────────────── */
  social: {
    linkedin: "https://www.linkedin.com/company/vologis",
  },

  /* ── Coverage & expertise ───────────────────────────────── */
  areaServed: ["Polska", "Europa"] as string[],

  knowsAbout: [
    "pośrednictwo logistyczne",
    "fulfillment i obsługa e-commerce",
    "doradztwo operacyjne",
    "audyt logistyczny",
    "projekty Greenfield",
    "usługi dronowe",
    "interim management",
    "logistyka",
    "transport krajowy i międzynarodowy",
    "optymalizacja procesów logistycznych",
    "zarządzanie łańcuchem dostaw",
    "pośrednictwo sprzedaży",
    "komercjalizacja powierzchni magazynowej",
    "market entry",
    "bezpieczeństwo operacyjne",
    "loss prevention",
    "projektowanie systemów CCTV",
    "detektywistyka gospodarcza",
    "procesy antyfraudowe",
  ] as string[],

  /* ── Per-language defaults ──────────────────────────────── */
  defaults: {
    pl: {
      title:
        "Vologis — niezależne doradztwo logistyczne end-to-end",
      description:
        "Vologis: pośrednictwo logistyczne, doradztwo operacyjne, projekty Greenfield, usługi dronowe i interim management. Od analizy do wdrożenia — niezależnie, z odpowiedzialnością za efekt.",
      locale: "pl_PL",
      lang: "pl",
      hreflang: "pl-PL",
    },
    en: {
      title:
        "Vologis — logistics, forwarding, transport and advisory for companies",
      description:
        "Vologis supports companies in logistics, forwarding, transport and advisory, helping organize processes, reduce risk and optimize operational costs.",
      locale: "en_US",
      lang: "en",
      hreflang: "en",
    },
  },

  /**
   * Default OG image path.
   * TODO: Create /public/og/home.jpg (1200×630 px) and update this path.
   */
  ogImage: "/og/home.jpg",
} as const;

export type Lang = "pl" | "en";
