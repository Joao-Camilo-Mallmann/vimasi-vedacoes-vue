/**
 * Fonte única de dados da empresa (NAP: nome, endereço, telefone).
 * Usado por nuxt.config.ts (schema.org identity), componentes e páginas.
 * Nunca escreva endereço/telefone diretamente em templates: importe daqui.
 */

export const SITE_URL = "https://vimasi-vedacoes.com";

export interface CatalogItem {
  /** Slug estável usado em âncoras e no ItemList */
  id: string;
  name: string;
  /** Rota com barra final (convenção do site) ou âncora dentro de /vedacoes/ */
  path: string;
  /** Caminho relativo a assets/images (NuxtImg) */
  image: string;
  alt: string;
  short: string;
  /** true quando a família tem página própria */
  hasPage: boolean;
}

export const business = {
  name: "Vimasi Vedações",
  url: SITE_URL,
  description:
    "Loja especializada em vedações hidráulicas e industriais em Lajeado/RS: gaxetas, anéis O-ring, raspadores, anéis guia e kits de reparo para cilindros hidráulicos. Atende todo o Vale do Taquari e o Rio Grande do Sul.",
  phoneDisplay: "(51) 99619-4676",
  phoneE164: "+5551996194676",
  whatsappNumber: "555196194676",
  whatsappUrl: "https://wa.me/555196194676",
  whatsappQuoteUrl:
    "https://wa.me/555196194676?text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento",
  email: "vimasicomerciopecas@gmail.com",
  instagramUrl: "https://www.instagram.com/vimasi_pecas/",
  mapsUrl: "https://maps.app.goo.gl/VQzXHJzPMdCavSP56",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Av.+Cristiano+Dexheimer,+83,+Lajeado+-+RS&t=&z=15&ie=UTF8&iwloc=&output=embed",
  address: {
    streetAddress: "Av. Cristiano Dexheimer, 83",
    neighborhood: "Campestre",
    addressLocality: "Lajeado",
    addressRegion: "RS",
    postalCode: "95912-192",
    addressCountry: "BR",
  },
  /** Endereço em uma linha, idêntico em rodapé, contato, página regional e schema */
  addressLine: "Av. Cristiano Dexheimer, 83 - Campestre, Lajeado - RS, CEP 95912-192",
  geo: { latitude: -29.4678, longitude: -51.9614 },
  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
    display: "Segunda a sexta, das 8h às 18h",
  },
  /** Cidades do Vale do Taquari atendidas (ordem: maiores primeiro) */
  cities: [
    "Lajeado",
    "Estrela",
    "Encantado",
    "Teutônia",
    "Arroio do Meio",
    "Cruzeiro do Sul",
    "Taquari",
    "Bom Retiro do Sul",
    "Roca Sales",
    "Muçum",
    "Imigrante",
    "Westfália",
    "Paverama",
    "Fazenda Vilanova",
    "Colinas",
    "Santa Clara do Sul",
    "Marques de Souza",
    "Progresso",
  ],
  /** Regiões vizinhas (fora do Vale do Taquari) citadas apenas como "também atendemos" */
  nearbyRegions: ["Vale do Rio Pardo (Venâncio Aires, Santa Cruz do Sul)", "Serra Gaúcha", "Região Metropolitana de Porto Alegre"],
  knowsAbout: [
    "gaxetas hidráulicas",
    "anéis O-ring",
    "raspadores de haste",
    "anéis guia",
    "kits de reparo para cilindros hidráulicos",
    "retentores",
    "vedações industriais",
  ],
} as const;

export const sameAs: string[] = [
  business.instagramUrl,
  business.mapsUrl,
  business.whatsappUrl,
];

export const catalog: CatalogItem[] = [
  {
    id: "gaxetas",
    name: "Gaxetas",
    path: "/gaxetas/",
    image: "/catalog/gaxetas.webp",
    alt: "Gaxetas hidráulicas em poliuretano e NBR para haste e pistão de cilindros",
    short: "Vedação dinâmica de haste e pistão em cilindros hidráulicos e pneumáticos.",
    hasPage: true,
  },
  {
    id: "raspadores",
    name: "Raspadores",
    path: "/raspadores/",
    image: "/catalog/raspadores.webp",
    alt: "Raspadores de haste para cilindros hidráulicos",
    short: "Impedem a entrada de poeira, lama e cavacos pela haste do cilindro.",
    hasPage: true,
  },
  {
    id: "aneis-oring",
    name: "Anéis O-ring",
    path: "/aneis-vedacao/",
    image: "/catalog/aneisoring.webp",
    alt: "Anéis O-ring em NBR e Viton de diversas medidas",
    short: "O-rings, X-rings e back-up rings em NBR, Viton, silicone e EPDM.",
    hasPage: true,
  },
  {
    id: "kits-reparo",
    name: "Kits de Reparo",
    path: "/kits-reparo/",
    image: "/catalog/kit-reparo.webp",
    alt: "Kit de reparo completo para cilindro hidráulico",
    short: "Conjunto completo de vedações para a manutenção de um cilindro.",
    hasPage: true,
  },
  {
    id: "aneis-guia",
    name: "Anéis Guia",
    path: "/vedacoes/#aneis-guia",
    image: "/catalog/aneis-guia.webp",
    alt: "Anéis guia em PTFE e poliamida para pistão e haste",
    short: "Fitas e anéis guia que centralizam haste e pistão e evitam contato metal-metal.",
    hasPage: false,
  },
  {
    id: "capped-seal",
    name: "Conjunto Capped Seal",
    path: "/vedacoes/#capped-seal",
    image: "/catalog/conjunto-capped-seal.webp",
    alt: "Conjunto de vedação capped seal para pistão de cilindro hidráulico",
    short: "Vedação de pistão com capa em PTFE e anel energizador para alta pressão.",
    hasPage: false,
  },
  {
    id: "oeod",
    name: "Conjunto OEOD",
    path: "/vedacoes/#oeod",
    image: "/catalog/conjunto-oeod.webp",
    alt: "Conjunto de vedação OEOD para pistão de dupla ação",
    short: "Vedação compacta de pistão para cilindros de dupla ação.",
    hasPage: false,
  },
];

/** Páginas do site, usadas em rodapé e navegação (todas com barra final) */
export const siteRoutes = [
  { label: "Home", to: "/" },
  { label: "Produtos", to: "/vedacoes/" },
  { label: "Gaxetas", to: "/gaxetas/" },
  { label: "Raspadores", to: "/raspadores/" },
  { label: "Anéis O-ring", to: "/aneis-vedacao/" },
  { label: "Kits de Reparo", to: "/kits-reparo/" },
  { label: "Vale do Taquari", to: "/vedacoes-vale-do-taquari/" },
  { label: "Contato", to: "/contato/" },
] as const;
