/**
 * Explicit PL ↔ EN URL mapping for core pages where slugs differ.
 * Programmatic pages pass their alternates directly in the page template.
 */
export const PL_TO_EN: Record<string, string> = {
  "/pl/":                              "/en/",
  "/pl/o-nas/":                        "/en/about/",
  "/pl/kontakt/":                      "/en/contact/",
  "/pl/proces/":                       "/en/process/",
  "/pl/wiedza/":                       "/en/insights/",
  "/pl/uslugi/":                       "/en/services/",
  "/pl/regulamin/":                    "/en/terms/",
  "/pl/polityka-prywatnosci/":         "/en/privacy-policy/",
  "/pl/wspolpraca/":                   "/en/work-with-us/",
  // Core service pages
  "/pl/uslugi/posrednictwo-logistyczne/":  "/en/services/logistics-brokerage/",
  "/pl/uslugi/doradztwo-operacyjne/":      "/en/services/operational-consulting/",
  "/pl/uslugi/projekty-greenfield/":       "/en/services/greenfield-projects/",
  "/pl/uslugi/uslugi-dronowe/":            "/en/services/drone-services/",
  "/pl/uslugi/interim-management/":        "/en/services/interim-management/",
  "/pl/uslugi/komercjalizacja-i-sprzedaz/":"/en/services/commercialization-and-sales/",
  "/pl/uslugi/bezpieczenstwo-operacyjne/": "/en/services/operational-security/",
  // Articles
  "/pl/wiedza/audyt-logistyczny/":                 "/en/insights/logistics-audit/",
  "/pl/wiedza/ai-automatyzacja-logistyka/":        "/en/insights/ai-automation-logistics/",
  "/pl/wiedza/wybor-partnera-logistycznego/":      "/en/insights/choosing-a-logistics-partner/",
  "/pl/wiedza/projekt-greenfield-bledy/":          "/en/insights/greenfield-project-mistakes/",
  "/pl/wiedza/drony-inwestycje-logistyczne/":      "/en/insights/drones-logistics-investments/",
  "/pl/wiedza/interim-management-logistyka/":      "/en/insights/interim-management-logistics/",
};

export const EN_TO_PL: Record<string, string> = Object.fromEntries(
  Object.entries(PL_TO_EN).map(([pl, en]) => [en, pl])
);

/** Resolve the EN alternate for any PL path (falls back to /pl → /en prefix swap). */
export function toEnPath(plPath: string): string {
  return PL_TO_EN[plPath] ?? plPath.replace(/^\/pl/, "/en");
}

/** Resolve the PL alternate for any EN path (falls back to /en → /pl prefix swap). */
export function toPlPath(enPath: string): string {
  return EN_TO_PL[enPath] ?? enPath.replace(/^\/en/, "/pl");
}
