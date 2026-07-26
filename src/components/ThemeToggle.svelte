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
