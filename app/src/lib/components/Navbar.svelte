<script>
  import LightbulbIcon from "$lib/components/icons/LightbulbIcon.svelte";
  import StoaIcon from "$lib/components/icons/StoaIcon.svelte";
  import FlowbiteIcon from "$lib/components/icons/FlowbiteIcon.svelte";
</script>

<header class="navbar serif-font">
  <a href="/" class="brand">
    <StoaIcon width={42} height={50} />
  </a>
  <nav>
    <ul class="nav-links">
      <li>
        <a href="/company" class="nav-link">
          <span class="nav-text">Company</span>
          <span class="nav-icon"><FlowbiteIcon type="company" /></span>
        </a>
      </li>
      <li>
        <a href="/platform" class="nav-link">
          <span class="nav-text">Platform</span>
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
        <a
          href="https://github.com/Stoa-Medical"
          target="_blank"
          class="nav-link"
          aria-label="GitHub">
          <span class="nav-text">GitHub</span>
          <span class="nav-icon"><FlowbiteIcon type="github" /></span>
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
    padding: 0.5rem;
  }

  .brand {
    display: flex;
    align-items: center;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 0.5rem;
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

</style>
