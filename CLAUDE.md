# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Institutional website for **OPPERMANN Construção a Seco**, a Brazilian dry-construction company (steel frame, drywall, painting, coatings) based in Itapema, SC. The site is a React + Vite SPA deployed on Vercel at `https://oppermannsteel.com.br`.

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server at http://localhost:5173
npm run build      # Build for production into dist/
npm run preview    # Preview the production build locally
```

There is no lint script, no test runner, and no TypeScript configured.

## Architecture

### Routing — no React Router

Routing is manual: `App.jsx` reads `window.location.pathname` directly and decides which page to render. Three page types exist:

| Pattern | Rendered by |
|---|---|
| `/` (default) | Inline `<main>` with all landing-page sections |
| `/portfolio` | `<PortfolioPage>` |
| `/drywall-itapema`, `/steel-frame-itapema`, etc. | `<ServiceSeoPage>` |

To add a new SEO page, add an entry to the `servicePages` object inside `src/components/ServiceSeoPage.jsx`. `getServicePage(pathname)` will pick it up automatically; no changes to `App.jsx` needed.

`vercel.json` contains a catch-all rewrite (`/(.*)` → `/index.html`) that enables SPA navigation.

### Centralised content — `src/data/siteContent.js`

All business data lives here: company name, CNPJ, address, phone/WhatsApp number, email, service area, service descriptions, differentials, and gallery items. **This is the single source of truth for content changes.** Both UI components and link utilities import from it.

`src/utils/links.js` exposes `getWhatsAppUrl(message?)` and `getMailToUrl()`, which are built from `siteContent.js`. Always use these helpers — never hardcode phone numbers or email addresses in components.

### Styling

Global styles live in `src/styles/index.css`. Two additional CSS files scope styles to specific page types:
- `src/styles/service-seo.css` — used by `ServiceSeoPage`
- `src/styles/portfolio-complete.css` — used by `PortfolioPage`

Brand variables are defined at the top of `index.css` and should be referenced by name in all new CSS:

```css
--color-gold, --color-gold-bright   /* primary accent */
--color-bg, --color-bg-soft         /* backgrounds */
--color-panel, --color-panel-strong /* card/panel fills */
--color-text, --color-muted         /* typography */
--color-line                        /* dividers */
--container                         /* max content width (1160px) */
```

Use the `.container` and `.section` utility classes for consistent layout and spacing.

### Contact form

The contact form in `Contact.jsx` does **not** use a backend. On submit, it builds a WhatsApp message from the form fields and opens `wa.me/` in a new tab. If a backend or email service is ever wired in, this is the integration point.

### SEO

Each SEO service page dynamically updates `document.title`, `meta[name="description"]`, and `meta[name="keywords"]` via a `useEffect` in `ServiceSeoPage`. The base meta tags in `index.html` serve the homepage. Structured data (JSON-LD `LocalBusiness`) is also hardcoded in `index.html`.

### Assets

- Static assets imported directly into components live in `src/assets/`
- Files served without hashing (robots.txt, sitemap.xml, favicons) live in `public/`
- Portfolio original presentation images are in `src/assets/portfolio-original/` and have a `.jpg.png` double extension — this is intentional
