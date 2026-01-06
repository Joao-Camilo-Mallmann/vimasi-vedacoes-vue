# Agents Context & Guidelines

Este arquivo serve como guia de contexto para Agentes de IA (e desenvolvedores humanos) que interagem com este repositório.

## 📌 Contexto do Projeto

- **Nome**: Vimasi Vedações Landing Page
- **Objetivo**: Site institucional estático para apresentação de produtos de vedação.
- **Stack Principal**: Nuxt 3, Vue 3, Tailwind CSS.
- **Deploy**: GitHub Pages (Static Site Generation).

## 🏗️ Padrões de Arquitetura

### 1. Build & Deploy

- **Comando de Build**: `npm run generate` (Não use `npm run build`).
  - *Motivo*: O projeto é hospedado estaticamente no GitHub Pages. `generate` cria HTML estático para todas as rotas (SSG), melhorando SEO.
- **Output Directory**: `.output/public` (Padrão do Nuxt 3 para generate).
- **CI/CD**: Gerenciado por `.github/workflows/deploy.yml`.
  - O workflow lida automaticamente com cache invalidation (`.nojekyll`, `_headers`).

### 2. Configurações Específicas (Nuxt)

- **Base Path**: `/`
  - *Atualização*: Com o domínio customizado `vimasi-vedacoes.com`, o site roda na raiz.
- **SEO**: Meta tags globais estão em `nuxt.config.ts`.

### 3. Estilização

- Use classes utilitárias do Tailwind CSS sempre que possível.
- CSS Customizado deve ir para `assets/css/main.css`.

## ⚠️ Checklist para Agentes

Ao fazer alterações, verifique:

- [ ] Se alterou rotas ou estrutura, rode `npm run generate` localmente para validar.
- [ ] Se adicionou imagens, garanta que caminhos relativos ou uso de `basePath` estão corretos.
- [ ] Não sugira comandos de deploy manual (`gh-pages -d dist`) a menos que explicitamente solicitado; confie no GitHub Actions.

## 📄 Arquivos Importantes

- `nuxt.config.ts`: Configuração central (Head, Modules, CSS, Vite).
- `.github/workflows/deploy.yml`: Script de Automação.
- `package.json`: Scripts e dependências.
