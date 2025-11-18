<template>
  <div class="contato bg-stone-50 py-20">
    <div class="container mx-auto px-4">
      <h1
        class="font-anton text-accent-gold animate-fade-in-up mb-12 text-center text-5xl uppercase italic drop-shadow-sm md:text-7xl"
      >
        Fale Conosco
      </h1>

      <div class="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <!-- Contact Info -->
        <div
          class="animate-fade-in-up space-y-8 rounded-lg bg-white p-8 shadow-xl"
          style="animation-delay: 0.2s"
        >
          <div>
            <h3 class="font-anton text-accent-gold mb-2 text-3xl uppercase italic">Endereço</h3>
            <p class="font-arimo text-primary-dark text-xl">
              R. Eugênia Mello de Oliveira Kirchheim, 151<br />
              Bom Pastor, Lajeado - RS, 95905-699
            </p>
          </div>

          <div>
            <h3 class="font-anton text-accent-gold mb-2 text-3xl uppercase italic">
              Telefone / Whatsapp
            </h3>
            <a
              href="https://wa.me/555196194676"
              class="font-arimo text-primary-dark hover:text-accent-red text-xl font-bold transition-colors"
            >
              (51) 99619-4676
            </a>
          </div>

          <div>
            <h3 class="font-anton text-accent-gold mb-2 text-3xl uppercase italic">E-mail</h3>
            <a
              href="mailto:vimasicomerciopecas@gmail.com"
              class="font-arimo text-primary-dark hover:text-accent-red text-xl underline transition-colors"
            >
              vimasicomerciopecas@gmail.com
            </a>
          </div>
        </div>

        <!-- Map or Image -->
        <div
          class="animate-fade-in-up overflow-hidden rounded-lg shadow-2xl transition-transform duration-500 hover:scale-105"
          style="animation-delay: 0.4s"
        >
          <img
            src="@/assets/images/contact-bg.jpg"
            alt="Localização"
            class="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
