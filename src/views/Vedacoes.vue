<template>
  <div>
    <h1 class="text-4xl font-bold text-center">Conheça nossas Vedações</h1>
    <p class="text-xl text-center mt-4">Mais elementos para vedação</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      <ProductCard name="Gaxetas" image="@/assets/images/ba9e3422ad795e636ef3653307f62434.png" />
      <ProductCard name="Raspadores" image="@/assets/images/9d3632bed41b5938ff7bf6f017df0338.png" />
      <ProductCard name="Anéis" image="@/assets/images/d13b4db85f1e028beffaf5ebcc1d8f0f.png" />
      <ProductCard name="Conjuntos ZW/ZO" image="@/assets/images/35aeca82e0a439b4089f9111260968b2.png" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductCard from '../components/ProductCard.vue';
</script>
