# 🚀 Vimasi Vedações - Landing Page

Bem-vindo ao repositório oficial da Landing Page da **Vimasi Vedações**, desenvolvida com tecnologias modernas para garantir alta performance, SEO otimizado e uma experiência de usuário excepcional.

🔗 **Acesse o site**: [https://joao-camilo-mallmann.github.io/vimasi-vedacoes-vue/](https://joao-camilo-mallmann.github.io/vimasi-vedacoes-vue/)

## 🎯 Sobre o Projeto

Este projeto é uma Landing Page institucional focada em apresentar as soluções em vedações hidráulicas e industriais da Vimasi. O objetivo é converter visitantes em clientes através de um design responsivo, rápido e informativo.

**Destaques:**

- **⚡ Performance**: Site estático pré-renderizado (SSG) para carregamento instantâneo.
- **🔍 SEO**: Otimização completa para motores de busca (Google).
- **🎨 Design**: Interface moderna e responsiva utilizando Tailwind CSS.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído sobre uma stack robusta e moderna:

- **[Nuxt 3](https://nuxt.com/)**: Framework Vue.js para aplicações web modernas. Utilizamos o modo de geração estática.
- **[Vue.js 3](https://vuejs.org/)**: A base reativa da interface com Composition API.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework de utilitários CSS para estilização rápida e consistente.
- **GitHub Pages**: Hospedagem estática gratuita e de alta performance.
- **GitHub Actions**: Automação de CI/CD para deploy contínuo.

## ⚙️ CI/CD & Deploy Automático

Utilizamos **GitHub Actions** para automatizar o processo de build e deploy, garantindo que o site esteja sempre atualizado e otimizado.

📂 **Workflow**: `.github/workflows/deploy.yml`

**Como funciona o pipeline:**

1. **Trigger**: A cada `push` na branch `main`.
2. **Setup**: Instala Node.js v20 e dependências (`npm install`).
3. **Build**: Executa `npm run generate` para criar os arquivos estáticos otimizados na pasta `.output/public`.
   - *Nota: Usamos `generate` ao invés de `build` para Full Static Generation (SSG).*
4. **Otimização**:
   - Cria arquivo `.nojekyll` para contornar processamento padrão do GitHub Pages.
   - Configura headers de Cache-Control para evitar problemas de cache stale no navegador.
5. **Deploy**: Publica os artefatos diretamente na infraestrutura do GitHub Pages.

## 🚀 Como Rodar Localmente

Pré-requisitos: Node.js (v18+ ou v20+ recomendado).

1. **Clone o repositório**

   ```bash
   git clone https://github.com/Joao-Camilo-Mallmann/vimasi-vedacoes-vue.git
   cd vimasi-vedacoes-vue
   ```

2. **Instale as dependências**

   ```bash
   npm install
   # ou
   bun install
   ```

3. **Inicie o servidor de desenvolvimento**

   ```bash
   npm run dev
   ```

   O site estará disponível em `http://localhost:3000`.

4. **Gerar Build de Produção (Local)**
   Para visualizar exatamente como o site ficará em produção:

   ```bash
   npm run generate
   npx serve .output/public
   ```

## 📂 Estrutura do Projeto

- `/pages`: Rotas e páginas da aplicação (Roteamento baseado em arquivos).
- `/components`: Componentes Vue reutilizáveis.
- `/assets`: Arquivos estáticos processados (CSS, Imagens).
- `/public`: Arquivos públicos servidos na raiz (favicon, robots.txt).
- `nuxt.config.ts`: Configurações globais do Nuxt (incluindo `basePath` e Meta Tags de SEO).

---
© Vimasi Vedações. Todos os direitos reservados.
