<!-- src/lib/components/Header.svelte -->
<script lang="ts">
  import StoaMedicalIcon from "$lib/icons/StoaMedicalIcon.svelte";
</script>

<header class="header">
  <div class="header-content">
    <a href="/">
      <StoaMedicalIcon size="small" showText={true} />
    </a>
  </div>
</header>

<style>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 50;
    background-color: color-mix(in srgb, var(--bg-primary) 70%, transparent);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid color-mix(in srgb, var(--text-primary) 10%, transparent);
  }

  .header-content {
    max-width: 64rem; /* matches max-w-4xl */
    margin: 0 auto;
    padding: 1.25rem 1.5rem; /* matches px-6 */
  }

  a {
    text-decoration: none;
  }
</style>