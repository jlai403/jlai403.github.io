<template>
  <div id="stack-page" class="flex justify-center w-full min-h-full py-12 md:py-[100px] px-6">
    <div class="max-w-[500px] w-full text-left">
      <div class="flex justify-between items-baseline mb-12">
        <div class="flex items-baseline gap-4">
          <h1 class="font-bold mb-0">stack</h1>
          <a href="https://github.com/jlai403/.dotfiles" target="_blank" rel="noopener noreferrer" class="text-[12px] opacity-40 hover:opacity-100 !no-underline hover:underline">.dotfiles</a>
        </div>
        <router-link to="/" class="text-[12px] opacity-40 hover:opacity-100 !no-underline !italic hover:underline">index</router-link>
      </div>

      <div class="w-full">
        <div v-for="(group, groupName) in groupedStack" :key="groupName" class="mb-10 last:mb-0">
          <div class="grid grid-cols-2 pb-2 mb-2 border-b border-ctp-surface0 opacity-40 text-[10px] uppercase tracking-wider font-bold">
            <div>{{ groupName }}</div>
            <div>description</div>
          </div>

          <div class="space-y-0 text-[13px] group/stack">
            <div v-for="item in group" :key="item.name" 
                class="grid grid-cols-2 py-3 border-b border-ctp-surface0 items-center group transition-all duration-300 group-hover/stack:opacity-30 hover:!opacity-100">
              <div class="flex items-center gap-3">
                <img :src="item.icon" class="w-4 h-4 transition-all duration-300" 
                    v-if="item.icon" :alt="item.name" />
                <span class="font-medium lowercase">{{ item.name }}</span>
              </div>
              <div class="text-text-secondary lowercase">{{ item.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const stackItems = [
  // Languages & Frameworks
  { name: 'typescript', category: 'languages', description: 'main language', icon: 'https://www.google.com/s2/favicons?domain=typescriptlang.org&sz=32' },
  { name: 'deno', category: 'languages', description: 'modern runtime', icon: 'https://www.google.com/s2/favicons?domain=deno.com&sz=32' },
  { name: 'python', category: 'languages', description: 'scripting & backend', icon: 'https://www.google.com/s2/favicons?domain=python.org&sz=32' },
  { name: 'vuejs', category: 'languages', description: 'frontend choices', icon: 'https://www.google.com/s2/favicons?domain=vuejs.org&sz=32' },
  { name: 'tailwindcss', category: 'languages', description: 'styling', icon: 'https://www.google.com/s2/favicons?domain=tailwindcss.com&sz=32' },
  
  // Infrastructure
  { name: 'aws', category: 'infrastructure', description: 'cloud provider', icon: 'https://www.google.com/s2/favicons?domain=aws.amazon.com&sz=32' },
  { name: 'terraform', category: 'infrastructure', description: 'iac', icon: 'https://www.google.com/s2/favicons?domain=terraform.io&sz=32' },
  { name: 'docker', category: 'infrastructure', description: 'containerization', icon: 'https://www.google.com/s2/favicons?domain=docker.com&sz=32' },
  
  // Databases
  { name: 'mongodb', category: 'databases', description: 'nosql store', icon: 'https://www.google.com/s2/favicons?domain=mongodb.com&sz=32' },
  { name: 'sqlite', category: 'databases', description: 'embedded database', icon: 'https://www.google.com/s2/favicons?domain=sqlite.org&sz=32' },
  { name: 'duckdb', category: 'databases', description: 'analytical database', icon: 'https://www.google.com/s2/favicons?domain=duckdb.org&sz=32' },
  
  // Software
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
  
  // Terminal / Workflow
  { name: 'ghostty', category: 'terminal', description: 'terminal emulator', icon: 'https://www.google.com/s2/favicons?domain=ghostty.org&sz=32' },
  { name: 'tmux', category: 'terminal', description: 'terminal multiplexer', icon: 'https://raw.githubusercontent.com/tmux/tmux/refs/heads/master/logo/favicon.ico' },
  { name: 'starship', category: 'terminal', description: 'cross-shell prompt', icon: 'https://www.google.com/s2/favicons?domain=starship.rs&sz=32' },
  { name: 'opencode', category: 'terminal', description: 'open source tools', icon: 'https://www.google.com/s2/favicons?domain=opencode.ai&sz=32' },
]

const groupedStack = computed(() => {
  const groups: Record<string, typeof stackItems> = {
    'languages / frontend': [],
    'infrastructure': [],
    'databases': [],
    'software': [],
    'terminal / workflow': []
  }
  
  stackItems.forEach(item => {
    if (item.category === 'languages') groups['languages / frontend'].push(item)
    else if (item.category === 'infrastructure') groups['infrastructure'].push(item)
    else if (item.category === 'databases') groups['databases'].push(item)
    else if (item.category === 'apps') groups['software'].push(item)
    else if (item.category === 'terminal') groups['terminal / workflow'].push(item)
  })
  
  return groups
})
</script>

<style scoped>
/* Stack specific styles */
</style>
