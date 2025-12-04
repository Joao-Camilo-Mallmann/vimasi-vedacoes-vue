<script setup lang="ts">
defineOptions({
  name: 'ProductsView',
})
const getImageUrl = (i: number) => {
  return new URL(`../assets/images/product-${i}.png`, import.meta.url).href
}
</script>

<template>
  <div class="products-view bg-primary-dark relative min-h-screen overflow-hidden pt-20">
    <!-- Decorative elements -->
    <div
      class="from-accent-gold/5 bg-linear-gradient-to-b pointer-events-none absolute top-0 left-0 h-1/2 w-full to-transparent"
    ></div>
    <div
      class="bg-accent-red/5 pointer-events-none absolute right-0 bottom-0 h-1/3 w-1/3 rounded-full blur-[100px]"
    ></div>

    <div class="relative z-10 container mx-auto px-4 py-12">
      <div class="mb-16 text-center">
        <h1
          class="font-anton animate-fade-in-up bg-linear-gradient-to-r mb-6 from-white via-white to-white/50 bg-clip-text text-5xl text-transparent uppercase italic md:text-7xl"
        >
          Nossas <span class="text-accent-gold">Vedações</span>
        </h1>
        <p
          class="font-arimo animate-fade-in-up mx-auto max-w-2xl text-lg text-white/60"
          style="animation-delay: 0.1s"
        >
          Conheça nossa linha completa de produtos de alta performance para todas as aplicações
          industriais.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Product Cards -->
        <div
          v-for="i in 8"
          :key="i"
          class="group glass animate-fade-in-up relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/5"
          :style="`animation-delay: ${0.1 * i}s`"
        >
          <div class="relative aspect-[4/3] overflow-hidden">
            <div
              class="from-primary-dark/80 absolute inset-0 z-10 bg-gradient-to-t to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40"
            ></div>
            <img
              :src="getImageUrl(i)"
              :alt="`Produto ${i}`"
              class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          <div class="relative z-20 p-6">
            <div class="mb-2 flex items-end justify-between">
              <h3
                class="font-anton group-hover:text-accent-gold text-2xl text-white uppercase italic transition-colors"
              >
                Produto {{ i }}
              </h3>
              <span
                class="text-accent-gold translate-x-2 transform opacity-0 transition-opacity duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              >
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </div>
            <p
              class="font-arimo line-clamp-2 text-sm text-white/60 transition-colors group-hover:text-white/80"
            >
              Solução ideal para aplicações que exigem alta resistência e durabilidade. Consulte as
              especificações técnicas.
            </p>
          </div>

          <!-- Hover Glow Effect -->
          <div
            class="group-hover:border-accent-gold/30 pointer-events-none absolute inset-0 rounded-2xl border-2 border-white/0 transition-colors duration-500"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
