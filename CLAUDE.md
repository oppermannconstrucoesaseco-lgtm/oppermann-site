# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Visão geral do projeto

Site institucional da **OPPERMANN Construção a Seco**, empresa especializada em steel frame, drywall, pintura e revestimentos, sediada em Itapema/SC. O site é um SPA em React + Vite publicado na Vercel em `https://oppermannsteel.com.br`.

## Comandos

```bash
npm install        # Instala as dependências
npm run dev        # Inicia o servidor local em http://localhost:5173
npm run build      # Gera a versão de produção na pasta dist/
npm run preview    # Visualiza a versão de produção localmente
```

Não há script de lint, framework de testes nem TypeScript configurado.

## Arquitetura

### Roteamento — sem React Router

O roteamento é manual: `App.jsx` lê `window.location.pathname` diretamente e decide qual página renderizar. Existem três tipos de página:

| Caminho | Renderizado por |
|---|---|
| `/` (padrão) | `<main>` inline com todas as seções da landing page |
| `/portfolio` | `<PortfolioPage>` |
| `/drywall-itapema`, `/steel-frame-itapema`, etc. | `<ServiceSeoPage>` |

Para adicionar uma nova página de SEO, basta incluir uma entrada no objeto `servicePages` dentro de `src/components/ServiceSeoPage.jsx`. A função `getServicePage(pathname)` a reconhecerá automaticamente — nenhuma alteração em `App.jsx` é necessária.

O `vercel.json` contém um rewrite genérico (`/(.*)` → `/index.html`) que permite a navegação SPA sem recarregar a página.

### Conteúdo centralizado — `src/data/siteContent.js`

Todos os dados da empresa ficam aqui: razão social, CNPJ, endereço, telefone/WhatsApp, e-mail, regiões atendidas, descrição dos serviços, diferenciais e itens da galeria. **Este é o único lugar para alterar conteúdo textual do site.** Os componentes e os utilitários de links importam tudo daqui.

`src/utils/links.js` expõe `getWhatsAppUrl(mensagem?)` e `getMailToUrl()`, construídos a partir do `siteContent.js`. Sempre use essas funções — nunca escreva número de telefone ou e-mail diretamente nos componentes.

### Estilos

Os estilos globais ficam em `src/styles/index.css`. Dois arquivos CSS adicionais escopam estilos de páginas específicas:
- `src/styles/service-seo.css` — usado por `ServiceSeoPage`
- `src/styles/portfolio-complete.css` — usado por `PortfolioPage`

As variáveis de marca estão no topo do `index.css` e devem ser referenciadas pelo nome em todo CSS novo:

```css
--color-gold, --color-gold-bright   /* cor de destaque principal (dourado) */
--color-bg, --color-bg-soft         /* fundos */
--color-panel, --color-panel-strong /* preenchimento de cards e painéis */
--color-text, --color-muted         /* tipografia */
--color-line                        /* divisores */
--container                         /* largura máxima do conteúdo (1160px) */
```

Use as classes utilitárias `.container` e `.section` para manter o layout e o espaçamento consistentes.

### Formulário de contato

O formulário em `Contact.jsx` **não usa backend**. Ao enviar, ele monta uma mensagem com os campos preenchidos e abre o `wa.me/` em uma nova aba do WhatsApp. Se futuramente for integrado a um serviço de e-mail ou backend, este é o ponto de integração.

### SEO

Cada página de serviço atualiza dinamicamente `document.title`, `meta[name="description"]` e `meta[name="keywords"]` via `useEffect` em `ServiceSeoPage`. As metatags da homepage ficam estáticas no `index.html`. Os dados estruturados (JSON-LD `LocalBusiness`) também estão fixos no `index.html`.

### Assets

- Imagens importadas diretamente nos componentes ficam em `src/assets/`
- Arquivos servidos sem hash (robots.txt, sitemap.xml, favicons) ficam em `public/`
- As imagens do portfólio original estão em `src/assets/portfolio-original/` e têm extensão dupla `.jpg.png` — isso é intencional
