<template>
  <div id="app" class="bg-primary-dark grain min-h-screen">
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
    <FloatingWhatsApp />
  </div>
</template>

<script setup lang="ts">
// Components are auto-imported
</script>
