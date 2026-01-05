<template>
  <div class="rings-page">
    <!-- Hero Section -->
    <section
      class="relative flex min-h-[60vh] items-center justify-center overflow-hidden text-center text-white"
    >
      <div class="absolute inset-0 z-0">
        <img
          src="~/assets/images/sealing-ring-hero.png"
          alt="Anéis de vedação O-ring e vedações especiais"
          class="h-full w-full object-cover"
        />
        <div
          class="to-primary-dark absolute inset-0 bg-linear-to-b from-black/80 via-black/50"
        ></div>
        <div class="grain absolute inset-0 opacity-30"></div>
      </div>

      <div class="relative z-10 mx-auto max-w-5xl px-4 py-20">
        <nav class="mb-8 flex justify-center" aria-label="Breadcrumb">
          <ol class="font-arimo flex items-center gap-2 text-sm text-white/60">
            <li>
              <NuxtLink to="/" class="hover:text-accent-gold transition-colors"
                >Home</NuxtLink
              >
            </li>
            <li class="flex items-center gap-2">
              <svg
                class="h-4 w-4"
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
              <span class="text-accent-gold">Anéis de Vedação</span>
            </li>
          </ol>
        </nav>

        <h1
          class="font-anton animate-fade-in-up mb-6 text-4xl leading-tight uppercase italic drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Anéis de <span class="text-accent-gold">Vedação</span> e O-Rings
        </h1>

        <p
          class="font-arimo animate-fade-in-up mx-auto max-w-3xl text-lg text-white/80 md:text-xl"
          style="animation-delay: 0.1s"
        >
          Soluções versáteis e eficientes para vedação estática e dinâmica em
          diversas aplicações industriais.
        </p>
      </div>
    </section>

    <!-- Definition Section -->
    <section class="bg-primary-dark py-20">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-4xl">
          <h2
            class="font-anton mb-8 text-center text-4xl text-white uppercase italic md:text-5xl"
          >
            O que são <span class="text-accent-red">Anéis O-Ring</span>?
          </h2>

          <div
            class="font-arimo space-y-6 text-lg leading-relaxed text-white/80"
          >
            <p>
              O <strong class="text-accent-gold">Anel O-Ring</strong> é o
              elemento de vedação mais comum e versátil da indústria. Com
              formato toroidal (seção transversal circular), ele é alojado em
              ranhuras pré-definidas e comprimido durante a montagem, criando um
              selo eficaz contra a passagem de fluidos e gases.
            </p>

            <p>
              Sua simplicidade de design, baixo custo e facilidade de instalação
              tornam os O-Rings a escolha preferida para uma ampla gama de
              aplicações, desde sistemas hidráulicos complexos até vedações
              sanitárias simples.
            </p>

            <p>
              Além dos tradicionais O-Rings, a Vimasi oferece
              <strong class="text-accent-red">Anéis X-Ring (Quad-Ring)</strong>,
              <strong class="text-accent-red">Back-up Rings</strong> e vedações
              especiais sob medida.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Types Section -->
    <section class="bg-primary-dark relative overflow-hidden py-24">
      <div
        class="bg-accent-red/5 absolute top-0 left-0 h-full w-1/3 -translate-x-1/2 rounded-full blur-[100px]"
      ></div>

      <div class="relative z-10 container mx-auto px-4">
        <h2
          class="font-anton mb-4 text-center text-4xl text-white uppercase italic md:text-5xl"
        >
          Tipos e <span class="text-accent-gold">Perfis</span>
        </h2>
        <p
          class="font-arimo mx-auto mb-16 max-w-2xl text-center text-lg text-white/60"
        >
          Diversidade de perfis para atender cada necessidade específica.
        </p>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- Type 1 -->
          <div
            class="group glass relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-white/5"
          >
            <div
              class="bg-accent-gold/10 group-hover:bg-accent-gold/20 mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-all group-hover:scale-110"
            >
              <svg
                class="text-accent-gold h-10 w-10 drop-shadow-[0_0_8px_rgba(228,199,170,0.5)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
                  opacity="0.5"
                />
              </svg>
            </div>
            <h3 class="font-anton mb-3 text-2xl text-white uppercase italic">
              O-Ring
            </h3>
            <p class="font-arimo text-white/70">
              O padrão da indústria. Vedação bidirecional, pode ser usado em
              aplicações estáticas e dinâmicas (com limitações de velocidade).
            </p>
          </div>

          <!-- Type 2 -->
          <div
            class="group glass relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-white/5"
          >
            <div
              class="bg-accent-red/10 group-hover:bg-accent-red/20 mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-all group-hover:scale-110"
            >
              <svg
                class="text-accent-red h-10 w-10 drop-shadow-[0_0_8px_rgba(229,57,53,0.5)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M12 2L14.5 9.5H22L16 14L18.5 21.5L12 17L5.5 21.5L8 14L2 9.5H9.5L12 2Z"
                />
              </svg>
            </div>
            <h3 class="font-anton mb-3 text-2xl text-white uppercase italic">
              X-Ring
            </h3>
            <p class="font-arimo text-white/70">
              Perfil com quatro lábios de vedação (Quad-Ring). Menor atrito,
              evita torção na ranhura e oferece melhor eficiência de vedação.
            </p>
          </div>

          <!-- Type 3 -->
          <div
            class="group glass relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-white/5"
          >
            <div
              class="bg-white/10 group-hover:bg-white/20 mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-all group-hover:scale-110"
            >
              <svg
                class="text-white h-10 w-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke-width="2"
                  stroke-dasharray="4 4"
                />
                <circle cx="12" cy="12" r="5" stroke-width="2" />
              </svg>
            </div>
            <h3 class="font-anton mb-3 text-2xl text-white uppercase italic">
              Back-up Ring
            </h3>
            <p class="font-arimo text-white/70">
              Anel anti-extrusão usado em conjunto com o O-Ring em aplicações de
              alta pressão, evitando que a vedação seja "mordida".
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Materials Section -->
    <section class="bg-primary-dark py-24">
      <div class="container mx-auto px-4">
        <h2
          class="font-anton mb-4 text-center text-4xl text-white uppercase italic md:text-5xl"
        >
          Materiais <span class="text-accent-gold">Disponíveis</span>
        </h2>
        <p
          class="font-arimo mx-auto mb-16 max-w-2xl text-center text-lg text-white/60"
        >
          A escolha do material é crucial para o sucesso da vedação.
        </p>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div
            class="group glass flex flex-col gap-6 rounded-2xl p-8 transition-all hover:bg-white/5 md:flex-row md:items-center"
          >
            <div
              class="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#333] text-white shadow-lg"
            >
              <Icon name="lucide:droplets" class="text-4xl" />
            </div>
            <div>
              <h3 class="font-anton mb-2 text-2xl text-white uppercase italic">
                Borracha Nitrílica
              </h3>
              <p class="font-arimo mb-2 text-white/80">
                <strong>Uso:</strong> Óleos minerais, fluidos hidráulicos, água.
              </p>
              <p class="font-arimo text-sm text-white/60">
                O material mais comum. Ótima resistência a óleos e baixo custo.
                Temp: -40°C a +120°C.
              </p>
            </div>
          </div>

          <div
            class="group glass flex flex-col gap-6 rounded-2xl p-8 transition-all hover:bg-white/5 md:flex-row md:items-center"
          >
            <div
              class="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#5D4037] text-white shadow-lg"
            >
              <Icon name="lucide:flask-conical" class="text-4xl" />
            </div>
            <div>
              <h3 class="font-anton mb-2 text-2xl text-white uppercase italic">
                Viton (FKM)
              </h3>
              <p class="font-arimo mb-2 text-white/80">
                <strong>Uso:</strong> Altas temperaturas, produtos químicos,
                combustíveis.
              </p>
              <p class="font-arimo text-sm text-white/60">
                Excelente resistência química e térmica. Ideal para ambientes
                agressivos. Temp: -20°C a +200°C.
              </p>
            </div>
          </div>

          <div
            class="group glass flex flex-col gap-6 rounded-2xl p-8 transition-all hover:bg-white/5 md:flex-row md:items-center"
          >
            <div
              class="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#D32F2F] text-white shadow-lg"
            >
              <Icon name="lucide:thermometer" class="text-4xl" />
            </div>
            <div>
              <h3 class="font-anton mb-2 text-2xl text-white uppercase italic">
                Silicone
              </h3>
              <p class="font-arimo mb-2 text-white/80">
                <strong>Uso:</strong> Alimentos, estufas, isolamento elétrico.
              </p>
              <p class="font-arimo text-sm text-white/60">
                Atóxico, alta flexibilidade e resistência a temperaturas
                extremas. Baixa resistência mecânica. Temp: -60°C a +230°C.
              </p>
            </div>
          </div>

          <div
            class="group glass flex flex-col gap-6 rounded-2xl p-8 transition-all hover:bg-white/5 md:flex-row md:items-center"
          >
            <div
              class="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#1976D2] text-white shadow-lg"
            >
              <Icon name="lucide:waves" class="text-4xl" />
            </div>
            <div>
              <h3 class="font-anton mb-2 text-2xl text-white uppercase italic">
                Etileno Propileno
              </h3>
              <p class="font-arimo mb-2 text-white/80">
                <strong>Uso:</strong> Vapor, água quente, fluidos de freio.
              </p>
              <p class="font-arimo text-sm text-white/60">
                Excelente resistência ao ozônio e intempéries. Não compatível
                com óleos minerais. Temp: -50°C a +150°C.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How to Choose Section -->
    <section class="bg-primary-dark relative overflow-hidden py-24">
      <div
        class="bg-accent-gold/5 absolute bottom-0 right-0 h-full w-1/3 translate-x-1/2 rounded-full blur-[100px]"
      ></div>

      <div class="relative z-10 container mx-auto px-4">
        <div class="mx-auto max-w-4xl">
          <h2
            class="font-anton mb-8 text-center text-4xl text-white uppercase italic md:text-5xl"
          >
            Como Medir um <span class="text-accent-gold">O-Ring</span>?
          </h2>

          <div
            class="glass flex flex-col items-center gap-10 rounded-2xl p-10 md:flex-row"
          >
            <div class="font-arimo space-y-4 text-lg text-white/80 w-full">
              <p>
                Para solicitar um orçamento preciso, você precisa de duas
                medidas principais (em milímetros):
              </p>
              <ul class="list-disc space-y-2 pl-6">
                <li>
                  <strong class="text-white">Diâmetro Interno (d1):</strong>
                  Medida da "boca" do anel.
                </li>
                <li>
                  <strong class="text-white">Espessura do Fio (d2):</strong> A
                  grossura da seção transversal do anel.
                </li>
              </ul>
              <div
                class="border-accent-gold/30 bg-accent-gold/5 mt-6 rounded-lg border p-4 text-sm"
              >
                <p>
                  <strong>Dica:</strong> Se não tiver o anel, meça o alojamento
                  (fundo da ranhura e diâmetro do eixo/furo). Nossa equipe pode
                  calcular a vedação ideal para você.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="bg-primary-dark py-24">
      <div class="container mx-auto px-4">
        <h2
          class="font-anton mb-4 text-center text-4xl text-white uppercase italic md:text-5xl"
        >
          Perguntas <span class="text-accent-red">Frequentes</span>
        </h2>
        <div class="mx-auto max-w-3xl space-y-6 pt-10">
          <div class="glass rounded-2xl p-6">
            <h3 class="font-anton mb-3 text-lg text-white uppercase italic">
              Posso reutilizar um O-Ring?
            </h3>
            <p class="font-arimo text-white/70">
              Não é recomendado. Durante o uso, o O-Ring sofre deformação
              (compressão) e pode ter microfissuras invisíveis. Reutilizar pode
              causar vazamentos.
            </p>
          </div>

          <div class="glass rounded-2xl p-6">
            <h3 class="font-anton mb-3 text-lg text-white uppercase italic">
              O que é dureza Shore A?
            </h3>
            <p class="font-arimo text-white/70">
              É a medida da rigidez da borracha. O padrão é 70 Shore A. Para
              altas pressões (acima de 100 bar), recomenda-se 90 Shore A para
              evitar extrusão.
            </p>
          </div>

          <div class="glass rounded-2xl p-6">
            <h3 class="font-anton mb-3 text-lg text-white uppercase italic">
              Vocês têm kits de O-Ring?
            </h3>
            <p class="font-arimo text-white/70">
              sim! Fornecemos caixas completas com diversas medidas
              (milimétricas e polegadas) para manutenção geral.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-primary-dark relative overflow-hidden py-24">
      <div class="absolute inset-0 z-0">
        <div
          class="from-primary-dark via-primary-dark/90 to-primary-dark absolute inset-0 bg-linear-to-b"
        ></div>
        <!-- Background decorative image if needed, or simple gradient -->
      </div>

      <div class="relative z-10 container mx-auto px-4 text-center">
        <h2
          class="font-anton mb-6 text-4xl text-white uppercase italic md:text-5xl"
        >
          Encontre o <span class="text-accent-gold">Anel Ideal</span>
        </h2>
        <p class="font-arimo mx-auto mb-10 max-w-2xl text-lg text-white/70">
          Temos o maior estoque de O-Rings da região. Consulte disponibilidade
          imediata.
        </p>

        <div
          class="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="https://wa.me/555196194676?text=Ol%C3%A1,%20gostaria%20de%20cotar%20an%C3%A9is%20O-Ring"
            target="_blank"
            class="group relative inline-flex items-center gap-4 overflow-hidden rounded-full bg-[#25D366] px-10 py-4 text-lg font-bold tracking-wider text-white uppercase shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#20bd5a] hover:shadow-[#25D366]/40"
          >
            <span class="relative z-10 flex items-center gap-3">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                />
              </svg>
              Cotar via WhatsApp
            </span>
          </a>

          <NuxtLink
            to="/gaxetas"
            class="group hover:border-accent-red hover:bg-accent-red/10 inline-flex items-center gap-3 rounded-full border-2 border-white/30 px-8 py-4 font-bold tracking-wider text-white uppercase transition-all duration-300"
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
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  window.scrollTo(0, 0);
});

useHead({
  title: "Anéis O-Ring e Vedações Industriais | Vimasi Vedações",
  meta: [
    {
      name: "description",
      content:
        "Catálogo completo de Anéis O-Ring, X-Ring e V-Ring. Diversos materiais (NBR, Viton, Silicone) para todas as aplicações industriais. Entrega em Lajeado/RS.",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Anéis O-Ring e Vedações Industriais",
        description: "Guia de anéis de vedação O-Ring e materiais.",
        author: { "@type": "Organization", name: "Vimasi Vedações" },
        publisher: { "@type": "Organization", name: "Vimasi Vedações" },
      }),
    },
  ],
});
</script>
