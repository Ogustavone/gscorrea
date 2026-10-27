# Portfólio — Gustavo Correa

Site pessoal e portfólio profissional de Gustavo Correa, desenvolvedor back-end (.NET / C#) e web (Astro, TypeScript). Apresenta projetos entregues, formação, serviços de freelance e canais de contato.

## Stack

- Astro 7 (site estático, pré-renderizado no build)
- TypeScript 6 (modo strict, alias `@/*` para `src/*`)
- Tailwind CSS 4 (`@tailwindcss/vite`)
- Fontes self-hosted via `@fontsource` (Archivo, Inter, JetBrains Mono)
- Ícones via `@lucide/astro`
- Sitemap automático via `@astrojs/sitemap`
- Node.js >= 22.22.0

## Páginas

- `/` — Home: hero, portfólio de projetos, sobre, formação e contato.
- `/freelance` — Oferta de serviços (landing pages, SEO técnico, sistemas sob medida, automações), como funciona e formulário de orçamento enviado por WhatsApp.
- `/404` — Página não encontrada, com `noindex` e sem header/footer.

## Projetos exibidos

Seis projetos públicos listados em `src/data/projects.ts`:

| Projeto | Tipo | Ano |
|---|---|---|
| Plenitude ASL | Site · cliente | 2026 |
| StockApp | App mobile | 2026 |
| Monitor RS | Dashboard | 2026 |
| ListFlow | API · estudo | 2025 |
| ESP32 IoT | IoT · pessoal | 2024 |
| Astro Template | Template | 2026 |

Cada projeto tem card no índice, modal com galeria de imagens, tecnologias e links (GitHub ou site publicado).

## SEO e acessibilidade

Implementados em `src/components/seo/` e aplicados via layout `src/layouts/Base.astro`:

- Meta tags, Open Graph e Twitter Card centralizados em `SEO.astro`, com dados de `src/data/site.ts`.
- URLs canônicas absolutas resolvidas contra `Astro.site`.
- Geo SEO (`geo.region`, `geo.placename`) a partir da cidade e região atendidas.
- JSON-LD `LocalBusiness` (Schema.org) em `SchemaOrg.astro` com endereço regional (cidade/estado), telefone, e-mail, áreas atendidas e redes sociais.
- Controle de indexação via prop `noindex` (aplicado na página 404).
- Navegação por teclado, `aria-label`, `aria-current`, `sr-only` para leitores de tela e redução de movimento (`prefers-reduced-motion`).
- View Transitions com `ClientRouter` no layout base.

## Estrutura do repositório

```text
astro.config.mjs      # site, sitemap e Tailwind (Vite)
package.json
tsconfig.json         # strict + alias @/*
.gitignore
src/
  assets/
    projetos/         # imagens dos projetos (WebP)
    sobre/            # retrato
  components/
    freelance/Fab.astro
    home/             # Hero, About, Contact, Education, Projects, ProjectGallery
    seo/              # SEO.astro, SchemaOrg.astro
    Modal.astro
    Reveal.astro
    Header.astro
    Footer.astro
  data/
    site.ts           # identidade, contato, dados legais e redes sociais
    projects.ts       # dados dos projetos e tipos
  lib/
    project-presentation.ts
  layouts/
    Base.astro        # html, head, SEO, header, footer e slot
  pages/
    index.astro
    freelance.astro
    404.astro
  styles/
    global.css        # Tailwind, fontes e tokens do tema
public/
  favicon.ico, favicon.svg, og-image.png, apple-touch-icon.png, robots.txt, curriculo-gustavo.pdf, whatsapp.svg
```

## Como rodar

Requer Node.js 22.22.0 ou superior.

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento (http://localhost:4321)
npm run dev

# Verificação de tipos (astro check)
npm run check

# Build de produção (roda o check e gera dist/)
npm run build

# Pré-visualizar o build localmente
npm run preview
```

O build é estático e o diretório de saída é `dist/`. A URL de produção é definida em `astro.config.mjs` (`site`) e os dados institucionais em `src/data/site.ts`.

## Comandos

| Comando | Ação |
|---|---|
| `npm run dev` | Servidor de desenvolvimento em `localhost:4321` (host `0.0.0.0`) |
| `npm run build` | Executa `astro check` e gera o build estático em `./dist/` |
| `npm run check` | Verificação de tipos e diagnóstico do Astro |
| `npm run preview` | Serve o build de produção localmente |
