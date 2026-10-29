<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <NuxtImg
          src="/home/contact-bg.webp"
          alt="Entre em contato com a Vimasi Vedações em Lajeado"
          fetchpriority="high"
          sizes="100vw"
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

    <!-- Quote form -->
    <section class="bg-primary-dark py-24">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-5xl">
          <QuoteForm />
        </div>
      </div>
    </section>

    <!-- Contact info -->
    <section id="contato" class="bg-primary-dark relative overflow-hidden py-24 text-white">
      <div class="absolute inset-0 z-0">
        <NuxtImg
          src="/home/contact-bg.webp"
          alt=""
          loading="lazy"
          sizes="100vw"
          width="1600"
          height="900"
          class="h-full w-full object-cover opacity-40"
        />
        <div class="from-primary-dark via-primary-dark/90 to-primary-dark absolute inset-0 bg-linear-to-b"></div>
      </div>

      <div class="relative z-10 container mx-auto px-4">
        <div class="mb-16 text-center">
          <h2 class="font-anton mb-4 bg-linear-to-r from-white via-white to-white/50 bg-clip-text text-5xl text-transparent uppercase italic md:text-6xl">
            Entre em <span class="text-accent-red">Contato</span>
          </h2>
          <p class="font-arimo mx-auto max-w-2xl text-lg text-white/60">
            Nossa equipe técnica está pronta para atender você e encontrar a melhor
            solução em vedações para Lajeado, Vale do Taquari e todo o RS.
          </p>
        </div>

        <div class="mx-auto mb-16 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          <!-- WhatsApp -->
          <a
            :href="business.whatsappUrl"
            target="_blank"
            rel="noopener"
            class="group glass relative block overflow-hidden rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-[#25D366]/50 hover:bg-white/5"
          >
            <div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#25D366]/20">
              <IconWhatsApp class="h-8 w-8 text-[#25D366] transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <h3 class="font-anton mb-2 text-2xl tracking-wide text-white uppercase">WhatsApp</h3>
            <p class="font-arimo text-lg text-white/60 transition-colors group-hover:text-[#25D366]">
              {{ business.phoneDisplay }}
            </p>
          </a>

          <!-- Email -->
          <div class="group glass relative overflow-hidden rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-[#3B82F6]/50 hover:bg-white/5">
            <div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#3B82F6]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#3B82F6]/20">
              <Icon name="lucide:mail" class="text-3xl text-[#3B82F6] transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <h3 class="font-anton mb-2 text-2xl tracking-wide text-white uppercase">E-mail</h3>
            <a
              :href="`mailto:${business.email}`"
              class="font-arimo text-lg break-all text-white/60 transition-colors group-hover:text-[#3B82F6]"
            >
              {{ business.email }}
            </a>
          </div>

          <!-- Address -->
          <a
            :href="business.mapsUrl"
            target="_blank"
            rel="noopener"
            class="group glass hover:border-accent-red/50 relative block overflow-hidden rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:bg-white/5"
          >
            <div class="bg-accent-red/10 group-hover:bg-accent-red/20 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110">
              <Icon name="lucide:map-pin" class="text-accent-red text-3xl transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <h3 class="font-anton mb-2 text-2xl tracking-wide text-white uppercase">Endereço</h3>
            <p class="font-arimo mb-2 text-sm text-white/60">
              {{ business.address.streetAddress }} - {{ business.address.neighborhood }}<br />
              {{ business.address.addressLocality }} - {{ business.address.addressRegion }}, CEP {{ business.address.postalCode }}
            </p>
            <span class="text-accent-red text-xs font-bold tracking-wider uppercase group-hover:underline">Ver no mapa</span>
          </a>
        </div>

        <!-- Como chegar / horário -->
        <div class="glass mx-auto mb-16 max-w-3xl rounded-2xl p-8 text-center">
          <h3 class="font-anton mb-4 text-2xl tracking-wide text-white uppercase">Como chegar e horário</h3>
          <p class="font-arimo text-white/70">
            A loja da Vimasi Vedações fica na {{ business.addressLine }}, no bairro Campestre, em Lajeado.
            Atendimento {{ business.hours.display.toLowerCase() }}. Para identificar sua vedação, traga a peça
            antiga ou as medidas do alojamento; para outras cidades do Vale do Taquari e do RS, enviamos por transportadora.
          </p>
        </div>

        <div class="text-center">
          <a
            :href="business.whatsappQuoteUrl"
            target="_blank"
            rel="noopener"
            class="group relative inline-flex items-center gap-4 overflow-hidden rounded-full bg-[#25D366] px-10 py-4 text-lg font-bold tracking-wider text-white uppercase shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#20bd5a] hover:shadow-[#25D366]/40"
          >
            <span class="relative z-10 flex items-center gap-3">
              <IconWhatsApp class="h-6 w-6" />
              Fale conosco no WhatsApp
            </span>
            <div class="group-hover:animate-shimmer absolute inset-0 -z-10 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent"></div>
          </a>
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
