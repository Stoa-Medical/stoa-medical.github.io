<script>
    import StoaMedicalIcon from "$lib/icons/StoaMedicalIcon.svelte";
    import { theme } from "$lib/stores/theme";
</script>

<main class="columns">
  <section class="left-col">
    <h1>Stoa Medical</h1>
    <br />
    <h2>
      We build <strong>open-core software</strong> to integrate biomedicine and wellness.
    </h2>
    <br />
    <p>
      We're currently building <a href="https://github.com/Stoa-Medical/Portico"
        >Portico</a
      > - an agentic integration engine.
    </p>
  </section>
  <aside class="right-col">
    <StoaMedicalIcon variant={$theme === 'dark' ? 'grey' : 'tan'}></StoaMedicalIcon>
  </aside>
</main>

<style>
  .columns {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
  }
  .left-col {
    flex: 0 1 65%;
    padding: 1rem;
  }
  .right-col {
    flex: 0 1 35%;
    display: flex;
    align-items: flex-start;
    padding: 1rem;
  }
  .right-col img {
    width: 100%;
    height: auto;
    display: block;
  }
  @media (max-width: 700px) {
    .columns {
      flex-direction: column;
      gap: 1rem;
    }
    .left-col,
    .right-col {
      flex: 1 1 100%;
      padding: 1rem;
    }
    .right-col {
      justify-content: flex-start;
    }
  }
</style>
