<template>
  <div id="app" class="bg-primary-dark grain min-h-screen">
    <a href="#conteudo" class="skip-link">Pular para o conteúdo</a>
    <AppHeader />
    <main id="conteudo" tabindex="-1" class="outline-none">
      <slot />
    </main>
    <AppFooter />
    <FloatingWhatsApp />
  </div>
</template>

<script setup lang="ts">
// Components are auto-imported
</script>
