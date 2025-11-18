<script setup lang="ts">
const getImageUrl = (i: number) => {
  return new URL(`../assets/images/product-${i}.png`, import.meta.url).href
}
</script>

<template>
  <div class="vedacoes bg-stone-50 py-20">
    <div class="container mx-auto px-4">
      <h1
        class="font-anton text-accent-gold animate-fade-in-up mb-12 text-center text-5xl uppercase italic drop-shadow-sm md:text-7xl"
      >
        Nossas Vedações
      </h1>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Reuse product images for the gallery -->
        <div
          v-for="i in 8"
          :key="i"
          class="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl"
        >
          <img
            :src="getImageUrl(i)"
            :alt="`Produto ${i}`"
            class="h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <span class="font-anton text-2xl text-white uppercase">Ver Detalhes</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
