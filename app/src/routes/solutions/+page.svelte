<script>
  import Button from "$lib/components/Button.svelte";
</script>

<section>
  <h1>Solutions</h1>
  <h2>Purpose-built integrations for modern healthcare</h2>

  <div class="solutions-grid">
    <div class="solution-card">
      <div class="solution-icon">🔄</div>
      <h3>EHR → AI pipeline</h3>
      <p>Turn HL7/FHIR into embeddings + governance</p>
      <ul class="solution-features">
        <li>Automated FHIR parsing</li>
        <li>Vector embeddings for LLMs</li>
        <li>Built-in PHI compliance</li>
      </ul>
      <Button href="/solutions/ehr-to-ai" variant="secondary">Learn more</Button
      >
    </div>

    <div class="solution-card">
      <div class="solution-icon">🔀</div>
      <h3>FHIR ↔ OMOP mapping</h3>
      <p>Bidirectional sync for research & ops</p>
      <ul class="solution-features">
        <li>Real-time bidirectional sync</li>
        <li>Research-grade data quality</li>
        <li>Custom vocabulary support</li>
      </ul>
      <Button href="/solutions/fhir-omop" variant="secondary">Learn more</Button
      >
    </div>

    <div class="solution-card">
      <div class="solution-icon">📋</div>
      <h3>Agentic charting</h3>
      <p>LLM-generated SOAP notes inside Epic</p>
      <ul class="solution-features">
        <li>Native Epic integration</li>
        <li>AI-powered documentation</li>
        <li>Provider review workflow</li>
      </ul>
      <Button href="/solutions/agentic-charting" variant="secondary"
        >Learn more</Button
      >
    </div>
  </div>

  <div class="custom-solution">
    <h3>Need something different?</h3>
    <p>
      We build custom integrations tailored to your specific healthcare
      workflows.
    </p>
    <Button href="/book" variant="primary">Discuss your use case</Button>
  </div>
</section>

<style>
  .solutions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 3rem 0;
  }

  .solution-card {
    background-color: var(--bg-secondary);
    border-radius: 0.75rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    transition: transform 0.2s ease;
  }

  .solution-card:hover {
    transform: translateY(-4px);
  }

  .solution-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  .solution-card h3 {
    margin: 0 0 0.5rem;
    color: var(--text-primary);
    text-align: center;
  }

  .solution-card > p {
    color: var(--text-secondary);
    text-align: center;
    margin-bottom: 1.5rem;
    font-style: italic;
  }

  .solution-features {
    list-style: none;
    padding: 0;
    margin: 0 0 2rem;
    flex-grow: 1;
  }

  .solution-features li {
    padding-left: 1.5rem;
    position: relative;
    margin-bottom: 0.75rem;
    font-size: 0.875rem;
    color: var(--text-secondary);
  }

  .solution-features li::before {
    content: "→";
    position: absolute;
    left: 0;
    color: var(--accent);
  }

  .custom-solution {
    margin-top: 4rem;
    padding: 3rem;
    background-color: var(--bg-secondary);
    border-radius: 0.75rem;
    text-align: center;
  }

  .custom-solution h3 {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .custom-solution p {
    margin-bottom: 2rem;
    color: var(--text-secondary);
  }
</style>
