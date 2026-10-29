<template>
  <div class="rings-page">
    <PageHero
      image="/sealing-rings/sealing-ring-hero.webp"
      image-alt="Anéis de vedação O-ring em NBR, Viton e silicone de diversas medidas"
      :breadcrumb="breadcrumb"
      :updated-at="dateModified"
    >
      <template #title>
        Anéis de <span class="text-accent-gold">Vedação</span> e O-Rings
      </template>
      Guia de anéis O-ring, X-ring e back-up ring: perfis, materiais, como medir
      e quando usar cada um em vedações estáticas e dinâmicas.
    </PageHero>

    <!-- Definition Section -->
    <section class="bg-primary-dark py-20">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-4xl">
          <h2 class="font-anton mb-8 text-center text-4xl text-white uppercase italic md:text-5xl">
            O que são <span class="text-accent-red">Anéis O-Ring</span>?
          </h2>

          <div class="font-arimo space-y-6 text-lg leading-relaxed text-white/80">
            <p>
              <strong class="text-accent-gold">Anel O-ring</strong> é um anel de elastômero com seção
              transversal circular (formato toroidal) que, alojado em uma ranhura e comprimido na
              montagem, veda a passagem de fluidos e gases. É o elemento de vedação mais comum e
              versátil da indústria, usado em vedações estáticas e, com limites de velocidade, dinâmicas.
            </p>

            <p>
              Sua simplicidade de design, baixo custo e facilidade de instalação tornam os O-rings a
              escolha preferida para uma ampla gama de aplicações, de sistemas hidráulicos e
              pneumáticos a conexões, válvulas e equipamentos sanitários.
            </p>

            <p>
              Além dos O-rings tradicionais, a Vimasi Vedações (Lajeado, RS) oferece
              <strong class="text-accent-red">anéis X-ring (Quad-Ring)</strong>,
              <strong class="text-accent-red">back-up rings</strong>, caixas de O-ring sortidas e
              vedações especiais sob medida, com pronta entrega para todo o Vale do Taquari.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Types Section -->
    <section class="bg-primary-dark relative overflow-hidden py-24">
      <div class="bg-accent-red/5 absolute top-0 left-0 h-full w-1/3 -translate-x-1/2 rounded-full blur-[100px]"></div>

      <div class="relative z-10 container mx-auto px-4">
        <h2 class="font-anton mb-4 text-center text-4xl text-white uppercase italic md:text-5xl">
          Tipos e <span class="text-accent-gold">Perfis</span>
        </h2>
        <p class="font-arimo mx-auto mb-16 max-w-2xl text-center text-lg text-white/60">
          Diversidade de perfis para atender cada necessidade específica.
        </p>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="type in types"
            :key="type.name"
            class="group glass relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-white/5"
          >
            <div
              class="mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-all group-hover:scale-110"
              :class="type.classes"
            >
              <Icon :name="type.icon" class="text-3xl" />
            </div>
            <h3 class="font-anton mb-3 text-2xl text-white uppercase italic">
              {{ type.name }}
            </h3>
            <p class="font-arimo text-white/70">
              {{ type.description }}
            </p>
          </div>
        </div>

        <div class="mx-auto mt-16 max-w-4xl">
          <NuxtImg
            src="/sealing-rings/sealing-ring-types.webp"
            alt="Perfis de anéis de vedação: O-ring, X-ring e back-up ring"
            loading="lazy"
            sizes="100vw lg:896px"
            width="1600"
            height="900"
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
          A escolha do material é crucial para o sucesso da vedação.
        </p>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div
            v-for="material in materials"
            :key="material.name"
            class="group glass flex flex-col gap-6 rounded-2xl p-8 transition-all hover:bg-white/5 md:flex-row md:items-center"
          >
            <div
              class="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg"
              :style="{ backgroundColor: material.color }"
            >
              <Icon :name="material.icon" class="text-4xl" />
            </div>
            <div>
              <h3 class="font-anton mb-2 text-2xl text-white uppercase italic">
                {{ material.name }}
              </h3>
              <p class="font-arimo mb-2 text-white/80">
                <strong>Uso:</strong> {{ material.use }}
              </p>
              <p class="font-arimo text-sm text-white/60">
                {{ material.notes }} Temperatura: {{ material.temperature }}.
              </p>
            </div>
          </div>
        </div>

        <div class="glass mx-auto mt-12 max-w-4xl overflow-x-auto rounded-2xl">
          <table class="font-arimo w-full min-w-[520px] text-left text-white/80">
            <thead>
              <tr class="border-b border-white/10 text-xs tracking-widest text-white/50 uppercase">
                <th class="px-6 py-4">Material</th>
                <th class="px-6 py-4">Temperatura</th>
                <th class="px-6 py-4">Dureza padrão</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="material in materials" :key="material.name" class="border-b border-white/5 last:border-0">
                <td class="px-6 py-4 font-bold text-white">{{ material.name }}</td>
                <td class="px-6 py-4 whitespace-nowrap">{{ material.temperature }}</td>
                <td class="px-6 py-4">70 Shore A (90 Shore A para alta pressão)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- How to Measure Section -->
    <section class="bg-primary-dark relative overflow-hidden py-24">
      <div class="bg-accent-gold/5 absolute right-0 bottom-0 h-full w-1/3 translate-x-1/2 rounded-full blur-[100px]"></div>

      <div class="relative z-10 container mx-auto px-4">
        <div class="mx-auto max-w-4xl">
          <h2 class="font-anton mb-8 text-center text-4xl text-white uppercase italic md:text-5xl">
            Como Medir um <span class="text-accent-gold">O-Ring</span>?
          </h2>

          <div class="glass flex flex-col items-center gap-10 rounded-2xl p-10 md:flex-row">
            <div class="font-arimo w-full space-y-4 text-lg text-white/80">
              <p>
                Para medir um O-ring você precisa de duas medidas principais, em milímetros:
              </p>
              <ul class="list-disc space-y-2 pl-6">
                <li>
                  <strong class="text-white">Diâmetro interno (d1):</strong>
                  medida da "boca" do anel, com paquímetro, sem esticar.
                </li>
                <li>
                  <strong class="text-white">Espessura do fio (d2):</strong>
                  a grossura da seção transversal do anel. Os fios padrão são 1,78 mm, 2,62 mm, 3,53 mm, 5,33 mm e 6,99 mm.
                </li>
              </ul>
              <div class="border-accent-gold/30 bg-accent-gold/5 mt-6 rounded-lg border p-4 text-sm">
                <p>
                  <strong>Dica:</strong> se não tiver o anel, meça o alojamento (fundo da ranhura,
                  largura e diâmetro do eixo ou furo). A equipe da Vimasi calcula a vedação ideal para você.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FaqSection :faqs="faqs" accent="red" />

    <RelatedLinks :links="related" />

    <CtaSection
      whatsapp-message="Olá, gostaria de cotar anéis O-ring"
      whatsapp-label="Cotar via WhatsApp"
      :secondary="{ label: 'Ver Gaxetas', to: '/gaxetas/' }"
    >
      <template #title>Encontre o <span class="text-accent-gold">Anel Ideal</span></template>
      Amplo estoque de O-rings em medidas milimétricas e em polegadas. Atendemos Lajeado,
      Vale do Taquari e Rio Grande do Sul com pronta entrega.
    </CtaSection>
  </div>
</template>

<script setup lang="ts">
import { business } from "~/data/business";

const datePublished = "2025-12-08";
const dateModified = "2026-10-29";

const breadcrumb = [
  { label: "Produtos", to: "/vedacoes/" },
  { label: "Anéis de Vedação", to: "/aneis-vedacao/" },
];

const types = [
  {
    name: "O-Ring",
    icon: "lucide:circle",
    classes: "bg-accent-gold/10 group-hover:bg-accent-gold/20 text-accent-gold",
    description:
      "O padrão da indústria. Vedação bidirecional, pode ser usado em aplicações estáticas e dinâmicas (com limitações de velocidade).",
  },
  {
    name: "X-Ring",
    icon: "lucide:x",
    classes: "bg-accent-red/10 group-hover:bg-accent-red/20 text-accent-red",
    description:
      "Perfil com quatro lábios de vedação (Quad-Ring). Menor atrito, evita torção na ranhura e oferece melhor eficiência de vedação.",
  },
  {
    name: "Back-up Ring",
    icon: "lucide:circle-dashed",
    classes: "bg-white/10 group-hover:bg-white/20 text-white",
    description:
      "Anel anti-extrusão usado em conjunto com o O-ring em aplicações de alta pressão, evitando que a vedação seja \"mordida\".",
  },
];

const materials = [
  { name: "Borracha Nitrílica (NBR)", icon: "lucide:droplets", color: "#333333", use: "Óleos minerais, fluidos hidráulicos, água.", notes: "O material mais comum. Ótima resistência a óleos e baixo custo.", temperature: "-40 °C a +120 °C" },
  { name: "Viton (FKM)", icon: "lucide:flask-conical", color: "#5D4037", use: "Altas temperaturas, produtos químicos, combustíveis.", notes: "Excelente resistência química e térmica. Ideal para ambientes agressivos.", temperature: "-20 °C a +200 °C" },
  { name: "Silicone (VMQ)", icon: "lucide:thermometer", color: "#D32F2F", use: "Alimentos, estufas, isolamento elétrico.", notes: "Atóxico, alta flexibilidade e resistência a temperaturas extremas. Baixa resistência mecânica.", temperature: "-60 °C a +230 °C" },
  { name: "Etileno Propileno (EPDM)", icon: "lucide:waves", color: "#1976D2", use: "Vapor, água quente, fluidos de freio.", notes: "Excelente resistência ao ozônio e intempéries. Não compatível com óleos minerais.", temperature: "-50 °C a +150 °C" },
];

const faqs = [
  {
    question: "Posso reutilizar um O-ring?",
    answer:
      "Não é recomendado. Durante o uso o O-ring sofre deformação permanente por compressão e pode ter microfissuras invisíveis; reutilizá-lo costuma causar vazamentos. Troque o anel a cada desmontagem.",
  },
  {
    question: "O que é dureza Shore A?",
    answer:
      "Shore A é a escala que mede a rigidez da borracha. O padrão para O-rings é 70 Shore A. Para pressões acima de 100 bar, recomenda-se 90 Shore A ou o uso de back-up ring para evitar extrusão.",
  },
  {
    question: "Vocês têm kits (caixas) de O-ring?",
    answer:
      "Sim. A Vimasi fornece caixas sortidas de O-rings em medidas milimétricas e em polegadas, em NBR ou Viton, para manutenção geral de oficinas e indústrias.",
  },
  {
    question: "Qual a diferença entre O-ring e X-ring?",
    answer:
      "O O-ring tem seção circular e um único ponto de contato por lado; o X-ring tem seção em X com quatro lábios, menor atrito e menos tendência a torcer na ranhura, por isso é preferido em vedações dinâmicas alternativas.",
  },
];

const related = [
  { label: "Gaxetas hidráulicas", to: "/gaxetas/" },
  { label: "Kits de reparo para cilindros", to: "/kits-reparo/" },
  { label: "Raspadores hidráulicos", to: "/raspadores/" },
  { label: "Catálogo completo de vedações", to: "/vedacoes/" },
  { label: "Vedações no Vale do Taquari", to: "/vedacoes-vale-do-taquari/" },
];

useSeoMeta({
  title: "Anéis O-ring: tipos, materiais e como medir",
  description:
    "Anéis O-ring, X-ring e back-up ring em NBR, Viton, silicone e EPDM. Tabela de temperaturas, como medir e quando trocar. Pronta entrega em Lajeado, Vale do Taquari e RS.",
  ogTitle: "Anéis O-ring e Vedações Industriais | Vimasi Vedações",
  ogDescription:
    "Guia de anéis de vedação O-ring: perfis, materiais e medição. Estoque em Lajeado/RS para todo o Vale do Taquari.",
  ogImage: `${business.url}/og/aneis-vedacao.jpg`,
  ogType: "article",
  articlePublishedTime: `${datePublished}T09:00:00-03:00`,
  articleModifiedTime: `${dateModified}T09:00:00-03:00`,
  twitterCard: "summary_large_image",
});

useSchemaOrg([
  defineWebPage({ "@type": ["WebPage", "FAQPage"] }),
  defineArticle({
    headline: "Anéis O-ring e Vedações Industriais: tipos, materiais e como medir",
    description: "Guia de anéis de vedação O-ring, X-ring e back-up ring, materiais e medição.",
    image: `${business.url}/og/aneis-vedacao.jpg`,
    datePublished,
    dateModified,
    inLanguage: "pt-BR",
  }),
  defineProduct({
    name: "Anéis O-ring",
    description:
      "Anéis O-ring, X-ring e back-up ring em NBR, Viton, silicone e EPDM, em medidas milimétricas e em polegadas, avulsos ou em caixas sortidas.",
    image: `${business.url}/og/aneis-vedacao.jpg`,
    brand: { "@type": "Brand", name: business.name },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "BRL",
      url: `${business.url}/aneis-vedacao/`,
      seller: { "@id": `${business.url}/#identity` },
    },
  }),
]);
</script>
