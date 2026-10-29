<template>
  <section class="bg-primary-dark py-24">
    <div class="container mx-auto px-4">
      <h2 class="font-anton mb-4 text-center text-4xl text-white uppercase italic md:text-5xl">
        Perguntas <span :class="accent === 'gold' ? 'text-accent-gold' : 'text-accent-red'">Frequentes</span>
      </h2>
      <p v-if="subtitle" class="font-arimo mx-auto mb-16 max-w-2xl text-center text-lg text-white/60">
        {{ subtitle }}
      </p>
      <div class="mx-auto max-w-3xl space-y-6" :class="{ 'pt-10': !subtitle }">
        <div v-for="faq in faqs" :key="faq.question" class="glass rounded-2xl p-6">
          <h3 class="font-anton mb-3 text-lg text-white uppercase italic">
            {{ faq.question }}
          </h3>
          <p class="font-arimo text-white/70">
            {{ faq.answer }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * FAQ visível + schema.org Question/Answer a partir do MESMO array,
 * para o conteúdo e o structured data nunca divergirem.
 * A página deve declarar defineWebPage({ '@type': ['WebPage', 'FAQPage'] }).
 */
export interface FaqItem {
  question: string;
  answer: string;
}

const props = withDefaults(
  defineProps<{
    faqs: FaqItem[];
    subtitle?: string;
    accent?: "gold" | "red";
  }>(),
  { subtitle: "", accent: "gold" },
);

useSchemaOrg(
  props.faqs.map((faq) =>
    defineQuestion({ name: faq.question, acceptedAnswer: faq.answer }),
  ),
);
</script>
