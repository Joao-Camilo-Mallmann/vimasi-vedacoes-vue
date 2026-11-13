<template>
  <section id="orcamento" class="bg-primary-card scroll-mt-20 py-20 text-white lg:py-28">
    <div class="container mx-auto px-4 md:px-6">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-7">
          <QuoteForm />
        </div>

        <div id="contato" class="scroll-mt-24 lg:col-span-5">
          <h2 class="font-anton text-4xl leading-tight uppercase italic md:text-5xl">Ou fale direto com a loja</h2>
          <p class="font-arimo mt-4 text-lg text-white/70">
            Mande uma foto da peça ou as medidas pelo WhatsApp e respondemos com disponibilidade e preço.
          </p>

          <dl class="font-arimo mt-8 divide-y divide-white/10 border-y border-white/10">
            <div class="py-5">
              <dt class="text-sm text-white/55">WhatsApp</dt>
              <dd class="mt-1 text-xl">
                <a :href="business.whatsappUrl" target="_blank" rel="noopener" class="hover:text-accent-gold underline-offset-4 hover:underline">
                  {{ business.phoneDisplay }}
                </a>
              </dd>
            </div>
            <div class="py-5">
              <dt class="text-sm text-white/55">E-mail</dt>
              <dd class="mt-1 text-lg break-all">
                <a :href="`mailto:${business.email}`" class="hover:text-accent-gold underline-offset-4 hover:underline">
                  {{ business.email }}
                </a>
              </dd>
            </div>
            <div class="py-5">
              <dt class="text-sm text-white/55">Endereço</dt>
              <dd class="mt-1 text-lg">
                {{ business.address.streetAddress }} - {{ business.address.neighborhood }}<br />
                {{ business.address.addressLocality }} - {{ business.address.addressRegion }}, CEP
                {{ business.address.postalCode }}
                <a :href="business.mapsUrl" target="_blank" rel="noopener" class="text-accent-gold mt-2 block text-base font-bold underline underline-offset-4 hover:text-white">
                  Ver no mapa
                </a>
              </dd>
            </div>
            <div class="py-5">
              <dt class="text-sm text-white/55">Horário</dt>
              <dd class="mt-1 text-lg">{{ business.hours.display }}</dd>
            </div>
          </dl>

          <a
            :href="business.whatsappQuoteUrl"
            target="_blank"
            rel="noopener"
            class="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-base font-bold tracking-wide text-white uppercase transition-colors duration-200 hover:bg-[#20bd5a] sm:w-auto"
          >
            <IconWhatsApp class="h-6 w-6" />
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { business } from "~/data/business";
</script>
