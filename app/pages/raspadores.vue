<template>
  <div class="wipers-page">
    <PageHero
      image="/catalog/raspadores.webp"
      image-alt="Raspadores de haste para cilindros hidráulicos em poliuretano e com carcaça metálica"
      :breadcrumb="breadcrumb"
      :updated-at="dateModified"
    >
      <template #title>
        Raspadores <span class="text-accent-red">Hidráulicos</span>
      </template>
      O que é um raspador de haste, quais os tipos, materiais e aplicações, e como
      ele protege a gaxeta e o cilindro contra poeira, lama e cavacos.
    </PageHero>

    <!-- Definition -->
    <section class="bg-primary-dark py-20">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-4xl">
          <h2 class="font-anton mb-8 text-center text-4xl text-white uppercase italic md:text-5xl">
            O que é um <span class="text-accent-gold">Raspador</span>?
          </h2>
          <div class="font-arimo space-y-6 text-lg leading-relaxed text-white/80">
            <p>
              <strong class="text-accent-gold">Raspador hidráulico</strong> (também chamado de
              <em>limpador</em> ou <em>wiper</em>) é o elemento de vedação montado na extremidade
              externa do cabeçote do cilindro que raspa a haste a cada recuo, impedindo a entrada de
              poeira, lama, água e cavacos para dentro do sistema.
            </p>
            <p>
              Ele não segura pressão: sua função é proteger a <NuxtLink to="/gaxetas/" class="text-accent-red hover:underline">gaxeta de haste</NuxtLink>,
              os anéis guia e o óleo hidráulico contra contaminação. Um raspador gasto é a causa mais
              comum de riscos na haste e de falha prematura da gaxeta.
            </p>
            <p>
              A Vimasi Vedações (Lajeado, RS) fornece raspadores em poliuretano, NBR e PTFE, com ou sem
              carcaça metálica, para cilindros de máquinas agrícolas, equipamentos de construção,
              prensas e caminhões de todo o Vale do Taquari.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Types -->
    <section class="bg-primary-dark relative overflow-hidden py-24">
      <div class="bg-accent-gold/5 absolute top-0 right-0 h-full w-1/3 translate-x-1/2 rounded-full blur-[100px]"></div>
      <div class="relative z-10 container mx-auto px-4">
        <h2 class="font-anton mb-4 text-center text-4xl text-white uppercase italic md:text-5xl">
          Tipos de <span class="text-accent-red">Raspadores</span>
        </h2>
        <p class="font-arimo mx-auto mb-16 max-w-2xl text-center text-lg text-white/60">
          O perfil certo depende do ambiente de trabalho e do espaço disponível no cabeçote.
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
            <h3 class="font-anton mb-3 text-2xl text-white uppercase italic">{{ type.name }}</h3>
            <p class="font-arimo text-white/70">{{ type.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Materials table -->
    <section class="bg-primary-dark py-24">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-4xl">
          <h2 class="font-anton mb-4 text-center text-4xl text-white uppercase italic md:text-5xl">
            Materiais e <span class="text-accent-gold">Temperaturas</span>
          </h2>
          <p class="font-arimo mx-auto mb-12 max-w-2xl text-center text-lg text-white/60">
            Faixas típicas de trabalho de cada material de raspador.
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

    <!-- Applications -->
    <section class="bg-primary-dark py-24">
      <div class="container mx-auto px-4">
        <h2 class="font-anton mb-4 text-center text-4xl text-white uppercase italic md:text-5xl">
          Onde o raspador é <span class="text-accent-gold">indispensável</span>
        </h2>
        <p class="font-arimo mx-auto mb-16 max-w-2xl text-center text-lg text-white/60">
          Quanto mais sujo o ambiente, mais o raspador decide a vida útil do cilindro.
        </p>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="app in applications" :key="app.name" class="glass rounded-2xl p-8 transition-all duration-500 hover:bg-white/5">
            <h3 class="font-anton mb-4 text-xl text-white uppercase italic">{{ app.name }}</h3>
            <p class="font-arimo text-white/70">{{ app.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Wear signs + comparison -->
    <section class="bg-primary-dark relative overflow-hidden py-24">
      <div class="bg-accent-red/5 absolute bottom-0 left-0 h-full w-1/3 -translate-x-1/2 rounded-full blur-[100px]"></div>
      <div class="relative z-10 container mx-auto px-4">
        <div class="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          <div class="glass rounded-2xl p-8">
            <h2 class="font-anton mb-6 text-3xl text-white uppercase italic">
              Sinais de <span class="text-accent-red">desgaste</span>
            </h2>
            <ul class="font-arimo list-disc space-y-3 pl-6 text-white/80">
              <li>Haste com riscos longitudinais ou pontos de corrosão.</li>
              <li>Acúmulo de sujeira ou pasta de óleo e poeira junto ao cabeçote.</li>
              <li>Lábio do raspador endurecido, trincado ou com folga na haste.</li>
              <li>Troca frequente de gaxeta de haste sem causa aparente.</li>
              <li>Óleo hidráulico escurecendo ou com partículas no reservatório.</li>
            </ul>
          </div>
          <div class="glass rounded-2xl p-8">
            <h2 class="font-anton mb-6 text-3xl text-white uppercase italic">
              Raspador <span class="text-accent-gold">x</span> Gaxeta
            </h2>
            <p class="font-arimo mb-4 text-white/80">
              Raspador e gaxeta não são a mesma peça. A gaxeta fica do lado de dentro do cabeçote e
              segura a pressão do óleo; o raspador fica do lado de fora e só impede a entrada de
              contaminantes.
            </p>
            <p class="font-arimo text-white/80">
              Em cilindros expostos a muita sujeira, os dois devem ser trocados juntos, em um
              <NuxtLink to="/kits-reparo/" class="text-accent-red hover:underline">kit de reparo</NuxtLink>,
              para que a nova gaxeta não seja destruída por um raspador gasto.
            </p>
          </div>
        </div>
      </div>
    </section>

    <FaqSection :faqs="faqs" subtitle="Tire suas dúvidas sobre raspadores de haste." />

    <RelatedLinks :links="related" />

    <CtaSection
      whatsapp-message="Olá, gostaria de um orçamento de raspadores hidráulicos"
      :secondary="{ label: 'Ver Gaxetas', to: '/gaxetas/' }"
    >
      <template #title>Precisa de <span class="text-accent-red">Raspadores</span>?</template>
      Informe o diâmetro da haste e do alojamento, ou envie uma foto da peça antiga pelo WhatsApp.
      Atendemos Lajeado, Vale do Taquari e todo o Rio Grande do Sul.
    </CtaSection>
  </div>
</template>

<script setup lang="ts">
import { business } from "~/data/business";

const datePublished = "2026-10-29";
const dateModified = "2026-10-29";

const breadcrumb = [
  { label: "Produtos", to: "/vedacoes/" },
  { label: "Raspadores", to: "/raspadores/" },
];

const types = [
  { name: "Lábio Simples", icon: "lucide:minus", description: "Raspador em poliuretano ou NBR com um lábio de raspagem. O mais comum em cilindros de uso geral e espaços reduzidos." },
  { name: "Lábio Duplo", icon: "lucide:equal", description: "Um lábio externo raspa a haste e um lábio interno retém a película de óleo. Reduz a saída de óleo e a entrada de sujeira." },
  { name: "Metálico", icon: "lucide:shield", description: "Elastômero vulcanizado em carcaça de aço, montado por interferência. Para cabeçotes sem canal usinado e ambientes severos." },
  { name: "PTFE", icon: "lucide:snowflake", description: "Raspador em PTFE energizado por O-ring. Baixo atrito, alta velocidade e resistência a temperaturas e químicos." },
];

const materials = [
  { name: "Poliuretano (PU)", temperature: "-30 °C a +100 °C", use: "Padrão para lama, areia e abrasão; máquinas agrícolas e de construção." },
  { name: "Borracha nitrílica (NBR)", temperature: "-30 °C a +100 °C", use: "Uso geral, pneumática e ambientes com óleo mineral." },
  { name: "PTFE", temperature: "-200 °C a +260 °C", use: "Alta velocidade, baixo atrito, químicos e temperaturas extremas." },
  { name: "Metálico (aço + NBR/PU)", temperature: "-30 °C a +100 °C", use: "Cabeçotes sem canal, montagem por interferência, serviço pesado." },
];

const applications = [
  { name: "Máquinas Agrícolas", description: "Colheitadeiras, plantadeiras, pulverizadores e carregadores que trabalham em terra, poeira e palha." },
  { name: "Escavadeiras e Retros", description: "Cilindros de lança, braço e caçamba expostos a lama, pedra e água." },
  { name: "Caminhões Basculantes", description: "Cilindros telescópicos e de caçamba que operam em pedreiras, obras e estradas de chão." },
  { name: "Prensas e Injetoras", description: "Ambientes com cavacos, rebarbas e névoa de óleo em metalúrgicas e indústrias de plástico." },
  { name: "Empilhadeiras", description: "Cilindros de elevação e inclinação em armazéns, agroindústrias e frigoríficos." },
  { name: "Guindastes e Plataformas", description: "Guindautos, munck e plataformas elevatórias com hastes longas expostas ao tempo." },
];

const faqs = [
  { question: "Qual a função do raspador em um cilindro hidráulico?", answer: "O raspador limpa a haste a cada recuo e impede que poeira, lama, água e cavacos entrem no cilindro. Ele protege a gaxeta de haste, os anéis guia e o óleo hidráulico; não é projetado para segurar pressão." },
  { question: "Raspador e gaxeta são a mesma coisa?", answer: "Não. A gaxeta fica do lado de dentro do cabeçote e veda a pressão do óleo; o raspador fica do lado de fora e apenas impede a entrada de contaminantes. Normalmente os dois são trocados juntos." },
  { question: "Quando devo trocar o raspador?", answer: "Troque o raspador quando houver acúmulo de sujeira junto ao cabeçote, lábio endurecido, trincado ou com folga, riscos na haste ou sempre que a gaxeta de haste for substituída." },
  { question: "Qual material de raspador usar em ambiente com muita poeira?", answer: "Para poeira, areia e lama o poliuretano é o mais indicado pela resistência à abrasão. Em cabeçotes sem canal usinado ou serviço muito pesado, use raspador metálico." },
  { question: "Vocês têm raspadores sob medida em Lajeado?", answer: "Sim. A Vimasi Vedações, em Lajeado/RS, fornece raspadores de linha e usinados sob medida a partir do diâmetro da haste e das medidas do alojamento, com envio para todo o Vale do Taquari." },
];

const related = [
  { label: "Gaxetas hidráulicas", to: "/gaxetas/" },
  { label: "Kits de reparo para cilindros", to: "/kits-reparo/" },
  { label: "Anéis O-ring", to: "/aneis-vedacao/" },
  { label: "Catálogo completo de vedações", to: "/vedacoes/" },
  { label: "Vedações no Vale do Taquari", to: "/vedacoes-vale-do-taquari/" },
];

useSeoMeta({
  title: "Raspadores Hidráulicos: o que são, tipos e aplicações",
  description:
    "Raspador de haste para cilindro hidráulico: função, tipos (lábio simples, duplo, metálico, PTFE), materiais e sinais de desgaste. Raspadores de linha e sob medida em Lajeado e Vale do Taquari.",
  ogTitle: "Raspadores Hidráulicos | Vimasi Vedações",
  ogDescription: "Tipos, materiais e aplicações de raspadores de haste. Loja em Lajeado/RS, atendimento ao Vale do Taquari.",
  ogImage: `${business.url}/og/raspadores.jpg`,
  ogType: "article",
  articlePublishedTime: `${datePublished}T09:00:00-03:00`,
  articleModifiedTime: `${dateModified}T09:00:00-03:00`,
  twitterCard: "summary_large_image",
});

useSchemaOrg([
  defineWebPage({ "@type": ["WebPage", "FAQPage"] }),
  defineArticle({
    headline: "Raspadores Hidráulicos: o que são, tipos, materiais e aplicações",
    description: "Guia sobre raspadores de haste para cilindros hidráulicos.",
    image: `${business.url}/og/raspadores.jpg`,
    datePublished,
    dateModified,
    inLanguage: "pt-BR",
  }),
  defineProduct({
    name: "Raspadores hidráulicos",
    description: "Raspadores de haste em poliuretano, NBR, PTFE e metálicos para cilindros hidráulicos, de linha e sob medida.",
    image: `${business.url}/og/raspadores.jpg`,
    brand: { "@type": "Brand", name: business.name },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "BRL",
      url: `${business.url}/raspadores/`,
      seller: { "@id": `${business.url}/#identity` },
    },
  }),
]);
</script>
