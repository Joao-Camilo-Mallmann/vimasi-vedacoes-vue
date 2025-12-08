# Vimasi Vedações

Site institucional da Vimasi Vedações - Especialista em vedações hidráulicas e industriais em Lajeado/RS.

🌐 **Live**: [https://joao-camilo-mallmann.github.io/vimasi-vedacoes-vue](https://joao-camilo-mallmann.github.io/vimasi-vedacoes-vue)

## 🛠️ Tecnologias

- **Framework**: [Nuxt 3](https://nuxt.com/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
- **Deploy**: GitHub Pages (Static Generation)

## 🚀 Setup

Instale as dependências:

```bash
npm install
# ou
bun install
```

## 💻 Desenvolvimento

Inicie o servidor de desenvolvimento em `http://localhost:3000`:

```bash
npm run dev
# ou
bun run dev
```

## 📦 Build para Produção

Gere o site estático otimizado para SEO:

```bash
npm run generate
# ou
bun run generate
```

O output será gerado em `.output/public`.

### Preview Local

```bash
npx serve .output/public
```

## 🚀 Deploy

O deploy é automático via GitHub Actions. Ao fazer push na branch `main`, o workflow:

1. Instala as dependências
2. Executa `npm run generate` (pré-renderiza todas as rotas)
3. Faz deploy no GitHub Pages

### Deploy Manual

```bash
npx gh-pages --dotfiles -d .output/public
```

## 📁 Estrutura

```
├── pages/           # Páginas do site
├── components/      # Componentes Vue
├── assets/          # CSS e assets
├── public/          # Arquivos estáticos
├── nuxt.config.ts   # Configuração do Nuxt
└── .github/workflows/deploy.yml  # CI/CD
```

## 📄 Licença

Todos os direitos reservados © Vimasi Vedações
