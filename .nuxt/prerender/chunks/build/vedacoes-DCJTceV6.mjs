import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { defineComponent, mergeProps, useSSRContext } from 'file:///home/joao/projects/vimasi-vedacoes-vue2/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'file:///home/joao/projects/vimasi-vedacoes-vue2/node_modules/vue/server-renderer/index.mjs';
import { u as useHead } from './composables-BcaizT6A.mjs';
import './server.mjs';
import 'file:///home/joao/projects/vimasi-vedacoes-vue2/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///home/joao/projects/vimasi-vedacoes-vue2/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/joao/projects/vimasi-vedacoes-vue2/node_modules/h3/dist/index.mjs';
import 'file:///home/joao/projects/vimasi-vedacoes-vue2/node_modules/ufo/dist/index.mjs';
import 'file:///home/joao/projects/vimasi-vedacoes-vue2/node_modules/destr/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///home/joao/projects/vimasi-vedacoes-vue2/node_modules/hookable/dist/index.mjs';
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
import 'file:///home/joao/projects/vimasi-vedacoes-vue2/node_modules/vue-router/vue-router.node.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "vedacoes",
  __ssrInlineRender: true,
  setup(__props) {
    const getImageUrl = (i) => {
      return new URL(`../../assets/images/product-${i}.png`, globalThis._importMeta_.url).href;
    };
    useHead({
      title: "Produtos | Vimasi Veda\xE7\xF5es"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "products-view bg-primary-dark relative min-h-screen overflow-hidden pt-20" }, _attrs))}><div class="from-accent-gold/5 bg-linear-gradient-to-b pointer-events-none absolute top-0 left-0 h-1/2 w-full to-transparent"></div><div class="bg-accent-red/5 pointer-events-none absolute right-0 bottom-0 h-1/3 w-1/3 rounded-full blur-[100px]"></div><div class="relative z-10 container mx-auto px-4 py-12"><div class="mb-16 text-center"><h1 class="font-anton animate-fade-in-up bg-linear-gradient-to-r mb-6 from-white via-white to-white/50 bg-clip-text text-5xl text-transparent uppercase italic md:text-7xl"> Nossas <span class="text-accent-gold">Veda\xE7\xF5es</span></h1><p class="font-arimo animate-fade-in-up mx-auto max-w-2xl text-lg text-white/60" style="${ssrRenderStyle({ "animation-delay": "0.1s" })}"> Conhe\xE7a nossa linha completa de produtos de alta performance para todas as aplica\xE7\xF5es industriais. </p></div><div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(8, (i) => {
        _push(`<div class="group glass animate-fade-in-up relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/5" style="${ssrRenderStyle(`animation-delay: ${0.1 * i}s`)}"><div class="relative aspect-[4/3] overflow-hidden"><div class="from-primary-dark/80 absolute inset-0 z-10 bg-gradient-to-t to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40"></div><img${ssrRenderAttr("src", getImageUrl(i))}${ssrRenderAttr("alt", `Produto ${i}`)} class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"></div><div class="relative z-20 p-6"><div class="mb-2 flex items-end justify-between"><h3 class="font-anton group-hover:text-accent-gold text-2xl text-white uppercase italic transition-colors"> Produto ${ssrInterpolate(i)}</h3><span class="text-accent-gold translate-x-2 transform opacity-0 transition-opacity duration-300 group-hover:translate-x-0 group-hover:opacity-100"><svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></span></div><p class="font-arimo line-clamp-2 text-sm text-white/60 transition-colors group-hover:text-white/80"> Solu\xE7\xE3o ideal para aplica\xE7\xF5es que exigem alta resist\xEAncia e durabilidade. Consulte as especifica\xE7\xF5es t\xE9cnicas. </p></div><div class="group-hover:border-accent-gold/30 pointer-events-none absolute inset-0 rounded-2xl border-2 border-white/0 transition-colors duration-500"></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/vedacoes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=vedacoes-DCJTceV6.mjs.map
