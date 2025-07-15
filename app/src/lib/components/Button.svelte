<script>
  let {
    href = "",
    variant = "primary",
    class: className = "",
    children,
  } = $props();
</script>

{#if href}
  <a {href} class="button {variant} {className}">
    {@render children()}
  </a>
{:else}
  <button class="button {variant} {className}" type="button">
    {@render children()}
  </button>
{/if}

<style>
  .button {
    display: inline-block;
    padding: 0.5rem 1.25rem;
    font-weight: 600;
    text-decoration: none;
    border-radius: 0.375rem;
    transition: all 0.2s ease;
    border: none;
    cursor: pointer;
    font-family: var(--font-primary);
    letter-spacing: -0.01em;
  }

  .button.primary {
    background-color: var(--accent);
    color: var(--bg-primary);
  }

  .button.primary:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  .button.secondary {
    background-color: transparent;
    color: var(--text-primary);
    border: 1.5px solid var(--accent);
  }

  .button.secondary:hover {
    background-color: var(--accent);
    color: var(--bg-primary);
  }

  @media (max-width: 640px) {
    .button {
      padding: 0.375rem 1rem;
      font-size: 0.875rem;
    }
  }
</style>
