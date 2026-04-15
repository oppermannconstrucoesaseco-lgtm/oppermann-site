# OPPERMANN Construção a Seco

Site institucional premium em React com Vite para a OPPERMANN CONSTRUCAO A SECO LTDA.

## Como rodar localmente

1. Instale o Node.js LTS em `https://nodejs.org/`.
2. Abra o terminal nesta pasta.
3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor local:

```bash
npm run dev
```

5. Acesse o endereço exibido no terminal, normalmente `http://localhost:5173`.

## Como gerar a versão de publicação

```bash
npm run build
```

Os arquivos finais serão criados na pasta `dist/`. Para testar a versão de produção:

```bash
npm run preview
```

## Onde editar

- Textos, telefone, WhatsApp, e-mail, endereço, regiões e imagens: `src/data/siteContent.js`
- Componentes da página: `src/components/`
- Cores, espaçamentos, responsividade e animações: `src/styles/index.css`
- SEO básico, título e descrição do site: `index.html`

## Publicação

Depois de rodar `npm run build`, publique o conteúdo da pasta `dist/` em uma hospedagem estática como Vercel, Netlify, Cloudflare Pages, Hostinger ou servidor próprio.
