import tailwindcss from "@tailwindcss/vite";

import { business, catalog, sameAs, SITE_URL } from "./app/data/business";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxtjs/seo",
  ],

  // SSR + preset github-pages = SSG: todas as rotas viram HTML estático.
  ssr: true,

  devtools: { enabled: true },

  app: {
    baseURL: "/",
    head: {
      htmlAttrs: { lang: "pt-BR" },
      titleTemplate: "%s | Vimasi Vedações",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "author", content: business.name },
        { name: "theme-color", content: "#050505" },
        // Geo tags para SEO local
        { name: "geo.region", content: "BR-RS" },
        { name: "geo.placename", content: "Lajeado" },
        {
          name: "geo.position",
          content: `${business.geo.latitude};${business.geo.longitude}`,
        },
        {
          name: "ICBM",
          content: `${business.geo.latitude}, ${business.geo.longitude}`,
        },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },

  css: ["~/assets/css/main.css"],

  // Identidade do site usada por sitemap, robots, canonical, og:url e schema.org.
  // Convenção: barra final em todas as URLs (casa com /rota/index.html do GitHub Pages).
  site: {
    url: SITE_URL,
    name: business.name,
    description: business.description,
    defaultLocale: "pt-BR",
    trailingSlash: true,
  },

  experimental: {
    defaults: {
      nuxtLink: { trailingSlash: "append" },
    },
  },
  compatibilityDate: "2026-10-01",

  nitro: {
    preset: "github-pages",
    prerender: {
      crawlLinks: true,
      routes: ["/", "/sitemap.xml", "/robots.txt", "/llms.txt", "/llms-full.txt"],
      failOnError: true,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  // Gera /llms.txt, /llms-full.txt e versões .md das páginas para motores de IA.
  aiReady: {
    llmsTxt: {
      notes: [
        "Vimasi Vedações (Lajeado, RS) é uma loja especializada em vedações hidráulicas e industriais: gaxetas, anéis O-ring, raspadores, anéis guia e kits de reparo para cilindros hidráulicos.",
        `Endereço: ${business.addressLine}. Telefone/WhatsApp: ${business.phoneDisplay}. E-mail: ${business.email}. Horário: ${business.hours.display}.`,
        `Área de atendimento: todo o Vale do Taquari (${business.cities.join(", ")}) e demais regiões do Rio Grande do Sul, com retirada em loja e envio por transportadora.`,
        "Orçamentos são feitos pelo WhatsApp; não há preços publicados no site. Vedações sob medida mediante informação das dimensões do alojamento.",
      ],
    },
    contentSignal: { search: true, aiInput: true, aiTrain: true },
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  // Fontes auto-hospedadas no build (substitui o <link> do Google Fonts).
  fonts: {
    families: [
      { name: "Anton", provider: "google", weights: [400] },
      {
        name: "Arimo",
        provider: "google",
        weights: ["400 700"],
        styles: ["normal", "italic"],
      },
    ],
  },

  image: {
    format: ["webp", "avif"],
    quality: 85,
    dir: "assets/images",
  },

  linkChecker: {
    failOnError: true,
    report: { html: true, markdown: true },
  },

  // Imagens OG são JPEGs estáticos 1200x630 em public/og/ (sem renderização no CI).
  ogImage: { enabled: false },

  robots: {
    groups: [
      { userAgent: ["*"], allow: ["/"] },
      {
        comment: ["Crawlers de IA permitidos: conteúdo citável por motores de resposta"],
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-SearchBot",
          "anthropic-ai",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "Bingbot",
          "Applebot",
          "Amazonbot",
          "CCBot",
          "DuckAssistBot",
        ],
        allow: ["/"],
      },
    ],
  },

  // Entidade principal: aparece em todas as páginas como LocalBusiness + Organization.
  schemaOrg: {
    identity: {
      type: "LocalBusiness",
      name: business.name,
      url: SITE_URL,
      logo: `${SITE_URL}/og/logo-square.png`,
      image: `${SITE_URL}/og/home.jpg`,
      description: business.description,
      telephone: business.phoneE164,
      email: business.email,
      priceRange: "$$",
      currenciesAccepted: "BRL",
      address: {
        "@type": "PostalAddress",
        streetAddress: `${business.address.streetAddress} - ${business.address.neighborhood}`,
        addressLocality: business.address.addressLocality,
        addressRegion: business.address.addressRegion,
        postalCode: business.address.postalCode,
        addressCountry: business.address.addressCountry,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: business.geo.latitude,
        longitude: business.geo.longitude,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [...business.hours.days],
          opens: business.hours.opens,
          closes: business.hours.closes,
        },
      ],
      areaServed: business.cities.map((city) => ({
        "@type": "City",
        name: city,
        containedInPlace: { "@type": "State", name: "Rio Grande do Sul" },
      })),
      knowsAbout: [...business.knowsAbout],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Vedações hidráulicas e industriais",
        itemListElement: catalog.map((item) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: item.name,
            description: item.short,
            url: `${SITE_URL}${item.path}`,
          },
        })),
      },
      sameAs,
    },
  },

  sitemap: {
    xsl: false,
    credits: false,
    // Evita listar placeholders _ipx de 2px como imagens do sitemap
    discoverImages: false,
  },

  // Site estático: sem proteção de skew de deploy.
  skewProtection: false,
});
