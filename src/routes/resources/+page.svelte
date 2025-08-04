<script>
  import ActionButtons from "$lib/components/ActionButtons.svelte";
  const title = "Resources - Stoa Medical";
  const description = "Our projects focus on integrating biomedicine and wellness through innovative AI-powered solutions.";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>

<div class="max-w-4xl mx-auto">
  <h1 class="text-center">Resources</h1>
  <h2 class="text-center">Source-available Products and Open-source Tools</h2>

  <h2>Featured</h2>
  <h3><strong><a href="https://github.com/Stoa-Medical/Portico">Portico</a></strong> - Agentic Integration Engine for Health Systems</h3>
  <h2>Other</h2>

  <h3>Featured Products</h3>



  <h2>Coming Soon</h2>

  <h4><strong>Pico</strong> - Patient data app</h4>

  <h4><strong>Picasso</strong> - Provider data app</h4>

  <h2>Open-source tools</h2>

  <h3>Featured Tools</h3>
  ...

  <h3>Coming Soon</h3>
  ...

  <h3>Various Talks</h3>
  ...


  <h3>Definitions</h3>
  <p>Biomedicine:</p>

  <p>Wellness: your biomedical metrics + how you feel</p>

  <ActionButtons />
</div>