<template>
  <section class="bg-primary-dark py-12">
    <div class="container mx-auto px-4">
      <div class="glass mx-auto max-w-4xl rounded-2xl p-8">
        <h2 class="font-anton mb-6 text-sm tracking-widest text-white/40 uppercase">
          Ver também
        </h2>
        <ul class="font-arimo grid grid-cols-1 gap-3 sm:grid-cols-2">
          <li v-for="link in links" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="hover:text-accent-gold group flex items-center gap-3 text-white/80 transition-colors"
            >
              <span class="group-hover:bg-accent-gold h-px w-4 bg-white/20 transition-all group-hover:w-8"></span>
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ links: { label: string; to: string }[] }>();
</script>
