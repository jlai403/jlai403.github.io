<template>
  <div id="experience-page" class="flex justify-center w-full min-h-full py-12 md:py-[100px] px-6">
    <div class="max-w-[500px] w-full text-left">
      <div class="flex justify-between items-baseline mb-12 pr-10 md:pr-0">
        <h1 class="font-bold mb-0">experience</h1>
        <router-link to="/" class="text-[12px] !no-underline">index</router-link>
      </div>

      <div class="w-full">
        <!-- Current Roles -->
        <div class="mb-12">
          <div class="grid grid-cols-2 pb-2 mb-4 opacity-40 text-[10px] uppercase tracking-wider font-bold">
            <div>current roles</div>
            <div class="text-right">period</div>
          </div>

          <div class="space-y-4 text-[13px] group/stack">
            <div v-for="job in currentJobs" :key="job.company" 
                class="grid grid-cols-2 py-0 items-start group transition-all duration-300 group-hover/stack:opacity-30 hover:!opacity-100">
              <div class="flex flex-col">
                <span class="font-medium lowercase mb-0.5 leading-tight">{{ job.company }}</span>
                <span class="text-[11px] text-text-secondary lowercase transition-opacity group-hover:opacity-100">{{ job.role }}</span>
              </div>
              <div class="text-text-secondary lowercase text-right tabular-nums pt-0.5">{{ job.duration }}</div>
            </div>
          </div>
        </div>

        <!-- Past Roles -->
        <div class="mb-10 last:mb-0">
          <div class="grid grid-cols-2 pb-2 mb-4 opacity-40 text-[10px] uppercase tracking-wider font-bold">
            <div>past roles</div>
            <div class="text-right">period</div>
          </div>

          <div class="space-y-4 text-[13px] group/stack">
            <div v-for="job in pastJobs" :key="job.company" 
                class="grid grid-cols-2 py-0 items-start group transition-all duration-300 group-hover/stack:opacity-30 hover:!opacity-100">
              <div class="flex flex-col">
                <span class="font-medium lowercase mb-0.5 leading-tight">{{ job.company }}</span>
                <span class="text-[11px] text-text-secondary lowercase transition-opacity group-hover:opacity-100">{{ job.role }}</span>
              </div>
              <div class="text-text-secondary lowercase text-right tabular-nums pt-0.5">{{ job.duration }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const jobs = [
  { company: 'stellaralgo', role: 'svp engineering', duration: '2017 - current' },
  { company: 'jlai consulting', role: 'founder', duration: '2013 - current' },
  { company: 'duck labs', role: 'product development & partner', duration: '2016 - 2020' },
  { company: 'knelf', role: 'software developer', duration: '2014 - 2016' },
  { company: 'evoco / itfordev', role: 'software developer', duration: '2013 - 2014' },
  { company: 'cgi', role: 'software developer', duration: '2011 - 2013' },
  { company: 'rogers', role: 'sales consultant', duration: '2008 - 2011' }
]

const currentJobs = computed(() => jobs.filter(job => job.duration.includes('current')));
const pastJobs = computed(() => jobs.filter(job => !job.duration.includes('current')));
</script>

<style scoped>
/* Experience specific styles */
</style>
