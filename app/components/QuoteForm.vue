<template>
  <div class="mx-auto max-w-2xl rounded-3xl bg-neutral-800/30 backdrop-blur-xl border border-white/5 p-6 sm:p-8 text-left text-white shadow-2xl relative overflow-hidden">
    <!-- Subtle background glow (reduced intensity) -->
    <div class="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-accent-red/10 blur-[100px] pointer-events-none"></div>
    <div class="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none"></div>

    <div class="mb-8 text-center relative z-10">
      <h2 class="font-anton mb-3 text-3xl sm:text-4xl uppercase italic tracking-wide">
        Fale com nossos <br/><span class="text-accent-red">Especialistas</span>
      </h2>
      <hr class="my-5 border-white/10 w-1/2 mx-auto" />
      <div class="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-red/30 bg-accent-red/10 px-4 py-1.5 text-sm font-bold tracking-wide text-accent-red">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        Apenas 2 perguntas rápidas
      </div>
      <p class="font-arimo text-base sm:text-lg text-white/70">Preencha os detalhes abaixo para agilizarmos seu atendimento via WhatsApp.</p>
    </div>

    <form class="font-arimo space-y-8 relative z-10" @submit.prevent="submitQuote">

      <!-- Nome -->
      <div class="space-y-2">
        <label class="block text-sm font-bold text-white/90">Como podemos te chamar? *</label>
        <div class="relative group">
          <input v-model="form.name" class="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 pl-12 text-white placeholder-white/40 shadow-inner outline-none transition-all hover:bg-white/10 hover:border-white/20 focus:border-accent-red focus:bg-white/10 focus:ring-1 focus:ring-accent-red" type="text" required placeholder="Digite seu nome completo" />
          <svg class="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 h-5 w-5 transition-colors group-focus-within:text-accent-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
        </div>
      </div>

      <!-- Tipo Vedação -->
      <div class="space-y-3">
        <label class="block text-sm font-bold text-white/90">Qual tipo de vedação você busca? *</label>
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <!-- Gaxeta: corte transversal U-cup -->
          <label class="cursor-pointer">
            <input v-model="form.sealType" class="peer sr-only" type="radio" value="Gaxeta" name="sealType" required />
            <div class="flex flex-col gap-2 h-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-2 py-4 text-center text-sm font-bold text-white/70 shadow-sm transition-all peer-checked:border-accent-red peer-checked:bg-accent-red peer-checked:text-white peer-checked:shadow-lg peer-checked:shadow-accent-red/20 peer-checked:scale-[1.02]">
              <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <!-- Perfil externo do U-cup -->
                <path d="M4 3h4v13c0 2.5 2 4.5 4 4.5s4-2 4-4.5V3h4" />
                <!-- Preenchimento do material da gaxeta -->
                <path d="M8 3v13c0 2.5 2 4.5 4 4.5s4-2 4-4.5V3" fill="currentColor" fill-opacity="0.12" stroke="none"/>
              </svg>
              <span>Gaxeta</span>
            </div>
          </label>

          <!-- Anel: O-ring vista superior (rosquinha) -->
          <label class="cursor-pointer">
            <input v-model="form.sealType" class="peer sr-only" type="radio" value="Anel" name="sealType" required />
            <div class="flex flex-col gap-2 h-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-2 py-4 text-center text-sm font-bold text-white/70 shadow-sm transition-all peer-checked:border-accent-red peer-checked:bg-accent-red peer-checked:text-white peer-checked:shadow-lg peer-checked:shadow-accent-red/20 peer-checked:scale-[1.02]">
              <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <!-- Material do O-ring (donut preenchido) -->
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 5.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" fill="currentColor" fill-opacity="0.12" fill-rule="evenodd" stroke="none"/>
                <!-- Circunferência externa -->
                <circle cx="12" cy="12" r="10"/>
                <!-- Furo interno -->
                <circle cx="12" cy="12" r="4.5"/>
              </svg>
              <span>Anel</span>
            </div>
          </label>

          <!-- Raspador: corte transversal com haste e lábio raspador -->
          <label class="cursor-pointer">
            <input v-model="form.sealType" class="peer sr-only" type="radio" value="Raspador" name="sealType" required />
            <div class="flex flex-col gap-2 h-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-2 py-4 text-center text-sm font-bold text-white/70 shadow-sm transition-all peer-checked:border-accent-red peer-checked:bg-accent-red peer-checked:text-white peer-checked:shadow-lg peer-checked:shadow-accent-red/20 peer-checked:scale-[1.02]">
              <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <!-- Haste/eixo do pistão -->
                <line x1="12" y1="1" x2="12" y2="23" stroke-width="2.5" opacity="0.25"/>
                <!-- Corpo do raspador -->
                <rect x="6" y="8" width="12" height="8" rx="1" fill="currentColor" fill-opacity="0.12" stroke-width="1.5"/>
                <!-- Lábios raspadores superiores (angulados para fora) -->
                <path d="M6 8L3 5M18 8L21 5" stroke-width="2"/>
                <!-- Partículas de sujeira sendo bloqueadas -->
                <circle cx="3" cy="3" r="0.8" fill="currentColor" stroke="none" opacity="0.5"/>
                <circle cx="21" cy="3" r="0.6" fill="currentColor" stroke="none" opacity="0.5"/>
                <circle cx="1" cy="6" r="0.6" fill="currentColor" stroke="none" opacity="0.4"/>
              </svg>
              <span>Raspador</span>
            </div>
          </label>

          <!-- Outros -->
          <label class="cursor-pointer">
            <input v-model="form.sealType" class="peer sr-only" type="radio" value="Outros" name="sealType" required />
            <div class="flex flex-col gap-2 h-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-2 py-4 text-center text-sm font-bold text-white/70 shadow-sm transition-all peer-checked:border-accent-red peer-checked:bg-accent-red peer-checked:text-white peer-checked:shadow-lg peer-checked:shadow-accent-red/20 peer-checked:scale-[1.02]">
              <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round">
                <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" fill="currentColor" fill-opacity="0.1"/>
              </svg>
              <span>Outros</span>
            </div>
          </label>
        </div>
      </div>



      <div class="pt-2">
        <button type="submit" class="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-[#25D366] px-8 py-4 font-bold text-white shadow-xl shadow-[#25D366]/20 transition-all duration-300 hover:bg-[#20bd5a] hover:shadow-[#25D366]/40">
          <span class="absolute inset-0 h-full w-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-1000 ease-in-out group-hover:translate-x-full z-0 rounded-2xl"></span>
          <svg class="relative z-10 w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span class="relative z-10 text-lg uppercase tracking-wide">Falar com Especialista</span>
        </button>
        <p class="mt-4 text-center text-xs text-white/50 flex items-center justify-center gap-1.5">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
          Sua solicitação será enviada de forma segura e sem compromisso.
        </p>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const form = ref({
  name: '',
  sealType: ''
});

const submitQuote = () => {
  let text = `Olá, gostaria de fazer um orçamento.\n\n`;
  if (form.value.name) text += `*Nome:* ${form.value.name}\n`;
  if (form.value.sealType) text += `*Tipo de Vedação:* ${form.value.sealType}\n`;

  const encodedText = encodeURIComponent(text);
  window.open(`https://wa.me/555196194676?text=${encodedText}`, '_blank');
};
</script>
