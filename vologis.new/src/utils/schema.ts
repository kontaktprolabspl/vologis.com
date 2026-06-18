/**
 * Schema.org helper functions.
 * All helpers return plain objects — serialize with JSON.stringify when embedding.
 *
 * Usage in Astro pages:
 *   import { breadcrumbSchema, faqSchema, articleSchema } from "../../utils/schema";
 *   const bc = breadcrumbSchema([{ name: "Strona główna", url: "/pl/" }, ...]);
 *   ---
 *   <script type="application/ld+json" set:html={JSON.stringify(bc)} />
 */

import { SITE } from "../config/site";

/* ── Types ─────────────────────────────────────────────────── */

export interface FAQItem {
  q: string;
  a: string;
}

export interface HowToStep {
  num?: string;
  title: string;
  text: string;
  url?: string;
}

export interface BreadcrumbItem {
  name: string;
  /** Absolute URL or path starting with / */
  url: string;
}

/* ── Helpers ────────────────────────────────────────────────── */

function abs(url: string): string {
  return url.startsWith("http") ? url : `${SITE.url}${url}`;
}

/* ── Global schemas (used in BaseLayout) ─────────────────────── */

/** Global Organization schema — inject once per page in <head>. */
export function orgSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.legalName,
    url: SITE.url,
    email: SITE.contact.email,
    telephone: SITE.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      postalCode: SITE.address.postalCode,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    areaServed: SITE.areaServed,
    knowsAbout: SITE.knowsAbout,
    sameAs: [SITE.social.linkedin],
  };
}

/** LocalBusiness schema — use on homepage and contact page. */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    url: SITE.url,
    email: SITE.contact.email,
    telephone: SITE.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      postalCode: SITE.address.postalCode,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.address.geo.lat,
      longitude: SITE.address.geo.lng,
    },
    areaServed: SITE.areaServed,
  };
}

/* ── Per-page schemas ────────────────────────────────────────── */

/** BreadcrumbList schema — include on every page that shows breadcrumbs. */
export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: abs(item.url),
    })),
  };
}

/**
 * FAQPage schema.
 * Only use when the page visibly displays a FAQ section.
 */
export function faqSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

/**
 * HowTo schema.
 * Only use when the page has a genuine step-by-step instructional section.
 */
export function howToSchema({
  name,
  description,
  steps,
}: {
  name: string;
  description: string;
  steps: HowToStep[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.title,
      text: step.text,
      ...(step.url ? { url: abs(step.url) } : {}),
    })),
  };
}

/**
 * Article schema.
 * Use for all /pl/wiedza/* and /en/knowledge/* article pages.
 */
export function articleSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  inLanguage = "pl-PL",
  image,
}: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  inLanguage?: string;
  image?: string;
}) {
  const publisher = {
    "@type": "Organization" as const,
    name: SITE.legalName,
    url: SITE.url,
  };
  const absUrl = abs(url);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url: absUrl,
    datePublished,
    dateModified: dateModified ?? datePublished,
    inLanguage,
    author: publisher,
    publisher,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absUrl,
    },
    ...(image ? { image: abs(image) } : {}),
  };
}

/**
 * Service schema.
 * Use on each /pl/uslugi/* service page.
 */
export function serviceSchema({
  name,
  description,
  serviceType,
  url,
}: {
  name: string;
  description: string;
  serviceType: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: SITE.areaServed,
    url: abs(url),
  };
}

/**
 * Speakable schema.
 * Only use when the page has stable elements with data-speakable attributes.
 * @param pageUrl - absolute URL of the page
 * @param selectors - CSS selectors targeting speakable elements
 */
export function speakableSchema(
  pageUrl: string,
  selectors: string[] = [
    "[data-speakable='headline']",
    "[data-speakable='summary']",
  ]
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: abs(pageUrl),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: selectors,
    },
  };
}
