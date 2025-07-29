<script lang="ts">
  import { onMount } from "svelte";
  import { theme } from "$lib/stores/theme";
  import type { Theme } from "$lib/utils/theme";

  let originalTheme = $state<Theme | null>(null);

  onMount(() => {
    // Store the original theme
    originalTheme = $theme;
    // Set to dark theme for landing page
    theme.set("dark");

    // Restore original theme on unmount
    return () => {
      if (originalTheme !== null) {
        theme.set(originalTheme);
      }
    };
  });
</script>

<div class="landing-layout">
  <main class="landing-layout__main">
    <slot />
  </main>
</div>

<style>
  .landing-layout {
    min-height: 100vh;
    background-color: var(--bg-primary-dark);
    color: var(--text-primary-dark);
    display: flex;
    flex-direction: column;
  }

  :global([data-theme="light"]) .landing-layout {
    background-color: var(--bg-primary-dark);
    color: var(--text-primary-dark);
  }

  .landing-layout__main {
    flex: 1;
  }
</style>
