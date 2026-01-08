import tailwindcss from "@tailwindcss/vite";

// Site configuration
const siteUrl = "https://vimasi-vedacoes.com";
const basePath = "/";
const fullUrl = `${siteUrl}`;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ["@nuxt/eslint", "@nuxt/icon"],

  // Static site generation for GitHub Pages
  ssr: true,


  devtools: {
    enabled: true,
  },

  // Required for GitHub Pages (project site, not user site)
  app: {
    baseURL: basePath,
    head: {
      htmlAttrs: {
        lang: "pt-BR",
      },
      title:
        "Vimasi Vedações | Vedações Hidráulicas e Industriais em Lajeado/RS",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Vimasi Vedações - Especialista em vedações hidráulicas e industriais em Lajeado/RS. Gaxetas, raspadores, anéis O-ring e kits de vedação de alta performance. Atendimento rápido e qualidade garantida.",
        },
        {
          name: "keywords",
          content:
            "vedações hidráulicas, gaxetas, raspadores, anéis o-ring, retentores, selos mecânicos, vimasi, lajeado, vedações industriais, manutenção hidráulica, vedações RS, cilindros hidráulicos",
        },
        { name: "author", content: "Vimasi Vedações" },
        { name: "theme-color", content: "#050505" },
        { name: "robots", content: "index, follow, max-image-preview:large" },
        { name: "googlebot", content: "index, follow" },

        // Open Graph / Facebook
        { property: "og:type", content: "website" },
        { property: "og:url", content: fullUrl },
        { property: "og:site_name", content: "Vimasi Vedações" },
        {
          property: "og:title",
          content: "Vimasi Vedações | Vedações Hidráulicas e Industriais",
        },
        {
          property: "og:description",
          content:
            "Soluções completas em vedações hidráulicas de alta performance. Qualidade e durabilidade para sua indústria em Lajeado/RS.",
        },
        { property: "og:image", content: `${fullUrl}/og-image.png` },
        { property: "og:image:width", content: "1024" },
        { property: "og:image:height", content: "1024" },
        { property: "og:locale", content: "pt_BR" },

        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Vimasi Vedações | Vedações Hidráulicas e Industriais",
        },
        {
          name: "twitter:description",
          content:
            "Soluções completas em vedações hidráulicas de alta performance em Lajeado/RS.",
        },
        { name: "twitter:image", content: `${fullUrl}/og-image.png` },

        // Geo tags for local SEO
        { name: "geo.region", content: "BR-RS" },
        { name: "geo.placename", content: "Lajeado" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: `${basePath}favicon.png` },
        { rel: "canonical", href: fullUrl },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Anton&family=Arimo:ital,wght@0,400..700;1,400..700&family=Staatliches&family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&display=swap",
        },
      ],
    },
  },

  css: ["~/assets/css/main.css"],
  compatibilityDate: "2024-11-01",

  // Nitro configuration for static generation
  nitro: {
    preset: "github-pages",
  },

  vite: {
    plugins: [tailwindcss()],
  },
  
  eslint: {
    config: {
      stylistic: true // <---
    }
  },
});