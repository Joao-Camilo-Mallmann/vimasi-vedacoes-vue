<template>
  <div class="contact-view bg-primary-dark relative min-h-screen overflow-hidden pt-20">
    <!-- Decorative elements -->
    <div
      class="from-accent-gold/5 pointer-events-none absolute top-0 right-0 h-1/2 w-1/2 bg-gradient-to-b to-transparent"
    ></div>
    <div
      class="bg-accent-red/5 pointer-events-none absolute bottom-0 left-0 h-1/3 w-1/3 rounded-full blur-[100px]"
    ></div>

    <div class="relative z-10 container mx-auto px-4 py-12">
      <div class="mb-16 text-center">
        <h1
          class="font-anton animate-fade-in-up mb-6 bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-5xl text-transparent uppercase italic md:text-7xl"
        >
          Fale <span class="text-accent-gold">Conosco</span>
        </h1>
        <p
          class="font-arimo animate-fade-in-up mx-auto max-w-2xl text-lg text-white/60"
          style="animation-delay: 0.1s"
        >
          Estamos prontos para atender você. Entre em contato por um de nossos canais ou visite
          nossa loja.
        </p>
      </div>

      <div class="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-2">
        <!-- Contact Info -->
        <div class="animate-fade-in-up space-y-6" style="animation-delay: 0.2s">
          <!-- Address Card -->
          <div class="glass group rounded-2xl p-8 transition-colors duration-300 hover:bg-white/5">
            <div class="flex items-start gap-6">
              <div
                class="bg-accent-red/10 group-hover:bg-accent-red/20 flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors"
              >
                <svg
                  class="text-accent-red h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 class="font-anton mb-2 text-2xl text-white uppercase">Endereço</h3>
                <p class="font-arimo text-lg leading-relaxed text-white/80">
                  R. Eugênia Mello de Oliveira Kirchheim, 151<br />
                  Bom Pastor, Lajeado - RS<br />
                  CEP: 95905-699
                </p>
                <a
                  href="https://maps.app.goo.gl/VQzXHJzPMdCavSP56"
                  target="_blank"
                  class="text-accent-red mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase transition-all hover:gap-3"
                >
                  Ver no mapa
                  <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Phone Card -->
          <div class="glass group rounded-2xl p-8 transition-colors duration-300 hover:bg-white/5">
            <div class="flex items-start gap-6">
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 transition-colors group-hover:bg-[#25D366]/20"
              >
                <svg class="h-6 w-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                  />
                </svg>
              </div>
              <div>
                <h3 class="font-anton mb-2 text-2xl text-white uppercase">Telefone / WhatsApp</h3>
                <a
                  href="https://wa.me/555196194676"
                  target="_blank"
                  class="font-arimo text-xl font-bold text-white/80 transition-colors hover:text-[#25D366]"
                >
                  (51) 99619-4676
                </a>
                <p class="mt-1 text-sm text-white/50">Atendimento em horário comercial</p>
              </div>
            </div>
          </div>

          <!-- Email Card -->
          <div class="glass group rounded-2xl p-8 transition-colors duration-300 hover:bg-white/5">
            <div class="flex items-start gap-6">
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#3B82F6]/10 transition-colors group-hover:bg-[#3B82F6]/20"
              >
                <svg
                  class="h-6 w-6 text-[#3B82F6]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 class="font-anton mb-2 text-2xl text-white uppercase">E-mail</h3>
                <a
                  href="mailto:vimasicomerciopecas@gmail.com"
                  class="font-arimo text-lg break-all text-white/80 transition-colors hover:text-[#3B82F6]"
                >
                  vimasicomerciopecas@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Map or Image -->
        <div
          class="animate-fade-in-up group relative h-full min-h-[400px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
          style="animation-delay: 0.4s"
        >
          <div
            class="from-primary-dark/80 pointer-events-none absolute inset-0 z-10 bg-gradient-to-t to-transparent"
          ></div>
          <img
            src="@/assets/images/contact-bg.jpg"
            alt="Localização"
            class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div class="absolute bottom-0 left-0 z-20 p-8">
            <p class="font-anton mb-2 text-3xl text-white uppercase italic">Venha nos visitar</p>
            <p class="font-arimo text-white/80">Teremos prazer em recebê-lo em nossa sede.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'ContactView',
})
</script>
