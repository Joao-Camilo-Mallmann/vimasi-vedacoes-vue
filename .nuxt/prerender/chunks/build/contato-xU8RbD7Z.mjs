import { defineComponent, mergeProps, useSSRContext } from 'file:///home/joao/projects/vimasi-vedacoes-vue2/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from 'file:///home/joao/projects/vimasi-vedacoes-vue2/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0 } from './contact-bg-ioU1kNHy.mjs';
import { u as useHead } from './composables-BcaizT6A.mjs';
import '../_/renderer.mjs';
import 'file:///home/joao/projects/vimasi-vedacoes-vue2/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/joao/projects/vimasi-vedacoes-vue2/node_modules/h3/dist/index.mjs';
import 'file:///home/joao/projects/vimasi-vedacoes-vue2/node_modules/ufo/dist/index.mjs';
import 'file:///home/joao/projects/vimasi-vedacoes-vue2/node_modules/destr/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///home/joao/projects/vimasi-vedacoes-vue2/node_modules/hookable/dist/index.mjs';
import 'file:///home/joao/projects/vimasi-vedacoes-vue2/node_modules/ofetch/dist/node.mjs';
import 'file:///home/joao/projects/vimasi-vedacoes-vue2/node_modules/node-mock-http/dist/index.mjs';
import 'file:///home/joao/projects/vimasi-vedacoes-vue2/node_modules/unstorage/dist/index.mjs';
import 'file:///home/joao/projects/vimasi-vedacoes-vue2/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///home/joao/projects/vimasi-vedacoes-vue2/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/joao/projects/vimasi-vedacoes-vue2/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/joao/projects/vimasi-vedacoes-vue2/node_modules/ohash/dist/index.mjs';
import 'file:///home/joao/projects/vimasi-vedacoes-vue2/node_modules/klona/dist/index.mjs';
import 'file:///home/joao/projects/vimasi-vedacoes-vue2/node_modules/defu/dist/defu.mjs';
import 'file:///home/joao/projects/vimasi-vedacoes-vue2/node_modules/scule/dist/index.mjs';
import 'file:///home/joao/projects/vimasi-vedacoes-vue2/node_modules/unctx/dist/index.mjs';
import 'file:///home/joao/projects/vimasi-vedacoes-vue2/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/joao/projects/vimasi-vedacoes-vue2/node_modules/pathe/dist/index.mjs';
import 'file:///home/joao/projects/vimasi-vedacoes-vue2/node_modules/unhead/dist/server.mjs';
import 'file:///home/joao/projects/vimasi-vedacoes-vue2/node_modules/devalue/index.js';
import 'file:///home/joao/projects/vimasi-vedacoes-vue2/node_modules/unhead/dist/utils.mjs';
import './server.mjs';
import 'file:///home/joao/projects/vimasi-vedacoes-vue2/node_modules/vue-router/vue-router.node.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contato",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Contato | Vimasi Veda\xE7\xF5es",
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Vimasi Veda\xE7\xF5es",
            image: "https://vimasivedacoes.com.br/assets/images/logo.png",
            // Update with actual URL if possible
            telephone: "+555196194676",
            email: "vimasicomerciopecas@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "R. Eug\xEAnia Mello de Oliveira Kirchheim, 151",
              addressLocality: "Lajeado",
              addressRegion: "RS",
              postalCode: "95902-150",
              addressCountry: "BR"
            },
            url: "https://vimasivedacoes.com.br"
          })
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contact-page" }, _attrs))}><section class="relative flex h-[50vh] items-center justify-center overflow-hidden"><div class="absolute inset-0 z-0"><img${ssrRenderAttr("src", _imports_0)} alt="Entre em contato com a Vimasi Veda\xE7\xF5es" class="h-full w-full object-cover"><div class="to-primary-dark absolute inset-0 bg-linear-gradient-to-b from-black/70 via-black/50"></div><div class="grain absolute inset-0 opacity-30"></div></div><div class="relative z-10 text-center"><h1 class="font-anton animate-fade-in-up mb-4 text-5xl text-white uppercase italic sm:text-7xl"> Fale <span class="text-accent-red">Conosco</span></h1><p class="font-arimo animate-fade-in-up text-lg text-white/80" style="${ssrRenderStyle({ "animation-delay": "0.1s" })}"> Estamos prontos para atender sua solicita\xE7\xE3o. </p></div></section><section class="bg-primary-dark py-24"><div class="container mx-auto px-4"><div class="grid grid-cols-1 gap-16 lg:grid-cols-2"><div class="space-y-12"><div><h2 class="font-anton mb-8 text-4xl text-white uppercase italic"> Canais de <span class="text-accent-gold">Atendimento</span></h2><p class="font-arimo text-lg leading-relaxed text-white/70"> Precisa de um or\xE7amento ou tem d\xFAvidas t\xE9cnicas sobre nossos produtos? Entre em contato pelos canais abaixo ou venha nos visitar. </p></div><div class="space-y-6"><a href="https://wa.me/555196194676" target="_blank" class="group glass flex items-center gap-6 rounded-2xl p-6 transition-all hover:-translate-x-2 hover:bg-white/5"><div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 transition-transform group-hover:scale-110"><svg class="h-8 w-8 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg></div><div><h3 class="font-anton mb-1 text-xl text-white uppercase italic"> WhatsApp </h3><p class="font-arimo text-lg text-white/60"> (51) 99619-4676 </p></div></a><a href="mailto:vimasicomerciopecas@gmail.com" class="group glass flex items-center gap-6 rounded-2xl p-6 transition-all hover:-translate-x-2 hover:bg-white/5"><div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#3B82F6]/10 transition-transform group-hover:scale-110"><svg class="h-8 w-8 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div><div><h3 class="font-anton mb-1 text-xl text-white uppercase italic"> E-mail </h3><p class="font-arimo text-lg break-all text-white/60"> vimasicomerciopecas@gmail.com </p></div></a><a href="https://maps.app.goo.gl/VQzXHJzPMdCavSP56" target="_blank" class="group glass flex items-center gap-6 rounded-2xl p-6 transition-all hover:-translate-x-2 hover:bg-white/5"><div class="bg-accent-red/10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full transition-transform group-hover:scale-110"><svg class="text-accent-red h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div><div><h3 class="font-anton mb-1 text-xl text-white uppercase italic"> Endere\xE7o </h3><p class="font-arimo text-lg text-white/60"> R. Eug\xEAnia Mello de Oliveira Kirchheim, 151<br> Bom Pastor, Lajeado - RS </p></div></a></div></div><div class="glass relative overflow-hidden rounded-2xl p-2 lg:h-full"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.994503714574!2d-51.986835223746675!3d-29.37050317526978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951c6198083890f1%3A0x6b1db90e29202524!2sR.%20Eug%C3%AAnia%20Mello%20de%20Oliveira%20Kirchheim%2C%20151%20-%20S%C3%A3o%20Bento%2C%20Lajeado%20-%20RS%2C%2095902-150!5e0!3m2!1spt-BR!2sbr!4v1709664582697!5m2!1spt-BR!2sbr" class="h-full min-h-[400px] w-full rounded-xl grayscale filter transition-all duration-500 hover:grayscale-0" style="${ssrRenderStyle({ "border": "0" })}" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contato.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contato-xU8RbD7Z.mjs.map
