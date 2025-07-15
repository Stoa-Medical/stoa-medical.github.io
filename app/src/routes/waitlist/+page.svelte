<script lang="ts">
  import Button from "$lib/components/Button.svelte";

  let email = $state("");
  let company = $state("");
  let useCase = $state("");
  let isSubmitted = $state(false);

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    // TODO: Integrate with email service
    isSubmitted = true;
    // Reset form
    email = "";
    company = "";
    useCase = "";
  }
</script>

<svelte:head>
  <title>Join the Waitlist - Stoa Medical</title>
  <meta
    name="description"
    content="Be the first to access our healthcare data integration platform and get early access pricing."
  />
</svelte:head>

<section class="waitlist-page">
  <div class="hero-section">
    <h1>Join the Waitlist</h1>
    <p class="hero-subtitle">
      Be among the first to access our healthcare data integration platform and
      secure early access pricing.
    </p>
  </div>

  <div class="content-grid">
    <div class="benefits-section">
      <h2>Early Access Benefits</h2>

      <div class="benefit-item">
        <div class="benefit-icon">🏷️</div>
        <div>
          <h3>Preferential Pricing</h3>
          <p>
            Lock in early-bird pricing with up to 50% off our standard rates for
            the first year.
          </p>
        </div>
      </div>

      <div class="benefit-item">
        <div class="benefit-icon">🚀</div>
        <div>
          <h3>Priority Access</h3>
          <p>
            Get first access to new features, integrations, and beta releases
            before general availability.
          </p>
        </div>
      </div>

      <div class="benefit-item">
        <div class="benefit-icon">🤝</div>
        <div>
          <h3>Direct Input</h3>
          <p>
            Shape our product roadmap with your feedback and feature requests as
            a founding customer.
          </p>
        </div>
      </div>

      <div class="benefit-item">
        <div class="benefit-icon">🎯</div>
        <div>
          <h3>Custom Implementation</h3>
          <p>
            Receive dedicated support for custom integrations and specialized
            use case development.
          </p>
        </div>
      </div>

      <div class="timeline-section">
        <h3>Timeline</h3>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div>
            <h4>Q1 2025</h4>
            <p>Beta access for waitlist members</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div>
            <h4>Q2 2025</h4>
            <p>General availability launch</p>
          </div>
        </div>
      </div>
    </div>

    <div class="form-section">
      <div class="form-card">
        {#if isSubmitted}
          <div class="success-state">
            <div class="success-icon">✅</div>
            <h3>You're on the list!</h3>
            <p>
              Thanks for joining our waitlist. We'll be in touch soon with
              updates and early access details.
            </p>
            <p class="next-steps">
              In the meantime, follow our progress on
              <a href="https://github.com/Stoa-Medical" target="_blank"
                >GitHub</a
              >
              or <a href="/book">schedule a discovery call</a> to discuss your immediate
              needs.
            </p>
          </div>
        {:else}
          <h3>Reserve Your Spot</h3>
          <p>Join healthcare organizations already on our waitlist.</p>

          <form onsubmit={handleSubmit} class="waitlist-form">
            <div class="form-group">
              <label for="email">Work Email *</label>
              <input
                id="email"
                type="email"
                bind:value={email}
                placeholder="you@yourorganization.com"
                required
                class="form-input"
              />
            </div>

            <div class="form-group">
              <label for="company">Organization *</label>
              <input
                id="company"
                type="text"
                bind:value={company}
                placeholder="Your Health System"
                required
                class="form-input"
              />
            </div>

            <div class="form-group">
              <label for="useCase">Primary Use Case</label>
              <select id="useCase" bind:value={useCase} class="form-input">
                <option value="">Select your primary interest...</option>
                <option value="ehr-to-ai">EHR → AI pipeline</option>
                <option value="fhir-omop">FHIR ↔ OMOP mapping</option>
                <option value="agentic-charting">Agentic charting</option>
                <option value="custom-integration">Custom integration</option>
                <option value="exploring">Still exploring options</option>
              </select>
            </div>

            <Button variant="primary" class="submit-button">
              Join Waitlist
            </Button>
          </form>

          <div class="form-footer">
            <p>
              Already know what you need?
              <a href="/book">Schedule a discovery call</a> instead.
            </p>
          </div>
        {/if}
      </div>
    </div>
  </div>

  <div class="social-proof">
    <h3>Join industry leaders who are already waiting</h3>
    <div class="proof-stats">
      <div class="stat">
        <div class="stat-number">150+</div>
        <div class="stat-label">Healthcare orgs on waitlist</div>
      </div>
      <div class="stat">
        <div class="stat-number">12</div>
        <div class="stat-label">Beta partners confirmed</div>
      </div>
      <div class="stat">
        <div class="stat-number">2M+</div>
        <div class="stat-label">Patient records to be processed</div>
      </div>
    </div>
  </div>
</section>

<style>
  .waitlist-page {
    max-width: 1200px;
    margin: 0 auto;
  }

  .hero-section {
    text-align: center;
    margin-bottom: 4rem;
  }

  .hero-subtitle {
    font-size: 1.25rem;
    color: var(--text-secondary);
    margin-top: 1rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .content-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin-bottom: 4rem;
  }

  .benefit-item {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    align-items: flex-start;
  }

  .benefit-icon {
    font-size: 2rem;
    flex-shrink: 0;
  }

  .benefit-item h3 {
    margin: 0 0 0.5rem;
    color: var(--text-primary);
  }

  .benefit-item p {
    margin: 0;
    color: var(--text-secondary);
    font-size: 0.875rem;
    line-height: 1.5;
  }

  .timeline-section {
    margin-top: 3rem;
    padding: 1.5rem;
    background-color: var(--bg-secondary);
    border-radius: 0.75rem;
  }

  .timeline-section h3 {
    margin-top: 0;
    margin-bottom: 1.5rem;
  }

  .timeline-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .timeline-dot {
    width: 12px;
    height: 12px;
    background-color: var(--accent);
    border-radius: 50%;
    flex-shrink: 0;
  }

  .timeline-item h4 {
    margin: 0 0 0.25rem;
    color: var(--text-primary);
    font-size: 0.875rem;
  }

  .timeline-item p {
    margin: 0;
    color: var(--text-secondary);
    font-size: 0.75rem;
  }

  .form-card {
    background-color: var(--bg-secondary);
    padding: 2rem;
    border-radius: 0.75rem;
    height: fit-content;
  }

  .form-card h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    color: var(--text-primary);
  }

  .form-card > p {
    margin-bottom: 2rem;
    color: var(--text-secondary);
  }

  .success-state {
    text-align: center;
  }

  .success-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  .success-state h3 {
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  .success-state p {
    color: var(--text-secondary);
    margin-bottom: 1rem;
  }

  .next-steps {
    font-size: 0.875rem;
    border-top: 1px solid var(--accent);
    padding-top: 1.5rem;
    margin-top: 2rem;
  }

  .next-steps a {
    color: var(--accent);
  }

  .waitlist-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form-group label {
    font-weight: 500;
    color: var(--text-primary);
    font-size: 0.875rem;
  }

  .form-input {
    padding: 0.75rem;
    border: 1.5px solid var(--accent);
    border-radius: 0.375rem;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    font-size: 0.875rem;
  }

  .form-input:focus {
    outline: none;
    border-color: var(--text-primary);
  }

  .submit-button {
    margin-top: 1rem;
    width: 100%;
    justify-content: center;
  }

  .form-footer {
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--accent);
    text-align: center;
  }

  .form-footer p {
    margin: 0;
    font-size: 0.875rem;
    color: var(--text-secondary);
  }

  .form-footer a {
    color: var(--accent);
  }

  .social-proof {
    background-color: var(--bg-secondary);
    padding: 3rem;
    border-radius: 0.75rem;
    text-align: center;
  }

  .social-proof h3 {
    margin-top: 0;
    margin-bottom: 2rem;
    color: var(--text-primary);
  }

  .proof-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
  }

  .stat {
    text-align: center;
  }

  .stat-number {
    font-size: 2.5rem;
    font-weight: 600;
    color: var(--accent);
    margin-bottom: 0.5rem;
  }

  .stat-label {
    font-size: 0.875rem;
    color: var(--text-secondary);
  }

  @media (max-width: 768px) {
    .content-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .benefit-item {
      flex-direction: column;
      text-align: center;
    }

    .social-proof {
      padding: 2rem 1.5rem;
    }

    .proof-stats {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .stat-number {
      font-size: 2rem;
    }
  }
</style>
