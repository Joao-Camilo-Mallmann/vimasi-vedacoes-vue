<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError,
})

useHead({
  title: 'Página não encontrada',
  meta: [
    {
      name: 'description',
      content: 'Vimasi Vedações - Especialista em vedações hidráulicas e industriais em Lajeado/RS. Gaxetas, raspadores, anéis O-ring e kits de vedação de alta performance.',
    },
    { name: 'robots', content: 'noindex' },
  ],
})

const handleError = () => clearError({ redirect: '/' })

</script>

<template>
  <div class="error-page">
    <div class="error-container">
      <h1 class="error-code">{{ error?.statusCode || 500 }}</h1>
      <p class="error-message">
        {{ error?.statusCode === 404 ? 'Página não encontrada' : 'Ocorreu um erro' }}
      </p>
      <p class="error-description">
        A página que você procura não existe ou foi movida. Veja nossos produtos ou fale conosco pelo WhatsApp.
      </p>
      <button class="error-button" @click="handleError">
        Voltar para a Home
      </button>
    </div>
  </div>
</template>

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #050505;
  color: #ffffff;
  font-family: 'Arimo', sans-serif;
}

.error-container {
  text-align: center;
  padding: 2rem;
}

.error-code {
  font-family: 'Anton', sans-serif;
  font-size: 8rem;
  line-height: 1;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #f59e0b, #ef4444);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.error-message {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #e5e5e5;
}

.error-description {
  font-size: 1rem;
  color: #a3a3a3;
  margin-bottom: 2rem;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.error-button {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: linear-gradient(135deg, #f59e0b, #ef4444);
  color: #050505;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: opacity 0.2s ease, transform 0.2s ease;
  font-family: 'Arimo', sans-serif;
}

.error-button:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}
</style>
