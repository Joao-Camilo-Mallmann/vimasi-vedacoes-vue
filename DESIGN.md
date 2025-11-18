# 🎨 Guia de Design - Vimasi Vedações

## Paleta de Cores

### Cores Principais

```css
--color-primary-dark: #141414; /* Background principal do site */
--color-accent-gold: #e4c7aa; /* Cor de contraste/destaque */
--color-accent-red: #e53935; /* Cor para botões e CTAs */
```

### Aplicação das Cores

#### 1. Background (`#141414`)

- **Uso**: Fundo principal do site, seções escuras
- **Onde aplicar**:
  - Body background
  - Seções principais (hero, produtos, contato)
  - Header com transparência (`bg-primary-dark/95`)
  - Footer

**Exemplo:**

```html
<div class="bg-primary-dark">...</div>
<section class="bg-primary-dark py-20">...</section>
```

#### 2. Accent Gold (`#e4c7aa`)

- **Uso**: Textos de destaque, títulos, elementos decorativos
- **Onde aplicar**:
  - Títulos de seções (`<h2>`, `<h3>`)
  - Palavras-chave no hero
  - Hover em links de navegação
  - Ícones e bordas decorativas

**Exemplo:**

```html
<h2 class="text-accent-gold">Título</h2>
<span class="text-accent-gold">HIDRÁULICA</span>
<a class="hover:text-accent-gold">Link</a>
```

#### 3. Accent Red (`#e53935`)

- **Uso**: Botões de ação (CTAs), elementos que precisam chamar atenção
- **Onde aplicar**:
  - Botões primários de ação
  - Call-to-actions (CTAs)
  - Botões de WhatsApp
  - Elementos interativos importantes

**Exemplo:**

```html
<button class="bg-accent-red hover:bg-accent-red/90 text-white">Faça seu orçamento</button>
<a class="bg-accent-red rounded-full px-6 py-3">Contato</a>
```

## Hierarquia Visual

### Ordem de Importância

1. **Vermelho** (`#e53935`) - Ações principais
2. **Dourado** (`#e4c7aa`) - Títulos e destaques
3. **Escuro** (`#141414`) - Base e estrutura

### Contraste

- **Texto claro em fundo escuro**: `text-white` ou `text-white/90` sobre `bg-primary-dark`
- **Texto escuro em botões claros**: `text-primary-dark` sobre `bg-accent-gold`
- **Texto claro em botões vermelhos**: `text-white` sobre `bg-accent-red`

## Componentes

### Header

```html
<header class="bg-primary-dark/95 backdrop-blur-md">
  <a class="hover:text-accent-gold">Menu Item</a>
  <button class="bg-accent-gold text-primary-dark hover:bg-white">WhatsApp</button>
</header>
```

### Hero Section

```html
<h1>TEXTO <span class="text-accent-gold">DESTAQUE</span></h1>
<a class="bg-accent-red hover:bg-accent-red/90 text-white"> Call to Action </a>
```

### Cards de Produtos

```html
<div class="bg-gradient-to-t from-black/90 to-transparent">
  <h3 class="text-white">Título</h3>
  <p class="text-white/90">Descrição</p>
</div>
```

### Footer

```html
<footer class="bg-primary-dark border-accent-gold border-t-4">
  <h3 class="text-accent-gold">Título</h3>
  <a class="hover:text-accent-gold">Link</a>
</footer>
```

### Botões

#### Primário (Ação Principal)

```html
<button class="bg-accent-red hover:bg-accent-red/90 text-white">Botão Primário</button>
```

#### Secundário (Ação Secundária)

```html
<button class="bg-accent-gold text-primary-dark hover:bg-white">Botão Secundário</button>
```

#### Terciário (Link/Texto)

```html
<a class="hover:text-accent-gold text-white/90"> Link </a>
```

## Variações e Estados

### Hover States

- **Botão Vermelho**: `hover:bg-accent-red/90` (10% mais escuro)
- **Botão Dourado**: `hover:bg-white` (transição para branco)
- **Links**: `hover:text-accent-gold` (dourado)

### Opacity

- **Texto secundário**: `text-white/90` (90% opacidade)
- **Texto terciário**: `text-white/80` (80% opacidade)
- **Background overlay**: `bg-black/60` (60% opacidade)

## Tipografia

### Fontes

```css
--font-anton: 'Anton', sans-serif; /* Títulos principais */
--font-staatliches: 'Staatliches', cursive; /* Botões e CTAs */
--font-arimo: 'Arimo', sans-serif; /* Corpo de texto */
```

### Uso

- **Títulos grandes**: `font-anton` + `uppercase` + `italic`
- **Botões**: `font-staatliches` + `uppercase`
- **Corpo/Parágrafos**: `font-arimo`

## Efeitos Especiais

### Grain/Textura

```css
.grain::before {
  /* Textura sutil em todo o site */
  opacity: 0.03;
}
```

### Blur/Glass Morphism

```html
<header class="bg-primary-dark/95 backdrop-blur-md"></header>
```

### Gradientes

```html
<!-- Overlay de imagens -->
<div class="bg-gradient-to-t from-black/90 via-black/50 to-transparent">
  <!-- Overlay forte -->
  <div class="bg-gradient-to-t from-black/90 to-transparent"></div>
</div>
```

## Acessibilidade

### Contraste Mínimo

- ✅ Branco (#ffffff) sobre Escuro (#141414) - WCAG AAA
- ✅ Branco (#ffffff) sobre Vermelho (#e53935) - WCAG AA
- ✅ Escuro (#141414) sobre Dourado (#e4c7aa) - WCAG AA

### Recomendações

- Use `text-white` ou `text-white/90` em fundos escuros
- Use `text-primary-dark` em fundos claros (dourado, branco)
- Sempre teste o contraste com ferramentas de acessibilidade

## Checklist de Implementação

- [ ] Background principal usa `bg-primary-dark`
- [ ] Títulos importantes usam `text-accent-gold`
- [ ] Botões de ação usam `bg-accent-red`
- [ ] Hover states estão consistentes
- [ ] Contraste de cores atende WCAG AA
- [ ] Fontes corretas aplicadas em cada contexto
- [ ] Efeito grain aplicado no elemento raiz

## Exemplos Práticos

### Seção Completa

```html
<section class="bg-primary-dark py-20">
  <div class="container mx-auto px-4">
    <h2 class="text-accent-gold font-anton mb-12 text-5xl uppercase italic">Título da Seção</h2>
    <p class="font-arimo mb-8 text-lg text-white/90">Texto descritivo aqui</p>
    <a
      href="#"
      class="bg-accent-red font-staatliches hover:bg-accent-red/90 rounded-full px-8 py-4 text-white uppercase"
    >
      Chame para Ação
    </a>
  </div>
</section>
```

---

**Última atualização**: 18 de Novembro, 2025
**Versão**: 1.0
**Projeto**: Vimasi Vedações - Landing Page
