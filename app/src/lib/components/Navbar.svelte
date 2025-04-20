<script>
  import LightbulbIcon from "$lib/icons/LightbulbIcon.svelte";
  import GitHubIcon from "$lib/icons/GitHubIcon.svelte";
  import { browser } from "$app/environment";

  // Theme state will now be managed by the LightbulbIcon component
  let theme = $state("light");
  let isDark = $derived(theme === "dark");

  // Initialize theme from system preference or stored preference
  $effect(() => {
    if (browser) {
      // This initial check helps match the icon with the theme applied by LightbulbIcon
      const storedTheme = localStorage.getItem("theme");
      
      if (storedTheme) {
        theme = storedTheme;
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        theme = "dark";
      }
    }
  });
</script>

<header class="navbar serif-font">
  <a href="/" class="brand">
    <img
      class="rounded-md"
      src={isDark ? "/Logomark-light.svg" : "/Logomark.svg"}
      alt={"Stoa Medical's logomark: the sigma (summation) integrated with a snake"}
      width="32"
      height="32"
    />
  </a>
  <nav>
    <ul class="nav-links">
      <li><a href="/products">Products</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/about">About</a></li>
      <li>
        <a
          href="https://github.com/Stoa-Medical"
          class="theme-toggle"
          aria-label="GitHub"><GitHubIcon dark={isDark} /></a
        >
      </li>
      <li>
        <LightbulbIcon />
      </li>
    </ul>
  </nav>
</header>

<style>
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1rem;
  }

  .brand {
    display: flex;
    align-items: center;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .theme-toggle {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 0.375rem;
  }

  :global([data-theme="dark"]) .theme-toggle:hover {
    background-color: var(--sea-mid);
  }

  :global([data-theme="light"]) .theme-toggle:hover {
    background-color: var(--papyrus-mid);
  }
</style>
