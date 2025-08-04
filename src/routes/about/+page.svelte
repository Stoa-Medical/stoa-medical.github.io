<script>
  import ActionButtons from "$lib/components/ActionButtons.svelte";
  const title = "About Stoa";
  const description = "Learn about our mission to fix how healthcare works through technology that empowers patients and providers.";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>

<div class="max-w-4xl mx-auto">
  <h1 class="text-center">A Stoa for Healthcare</h1>
  <h2 class="text-center">Stoa Medical is on a mission to fix how healthcare works.</h2>

  <p>
    We're building technology that empowers patients, providers, and people
    within organizations to make better decisions and improve outcomes.
  </p>
  <p>
    By combining data, design, and engineering excellence, we can create a new
    model of care that is more personalized, proactive, and user-centric.
  </p>

  <h3>Our Story</h3>
  <p>...</p>

  <h3>Our Values</h3>
  <p>...</p>

  <h3>The Team</h3>
  <p>...</p>

  <h3>Our Philosophy</h3>
  <ol>
    <li><strong>User-Centered Design</strong>: At vero eos et accusamus et iusto odio dignissimos</li>
    <li><strong>Evidence-Based Approach</strong>: Ducimus qui blanditiis praesentium voluptatum</li>
    <li><strong>Continuous Innovation</strong>: Deleniti atque corrupti quos dolores et quas molestias</li>
  </ol>

  <h3>Technology Stack</h3>
  <ol>
    <li><strong>Python</strong> for general purpose code</li>
    <li><strong>Rust</strong> for performance-critical code</li>
    <li><strong>Svelte</strong> for the frontend (+ Tailwind CSS + Flowbite)</li>
    <li>Various AI services (we'll tailor for your needs)</li>
  </ol>

  <h3>Join Our Journey</h3>
  <p>We're looking for early adopters and design partners that want to be part of the early days of Stoa. You'll work directly with me and the small team of AI tools I'm building with.</p>
  <ActionButtons />
</div>