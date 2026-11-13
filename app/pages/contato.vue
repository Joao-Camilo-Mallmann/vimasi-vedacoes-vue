<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <NuxtImg
          src="/home/contact-bg.webp"
          alt="Entre em contato com a Vimasi Vedações em Lajeado"
          fetchpriority="high"
          sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw"
          width="1600"
          height="900"
          class="h-full w-full object-cover"
        />
        <div class="to-primary-dark absolute inset-0 bg-linear-to-b from-black/70 via-black/50"></div>
        <div class="grain absolute inset-0 opacity-30"></div>
      </div>

      <div class="relative z-10 px-4 text-center">
        <AppBreadcrumb :items="[{ label: 'Contato', to: '/contato/' }]" />
        <h1 class="font-anton animate-fade-in-up mb-4 text-5xl text-white uppercase italic sm:text-7xl">
          Fale <span class="text-accent-red">Conosco</span>
        </h1>
        <p class="font-arimo animate-fade-in-up text-lg text-white/80" style="animation-delay: 0.1s">
          Orçamento de gaxetas, O-rings, raspadores e kits de reparo pelo WhatsApp.
        </p>
      </div>
    </section>

    <QuoteContact />

    <section class="bg-primary-dark py-16 text-white">
      <div class="container mx-auto px-4 md:px-6">
        <div class="max-w-3xl">
          <h2 class="font-anton text-3xl uppercase italic md:text-4xl">Como chegar e horário</h2>
          <p class="font-arimo mt-4 text-lg leading-relaxed text-white/75">
            A loja da Vimasi Vedações fica na {{ business.addressLine }}, no bairro Campestre, em Lajeado.
            Atendimento {{ business.hours.display.toLowerCase() }}. Para identificar sua vedação, traga a peça
            antiga ou as medidas do alojamento; para outras cidades do Vale do Taquari e de todo o Brasil, enviamos por transportadora.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { business } from "~/data/business";

useSeoMeta({
  title: "Contato e Orçamento de Vedações em Lajeado",
  description:
    "Fale com a Vimasi Vedações em Lajeado/RS: WhatsApp (51) 99619-4676, e-mail e endereço na Av. Cristiano Dexheimer, 83. Orçamento de gaxetas, O-rings e kits para todo o Vale do Taquari.",
  ogTitle: "Contato | Vimasi Vedações - Lajeado, Vale do Taquari e RS",
  ogDescription: "Orçamento de vedações hidráulicas pelo WhatsApp. Loja em Lajeado/RS.",
  ogImage: `${business.url}/og/contato.jpg`,
  ogType: "website",
  twitterCard: "summary_large_image",
});

useSchemaOrg([defineWebPage({ "@type": "ContactPage" })]);
</script>
