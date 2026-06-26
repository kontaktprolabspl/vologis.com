export interface KnowledgeArticleEN {
  title: string;
  slug: string;
  description: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  featured?: boolean;
}

export const knowledgeArticlesEN: KnowledgeArticleEN[] = [
  {
    title: "The Logistics Audit — How to Objectively Find Where Your Business Is Losing Time, Money, and Efficiency",
    slug: "logistics-audit",
    description: "What a logistics audit is, when to run one, what it should cover, and how it informs decisions on warehousing, transport, costs and operational processes.",
    category: "Logistics audit",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    readingTime: "8–10 min",
    featured: true,
  },
  {
    title: "AI and Automation in Logistics — Where It's Actually Worth Investing, and Where It's Just Hype",
    slug: "ai-automation-logistics",
    description: "Artificial intelligence and automation in logistics: real-world applications, where they deliver ROI, and where they're just hype. A practical guide for companies considering investment.",
    category: "Systems & data",
    publishedAt: "2026-06-18",
    updatedAt: "2026-06-18",
    readingTime: "9–11 min",
  },
  {
    title: "Choosing a Logistics Partner — Why the Lowest Price Is Almost Always a Trap",
    slug: "choosing-a-logistics-partner",
    description: "Selecting a logistics operator, fulfillment partner or carrier: what to look for beyond price, how to verify a partner, and why the cheapest offer often costs the most.",
    category: "Logistics consulting",
    publishedAt: "2026-05-28",
    updatedAt: "2026-05-28",
    readingTime: "8–10 min",
  },
  {
    title: "Anatomy of a Greenfield Project — The Costliest Mistakes That Stay with a Company for a Decade",
    slug: "greenfield-project-mistakes",
    description: "Building a warehouse or distribution centre from scratch: the most common mistakes in site selection, layout design and automation that cost money for decades.",
    category: "Logistics optimisation",
    publishedAt: "2026-04-30",
    updatedAt: "2026-04-30",
    readingTime: "9–11 min",
  },
  {
    title: "Drones in Logistics Investments — From Site Survey to Property Commercialisation",
    slug: "drones-logistics-investments",
    description: "How to use drones in logistics and investment projects: land surveying, orthophotomaps, construction monitoring and marketing materials. Practical applications and real benefits.",
    category: "Logistics consulting",
    publishedAt: "2026-04-16",
    updatedAt: "2026-04-16",
    readingTime: "7–9 min",
  },
  {
    title: "Interim Management in Logistics — When to Bring in a Manager for a Fixed Term",
    slug: "interim-management-logistics",
    description: "Interim management in logistics: when temporary management support makes sense, how the engagement works, and how it differs from a permanent hire. A practical guide for management teams.",
    category: "Logistics consulting",
    publishedAt: "2026-05-14",
    updatedAt: "2026-05-14",
    readingTime: "8–10 min",
  },
];

export const knowledgeCategoriesEN = [
  { title: "Transport",              description: "Shipment organisation, carrier selection, domestic and international transport, FTL, LTL, groupage and transport cost control." },
  { title: "Forwarding",             description: "Transport planning, documents, communication, carrier coordination and shipment execution safety." },
  { title: "Warehousing",            description: "Warehouse processes, layout, picking, packing, returns, space utilisation and team efficiency." },
  { title: "Logistics optimisation", description: "Identifying waste, bottlenecks, excess costs and actions that improve operational performance." },
  { title: "Supply chain",           description: "Planning goods, inventory, delivery, distribution flows and cross-departmental collaboration." },
  { title: "Systems & data",         description: "WMS, ERP, reporting, data quality, automation and data-driven logistics decisions." },
  { title: "Logistics consulting",   description: "Audits, recommendations, change projects, preparation for scaling, relocation, automation or process reorganisation." },
] as const;
