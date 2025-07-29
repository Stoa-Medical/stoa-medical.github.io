<script>
  import HeadingXL from "$lib/components/atoms/HeadingXL.svelte";

  let { headline = "", sub = "", class: className = "" } = $props();
</script>

<div class="hero-copy {className}">
  <HeadingXL text={headline} />
  {#if sub}
    <p class="hero-copy__sub">{sub}</p>
  {/if}
  <div class="hero-copy__cta">
    <slot />
  </div>
</div>

<style>
  .hero-copy {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 600px;
  }

  .hero-copy__sub {
    font-family: var(--font-primary);
    font-size: 1.125rem;
    color: var(--text-secondary);
    margin: 0;
    opacity: 0.8;
  }

  .hero-copy__cta {
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    .hero-copy {
      gap: 1rem;
    }

    .hero-copy__sub {
      font-size: 1rem;
    }
  }
</style>
