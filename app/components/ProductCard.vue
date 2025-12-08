<template>
  <div class="rounded-lg border p-4">
    <img :src="image" :alt="name" class="mb-4 h-48 w-full object-cover" />
    <h3 class="text-lg font-bold">{{ name }}</h3>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  name: String,
  image: String,
});
</script>
