<template>
  <div class="gaskets-page">
    <!-- Hero Section -->
    <section
      class="relative flex min-h-[60vh] items-center justify-center overflow-hidden text-center text-white"
    >
      <div class="absolute inset-0 z-0">
        <img
          src="@/assets/images/gasket-hero.png"
          alt="Gaxetas hidráulicas de alta qualidade para vedação industrial"
          class="h-full w-full object-cover"
        />
        <div
          class="to-primary-dark absolute inset-0 bg-gradient-to-b from-black/70 via-black/50"
        ></div>
      </div>

      <div class="relative z-10 mx-auto max-w-5xl px-4 py-20">
        <!-- Breadcrumb -->
        <nav class="mb-8 flex justify-center" aria-label="Breadcrumb">
          <ol class="font-arimo flex items-center gap-2 text-sm text-white/60">
            <li>
              <router-link to="/" class="hover:text-accent-gold transition-colors"
                >Home</router-link
              >
            </li>
            <li class="flex items-center gap-2">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span class="text-accent-gold">Gaxetas</span>
            </li>
          </ol>
        </nav>

        <h1
          class="font-anton animate-fade-in-up mb-6 text-4xl leading-tight uppercase italic drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          O que é uma <span class="text-accent-red">Gaxeta</span>?
        </h1>

        <p
          class="font-arimo animate-fade-in-up mx-auto max-w-3xl text-lg text-white/80 md:text-xl"
          style="animation-delay: 0.1s"
        >
          Guia completo sobre gaxetas hidráulicas: tipos, aplicações industriais e vantagens para
          seu sistema de vedação.
        </p>
      </div>
    </section>

    <!-- Definition Section -->
    <section class="bg-primary-dark py-20">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-4xl">
          <h2 class="font-anton mb-8 text-center text-4xl text-white uppercase italic md:text-5xl">
            Definição de <span class="text-accent-gold">Gaxeta</span>
          </h2>

          <div class="font-arimo space-y-6 text-lg leading-relaxed text-white/80">
            <p>
              Uma <strong class="text-accent-gold">gaxeta</strong> é um componente de vedação
              essencial utilizado em sistemas hidráulicos e pneumáticos. Também conhecida como
              <em>selo de vedação</em> ou <em>seal</em>, a gaxeta é projetada para impedir
              vazamentos de fluidos (óleo, água ou ar) entre superfícies móveis ou estáticas em
              cilindros, válvulas e outros equipamentos industriais.
            </p>

            <p>
              As gaxetas são fabricadas em materiais de alta performance como
              <strong>poliuretano</strong>, <strong>borracha nitrílica (NBR)</strong>,
              <strong>PTFE (Teflon)</strong> e compostos especiais, garantindo resistência a
              temperaturas extremas, pressões elevadas e diferentes tipos de fluidos hidráulicos.
            </p>

            <p>
              A escolha correta da gaxeta é fundamental para a
              <strong class="text-accent-red">eficiência e longevidade</strong> do seu equipamento,
              reduzindo custos de manutenção e evitando paradas não programadas na produção.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Types Section -->
    <section class="bg-primary-dark relative overflow-hidden py-24">
      <div
        class="bg-accent-gold/5 absolute top-0 right-0 h-full w-1/3 translate-x-1/2 rounded-full blur-[100px]"
      ></div>

      <div class="relative z-10 container mx-auto px-4">
        <h2 class="font-anton mb-4 text-center text-4xl text-white uppercase italic md:text-5xl">
          Tipos de <span class="text-accent-red">Gaxetas</span>
        </h2>
        <p class="font-arimo mx-auto mb-16 max-w-2xl text-center text-lg text-white/60">
          Conheça os principais tipos de gaxetas e suas aplicações específicas.
        </p>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <!-- Type 1 -->
          <div
            class="group glass relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-white/5"
          >
            <div
              class="bg-accent-red/10 group-hover:bg-accent-red/20 mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-all group-hover:scale-110"
            >
              <svg
                class="text-accent-red h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <h3 class="font-anton mb-3 text-2xl text-white uppercase italic">U-Cup</h3>
            <p class="font-arimo text-white/70">
              Gaxeta em formato U, ideal para vedação de pistões em cilindros hidráulicos de simples
              ação. Alta resistência à pressão.
            </p>
          </div>

          <!-- Type 2 -->
          <div
            class="group glass relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-white/5"
          >
            <div
              class="bg-accent-gold/10 group-hover:bg-accent-gold/20 mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-all group-hover:scale-110"
            >
              <svg
                class="text-accent-gold h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <h3 class="font-anton mb-3 text-2xl text-white uppercase italic">V-Ring</h3>
            <p class="font-arimo text-white/70">
              Vedação em formato V para eixos rotativos. Oferece excelente proteção contra
              contaminantes externos e retenção de lubrificante.
            </p>
          </div>

          <!-- Type 3 -->
          <div
            class="group glass relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-white/5"
          >
            <div
              class="bg-accent-red/10 group-hover:bg-accent-red/20 mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-all group-hover:scale-110"
            >
              <svg
                class="text-accent-red h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </div>
            <h3 class="font-anton mb-3 text-2xl text-white uppercase italic">Dupla Ação</h3>
            <p class="font-arimo text-white/70">
              Gaxeta que veda em ambas as direções do movimento. Perfeita para cilindros de dupla
              ação em máquinas industriais.
            </p>
          </div>

          <!-- Type 4 -->
          <div
            class="group glass relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-white/5"
          >
            <div
              class="bg-accent-gold/10 group-hover:bg-accent-gold/20 mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-all group-hover:scale-110"
            >
              <svg
                class="text-accent-gold h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 class="font-anton mb-3 text-2xl text-white uppercase italic">Gaxeta de Haste</h3>
            <p class="font-arimo text-white/70">
              Projetada especificamente para vedação de hastes de cilindros. Suporta altas pressões
              e velocidades de operação.
            </p>
          </div>
        </div>

        <!-- Types Image -->
        <div class="mx-auto mt-16 max-w-4xl">
          <img
            src="@/assets/images/gasket-types.png"
            alt="Diferentes tipos de gaxetas hidráulicas: U-Cup, V-Ring, dupla ação e gaxeta de haste"
            class="w-full rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>

    <!-- Applications Section -->
    <section class="bg-primary-dark py-24">
      <div class="container mx-auto px-4">
        <h2 class="font-anton mb-4 text-center text-4xl text-white uppercase italic md:text-5xl">
          Aplicações <span class="text-accent-gold">Industriais</span>
        </h2>
        <p class="font-arimo mx-auto mb-16 max-w-2xl text-center text-lg text-white/60">
          Onde as gaxetas são utilizadas para garantir máxima eficiência.
        </p>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div class="glass rounded-2xl p-8 transition-all duration-500 hover:bg-white/5">
            <h3 class="font-anton mb-4 text-xl text-white uppercase italic">
              Cilindros Hidráulicos
            </h3>
            <p class="font-arimo text-white/70">
              Vedação de pistões e hastes em cilindros de simples e dupla ação, garantindo movimento
              preciso e sem vazamentos.
            </p>
          </div>

          <div class="glass rounded-2xl p-8 transition-all duration-500 hover:bg-white/5">
            <h3 class="font-anton mb-4 text-xl text-white uppercase italic">Prensas Industriais</h3>
            <p class="font-arimo text-white/70">
              Equipamentos de conformação e estampagem que exigem vedações de alta pressão e
              durabilidade extrema.
            </p>
          </div>

          <div class="glass rounded-2xl p-8 transition-all duration-500 hover:bg-white/5">
            <h3 class="font-anton mb-4 text-xl text-white uppercase italic">Máquinas Agrícolas</h3>
            <p class="font-arimo text-white/70">
              Tratores, colheitadeiras e implementos agrícolas que operam em condições adversas e
              precisam de vedações robustas.
            </p>
          </div>

          <div class="glass rounded-2xl p-8 transition-all duration-500 hover:bg-white/5">
            <h3 class="font-anton mb-4 text-xl text-white uppercase italic">
              Equipamentos de Construção
            </h3>
            <p class="font-arimo text-white/70">
              Escavadeiras, retroescavadeiras e guindastes que dependem de sistemas hidráulicos
              confiáveis.
            </p>
          </div>

          <div class="glass rounded-2xl p-8 transition-all duration-500 hover:bg-white/5">
            <h3 class="font-anton mb-4 text-xl text-white uppercase italic">
              Indústria Metalúrgica
            </h3>
            <p class="font-arimo text-white/70">
              Fornos, laminadores e máquinas de fundição que operam em altas temperaturas.
            </p>
          </div>

          <div class="glass rounded-2xl p-8 transition-all duration-500 hover:bg-white/5">
            <h3 class="font-anton mb-4 text-xl text-white uppercase italic">
              Sistemas Pneumáticos
            </h3>
            <p class="font-arimo text-white/70">
              Atuadores e válvulas pneumáticas em linhas de produção automatizadas.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Advantages Section -->
    <section class="bg-primary-dark relative overflow-hidden py-24">
      <div
        class="bg-accent-red/5 absolute bottom-0 left-0 h-full w-1/3 -translate-x-1/2 rounded-full blur-[100px]"
      ></div>

      <div class="relative z-10 container mx-auto px-4">
        <h2 class="font-anton mb-4 text-center text-4xl text-white uppercase italic md:text-5xl">
          Vantagens das <span class="text-accent-red">Gaxetas de Qualidade</span>
        </h2>
        <p class="font-arimo mx-auto mb-16 max-w-2xl text-center text-lg text-white/60">
          Por que investir em gaxetas de alta performance faz diferença.
        </p>

        <div class="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          <div class="flex items-start gap-4">
            <div
              class="bg-accent-gold/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
            >
              <svg
                class="text-accent-gold h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <h3 class="font-anton mb-2 text-xl text-white uppercase italic">
                Maior Durabilidade
              </h3>
              <p class="font-arimo text-white/70">
                Materiais premium que resistem ao desgaste, prolongando a vida útil do equipamento.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div
              class="bg-accent-gold/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
            >
              <svg
                class="text-accent-gold h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <h3 class="font-anton mb-2 text-xl text-white uppercase italic">Vedação Eficiente</h3>
              <p class="font-arimo text-white/70">
                Zero vazamentos, garantindo desempenho máximo do sistema hidráulico.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div
              class="bg-accent-gold/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
            >
              <svg
                class="text-accent-gold h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <h3 class="font-anton mb-2 text-xl text-white uppercase italic">
                Redução de Manutenção
              </h3>
              <p class="font-arimo text-white/70">
                Menos paradas para troca e reparos, aumentando a produtividade.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div
              class="bg-accent-gold/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
            >
              <svg
                class="text-accent-gold h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <h3 class="font-anton mb-2 text-xl text-white uppercase italic">
                Economia de Custos
              </h3>
              <p class="font-arimo text-white/70">
                Investimento que se paga com a redução de desperdício de óleo e peças.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="bg-primary-dark py-24">
      <div class="container mx-auto px-4">
        <h2 class="font-anton mb-4 text-center text-4xl text-white uppercase italic md:text-5xl">
          Perguntas <span class="text-accent-gold">Frequentes</span>
        </h2>
        <p class="font-arimo mx-auto mb-16 max-w-2xl text-center text-lg text-white/60">
          Tire suas dúvidas sobre gaxetas hidráulicas.
        </p>

        <div class="mx-auto max-w-3xl space-y-6">
          <div class="glass rounded-2xl p-6">
            <h3 class="font-anton mb-3 text-lg text-white uppercase italic">
              Quando devo trocar uma gaxeta?
            </h3>
            <p class="font-arimo text-white/70">
              A troca deve ser feita ao identificar vazamentos, perda de pressão no sistema, ruídos
              anormais ou quando a gaxeta apresentar desgaste visível, como rachaduras ou
              deformações.
            </p>
          </div>

          <div class="glass rounded-2xl p-6">
            <h3 class="font-anton mb-3 text-lg text-white uppercase italic">
              Como escolher a gaxeta correta?
            </h3>
            <p class="font-arimo text-white/70">
              Considere as dimensões do alojamento, tipo de fluido, faixa de temperatura e pressão
              de trabalho. Nossa equipe técnica pode ajudar na especificação correta.
            </p>
          </div>

          <div class="glass rounded-2xl p-6">
            <h3 class="font-anton mb-3 text-lg text-white uppercase italic">
              Qual a diferença entre gaxeta e retentor?
            </h3>
            <p class="font-arimo text-white/70">
              A gaxeta é usada principalmente em sistemas hidráulicos para vedação dinâmica de
              cilindros, enquanto o retentor é aplicado em eixos rotativos para reter lubrificantes.
            </p>
          </div>

          <div class="glass rounded-2xl p-6">
            <h3 class="font-anton mb-3 text-lg text-white uppercase italic">
              As gaxetas podem ser fabricadas sob medida?
            </h3>
            <p class="font-arimo text-white/70">
              Sim! A Vimasi trabalha com gaxetas customizadas para atender especificações técnicas
              especiais de cada aplicação industrial.
            </p>
          </div>

          <div class="glass rounded-2xl p-6">
            <h3 class="font-anton mb-3 text-lg text-white uppercase italic">
              Qual material de gaxeta é mais resistente?
            </h3>
            <p class="font-arimo text-white/70">
              Depende da aplicação. O poliuretano oferece excelente resistência à abrasão, o PTFE é
              ideal para temperaturas extremas, e a borracha nitrílica é versátil para uso geral.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-primary-dark relative overflow-hidden py-24">
      <div class="absolute inset-0 z-0">
        <div
          class="from-primary-dark via-primary-dark/90 to-primary-dark absolute inset-0 bg-gradient-to-b"
        ></div>
      </div>

      <div class="relative z-10 container mx-auto px-4 text-center">
        <h2 class="font-anton mb-6 text-4xl text-white uppercase italic md:text-5xl">
          Precisa de <span class="text-accent-red">Gaxetas</span>?
        </h2>
        <p class="font-arimo mx-auto mb-10 max-w-2xl text-lg text-white/70">
          Entre em contato com nossa equipe técnica para um orçamento personalizado. Atendemos
          Lajeado/RS e região.
        </p>

        <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/555196194676?text=Ol%C3%A1,%20gostaria%20de%20um%20or%C3%A7amento%20de%20gaxetas"
            target="_blank"
            class="group relative inline-flex items-center gap-4 overflow-hidden rounded-full bg-[#25D366] px-10 py-4 text-lg font-bold tracking-wider text-white uppercase shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#20bd5a] hover:shadow-[#25D366]/40"
          >
            <span class="relative z-10 flex items-center gap-3">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                />
              </svg>
              Solicitar Orçamento
            </span>
          </a>

          <router-link
            to="/aneis-vedacao"
            class="group hover:border-accent-gold hover:bg-accent-gold/10 inline-flex items-center gap-3 rounded-full border-2 border-white/30 px-8 py-4 font-bold tracking-wider text-white uppercase transition-all duration-300"
          >
            Ver Anéis de Vedação
            <svg
              class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

defineOptions({
  name: 'GasketsView',
})

onMounted(() => {
  window.scrollTo(0, 0)

  // Set SEO meta tags dynamically
  document.title = 'O que é Gaxeta? Tipos, Aplicações e Vantagens | Vimasi Vedações'

  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute(
      'content',
      'Descubra tudo sobre gaxetas hidráulicas: tipos (U-Cup, V-Ring), aplicações industriais e vantagens. Especialistas em vedações em Lajeado/RS. Solicite seu orçamento!',
    )
  }

  // Add structured data for SEO
  const existingScript = document.querySelector('script[data-page="gaxetas"]')
  if (!existingScript) {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-page', 'gaxetas')
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'O que é Gaxeta? Tipos, Aplicações e Vantagens',
      description: 'Guia completo sobre gaxetas hidráulicas para vedação industrial.',
      author: { '@type': 'Organization', name: 'Vimasi Vedações' },
      publisher: { '@type': 'Organization', name: 'Vimasi Vedações' },
    })
    document.head.appendChild(script)
  }
})
</script>
