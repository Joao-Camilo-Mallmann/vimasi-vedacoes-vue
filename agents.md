# Agents Context & Guidelines

Este arquivo serve como guia de contexto para Agentes de IA (e desenvolvedores humanos) que interagem com este repositório.

## 📌 Contexto do Projeto

- **Nome**: Vimasi Vedações Landing Page
- **Objetivo**: Site institucional estático para apresentação de produtos de vedação.
- **Stack Principal**: Nuxt 4, Vue 3, Tailwind CSS v4, @nuxtjs/seo, @nuxt/image, @nuxt/fonts.
- **Deploy**: GitHub Pages (Static Site Generation).

## 🏗️ Padrões de Arquitetura

### 1. Build & Deploy

- **Node 24 + npm** (`.nvmrc`, apenas `package-lock.json`; não use bun).
- **Comando de Build**: `npx nuxt build --preset github_pages` (é o que o CI roda; gera SSG em `.output/public`).
- O build **falha** com link interno quebrado (link-checker) ou rota que não pré-renderiza. Rode-o localmente antes de abrir PR.
- **CI/CD**: `.github/workflows/deploy.yml`. Nunca commite `.output/`.

### 2. Configurações Específicas (Nuxt)

- **Base Path**: `/`
  - *Atualização*: Com o domínio customizado `vimasi-vedacoes.com`, o site roda na raiz.
- **SEO**: módulo `@nuxtjs/seo` configurado em `nuxt.config.ts` (site, schemaOrg.identity, robots, sitemap, aiReady). Não adicione JSON-LD manual nem `rel=canonical` em páginas: use `useSeoMeta` + `useSchemaOrg`.
- **Dados da empresa (NAP)**: somente em `app/data/business.ts`. Endereço, telefone, horário, cidades e catálogo são importados de lá.
- **URLs sempre com barra final** (`to="/gaxetas/"`), por causa de `site.trailingSlash: true`.
- **Páginas de produto/guia**: `PageHero` (breadcrumb + "Última atualização"), `FaqSection` (array `faqs` → HTML + schema), `RelatedLinks`, `CtaSection`. Ao editar conteúdo, atualize `dateModified`.
- **Imagens OG**: JPEG 1200×630 em `public/og/<slug>.jpg`; `ogImage` está desligado.

### 3. Estilização

- Use classes utilitárias do Tailwind CSS sempre que possível.
- CSS Customizado deve ir para `assets/css/main.css`.

### 4. Otimização de Performance (NuxtImg)

- Utilize o componente `<NuxtImg>` para todas as imagens em vez da tag padrão.
- Defina o atributo `sizes` para imagens responsivas (Exemplo: `sizes="100vw sm:50vw lg:400px"`).
- O módulo `@nuxt/image` já cuida dos formates modernos. Combine com `loading="lazy"` para abaixo da dobra e `fetchpriority="high"` para destaques.

## ⚠️ Checklist para Agentes

Ao fazer alterações, verifique:

- [ ] Se alterou rotas ou conteúdo, rode `npx nuxt build --preset github_pages` localmente: link-checker e prerender precisam passar.
- [ ] Nova página: adicione em `siteRoutes` (rodapé) em `app/data/business.ts` para o crawler do prerender encontrá-la.
- [ ] Se adicionou imagens, garanta que caminhos relativos ou uso de `basePath` estão corretos.
  - **Estrutura de Imagens**:
    - `assets/images/home/`: Fundos e hero da home.
    - `assets/images/catalog/`: Miniaturas de produtos e iconografia técnica.
    - `assets/images/gaskets/`: Imagens específicas da página de gaxetas.
    - `assets/images/sealing-rings/`: Imagens específicas da página de anéis.
    - `assets/images/shared/`: Logo e elementos comuns a todas as páginas.
- [ ] Não sugira comandos de deploy manual (`gh-pages -d dist`) a menos que explicitamente solicitado; confie no GitHub Actions.

## 📱 Componentes Globais e CTAs Relevantes

- **Botão Flutuante WhatsApp**: Componente global `FloatingWhatsApp.vue` inserido no layout padrão (`default.vue`), posicionado na seção inferior direita. O balão de mensagem existe no template mas começa oculto (`showBubble = false`).

## 📄 Arquivos Importantes

- `nuxt.config.ts`: Configuração central (Head, Modules, CSS, Vite).
- `.github/workflows/deploy.yml`: Script de Automação.
- `package.json`: Scripts e dependências.
