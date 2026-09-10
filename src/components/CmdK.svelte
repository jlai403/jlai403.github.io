<script>
  let open = $state(false);
  let query = $state('');
  let activeIndex = $state(0);
  let inputEl;

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  }

  const items = [
    { id: 'index', label: 'index', hint: 'home', keywords: 'home start', type: 'nav', href: '/' },
    { id: 'stack', label: 'stack', hint: 'tools i use', keywords: 'tools software stack', type: 'nav', href: '/stack' },
    { id: 'experience', label: 'experience', hint: 'work history', keywords: 'work jobs resume', type: 'nav', href: '/experience' },
    { id: 'theme', label: 'toggle theme', hint: 'dark / light', keywords: 'dark light theme appearance', type: 'action', run: toggleTheme },
    { id: 'github', label: 'github', hint: 'jlai403', keywords: 'github social code', type: 'external', href: 'https://github.com/jlai403' },
    { id: 'linkedin', label: 'linkedin', hint: 'jlai403', keywords: 'linkedin social work', type: 'external', href: 'https://ca.linkedin.com/in/jlai403' },
    { id: 'dotfiles', label: '.dotfiles', hint: 'github', keywords: 'dotfiles config dotfiles', type: 'external', href: 'https://github.com/jlai403/.dotfiles' },
  ];

  const filtered = $derived(
    query.trim() === ''
      ? items
      : items.filter((item) =>
          `${item.label} ${item.keywords}`.toLowerCase().includes(query.trim().toLowerCase())
        )
  );

  function close() {
    open = false;
    query = '';
    activeIndex = 0;
  }

  function select(item) {
    if (!item) return;
    if (item.type === 'nav') window.location.href = item.href;
    else if (item.type === 'external') window.open(item.href, '_blank', 'noopener,noreferrer');
    else if (item.type === 'action') item.run();
    close();
  }

  function onGlobalKey(event) {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      if (open) close();
      else open = true;
    }
  }

  function onInputKey(event) {
    if (event.key === 'Escape') { event.preventDefault(); close(); }
    else if (event.key === 'ArrowDown') { event.preventDefault(); activeIndex = Math.min(activeIndex + 1, filtered.length - 1); }
    else if (event.key === 'ArrowUp') { event.preventDefault(); activeIndex = Math.max(activeIndex - 1, 0); }
    else if (event.key === 'Enter') { event.preventDefault(); select(filtered[activeIndex]); }
  }

  $effect(() => {
    if (open && inputEl) inputEl.focus();
  });
</script>

<svelte:window onkeydown={onGlobalKey} />

{#if open}
  <div class="cmdk-overlay" onclick={close} role="presentation">
    <div class="cmdk-panel" onclick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Command menu">
      <input
        bind:this={inputEl}
        bind:value={query}
        oninput={() => (activeIndex = 0)}
        onkeydown={onInputKey}
        class="cmdk-input"
        placeholder="jump to..."
        aria-label="Search"
        spellcheck="false"
        autocomplete="off"
      />
      <div class="cmdk-list" role="listbox">
        {#each filtered as item, i (item.id)}
          <button
            type="button"
            class="cmdk-item"
            class:active={i === activeIndex}
            role="option"
            aria-selected={i === activeIndex}
            onclick={() => select(item)}
            onmouseenter={() => (activeIndex = i)}
          >
            <span>{item.label}</span>
            <span class="cmdk-hint">{item.hint}</span>
          </button>
        {/each}
        {#if filtered.length === 0}
          <div class="cmdk-empty">no results</div>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
  .cmdk-overlay {
    position: fixed;
    inset: 0;
    z-index: 50;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 15vh;
    background: color-mix(in srgb, var(--color-bg-primary) 70%, transparent);
    backdrop-filter: blur(4px);
    animation: cmdk-fade 120ms ease-out;
  }

  .cmdk-panel {
    width: 100%;
    max-width: 440px;
    margin: 0 24px;
    background: var(--color-bg-primary);
    border: 1px solid var(--color-border);
    border-radius: 12px;
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.18);
    overflow: hidden;
    animation: cmdk-rise 140ms ease-out;
  }

  .cmdk-input {
    width: 100%;
    padding: 14px 16px;
    font: inherit;
    font-size: 14px;
    color: var(--color-text-primary);
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--color-border);
    outline: none;
  }

  .cmdk-input::placeholder {
    color: var(--color-text-secondary);
    opacity: 0.6;
  }

  .cmdk-list {
    max-height: 320px;
    overflow-y: auto;
    padding: 6px;
  }

  .cmdk-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 8px 10px;
    font: inherit;
    font-size: 13px;
    color: var(--color-text-primary);
    background: transparent;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    text-align: left;
  }

  .cmdk-item.active {
    background: color-mix(in srgb, var(--color-text-primary) 8%, transparent);
  }

  .cmdk-hint {
    color: var(--color-text-secondary);
    font-size: 11px;
    opacity: 0.7;
  }

  .cmdk-empty {
    padding: 14px 10px;
    font-size: 13px;
    color: var(--color-text-secondary);
    opacity: 0.6;
  }

  @keyframes cmdk-fade {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes cmdk-rise {
    from { opacity: 0; transform: translateY(-6px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>
