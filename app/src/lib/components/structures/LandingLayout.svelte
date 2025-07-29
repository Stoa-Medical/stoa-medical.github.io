<script lang="ts">
  import Nav from "$lib/components/molecules/Nav.svelte";
  import { onMount } from "svelte";
  import { theme } from "$lib/stores/theme";
  import type { Theme } from "$lib/stores/theme";

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
  <header class="landing-layout__header">
    <Nav />
  </header>

  <main class="landing-layout__main">
    <slot name="hero" />
    <div class="landing-layout__sections">
      <slot />
    </div>
  </main>

  <footer class="landing-layout__footer">
    <p>Stoa Medical © {new Date().getFullYear()}</p>
    <nav class="landing-layout__footer-nav">
      <a href="/about">About</a>
      <a href="/products">Products</a>
      <a href="/services">Services</a>
    </nav>
  </footer>
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

  .landing-layout__header {
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: var(--bg-primary-dark);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .landing-layout__main {
    flex: 1;
  }

  .landing-layout__sections {
    position: relative;
  }

  .landing-layout__footer {
    padding: 3rem 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    text-align: center;
  }

  .landing-layout__footer p {
    margin: 0 0 1rem 0;
    color: var(--text-secondary-dark);
    font-size: 0.875rem;
  }

  .landing-layout__footer-nav {
    display: flex;
    gap: 2rem;
    justify-content: center;
    font-size: 0.875rem;
  }

  .landing-layout__footer-nav a {
    color: var(--text-secondary-dark);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .landing-layout__footer-nav a:hover {
    color: var(--text-primary-dark);
  }

  @media (max-width: 768px) {
    .landing-layout__footer {
      padding: 2rem 1rem;
    }

    .landing-layout__footer-nav {
      gap: 1.5rem;
    }
  }
</style>
