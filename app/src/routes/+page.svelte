<script>
  import StoaIcon from "$lib/components/icons/StoaIcon.svelte";
  import { theme } from "$lib/stores/theme";
</script>

<section class="columns">
  <section class="left-col">
    <h1>Stoa Medical</h1>
    
    <h2>
      Your <strong>one-stop shop</strong> for integrating AI with EHRs.
    </h2>
    
    <p>
      We're a <a href="https://en.wikipedia.org/wiki/Entrepreneurship#Bootstrapping">bootstrapped</a> software startup building in the open.
    </p>
    
    <ul>
      <li>
        Services: we're offering custom engineering at a <a href="/services">massive limited-time discount</a>.
      </li>
      <li>
        Product: we're currently building <a href="https://github.com/Stoa-Medical/Portico"
        >Portico</a
      > -- an agentic integration engine.
      </li>
    </ul>
  </section>
  <aside class="right-col">
    <StoaIcon variant={$theme === "dark" ? "grey" : "tan"}
    ></StoaIcon>
  </aside>
</section>

<style>
  ul {
    padding-left: 42px;
  }

  .columns {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
  }
  .left-col {
    flex: 0 1 65%;
  }
  .right-col {
    flex: 0 1 35%;
    display: flex;
    align-items: flex-start;
  }
  @media (max-width: 700px) {
    .columns {
      flex-direction: column;
      gap: 1rem;
    }
    .left-col,
    .right-col {
      flex: 1 1 100%;
    }
    .right-col {
      justify-content: flex-start;
    }
  }
</style>
