<!-- From: https://flowbite.com/icons/ -->

<script>
  import { theme } from "$lib/stores/theme";
  import { GithubSolid } from "flowbite-svelte-icons";

  // Subscribe to the theme store (automatically handled by Svelte)
  let isDark = $derived($theme === "dark");
  
  let { href = "https://github.com/Stoa-Medical", ariaLabel = "Visit Stoa Medical's GitHub" } = $props();
</script>

<a {href} aria-label={ariaLabel} class="github-link" target="_blank" rel="noopener noreferrer">
  <GithubSolid class={isDark ? "github-icon-dark" : "github-icon-light"} />
</a>

<style>
  .github-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    border-radius: 0.375rem;
    text-decoration: none;
    color: inherit;
    padding: 0.25rem;
  }

  .github-link:hover {
    background-color: var(--accent);
  }
  
  /* Dark mode: lower opacity for outline effect */
  :global(.github-icon-dark) {
    opacity: 0.8;
  }
  
  /* Light mode: full opacity */
  :global(.github-icon-light) {
    opacity: 1;
  }
</style>