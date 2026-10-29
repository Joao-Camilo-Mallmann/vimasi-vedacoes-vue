<template>
  <NuxtLink
    :to="item.path"
    class="group glass relative block cursor-pointer overflow-hidden rounded-2xl transition-all duration-700 ease-out hover:-translate-y-2 hover:bg-white/5"
  >
    <div class="aspect-video overflow-hidden">
      <NuxtImg
        :src="item.image"
        :alt="item.alt"
        loading="lazy"
        width="640"
        height="360"
        sizes="100vw sm:50vw lg:400px"
        class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>
    <div
      class="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/90 via-black/40 to-transparent p-6"
    >
      <h3
        class="font-anton mb-2 text-2xl tracking-wide text-white uppercase drop-shadow-md transition-transform duration-500 group-hover:-translate-y-1"
      >
        {{ item.name }}
      </h3>
      <p class="font-arimo border-accent-gold/30 border-t pt-2 text-sm text-white/80">
        {{ item.short }}
      </p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { CatalogItem } from "~/data/business";

defineProps<{ item: CatalogItem }>();
</script>
