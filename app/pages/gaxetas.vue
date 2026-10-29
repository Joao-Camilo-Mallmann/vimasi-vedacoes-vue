<template>
  <div class="gaskets-page">
    <PageHero
      image="/gaskets/gasket-hero.webp"
      image-alt="Gaxetas hidráulicas em poliuretano e NBR para vedação de cilindros industriais"
      :breadcrumb="breadcrumb"
      :updated-at="dateModified"
    >
      <template #title>
        O que é uma <span class="text-accent-red">Gaxeta</span>?
      </template>
      Guia completo sobre gaxetas hidráulicas: tipos, materiais, aplicações
      industriais e como escolher a vedação certa para o seu cilindro.
    </PageHero>

    <!-- Definition Section -->
    <section class="bg-primary-dark py-20">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-4xl">
          <h2 class="font-anton mb-8 text-center text-4xl text-white uppercase italic md:text-5xl">
            Definição de <span class="text-accent-gold">Gaxeta</span>
          </h2>

          <div class="font-arimo space-y-6 text-lg leading-relaxed text-white/80">
            <p>
              <strong class="text-accent-gold">Gaxeta</strong> é o elemento de vedação dinâmica
              instalado na haste ou no pistão de um cilindro hidráulico ou pneumático para impedir
              a passagem de fluido entre a câmara de pressão e o exterior. Também chamada de
              <em>selo</em> ou <em>seal</em>, ela mantém a pressão de trabalho e evita vazamentos
              de óleo, água ou ar em cilindros, válvulas e outros equipamentos industriais.
            </p>

            <p>
              As gaxetas são fabricadas em materiais de alta performance como
              <strong>poliuretano (PU)</strong>, <strong>borracha nitrílica (NBR)</strong>,
              <strong>Viton (FKM)</strong> e <strong>PTFE (Teflon)</strong>, cada um com uma faixa
              de temperatura, pressão e compatibilidade química diferente.
            </p>

            <p>
              A escolha correta da gaxeta é fundamental para a
              <strong class="text-accent-red">eficiência e a vida útil</strong> do equipamento:
              reduz custos de manutenção e evita paradas não programadas na produção.
              A Vimasi Vedações (Lajeado, RS) identifica a gaxeta pela peça antiga ou pelas medidas
              do alojamento e fornece o perfil e o material adequados à aplicação.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Types Section -->
    <section class="bg-primary-dark relative overflow-hidden py-24">
      <div class="bg-accent-gold/5 absolute top-0 right-0 h-full w-1/3 translate-x-1/2 rounded-full blur-[100px]"></div>

      <div class="relative z-10 container mx-auto px-4">
        <h2 class="font-anton mb-4 text-center text-4xl text-white uppercase italic md:text-5xl">
          Tipos de <span class="text-accent-red">Gaxetas</span>
        </h2>
        <p class="font-arimo mx-auto mb-16 max-w-2xl text-center text-lg text-white/60">
          Os principais perfis de gaxeta e onde cada um é aplicado.
        </p>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(type, index) in types"
            :key="type.name"
            class="group glass relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-white/5"
          >
            <div
              class="mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-all group-hover:scale-110"
              :class="index % 2 === 0 ? 'bg-accent-red/10 group-hover:bg-accent-red/20 text-accent-red' : 'bg-accent-gold/10 group-hover:bg-accent-gold/20 text-accent-gold'"
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
            src="/gaskets/gasket-types.webp"
            alt="Diferentes tipos de gaxetas hidráulicas: U-Cup, V-Ring, dupla ação e gaxeta de haste"
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
        <div class="mx-auto max-w-4xl">
          <h2 class="font-anton mb-4 text-center text-4xl text-white uppercase italic md:text-5xl">
            Materiais e <span class="text-accent-gold">Temperaturas</span>
          </h2>
          <p class="font-arimo mx-auto mb-12 max-w-2xl text-center text-lg text-white/60">
            Faixas típicas de trabalho de cada material de gaxeta. Confirme sempre com o fluido e a pressão da sua aplicação.
          </p>

          <div class="glass overflow-x-auto rounded-2xl">
            <table class="font-arimo w-full min-w-[560px] text-left text-white/80">
              <thead>
                <tr class="border-b border-white/10 text-xs tracking-widest text-white/50 uppercase">
                  <th class="px-6 py-4">Material</th>
                  <th class="px-6 py-4">Temperatura</th>
                  <th class="px-6 py-4">Indicado para</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="material in materials" :key="material.name" class="border-b border-white/5 last:border-0">
                  <td class="px-6 py-4 font-bold text-white">{{ material.name }}</td>
                  <td class="px-6 py-4 whitespace-nowrap">{{ material.temperature }}</td>
                  <td class="px-6 py-4">{{ material.use }}</td>
                </tr>
              </tbody>
            </table>
          </div>
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
          Onde as gaxetas são utilizadas no Vale do Taquari e em todo o RS.
        </p>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="app in applications"
            :key="app.name"
            class="glass rounded-2xl p-8 transition-all duration-500 hover:bg-white/5"
          >
            <h3 class="font-anton mb-4 text-xl text-white uppercase italic">
              {{ app.name }}
            </h3>
            <p class="font-arimo text-white/70">
              {{ app.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Advantages Section -->
    <section class="bg-primary-dark relative overflow-hidden py-24">
      <div class="bg-accent-red/5 absolute bottom-0 left-0 h-full w-1/3 -translate-x-1/2 rounded-full blur-[100px]"></div>

      <div class="relative z-10 container mx-auto px-4">
        <h2 class="font-anton mb-4 text-center text-4xl text-white uppercase italic md:text-5xl">
          Vantagens das <span class="text-accent-red">Gaxetas de Qualidade</span>
        </h2>
        <p class="font-arimo mx-auto mb-16 max-w-2xl text-center text-lg text-white/60">
          Por que investir em gaxetas de alta performance faz diferença.
        </p>

        <div class="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          <div v-for="adv in advantages" :key="adv.name" class="flex items-start gap-4">
            <div class="bg-accent-gold/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
              <svg class="text-accent-gold h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h3 class="font-anton mb-2 text-xl text-white uppercase italic">
                {{ adv.name }}
              </h3>
              <p class="font-arimo text-white/70">
                {{ adv.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FaqSection :faqs="faqs" subtitle="Tire suas dúvidas sobre gaxetas hidráulicas." />

    <RelatedLinks :links="related" />

    <CtaSection
      whatsapp-message="Olá, gostaria de um orçamento de gaxetas"
      :secondary="{ label: 'Ver Kits de Reparo', to: '/kits-reparo/' }"
    >
      <template #title>Precisa de <span class="text-accent-red">Gaxetas</span>?</template>
      Entre em contato com nossa equipe técnica para um orçamento personalizado.
      Atendemos Lajeado, Vale do Taquari e todo o Rio Grande do Sul.
    </CtaSection>
  </div>
</template>

<script setup lang="ts">
import { business } from "~/data/business";

const datePublished = "2025-12-08";
const dateModified = "2026-10-29";

const breadcrumb = [
  { label: "Produtos", to: "/vedacoes/" },
  { label: "Gaxetas", to: "/gaxetas/" },
];

const types = [
  {
    name: "U-Cup",
    icon: "lucide:magnet",
    description:
      "Gaxeta em formato U, ideal para vedação de pistões em cilindros hidráulicos de simples ação. Alta resistência à pressão.",
  },
  {
    name: "V-Ring",
    icon: "lucide:refresh-cw",
    description:
      "Vedação em formato V para eixos rotativos. Oferece excelente proteção contra contaminantes externos e retenção de lubrificante.",
  },
  {
    name: "Dupla Ação",
    icon: "lucide:arrow-left-right",
    description:
      "Gaxeta que veda em ambas as direções do movimento. Perfeita para cilindros de dupla ação em máquinas industriais.",
  },
  {
    name: "Gaxeta de Haste",
    icon: "lucide:shield-check",
    description:
      "Projetada especificamente para vedação de hastes de cilindros. Suporta altas pressões e velocidades de operação.",
  },
];

const materials = [
  { name: "Poliuretano (PU)", temperature: "-30 °C a +100 °C", use: "Óleo mineral, alta pressão e abrasão; padrão em cilindros hidráulicos." },
  { name: "Borracha nitrílica (NBR)", temperature: "-30 °C a +100 °C", use: "Óleos minerais, graxas e água; uso geral e pneumática." },
  { name: "Viton (FKM)", temperature: "-20 °C a +200 °C", use: "Altas temperaturas, combustíveis e fluidos agressivos." },
  { name: "PTFE (Teflon)", temperature: "-200 °C a +260 °C", use: "Baixíssimo atrito, alta velocidade, químicos e temperaturas extremas." },
];

const applications = [
  { name: "Cilindros Hidráulicos", description: "Vedação de pistões e hastes em cilindros de simples e dupla ação, garantindo movimento preciso e sem vazamentos." },
  { name: "Máquinas Agrícolas", description: "Tratores, colheitadeiras, plantadeiras e pulverizadores que operam em condições adversas e precisam de vedações robustas." },
  { name: "Prensas e Injetoras", description: "Equipamentos de conformação, estampagem e injeção que exigem vedações de alta pressão e durabilidade extrema." },
  { name: "Equipamentos de Construção", description: "Escavadeiras, retroescavadeiras e guindastes que dependem de sistemas hidráulicos confiáveis." },
  { name: "Caminhões e Implementos", description: "Cilindros de basculantes, guindautos, plataformas e empilhadeiras das transportadoras da região." },
  { name: "Indústria de Alimentos", description: "Prensas, lavadoras e atuadores de frigoríficos e laticínios, com materiais compatíveis com cada processo." },
];

const advantages = [
  { name: "Maior Durabilidade", description: "Materiais premium que resistem ao desgaste, prolongando a vida útil do equipamento." },
  { name: "Vedação Eficiente", description: "Zero vazamentos, garantindo desempenho máximo do sistema hidráulico." },
  { name: "Redução de Manutenção", description: "Menos paradas para troca e reparos, aumentando a produtividade." },
  { name: "Economia de Custos", description: "Investimento que se paga com a redução de desperdício de óleo e peças." },
];

const faqs = [
  {
    question: "Quando devo trocar uma gaxeta?",
    answer:
      "A gaxeta deve ser trocada ao identificar vazamento de óleo pela haste, perda de pressão ou de força no cilindro, ruídos anormais ou desgaste visível, como rachaduras, deformações ou lábios gastos.",
  },
  {
    question: "Como escolher a gaxeta correta?",
    answer:
      "Considere as dimensões do alojamento (diâmetro interno, externo e altura), o tipo de fluido, a faixa de temperatura, a pressão e a velocidade de trabalho. Levando a peça antiga à Vimasi em Lajeado, nossa equipe identifica o perfil e o material corretos.",
  },
  {
    question: "Qual a diferença entre gaxeta e retentor?",
    answer:
      "A gaxeta é usada em cilindros hidráulicos e pneumáticos para vedação dinâmica de haste e pistão com movimento linear, enquanto o retentor é aplicado em eixos rotativos para reter lubrificante e impedir a entrada de sujeira.",
  },
  {
    question: "As gaxetas podem ser fabricadas sob medida?",
    answer:
      "Sim. A Vimasi Vedações fornece gaxetas usinadas sob medida para alojamentos fora de padrão, a partir das medidas do cilindro ou da vedação antiga.",
  },
  {
    question: "Qual material de gaxeta é mais resistente?",
    answer:
      "Depende da aplicação. O poliuretano oferece a melhor resistência à abrasão e à pressão, o PTFE é ideal para temperaturas extremas e baixo atrito, o Viton resiste a calor e químicos, e a borracha nitrílica é a opção versátil para uso geral.",
  },
];

const related = [
  { label: "Raspadores hidráulicos", to: "/raspadores/" },
  { label: "Kits de reparo para cilindros", to: "/kits-reparo/" },
  { label: "Anéis O-ring", to: "/aneis-vedacao/" },
  { label: "Catálogo completo de vedações", to: "/vedacoes/" },
  { label: "Vedações no Vale do Taquari", to: "/vedacoes-vale-do-taquari/" },
];

useSeoMeta({
  title: "Gaxetas Hidráulicas: o que são, tipos e materiais",
  description:
    "O que é gaxeta hidráulica, tipos (U-Cup, V-Ring, dupla ação, haste), materiais (PU, NBR, Viton, PTFE) e aplicações. Gaxetas sob medida em Lajeado, Vale do Taquari e RS.",
  ogTitle: "Gaxetas Hidráulicas: guia completo | Vimasi Vedações",
  ogDescription:
    "Tipos, materiais e aplicações de gaxetas hidráulicas. Especialistas em vedações em Lajeado e Vale do Taquari.",
  ogImage: `${business.url}/og/gaxetas.jpg`,
  ogType: "article",
  articlePublishedTime: `${datePublished}T09:00:00-03:00`,
  articleModifiedTime: `${dateModified}T09:00:00-03:00`,
  twitterCard: "summary_large_image",
});

useSchemaOrg([
  defineWebPage({ "@type": ["WebPage", "FAQPage"] }),
  defineArticle({
    headline: "O que é Gaxeta? Tipos, Materiais, Aplicações e Vantagens",
    description: "Guia completo sobre gaxetas hidráulicas para vedação de cilindros industriais.",
    image: `${business.url}/og/gaxetas.jpg`,
    datePublished,
    dateModified,
    inLanguage: "pt-BR",
  }),
  defineProduct({
    name: "Gaxetas hidráulicas",
    description:
      "Gaxetas de haste e pistão em poliuretano, NBR, Viton e PTFE para cilindros hidráulicos e pneumáticos, de linha e sob medida.",
    image: `${business.url}/og/gaxetas.jpg`,
    brand: { "@type": "Brand", name: business.name },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "BRL",
      url: `${business.url}/gaxetas/`,
      seller: { "@id": `${business.url}/#identity` },
    },
  }),
]);
</script>
