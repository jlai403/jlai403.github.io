<template>
  <button 
    @click="toggleTheme" 
    class="p-2 rounded-full hover:bg-ctp-surface0 transition-colors duration-200 opacity-40 hover:opacity-100 group"
    aria-label="Toggle theme"
  >
    <i v-if="!isDark" class="fa fa-sun-o text-[16px]"></i>
    <i v-else class="fa fa-moon-o text-[16px]"></i>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(false)

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
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  // Sync with system theme changes if no manual preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      isDark.value = e.matches
    }
  })
})
</script>
