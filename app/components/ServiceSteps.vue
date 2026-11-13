<template>
  <ol role="list" class="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-3">
    <li v-for="(step, index) in serviceSteps" :key="step.title" class="border-accent-red border-t-2 pt-5">
      <span class="font-anton text-accent-red text-3xl italic" aria-hidden="true">{{ index + 1 }}</span>
      <h3 class="font-anton mt-2 text-2xl text-white uppercase italic">{{ step.title }}</h3>
      <p class="font-arimo mt-3 leading-relaxed text-white/75">{{ step.description }}</p>
    </li>
  </ol>
</template>

<script setup lang="ts">
import { serviceSteps } from "~/data/business";
</script>
