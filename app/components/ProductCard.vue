<template>
  <NuxtLink :to="item.path" class="group block h-full rounded-2xl">
    <article
      class="bg-primary-card group-hover:border-accent-gold/60 flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 transition-colors duration-300"
    >
      <NuxtImg
        :src="item.image"
        :alt="item.alt"
        loading="lazy"
        width="640"
        height="480"
        sizes="100vw sm:50vw lg:400px"
        class="aspect-4/3 w-full object-cover"
      />
      <h3 class="font-anton group-hover:text-accent-gold px-5 pt-5 text-2xl tracking-wide text-white uppercase transition-colors duration-300">
        {{ item.name }}
      </h3>
      <p class="font-arimo px-5 pt-2 pb-5 text-sm leading-relaxed text-white/70">
        {{ item.short }}
      </p>
    </article>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { CatalogItem } from "~/data/business";

defineProps<{ item: CatalogItem }>();
</script>
