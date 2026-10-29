# 🚀 Vimasi Vedações - Landing Page

Bem-vindo ao repositório oficial da Landing Page da **Vimasi Vedações**, desenvolvida com tecnologias modernas para garantir alta performance, SEO otimizado e uma experiência de usuário excepcional.

🔗 **Acesse o site**: [https://vimasi-vedacoes.com](https://vimasi-vedacoes.com)

## 🎯 Sobre o Projeto

Este projeto é uma Landing Page institucional focada em apresentar as soluções em vedações hidráulicas e industriais da Vimasi. O objetivo é converter visitantes em clientes através de um design responsivo, rápido e informativo.

**Destaques:**

- **⚡ Performance**: Site estático pré-renderizado (SSG) para carregamento instantâneo.
- **🔍 SEO**: Otimização completa para motores de busca (Google).
- **🎨 Design**: Interface moderna e responsiva utilizando Tailwind CSS.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído sobre uma stack robusta e moderna:

- **[Nuxt 4](https://nuxt.com/)**: Framework para aplicações web modernas, em modo de geração estática (preset `github_pages`).
- **[Nuxt SEO](https://nuxtseo.com/)**: sitemap, robots, schema.org, link-checker e `llms.txt`.
- **[Vue.js 3](https://vuejs.org/)**: A base reativa da interface com Composition API.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework de utilitários CSS para estilização rápida e consistente.
- **[Nuxt Icon](https://nuxt.com/modules/icon)**: Biblioteca de ícones integrada e otimizada.
- **GitHub Pages**: Hospedagem estática gratuita e de alta performance.
- **GitHub Actions**: Automação de CI/CD para deploy contínuo.

## ⚙️ CI/CD & Deploy Automático

Utilizamos **GitHub Actions** para automatizar o build e o deploy.

📂 **Workflow**: `.github/workflows/deploy.yml`

**Como funciona o pipeline:**

1. **Trigger**: a cada `push` na branch `main` (ou manualmente).
2. **Setup**: Node 24 + `npm ci` (o projeto usa apenas `package-lock.json`).
3. **Build**: `npx nuxt build --preset github_pages` pré-renderiza todas as rotas (SSG) em `.output/public`, junto com `sitemap.xml`, `robots.txt`, `llms.txt` e as fontes auto-hospedadas.
4. **Qualidade**: o build falha se houver link interno quebrado (`nuxt-link-checker`) ou rota que não pré-renderiza (`nitro.prerender.failOnError`).
5. **Deploy**: publica `.output/public` no GitHub Pages (domínio `vimasi-vedacoes.com` via `public/CNAME`).

## 🔍 SEO, GEO e dados da empresa

- **Módulo**: [`@nuxtjs/seo`](https://nuxtseo.com) (sitemap, robots, schema.org, link-checker, `llms.txt`). Imagens OG são JPEGs estáticos 1200×630 em `public/og/`.
- **Fonte única de NAP** (nome, endereço, telefone, horário, cidades atendidas, catálogo): `app/data/business.ts`. Nunca escreva endereço ou telefone direto em templates.
- **URLs com barra final** (`/gaxetas/`): `site.trailingSlash: true` casa com o `/rota/index.html` servido pelo GitHub Pages sem redirect. Escreva sempre `to="/rota/"`.
- **Por página**: `useSeoMeta` (title sem marca, o template adiciona `| Vimasi Vedações`), `useSchemaOrg` e `AppBreadcrumb`. FAQs usam o componente `FaqSection` (HTML e schema vêm do mesmo array).

## 🚀 Como Rodar Localmente

Pré-requisitos: Node.js 24 (veja `.nvmrc`) e npm.

1. **Clone o repositório**

   ```bash
   git clone https://github.com/Joao-Camilo-Mallmann/vimasi-vedacoes-vue.git
   cd vimasi-vedacoes-vue
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**

   ```bash
   npm run dev
   ```

   O site estará disponível em `http://localhost:3001` (ou na porta configurada adequadamente).

4. **Gerar Build de Produção (Local)**
   Para visualizar exatamente como o site ficará em produção:

   ```bash
   npx nuxt build --preset github_pages
   npx serve .output/public
   ```

## 📂 Estrutura do Projeto (Nuxt 4)

O projeto segue a estrutura de diretórios do Nuxt 4, onde o código principal da aplicação reside na pasta `/app`:

- `/app`: Pasta raiz da aplicação Nuxt.
  - `/pages`: Rotas e páginas da aplicação (Roteamento baseado em arquivos).
  - `/components`: Componentes Vue reutilizáveis.
  - `/assets`: Arquivos estáticos processados (CSS, Imagens).
  - `/layouts`: Templates de layout da aplicação.
- `/app/data/business.ts`: dados da empresa (NAP, cidades, catálogo).
- `/public`: arquivos públicos servidos na raiz (favicon, `CNAME`, `og/`). `robots.txt` e `sitemap.xml` são gerados no build.
- `nuxt.config.ts`: Configurações globais do Nuxt (incluindo `basePath` e Meta Tags de SEO).
- `agents.md`: Arquivo de contexto para agentes de IA e desenvolvedores.

---
© Vimasi Vedações. Todos os direitos reservados.
