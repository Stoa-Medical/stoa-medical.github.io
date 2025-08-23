<!-- src/lib/components/Header.svelte -->
<script lang="ts">
  import StoaMedicalIcon from "$lib/icons/StoaMedicalIcon.svelte";
  import { SunOutline, GithubSolid } from "flowbite-svelte-icons";
  import { toggleTheme, getInitialTheme } from "$lib/stores/theme";
  import { browser } from "$app/environment";

  let currentTheme = $state(browser ? getInitialTheme() : "light");

  function handleThemeToggle() {
    currentTheme = toggleTheme();
  }
</script>

<header class="header">
  <div class="header-content">
    <a href="/">
      <StoaMedicalIcon size="small" showText={true} />
    </a>

    <nav class="nav-menu">
      <a href="/about" class="nav-link">About</a>
      <a href="/resources" class="nav-link">Resources</a>
      <a href="/contact" class="nav-link">Join the waitlist</a>
      <a href="/contact" class="nav-link">Get in touch</a>
      <button
        onclick={handleThemeToggle}
        class="icon-button"
        aria-label="Toggle theme"
      >
        <SunOutline size="sm" />
      </button>
      <a
        href="https://github.com/stoa-medical"
        class="icon-button"
        aria-label="GitHub"
      >
        <GithubSolid size="sm" />
      </a>
    </nav>
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
    border-bottom: 1px solid
      color-mix(in srgb, var(--text-primary) 10%, transparent);
  }

  .header-content {
    max-width: 64rem; /* matches max-w-4xl */
    margin: 0 auto;
    padding: 1.25rem 1.5rem; /* matches px-6 */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-menu {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .nav-link {
    font-family: var(--font-primary);
    font-size: 1.125rem;
    color: var(--text-primary);
    text-decoration: none;
    transition: opacity 0.2s ease;
  }

  .nav-link:hover {
    opacity: 0.7;
  }

  .icon-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    color: var(--text-primary);
    cursor: pointer;
    padding: 0;
    transition: opacity 0.2s ease;
  }

  .icon-button:hover {
    opacity: 0.7;
  }

  a {
    text-decoration: none;
  }
</style>
