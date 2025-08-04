<!-- src/lib/components/Header.svelte -->
<script lang="ts">
  import StoaMedicalIcon from "$lib/icons/StoaMedicalIcon.svelte";
</script>

<header class="header">
  <a href="/">
    <StoaMedicalIcon size="small" showText={true} />
  </a>
</header>

<style>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 50;
    padding: 1.25rem;
    background-color: color-mix(in srgb, var(--bg-primary) 70%, transparent);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid color-mix(in srgb, var(--text-primary) 10%, transparent);
  }

  a {
    text-decoration: none;
  }
</style>