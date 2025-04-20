<!-- src/routes/+layout.svelte -->
<script>
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<div class="layout-container">
  <header>
    <Navbar />
  </header>
  <!-- Main content area -->
  <main>
    <slot />
  </main>
</div>

<style>
  /* Make the layout container fill the entire viewport */
  .layout-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* This is the key property - fill viewport height */
    width: 100%;
  }

  /* Style the header */
  header {
    padding: 1rem;
  }

  /* Style the main content area */
  main {
    flex: 1; /* This makes the main content expand to fill available space */
    padding-top: 0.5rem;
    padding-left: 2rem;
    width: 100%;
  }
</style>
