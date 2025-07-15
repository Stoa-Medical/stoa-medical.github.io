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
        <a href="/platform" class="nav-link">
          <span class="nav-icon"><FlowbiteIcon type="platform" /></span>
          <span class="nav-text">Platform</span>
        </a>
      </li>
      <li>
        <a href="/services" class="nav-link">
          <span class="nav-icon"><FlowbiteIcon type="services" /></span>
          <span class="nav-text">Services</span>
        </a>
      </li>
      <li>
        <a href="/solutions" class="nav-link">
          <span class="nav-icon"><FlowbiteIcon type="solutions" /></span>
          <span class="nav-text">Solutions</span>
        </a>
      </li>
      <li>
        <a href="/company" class="nav-link">
          <span class="nav-icon"><FlowbiteIcon type="company" /></span>
          <span class="nav-text">Company</span>
        </a>
      </li>
      <li>
        <a href="/resources" class="nav-link">
          <span class="nav-icon"><FlowbiteIcon type="resources" /></span>
          <span class="nav-text">Resources</span>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/Stoa-Medical"
          target="_blank"
          class="nav-link"
          aria-label="GitHub"
        >
          <span class="nav-icon"><FlowbiteIcon type="code" /></span>
          <span class="nav-text">GitHub</span>
        </a>
      </li>
      <li>
        <span class="nav-link nav-icon rounded"><LightbulbIcon /></span>
      </li>
      <li>
        <a href="/book" class="cta-button"> Book a Call </a>
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

  /* --- New hover-expand behaviour --- */
  .nav-link {
    display: flex;
    align-items: center;
    transition: background-color 0.2s ease;
  }

  .nav-icon {
    /* Icon is always visible */
    display: block;
  }

  /* Text is collapsed by default */
  .nav-text {
    overflow: hidden;
    white-space: nowrap;
    max-width: 0;
    opacity: 0;
    margin-left: 0;
    transition:
      max-width 0.15s ease,
      opacity 0.15s ease,
      margin-left 0.15s ease;
  }

  /* On hover/focus, reveal the text and push the icon aside */
  .nav-link:hover .nav-text,
  .nav-link:focus-visible .nav-text {
    max-width: 10rem; /* long enough for any label */
    opacity: 1;
    margin-left: 0.25rem; /* small gap between icon and text */
    color: var(--ink);
  }

  /* Dark-mode: switch to a lighter ink for better contrast */
  :global([data-theme="dark"]) .nav-link:hover .nav-text,
  :global([data-theme="dark"]) .nav-link:focus-visible .nav-text {
    color: #6c6c6c;
  }

  /* Optional theme-consistent hover background */
  :global([data-theme="dark"]) .nav-link:hover {
    background-color: var(--sky-mid);
  }
  :global([data-theme="light"]) .nav-link:hover {
    background-color: var(--papyrus-mid);
  }

  /* CTA Button styles */
  .cta-button {
    padding: 0.375rem 1rem;
    background-color: var(--accent);
    color: var(--bg-primary);
    font-weight: 600;
    text-decoration: none;
    border-radius: 0.375rem;
    transition: all 0.2s ease;
    font-size: 0.875rem;
  }

  .cta-button:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  @media (max-width: 640px) {
    .cta-button {
      padding: 0.25rem 0.75rem;
      font-size: 0.75rem;
    }
  }
</style>
