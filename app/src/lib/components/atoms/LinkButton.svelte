<script>
  let {
    href = "#",
    variant = "primary",
    class: className = "",
    external = false,
  } = $props();

  const target = $derived(external ? "_blank" : undefined);
  const rel = $derived(external ? "noopener noreferrer" : undefined);
</script>

<a {href} {target} {rel} class="link-button link-button--{variant} {className}">
  <slot />
</a>

<style>
  .link-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    font-family: var(--font-primary);
    font-size: 1rem;
    text-decoration: none;
    transition: all 0.2s ease;
    cursor: pointer;
  }

  .link-button--primary {
    background-color: var(--accent);
    color: var(--bg-primary);
    border: 2px solid var(--accent);
  }

  .link-button--primary:hover {
    background-color: transparent;
    color: var(--accent);
  }

  .link-button--ghost {
    background-color: transparent;
    color: var(--text-primary);
    border: 2px solid var(--text-primary);
  }

  .link-button--ghost:hover {
    background-color: var(--text-primary);
    color: var(--bg-primary);
  }

  @media (max-width: 768px) {
    .link-button {
      padding: 0.625rem 1.25rem;
      font-size: 0.875rem;
    }
  }
</style>
