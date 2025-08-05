<!-- src/routes/+layout.svelte -->
<script>
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import '../app.css';

  let { children } = $props();
</script>

<Header />

<main class="pt-32 pb-20 px-5 space-y-10">
  {@render children()}
</main>

<Footer />
