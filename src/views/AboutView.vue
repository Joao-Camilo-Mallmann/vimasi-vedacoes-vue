<template>
  <div class="about-view pt-20">
    <!-- Hero Section -->
    <section class="relative overflow-hidden py-20 md:py-32">
      <div class="absolute inset-0 z-0">
        <div class="bg-primary-dark/90 absolute inset-0 z-10"></div>
        <img
          src="@/assets/images/hero-bg.jpg"
          alt="Background"
          class="h-full w-full object-cover opacity-30"
        />
      </div>

      <div class="relative z-20 container mx-auto px-4 text-center">
        <h1
          class="font-anton animate-fade-in-up mb-6 text-5xl text-white uppercase italic md:text-7xl"
        >
          Sobre a <span class="text-accent-gold">Vimasi</span>
        </h1>
        <p
          class="font-arimo animate-fade-in-up mx-auto max-w-3xl text-lg text-white/80 md:text-xl"
          style="animation-delay: 0.1s"
        >
          Há mais de uma década fornecendo soluções de alta performance em vedações hidráulicas e
          pneumáticas para todo o Brasil.
        </p>
      </div>
    </section>

    <!-- History Section -->
    <section class="bg-primary-card relative py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div class="group relative">
            <div
              class="bg-accent-gold/20 absolute -inset-4 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
            ></div>
            <img
              src="@/assets/images/about-image.jpg"
              alt="Nossa História"
              class="relative aspect-video w-full rounded-xl border border-white/10 object-cover shadow-2xl"
            />
          </div>

          <div class="space-y-6">
            <h2 class="font-anton text-4xl text-white uppercase italic">
              Nossa <span class="text-accent-gold">História</span>
            </h2>
            <div class="font-arimo space-y-4 leading-relaxed text-white/80">
              <p>
                Fundada com o compromisso de oferecer excelência, a Vimasi Vedações nasceu da
                necessidade do mercado por produtos confiáveis e duráveis.
              </p>
              <p>
                Ao longo dos anos, nos especializamos na distribuição de vedações técnicas,
                construindo parcerias sólidas com os melhores fabricantes nacionais e
                internacionais.
              </p>
              <p>
                Nossa trajetória é marcada pela busca constante por inovação e pela satisfação total
                de nossos clientes, oferecendo não apenas produtos, mas soluções completas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="bg-primary-dark relative overflow-hidden py-20">
      <!-- Decorative elements -->
      <div
        class="bg-accent-gold/5 absolute top-0 right-0 h-full w-1/3 translate-x-1/2 rounded-full blur-[100px]"
      ></div>

      <div class="relative z-10 container mx-auto px-4">
        <div class="mb-16 text-center">
          <h2 class="font-anton mb-4 text-4xl text-white uppercase italic md:text-5xl">
            Nossos <span class="text-accent-gold">Valores</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <!-- Value 1 -->
          <div
            class="glass group rounded-2xl p-8 text-center transition-transform duration-300 hover:-translate-y-2"
          >
            <div
              class="bg-accent-gold/10 group-hover:bg-accent-gold/20 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-colors"
            >
              <svg
                class="text-accent-gold h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 class="font-anton mb-4 text-2xl text-white uppercase">Qualidade</h3>
            <p class="font-arimo text-white/70">
              Compromisso inegociável com a excelência em cada produto que entregamos.
            </p>
          </div>

          <!-- Value 2 -->
          <div
            class="glass group rounded-2xl p-8 text-center transition-transform duration-300 hover:-translate-y-2"
          >
            <div
              class="bg-accent-gold/10 group-hover:bg-accent-gold/20 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-colors"
            >
              <svg
                class="text-accent-gold h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 class="font-anton mb-4 text-2xl text-white uppercase">Agilidade</h3>
            <p class="font-arimo text-white/70">
              Rapidez no atendimento e na entrega para manter sua produção sempre ativa.
            </p>
          </div>

          <!-- Value 3 -->
          <div
            class="glass group rounded-2xl p-8 text-center transition-transform duration-300 hover:-translate-y-2"
          >
            <div
              class="bg-accent-gold/10 group-hover:bg-accent-gold/20 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-colors"
            >
              <svg
                class="text-accent-gold h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 class="font-anton mb-4 text-2xl text-white uppercase">Parceria</h3>
            <p class="font-arimo text-white/70">
              Relacionamento próximo e consultivo para entender e atender cada necessidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'AboutView',
})
</script>
