<template>
  <div class="home">
    <!-- Hero Section -->
    <section
      id="home"
      class="relative flex h-screen items-center justify-center overflow-hidden text-center text-white"
    >
      <div class="absolute inset-0 z-0">
        <img
          src="@/assets/images/hero-bg.jpg"
          alt="Hero Background"
          class="h-full w-full object-cover"
        />
        <div class="absolute inset-0 bg-black/60"></div>
      </div>

      <div class="relative z-10 px-4">
        <h1
          class="font-anton animate-fade-in-up mb-8 text-5xl leading-tight uppercase italic drop-shadow-lg md:text-6xl lg:text-7xl"
        >
          A VEDAÇÃO <span class="text-accent-gold">HIDRÁULICA</span><br />
          QUE VOCÊ PRECISA
        </h1>
        <a
          href="#contato"
          class="font-staatliches animate-fade-in-up hover:shadow-accent-red/60 group from-accent-red hover:shadow-3xl hover:to-accent-red relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r to-red-600 px-12 py-5 text-xl md:text-2xl text-white uppercase shadow-2xl transition-all duration-500 hover:scale-110 hover:from-red-600"
          style="animation-delay: 0.2s"
        >
          <span class="relative z-10 flex items-center gap-3">
            <svg class="h-7 w-7 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
              />
            </svg>
            Faça seu orçamento GRÁTIS
            <svg
              class="h-7 w-7 transition-transform duration-300 group-hover:translate-x-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <span
            class="group-hover:animate-shimmer absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          ></span>
          <span
            class="absolute inset-0 rounded-full bg-white/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
          ></span>
        </a>
      </div>
    </section>

    <!-- Products Section -->
    <section id="vedacoes" class="bg-primary-dark py-20">
      <div class="container mx-auto px-4">
        <h2
          class="font-anton text-accent-gold mb-4 text-center text-5xl uppercase italic md:text-6xl"
        >
          Conheça nossas Vedações
        </h2>
        <p class="font-arimo mb-12 text-center text-lg text-white/80">
          Soluções completas em vedações hidráulicas para todas as suas necessidades
        </p>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <!-- Product 1: Gaxetas -->
          <div
            class="group border-accent-gold/20 hover:shadow-accent-gold/50 hover:border-accent-gold/60 relative cursor-pointer overflow-hidden rounded-xl border-2 shadow-2xl transition-all duration-500 hover:-translate-y-3"
          >
            <img
              src="@/assets/images/product-1.png"
              alt="Gaxetas"
              class="h-[496px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6"
            >
              <h3 class="font-anton mb-2 text-3xl text-white uppercase italic">Gaxetas</h3>
              <p
                class="font-arimo text-sm text-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                Vedação em forma de anel ou cordão para evitar vazamentos em hastes e eixos
                rotativos
              </p>
            </div>
          </div>

          <!-- Product 2: Raspadores -->
          <div
            class="group border-accent-gold/20 hover:shadow-accent-gold/50 hover:border-accent-gold/60 relative cursor-pointer overflow-hidden rounded-xl border-2 shadow-2xl transition-all duration-500 hover:-translate-y-3"
          >
            <img
              src="@/assets/images/product-2.png"
              alt="Raspadores"
              class="h-[496px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6"
            >
              <h3 class="font-anton mb-2 text-3xl text-white uppercase italic">Raspadores</h3>
              <p
                class="font-arimo text-sm text-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                Dispositivos para remover impurezas e contaminantes das hastes em movimento
              </p>
            </div>
          </div>

          <!-- Product 3: Conjuntos ZW/ZO -->
          <div
            class="group border-accent-gold/20 hover:shadow-accent-gold/50 hover:border-accent-gold/60 relative cursor-pointer overflow-hidden rounded-xl border-2 shadow-2xl transition-all duration-500 hover:-translate-y-3"
          >
            <img
              src="@/assets/images/product-3.png"
              alt="Conjuntos ZW/ZO"
              class="h-[496px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6"
            >
              <h3 class="font-anton mb-2 text-3xl text-white uppercase italic">Conjuntos ZW/ZO</h3>
              <p
                class="font-arimo text-sm text-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                Kits completos de vedação para aplicações industriais específicas
              </p>
            </div>
          </div>

          <!-- Product 4: Anéis -->
          <div
            class="group border-accent-gold/20 hover:shadow-accent-gold/50 hover:border-accent-gold/60 relative cursor-pointer overflow-hidden rounded-xl border-2 shadow-2xl transition-all duration-500 hover:-translate-y-3"
          >
            <img
              src="@/assets/images/product-4.png"
              alt="Anéis"
              class="h-[496px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6"
            >
              <h3 class="font-anton mb-2 text-3xl text-white uppercase italic">Anéis</h3>
              <p
                class="font-arimo text-sm text-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                O-rings e anéis de vedação para diversas aplicações hidráulicas e pneumáticas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="bg-primary-dark/80 relative overflow-hidden py-24 text-white">
      <div class="relative z-10 container mx-auto px-4">
        <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 class="font-anton text-accent-gold mb-6 text-5xl uppercase italic md:text-6xl">
              Conheça nossas Vedações
            </h2>
            <p class="font-arimo mb-6 text-xl leading-relaxed text-white/90">
              Oferecemos produtos de alta qualidade, garantindo eficiência e durabilidade, atendendo
              às mais exigentes necessidades do mercado.
            </p>
            <p class="font-arimo text-lg leading-relaxed text-white/80">
              Com anos de experiência no mercado, a Vimasi se consolidou como referência em vedações
              hidráulicas, oferecendo soluções completas e personalizadas para cada necessidade.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div
              class="group border-accent-gold/20 hover:border-accent-gold/60 relative overflow-hidden rounded-xl border-2 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src="@/assets/images/product-5.png"
                alt="Produto 5"
                class="h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 flex items-end bg-gradient-to-t from-black/90 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <p class="font-arimo text-xs text-white">Reténtores e selos mecânicos</p>
              </div>
            </div>
            <div
              class="group border-accent-gold/20 hover:border-accent-gold/60 relative overflow-hidden rounded-xl border-2 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src="@/assets/images/product-6.png"
                alt="Produto 6"
                class="h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 flex items-end bg-gradient-to-t from-black/90 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <p class="font-arimo text-xs text-white">Guias e buchas de desgaste</p>
              </div>
            </div>
            <div
              class="group border-accent-gold/20 hover:border-accent-gold/60 relative overflow-hidden rounded-xl border-2 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src="@/assets/images/product-7.png"
                alt="Produto 7"
                class="h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 flex items-end bg-gradient-to-t from-black/90 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <p class="font-arimo text-xs text-white">Juntas e arruelas de vedação</p>
              </div>
            </div>
            <div
              class="group border-accent-gold/20 hover:border-accent-gold/60 relative overflow-hidden rounded-xl border-2 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src="@/assets/images/product-8.png"
                alt="Produto 8"
                class="h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 flex items-end bg-gradient-to-t from-black/90 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <p class="font-arimo text-xs text-white">Vedações especiais customizadas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contato" class="bg-primary-dark relative overflow-hidden py-24 text-white">
      <!-- Background Image with Filter -->
      <div class="absolute inset-0 z-0">
        <img
          src="@/assets/images/contact-bg.jpg"
          alt="Contato Background"
          class="h-full w-full object-cover"
        />
        <!-- Gradient overlay from dark to beige -->
        <div
          class="from-primary-dark via-accent-gold/20 to-accent-gold/40 absolute inset-0 bg-gradient-to-b"
        ></div>
      </div>

      <div class="relative z-10 container mx-auto px-4">
        <h2
          class="font-anton text-accent-gold mb-4 text-center text-5xl uppercase italic md:text-6xl"
        >
          Entre em Contato
        </h2>
        <p class="font-arimo mb-12 text-center text-lg text-white/80">
          Estamos prontos para atender você e encontrar a melhor solução
        </p>

        <div class="mx-auto mb-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          <!-- Phone/WhatsApp -->
          <div
            class="group border-accent-gold/30 hover:border-accent-gold/70 hover:shadow-accent-gold/40 from-primary-dark relative overflow-hidden rounded-xl border-2 bg-gradient-to-br to-black/90 p-8 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div
              class="bg-accent-gold/10 group-hover:bg-accent-gold/20 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
            >
              <svg
                class="text-accent-gold h-8 w-8 transition-transform duration-300 group-hover:rotate-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3
              class="font-anton text-accent-gold mb-3 text-2xl uppercase transition-all duration-300 group-hover:scale-105"
            >
              Telefone / WhatsApp
            </h3>
            <a
              href="https://wa.me/555196194676"
              class="font-arimo hover:text-accent-gold text-lg font-bold text-white transition-colors duration-300"
            >
              (51) 99619-4676
            </a>
            <span
              class="via-accent-gold/10 group-hover:animate-shimmer absolute inset-0 -z-0 bg-gradient-to-r from-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            ></span>
          </div>

          <!-- Email -->
          <div
            class="group border-accent-gold/30 hover:border-accent-gold/70 hover:shadow-accent-gold/40 from-primary-dark relative overflow-hidden rounded-xl border-2 bg-gradient-to-br to-black/90 p-8 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div
              class="bg-accent-gold/10 group-hover:bg-accent-gold/20 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
            >
              <svg
                class="text-accent-gold h-8 w-8 transition-transform duration-300 group-hover:rotate-12"
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
            <h3
              class="font-anton text-accent-gold mb-3 text-2xl uppercase transition-all duration-300 group-hover:scale-105"
            >
              E-mail
            </h3>
            <a
              href="mailto:vimasicomerciopecas@gmail.com"
              class="font-arimo hover:text-accent-gold text-lg font-bold break-all text-white transition-colors duration-300"
            >
              vimasicomerciopecas@gmail.com
            </a>
            <span
              class="via-accent-gold/10 group-hover:animate-shimmer absolute inset-0 -z-0 bg-gradient-to-r from-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            ></span>
          </div>

          <!-- Address -->
          <div
            class="group border-accent-gold/30 hover:border-accent-gold/70 hover:shadow-accent-gold/40 from-primary-dark relative overflow-hidden rounded-xl border-2 bg-gradient-to-br to-black/90 p-8 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div
              class="bg-accent-gold/10 group-hover:bg-accent-gold/20 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
            >
              <svg
                class="text-accent-gold h-8 w-8 transition-transform duration-300 group-hover:rotate-12"
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
            <h3
              class="font-anton text-accent-gold mb-3 text-2xl uppercase transition-all duration-300 group-hover:scale-105"
            >
              Endereço
            </h3>
            <p class="font-arimo mb-2 text-base text-white">
              R. Eugênia Mello de Oliveira Kirchheim, 151<br />
              Bom Pastor, Lajeado - RS
            </p>
            <a
              href="https://maps.app.goo.gl/VQzXHJzPMdCavSP56"
              target="_blank"
              class="text-accent-gold hover:text-accent-gold/80 inline-flex items-center gap-1 text-sm underline transition-colors"
            >
              Ver no mapa
              <svg
                class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <span
              class="via-accent-gold/10 group-hover:animate-shimmer absolute inset-0 -z-0 bg-gradient-to-r from-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            ></span>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="text-center">
          <a
            href="https://wa.me/555196194676?text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20or%C3%A7amento"
            target="_blank"
            class="font-staatliches hover:shadow-accent-red/60 group from-accent-red hover:shadow-3xl hover:to-accent-red relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r to-red-600 px-12 py-5 text-2xl text-white uppercase shadow-2xl transition-all duration-500 hover:scale-110 hover:from-red-600"
          >
            <span class="relative z-10 flex items-center gap-3">
              <svg class="h-7 w-7 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                />
              </svg>
              Fale conosco no WhatsApp
              <svg
                class="h-7 w-7 transition-transform duration-300 group-hover:translate-x-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <span
              class="group-hover:animate-shimmer absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            ></span>
            <span
              class="absolute inset-0 rounded-full bg-white/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
            ></span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>
