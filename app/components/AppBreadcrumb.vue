<template>
  <nav class="mb-8 flex justify-center" aria-label="Breadcrumb">
    <ol class="font-arimo flex flex-wrap items-center justify-center gap-2 text-sm text-white/60">
      <li>
        <NuxtLink to="/" class="hover:text-accent-gold transition-colors">Home</NuxtLink>
      </li>
      <li
        v-for="(item, index) in items"
        :key="item.label"
        class="flex items-center gap-2"
      >
        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
        <NuxtLink
          v-if="item.to && index < items.length - 1"
          :to="item.to"
          class="hover:text-accent-gold transition-colors"
        >
          {{ item.label }}
        </NuxtLink>
        <span v-else class="text-accent-gold" aria-current="page">{{ item.label }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
/**
 * Breadcrumb visual + BreadcrumbList (schema.org).
 * `items` não inclui a Home; a última entrada é a página atual.
 */
const props = defineProps<{
  items: { label: string; to?: string }[];
}>();

useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      { name: "Home", item: "/" },
      ...props.items.map((item) => ({ name: item.label, item: item.to })),
    ],
  }),
]);
</script>
