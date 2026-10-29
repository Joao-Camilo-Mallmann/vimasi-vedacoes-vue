<template>
  <section class="relative flex min-h-[60vh] items-center justify-center overflow-hidden text-center text-white">
    <div class="absolute inset-0 z-0">
      <NuxtImg
        :src="image"
        :alt="imageAlt"
        fetchpriority="high"
        sizes="100vw"
        width="1600"
        height="900"
        class="h-full w-full object-cover"
      />
      <div class="to-primary-dark absolute inset-0 bg-linear-to-b from-black/80 via-black/50"></div>
      <div class="grain absolute inset-0 opacity-30"></div>
    </div>

    <div class="relative z-10 mx-auto max-w-5xl px-4 py-20">
      <AppBreadcrumb :items="breadcrumb" />

      <h1 class="font-anton animate-fade-in-up mb-6 text-4xl leading-tight uppercase italic drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl">
        <slot name="title" />
      </h1>

      <p class="font-arimo animate-fade-in-up mx-auto max-w-3xl text-lg text-white/80 md:text-xl" style="animation-delay: 0.1s">
        <slot />
      </p>

      <p v-if="updatedAt" class="font-arimo mt-6 text-sm text-white/50">
        Última atualização: <time :datetime="updatedAt">{{ formattedDate }}</time>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  /** Caminho relativo a assets/images */
  image: string;
  imageAlt: string;
  breadcrumb: { label: string; to?: string }[];
  /** ISO yyyy-mm-dd; quando presente, mostra "Última atualização" */
  updatedAt?: string;
}>();

const formattedDate = computed(() =>
  props.updatedAt
    ? new Intl.DateTimeFormat("pt-BR", { dateStyle: "long", timeZone: "UTC" }).format(new Date(props.updatedAt))
    : "",
);
</script>
