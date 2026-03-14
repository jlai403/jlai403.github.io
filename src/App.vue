<template>
  <div class="relative min-h-screen">
    <!-- Theme Toggle -->
    <button 
      @click="toggleTheme" 
      class="fixed top-6 right-6 z-50 p-2 rounded-full hover:bg-ctp-surface0 transition-colors duration-200 opacity-40 hover:opacity-100 group"
      aria-label="Toggle theme"
    >
      <i v-if="!isDark" class="fa fa-sun-o text-[16px]"></i>
      <i v-else class="fa fa-moon-o text-[16px]"></i>
    </button>
    
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(window.matchMedia('(prefers-color-scheme: dark)').matches)

const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 
                       (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
  
  document.documentElement.setAttribute('data-theme', newTheme)
  localStorage.setItem('theme', newTheme)
  isDark.value = newTheme === 'dark'
}

onMounted(() => {
  const currentTheme = document.documentElement.getAttribute('data-theme')
  if (currentTheme) {
    isDark.value = currentTheme === 'dark'
  }

  // Sync with system theme changes if no manual preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      isDark.value = e.matches
    }
  })
})
</script>

<style>
/* Global scrollbar styling for themes */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: var(--color-bg-primary);
}
::-webkit-scrollbar-thumb {
  background: var(--color-border);
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--color-text-secondary);
}
</style>
