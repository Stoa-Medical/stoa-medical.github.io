<script>
  import VerticalDivider from "$lib/components/atoms/VerticalDivider.svelte";

  let { class: className = "" } = $props();
</script>

<section class="hero-section {className}">
  <div class="hero-section__container">
    <div class="hero-section__left">
      <slot name="left" />
    </div>
    <div class="hero-section__divider">
      <VerticalDivider sticky={true} />
    </div>
    <div class="hero-section__right">
      <slot name="right" />
    </div>
  </div>
  {#if $$slots.below}
    <div class="hero-section__below">
      <slot name="below" />
    </div>
  {/if}
</section>

<style>
  .hero-section {
    width: 100%;
    min-height: 80vh;
    padding: 4rem 2rem;
    position: relative;
  }

  .hero-section__container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 3rem;
    align-items: center;
    min-height: 60vh;
  }

  .hero-section__left {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .hero-section__divider {
    position: relative;
    height: 100%;
  }

  .hero-section__right {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .hero-section__below {
    margin-top: 4rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    .hero-section {
      padding: 2rem 1rem;
      min-height: auto;
    }

    .hero-section__container {
      grid-template-columns: 1fr;
      gap: 2rem;
      min-height: auto;
    }

    .hero-section__divider {
      display: none;
    }

    .hero-section__left,
    .hero-section__right {
      justify-content: center;
      text-align: center;
    }
  }
</style>
