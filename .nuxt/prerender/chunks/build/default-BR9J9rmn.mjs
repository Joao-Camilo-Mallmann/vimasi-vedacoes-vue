import { a as buildAssetsURL } from '../_/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-hCujPBcQ.mjs';
import { defineComponent, mergeProps, ref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'file:///home/joao/projects/vimasi-vedacoes-vue2/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from 'file:///home/joao/projects/vimasi-vedacoes-vue2/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
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
import 'file:///home/joao/projects/vimasi-vedacoes-vue2/node_modules/vue-router/vue-router.node.mjs';

const _imports_0 = "" + buildAssetsURL("logo.o5wijOX-.png");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const mobileMenuOpen = ref(false);
    const menuItems = [
      { label: "Home", to: "/" },
      { label: "Gaxetas", to: "/gaxetas" },
      { label: "An\xE9is", to: "/aneis-vedacao" },
      { label: "Contato", to: "/contato" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "glass-strong sticky top-0 z-50 transition-all duration-300" }, _attrs))} data-v-ae6945ab><div class="container mx-auto px-4 md:px-6" data-v-ae6945ab><div class="flex items-center justify-between py-3 md:py-4" data-v-ae6945ab>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "group flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Vimasi Veda\xE7\xF5es" class="h-10 object-contain transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] md:h-[52px]" data-v-ae6945ab${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Vimasi Veda\xE7\xF5es",
                class: "h-10 object-contain transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] md:h-[52px]"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden items-center gap-10 md:flex" data-v-ae6945ab><!--[-->`);
      ssrRenderList(menuItems, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.to,
          to: item.to,
          class: "font-arimo hover:text-accent-gold group relative text-sm font-medium tracking-widest text-white/80 uppercase transition-all duration-300 hover:scale-105"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.label)} <span class="bg-accent-gold absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full" data-v-ae6945ab${_scopeId}></span>`);
            } else {
              return [
                createTextVNode(toDisplayString(item.label) + " ", 1),
                createVNode("span", { class: "bg-accent-gold absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full" })
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--><a href="https://wa.me/555196194676" target="_blank" class="group relative overflow-hidden rounded-full bg-[#25D366] px-6 py-2.5 text-xs font-bold tracking-wide text-white uppercase shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#20bd5a] hover:shadow-[#25D366]/30" data-v-ae6945ab><span class="relative z-10 flex items-center gap-2" data-v-ae6945ab><svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" data-v-ae6945ab><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-v-ae6945ab></path></svg> WhatsApp </span><span class="bg-linear-gradient-to-r absolute inset-0 -z-0 from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" data-v-ae6945ab></span></a></nav><button class="hover:text-accent-gold relative z-50 p-2 text-white transition-colors md:hidden" aria-label="Menu"${ssrRenderAttr("aria-expanded", mobileMenuOpen.value)} data-v-ae6945ab><div class="flex flex-col gap-1.5" data-v-ae6945ab><span class="${ssrRenderClass([{ "translate-y-2 rotate-45": mobileMenuOpen.value }, "block h-0.5 w-6 bg-current transition-all duration-300"])}" data-v-ae6945ab></span><span class="${ssrRenderClass([{ "opacity-0": mobileMenuOpen.value }, "block h-0.5 w-6 bg-current transition-all duration-300"])}" data-v-ae6945ab></span><span class="${ssrRenderClass([{ "-translate-y-2 -rotate-45": mobileMenuOpen.value }, "block h-0.5 w-6 bg-current transition-all duration-300"])}" data-v-ae6945ab></span></div></button></div></div>`);
      if (mobileMenuOpen.value) {
        _push(`<div class="bg-primary-dark/95 fixed inset-0 z-40 flex flex-col items-center justify-center backdrop-blur-xl" data-v-ae6945ab><nav class="flex flex-col items-center gap-8" data-v-ae6945ab><!--[-->`);
        ssrRenderList(menuItems, (item, index) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: item.to,
            to: item.to,
            onClick: ($event) => mobileMenuOpen.value = false,
            class: "font-anton hover:text-accent-gold text-4xl tracking-wider text-white uppercase transition-all duration-300 hover:scale-110",
            style: {
              animation: `fadeInUp 0.5s ease-out forwards ${index * 0.1}s`,
              opacity: 0
            }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--><a href="https://wa.me/555196194676" target="_blank" class="font-arimo mt-8 flex items-center gap-3 rounded-full border border-[#25D366] px-8 py-3 text-lg font-bold tracking-wide text-[#25D366] uppercase transition-all active:scale-95" style="${ssrRenderStyle({
          animation: `fadeInUp 0.5s ease-out forwards 0.4s`,
          opacity: 0
        })}" data-v-ae6945ab><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" data-v-ae6945ab><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" data-v-ae6945ab></path></svg> WhatsApp </a></nav></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-ae6945ab"]]), { __name: "AppHeader" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const navigationItems = [
      { label: "Home", to: "/" },
      { label: "Gaxetas", to: "/gaxetas" },
      { label: "An\xE9is", to: "/aneis-vedacao" },
      { label: "Contato", to: "/contato" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-primary-dark relative overflow-hidden py-20 text-white" }, _attrs))}><div class="absolute inset-0 z-0"><div class="from-accent-red/5 via-primary-dark/95 to-primary-dark absolute inset-0 bg-linear-to-b"></div></div><div class="grain pointer-events-none absolute inset-0 opacity-20"></div><div class="via-accent-gold/30 absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent to-transparent"></div><div class="relative z-10 container mx-auto px-4"><div class="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8"><div class="space-y-6"><img${ssrRenderAttr("src", _imports_0)} alt="Vimasi Veda\xE7\xF5es" class="h-14 object-contain opacity-90"><p class="font-arimo max-w-xs text-base leading-relaxed text-white/60"> Especialistas em veda\xE7\xF5es hidr\xE1ulicas de alta qualidade. Oferecendo solu\xE7\xF5es completas e personalizadas para cada necessidade. </p><div class="flex gap-4 pt-2"><a href="https://www.instagram.com/vimasi_pecas/" target="_blank" class="hover:bg-accent-gold hover:text-primary-dark group hover:border-accent-gold flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:scale-110" aria-label="Instagram"><svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg></a><a href="https://wa.me/555196194676" target="_blank" class="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:scale-110 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white" aria-label="WhatsApp"><svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg></a></div></div><div class="space-y-6"><h3 class="font-anton mb-6 text-sm tracking-widest text-white/40 uppercase"> Navega\xE7\xE3o </h3><nav class="flex flex-col gap-4"><!--[-->`);
      ssrRenderList(navigationItems, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.to,
          to: item.to,
          class: "font-arimo hover:text-accent-gold group flex items-center gap-3 text-sm text-white/70 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="group-hover:bg-accent-gold h-px w-4 bg-white/20 transition-all group-hover:w-8"${_scopeId}></span> ${ssrInterpolate(item.label)}`);
            } else {
              return [
                createVNode("span", { class: "group-hover:bg-accent-gold h-px w-4 bg-white/20 transition-all group-hover:w-8" }),
                createTextVNode(" " + toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav></div><div class="space-y-6"><h3 class="font-anton mb-6 text-sm tracking-widest text-white/40 uppercase"> Contato </h3><div class="flex flex-col gap-5"><div class="group flex items-start gap-4"><div class="text-accent-gold mt-1 flex h-8 w-8 items-center justify-center rounded bg-white/5 transition-colors group-hover:bg-[#25D366] group-hover:text-white"><svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></div><div><span class="mb-1 block text-xs tracking-wider text-white/40 uppercase">Telefone</span><a href="tel:+555196194676" class="font-arimo text-sm text-white/90 transition-colors hover:text-[#25D366]"> (51) 99619-4676 </a></div></div><div class="group flex items-start gap-4"><div class="text-accent-gold mt-1 flex h-8 w-8 items-center justify-center rounded bg-white/5 transition-colors group-hover:bg-[#3B82F6] group-hover:text-white"><svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div><div><span class="mb-1 block text-xs tracking-wider text-white/40 uppercase">E-mail</span><a href="mailto:vimasicomerciopecas@gmail.com" class="font-arimo text-sm break-all text-white/90 transition-colors hover:text-[#3B82F6]"> vimasicomerciopecas@gmail.com </a></div></div></div></div><div class="space-y-6"><h3 class="font-anton mb-6 text-sm tracking-widest text-white/40 uppercase"> Localiza\xE7\xE3o </h3><div class="group flex items-start gap-4"><div class="text-accent-gold group-hover:bg-accent-red mt-1 flex h-8 w-8 items-center justify-center rounded bg-white/5 transition-colors group-hover:text-white"><svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div><div><p class="font-arimo mb-3 text-sm leading-relaxed text-white/70"> R. Eug\xEAnia Mello de Oliveira Kirchheim, 151<br> Bom Pastor, Lajeado - RS<br> CEP: 95905-699 </p><a href="https://maps.app.goo.gl/VQzXHJzPMdCavSP56" target="_blank" class="text-accent-gold hover:text-accent-red inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase transition-colors"> Ver no mapa <svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></a><div class="mt-4 h-32 w-full overflow-hidden rounded-lg border border-white/10"><iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=R.+Eug\xEAnia+Mello+de+Oliveira+Kirchheim,+151,+Lajeado+-+RS&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" class="h-full w-full opacity-70 contrast-[0.85] grayscale invert transition-all duration-500"></iframe></div></div></div></div></div><div class="my-8 border-t border-white/5"></div><div class="flex flex-col items-center justify-between gap-4 md:flex-row"><p class="font-arimo text-center text-xs text-white/40"> \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Vimasi Veda\xE7\xF5es. Todos os direitos reservados. </p><div class="flex gap-6"><span class="font-arimo text-xs text-white/40">Desenvolvido com <span class="text-accent-red">\u2665</span> por Antigravity</span></div></div></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$1, { __name: "AppFooter" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = __nuxt_component_0;
      const _component_AppFooter = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "app",
        class: "bg-primary-dark grain min-h-screen"
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-BR9J9rmn.mjs.map
