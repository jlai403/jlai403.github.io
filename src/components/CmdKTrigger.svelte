<script>
  function openPalette() {
    window.dispatchEvent(new CustomEvent('cmdk:open'));
  }
</script>

<button
  type="button"
  onclick={openPalette}
  class="cmdk-trigger"
  aria-label="Open command menu"
  title="Open command menu"
>
  <kbd>⌘K</kbd>
</button>

<style>
  .cmdk-trigger {
    display: inline-flex;
    align-items: center;
    padding: 3px 7px;
    font-family: inherit;
    font-size: 11px;
    line-height: 1;
    color: var(--color-text-primary);
    background: transparent;
    border: 1px solid var(--color-border);
    border-radius: 6px;
    opacity: 0.45;
    cursor: pointer;
    transition: opacity 0.2s ease;
  }

  .cmdk-trigger:hover {
    opacity: 1;
  }
</style>