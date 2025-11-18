<template>
  <div id="app" class="bg-primary-dark grain min-h-screen">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
</script>
