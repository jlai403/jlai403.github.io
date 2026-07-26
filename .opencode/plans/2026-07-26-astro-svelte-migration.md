# Astro + Svelte Migration Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate the Vue SPA personal portfolio site (jlai.ca) to Astro with Svelte interactive islands, converting from hash-based SPA routing to Astro file-based routing with static output.

**Architecture:** Astro renders all pages as static HTML. Svelte components are used only for interactive elements (theme toggle, typewriter animation) via Astro's `client:*` hydration directives. Pages that were previously lazy-loaded Vue SPAs become proper static pages at `/`, `/stack`, and `/experience`. Tailwind CSS v4 continues to work via Astro's Vite integration.

**Tech Stack:** Astro 5, Svelte 5 (runes), Tailwind CSS v4, TypeScript

---

## Target File Structure

```
jlai403.github.io/
├── public/
│   ├── img/self.png              (unchanged)
│   ├── res/                      (unchanged)
│   ├── CNAME                     (moved from root)
│   ├── manifest.json             (unchanged)
│   ├── robots.txt                (unchanged)
│   └── sitemap.xml               (unchanged)
├── src/
│   ├── layouts/
│   │   └── Base.astro            (replaces index.html + App.vue + main.ts)
│   ├── pages/
│   │   ├── index.astro           (home page — replaces src/components/Home/index.vue)
│   │   ├── stack.astro           (replaces src/components/Stack/index.vue)
│   │   └── experience.astro      (replaces src/components/Experience/index.vue)
│   ├── components/
│   │   ├── ThemeToggle.svelte    (replaces ThemeToggle.vue)
│   │   └── Typewriter.svelte     (replaces typing logic from Home/index.vue)
│   ├── data/
│   │   ├── stack.ts              (stack items data, extracted from Stack/index.vue)
│   │   └── experience.ts         (experience items data, extracted from Experience/index.vue)
│   ├── style.css                 (global styles — carried over with Tailwind v4)
│   └── env.d.ts                  (Astro + Svelte type references)
├── astro.config.mjs              (replaces vite.config.ts)
├── package.json                  (rewritten dependencies)
├── tsconfig.json                 (rewritten for Astro)
├── CNAME                         (DELETED — moved to public/)
├── index.html                    (DELETED — Astro generates this)
├── vite.config.ts                (DELETED — replaced by astro.config.mjs)
├── tsconfig.node.json            (DELETED)
└── .github/workflows/main.yml    (updated build commands)
```

---

## Global Constraints

- Tailwind CSS v4 via `@tailwindcss/vite` (Astro Vite integration)
- Catppuccin color palette (Latte light / Frappe dark) via CSS custom properties — identical to current
- JetBrains Mono font via Google Fonts `@import` in `style.css`
- Font Awesome 4 icons loaded via CDN `<link>` in `Base.astro`
- Static output to `dist/` for GitHub Pages deployment
- Domain: jlai.ca (CNAME)
- No server-side rendering — all pages pre-rendered at build time
- Svelte islands only for client-side interactivity; everything else is static HTML

---

## Task 1: Scaffold Astro project and configure dependencies

**Files:**
- Modify: `package.json`
- Modify: `tsconfig.json`
- Create: `astro.config.mjs`
- Create: `src/env.d.ts`

**Interfaces:**
- Produces: Working Astro dev server with Svelte and Tailwind integrations

**Steps:**

- [ ] **Step 1: Create a new branch**

```bash
git checkout -b feat/astro-svelte-migration
```

- [ ] **Step 2: Clear existing node_modules and package-lock**

```bash
rm -rf node_modules package-lock.json
```

- [ ] **Step 3: Write new `package.json`**

```json
{
  "name": "jlai403.github.io",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  },
  "dependencies": {
    "font-awesome": "^4.7.0"
  },
  "devDependencies": {
    "@astrojs/svelte": "^7.0.0",
    "@tailwindcss/vite": "^4.2.1",
    "astro": "^5.0.0",
    "svelte": "^5.0.0",
    "tailwindcss": "^4.2.1",
    "typescript": "^5.2.2"
  }
}
```

- [ ] **Step 4: Write `tsconfig.json`**

```json
{
  "extends": "astro/tsconfigs/strict"
}
```

- [ ] **Step 5: Write `astro.config.mjs`**

```js
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [svelte()],
  vite: {
    plugins: [tailwindcss()],
  },
  server: { port: 3000 },
  output: 'static',
});
```

- [ ] **Step 6: Write `src/env.d.ts`**

```ts
/// <reference types="astro/client" />
/// <reference types="svelte" />
```

- [ ] **Step 7: Install dependencies and verify dev server starts**

```bash
npm install
npm run dev
```

Expected: Dev server starts on port 3000. Press Ctrl+C to stop.

- [ ] **Step 8: Commit**

```bash
git add package.json tsconfig.json astro.config.mjs src/env.d.ts
git commit -m "chore: scaffold astro + svelte project"
```

---

## Task 2: Migrate global styles, fonts, and theme system

**Files:**
- Create: `src/style.css` (adapted from current `src/style.css`)
- Create: `src/layouts/Base.astro`

**Interfaces:**
- Produces: Base layout with theme flash prevention script, global styles, and slot for page content

**Steps:**

- [ ] **Step 1: Write `src/style.css`**

Copy the current `src/style.css` with one change: the `body, html, #root` selector becomes `body, html` (Astro doesn't use a `#root` div). Also add the missing `--color-ctp-*` aliases that the social icon hover styles reference.

```css
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;700&display=swap');
@import "tailwindcss";

@theme {
  --font-mono: "JetBrains Mono", "Cascadia Code", "SF Mono", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", monospace;

  /* Catppuccin Latte Palette */
  --color-latte-rosewater: #dc8a78;
  --color-latte-flamingo: #dd7878;
  --color-latte-pink: #ea76cb;
  --color-latte-mauve: #8839ef;
  --color-latte-red: #d20f39;
  --color-latte-maroon: #e64553;
  --color-latte-peach: #fe640b;
  --color-latte-yellow: #df8e1d;
  --color-latte-green: #40a02b;
  --color-latte-teal: #179287;
  --color-latte-sky: #04a5e5;
  --color-latte-sapphire: #209fb5;
  --color-latte-blue: #1e66f5;
  --color-latte-lavender: #7287fd;
  --color-latte-text: #4c4f69;
  --color-latte-subtext1: #5c5f77;
  --color-latte-subtext0: #6c6f85;
  --color-latte-overlay2: #7c7f93;
  --color-latte-overlay1: #8c8fa1;
  --color-latte-overlay0: #9ca0b0;
  --color-latte-surface2: #acb0be;
  --color-latte-surface1: #bcc0cc;
  --color-latte-surface0: #ccd0da;
  --color-latte-base: #eff1f5;
  --color-latte-mantle: #e6e9ef;
  --color-latte-crust: #dce0e8;

  /* Catppuccin Frappé Palette */
  --color-frappe-rosewater: #f2d5cf;
  --color-frappe-flamingo: #eebebe;
  --color-frappe-pink: #f4b8e4;
  --color-frappe-mauve: #ca9ee6;
  --color-frappe-red: #e78284;
  --color-frappe-maroon: #ea999c;
  --color-frappe-peach: #ef9f76;
  --color-frappe-yellow: #e5c890;
  --color-frappe-green: #a6d189;
  --color-frappe-teal: #81c8be;
  --color-frappe-sky: #99d1db;
  --color-frappe-sapphire: #85c1dc;
  --color-frappe-blue: #8caaee;
  --color-frappe-lavender: #babbf1;
  --color-frappe-text: #c6d0f5;
  --color-frappe-subtext1: #b5bfe2;
  --color-frappe-subtext0: #a5adce;
  --color-frappe-overlay2: #949cbb;
  --color-frappe-overlay1: #838ba7;
  --color-frappe-overlay0: #737994;
  --color-frappe-surface2: #626880;
  --color-frappe-surface1: #51576d;
  --color-frappe-surface0: #414559;
  --color-frappe-base: #303446;
  --color-frappe-mantle: #292c3c;
  --color-frappe-crust: #232634;

  /* Default Theme Variables */
  --color-bg-primary: var(--color-latte-base);
  --color-text-primary: var(--color-latte-text);
  --color-text-secondary: var(--color-latte-subtext0);
  --color-link: var(--color-latte-blue);
  --color-link-hover: var(--color-latte-lavender);
  --color-border: var(--color-latte-surface0);
  --color-selection-bg: var(--color-latte-surface2);
  --color-selection-text: var(--color-latte-rosewater);
}

/* CTP aliases for social icon hover colors */
:root {
  --color-ctp-blue: var(--color-latte-blue);
  --color-ctp-mauve: var(--color-latte-mauve);
  --color-ctp-pink: var(--color-latte-pink);
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg-primary: var(--color-frappe-base);
    --color-text-primary: var(--color-frappe-text);
    --color-text-secondary: var(--color-frappe-subtext0);
    --color-link: var(--color-frappe-blue);
    --color-link-hover: var(--color-frappe-lavender);
    --color-border: var(--color-frappe-surface0);
    --color-selection-bg: var(--color-frappe-surface2);
    --color-selection-text: var(--color-frappe-rosewater);
    --color-ctp-blue: var(--color-frappe-blue);
    --color-ctp-mauve: var(--color-frappe-mauve);
    --color-ctp-pink: var(--color-frappe-pink);
  }
}

:root[data-theme='light'] {
  --color-bg-primary: var(--color-latte-base);
  --color-text-primary: var(--color-latte-text);
  --color-text-secondary: var(--color-latte-subtext0);
  --color-link: var(--color-latte-blue);
  --color-link-hover: var(--color-latte-lavender);
  --color-border: var(--color-latte-surface0);
  --color-selection-bg: var(--color-latte-surface2);
  --color-selection-text: var(--color-latte-rosewater);
  --color-ctp-blue: var(--color-latte-blue);
  --color-ctp-mauve: var(--color-latte-mauve);
  --color-ctp-pink: var(--color-latte-pink);
}

:root[data-theme='dark'] {
  --color-bg-primary: var(--color-frappe-base);
  --color-text-primary: var(--color-frappe-text);
  --color-text-secondary: var(--color-frappe-subtext0);
  --color-link: var(--color-frappe-blue);
  --color-link-hover: var(--color-frappe-lavender);
  --color-border: var(--color-frappe-surface0);
  --color-selection-bg: var(--color-frappe-surface2);
  --color-selection-text: var(--color-frappe-rosewater);
  --color-ctp-blue: var(--color-frappe-blue);
  --color-ctp-mauve: var(--color-frappe-mauve);
  --color-ctp-pink: var(--color-frappe-pink);
}

body,
html {
  @apply h-full w-full font-mono bg-bg-primary text-text-primary antialiased text-[14px] leading-[22px] font-[400] tracking-[-0.1px] selection:bg-selection-bg selection:text-selection-text;
}

a {
  @apply no-underline text-link italic decoration-1 underline-offset-4 transition-all duration-200 ease-[cubic-bezier(0.19,1,0.22,1)];
}

a:hover {
  @apply text-link-hover decoration-2;
}

@theme {
  --animate-bouncing: bouncing 2s infinite;
  --animate-bouncing-horizontal: bouncingHorizontal 1.5s infinite;
  --animate-fade-in-fast: fadeIn 0.5s infinite;
  --animate-fade-in-1s: fadeIn 1s ease-out;
  --animate-fade-in-2s: fadeIn 2s ease-out;
  --animate-fade-in-4s: fadeIn 4s ease-out;
  --animate-fade-in-6s: fadeIn 6s ease-out;
  --animate-slide-in-left: slideInLeft 1s ease-out;
  --animate-slide-in-right: slideInRight 1s ease-out;
  --animate-slide-in-bottom: slideInBottom 1s ease-out;
}

@keyframes bouncing {
  0% { transform: translateY(0%); }
  50% { transform: translateY(30%); }
  100% { transform: translateY(0%); }
}

@keyframes bouncingHorizontal {
  0% { transform: translateX(0%); }
  50% { transform: translateX(10%); }
  100% { transform: translateX(0%); }
}

@keyframes slideInLeft {
  0% { opacity: 0; transform: translateX(-200px); }
  100% { opacity: 1; transform: translateX(0px); }
}

@keyframes slideInRight {
  0% { opacity: 0; transform: translateX(100%); }
  100% { opacity: 1; transform: translateX(0%); }
}

@keyframes slideInBottom {
  0% { opacity: 0; transform: translateY(75%); }
  100% { opacity: 1; transform: translateY(0%); }
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.bouncing { @apply animate-bouncing; }
.horizontal.bouncing { @apply animate-bouncing-horizontal; }
.fadeInFast { @apply animate-fade-in-fast; }
.slideInLeft { @apply animate-slide-in-left; }
.slideInRight { @apply animate-slide-in-right; }
.slideInBottom { @apply animate-slide-in-bottom; }
.fadeIn.one { @apply animate-fade-in-1s; }
.fadeIn.two { @apply animate-fade-in-2s; }
.fadeIn.four { @apply animate-fade-in-4s; }
.fadeIn.six { @apply animate-fade-in-6s; }

.social-icon {
  @apply no-underline inline-flex items-center justify-center rounded-lg mx-[2px];
  transition: all 0.2s ease;
}

.social-icon:hover {
  transition: color 0.5s ease, background-color 0.5s ease, transform 2s ease;
  transform: translate(0, -2px);
}
```

- [ ] **Step 2: Write `src/layouts/Base.astro`**

This replaces `index.html`, `App.vue`, `main.ts`, and the theme initialization logic. The inline `<script is:inline>` in `<head>` sets the theme attribute before render (prevents FOUC).

```astro
---
interface Props {
  title: string;
  description?: string;
}

const { title, description = "portfolio, bio, and dev stack of joey lai." } = Astro.props;
---

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
    <meta name="description" content="jlai's development profile, bio, and blog for captured learnings and miscellaneous information.">
    <meta name="author" content="joey lai">
    <meta name="keywords" content="Joey Lai, software developer, Calgary, engineering, StellarAlgo, tech stack">

    <meta property="og:type" content="website">
    <meta property="og:url" content="https://jlai.ca/">
    <meta property="og:title" content={title}>
    <meta property="og:description" content={description}>
    <meta property="og:image" content="https://jlai.ca/img/self.png">

    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://jlai.ca/">
    <meta property="twitter:title" content={title}>
    <meta property="twitter:description" content={description}>
    <meta property="twitter:image" content="https://jlai.ca/img/self.png">

    <meta http-equiv="Cache-control" content="public">
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧑🏻‍💻</text></svg>">
    <link rel="manifest" href="/manifest.json" />

    <!-- Theme init: prevents flash of wrong theme -->
    <script is:inline>
      (function() {
        var saved = localStorage.getItem('theme');
        if (saved) {
          document.documentElement.setAttribute('data-theme', saved);
        }
      })();
    </script>

    <!-- Font Awesome 4 -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  </head>
  <body>
    <slot />
  </body>
</html>

<style is:global>
  @import '../style.css';
</style>
```

- [ ] **Step 3: Verify styles render correctly**

```bash
npm run dev
```

Create a temporary `src/pages/index.astro` with basic content to verify Tailwind classes and Catppuccin theme work. Then remove it before next task.

- [ ] **Step 4: Commit**

```bash
git add src/style.css src/layouts/Base.astro
git commit -m "feat: add base layout with global styles and theme system"
```

---

## Task 3: Migrate ThemeToggle as a Svelte island

**Files:**
- Create: `src/components/ThemeToggle.svelte`

**Interfaces:**
- Consumes: Theme CSS variables from `src/style.css`
- Produces: `<ThemeToggle client:load />` component for use in all pages

**Steps:**

- [ ] **Step 1: Write `src/components/ThemeToggle.svelte`**

Convert the Vue `<script setup>` + `<template>` to Svelte 5 runes syntax. The component reads/writes `data-theme` on `<html>` and persists to `localStorage`.

```svelte
<script>
  let isDark = $state(false);

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    isDark = next === 'dark';
  }

  $effect(() => {
    const current = document.documentElement.getAttribute('data-theme');
    if (current) {
      isDark = current === 'dark';
    } else {
      isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  });
</script>

<button
  onclick={toggleTheme}
  class="p-2 rounded-full hover:bg-ctp-surface0 transition-colors duration-200 opacity-40 hover:opacity-100 group"
  aria-label="Toggle theme"
>
  {#if !isDark}
    <i class="fa fa-sun-o text-[16px]"></i>
  {:else}
    <i class="fa fa-moon-o text-[16px]"></i>
  {/if}
</button>
```

- [ ] **Step 2: Verify the theme toggle works**

```bash
npm run dev
```

Add `<ThemeToggle client:load />` to a test page, verify sun/moon toggle works and persists to localStorage.

- [ ] **Step 3: Commit**

```bash
git add src/components/ThemeToggle.svelte
git commit -m "feat: add ThemeToggle as Svelte island"
```

---

## Task 4: Migrate Typewriter as a Svelte island

**Files:**
- Create: `src/components/Typewriter.svelte`

**Interfaces:**
- Consumes: Font and theme CSS variables
- Produces: Animated typewriter text with blinking cursor, accepts link destinations as props

**Steps:**

- [ ] **Step 1: Write `src/components/Typewriter.svelte`**

Convert the Vue ref-based typing logic to Svelte 5 runes. It accepts props for the link text and destinations (experience page URL, stack page URL) so the Astro pages can configure them.

```svelte
<script>
  let {
    experienceHref = '/experience',
    stackHref = '/stack',
  } = $props();

  let p1Text = $state('');
  let p2Text = $state('');
  let p2Link = $state('');
  let p3Text = $state('');
  let p3Link = $state('');
  let p4Text = $state('');
  let p4Link = $state('');
  let typingPhase = $state(0);
  let isTyping = $state(false);

  $effect(() => {
    const steps = [
      { text: "software developer, tinkerer and lifelong learner. passionate about emerging tech, product and solving customer problems.", phase: 1, delay: 200 },
      { text: "leading engineering at ", phase: 2 },
      { text: "stellaralgo", phase: 3 },
      { text: "check out what I've done ", phase: 4 },
      { text: "before", phase: 5, delay: 200 },
      { text: "here are some of the ", phase: 6 },
      { text: "tools I love to use", phase: 7 },
    ];

    let cancelled = false;

    async function run() {
      await new Promise(r => setTimeout(r, 400));
      for (const step of steps) {
        if (cancelled) return;
        typingPhase = step.phase;
        let accumulated = '';
        isTyping = true;
        for (let i = 0; i <= step.text.length; i++) {
          if (cancelled) return;
          accumulated = step.text.slice(0, i);
          if (step.phase === 1) p1Text = accumulated;
          else if (step.phase === 2) p2Text = accumulated;
          else if (step.phase === 3) p2Link = accumulated;
          else if (step.phase === 4) p3Text = accumulated;
          else if (step.phase === 5) p3Link = accumulated;
          else if (step.phase === 6) p4Text = accumulated;
          else if (step.phase === 7) p4Link = accumulated;
          let currentSpeed = 35;
          if (i > 0) {
            const char = step.text[i - 1];
            if (char === '.' || char === '!' || char === '?') currentSpeed += 200;
            else if (char === ',') currentSpeed += 100;
            else currentSpeed += Math.random() * 30 - 15;
          }
          if (i < step.text.length) {
            await new Promise(r => setTimeout(r, Math.max(10, currentSpeed)));
          }
        }
        isTyping = false;
        if (step.delay) await new Promise(r => setTimeout(r, step.delay));
      }
      typingPhase = 8;
    }
    run();
    return () => { cancelled = true; };
  });
</script>

<div class="space-y-6 mb-8">
  <p class="whitespace-pre-wrap">
    <span>{p1Text}</span><span class:blinking-cursor={typingPhase === 1}></span>
  </p>
  {#if typingPhase >= 2}
    <p class="whitespace-pre-wrap">
      <span>{p2Text}</span>
      <span class:blinking-cursor={typingPhase === 2}></span>
      {#if typingPhase >= 3}
        <a href="https://stellaralgo.com" target="_blank" rel="noopener noreferrer" class="!no-underline">
          <span>{p2Link}</span>
          {#if typingPhase === 3}
            <span class="blinking-cursor"></span>
          {/if}
        </a>
      {/if}
    </p>
  {/if}
  {#if typingPhase >= 4}
    <p class="whitespace-pre-wrap">
      <span>{p3Text}</span>
      <span class:blinking-cursor={typingPhase === 4}></span>
      {#if typingPhase >= 5}
        <a href={experienceHref} class="!no-underline">
          <span>{p3Link}</span>
          {#if typingPhase === 5}
            <span class="blinking-cursor"></span>
          {/if}
        </a>
      {/if}
    </p>
  {/if}
  {#if typingPhase >= 6}
    <p class="whitespace-pre-wrap mb-0">
      <span>{p4Text}</span>
      <span class:blinking-cursor={typingPhase === 6}></span>
      {#if typingPhase >= 7}
        <a href={stackHref} class="!no-underline">
          <span>{p4Link}</span>
          {#if typingPhase === 7}
            <span class="blinking-cursor"></span>
          {/if}
        </a>
      {/if}
    </p>
  {/if}
</div>

{#if typingPhase >= 8}
  <div class="mb-4 opacity-20 text-text-primary">—</div>
  <div class="blinking-cursor"></div>
{/if}

<style>
  .blinking-cursor {
    display: inline-block;
    width: 1ch;
    height: 1.1em;
    margin-left: 2px;
    background-color: var(--color-text-primary);
    animation: blink 1s step-end infinite;
    vertical-align: -0.1em;
  }

  :global(#homepage.is-typing) .blinking-cursor {
    animation: none !important;
    opacity: 1 !important;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
</style>
```

Note: The `.is-typing` class from the Vue version toggled `animation: none` on the cursor during active typing. In the Svelte version, `isTyping` is tracked but the CSS class approach is simpler — we can add `class:is-typing={isTyping}` on the homepage wrapper div in the Astro page, or handle it purely in the Svelte component. The version above keeps the CSS rule approach: the Astro page's `#homepage` div gets the `is-typing` class conditionally.

- [ ] **Step 2: Verify the typewriter animation works**

```bash
npm run dev
```

Add `<Typewriter client:load />` to a test page, verify typing animation completes through all 7 phases with cursor, and that links appear at the correct time.

- [ ] **Step 3: Commit**

```bash
git add src/components/Typewriter.svelte
git commit -m "feat: add Typewriter as Svelte island"
```

---

## Task 5: Create data files for Stack and Experience

**Files:**
- Create: `src/data/stack.ts`
- Create: `src/data/experience.ts`

**Interfaces:**
- Produces: Typed data arrays imported by the Astro pages

**Steps:**

- [ ] **Step 1: Write `src/data/stack.ts`**

Extract the `stackItems` array and grouping logic from `src/components/Stack/index.vue`.

```ts
export interface StackItem {
  name: string;
  category: string;
  description: string;
  icon?: string;
}

export const stackItems: StackItem[] = [
  { name: 'typescript', category: 'languages', description: 'main language', icon: 'https://www.google.com/s2/favicons?domain=typescriptlang.org&sz=32' },
  { name: 'deno', category: 'languages', description: 'modern runtime', icon: 'https://www.google.com/s2/favicons?domain=deno.com&sz=32' },
  { name: 'python', category: 'languages', description: 'scripting & backend', icon: 'https://www.google.com/s2/favicons?domain=python.org&sz=32' },
  { name: 'vuejs', category: 'languages', description: 'frontend choices', icon: 'https://www.google.com/s2/favicons?domain=vuejs.org&sz=32' },
  { name: 'tailwindcss', category: 'languages', description: 'styling', icon: 'https://www.google.com/s2/favicons?domain=tailwindcss.com&sz=32' },
  { name: 'aws', category: 'infrastructure', description: 'cloud provider', icon: 'https://www.google.com/s2/favicons?domain=aws.amazon.com&sz=32' },
  { name: 'cloudflare', category: 'infrastructure', description: 'zero trust', icon: 'https://www.google.com/s2/favicons?domain=cloudflare.com&sz=32' },
  { name: 'proxmox', category: 'infrastructure', description: 'hypervisor', icon: 'https://www.google.com/s2/favicons?domain=proxmox.com&sz=32' },
  { name: 'terraform', category: 'infrastructure', description: 'iac', icon: 'https://www.google.com/s2/favicons?domain=terraform.io&sz=32' },
  { name: 'docker', category: 'infrastructure', description: 'containerization', icon: 'https://www.google.com/s2/favicons?domain=docker.com&sz=32' },
  { name: 'mongodb', category: 'databases', description: 'nosql store', icon: 'https://www.google.com/s2/favicons?domain=mongodb.com&sz=32' },
  { name: 'sqlite', category: 'databases', description: 'embedded database', icon: 'https://www.google.com/s2/favicons?domain=sqlite.org&sz=32' },
  { name: 'duckdb', category: 'databases', description: 'analytical database', icon: 'https://www.google.com/s2/favicons?domain=duckdb.org&sz=32' },
  { name: 'vs code', category: 'apps', description: 'primary editor', icon: 'https://www.google.com/s2/favicons?domain=code.visualstudio.com&sz=32' },
  { name: 'antigravity', category: 'apps', description: 'agentic coding assistant', icon: 'https://www.google.com/s2/favicons?domain=antigravity.google.com&sz=32' },
  { name: 'zen browser', category: 'apps', description: 'primary browser', icon: 'https://www.google.com/s2/favicons?domain=zen-browser.app&sz=32' },
  { name: 'raycast', category: 'apps', description: 'productivity', icon: 'https://www.google.com/s2/favicons?domain=raycast.com&sz=32' },
  { name: 'aerospace', category: 'apps', description: 'tiling window manager', icon: 'https://www.google.com/s2/favicons?domain=nikitabobko.github.io/AeroSpace/guide&sz=32' },
  { name: 'stats menu', category: 'apps', description: 'system monitor', icon: 'https://raw.githubusercontent.com/exelban/stats/master/Stats/Supporting%20Files/Assets.xcassets/AppIcon.appiconset/icon_256x256.png' },
  { name: 'doll', category: 'apps', description: 'menu bar vibes', icon: 'https://raw.githubusercontent.com/xiaogdgenuine/Doll/refs/heads/main/Doll/Assets.xcassets/AppIcon.appiconset/32.png' },
  { name: '1password', category: 'apps', description: 'security', icon: 'https://www.google.com/s2/favicons?domain=1password.com&sz=32' },
  { name: 'obsidian', category: 'apps', description: 'knowledge base', icon: 'https://www.google.com/s2/favicons?domain=obsidian.md&sz=32' },
  { name: 'notion', category: 'apps', description: 'documentation', icon: 'https://www.google.com/s2/favicons?domain=notion.so&sz=32' },
  { name: 'ghostty', category: 'terminal', description: 'terminal emulator', icon: 'https://www.google.com/s2/favicons?domain=ghostty.org&sz=32' },
  { name: 'tmux', category: 'terminal', description: 'terminal multiplexer', icon: 'https://raw.githubusercontent.com/tmux/tmux/refs/heads/master/logo/favicon.ico' },
  { name: 'starship', category: 'terminal', description: 'cross-shell prompt', icon: 'https://www.google.com/s2/favicons?domain=starship.rs&sz=32' },
  { name: 'opencode', category: 'terminal', description: 'ai coding agent', icon: 'https://www.google.com/s2/favicons?domain=opencode.ai&sz=32' },
];

export type StackGroup = Record<string, StackItem[]>;

export function getGroupedStack(): StackGroup {
  const groups: StackGroup = {
    'languages / frontend': [],
    'infrastructure': [],
    'databases': [],
    'software': [],
    'terminal / workflow': [],
  };

  for (const item of stackItems) {
    if (item.category === 'languages') groups['languages / frontend'].push(item);
    else if (item.category === 'infrastructure') groups['infrastructure'].push(item);
    else if (item.category === 'databases') groups['databases'].push(item);
    else if (item.category === 'apps') groups['software'].push(item);
    else if (item.category === 'terminal') groups['terminal / workflow'].push(item);
  }

  return groups;
}
```

- [ ] **Step 2: Write `src/data/experience.ts`**

```ts
export interface Job {
  company: string;
  role: string;
  duration: string;
}

export const jobs: Job[] = [
  { company: 'stellaralgo', role: 'svp engineering', duration: '2017 - current' },
  { company: 'jlai consulting', role: 'founder', duration: '2013 - current' },
  { company: 'duck labs', role: 'product development & partner', duration: '2016 - 2020' },
  { company: 'knelf', role: 'software developer', duration: '2014 - 2016' },
  { company: 'evoco / itfordev', role: 'software developer', duration: '2013 - 2014' },
  { company: 'cgi', role: 'software developer', duration: '2011 - 2013' },
  { company: 'rogers', role: 'sales consultant', duration: '2008 - 2011' },
];

export function getCurrentJobs(): Job[] {
  return jobs.filter((j) => j.duration.includes('current'));
}

export function getPastJobs(): Job[] {
  return jobs.filter((j) => !j.duration.includes('current'));
}
```

- [ ] **Step 3: Commit**

```bash
git add src/data/stack.ts src/data/experience.ts
git commit -m "feat: extract stack and experience data into TypeScript modules"
```

---

## Task 6: Create the Home page

**Files:**
- Create: `src/pages/index.astro`

**Interfaces:**
- Consumes: `Base.astro` layout, `ThemeToggle.svelte`, `Typewriter.svelte`
- Produces: Home page at `/`

**Steps:**

- [ ] **Step 1: Write `src/pages/index.astro`**

```astro
---
import Base from '../layouts/Base.astro';
import ThemeToggle from '../components/ThemeToggle.svelte';
import Typewriter from '../components/Typewriter.svelte';
---

<Base title="joey lai • software developer">
  <div id="homepage" class="flex justify-center w-full min-h-full py-8 md:py-12 px-6">
    <div class="max-w-[500px] w-full text-left relative">
      <div class="absolute -top-2 right-0">
        <ThemeToggle client:load />
      </div>

      <div class="flex flex-row gap-6 md:gap-8 items-start mb-12">
        <img src="/img/self.png" alt="Joey Lai" class="w-20 h-20 rounded-full border border-gray-100 flex-shrink-0" />
        <div class="flex-1 mt-1">
          <h1 class="font-bold mb-1">joey lai</h1>
          <p class="text-text-secondary mb-2 block">calgary, ab</p>
          <div class="flex items-center gap-4 text-[14px] opacity-30 -ml-0.5">
            <a href="https://ca.linkedin.com/in/jlai403" target="_blank" rel="noopener noreferrer" class="social-icon linkedin">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="https://github.com/jlai403" target="_blank" rel="noopener noreferrer" class="social-icon github">
              <i class="fa fa-github"></i>
            </a>
            <a href="https://instagram.com/_jlai/" target="_blank" rel="noopener noreferrer" class="social-icon instagram">
              <i class="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="mb-8 opacity-20 text-text-primary">—</div>

      <Typewriter client:load experienceHref="/experience" stackHref="/stack" />
    </div>
  </div>

  <style>
    .social-icon {
      text-decoration: none !important;
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 300ms;
      color: var(--color-text-primary) !important;
      font-style: normal;
    }
    .social-icon:hover {
      opacity: 1;
      transform: translateY(-2px);
    }
    .social-icon.linkedin:hover { color: var(--color-ctp-blue) !important; }
    .social-icon.github:hover { color: var(--color-ctp-mauve) !important; }
    .social-icon.instagram:hover { color: var(--color-ctp-pink) !important; }
  </style>
</Base>
```

- [ ] **Step 2: Verify home page renders and typewriter works**

```bash
npm run dev
```

Navigate to `http://localhost:3000`, verify: photo, name, social links, typewriter animation, theme toggle all work.

- [ ] **Step 3: Commit**

```bash
git add src/pages/index.astro src/style.css
git commit -m "feat: add home page with typewriter island"
```

---

## Task 7: Create the Stack page

**Files:**
- Create: `src/pages/stack.astro`

**Interfaces:**
- Consumes: `Base.astro` layout, `ThemeToggle.svelte`, `src/data/stack.ts`
- Produces: Stack page at `/stack`

**Steps:**

- [ ] **Step 1: Write `src/pages/stack.astro`**

```astro
---
import Base from '../layouts/Base.astro';
import ThemeToggle from '../components/ThemeToggle.svelte';
import { getGroupedStack } from '../data/stack';

const groupedStack = getGroupedStack();
---

<Base title="joey lai • stack">
  <div id="stack-page" class="flex justify-center w-full min-h-full py-8 md:py-12 px-6">
    <div class="max-w-[500px] w-full text-left">
      <div class="flex justify-between items-baseline mb-8">
        <div class="flex items-baseline gap-4">
          <h1 class="font-bold mb-0">stack</h1>
          <a href="https://github.com/jlai403/.dotfiles" target="_blank" rel="noopener noreferrer" class="text-[12px] !no-underline">.dotfiles</a>
        </div>
        <div class="flex items-center gap-2">
          <a href="/" class="text-[12px] !no-underline">index</a>
          <ThemeToggle client:load />
        </div>
      </div>

      <div class="w-full">
        {Object.entries(groupedStack).map(([groupName, items]) => (
          <div class="mb-8 last:mb-0">
            <div class="grid grid-cols-2 pb-2 mb-2 opacity-40 text-[10px] uppercase tracking-wider font-bold">
              <div>{groupName}</div>
              <div>description</div>
            </div>

            <div class="space-y-0 text-[13px] group/stack">
              {items.map((item) => (
                <div class="grid grid-cols-2 py-1.5 items-center group transition-all duration-300 group-hover/stack:opacity-30 hover:!opacity-100">
                  <div class="flex items-center gap-3">
                    {item.icon && <img src={item.icon} class="w-4 h-4 transition-all duration-300" alt={item.name} />}
                    <span class="font-medium lowercase">{item.name}</span>
                  </div>
                  <div class="text-text-secondary lowercase">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</Base>
```

Note: `router-link to="/"` becomes `<a href="/">` since this is no longer a SPA.

- [ ] **Step 2: Verify stack page renders correctly**

```bash
npm run dev
```

Navigate to `http://localhost:3000/stack`, verify: all 5 categories, hover dimming, theme toggle, `.dotfiles` link, `index` link all work.

- [ ] **Step 3: Commit**

```bash
git add src/pages/stack.astro
git commit -m "feat: add stack page"
```

---

## Task 8: Create the Experience page

**Files:**
- Create: `src/pages/experience.astro`

**Interfaces:**
- Consumes: `Base.astro` layout, `ThemeToggle.svelte`, `src/data/experience.ts`
- Produces: Experience page at `/experience`

**Steps:**

- [ ] **Step 1: Write `src/pages/experience.astro`**

```astro
---
import Base from '../layouts/Base.astro';
import ThemeToggle from '../components/ThemeToggle.svelte';
import { getCurrentJobs, getPastJobs } from '../data/experience';

const currentJobs = getCurrentJobs();
const pastJobs = getPastJobs();
---

<Base title="joey lai • experience">
  <div id="experience-page" class="flex justify-center w-full min-h-full py-8 md:py-12 px-6">
    <div class="max-w-[500px] w-full text-left">
      <div class="flex justify-between items-baseline mb-8">
        <h1 class="font-bold mb-0">experience</h1>
        <div class="flex items-center gap-2">
          <a href="/" class="text-[12px] !no-underline">index</a>
          <ThemeToggle client:load />
        </div>
      </div>

      <div class="w-full">
        <div class="mb-8">
          <div class="grid grid-cols-2 pb-2 mb-4 opacity-40 text-[10px] uppercase tracking-wider font-bold">
            <div>current roles</div>
            <div class="text-right">period</div>
          </div>

          <div class="space-y-4 text-[13px] group/stack">
            {currentJobs.map((job) => (
              <div class="grid grid-cols-2 py-0 items-start group transition-all duration-300 group-hover/stack:opacity-30 hover:!opacity-100">
                <div class="flex flex-col">
                  <span class="font-medium lowercase mb-0.5 leading-tight">{job.company}</span>
                  <span class="text-[11px] text-text-secondary lowercase transition-opacity group-hover:opacity-100">{job.role}</span>
                </div>
                <div class="text-text-secondary lowercase text-right tabular-nums pt-0.5">{job.duration}</div>
              </div>
            ))}
          </div>
        </div>

        <div class="mb-8 last:mb-0">
          <div class="grid grid-cols-2 pb-2 mb-4 opacity-40 text-[10px] uppercase tracking-wider font-bold">
            <div>past roles</div>
            <div class="text-right">period</div>
          </div>

          <div class="space-y-4 text-[13px] group/stack">
            {pastJobs.map((job) => (
              <div class="grid grid-cols-2 py-0 items-start group transition-all duration-300 group-hover/stack:opacity-30 hover:!opacity-100">
                <div class="flex flex-col">
                  <span class="font-medium lowercase mb-0.5 leading-tight">{job.company}</span>
                  <span class="text-[11px] text-text-secondary lowercase transition-opacity group-hover:opacity-100">{job.role}</span>
                </div>
                <div class="text-text-secondary lowercase text-right tabular-nums pt-0.5">{job.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</Base>
```

- [ ] **Step 2: Verify experience page renders correctly**

```bash
npm run dev
```

Navigate to `http://localhost:3000/experience`, verify: 2 current roles, 5 past roles, hover dimming, theme toggle, `index` link.

- [ ] **Step 3: Commit**

```bash
git add src/pages/experience.astro
git commit -m "feat: add experience page"
```

---

## Task 9: Update deployment and clean up

**Files:**
- Modify: `.github/workflows/main.yml`
- Move: `CNAME` → `public/CNAME`
- Delete: `index.html`, `src/main.ts`, `src/App.vue`
- Delete: `src/components/Home/index.vue`, `src/components/Stack/index.vue`, `src/components/Experience/index.vue`
- Delete: `src/components/ThemeToggle.vue`
- Delete: `src/vite-env.d.ts`, `src/vue-shim.d.ts`, `vite.config.ts`, `tsconfig.node.json`

**Interfaces:**
- Consumes: All tasks 1-8 complete
- Produces: Clean repo with only Astro files, updated CI

**Steps:**

- [ ] **Step 1: Move CNAME to `public/CNAME`**

```bash
mv CNAME public/CNAME
```

- [ ] **Step 2: Update GitHub Actions workflow**

Edit `.github/workflows/main.yml` — build command changes to `astro build`. Output folder stays `dist` (Astro default).

```yaml
name: CI

on:
  push:
    branches:
      - main

permissions:
  contents: write

jobs:
  build:
    runs-on: ubuntu-latest
    environment: github-pages

    steps:
      - name: Checkout
        uses: actions/checkout@v6

      - name: Setup Node
        uses: actions/setup-node@v6
        with:
          node-version: 20

      - name: Build
        run: |
          npm install
          npm run-script build

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4.8.0
        with:
          token: ${{ secrets.DEPLOY_ACCESS_TOKEN }}
          branch: gh-pages
          folder: dist
```

- [ ] **Step 3: Delete old Vue/Vite files**

```bash
rm -f index.html
rm -f src/main.ts
rm -f src/App.vue
rm -f src/components/Home/index.vue
rm -f src/components/Stack/index.vue
rm -f src/components/Experience/index.vue
rm -f src/components/ThemeToggle.vue
rm -f src/vite-env.d.ts
rm -f src/vue-shim.d.ts
rm -f vite.config.ts
rm -f tsconfig.node.json
rmdir src/components/Home 2>/dev/null
rmdir src/components/Stack 2>/dev/null
rmdir src/components/Experience 2>/dev/null
```

- [ ] **Step 4: Verify production build works**

```bash
npm run build
npm run preview
```

Expected: `dist/` directory created with `index.html`, `stack/index.html`, `experience/index.html`, plus `CNAME` at root.

- [ ] **Step 5: Verify CNAME is at root of dist/**

```bash
ls dist/CNAME
cat dist/CNAME
```

Expected: `dist/CNAME` exists and contains `jlai.ca`.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "chore: clean up old Vue/Vite files, update CI for Astro"
```

---

## Task 10: Final verification and cleanup

**Files:**
- None (verification only)

**Interfaces:**
- Consumes: All tasks 1-9 complete
- Produces: Verified working site ready for merge

**Steps:**

- [ ] **Step 1: Full dev server smoke test**

```bash
npm run dev
```

Navigate to all three pages and verify:
- `/` — Home page: photo, name, social links, typewriter animation completes, theme toggle works
- `/stack` — Stack page: all categories render, hover effects work, links to `.dotfiles` and `index` work
- `/experience` — Experience page: current roles (2), past roles (5), hover effects work, link to `index` works
- Theme toggle persists across page reloads and page navigation
- No console errors

- [ ] **Step 2: Production build test**

```bash
npm run build
```

Expected: Build completes without errors. `dist/` contains proper static files.

- [ ] **Step 3: Verify dist/ structure**

```bash
ls -la dist/
```

Expected:
```
dist/
├── CNAME
├── index.html
├── stack/
│   └── index.html
├── experience/
│   └── index.html
├── img/
│   └── self.png
├── res/
├── _astro/
│   ├── [hashed CSS files]
│   └── [hashed JS files for Svelte islands only]
├── manifest.json
├── robots.txt
└── sitemap.xml
```

- [ ] **Step 4: Check JS bundle size**

The only client-side JS should be the Svelte islands (ThemeToggle + Typewriter). Verify by checking file sizes in `dist/_astro/`.

- [ ] **Step 5: Push branch and create PR**

```bash
git push origin feat/astro-svelte-migration
gh pr create --title "Migrate to Astro + Svelte" --body "Migrates from Vue SPA to Astro with Svelte islands. Key changes: file-based routing, static HTML output, zero-JS default with Svelte islands for interactivity."
```

---

## Migration Notes

### URL changes
From `jlai.ca/#/stack` → `jlai.ca/stack`. If anyone has bookmarks, they'll break. Consider adding a small redirect script or `astro.config.mjs` redirect rules.

### What stays the same
- Visual design (Catppuccin theme, JetBrains Mono, identical layout)
- Typewriter animation (same timing, same phases)
- Social links, profile photo, all content
- Theme toggle behavior (localStorage persistence, system preference)
- Stack and Experience data (identical items)
- GitHub Pages deployment (same CI action, same `dist/` output)

### What improves
- Each page is proper static HTML with its own `<title>` and meta tags (better SEO)
- Zero JavaScript by default — only the two Svelte islands ship JS
- No client-side router overhead
- Faster initial page loads
- Better accessibility (semantic HTML pages)

### Potential gotchas
1. **Font Awesome:** Loaded via CDN `<link>` in `Base.astro` head instead of npm import
2. **`--color-ctp-*` aliases:** Need to be defined in `style.css` for social icon hover colors (included in Task 2)
3. **`is-typing` class:** The Typewriter Svelte component handles cursor animation internally; the `#homepage.is-typing` CSS rule in `style.css` is no longer needed (removed in Task 2's CSS)
4. **Svelte `$effect` cleanup:** The returned cleanup function in Typewriter cancels the async typing sequence if the component unmounts (e.g., during SSR)
