<script>
  let { sticky = true, class: className = "" } = $props();
</script>

<div
  class="vertical-divider {sticky
    ? 'vertical-divider--sticky'
    : ''} {className}"
></div>

<style>
  .vertical-divider {
    width: 1px;
    height: 100%;
    background-color: var(--ink-mid);
    opacity: 0.3;
  }

  .vertical-divider--sticky {
    position: sticky;
    top: 0;
    height: 100vh;
  }

  :global([data-theme="dark"]) .vertical-divider {
    background-color: var(--text-secondary);
    opacity: 0.2;
  }
</style>
