<!-- src/routes/+layout.svelte -->
<script>
  import StoaMedicalIcon from "$lib/icons/StoaMedicalIcon.svelte";

  let { children } = $props();
</script>

<div class="p-5">
  <StoaMedicalIcon size="small" showText={true} />
</div>

<main>
  {@render children()}
</main>

<style>

</style>
