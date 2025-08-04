<!-- src/lib/components/Footer.svelte -->
<script lang="ts">
  import LightbulbIcon from "$lib/icons/LightbulbIcon.svelte";
  import GitHubIcon from "$lib/icons/GitHubIcon.svelte";
</script>

<footer class="footer">
  <div class="footer-content">
    <span>An AI Healthcare Integrations Company</span>

    <nav class="footer-nav">
      <a href="/about">About</a>
      <a href="/resources">Resources</a>
      <GitHubIcon />
      <LightbulbIcon />
    </nav>
  </div>
</footer>

<style>
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 50;
    background-color: color-mix(in srgb, var(--bg-primary) 70%, transparent);
    backdrop-filter: blur(8px);
    border-top: 1px solid color-mix(in srgb, var(--text-primary) 10%, transparent);
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 64rem; /* matches max-w-4xl */
    margin: 0 auto;
    padding: 0.5rem 1.5rem; /* matches px-6 */
  }

  .footer-nav {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
</style>
