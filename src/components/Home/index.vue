<template>
  <div id="homepage" class="flex justify-center w-full min-h-full py-12 md:py-[100px] px-6">
    <div class="max-w-[500px] w-full text-left">
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

      <div class="space-y-6 mb-8">
        <p>
          software developer, tinkerer and lifelong learner. passionate about emerging tech, product and solving customer problems.
        </p>
        <p>
          leading engineering at <a href="https://stellaralgo.com" target="_blank" rel="noopener noreferrer">stellaralgo</a>
        </p>
        <p class="mb-0">
          here are some of the <router-link to="/stack">tools I love to use</router-link>
        </p>
      </div>

      <div class="mb-4 opacity-20 text-text-primary">—</div>
      <div class="blinking-cursor"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Dennis Jin Style Home Refined + Font-Width Cursor
</script>

<style scoped>
.social-icon {
  @apply !no-underline transition-all duration-300;
  color: var(--color-text-primary) !important;
  font-style: normal;
}
.social-icon:hover {
  @apply opacity-100;
  transform: translateY(-2px);
}
.social-icon.linkedin:hover { color: var(--color-ctp-blue) !important; }
.social-icon.github:hover { color: var(--color-ctp-mauve) !important; }
.social-icon.instagram:hover { color: var(--color-ctp-pink) !important; }

.blinking-cursor {
  @apply inline-block w-[1ch] h-[1.2em];
  background-color: var(--color-text-primary);
  animation: blink 1.5s step-end infinite;
}

@keyframes blink {
  from, to { opacity: 1; }
  50% { opacity: 0; }
}
</style>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
