import type { ImageMetadata } from "astro";

export type ProjectLinkKind = "github" | "live" | "other";

export interface ProjectLink {
  label: string;
  href: string;
  kind: ProjectLinkKind;
}

export interface ProjectImage {
  src: ImageMetadata;
  alt: string;
  caption: string;
}

export interface Project {
  slug: string;
  title: string;
  /** Ano do primeiro commit do repositório. */
  year: string;
  /** Rótulo curto exibido no índice. */
  kind: string;
  shortDescription: string;
  description: string;
  /** Imagem 16:10 exibida no índice de projetos. */
  preview?: ImageMetadata;
  /** Posição do recorte do preview quando a origem não é 16:10. */
  previewPosition?: "top";
  /** Imagens completas exibidas no modal. */
  gallery?: readonly ProjectImage[];
  technologies: readonly string[];
  links: readonly ProjectLink[];
}

/**
 * Imagens locais dos projetos. Ficam em `src/assets` para o `astro:assets`
 * gerar WebP responsivo no build.
 */
const projectImages = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/projects/*/*.webp",
  { eager: true },
);

const image = (path: string): ImageMetadata => {
  const entry = projectImages[`../assets/projects/${path}`];

  if (!entry) {
    throw new Error(`Imagem de projeto não encontrada: ${path}`);
  }

  return entry.default;
};

/**
 * Portfólio principal. Os dados seguem os repositórios públicos de
 * github.com/ogustavone e alimentam os cards e os modais de detalhes.
 *
 * A ordem abaixo é a ordem do índice: primeiro a entrega a cliente, depois
 * os demais projetos.
 */
export const projects: readonly Project[] = [
  {
    slug: "plenitude-asl",
    title: "Plenitude ASL",
    year: "2026",
    kind: "Site · cliente",
    shortDescription:
      "Site institucional no ar para empresa de manutenção e limpeza.",
    description:
      "Site institucional em Astro, TypeScript e Tailwind, no ar em domínio próprio com as seções de serviços, atendimento e sobre publicadas. O projeto tem deploy na Cloudflare, SEO técnico e dados estruturados, e o escopo incluiu e-mail UOL com acesso pelo Gmail, página da empresa no LinkedIn e Perfil da Empresa no Google.",
    preview: image("plenitude-asl/1.webp"),
    previewPosition: "top",
    gallery: [
      {
        src: image("plenitude-asl/1.webp"),
        alt: "Página inicial do site Plenitude ASL com o título “Excelência em cada canto” sobre uma foto de limpeza.",
        caption: "Página inicial: chamada principal e navegação.",
      },
      {
        src: image("plenitude-asl/2.webp"),
        alt: "Página de serviços do site Plenitude ASL com a lista de serviços à esquerda e o componente de reels à direita.",
        caption: "Serviços: lista de atendimentos e componente de reels.",
      },
      {
        src: image("plenitude-asl/3.webp"),
        alt: "Seção “O que está incluso” do site Plenitude ASL, com três cartões de serviços e listas de atividades.",
        caption: "“O que está incluso”: três serviços e suas atividades.",
      },
      {
        src: image("plenitude-asl/4.webp"),
        alt: "Página “Sobre a Plenitude ASL”, com o texto de atuação regional e uma foto de profissional em cozinha industrial.",
        caption: "Sobre: atuação regional e dados da empresa.",
      },
    ],
    technologies: [
      "Astro",
      "Tailwind CSS",
      "TypeScript",
      "SEO técnico",
      "HTML semântico",
    ],
    links: [
      {
        label: "Site publicado",
        href: "https://www.plenitudeasl.com.br/",
        kind: "live",
      },
    ],
  },
  {
    slug: "stockapp",
    title: "StockApp",
    year: "2026",
    kind: "App mobile",
    shortDescription:
      "Gestão de estoque com scanner de código de barras e IA.",
    description:
      "Aplicativo de gestão de estoque para revendedores, com leitura de código de barras pela câmera do celular e assistente de IA integrado via OpenRouter. Centraliza cadastro de produtos, precificação, cálculo de lucro e histórico de vendas em um único fluxo.",
    preview: image("stockapp/preview.webp"),
    gallery: [
      {
        src: image("stockapp/1.webp"),
        alt: "Tela de catálogo do StockApp com imagem, nome e unidades de cada produto.",
        caption: "Catálogo: produtos com imagem, nome e unidades.",
      },
      {
        src: image("stockapp/2.webp"),
        alt: "Modal de produto do StockApp com custo de compra, quantidade total, unidades vendidas, preço sugerido e botão Registrar Venda.",
        caption:
          "Produto: custo, quantidade, preço sugerido e registro de venda.",
      },
      {
        src: image("stockapp/3.webp"),
        alt: "Tela de insights do StockApp com o resumo financeiro aberto, mostrando faturamento total, lucro real e investimento em estoque.",
        caption:
          "Insights: resumo financeiro com faturamento, lucro e investimento.",
      },
    ],
    technologies: [
      "TypeScript",
      "React Native",
      "Expo",
      "OpenRouter",
      "Expo Camera",
    ],
    links: [
      {
        label: "Repositório no GitHub",
        href: "https://github.com/ogustavone/StockApp",
        kind: "github",
      },
    ],
  },
  {
    slug: "monitor-rs",
    title: "Monitor RS",
    year: "2026",
    kind: "Dashboard",
    shortDescription:
      "Dashboard de monitoramento hidrológico e climático.",
    description:
      "Dashboard em Streamlit para acompanhar a situação da bacia do Guaíba. O painel de clima e a previsão de 7 dias usam dados da Open-Meteo; a seção de notícias agrega matérias do Google Notícias, classificadas por nível de alerta. O mapa de sensores dos rios é de terceiros — Serviço Geológico do Brasil (SGB) — e está incorporado ao dashboard (Mapa: SGB).",
    preview: image("monitor-rs/1.webp"),
    previewPosition: "top",
    gallery: [
      {
        src: image("monitor-rs/1.webp"),
        alt: "Painel do Monitor RS com condições atuais de clima, previsão de 7 dias e a seção de notícias classificadas por nível de alerta.",
        caption:
          "Painel de clima com previsão de 7 dias e notícias filtráveis por nível de alerta",
      },
      {
        src: image("monitor-rs/2.webp"),
        alt: "Mapa interativo da bacia do Guaíba com pontos de monitoramento sobre um mapa topográfico, ao lado da lista de notícias.",
        caption:
          "Mapa de sensores dos rios, incorporado do Serviço Geológico do Brasil (SGB)",
      },
    ],
    technologies: [
      "Python",
      "Streamlit",
      "Pandas",
      "Open-Meteo",
      "APIs REST",
    ],
    links: [
      {
        label: "Dashboard ao vivo",
        href: "https://monitor-rs.streamlit.app/",
        kind: "live",
      },
      {
        label: "Mapa: SGB",
        href: "https://sace.sgb.gov.br/guaiba/",
        kind: "other",
      },
      {
        label: "Repositório no GitHub",
        href: "https://github.com/ogustavone/Monitor-RS",
        kind: "github",
      },
    ],
  },
  {
    slug: "listflow",
    title: "ListFlow",
    year: "2025",
    kind: "API · estudo",
    shortDescription:
      "API de tarefas Kanban em C#/.NET 8, com EF Core, PostgreSQL e CRUD.",
    description:
      "API de tarefas Kanban em C# e .NET 8, com Entity Framework Core e PostgreSQL. Expõe operações CRUD e documentação interativa gerada pelo Swagger.",
    preview: image("listflow/1.webp"),
    previewPosition: "top",
    gallery: [
      {
        src: image("listflow/1.webp"),
        alt: "Documentação Swagger do ListFlow com as rotas de tarefas",
        caption: "Documentação Swagger do ListFlow com as rotas de tarefas",
      },
    ],
    technologies: ["C#", ".NET 8", "EF Core", "PostgreSQL"],
    links: [
      {
        label: "Repositório no GitHub",
        href: "https://github.com/ogustavone/ListFlow",
        kind: "github",
      },
    ],
  },
  {
    slug: "esp32-iot",
    title: "ESP32 IoT",
    year: "2024",
    kind: "IoT · pessoal",
    shortDescription:
      "Provisionamento Wi-Fi e acionamento de relés para ESP32.",
    description:
      "Dois projetos de automação com ESP32: um webserver em modo SoftAP para provisionar credenciais de Wi-Fi por formulário e um firmware de acionamento de relés integrado ao Blynk. O conjunto cobre configuração de rede, interface web embarcada e controle remoto de dispositivos.",
    preview: image("esp32-iot/preview.webp"),
    gallery: [
      {
        src: image("esp32-iot/1.webp"),
        alt: "Interface do Blynk com o dispositivo “ESP32 Santa Maria” marcado como online.",
        caption: "Blynk: dispositivo ESP32 Santa Maria online.",
      },
      {
        src: image("esp32-iot/2.webp"),
        alt: "Tela de controle do ESP32 Santa Maria com quatro botões de lâmpadas: frente, fundo, cima e RL04.",
        caption: "Controle: quatro lâmpadas, incluindo frente, fundo, cima e RL04.",
      },
    ],
    technologies: ["C++", "ESP32", "SoftAP", "WebServer", "Blynk"],
    links: [
      {
        label: "ESP32-SoftAP-Webserver",
        href: "https://github.com/ogustavone/ESP32-SoftAP-Webserver",
        kind: "github",
      },
      {
        label: "esp32-blynk",
        href: "https://github.com/ogustavone/esp32-blynk",
        kind: "github",
      },
    ],
  },
  {
    slug: "astro-template",
    title: "Astro Template",
    year: "2026",
    kind: "Template",
    shortDescription:
      "Base para landing pages com SEO automatizado.",
    description:
      "Template pré-configurado para Astro com componentes reutilizáveis e SEO centralizado em um único arquivo de configuração. Gera meta tags, Open Graph, canonical e JSON-LD automaticamente, além de já incluir Tailwind CSS, fontes self-hosted e sitemap.",
    preview: image("astro-template/1.webp"),
    previewPosition: "top",
    gallery: [
      {
        src: image("astro-template/1.webp"),
        alt: "Landing page do Astro Template com hero, seção de features e chamada para ação.",
        caption: "Landing page: hero, features e CTA.",
      },
    ],
    technologies: [
      "Astro",
      "TypeScript",
      "Tailwind CSS",
      "SEO automatizado",
    ],
    links: [
      {
        label: "Repositório no GitHub",
        href: "https://github.com/ogustavone/astro-template",
        kind: "github",
      },
    ],
  },
];

export const getProjectCover = (project: Project): ImageMetadata => {
  const cover = project.gallery?.[0]?.src ?? project.preview;
  if (!cover) {
    throw new Error(`Projeto sem imagem de capa: ${project.slug}`);
  }
  return cover;
};
