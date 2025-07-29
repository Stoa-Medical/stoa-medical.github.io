<script>
  import VerticalDivider from "$lib/components/atoms/VerticalDivider.svelte";
  import LogoMark from "$lib/components/atoms/LogoMark.svelte";

  let { class: className = "" } = $props();
</script>

<section class="hero-section {className}">
  <div class="hero-section__container">
    <div class="hero-section__logo">
      <LogoMark size="md" />
    </div>

    <div class="hero-section__content">
      <slot name="content" />
    </div>

    <div class="hero-section__bottom">
      <div class="hero-section__bottom-left">
        <slot name="subtitle" />
      </div>
      <div class="hero-section__bottom-center">
        <VerticalDivider sticky={false} />
      </div>
      <div class="hero-section__bottom-right">
        <slot name="nav" />
      </div>
    </div>
  </div>
</section>

<style>
  .hero-section {
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    align-items: stretch;
  }

  .hero-section__container {
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .hero-section__logo {
    position: absolute;
    top: 2rem;
    left: 2rem;
  }

  .hero-section__content {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }

  .hero-section__bottom {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: flex-end;
    padding: 0 2rem;
    position: relative;
  }

  .hero-section__bottom-left {
    text-align: left;
  }

  .hero-section__bottom-center {
    display: flex;
    justify-content: center;
    position: relative;
  }

  .hero-section__bottom-center :global(.vertical-divider) {
    height: 100px;
    position: absolute;
    bottom: -2rem;
  }

  .hero-section__bottom-right {
    text-align: right;
  }

  @media (max-width: 768px) {
    .hero-section__container {
      padding: 1rem;
    }

    .hero-section__logo {
      top: 1rem;
      left: 1rem;
    }

    .hero-section__content {
      padding: 0 1rem;
    }

    .hero-section__bottom {
      grid-template-columns: 1fr;
      gap: 1rem;
      text-align: center;
    }

    .hero-section__bottom-left,
    .hero-section__bottom-right {
      text-align: center;
    }

    .hero-section__bottom-center {
      display: none;
    }
  }
</style>
