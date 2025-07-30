<!-- src/routes/+layout.svelte -->
<script>
  let { children } = $props();
</script>

<main>
  {@render children()}
</main>

<style>

</style>
