<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section
      class="relative flex h-[50vh] items-center justify-center overflow-hidden"
    >
      <div class="absolute inset-0 z-0">
        <img
          src="~/assets/images/home/contact-bg.webp"
          alt="Entre em contato com a Vimasi Vedações"
          class="h-full w-full object-cover"
        />
        <div
          class="to-primary-dark absolute inset-0 bg-linear-to-b from-black/70 via-black/50"
        ></div>
        <div class="grain absolute inset-0 opacity-30"></div>
      </div>

      <div class="relative z-10 text-center">
        <h1
          class="font-anton animate-fade-in-up mb-4 text-5xl text-white uppercase italic sm:text-7xl"
        >
          Fale <span class="text-accent-red">Conosco</span>
        </h1>
        <p
          class="font-arimo animate-fade-in-up text-lg text-white/80"
          style="animation-delay: 0.1s"
        >
          Estamos prontos para atender sua solicitação.
        </p>
      </div>
    </section>

    <!-- Content -->
    <section class="bg-primary-dark py-24">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-5xl">
          <QuoteForm />
        </div>
      </div>
    </section>

     <section
      id="contato"
      class="bg-primary-dark relative overflow-hidden py-24 text-white"
    >
      <!-- Background Image with Filter -->
      <div class="absolute inset-0 z-0">
        <img
          src="~/assets/images/home/contact-bg.webp"
          alt="Fundo da seção de contato com textura industrial"
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
            href="https://wa.me/555196194676"
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
            >
              (51) 99619-4676
            </p>
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
              href="mailto:vimasicomerciopecas@gmail.com"
              class="font-arimo text-lg break-all text-white/60 transition-colors group-hover:text-[#3B82F6]"
            >
              vimasicomerciopecas@gmail.com
            </a>
          </div>

          <!-- Address -->
          <a
            href="https://maps.app.goo.gl/VQzXHJzPMdCavSP56"
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
              R. Eugênia Mello de Oliveira Kirchheim, 151<br />
              Bom Pastor, Lajeado - RS
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
            href="https://wa.me/555196194676?text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento"
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
import { onMounted } from "vue";

onMounted(() => {
  window.scrollTo(0, 0);
});

useHead({
  title: "Contato | Vimasi Vedações - Lajeado, Vale do Taquari e RS",
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Vimasi Vedações",
        image: "https://vimasivedacoes.com.br/assets/images/logo.png", // Update with actual URL if possible
        telephone: "+555196194676",
        email: "vimasicomerciopecas@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "R. Eugênia Mello de Oliveira Kirchheim, 151",
          addressLocality: "Lajeado",
          addressRegion: "RS",
          postalCode: "95902-150",
          addressCountry: "BR",
        },
        url: "https://vimasivedacoes.com.br",
      }),
    },
  ],
});
</script>
