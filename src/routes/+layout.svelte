<!-- src/routes/+layout.svelte -->
<script>
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import "../app.css";

  let { children } = $props();
</script>

<Header />

<main class="main-content">
  {@render children()}
</main>

<Footer />

<style>
  .main-content {
    padding-top: 8rem;
    padding-bottom: 5rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  .main-content > :global(* + *) {
    margin-top: 2.5rem;
  }
</style>
