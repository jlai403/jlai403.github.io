# jlai.ca

Portfolio for Joey Lai. Astro renders the pages, Svelte 5 runs the interactive
pieces (theme toggle, command palette, typewriter), Tailwind handles styling,
and a Cloudflare Worker serves the static output.

## Stack

- Astro 7, static output
- Svelte 5 for interactive islands
- Tailwind CSS 4
- TypeScript
- Cloudflare Workers static assets, deployed with Wrangler

## Layout

    src/pages/        index, stack, experience
    src/components/   Svelte components
    src/layouts/      Base.astro
    src/data/         stack.ts, experience.ts
    public/           robots.txt, sitemap.xml, resumes, images
    wrangler.jsonc    Worker and static-assets config

## Local development

Needs Node 22 (see .node-version).

    npm install
    npm run dev       # http://localhost:3000
    npm run build     # writes dist/
    npm run preview

## Deployment

A Cloudflare Worker named jlai-ca serves dist/ as static assets, configured
in wrangler.jsonc.

- Production deploys from main.
- To deploy by hand, run npm run deploy. It calls wrangler deploy, so run
  wrangler login first.
- jlai.ca points at the Worker. www.jlai.ca redirects to the apex through a
  Cloudflare Redirect Rule.