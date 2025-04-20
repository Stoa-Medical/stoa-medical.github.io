<script>
  import { browser } from "$app/environment";

  let theme = $state(getInitialTheme());
  let isDark = $derived(theme === "dark");

  // Get initial theme (only used during initialization)
  function getInitialTheme() {
    if (!browser) return "light";
    
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme;
    
    return window.matchMedia("(prefers-color-scheme: dark)").matches 
      ? "dark" 
      : "light";
  }

  // Update theme and save preference
  function toggleTheme() {
    theme = theme === "dark" ? "light" : "dark";
    if (browser) {
      localStorage.setItem("theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
    }
  }

  // Apply theme when component mounts
  $effect(() => {
    if (browser) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  });
</script>

<button
  class="theme-toggle"
  on:click={toggleTheme}
  aria-label="Toggle theme"
>
  {#if isDark}
    <!-- Dark mode lightbulb -->
    <svg
      class="lightbulb"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 9a3 3 0 0 1 3-3m-2 15h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 6 9c0 4 4 5 4 9h4Z"
      />
    </svg>
  {:else}
    <!-- Light mode lightbulb -->
    <svg
      class="lightbulb"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        d="M7.05 4.05A7 7 0 0 1 19 9c0 2.407-1.197 3.874-2.186 5.084l-.04.048C15.77 15.362 15 16.34 15 18a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1c0-1.612-.77-2.613-1.78-3.875l-.045-.056C6.193 12.842 5 11.352 5 9a7 7 0 0 1 2.05-4.95ZM9 21a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Zm1.586-13.414A2 2 0 0 1 12 7a1 1 0 1 0 0-2 4 4 0 0 0-4 4 1 1 0 0 0 2 0 2 2 0 0 1 .586-1.414Z"
        clip-rule="evenodd"
      />
    </svg>
  {/if}
</button>

<style>
  .theme-toggle {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.375rem;
  }

  .theme-toggle:hover {
    background-color: var(--accent);
  }

  .lightbulb {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--text-primary);
  }
</style>
