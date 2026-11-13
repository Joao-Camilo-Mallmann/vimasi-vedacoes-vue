<template>
  <div class="home">
    <!-- Hero: texto à esquerda, peça medida no paquímetro à direita -->
    <section id="home" class="bg-primary-dark relative isolate overflow-hidden text-white lg:flex lg:min-h-[calc(100svh-4.5rem)] lg:items-center">
      <NuxtImg
        src="/home/hero-bg.webp"
        alt="Haste de cilindro hidráulico, paquímetro medindo uma gaxeta usada e vedações novas sobre a bancada"
        fetchpriority="high"
        sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw"
        width="1376"
        height="768"
        class="h-64 w-full object-cover object-[80%_75%] sm:h-80 lg:absolute lg:inset-0 lg:-z-20 lg:h-full lg:object-[78%_center]"
      />
      <div class="hero-shade absolute inset-0 -z-10 hidden lg:block"></div>

      <div class="container mx-auto px-4 pt-8 pb-14 md:px-6 lg:py-24">
        <div class="max-w-2xl">
          <h1 class="font-anton text-5xl leading-[1.05] uppercase italic sm:text-6xl lg:text-7xl">
            Gaxetas e vedações hidráulicas
            <span class="text-accent-gold mt-3 block text-2xl leading-tight sm:text-3xl lg:text-4xl">
              em Lajeado e no Vale do Taquari
            </span>
          </h1>

          <p class="font-arimo mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            Cilindro vazando? Traga a peça antiga ou as medidas do alojamento: a Vimasi Vedações (Lajeado, RS)
            identifica e fornece gaxetas, anéis O-ring, raspadores e kits de reparo para cilindros hidráulicos, com
            retirada em loja e envio para todo o Vale do Taquari e todo o Brasil.
          </p>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#orcamento"
              class="inline-flex items-center justify-center rounded-full bg-[#d32f2f] px-8 py-4 text-base font-bold tracking-wide text-white uppercase shadow-xl transition-colors duration-200 hover:bg-[#b71c1c]"
            >
              Pedir orçamento
            </a>
            <a
              href="#como-funciona"
              class="hover:border-accent-gold hover:text-accent-gold inline-flex items-center justify-center rounded-full border-2 border-white/40 px-8 py-4 text-base font-bold tracking-wide text-white uppercase transition-colors duration-200"
            >
              Como funciona
            </a>
          </div>

          <dl class="font-arimo mt-10 grid max-w-xl grid-cols-1 gap-x-10 gap-y-4 border-t border-white/15 pt-6 text-sm sm:grid-cols-2">
            <div>
              <dt class="text-white/55">Loja</dt>
              <dd class="mt-1 text-white/90">
                {{ business.address.streetAddress }}, {{ business.address.neighborhood }}, {{ business.address.addressLocality }}
              </dd>
            </div>
            <div>
              <dt class="text-white/55">Atendimento</dt>
              <dd class="mt-1 text-white/90">{{ business.hours.display }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <!-- 2. Como resolver: não precisa saber o código -->
    <section id="como-funciona" class="bg-primary-card scroll-mt-20 py-20 text-white lg:py-28">
      <div class="container mx-auto px-4 md:px-6">
        <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div class="lg:col-span-6">
            <h2 class="font-anton text-4xl leading-tight uppercase italic md:text-5xl">
              Não sabe o código? A gente mede.
            </h2>
            <p class="font-arimo mt-6 text-lg leading-relaxed text-white/80">
              Cilindro vazando quase nunca vem com a referência da vedação. Identificamos pela peça antiga ou pelas
              medidas do alojamento e, quando não existe kit de linha, montamos um sob medida.
            </p>

            <h3 class="font-arimo mt-8 text-base font-bold text-white">O que ajuda a identificar</h3>
            <ul role="list" class="font-arimo mt-3 divide-y divide-white/10 border-y border-white/10 text-white/80">
              <li class="py-3">Foto da vedação antiga, mesmo gasta ou rasgada</li>
              <li class="py-3">Diâmetro da haste e diâmetro interno da camisa, em mm</li>
              <li class="py-3">Medidas dos alojamentos: diâmetro de fundo e largura</li>
              <li class="py-3">Marca e modelo da máquina ou do cilindro, quando houver plaqueta</li>
            </ul>
          </div>

          <NuxtImg
            src="/home/contact-bg.webp"
            alt="Gaveteiro de aço com vedações e anéis O-ring organizados por medida"
            loading="lazy"
            width="1376"
            height="768"
            sizes="100vw lg:680px"
            class="aspect-4/3 w-full rounded-2xl object-cover lg:col-span-6"
          />
        </div>

        <div class="mt-16">
          <ServiceSteps />
        </div>

        <a href="#orcamento" class="text-accent-gold font-arimo inline-block font-bold underline decoration-2 underline-offset-8 transition-colors hover:text-white mt-12">Começar pela identificação</a>
      </div>
    </section>

    <!-- 3. O que temos -->
    <section id="vedacoes" class="bg-primary-dark scroll-mt-20 py-20 lg:py-28">
      <div class="container mx-auto px-4 md:px-6">
        <div class="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div class="max-w-2xl">
            <h2 class="font-anton text-4xl text-white uppercase italic md:text-5xl">O que vai dentro do cilindro</h2>
            <p class="font-arimo mt-4 text-lg text-white/70">
              Quatro famílias resolvem a maior parte das manutenções. Se quiser entender a peça antes de pedir, cada
              uma tem um guia com tipos, materiais e como escolher.
            </p>
          </div>
          <NuxtLink to="/vedacoes/" class="text-accent-gold font-arimo inline-block font-bold underline decoration-2 underline-offset-8 transition-colors hover:text-white shrink-0">Ver catálogo completo</NuxtLink>
        </div>

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ProductCard v-for="item in featured" :key="item.id" :item="item" />
        </div>
      </div>
    </section>

    <!-- 4. Para quem: cada setor desgasta de um jeito -->
    <section class="bg-primary-card py-20 text-white lg:py-28">
      <div class="container mx-auto px-4 md:px-6">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div class="lg:col-span-5">
            <h2 class="font-anton text-4xl leading-tight uppercase italic md:text-5xl">
              Cada máquina desgasta o cilindro de um jeito
            </h2>
            <p class="font-arimo mt-6 text-lg leading-relaxed text-white/80">
              A Vimasi Vedações é uma loja especializada em vedações hidráulicas e industriais em Lajeado/RS.
              Atendemos indústrias, oficinas e produtores rurais de todo o Vale do Taquari, de máquinas agrícolas e
              prensas a escavadeiras e caminhões.
            </p>
            <div class="mt-8 grid grid-cols-2 gap-4">
              <NuxtImg
                src="/catalog/aneis-guia.webp"
                alt="Anéis guia em PTFE com bronze e resina fenólica para pistão e haste de cilindro hidráulico"
                loading="lazy"
                width="1376"
                height="768"
                sizes="50vw lg:260px"
                class="aspect-4/3 w-full rounded-2xl object-cover"
              />
              <NuxtImg
                src="/catalog/conjunto-capped-seal.webp"
                alt="Conjunto de vedação capped seal para pistão de cilindro hidráulico"
                loading="lazy"
                width="1376"
                height="768"
                sizes="50vw lg:260px"
                class="aspect-4/3 w-full rounded-2xl object-cover"
              />
            </div>
          </div>

          <dl class="font-arimo divide-y divide-white/10 border-y border-white/10 lg:col-span-7">
            <div v-for="sector in sectors" :key="sector.name" class="py-6">
              <dt class="font-anton text-2xl text-white uppercase italic">{{ sector.name }}</dt>
              <dd class="mt-2 text-white/75">{{ sector.equipment }}</dd>
              <dd class="mt-2 text-sm text-white/60">
                <span class="text-accent-gold font-bold">Vedações típicas:</span> {{ sector.seals }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <!-- 5. Onde: loja e região atendida -->
    <section id="vale-do-taquari" class="bg-primary-dark scroll-mt-20 py-20 text-white lg:py-28">
      <div class="container mx-auto px-4 md:px-6">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div class="lg:col-span-5">
            <h2 class="font-anton text-4xl leading-tight uppercase italic md:text-5xl">
              Todo o Vale do Taquari e todo o Brasil
            </h2>
            <p class="font-arimo mt-6 text-lg leading-relaxed text-white/80">
              Nossa loja fica na {{ business.address.streetAddress }} ({{ business.address.neighborhood }}), em
              Lajeado. Atendemos todas as cidades do Vale do Taquari e enviamos por transportadora para todo o
              Brasil.
            </p>
            <NuxtLink to="/vedacoes-vale-do-taquari/" class="text-accent-gold font-arimo inline-block font-bold underline decoration-2 underline-offset-8 transition-colors hover:text-white mt-8">Como atendemos o Vale do Taquari</NuxtLink>
          </div>

          <ul role="list" class="font-arimo grid grid-cols-2 content-start gap-x-8 text-white/85 sm:grid-cols-3 lg:col-span-7">
            <li v-for="city in business.cities" :key="city" class="border-b border-white/10 py-3">
              {{ city }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 6. Fechamento: orçamento e contato -->
    <QuoteContact />
  </div>
</template>

<script setup lang="ts">
import { business, catalog, sectors } from "~/data/business";

const featured = catalog.filter((item) => item.hasPage);

useSeoMeta({
  title: "Gaxetas e Vedações Hidráulicas em Lajeado e Vale do Taquari",
  description:
    "Vimasi Vedações em Lajeado/RS: gaxetas, anéis O-ring, raspadores e kits de reparo para cilindros hidráulicos. Pronta entrega e atendimento a todo o Vale do Taquari. Orçamento pelo WhatsApp.",
  ogTitle: "Vimasi Vedações | Gaxetas e Vedações Hidráulicas em Lajeado e Vale do Taquari",
  ogDescription:
    "Gaxetas, anéis O-ring, raspadores e kits de reparo para cilindros hidráulicos. Loja em Lajeado/RS, atendimento a todo o Vale do Taquari.",
  ogImage: `${business.url}/og/home.jpg`,
  ogType: "website",
  twitterCard: "summary_large_image",
});

useSchemaOrg([
  defineWebPage({
    name: "Gaxetas e Vedações Hidráulicas em Lajeado e Vale do Taquari",
  }),
]);
</script>

<style scoped>
/* Desktop: escurece a esquerda (texto) e a base. No mobile a foto fica em bloco acima do texto. */
.hero-shade {
  background:
    linear-gradient(to right, #050505 0%, rgb(5 5 5 / 0.9) 34%, rgb(5 5 5 / 0.25) 62%, transparent 100%),
    linear-gradient(to top, #050505 0%, transparent 22%);
}
</style>
