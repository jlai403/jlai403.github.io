<template>
  <div class="relative min-h-screen">
    <router-view />
  </div>
</template>

<script setup lang="ts">
// Theme management is now handled in components/ThemeToggle.vue
// and initialized in main.ts
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
