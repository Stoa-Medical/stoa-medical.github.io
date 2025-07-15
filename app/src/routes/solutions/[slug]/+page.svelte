<script>
  import { page } from "$app/stores";
  import Button from "$lib/components/Button.svelte";

  const { data } = $props();
  const solution = data.solution;
</script>

<svelte:head>
  <title>{solution.title} - Stoa Medical</title>
  <meta name="description" content={solution.description} />
</svelte:head>

<section>
  <div class="solution-header">
    <div class="solution-icon">{solution.icon}</div>
    <div>
      <h1>{solution.title}</h1>
      <p class="solution-subtitle">{solution.subtitle}</p>
    </div>
  </div>

  <div class="solution-content">
    <div class="main-content">
      <h2>Overview</h2>
      <p>{solution.overview}</p>

      <h3>Key Benefits</h3>
      <ul class="benefits-list">
        {#each solution.benefits as benefit}
          <li>{benefit}</li>
        {/each}
      </ul>

      <h3>How It Works</h3>
      <div class="process-steps">
        {#each solution.process as step, index}
          <div class="process-step">
            <div class="step-number">{index + 1}</div>
            <div class="step-content">
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          </div>
        {/each}
      </div>

      <div class="cta-section">
        <h3>Ready to get started?</h3>
        <p>Schedule a discovery call to discuss your specific use case.</p>
        <Button href="/book" variant="primary">Book a discovery call</Button>
      </div>
    </div>

    <aside class="sidebar">
      <div class="solution-card">
        <h4>Quick Facts</h4>
        <ul class="quick-facts">
          <li><strong>Implementation:</strong> {solution.implementation}</li>
          <li><strong>Timeline:</strong> {solution.timeline}</li>
          <li><strong>Compliance:</strong> {solution.compliance}</li>
        </ul>
      </div>

      <div class="solution-card">
        <h4>Related Solutions</h4>
        <ul class="related-links">
          {#each solution.related as related}
            <li>
              <a href="/solutions/{related.slug}">{related.title}</a>
            </li>
          {/each}
        </ul>
      </div>
    </aside>
  </div>
</section>

<style>
  .solution-header {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 2px solid var(--bg-secondary);
  }

  .solution-icon {
    font-size: 4rem;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  }

  .solution-subtitle {
    font-size: 1.25rem;
    color: var(--text-secondary);
    margin: 0.5rem 0 0;
  }

  .solution-content {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 3rem;
  }

  .main-content h2 {
    margin-top: 0;
  }

  .benefits-list {
    list-style: none;
    padding: 0;
    margin: 1.5rem 0;
  }

  .benefits-list li {
    padding-left: 1.5rem;
    position: relative;
    margin-bottom: 0.75rem;
  }

  .benefits-list li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: var(--accent);
    font-weight: bold;
  }

  .process-steps {
    margin: 2rem 0;
  }

  .process-step {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    padding: 1.5rem;
    background-color: var(--bg-secondary);
    border-radius: 0.75rem;
  }

  .step-number {
    width: 2.5rem;
    height: 2.5rem;
    background-color: var(--accent);
    color: var(--bg-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    flex-shrink: 0;
  }

  .step-content h4 {
    margin: 0 0 0.5rem;
    color: var(--text-primary);
  }

  .step-content p {
    margin: 0;
    color: var(--text-secondary);
  }

  .cta-section {
    margin-top: 4rem;
    padding: 2rem;
    background-color: var(--bg-secondary);
    border-radius: 0.75rem;
    text-align: center;
  }

  .cta-section h3 {
    margin-top: 0;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .solution-card {
    background-color: var(--bg-secondary);
    padding: 1.5rem;
    border-radius: 0.75rem;
  }

  .solution-card h4 {
    margin-top: 0;
    margin-bottom: 1rem;
    color: var(--text-primary);
  }

  .quick-facts {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .quick-facts li {
    margin-bottom: 0.75rem;
    font-size: 0.875rem;
    color: var(--text-secondary);
  }

  .related-links {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .related-links li {
    margin-bottom: 0.5rem;
  }

  .related-links a {
    color: var(--accent);
    text-decoration: none;
    font-size: 0.875rem;
  }

  .related-links a:hover {
    text-decoration: underline;
  }

  @media (max-width: 1024px) {
    .solution-content {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .sidebar {
      order: -1;
    }
  }

  @media (max-width: 640px) {
    .solution-header {
      flex-direction: column;
      text-align: center;
    }

    .process-step {
      flex-direction: column;
      text-align: center;
    }
  }
</style>
