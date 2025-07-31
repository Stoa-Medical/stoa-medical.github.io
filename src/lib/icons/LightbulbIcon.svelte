<!-- From: https://flowbite.com/icons/ -->

<script>
  import { theme, toggleTheme } from "$lib/stores/theme";
  import { LightbulbSolid, LightbulbOutline } from "flowbite-svelte-icons";

  // Subscribe to the theme store (automatically handled by Svelte)
  let isDark = $derived($theme === "dark");
</script>

<button class="theme-toggle" onclick={toggleTheme} aria-label="Toggle theme">
  {#if isDark}
    <!-- Dark mode lightbulb -->
    <LightbulbOutline />
  {:else}
    <!-- Light mode lightbulb -->
    <LightbulbSolid />
  {/if}
</button>

<style>
  .theme-toggle {
    background-color: transparent;
    border: none;
    cursor: pointer;
    border-radius: 0.375rem;
  }

  .theme-toggle:hover {
    background-color: var(--accent);
  }
</style>
