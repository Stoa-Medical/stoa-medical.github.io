<script>
  import LightbulbIcon from "$lib/icons/LightbulbIcon.svelte";
  import StoaMedicalIcon from "$lib/icons/StoaMedicalIcon.svelte";
  import FlowbiteIcon from "$lib/icons/FlowbiteIcon.svelte";
</script>

<header class="navbar serif-font">
  <a href="/" class="brand">
    <StoaMedicalIcon width={32} height={44} />
  </a>
  <nav>
    <ul class="nav-links">
      <li>
        <a href="/products" class="nav-link">
          <span class="nav-text">Products</span>
          <span class="nav-icon"><FlowbiteIcon type="laptop-code" /></span>
        </a>
      </li>
      <li>
        <a href="/services" class="nav-link">
          <span class="nav-text">Services</span>
          <span class="nav-icon"><FlowbiteIcon type="cash" /></span>
        </a>
      </li>
      <li>
        <a href="/about" class="nav-link">
          <span class="nav-text">About</span>
          <span class="nav-icon"><FlowbiteIcon type="profile" /></span>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/Stoa-Medical"
          class="theme-toggle"
          aria-label="GitHub"><FlowbiteIcon type="github" /></a
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

  .nav-link {
    display: flex;
    align-items: center;
  }

  /* Show text on desktop, hide icon */
  .nav-icon {
    display: none;
  }

  /* Mobile adjustments */
  @media (max-width: 768px) {
    .nav-links {
      gap: 0.2rem;
    }

    /* Hide text on mobile, show icon */
    .nav-text {
      display: none;
    }

    .nav-icon {
      display: block;
      padding: 0.4rem;
      border-radius: 0.375rem;
      transition: background-color 0.2s ease;
    }

    /* Hover effects for mobile icons */
    :global([data-theme="dark"]) .nav-link:hover .nav-icon {
      background-color: var(--sea-mid);
    }

    :global([data-theme="light"]) .nav-link:hover .nav-icon {
      background-color: var(--papyrus-mid);
    }
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
