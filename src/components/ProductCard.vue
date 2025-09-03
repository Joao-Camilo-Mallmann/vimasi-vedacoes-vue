<template>
  <div class="border rounded-lg p-4">
    <img :src="image" :alt="name" class="w-full h-48 object-cover mb-4">
    <h3 class="text-lg font-bold">{{ name }}</h3>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  name: String,
  image: String,
});
</script>
