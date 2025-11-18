# Regras e Diretrizes do Projeto - Vimasi Vedações

## 🎨 Sistema de Cores

### Paleta Principal

- **Primary Dark**: `#141414` - Fundo principal do site
- **Accent Gold**: `#e4c7aa` - Destaques, títulos e elementos de contraste
- **Accent Red**: `#e53935` - CTAs, botões de ação e elementos de urgência

### Uso das Cores

- **Background**: Sempre usar `bg-primary-dark` ou tons de preto
- **Títulos principais**: `text-accent-gold`
- **Botões CTA**: `bg-accent-red` com gradiente para vermelho mais escuro
- **Bordas**: `border-accent-gold/20` no estado normal, `border-accent-gold/60` no hover
- **Sombras**: `shadow-accent-gold/30` ou `shadow-accent-red/60` dependendo do contexto

## 📝 Tipografia

### Fontes do Projeto

1. **Anton** - Títulos e headings
   - Sempre em UPPERCASE
   - Sempre com `italic`
   - Classes: `font-anton uppercase italic`

2. **Staatliches** - Botões e CTAs
   - Para elementos de ação
   - Classes: `font-staatliches`

3. **Arimo** - Textos de corpo
   - Parágrafos e conteúdo geral
   - Classes: `font-arimo`

### Hierarquia de Tamanhos

- **H1 (Hero)**: `text-6xl md:text-7xl lg:text-8xl`
- **H2 (Seções)**: `text-5xl md:text-6xl`
- **H3 (Cards)**: `text-2xl` ou `text-3xl`
- **Corpo**: `text-base` ou `text-lg`
- **Legendas**: `text-sm` ou `text-xs`

## ✨ Padrões de Animação

### Efeitos Hover em Cards

```css
/* Estrutura padrão */
- border-accent-gold/20 hover:border-accent-gold/60
- hover:-translate-y-2 ou hover:-translate-y-3
- hover:scale-105 ou hover:scale-110
- transition-all duration-500
- group (para animações de elementos filhos)
```

### Efeitos Shimmer

- Usado em botões importantes e cards especiais
- Gradiente horizontal animado
- Classes: `group-hover:animate-shimmer opacity-0 group-hover:opacity-100`

### Ícones Animados

- Rotação sutil: `group-hover:rotate-12`
- Escala: `group-hover:scale-110`
- Translação: `group-hover:translate-x-1` ou `group-hover:translate-x-2`

## 🎯 Botões CTA

### Botão Principal (Hero/Contact)

```html
- Gradiente: from-accent-red to-red-600 - Hover: inverte gradiente hover:from-red-600
hover:to-accent-red - Escala: hover:scale-110 - Sombra: shadow-2xl hover:shadow-accent-red/60 -
Ícones: WhatsApp com pulse, seta com translate - Efeitos: shimmer + glow effect - Tamanho: px-12
py-5 text-2xl
```

### Botão Secundário

```html
- bg-accent-gold ou bg-accent-gold/10 - hover:bg-accent-gold/20 - hover:scale-105 - Bordas
arredondadas: rounded-full ou rounded-lg
```

## 📦 Estrutura de Cards

### Cards de Produto

```html
<div
  class="group border-accent-gold/20 hover:border-accent-gold/60 hover:shadow-accent-gold/50 relative overflow-hidden rounded-xl border-2 shadow-2xl transition-all duration-500 hover:-translate-y-3"
>
  <img class="transition-transform duration-500 group-hover:scale-110" />
  <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
    <h3 class="font-anton uppercase italic">Título</h3>
    <p class="opacity-0 group-hover:opacity-100">Descrição</p>
  </div>
</div>
```

### Cards de Contato

```html
<div
  class="group border-accent-gold/30 hover:border-accent-gold/70 from-primary-dark hover:shadow-accent-gold/40 relative overflow-hidden bg-gradient-to-br to-black/90 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2"
>
  <div class="bg-accent-gold/10 group-hover:bg-accent-gold/20 transition-all group-hover:scale-110">
    <svg class="group-hover:rotate-12">...</svg>
  </div>
  <h3 class="group-hover:scale-105">Título</h3>
  <span class="group-hover:animate-shimmer">Efeito</span>
</div>
```

## 🖼️ Backgrounds e Overlays

### Hero Section

- Imagem de fundo: `hero-bg.jpg`
- Overlay: `bg-black/60`
- Altura: `h-screen`

### Contact Section

- Imagem de fundo: `contact-bg.jpg`
- Gradiente overlay: `from-primary-dark via-accent-gold/20 to-accent-gold/40`
- Direção: `bg-gradient-to-b`

### Footer

- Mesma imagem: `contact-bg.jpg`
- Gradiente invertido: `from-accent-gold/40 via-accent-gold/20 to-primary-dark`
- Para criar continuidade visual

## 🎨 Efeitos Especiais

### Grain Texture

- Aplicado no App.vue
- Classe: `grain`
- Opacidade: 0.03
- Sempre sobre fundo escuro

### Backdrop Blur

- Header: `backdrop-blur-md`
- Cards especiais: `backdrop-blur-sm`
- Combinado com transparência

### Gradientes

- **Produtos**: `from-black/90 via-black/50 to-transparent`
- **Botões**: `from-accent-red to-red-600`
- **Backgrounds**: `from-primary-dark to-black/90`

## 📱 Responsividade

### Breakpoints Tailwind

- **Mobile**: padrão (< 768px)
- **Tablet**: `md:` (≥ 768px)
- **Desktop**: `lg:` (≥ 1024px)

### Grid Systems

- Produtos: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
- Contato: `grid-cols-1 md:grid-cols-3`
- Footer: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`

## 🔗 Navegação

### Estrutura de Links

- Home: `#home`
- Vedações: `#vedacoes`
- Contato: `#contato`

### Comportamento

- Scroll suave: `scroll-behavior: smooth`
- Mobile menu: Toggle com animação `animate-fade-in-up`

## 📋 Checklist de Qualidade

### Ao criar novos componentes:

- [ ] Usar cores do sistema (primary-dark, accent-gold, accent-red)
- [ ] Aplicar fonte correta (Anton para títulos, Arimo para corpo)
- [ ] Incluir estados hover interativos
- [ ] Adicionar transições suaves (duration-300 ou duration-500)
- [ ] Garantir responsividade mobile-first
- [ ] Usar group para animações de elementos filhos
- [ ] Incluir acessibilidade (aria-labels quando necessário)
- [ ] Manter consistência visual com componentes existentes

### Ao criar CTAs:

- [ ] Tamanho grande e visível
- [ ] Ícones relevantes (WhatsApp para contato)
- [ ] Gradiente ou cor sólida accent-red
- [ ] Efeitos hover (scale, shimmer, glow)
- [ ] Texto persuasivo e direto
- [ ] Link funcional com parâmetros (WhatsApp com mensagem pré-definida)

## 🚀 Performance

### Otimizações

- Usar `transition-all` com moderação
- Preferir `transition-transform` e `transition-opacity`
- Lazy load para imagens quando possível
- Minimizar animações complexas em mobile

### Boas Práticas

- Manter hierarquia z-index organizada
- Usar `relative` e `absolute` com cuidado
- Evitar `!important` no CSS
- Preferir classes Tailwind a CSS customizado

## 📁 Estrutura de Arquivos

```
src/
├── assets/
│   ├── base.css (variáveis e resets)
│   ├── main.css (tema e animações customizadas)
│   └── images/ (todas as imagens do projeto)
├── components/
│   ├── Header.vue (navegação sticky)
│   └── Footer.vue (rodapé completo)
├── views/
│   └── Home.vue (landing page única)
└── router/
    └── index.ts (configuração de rotas)
```

## 🎯 Princípios de Design

1. **Dark Theme First**: Todo o site usa fundo escuro (#141414)
2. **Contraste Alto**: Textos claros em fundos escuros
3. **Hierarquia Visual**: Ouro para destaque, vermelho para ação
4. **Animações Sutis**: Melhoram UX sem distrair
5. **Mobile-First**: Design responsivo desde o início
6. **Conversão Focada**: CTAs visíveis e persuasivos
7. **Consistência**: Mesmos padrões em todo o site
8. **Profissionalismo**: Visual limpo e moderno

---

**Última atualização**: Novembro 2025
**Framework**: Vue 3 + TypeScript + Tailwind CSS v4
