<script lang="ts">
  import Button from "$lib/components/Button.svelte";

  let email = $state("");
  let isSubscribed = $state(false);

  function handleNewsletterSubmit(event: SubmitEvent) {
    event.preventDefault();
    // TODO: Integrate with newsletter service
    isSubscribed = true;
    email = "";
  }
</script>

<section>
  <h1>Resources</h1>
  <h2>Insights, guides, and tools for healthcare data integration</h2>

  <div class="resources-grid">
    <div class="resources-column">
      <h3>📝 Latest Articles</h3>

      <article class="resource-card">
        <div class="resource-meta">
          <span class="resource-date">Dec 15, 2024</span>
          <span class="resource-tag">Technical</span>
        </div>
        <h4>
          <a href="#">Building FHIR-to-Vector Pipelines: A Practical Guide</a>
        </h4>
        <p>
          Learn how to transform your EHR data into AI-ready embeddings while
          maintaining HIPAA compliance and audit trails.
        </p>
      </article>

      <article class="resource-card">
        <div class="resource-meta">
          <span class="resource-date">Dec 8, 2024</span>
          <span class="resource-tag">Strategy</span>
        </div>
        <h4><a href="#">The Hidden Costs of EHR Integration Projects</a></h4>
        <p>
          Why traditional integration approaches fail and how modern data fabric
          architectures can reduce complexity by 80%.
        </p>
      </article>

      <article class="resource-card">
        <div class="resource-meta">
          <span class="resource-date">Nov 28, 2024</span>
          <span class="resource-tag">Case Study</span>
        </div>
        <h4>
          <a href="#"
            >How Regional Health System Automated Clinical Documentation</a
          >
        </h4>
        <p>
          A 500-bed hospital reduced documentation time by 40% using AI-powered
          SOAP note generation within Epic.
        </p>
      </article>

      <div class="view-all">
        <Button href="#" variant="secondary">View all articles</Button>
      </div>
    </div>

    <div class="resources-column">
      <h3>📚 Documentation & Guides</h3>

      <div class="resource-card">
        <div class="resource-meta">
          <span class="resource-tag">White Paper</span>
        </div>
        <h4>
          <a href="#">The Complete Guide to Healthcare Data Interoperability</a>
        </h4>
        <p>
          Comprehensive overview of FHIR, HL7, and modern integration patterns
          for healthcare organizations.
        </p>
        <div class="resource-actions">
          <Button href="#" variant="secondary">Download PDF</Button>
        </div>
      </div>

      <div class="resource-card">
        <div class="resource-meta">
          <span class="resource-tag">Documentation</span>
        </div>
        <h4>
          <a href="https://github.com/Stoa-Medical/Portico"
            >Portico API Reference</a
          >
        </h4>
        <p>
          Complete API documentation, SDK guides, and code examples for
          integrating with the Portico platform.
        </p>
        <div class="resource-actions">
          <Button
            href="https://github.com/Stoa-Medical/Portico"
            variant="secondary">View on GitHub</Button
          >
        </div>
      </div>

      <div class="resource-card">
        <div class="resource-meta">
          <span class="resource-tag">Template</span>
        </div>
        <h4><a href="#">FHIR Implementation Checklist</a></h4>
        <p>
          Step-by-step checklist for planning and executing FHIR implementations
          in healthcare organizations.
        </p>
        <div class="resource-actions">
          <Button href="#" variant="secondary">Download Template</Button>
        </div>
      </div>

      <div class="newsletter-signup">
        <h4>Stay Updated</h4>
        <p>
          Get the latest insights on healthcare data integration delivered to
          your inbox.
        </p>

        {#if isSubscribed}
          <div class="success-message">
            ✅ Thanks for subscribing! Check your email for confirmation.
          </div>
        {:else}
          <form on:submit={handleNewsletterSubmit} class="newsletter-form">
            <input
              type="email"
              bind:value={email}
              placeholder="your@email.com"
              required
              class="newsletter-input"
            />
            <Button variant="primary">Subscribe</Button>
          </form>
        {/if}
      </div>
    </div>
  </div>
</section>

<style>
  .resources-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin-top: 3rem;
  }

  .resources-column h3 {
    margin-bottom: 2rem;
    color: var(--text-primary);
    font-size: 1.25rem;
  }

  .resource-card {
    background-color: var(--bg-secondary);
    padding: 1.5rem;
    border-radius: 0.75rem;
    margin-bottom: 1.5rem;
    transition: transform 0.2s ease;
  }

  .resource-card:hover {
    transform: translateY(-2px);
  }

  .resource-meta {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 0.75rem;
  }

  .resource-date {
    font-size: 0.75rem;
    color: var(--text-secondary);
  }

  .resource-tag {
    font-size: 0.75rem;
    background-color: var(--accent);
    color: var(--bg-primary);
    padding: 0.125rem 0.5rem;
    border-radius: 9999px;
    font-weight: 500;
  }

  .resource-card h4 {
    margin: 0 0 0.75rem;
    font-size: 1rem;
  }

  .resource-card h4 a {
    color: var(--text-primary);
    text-decoration: none;
  }

  .resource-card h4 a:hover {
    color: var(--accent);
  }

  .resource-card p {
    margin: 0 0 1rem;
    font-size: 0.875rem;
    color: var(--text-secondary);
    line-height: 1.5;
  }

  .resource-actions {
    margin-top: 1rem;
  }

  .view-all {
    text-align: center;
    margin-top: 2rem;
  }

  .newsletter-signup {
    background-color: var(--bg-secondary);
    padding: 1.5rem;
    border-radius: 0.75rem;
    margin-top: 2rem;
  }

  .newsletter-signup h4 {
    margin: 0 0 0.5rem;
    color: var(--text-primary);
  }

  .newsletter-signup p {
    margin: 0 0 1.5rem;
    font-size: 0.875rem;
    color: var(--text-secondary);
  }

  .newsletter-form {
    display: flex;
    gap: 0.5rem;
  }

  .newsletter-input {
    flex: 1;
    padding: 0.5rem 0.75rem;
    border: 1.5px solid var(--accent);
    border-radius: 0.375rem;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    font-size: 0.875rem;
  }

  .newsletter-input:focus {
    outline: none;
    border-color: var(--text-primary);
  }

  .success-message {
    padding: 1rem;
    background-color: var(--success);
    color: var(--bg-primary);
    border-radius: 0.375rem;
    font-size: 0.875rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    .resources-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .newsletter-form {
      flex-direction: column;
    }
  }
</style>
