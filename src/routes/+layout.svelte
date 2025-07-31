<!-- src/routes/+layout.svelte -->
<script>
  import StoaMedicalIcon from "$lib/icons/StoaMedicalIcon.svelte";
  import '../app.css';

  let { children } = $props();
</script>

<div class="p-5">
  <a href="/">
    <StoaMedicalIcon size="small" showText={true} />
  </a>
</div>

<main class="p-5 space-y-10">
  {@render children()}
</main>

<style>
  a {
    text-decoration: none;
  }
</style>
