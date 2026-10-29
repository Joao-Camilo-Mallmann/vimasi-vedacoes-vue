<template>
  <div class="products-page">
    <PageHero
      image="/home/hero-bg.webp"
      image-alt="Catálogo de vedações hidráulicas e industriais da Vimasi Vedações"
      :breadcrumb="[{ label: 'Produtos', to: '/vedacoes/' }]"
    >
      <template #title>
        Catálogo de <span class="text-accent-gold">Vedações</span> Hidráulicas e Industriais
      </template>
      A Vimasi Vedações (Lajeado, RS) fornece gaxetas, raspadores, anéis O-ring, anéis guia,
      kits de reparo e conjuntos de vedação para cilindros hidráulicos e pneumáticos,
      de linha ou sob medida, para todo o Vale do Taquari.
    </PageHero>

    <!-- Catalog grid -->
    <section class="bg-primary-dark relative overflow-hidden py-24">
      <div class="bg-accent-gold/5 absolute top-0 right-0 h-full w-1/3 translate-x-1/2 rounded-full blur-[100px]"></div>
      <div class="bg-accent-red/5 absolute bottom-0 left-0 h-full w-1/3 -translate-x-1/2 rounded-full blur-[100px]"></div>

      <div class="relative z-10 container mx-auto px-4">
        <h2 class="font-anton mb-4 text-center text-4xl text-white uppercase italic md:text-5xl">
          Famílias de <span class="text-accent-red">Produtos</span>
        </h2>
        <p class="font-arimo mx-auto mb-16 max-w-2xl text-center text-lg text-white/60">
          Sete famílias de vedação cobrem a manutenção completa de um cilindro hidráulico.
        </p>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ProductCard v-for="item in catalog" :key="item.id" :item="item" />
        </div>
      </div>
    </section>

    <!-- Families without own page -->
    <section class="bg-primary-dark py-24">
      <div class="container mx-auto px-4">
        <div class="mx-auto max-w-4xl space-y-16">
          <article id="aneis-guia" class="scroll-mt-24">
            <h2 class="font-anton mb-6 text-3xl text-white uppercase italic md:text-4xl">
              Anéis <span class="text-accent-gold">Guia</span>
            </h2>
            <div class="font-arimo space-y-4 text-lg leading-relaxed text-white/80">
              <p>
                Anel guia é o elemento que centraliza a haste e o pistão dentro do cilindro, absorve
                cargas laterais e evita o contato metal-metal entre as peças. Sem ele, a gaxeta
                sofre desgaste irregular e o cilindro passa a vazar.
              </p>
              <p>
                Fornecemos anéis e fitas guia em <strong>PTFE com bronze</strong>, <strong>poliamida</strong>
                e <strong>resina fenólica com tecido</strong>, em anel fechado ou fita cortada na medida do
                alojamento.
              </p>
            </div>
          </article>

          <article id="capped-seal" class="scroll-mt-24">
            <h2 class="font-anton mb-6 text-3xl text-white uppercase italic md:text-4xl">
              Conjunto <span class="text-accent-red">Capped Seal</span>
            </h2>
            <div class="font-arimo space-y-4 text-lg leading-relaxed text-white/80">
              <p>
                Capped seal é uma vedação de pistão composta por uma capa deslizante de PTFE ou
                poliuretano e um anel energizador (O-ring ou perfil quadrado) de NBR que a pressiona
                contra a camisa. É a vedação típica de pistão em cilindros de dupla ação de alta pressão.
              </p>
              <p>
                Indicada para prensas, injetoras, escavadeiras e cilindros de grande diâmetro, onde se
                exige baixo atrito, ausência de stick-slip e longa vida útil.
              </p>
            </div>
          </article>

          <article id="oeod" class="scroll-mt-24">
            <h2 class="font-anton mb-6 text-3xl text-white uppercase italic md:text-4xl">
              Conjunto <span class="text-accent-gold">OEOD</span>
            </h2>
            <div class="font-arimo space-y-4 text-lg leading-relaxed text-white/80">
              <p>
                O conjunto OEOD é uma vedação compacta de pistão para cilindros de dupla ação, formada
                por um elemento de vedação central em NBR, anéis de apoio em poliacetal ou poliamida e
                anéis guia integrados. Veda nos dois sentidos em um único alojamento.
              </p>
              <p>
                Muito usado em cilindros de máquinas agrícolas, caminhões basculantes e implementos
                rodoviários, pela montagem simples e pela resistência a picos de pressão.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <RelatedLinks :links="related" />

    <CtaSection
      whatsapp-message="Olá, não encontrei a vedação que preciso e gostaria de ajuda"
      :secondary="{ label: 'Vedações no Vale do Taquari', to: '/vedacoes-vale-do-taquari/' }"
    >
      <template #title>Não encontrou? <span class="text-accent-red">Fazemos sob medida</span></template>
      Envie a foto da vedação antiga ou as medidas do alojamento pelo WhatsApp.
      Identificamos o perfil, o material e montamos o kit completo para o seu cilindro.
    </CtaSection>
  </div>
</template>

<script setup lang="ts">
import { business, catalog } from "~/data/business";

const related = [
  { label: "Gaxetas hidráulicas", to: "/gaxetas/" },
  { label: "Raspadores hidráulicos", to: "/raspadores/" },
  { label: "Anéis O-ring", to: "/aneis-vedacao/" },
  { label: "Kits de reparo para cilindros", to: "/kits-reparo/" },
  { label: "Vedações no Vale do Taquari", to: "/vedacoes-vale-do-taquari/" },
  { label: "Contato e orçamento", to: "/contato/" },
];

useSeoMeta({
  title: "Catálogo de Vedações: Gaxetas, O-rings, Raspadores e Kits",
  description:
    "Catálogo de vedações hidráulicas e industriais da Vimasi em Lajeado/RS: gaxetas, raspadores, anéis O-ring, anéis guia, kits de reparo, capped seal e OEOD. Atendemos o Vale do Taquari.",
  ogTitle: "Catálogo de Vedações Hidráulicas | Vimasi Vedações",
  ogDescription:
    "Gaxetas, raspadores, O-rings, anéis guia e kits de reparo para cilindros hidráulicos. Loja em Lajeado/RS.",
  ogImage: `${business.url}/og/vedacoes.jpg`,
  ogType: "website",
  twitterCard: "summary_large_image",
});

useSchemaOrg([
  defineWebPage({ "@type": "CollectionPage" }),
  {
    "@type": "ItemList",
    name: "Famílias de vedações hidráulicas",
    itemListElement: catalog.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: `${business.url}${item.path}`,
    })),
  },
]);
</script>
