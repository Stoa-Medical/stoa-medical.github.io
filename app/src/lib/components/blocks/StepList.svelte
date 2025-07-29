<script>
  import StepItem from "$lib/components/chunks/StepItem.svelte";

  let { items = [], class: className = "" } = $props();

  const hasItems = $derived(items.length > 0);
</script>

<section class="step-list {className}">
  <div class="step-list__container">
    {#if hasItems}
      {#each items as item, index}
        <StepItem num={index + 1} title={item.title} copy={item.copy} />
      {/each}
    {:else}
      <slot />
    {/if}
  </div>
</section>

<style>
  .step-list {
    padding: 4rem 2rem;
    width: 100%;
  }

  .step-list__container {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    .step-list {
      padding: 3rem 1rem;
    }

    .step-list__container {
      gap: 2rem;
    }
  }
</style>
