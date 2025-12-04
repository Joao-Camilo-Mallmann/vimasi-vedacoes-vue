<template>
  <div class="sealing-rings-page">
    <!-- Hero Section -->
    <section
      class="relative flex min-h-[60vh] items-center justify-center overflow-hidden text-center text-white"
    >
      <div class="absolute inset-0 z-0">
        <img
          src="@/assets/images/sealing-ring-hero.png"
          alt="Anéis de vedação O-ring de alta qualidade em diversos materiais"
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
              <span class="text-accent-gold">Anéis de Vedação</span>
            </li>
          </ol>
        </nav>

        <h1
          class="font-anton animate-fade-in-up mb-6 text-4xl leading-tight uppercase italic drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Anéis de <span class="text-accent-red">Vedação</span>
        </h1>

        <p
          class="font-arimo animate-fade-in-up mx-auto max-w-3xl text-lg text-white/80 md:text-xl"
          style="animation-delay: 0.1s"
        >
          Tudo sobre O-Rings e vedações circulares: tipos, materiais, aplicações e como escolher o
          anel ideal para seu sistema.
        </p>
      </div>
    </section>

    <!-- Definition Section -->
    <section class="bg-primary-dark py-20">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-4xl">
          <h2 class="font-anton mb-8 text-center text-4xl text-white uppercase italic md:text-5xl">
            O que são <span class="text-accent-gold">Anéis de Vedação</span>?
          </h2>

          <div class="font-arimo space-y-6 text-lg leading-relaxed text-white/80">
            <p>
              Os <strong class="text-accent-gold">anéis de vedação</strong>, também conhecidos como
              <em>O-Rings</em> ou <em>juntas tóricas</em>, são componentes circulares essenciais
              para criar uma barreira hermética entre duas superfícies. Utilizados mundialmente em
              sistemas hidráulicos, pneumáticos e aplicações estáticas, eles previnem vazamentos de
              fluidos, gases e contaminantes.
            </p>

            <p>
              A versatilidade dos anéis de vedação está na variedade de
              <strong>materiais disponíveis</strong> — como NBR, Viton, Silicone e EPDM — cada um
              projetado para resistir a condições específicas de temperatura, pressão e
              compatibilidade química.
            </p>

            <p>
              A <strong class="text-accent-red">seleção correta</strong> do anel de vedação é
              crucial para garantir a eficiência do seu equipamento, evitando falhas prematuras,
              vazamentos e custos de manutenção elevados.
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
          Tipos de <span class="text-accent-red">Anéis</span>
        </h2>
        <p class="font-arimo mx-auto mb-16 max-w-2xl text-center text-lg text-white/60">
          Conheça os principais tipos de anéis de vedação e suas aplicações.
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
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 class="font-anton mb-3 text-2xl text-white uppercase italic">O-Ring</h3>
            <p class="font-arimo text-white/70">
              O clássico anel circular de seção redonda. Versátil e econômico, ideal para vedações
              estáticas e dinâmicas de baixa velocidade.
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
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
            </div>
            <h3 class="font-anton mb-3 text-2xl text-white uppercase italic">X-Ring</h3>
            <p class="font-arimo text-white/70">
              Seção em formato de X (quad-ring). Oferece dupla vedação e menor atrito que o O-Ring
              convencional.
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 class="font-anton mb-3 text-2xl text-white uppercase italic">Backup Ring</h3>
            <p class="font-arimo text-white/70">
              Anel de encosto usado em conjunto com O-Rings para evitar extrusão em aplicações de
              alta pressão.
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
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                />
              </svg>
            </div>
            <h3 class="font-anton mb-3 text-2xl text-white uppercase italic">Face Seal</h3>
            <p class="font-arimo text-white/70">
              Vedação facial para conexões hidráulicas. Garante vedação perfeita em flanges e
              tampas.
            </p>
          </div>
        </div>

        <!-- Types Image -->
        <div class="mx-auto mt-16 max-w-4xl">
          <img
            src="@/assets/images/sealing-ring-types.png"
            alt="Diferentes tipos de anéis de vedação: O-Ring, X-Ring, Backup Ring e Face Seal"
            class="w-full rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>

    <!-- Materials Section -->
    <section class="bg-primary-dark py-24">
      <div class="container mx-auto px-4">
        <h2 class="font-anton mb-4 text-center text-4xl text-white uppercase italic md:text-5xl">
          Materiais <span class="text-accent-gold">Disponíveis</span>
        </h2>
        <p class="font-arimo mx-auto mb-16 max-w-2xl text-center text-lg text-white/60">
          Cada material oferece propriedades específicas para diferentes aplicações.
        </p>

        <div class="mx-auto max-w-5xl overflow-hidden rounded-2xl">
          <table class="w-full">
            <thead class="bg-accent-gold/20">
              <tr>
                <th class="font-anton px-6 py-4 text-left text-lg text-white uppercase italic">
                  Material
                </th>
                <th class="font-anton px-6 py-4 text-left text-lg text-white uppercase italic">
                  Temperatura
                </th>
                <th
                  class="font-anton hidden px-6 py-4 text-left text-lg text-white uppercase italic md:table-cell"
                >
                  Aplicação
                </th>
              </tr>
            </thead>
            <tbody class="font-arimo divide-y divide-white/10">
              <tr class="transition-colors hover:bg-white/5">
                <td class="text-accent-red px-6 py-4 font-bold">NBR (Nitrílica)</td>
                <td class="px-6 py-4 text-white/70">-30°C a +100°C</td>
                <td class="hidden px-6 py-4 text-white/70 md:table-cell">
                  Uso geral, óleos minerais, hidráulica
                </td>
              </tr>
              <tr class="transition-colors hover:bg-white/5">
                <td class="text-accent-gold px-6 py-4 font-bold">Viton (FKM)</td>
                <td class="px-6 py-4 text-white/70">-20°C a +200°C</td>
                <td class="hidden px-6 py-4 text-white/70 md:table-cell">
                  Alta temperatura, combustíveis, químicos
                </td>
              </tr>
              <tr class="transition-colors hover:bg-white/5">
                <td class="text-accent-red px-6 py-4 font-bold">Silicone (VMQ)</td>
                <td class="px-6 py-4 text-white/70">-60°C a +200°C</td>
                <td class="hidden px-6 py-4 text-white/70 md:table-cell">
                  Alimentos, farmacêutica, medicina
                </td>
              </tr>
              <tr class="transition-colors hover:bg-white/5">
                <td class="text-accent-gold px-6 py-4 font-bold">EPDM</td>
                <td class="px-6 py-4 text-white/70">-50°C a +150°C</td>
                <td class="hidden px-6 py-4 text-white/70 md:table-cell">
                  Água quente, vapor, fluidos de freio
                </td>
              </tr>
              <tr class="transition-colors hover:bg-white/5">
                <td class="text-accent-red px-6 py-4 font-bold">PTFE (Teflon)</td>
                <td class="px-6 py-4 text-white/70">-200°C a +260°C</td>
                <td class="hidden px-6 py-4 text-white/70 md:table-cell">
                  Extremos de temperatura, químicos agressivos
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Applications Section -->
    <section class="bg-primary-dark relative overflow-hidden py-24">
      <div
        class="bg-accent-red/5 absolute bottom-0 left-0 h-full w-1/3 -translate-x-1/2 rounded-full blur-[100px]"
      ></div>

      <div class="relative z-10 container mx-auto px-4">
        <h2 class="font-anton mb-4 text-center text-4xl text-white uppercase italic md:text-5xl">
          Aplicações dos <span class="text-accent-red">O-Rings</span>
        </h2>
        <p class="font-arimo mx-auto mb-16 max-w-2xl text-center text-lg text-white/60">
          Onde os anéis de vedação são essenciais para o funcionamento.
        </p>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div class="glass rounded-2xl p-8 transition-all duration-500 hover:bg-white/5">
            <h3 class="font-anton mb-4 text-xl text-white uppercase italic">
              Sistemas Hidráulicos
            </h3>
            <p class="font-arimo text-white/70">
              Vedação de cilindros, válvulas, bombas e conexões hidráulicas em máquinas industriais
              e equipamentos pesados.
            </p>
          </div>

          <div class="glass rounded-2xl p-8 transition-all duration-500 hover:bg-white/5">
            <h3 class="font-anton mb-4 text-xl text-white uppercase italic">
              Sistemas Pneumáticos
            </h3>
            <p class="font-arimo text-white/70">
              Atuadores, válvulas de ar comprimido e ferramentas pneumáticas em linhas de automação.
            </p>
          </div>

          <div class="glass rounded-2xl p-8 transition-all duration-500 hover:bg-white/5">
            <h3 class="font-anton mb-4 text-xl text-white uppercase italic">
              Indústria Automotiva
            </h3>
            <p class="font-arimo text-white/70">
              Sistemas de combustível, refrigeração, ar condicionado e transmissões em veículos.
            </p>
          </div>

          <div class="glass rounded-2xl p-8 transition-all duration-500 hover:bg-white/5">
            <h3 class="font-anton mb-4 text-xl text-white uppercase italic">
              Equipamentos Médicos
            </h3>
            <p class="font-arimo text-white/70">
              Dispositivos que exigem biocompatibilidade e esterilização em ambientes hospitalares.
            </p>
          </div>

          <div class="glass rounded-2xl p-8 transition-all duration-500 hover:bg-white/5">
            <h3 class="font-anton mb-4 text-xl text-white uppercase italic">Válvulas e Conexões</h3>
            <p class="font-arimo text-white/70">
              Vedação estática em flanges, tampas, roscas e uniões de tubulações industriais.
            </p>
          </div>

          <div class="glass rounded-2xl p-8 transition-all duration-500 hover:bg-white/5">
            <h3 class="font-anton mb-4 text-xl text-white uppercase italic">
              Indústria Alimentícia
            </h3>
            <p class="font-arimo text-white/70">
              Equipamentos de processamento de alimentos com materiais atóxicos aprovados pela FDA.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- How to Choose Section -->
    <section class="bg-primary-dark py-24">
      <div class="container mx-auto px-4">
        <h2 class="font-anton mb-4 text-center text-4xl text-white uppercase italic md:text-5xl">
          Como <span class="text-accent-gold">Escolher</span> o Anel Correto
        </h2>
        <p class="font-arimo mx-auto mb-16 max-w-2xl text-center text-lg text-white/60">
          Fatores essenciais para a especificação correta.
        </p>

        <div class="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          <div class="flex items-start gap-4">
            <div
              class="bg-accent-red/10 text-accent-red flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl font-bold"
            >
              1
            </div>
            <div>
              <h3 class="font-anton mb-2 text-xl text-white uppercase italic">
                Medidas do Alojamento
              </h3>
              <p class="font-arimo text-white/70">
                Diâmetro interno (DI), diâmetro externo (DE) e espessura da seção. Tolerâncias
                precisas garantem vedação eficaz.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div
              class="bg-accent-red/10 text-accent-red flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl font-bold"
            >
              2
            </div>
            <div>
              <h3 class="font-anton mb-2 text-xl text-white uppercase italic">Tipo de Fluido</h3>
              <p class="font-arimo text-white/70">
                Compatibilidade química com óleos, água, combustíveis ou gases específicos do seu
                sistema.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div
              class="bg-accent-gold/10 text-accent-gold flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl font-bold"
            >
              3
            </div>
            <div>
              <h3 class="font-anton mb-2 text-xl text-white uppercase italic">
                Temperatura de Operação
              </h3>
              <p class="font-arimo text-white/70">
                Faixa de temperatura mínima e máxima que o anel enfrentará durante o funcionamento.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div
              class="bg-accent-gold/10 text-accent-gold flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl font-bold"
            >
              4
            </div>
            <div>
              <h3 class="font-anton mb-2 text-xl text-white uppercase italic">
                Pressão do Sistema
              </h3>
              <p class="font-arimo text-white/70">
                Pressão de trabalho e picos de pressão. Alta pressão pode exigir backup rings.
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
          Tire suas dúvidas sobre anéis de vedação.
        </p>

        <div class="mx-auto max-w-3xl space-y-6">
          <div class="glass rounded-2xl p-6">
            <h3 class="font-anton mb-3 text-lg text-white uppercase italic">
              Como medir um O-Ring corretamente?
            </h3>
            <p class="font-arimo text-white/70">
              Meça o diâmetro interno (DI) com um paquímetro, depois a espessura da seção
              transversal. O diâmetro externo é calculado: DE = DI + (2 × espessura).
            </p>
          </div>

          <div class="glass rounded-2xl p-6">
            <h3 class="font-anton mb-3 text-lg text-white uppercase italic">
              Qual a diferença entre NBR e Viton?
            </h3>
            <p class="font-arimo text-white/70">
              NBR é mais econômico e adequado para óleos minerais até 100°C. Viton resiste a
              temperaturas até 200°C e é compatível com combustíveis e químicos agressivos.
            </p>
          </div>

          <div class="glass rounded-2xl p-6">
            <h3 class="font-anton mb-3 text-lg text-white uppercase italic">
              O-Ring pode ser usado em aplicações dinâmicas?
            </h3>
            <p class="font-arimo text-white/70">
              Sim, em velocidades baixas a moderadas. Para altas velocidades ou movimentos rotativos
              intensos, considere usar X-Rings ou vedações específicas.
            </p>
          </div>

          <div class="glass rounded-2xl p-6">
            <h3 class="font-anton mb-3 text-lg text-white uppercase italic">
              Como instalar um O-Ring corretamente?
            </h3>
            <p class="font-arimo text-white/70">
              Limpe o alojamento, aplique lubrificante compatível no anel, posicione sem torcer e
              verifique se está totalmente assentado no canal. Evite ferramentas cortantes.
            </p>
          </div>

          <div class="glass rounded-2xl p-6">
            <h3 class="font-anton mb-3 text-lg text-white uppercase italic">
              Quando usar Backup Ring junto com O-Ring?
            </h3>
            <p class="font-arimo text-white/70">
              Em pressões acima de 70 bar, use backup ring do lado oposto à pressão para evitar
              extrusão. Acima de 200 bar, use backup rings em ambos os lados.
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
          Precisa de <span class="text-accent-red">Anéis de Vedação</span>?
        </h2>
        <p class="font-arimo mx-auto mb-10 max-w-2xl text-lg text-white/70">
          Entre em contato com nossa equipe técnica para um orçamento personalizado. Atendemos
          Lajeado/RS e região.
        </p>

        <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/555196194676?text=Ol%C3%A1,%20gostaria%20de%20um%20or%C3%A7amento%20de%20an%C3%A9is%20de%20veda%C3%A7%C3%A3o"
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
            to="/gaxetas"
            class="group hover:border-accent-gold hover:bg-accent-gold/10 inline-flex items-center gap-3 rounded-full border-2 border-white/30 px-8 py-4 font-bold tracking-wider text-white uppercase transition-all duration-300"
          >
            Ver Gaxetas
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
  name: 'SealingRingsView',
})

onMounted(() => {
  window.scrollTo(0, 0)

  // Set SEO meta tags dynamically
  document.title = 'Anéis de Vedação: O-Ring e Tipos | Guia Completo | Vimasi'

  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute(
      'content',
      'Guia completo sobre anéis de vedação: O-rings, X-rings, materiais (NBR, Viton, Silicone), aplicações e como escolher. Qualidade garantida em Lajeado/RS.',
    )
  }

  // Add structured data for SEO
  const existingScript = document.querySelector('script[data-page="aneis-vedacao"]')
  if (!existingScript) {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-page', 'aneis-vedacao')
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Anéis de Vedação: O-Ring e Tipos - Guia Completo',
      description: 'Guia completo sobre anéis de vedação para sistemas hidráulicos e pneumáticos.',
      author: { '@type': 'Organization', name: 'Vimasi Vedações' },
      publisher: { '@type': 'Organization', name: 'Vimasi Vedações' },
    })
    document.head.appendChild(script)
  }
})
</script>
