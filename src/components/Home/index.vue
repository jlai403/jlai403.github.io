<template>
  <div id="homepage" class="flex justify-center w-full min-h-full py-8 md:py-12 px-6" :class="{ 'is-typing': isTyping }">
    <div class="max-w-[500px] w-full text-left relative">
      <div class="absolute -top-2 right-0">
        <ThemeToggle />
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

      <div class="space-y-6 mb-8">
        <p class="whitespace-pre-wrap">
          <span>{{ p1Text }}</span><span v-if="typingPhase === 1" class="blinking-cursor"></span>
        </p>
        <p class="whitespace-pre-wrap" v-show="typingPhase >= 2">
          <span>{{ p2Text }}</span>
          <span v-if="typingPhase === 2" class="blinking-cursor"></span><a v-show="typingPhase >= 3" href="https://stellaralgo.com" target="_blank" rel="noopener noreferrer" class="!no-underline"><span>{{ p2Link }}</span><span v-if="typingPhase === 3" class="blinking-cursor"></span></a>
        </p>
        <p class="whitespace-pre-wrap" v-show="typingPhase >= 4">
          <span>{{ p3Text }}</span><span v-if="typingPhase === 4" class="blinking-cursor"></span><router-link v-show="typingPhase >= 5" to="/experience" class="!no-underline"><span>{{ p3Link }}</span>
          <span v-if="typingPhase === 5" class="blinking-cursor"></span></router-link>
        </p>
        <p class="whitespace-pre-wrap mb-0" v-show="typingPhase >= 6">
          <span>{{ p4Text }}</span><span v-if="typingPhase === 6" class="blinking-cursor"></span><router-link v-show="typingPhase >= 7" to="/stack" class="!no-underline"><span>{{ p4Link }}</span><span v-if="typingPhase === 7" class="blinking-cursor"></span></router-link>
        </p>
      </div>

      <div v-show="typingPhase >= 8" class="mb-4 opacity-20 text-text-primary">—</div>
      <div v-show="typingPhase >= 8" class="blinking-cursor"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Ref } from 'vue';
import ThemeToggle from '../ThemeToggle.vue';

// Dennis Jin Style Home Refined + Font-Width Cursor

const p1Text = ref("");
const p2Text = ref("");
const p2Link = ref("");
const p3Text = ref("");
const p3Link = ref("");
const p4Text = ref("");
const p4Link = ref("");
const typingPhase = ref(0);
const isTyping = ref(false);

onMounted(() => {
  const typeText = async (text: string, textRef: Ref<string>, speed = 35) => {
    isTyping.value = true;
    for (let i = 0; i <= text.length; i++) {
        textRef.value = text.slice(0, i);
        
        let currentSpeed = speed;
        if (i > 0) {
            const char = text[i - 1];
            if (char === '.' || char === '!' || char === '?') {
              currentSpeed += 200; // Pause at ends of sentences
            } else if (char === ',') {
              currentSpeed += 100; // Pause at commas
            } else {
              currentSpeed += Math.random() * 30 - 15; // Natural human variability
            }
        }
        
        if (i < text.length) {
            await new Promise(r => setTimeout(r, Math.max(10, currentSpeed)));
        }
    }
    isTyping.value = false;
  };

  const runTyping = async () => {
    // Phase 0: Waiting to start
    await new Promise(r => setTimeout(r, 400));
    
    const typingSteps = [
      { text: "software developer, tinkerer and lifelong learner. passionate about emerging tech, product and solving customer problems.", ref: p1Text, delay: 200 },
      { text: "leading engineering at ", ref: p2Text },
      { text: "stellaralgo", ref: p2Link },
      { text: "check out what I've done ", ref: p3Text },
      { text: "before", ref: p3Link, delay: 200 },
      { text: "here are some of the ", ref: p4Text },
      { text: "tools I love to use", ref: p4Link }
    ];

    for (let i = 0; i < typingSteps.length; i++) {
      typingPhase.value = i + 1;
      await typeText(typingSteps[i].text, typingSteps[i].ref as Ref<string>, 35);
      if (typingSteps[i].delay) {
        await new Promise(r => setTimeout(r, typingSteps[i].delay));
      }
    }
    
    // Done, show bottom dash and final cursor
    typingPhase.value = typingSteps.length + 1;
  };
  
  runTyping();
});
</script>

<style scoped>
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

.blinking-cursor {
  display: inline-block;
  width: 1ch;
  height: 1.1em;
  margin-left: 2px;
  background-color: var(--color-text-primary);
  animation: blink 1s step-end infinite;
  vertical-align: -0.1em;
}

#homepage.is-typing .blinking-cursor {
  animation: none !important;
  opacity: 1 !important;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
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
