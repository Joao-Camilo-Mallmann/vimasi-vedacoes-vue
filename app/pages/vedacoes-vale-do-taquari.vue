<template>
  <div class="region-page">
    <PageHero
      image="/home/contact-bg.webp"
      image-alt="Vimasi Vedações, loja de vedações hidráulicas em Lajeado que atende o Vale do Taquari"
      :breadcrumb="[{ label: 'Vale do Taquari', to: '/vedacoes-vale-do-taquari/' }]"
      :updated-at="dateModified"
    >
      <template #title>
        Vedações Hidráulicas no <span class="text-accent-gold">Vale do Taquari</span>
      </template>
      A Vimasi Vedações fica em Lajeado ({{ business.address.streetAddress }}, {{ business.address.neighborhood }})
      e atende indústrias, oficinas e produtores rurais de todo o Vale do Taquari com gaxetas,
      O-rings, raspadores e kits de reparo para cilindros hidráulicos.
    </PageHero>

    <!-- What we supply -->
    <section class="bg-primary-dark relative overflow-hidden py-24">
      <div class="bg-accent-gold/5 absolute top-0 right-0 h-full w-1/3 translate-x-1/2 rounded-full blur-[100px]"></div>
      <div class="relative z-10 container mx-auto px-4">
        <h2 class="font-anton mb-4 text-center text-4xl text-white uppercase italic md:text-5xl">
          O que <span class="text-accent-red">fornecemos</span>
        </h2>
        <p class="font-arimo mx-auto mb-16 max-w-2xl text-center text-lg text-white/60">
          Pronta entrega das vedações mais usadas na região e usinagem sob medida para o restante.
        </p>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <ProductCard v-for="item in featured" :key="item.id" :item="item" />
        </div>
      </div>
    </section>

    <!-- Cities -->
    <section class="bg-primary-dark py-24">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-4xl">
          <h2 class="font-anton mb-8 text-center text-4xl text-white uppercase italic md:text-5xl">
            Cidades <span class="text-accent-gold">atendidas</span>
          </h2>
          <div class="font-arimo space-y-6 text-lg leading-relaxed text-white/80">
            <p>
              Atendemos todas as cidades do Vale do Taquari, com retirada na loja em Lajeado ou envio
              por transportadora e motoboy, conforme a distância:
            </p>
            <ul class="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
              <li v-for="city in business.cities" :key="city" class="flex items-center gap-2">
                <span class="bg-accent-gold h-px w-3"></span>{{ city }}
              </li>
            </ul>
            <p>
              Também enviamos para regiões vizinhas, como {{ business.nearbyRegions.join(", ") }}, e
              para todo o Rio Grande do Sul.
            </p>
          </div>

          <div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div v-for="hub in hubs" :key="hub.name" class="glass rounded-2xl p-6">
              <h3 class="font-anton mb-2 text-xl text-white uppercase italic">{{ hub.name }}</h3>
              <p class="font-arimo text-white/70">{{ hub.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sectors -->
    <section class="bg-primary-dark relative overflow-hidden py-24">
      <div class="bg-accent-red/5 absolute bottom-0 left-0 h-full w-1/3 -translate-x-1/2 rounded-full blur-[100px]"></div>
      <div class="relative z-10 container mx-auto px-4">
        <h2 class="font-anton mb-4 text-center text-4xl text-white uppercase italic md:text-5xl">
          Setores da região e <span class="text-accent-red">vedações típicas</span>
        </h2>
        <p class="font-arimo mx-auto mb-16 max-w-2xl text-center text-lg text-white/60">
          O Vale do Taquari concentra agroindústria, metalmecânica, alimentos e transporte; cada um
          desgasta o cilindro de um jeito.
        </p>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div v-for="sector in sectors" :key="sector.name" class="glass rounded-2xl p-8 transition-all duration-500 hover:bg-white/5">
            <h3 class="font-anton mb-3 text-2xl text-white uppercase italic">{{ sector.name }}</h3>
            <p class="font-arimo mb-3 text-white/80">{{ sector.equipment }}</p>
            <p class="font-arimo text-sm text-white/60"><strong class="text-accent-gold">Vedações típicas:</strong> {{ sector.seals }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="bg-primary-dark py-24">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-5xl">
          <h2 class="font-anton mb-12 text-center text-4xl text-white uppercase italic md:text-5xl">
            Como funciona o <span class="text-accent-gold">atendimento</span>
          </h2>
          <ol class="grid grid-cols-1 gap-6 md:grid-cols-3">
            <li v-for="(step, index) in steps" :key="step.title" class="glass rounded-2xl p-8">
              <span class="font-anton text-accent-red mb-4 block text-5xl italic">0{{ index + 1 }}</span>
              <h3 class="font-anton mb-3 text-xl text-white uppercase italic">{{ step.title }}</h3>
              <p class="font-arimo text-white/70">{{ step.description }}</p>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <!-- Map -->
    <section class="bg-primary-dark py-24">
      <div class="container mx-auto px-4">
        <div class="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 class="font-anton mb-6 text-4xl text-white uppercase italic md:text-5xl">
              Nossa loja em <span class="text-accent-red">Lajeado</span>
            </h2>
            <p class="font-arimo mb-4 text-lg text-white/80">
              {{ business.addressLine }}
            </p>
            <p class="font-arimo mb-6 text-white/70">
              {{ business.hours.display }}. WhatsApp {{ business.phoneDisplay }}.
            </p>
            <a
              :href="business.mapsUrl"
              target="_blank"
              rel="noopener"
              class="text-accent-gold hover:text-accent-red inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase transition-colors"
            >
              Ver no Google Maps
              <Icon name="lucide:arrow-right" />
            </a>
          </div>
          <div class="h-72 w-full overflow-hidden rounded-2xl border border-white/10">
            <iframe
              :src="business.mapsEmbedUrl"
              title="Mapa: Vimasi Vedações em Lajeado/RS"
              width="100%"
              height="100%"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="h-full w-full opacity-80 contrast-[0.85] grayscale invert"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <FaqSection :faqs="faqs" subtitle="Dúvidas sobre atendimento, entrega e identificação de peças." />

    <RelatedLinks :links="related" />

    <CtaSection
      whatsapp-message="Olá, sou do Vale do Taquari e preciso de vedações hidráulicas"
      :secondary="{ label: 'Ver Catálogo', to: '/vedacoes/' }"
    >
      <template #title>Vedações para o <span class="text-accent-gold">Vale do Taquari</span></template>
      Envie uma foto da vedação antiga ou as medidas do cilindro pelo WhatsApp e receba o orçamento
      com prazo de retirada ou entrega para a sua cidade.
    </CtaSection>
  </div>
</template>

<script setup lang="ts">
import { business, catalog } from "~/data/business";

const dateModified = "2026-10-29";
const featured = catalog.filter((item) => item.hasPage);

const hubs = [
  { name: "Lajeado e Estrela", description: "Polo metalmecânico e de agroindústrias; prensas, injetoras, empilhadeiras e frotas de caminhões." },
  { name: "Encantado, Teutônia e Arroio do Meio", description: "Frigoríficos, laticínios e indústrias de alimentos; atuadores, prensas e lavadoras com vedações compatíveis com o processo." },
  { name: "Roca Sales, Muçum e Imigrante", description: "Avicultura, suinocultura e máquinas agrícolas de pequeno e médio porte." },
  { name: "Taquari, Bom Retiro do Sul e Cruzeiro do Sul", description: "Agricultura, extração e logística no eixo da BR-386; basculantes, retroescavadeiras e colheitadeiras." },
];

const sectors = [
  { name: "Agroindústria e agricultura", equipment: "Tratores, colheitadeiras, plantadeiras, pulverizadores, carregadores e implementos.", seals: "gaxetas em poliuretano, raspadores de lábio duplo, kits de reparo por modelo de máquina." },
  { name: "Metalmecânica", equipment: "Prensas hidráulicas, dobradeiras, injetoras, guilhotinas e máquinas de usinagem.", seals: "capped seal, gaxetas de alta pressão, anéis guia em PTFE, O-rings em Viton." },
  { name: "Alimentos", equipment: "Prensas, lavadoras, atuadores e dosadores de frigoríficos, laticínios e agroindústrias.", seals: "O-rings em silicone e EPDM, gaxetas em PTFE, retentores em Viton." },
  { name: "Transporte e construção", equipment: "Caminhões basculantes, guindautos, plataformas, empilhadeiras, escavadeiras e retroescavadeiras.", seals: "conjuntos OEOD, raspadores metálicos, gaxetas de haste, kits telescópicos." },
];

const steps = [
  { title: "Identificação", description: "Envie pelo WhatsApp a foto da vedação antiga, as medidas do alojamento ou o modelo da máquina. Se preferir, traga a peça à loja." },
  { title: "Orçamento", description: "Respondemos com perfil, material, disponibilidade e prazo. Vedações de linha costumam ter pronta entrega." },
  { title: "Retirada ou envio", description: "Retire em Lajeado ou receba por motoboy nas cidades próximas e por transportadora no restante do Vale do Taquari e do RS." },
];

const faqs = [
  { question: "Vocês entregam em Estrela, Encantado e Teutônia?", answer: "Sim. Para Estrela, Cruzeiro do Sul e Arroio do Meio normalmente usamos motoboy; para Encantado, Teutônia e as demais cidades do Vale do Taquari enviamos por transportadora, com prazo informado no orçamento." },
  { question: "Posso levar a vedação antiga para identificar?", answer: "Sim, é a forma mais segura. Na loja em Lajeado medimos a peça antiga ou o próprio cilindro e indicamos o perfil e o material corretos." },
  { question: "Atendem fora do Vale do Taquari?", answer: "Sim. Enviamos por transportadora para o Vale do Rio Pardo, a Serra Gaúcha, a Região Metropolitana de Porto Alegre e todo o Rio Grande do Sul." },
  { question: "Qual o horário de atendimento da loja?", answer: `${business.hours.display}, na ${business.addressLine}. Fora do horário, mensagens no WhatsApp ${business.phoneDisplay} são respondidas no próximo dia útil.` },
];

const related = [
  { label: "Catálogo completo de vedações", to: "/vedacoes/" },
  { label: "Gaxetas hidráulicas", to: "/gaxetas/" },
  { label: "Kits de reparo para cilindros", to: "/kits-reparo/" },
  { label: "Raspadores hidráulicos", to: "/raspadores/" },
  { label: "Contato e orçamento", to: "/contato/" },
];

useSeoMeta({
  title: "Vedações Hidráulicas no Vale do Taquari",
  description:
    "Gaxetas, anéis O-ring, raspadores e kits de reparo para cilindros hidráulicos em Lajeado, Estrela, Encantado, Teutônia, Arroio do Meio e todo o Vale do Taquari. Retirada em loja ou envio.",
  ogTitle: "Vedações Hidráulicas no Vale do Taquari | Vimasi Vedações",
  ogDescription: "Loja em Lajeado/RS com atendimento a todas as cidades do Vale do Taquari.",
  ogImage: `${business.url}/og/vale-do-taquari.jpg`,
  ogType: "website",
  articleModifiedTime: `${dateModified}T09:00:00-03:00`,
  twitterCard: "summary_large_image",
});

useSchemaOrg([
  defineWebPage({
    "@type": ["WebPage", "FAQPage"],
    about: { "@id": `${business.url}/#identity` },
  }),
]);
</script>
