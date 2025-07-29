<script>
  let { text = "", tag = "h1", class: className = "" } = $props();
</script>

{#if tag === "h1"}
  <h1 class="heading-xl {className}">{text}</h1>
{:else if tag === "h2"}
  <h2 class="heading-xl {className}">{text}</h2>
{:else if tag === "h3"}
  <h3 class="heading-xl {className}">{text}</h3>
{:else}
  <h1 class="heading-xl {className}">{text}</h1>
{/if}

<style>
  .heading-xl {
    font-family: var(--font-secondary);
    font-size: clamp(2.5rem, 5vw, 4rem);
    line-height: 1.1;
    font-weight: 300;
    margin: 0;
    color: var(--text-primary);
  }

  @media (max-width: 768px) {
    .heading-xl {
      font-size: clamp(2rem, 6vw, 3rem);
    }
  }
</style>
