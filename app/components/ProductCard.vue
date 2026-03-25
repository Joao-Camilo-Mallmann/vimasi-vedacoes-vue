<template>
  <div class="rounded-lg border p-4">
    <NuxtImg :src="image" :alt="name" sizes="100vw sm:50vw lg:400px" loading="lazy" class="mb-4 h-48 w-full object-cover" />
    <h3 class="text-lg font-bold">{{ name }}</h3>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: String,
  image: String,
});
</script>
