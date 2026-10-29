<template>
  <section class="bg-primary-dark relative overflow-hidden py-24">
    <div class="absolute inset-0 z-0">
      <div class="from-primary-dark via-primary-dark/90 to-primary-dark absolute inset-0 bg-linear-to-b"></div>
    </div>

    <div class="relative z-10 container mx-auto px-4 text-center">
      <h2 class="font-anton mb-6 text-4xl text-white uppercase italic md:text-5xl">
        <slot name="title">Precisa de <span class="text-accent-red">Vedações</span>?</slot>
      </h2>
      <p class="font-arimo mx-auto mb-10 max-w-2xl text-lg text-white/70">
        <slot>
          Entre em contato com nossa equipe técnica para um orçamento personalizado.
          Atendemos Lajeado, Vale do Taquari e todo o Rio Grande do Sul.
        </slot>
      </p>

      <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          :href="whatsappHref"
          target="_blank"
          rel="noopener"
          class="group relative inline-flex items-center gap-4 overflow-hidden rounded-full bg-[#25D366] px-10 py-4 text-lg font-bold tracking-wider text-white uppercase shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#20bd5a] hover:shadow-[#25D366]/40"
        >
          <span class="relative z-10 flex items-center gap-3">
            <IconWhatsApp class="h-6 w-6" />
            {{ whatsappLabel }}
          </span>
        </a>

        <NuxtLink
          v-if="secondary"
          :to="secondary.to"
          class="group hover:border-accent-gold hover:bg-accent-gold/10 inline-flex items-center gap-3 rounded-full border-2 border-white/30 px-8 py-4 font-bold tracking-wider text-white uppercase transition-all duration-300"
        >
          {{ secondary.label }}
          <svg class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { business } from "~/data/business";

const props = withDefaults(
  defineProps<{
    /** Texto pré-preenchido da mensagem do WhatsApp */
    whatsappMessage?: string;
    whatsappLabel?: string;
    secondary?: { label: string; to: string };
  }>(),
  {
    whatsappMessage: "Olá, gostaria de fazer um orçamento",
    whatsappLabel: "Solicitar Orçamento",
    secondary: undefined,
  },
);

const whatsappHref = computed(
  () => `${business.whatsappUrl}?text=${encodeURIComponent(props.whatsappMessage)}`,
);
</script>
