<template>
  <header class="glass-strong sticky top-0 z-50 transition-all duration-300">
    <div class="container mx-auto px-4 md:px-6">
      <div class="flex items-center justify-between py-3 md:py-4">
        <!-- Logo -->
        <a href="#home" class="group flex items-center">
          <img
            src="@/assets/images/logo.png"
            alt="Vimasi Vedações"
            class="h-[40px] object-contain transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] md:h-[52px]"
          />
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden items-center gap-10 md:flex">
          <a
            v-for="item in menuItems"
            :key="item.href"
            :href="item.href"
            class="font-arimo hover:text-accent-gold group relative text-sm font-medium tracking-widest text-white/80 uppercase transition-all duration-300 hover:scale-105"
          >
            {{ item.label }}
            <span
              class="bg-accent-gold absolute -bottom-1 left-0 h-[1px] w-0 transition-all duration-300 group-hover:w-full"
            ></span>
          </a>

          <a
            href="https://wa.me/555196194676"
            target="_blank"
            class="group relative overflow-hidden rounded-full bg-[#25D366] px-6 py-2.5 text-xs font-bold tracking-wide text-white uppercase shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#20bd5a] hover:shadow-[#25D366]/30"
          >
            <span class="relative z-10 flex items-center gap-2">
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                />
              </svg>
              WhatsApp
            </span>
            <span
              class="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            ></span>
          </a>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="hover:text-accent-gold relative z-50 p-2 text-white transition-colors md:hidden"
          aria-label="Menu"
          :aria-expanded="mobileMenuOpen"
        >
          <div class="flex flex-col gap-1.5">
            <span
              class="block h-0.5 w-6 bg-current transition-all duration-300"
              :class="{ 'translate-y-2 rotate-45': mobileMenuOpen }"
            ></span>
            <span
              class="block h-0.5 w-6 bg-current transition-all duration-300"
              :class="{ 'opacity-0': mobileMenuOpen }"
            ></span>
            <span
              class="block h-0.5 w-6 bg-current transition-all duration-300"
              :class="{ '-translate-y-2 -rotate-45': mobileMenuOpen }"
            ></span>
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-x-full"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-x-0"
      leave-to-class="opacity-0 translate-x-full"
    >
      <div
        v-if="mobileMenuOpen"
        class="bg-primary-dark/95 fixed inset-0 z-40 flex flex-col items-center justify-center backdrop-blur-xl"
      >
        <nav class="flex flex-col items-center gap-8">
          <a
            v-for="(item, index) in menuItems"
            :key="item.href"
            :href="item.href"
            @click="mobileMenuOpen = false"
            class="font-anton hover:text-accent-gold text-4xl tracking-wider text-white uppercase transition-all duration-300 hover:scale-110"
            :style="{ animation: `fadeInUp 0.5s ease-out forwards ${index * 0.1}s`, opacity: 0 }"
          >
            {{ item.label }}
          </a>

          <a
            href="https://wa.me/555196194676"
            target="_blank"
            class="font-arimo mt-8 flex items-center gap-3 rounded-full border border-[#25D366] px-8 py-3 text-lg font-bold tracking-wide text-[#25D366] uppercase transition-all active:scale-95"
            :style="{ animation: `fadeInUp 0.5s ease-out forwards 0.4s`, opacity: 0 }"
          >
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
              />
            </svg>
            WhatsApp
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const menuItems = [
  { label: 'Home', href: '#home' },
  { label: 'Vedações', href: '#vedacoes' },
  { label: 'Contato', href: '#contato' },
]
</script>

<style scoped>
a[href^='#'] {
  scroll-behavior: smooth;
}
</style>
