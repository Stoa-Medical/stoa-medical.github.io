<!-- src/routes/+layout.svelte -->
<script>
  import Nav from "$lib/components/chunks/Nav.svelte";
</script>

<div class="layout-container">
  <!-- Main content area -->
  <main>
    <slot />
  </main>
</div>

<style>
  /* Make the layout container fill the entire page */
  .layout-container {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    width: 100%;
    overflow-x: hidden; /* Prevent horizontal overflow */
  }


  /* Style the main content area */
  main {
    flex: 1; /* This makes the main content expand to fill available space */
    padding-top: 0.5rem;
    padding-left: 2rem;
    padding-right: 2rem; /* Add right padding for better mobile display */
    width: 100%;
    box-sizing: border-box; /* Ensure padding is included in width calculation */
  }

  /* Mobile-specific adjustments */
  @media (max-width: 768px) {
    main {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
</style>
