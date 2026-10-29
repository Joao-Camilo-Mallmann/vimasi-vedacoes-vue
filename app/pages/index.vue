<template>
  <div class="home">
    <!-- Hero Section -->
    <section
      id="home"
      class="relative flex min-h-svh items-center justify-center overflow-hidden text-center text-white"
    >
      <div class="absolute inset-0 z-0">
        <NuxtImg
          src="/home/hero-bg.webp"
          alt="Fundo da seção hero mostrando vedações industriais"
          fetchpriority="high"
          class="animate-float h-full w-full scale-105 object-cover blur-sm"
          style="animation-duration: 20s"
        />
        <div
          class="to-primary-dark absolute inset-0 bg-linear-to-b from-black/80 via-black/50"
        ></div>
        <div class="grain absolute inset-0 opacity-30"></div>
      </div>

      <div class="relative z-10 mx-auto max-w-7xl px-4 py-20 lg:py-0">
        <div class="grid grid-cols-1 items-center gap-12">
          <!-- Text/Titles -->
          <div class="mx-auto max-w-4xl text-center">
            <h1
              class="font-anton animate-fade-in-up mb-8 text-5xl leading-tight uppercase italic drop-shadow-2xl sm:text-6xl md:text-7xl"
            >
              Gaxetas e Vedações
              <br class="hidden lg:block" />
              <span class="hydraulic-text" data-text="HIDRÁULICAS">Hidráulicas</span>
              <br />
              em Lajeado e no <span class="text-accent-gold">Vale do Taquari</span>
            </h1>

            <p
              class="font-arimo animate-fade-in-up mx-auto mb-10 max-w-xl text-lg text-white/80 md:text-xl"
              style="animation-delay: 0.1s"
            >
              A vedação hidráulica que você precisa. A Vimasi Vedações (Lajeado, RS) fornece gaxetas, anéis O-ring, raspadores e kits de reparo para cilindros hidráulicos, com retirada em loja e envio para todo o Vale do Taquari.
            </p>

            <a
              href="#orcamento"
              class="group bg-accent-red animate-fade-in-up relative inline-flex items-center gap-4 overflow-hidden rounded-full px-10 py-4 text-lg font-bold tracking-wider text-white uppercase shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-red-600 hover:shadow-red-600/40"
              style="animation-delay: 0.2s"
            >
              <span class="relative z-10 flex items-center gap-3">
                Fale Conosco
                <svg
                  class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
              <div
                class="group-hover:animate-shimmer absolute inset-0 -z-10 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent"
              ></div>
            </a>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <a
        href="#orcamento"
        class="hover:text-accent-red absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50 transition-colors"
        aria-label="Rolar para baixo"
      >
        <svg
          class="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </a>
    </section>



    <!-- Products Section -->
    <section
      id="vedacoes"
      class="bg-primary-dark relative overflow-hidden py-24"
    >
      <!-- Decorative elements -->
      <div
        class="bg-accent-gold/5 absolute top-0 right-0 h-full w-1/3 translate-x-1/2 rounded-full blur-[100px]"
      ></div>
      <div
        class="bg-accent-red/5 absolute bottom-0 left-0 h-full w-1/3 -translate-x-1/2 rounded-full blur-[100px]"
      ></div>

      <div class="relative z-10 container mx-auto px-4">
        <div class="mb-16 text-center">
          <h2
            class="font-anton mb-4 bg-linear-to-r from-white via-white to-white/50 bg-clip-text text-5xl text-transparent uppercase italic md:text-6xl"
          >
            Nossas <span class="text-accent-red">Soluções</span>
          </h2>
          <p class="font-arimo mx-auto max-w-2xl text-lg text-white/60">
            Tecnologia de ponta em vedações para garantir a máxima eficiência do
            seu sistema hidráulico.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <ProductCard
            v-for="item in featured"
            :key="item.id"
            :item="item"
          />
        </div>

        <div class="mt-12 text-center">
          <NuxtLink
            to="/vedacoes/"
            class="group hover:border-accent-gold hover:bg-accent-gold/10 inline-flex items-center gap-3 rounded-full border-2 border-white/30 px-8 py-4 font-bold tracking-wider text-white uppercase transition-all duration-300"
          >
            Ver catálogo completo
            <svg class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="bg-primary-dark relative overflow-hidden py-32 text-white">
      <!-- Background decoration -->
      <div
        class="absolute top-0 right-0 h-full w-1/2 bg-linear-to-l from-white/5 to-transparent opacity-50"
      ></div>

      <div class="relative z-10 container mx-auto px-4">
        <div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div class="space-y-8">
            <h2
              class="font-anton from-accent-gold via-accent-gold to-accent-gold mb-6 bg-linear-to-r bg-clip-text text-5xl leading-tight text-transparent uppercase italic md:text-6xl pt-3"
            >
              Excelência em<br />Cada Detalhe
            </h2>
            <div
              class="font-arimo space-y-6 text-lg leading-relaxed text-white/80"
            >
              <p>
                A Vimasi Vedações é uma loja especializada em vedações hidráulicas e industriais em Lajeado/RS. Trabalhamos com gaxetas, anéis O-ring, raspadores, anéis guia e kits de reparo para cilindros de máquinas agrícolas, prensas, escavadeiras e caminhões.
              </p>
              <p>
                Identificamos a vedação pela peça antiga ou pelas medidas do alojamento e montamos kits sob medida. Atendemos indústrias, oficinas e produtores rurais de todo o Vale do Taquari, com retirada em loja e envio por transportadora.
              </p>
            </div>

            <div class="pt-4">
              <a
                href="#contato"
                class="text-accent-red inline-flex items-center gap-2 font-bold tracking-wider uppercase transition-all hover:gap-4"
              >
                Fale com um especialista
                <svg
                  class="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <!-- Image 1 -->
            <div
              class="group relative overflow-hidden rounded-3xl p-1 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-red/20 sm:col-span-2"
            >
              <div class="absolute inset-0 bg-linear-to-br from-white/10 to-white/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              <div class="relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#111]">
                <div class="relative aspect-video overflow-hidden">
                  <NuxtImg
                    src="/catalog/aneis-guia.webp"
                    alt="Anéis guia em PTFE e poliamida para pistão e haste de cilindro hidráulico"
                    loading="lazy"
                    sizes="100vw sm:50vw lg:600px"
                    class="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <!-- Image 2 -->
            <div
              class="group relative overflow-hidden rounded-3xl p-1 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-gold/20"
            >
              <div class="absolute inset-0 bg-linear-to-br from-white/10 to-white/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              <div class="relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#111]">
                <div class="relative aspect-video overflow-hidden">
                  <NuxtImg
                    src="/catalog/conjunto-capped-seal.webp"
                    alt="Conjunto de vedação capped seal para pistão de cilindro hidráulico"
                    loading="lazy"
                    sizes="100vw sm:50vw lg:400px"
                    class="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <!-- Image 3 -->
            <div
              class="group relative overflow-hidden rounded-3xl p-1 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10"
            >
              <div class="absolute inset-0 bg-linear-to-br from-white/10 to-white/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              <div class="relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#111]">
                <div class="relative aspect-video overflow-hidden">
                  <NuxtImg
                    src="/catalog/conjunto-oeod.webp"
                    alt="Conjunto de vedação OEOD para pistão de dupla ação"
                    loading="lazy"
                    sizes="100vw sm:50vw lg:400px"
                    class="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Região Section -->
    <section id="vale-do-taquari" class="bg-primary-dark relative overflow-hidden py-24 text-white">
      <div class="bg-accent-gold/5 absolute top-0 left-0 h-full w-1/3 -translate-x-1/2 rounded-full blur-[100px]"></div>
      <div class="relative z-10 container mx-auto px-4">
        <div class="mx-auto max-w-4xl text-center">
          <h2 class="font-anton mb-6 bg-linear-to-r from-white via-white to-white/50 bg-clip-text text-5xl text-transparent uppercase italic md:text-6xl">
            Atendemos o <span class="text-accent-gold">Vale do Taquari</span>
          </h2>
          <p class="font-arimo mb-8 text-lg leading-relaxed text-white/80">
            Nossa loja fica em Lajeado, na {{ business.address.streetAddress }} ({{ business.address.neighborhood }}), e atende
            {{ citiesSentence }}. Para outras cidades do Rio Grande do Sul enviamos por transportadora.
          </p>
          <NuxtLink
            to="/vedacoes-vale-do-taquari/"
            class="text-accent-red inline-flex items-center gap-2 font-bold tracking-wider uppercase transition-all hover:gap-4"
          >
            Vedações no Vale do Taquari
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Orcamento Section -->
    <section id="orcamento" class="bg-primary-dark relative overflow-hidden py-24">
      <div class="relative z-10 mx-auto container px-4">
        <QuoteForm />
      </div>
    </section>

    <!-- Contact Section -->
    <section
      id="contato"
      class="bg-primary-dark relative overflow-hidden py-24 text-white"
    >
      <!-- Background Image with Filter -->
      <div class="absolute inset-0 z-0">
        <NuxtImg
          src="/home/contact-bg.webp"
          alt="Fundo da seção de contato com textura industrial"
          loading="lazy"
          sizes="100vw"
          class="h-full w-full object-cover opacity-40"
        />
        <!-- Gradient overlay -->
        <div
          class="from-primary-dark via-primary-dark/90 to-primary-dark absolute inset-0 bg-linear-to-b"
        ></div>
      </div>

      <div class="relative z-10 container mx-auto px-4">
        <div class="mb-16 text-center">
          <h2
            class="font-anton mb-4 bg-linear-to-r from-white via-white to-white/50 bg-clip-text text-5xl text-transparent uppercase italic md:text-6xl"
          >
            Entre em <span class="text-accent-red">Contato</span>
          </h2>
          <p class="font-arimo mx-auto max-w-2xl text-lg text-white/60">
            Nossa equipe técnica está pronta para atender você e encontrar a
            melhor solução em vedações para Lajeado, Vale do Taquari e todo o RS.
          </p>
        </div>

        <div
          class="mx-auto mb-16 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3"
        >
          <!-- Phone/WhatsApp -->
          <a
            :href="business.whatsappUrl"
            target="_blank"
            class="group glass relative block overflow-hidden rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-[#25D366]/50 hover:bg-white/5"
          >
            <div
              class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#25D366]/20"
            >
              <svg
                class="h-8 w-8 text-[#25D366] transition-transform duration-300 group-hover:rotate-12"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                />
              </svg>
            </div>
            <h3
              class="font-anton mb-2 text-2xl tracking-wide text-white uppercase"
            >
              WhatsApp
            </h3>
            <p
              class="font-arimo text-lg text-white/60 transition-colors group-hover:text-[#25D366]"
            >{{ business.phoneDisplay }}</p>
          </a>

          <!-- Email -->
          <div
            class="group glass relative overflow-hidden rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-[#3B82F6]/50 hover:bg-white/5"
          >
            <div
              class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#3B82F6]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#3B82F6]/20"
            >
              <svg
                class="h-8 w-8 text-[#3B82F6] transition-transform duration-300 group-hover:rotate-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3
              class="font-anton mb-2 text-2xl tracking-wide text-white uppercase"
            >
              E-mail
            </h3>
            <a
              :href="`mailto:${business.email}`"
              class="font-arimo text-lg break-all text-white/60 transition-colors group-hover:text-[#3B82F6]"
            >{{ business.email }}</a>
          </div>

          <!-- Address -->
          <a
            :href="business.mapsUrl"
            target="_blank"
            class="group glass hover:border-accent-red/50 relative block overflow-hidden rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:bg-white/5"
          >
            <div
              class="bg-accent-red/10 group-hover:bg-accent-red/20 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
            >
              <svg
                class="text-accent-red h-8 w-8 transition-transform duration-300 group-hover:rotate-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3
              class="font-anton mb-2 text-2xl tracking-wide text-white uppercase"
            >
              Endereço
            </h3>
            <p class="font-arimo mb-2 text-sm text-white/60">
              {{ business.address.streetAddress }} - {{ business.address.neighborhood }}<br />
              {{ business.address.addressLocality }} - {{ business.address.addressRegion }}, CEP {{ business.address.postalCode }}
            </p>
            <span
              class="text-accent-red text-xs font-bold tracking-wider uppercase group-hover:underline"
              >Ver no mapa</span
            >
          </a>
        </div>

        <!-- CTA Button -->
        <div class="text-center">
          <a
            :href="business.whatsappQuoteUrl"
            target="_blank"
            class="group relative inline-flex items-center gap-4 overflow-hidden rounded-full bg-[#25D366] px-10 py-4 text-lg font-bold tracking-wider text-white uppercase shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#20bd5a] hover:shadow-[#25D366]/40"
          >
            <span class="relative z-10 flex items-center gap-3">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                />
              </svg>
              Fale conosco no WhatsApp
            </span>
            <div
              class="group-hover:animate-shimmer absolute inset-0 -z-10 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent"
            ></div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { business, catalog } from "~/data/business";

const featured = catalog.filter((item) => item.hasPage);
const citiesSentence = `${business.cities.slice(0, 8).join(", ")} e demais cidades do Vale do Taquari`;

useSeoMeta({
  title: "Gaxetas e Vedações Hidráulicas em Lajeado e Vale do Taquari",
  description:
    "Vimasi Vedações em Lajeado/RS: gaxetas, anéis O-ring, raspadores e kits de reparo para cilindros hidráulicos. Pronta entrega e atendimento a todo o Vale do Taquari. Orçamento pelo WhatsApp.",
  ogTitle: "Vimasi Vedações | Gaxetas e Vedações Hidráulicas em Lajeado e Vale do Taquari",
  ogDescription:
    "Gaxetas, anéis O-ring, raspadores e kits de reparo para cilindros hidráulicos. Loja em Lajeado/RS, atendimento a todo o Vale do Taquari.",
  ogImage: `${business.url}/og/home.jpg`,
  ogType: "website",
  twitterCard: "summary_large_image",
});

useSchemaOrg([
  defineWebPage({
    name: "Gaxetas e Vedações Hidráulicas em Lajeado e Vale do Taquari",
  }),
]);
</script>

<style scoped>
.hydraulic-text {
  position: relative;
  display: inline-block;
  background: linear-gradient(
    90deg,
    #e53935 0%,
    #ff8a80 25%,
    #e53935 50%,
    #d32f2f 75%,
    #e53935 100%
  );
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: hydraulic-flow 3s linear infinite;
  filter: drop-shadow(0 0 15px rgba(229, 57, 53, 0.4));
  transition: all 0.3s ease;
}

.hydraulic-text:hover {
  animation-duration: 1s;
  transform: scale(1.05) rotate(-2deg);
  filter: drop-shadow(0 0 25px rgba(229, 57, 53, 0.8));
  cursor: default;
}

@keyframes hydraulic-flow {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: 200% center;
  }
}
</style>
