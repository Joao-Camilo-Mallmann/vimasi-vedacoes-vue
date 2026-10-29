<template>
  <div class="kits-page">
    <PageHero
      image="/catalog/kit-reparo.webp"
      image-alt="Kit de reparo completo com gaxetas, raspador, anéis guia e O-rings para cilindro hidráulico"
      :breadcrumb="breadcrumb"
      :updated-at="dateModified"
    >
      <template #title>
        Kits de <span class="text-accent-red">Reparo</span> para Cilindros Hidráulicos
      </template>
      O que compõe um kit de reparo, quando reparar ou substituir o cilindro, como
      informar as medidas e o que são retentores e vedações de eixo.
    </PageHero>

    <!-- Definition -->
    <section class="bg-primary-dark py-20">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-4xl">
          <h2 class="font-anton mb-8 text-center text-4xl text-white uppercase italic md:text-5xl">
            O que é um <span class="text-accent-gold">Kit de Reparo</span>?
          </h2>
          <div class="font-arimo space-y-6 text-lg leading-relaxed text-white/80">
            <p>
              <strong class="text-accent-gold">Kit de reparo</strong> é o conjunto completo de vedações
              de um cilindro hidráulico, fornecido para uma única manutenção: gaxetas de haste e de
              pistão, raspador, anéis guia, O-rings e back-up rings do cabeçote e do êmbolo.
            </p>
            <p>
              Trocar todas as vedações de uma vez evita que uma peça gasta destrua a nova e dispensa
              uma segunda desmontagem. A Vimasi Vedações (Lajeado, RS) monta kits por modelo de máquina
              ou pelas medidas do cilindro, para todo o Vale do Taquari.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Composition -->
    <section class="bg-primary-dark relative overflow-hidden py-24">
      <div class="bg-accent-gold/5 absolute top-0 right-0 h-full w-1/3 translate-x-1/2 rounded-full blur-[100px]"></div>
      <div class="relative z-10 container mx-auto px-4">
        <h2 class="font-anton mb-4 text-center text-4xl text-white uppercase italic md:text-5xl">
          O que vem no <span class="text-accent-red">Kit</span>
        </h2>
        <p class="font-arimo mx-auto mb-16 max-w-2xl text-center text-lg text-white/60">
          A composição varia com o cilindro, mas um kit completo de dupla ação contém:
        </p>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="part in parts" :key="part.name" class="glass rounded-2xl p-8 transition-all duration-500 hover:bg-white/5">
            <h3 class="font-anton mb-3 text-xl text-white uppercase italic">
              <NuxtLink v-if="part.to" :to="part.to" class="hover:text-accent-gold transition-colors">{{ part.name }}</NuxtLink>
              <template v-else>{{ part.name }}</template>
            </h3>
            <p class="font-arimo text-white/70">{{ part.description }}</p>
          </div>
        </div>
        <div class="mx-auto mt-16 max-w-4xl">
          <NuxtImg
            src="/catalog/reparo.webp"
            alt="Componentes de um kit de reparo de cilindro hidráulico separados sobre a bancada"
            loading="lazy"
            sizes="100vw lg:896px"
            width="1600"
            height="900"
            class="w-full rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>

    <!-- Retentores -->
    <section class="bg-primary-dark py-24">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-4xl">
          <h2 class="font-anton mb-8 text-center text-4xl text-white uppercase italic md:text-5xl">
            Retentores e <span class="text-accent-gold">Vedações de Eixo</span>
          </h2>
          <div class="font-arimo space-y-6 text-lg leading-relaxed text-white/80">
            <p>
              <strong class="text-accent-gold">Retentor</strong> é a vedação de eixo rotativo: um anel
              de borracha com lábio tensionado por mola, montado em carcaça metálica, que retém o
              lubrificante dentro de bombas, motores hidráulicos, redutores e cubos de roda e impede a
              entrada de sujeira.
            </p>
            <p>
              Diferente da gaxeta, que trabalha com movimento linear e pressão, o retentor trabalha com
              rotação e pressão baixa. Fornecemos retentores em NBR e Viton, com lábio simples ou duplo,
              nas medidas métricas e em polegadas mais usadas em bombas e motores hidráulicos.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Repair vs replace + measures -->
    <section class="bg-primary-dark relative overflow-hidden py-24">
      <div class="bg-accent-red/5 absolute bottom-0 left-0 h-full w-1/3 -translate-x-1/2 rounded-full blur-[100px]"></div>
      <div class="relative z-10 container mx-auto px-4">
        <div class="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          <div class="glass rounded-2xl p-8">
            <h2 class="font-anton mb-6 text-3xl text-white uppercase italic">
              Reparar ou <span class="text-accent-red">substituir</span>?
            </h2>
            <p class="font-arimo mb-4 text-white/80">
              Vale reparar quando a haste está sem riscos profundos, a camisa sem ovalização e o
              problema é vazamento ou perda de força: um kit de vedações resolve por uma fração do
              preço do cilindro novo.
            </p>
            <p class="font-arimo text-white/80">
              Substitua ou recupere a haste quando houver riscos que prendem a unha, corrosão
              por pite, empenamento ou cromo descascando; nesses casos a nova vedação falha em dias.
            </p>
          </div>
          <div class="glass rounded-2xl p-8">
            <h2 class="font-anton mb-6 text-3xl text-white uppercase italic">
              Como informar as <span class="text-accent-gold">medidas</span>
            </h2>
            <ul class="font-arimo list-disc space-y-3 pl-6 text-white/80">
              <li><strong class="text-white">Diâmetro da haste</strong> (em mm, com paquímetro).</li>
              <li><strong class="text-white">Diâmetro interno da camisa</strong> (diâmetro do pistão).</li>
              <li><strong class="text-white">Medidas dos alojamentos</strong>: diâmetro de fundo, largura e, se possível, altura das vedações.</li>
              <li><strong class="text-white">Marca e modelo</strong> da máquina ou do cilindro, quando houver plaqueta.</li>
              <li>Ou simplesmente traga as <strong class="text-white">vedações antigas</strong> ou o cilindro à loja em Lajeado.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Segments -->
    <section class="bg-primary-dark py-24">
      <div class="container mx-auto px-4">
        <h2 class="font-anton mb-4 text-center text-4xl text-white uppercase italic md:text-5xl">
          Kits por <span class="text-accent-gold">segmento</span>
        </h2>
        <p class="font-arimo mx-auto mb-16 max-w-2xl text-center text-lg text-white/60">
          Os cilindros mais comuns nas oficinas e indústrias do Vale do Taquari.
        </p>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div v-for="seg in segments" :key="seg.name" class="glass rounded-2xl p-8 transition-all duration-500 hover:bg-white/5">
            <h3 class="font-anton mb-4 text-xl text-white uppercase italic">{{ seg.name }}</h3>
            <p class="font-arimo text-white/70">{{ seg.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <FaqSection :faqs="faqs" subtitle="Tire suas dúvidas sobre kits de reparo e retentores." />

    <RelatedLinks :links="related" />

    <CtaSection
      whatsapp-message="Olá, gostaria de montar um kit de reparo para cilindro hidráulico"
      whatsapp-label="Montar meu kit"
      :secondary="{ label: 'Ver Catálogo', to: '/vedacoes/' }"
    >
      <template #title>Monte seu <span class="text-accent-red">Kit de Reparo</span></template>
      Envie as medidas ou o modelo da máquina pelo WhatsApp e receba o kit completo.
      Atendemos oficinas, indústrias e produtores de Lajeado e de todo o Vale do Taquari.
    </CtaSection>
  </div>
</template>

<script setup lang="ts">
import { business } from "~/data/business";

const datePublished = "2026-10-29";
const dateModified = "2026-10-29";

const breadcrumb = [
  { label: "Produtos", to: "/vedacoes/" },
  { label: "Kits de Reparo", to: "/kits-reparo/" },
];

const parts = [
  { name: "Gaxeta de haste", to: "/gaxetas/", description: "Veda a pressão do óleo no cabeçote, em poliuretano ou NBR." },
  { name: "Gaxeta ou conjunto de pistão", to: "/vedacoes/#capped-seal", description: "Vedação de dupla ação do êmbolo: gaxeta, capped seal ou conjunto OEOD." },
  { name: "Raspador", to: "/raspadores/", description: "Impede a entrada de sujeira pela haste e protege a gaxeta." },
  { name: "Anéis guia", to: "/vedacoes/#aneis-guia", description: "Centralizam haste e pistão e evitam contato metal-metal." },
  { name: "O-rings e back-up rings", to: "/aneis-vedacao/", description: "Vedações estáticas do cabeçote, do êmbolo e das conexões." },
  { name: "Retentor (quando aplicável)", description: "Vedação de eixo rotativo em bombas e motores hidráulicos." },
];

const segments = [
  { name: "Agro", description: "Tratores, colheitadeiras, plantadeiras, pulverizadores e carregadores frontais." },
  { name: "Metalmecânica", description: "Prensas hidráulicas, dobradeiras, injetoras e máquinas de usinagem." },
  { name: "Transporte", description: "Caminhões basculantes, guindautos, plataformas e empilhadeiras." },
  { name: "Alimentos", description: "Prensas, lavadoras e atuadores de frigoríficos, laticínios e agroindústrias." },
];

const faqs = [
  { question: "O que vem em um kit de reparo de cilindro hidráulico?", answer: "Um kit completo contém gaxeta de haste, vedação de pistão, raspador, anéis guia, O-rings e back-up rings do cabeçote e do êmbolo. A composição exata depende do projeto do cilindro." },
  { question: "Posso montar um kit só com as medidas do cilindro?", answer: "Sim. Com o diâmetro da haste, o diâmetro interno da camisa e as medidas dos alojamentos a Vimasi monta o kit. Se tiver, informe também marca e modelo da máquina." },
  { question: "Qual a diferença entre retentor e gaxeta?", answer: "O retentor veda eixos rotativos de bombas, motores e redutores, retendo lubrificante a baixa pressão. A gaxeta veda hastes e pistões com movimento linear sob a pressão de trabalho do cilindro." },
  { question: "Quanto tempo leva para montar um kit?", answer: "Kits com vedações de linha saem na hora na loja em Lajeado. Vedações usinadas sob medida têm prazo informado no orçamento pelo WhatsApp." },
  { question: "Vocês atendem oficinas e indústrias de outras cidades do Vale do Taquari?", answer: "Sim. Atendemos Estrela, Encantado, Teutônia, Arroio do Meio e as demais cidades do Vale do Taquari com retirada em loja ou envio por transportadora e motoboy, conforme a distância." },
];

const related = [
  { label: "Gaxetas hidráulicas", to: "/gaxetas/" },
  { label: "Raspadores hidráulicos", to: "/raspadores/" },
  { label: "Anéis O-ring", to: "/aneis-vedacao/" },
  { label: "Catálogo completo de vedações", to: "/vedacoes/" },
  { label: "Vedações no Vale do Taquari", to: "/vedacoes-vale-do-taquari/" },
];

useSeoMeta({
  title: "Kits de Reparo para Cilindros Hidráulicos e Retentores",
  description:
    "Kit de reparo de cilindro hidráulico: o que vem no kit, como informar as medidas, quando reparar ou substituir e retentores de eixo. Montagem em Lajeado para todo o Vale do Taquari.",
  ogTitle: "Kits de Reparo para Cilindros Hidráulicos | Vimasi Vedações",
  ogDescription: "Kits completos de vedação por medida ou modelo de máquina. Loja em Lajeado/RS.",
  ogImage: `${business.url}/og/kits-reparo.jpg`,
  ogType: "article",
  articlePublishedTime: `${datePublished}T09:00:00-03:00`,
  articleModifiedTime: `${dateModified}T09:00:00-03:00`,
  twitterCard: "summary_large_image",
});

useSchemaOrg([
  defineWebPage({ "@type": ["WebPage", "FAQPage"] }),
  defineArticle({
    headline: "Kits de Reparo para Cilindros Hidráulicos: composição, medidas e retentores",
    description: "Guia sobre kits de reparo e retentores para cilindros e bombas hidráulicas.",
    image: `${business.url}/og/kits-reparo.jpg`,
    datePublished,
    dateModified,
    inLanguage: "pt-BR",
  }),
  defineProduct({
    name: "Kits de reparo para cilindros hidráulicos",
    description: "Conjuntos completos de vedações (gaxetas, raspador, anéis guia, O-rings) montados por medida ou modelo de máquina, e retentores de eixo.",
    image: `${business.url}/og/kits-reparo.jpg`,
    brand: { "@type": "Brand", name: business.name },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "BRL",
      url: `${business.url}/kits-reparo/`,
      seller: { "@id": `${business.url}/#identity` },
    },
  }),
]);
</script>
