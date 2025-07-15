<script>
  import StoaIcon from "$lib/components/icons/StoaIcon.svelte";
  import ButtonGroup from "$lib/components/ButtonGroup.svelte";
  import { theme } from "$lib/stores/theme";
</script>

<section class="hero-section">
  <div class="columns">
    <section class="left-col">
      <h1>Turn fragmented EHR data into AI-ready Postgres in <strong>30 days</strong>, or we work free.</h1>

      <h2>
        Stop watching AI initiatives stall while legacy integration vendors charge $250K+ for 6-month deployments that weren't designed for modern workflows.
      </h2>

      <!-- Pain Points -->
      <div class="pain-points">
        <h3>If this sounds familiar, you're not alone:</h3>
        <ul>
          <li>Your data team waits <strong>months</strong> for simple EHR feeds</li>
          <li>Legacy interface engines can't handle Python-first AI workflows</li>
          <li>PHI keeps appearing where it shouldn't, derailing compliance</li>
          <li>Every integration feels like starting from scratch</li>
        </ul>
      </div>

      <ButtonGroup primary="/book" secondary="/offer" primaryText="Book Intro Call" secondaryText="See Pilot Program" />
    </section>
    <aside class="right-col">
      <StoaIcon variant={$theme === "dark" ? "grey" : "tan"}></StoaIcon>
    </aside>
  </div>
</section>

<!-- Solution Section -->
<section class="solution-section">
  <h2>The Modern Alternative to Legacy Integration</h2>
  
  <div class="solution-grid">
    <div class="solution-item">
      <div class="solution-icon">🚀</div>
      <h3>Ship in Days, Not Months</h3>
      <p>Based on lessons learned from Epic, Canvas, and Stanford implementations. We're building the integration solution we always wished existed.</p>
    </div>
    
    <div class="solution-item">
      <div class="solution-icon">🐍</div>
      <h3>Built for AI/ML Teams</h3>
      <p>Native Python SDKs, vector embeddings, and LangChain integrations. No more wrestling with legacy XML APIs when you need JSON.</p>
    </div>
    
    <div class="solution-item">
      <div class="solution-icon">🔒</div>
      <h3>PHI-Safe by Design</h3>
      <p>Automated PHI detection and field-level encryption. No more surprises during security reviews that derail your AI projects.</p>
    </div>
  </div>
</section>

<!-- Founder Credibility -->
<section class="social-proof">
  <div class="proof-strip">
    <div class="credibility-header">
      <h3>Built by Healthcare Integration Experts</h3>
      <p>Combining deep healthcare domain expertise with modern AI/ML infrastructure</p>
    </div>
    
    <div class="credentials-grid">
      <div class="credential-item">
        <div class="credential-icon">🏥</div>
        <h4>Epic Systems</h4>
        <p>_EPIC_EXPERIENCE_SUMMARY_</p>
      </div>
      
      <div class="credential-item">
        <div class="credential-icon">🚀</div>
        <h4>Canvas Medical</h4>
        <p>_CANVAS_EXPERIENCE_SUMMARY_</p>
      </div>
      
      <div class="credential-item">
        <div class="credential-icon">🎓</div>
        <h4>Stanford Medicine</h4>
        <p>_STANFORD_EXPERIENCE_SUMMARY_</p>
      </div>
    </div>
    
    <div class="founder-quote">
      <blockquote>
        "I've seen the same EHR integration problems at every organization I've worked with. It's time for a modern solution built specifically for AI-first healthcare teams."
      </blockquote>
      <cite>— Eric Pan, Founder</cite>
    </div>
  </div>
</section>

<!-- How It Works -->
<section class="how-it-works">
  <h2>From Chaos to Clarity in 3 Steps</h2>
  
  <div class="steps">
    <div class="step">
      <div class="step-number">1</div>
      <h3>Connect Your Systems</h3>
      <p>We handle the messy work of EHR APIs, HL7 feeds, and FHIR resources. You get clean, normalized data.</p>
    </div>
    
    <div class="step">
      <div class="step-number">2</div>
      <h3>Transform & Enrich</h3>
      <p>Automatic FHIR to OMOP mapping, deduplication, and AI-ready transformations. All PHI tagged and encrypted.</p>
    </div>
    
    <div class="step">
      <div class="step-number">3</div>
      <h3>Deploy AI Agents</h3>
      <p>Use our pre-built agents or bring your own. Full observability and compliance built into every workflow.</p>
    </div>
  </div>
</section>

<style>
  /* Hero Section */
  .hero-section {
    margin-bottom: 4rem;
  }

  .columns {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
  }

  .left-col {
    flex: 0 1 65%;
  }

  .right-col {
    flex: 0 1 35%;
    display: flex;
    align-items: flex-start;
  }

  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 1.25rem;
    color: var(--text-secondary);
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 2rem;
  }

  /* Pain Points */
  .pain-points {
    background-color: var(--bg-secondary);
    padding: 1.5rem;
    border-radius: 0.75rem;
    margin-bottom: 2rem;
  }

  .pain-points h3 {
    font-size: 1rem;
    margin: 0 0 1rem;
    color: var(--text-primary);
  }

  .pain-points ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .pain-points li {
    padding-left: 1.5rem;
    position: relative;
    margin-bottom: 0.75rem;
    color: var(--text-secondary);
  }

  .pain-points li::before {
    content: "→";
    position: absolute;
    left: 0;
    color: var(--accent);
  }

  /* Solution Section */
  .solution-section {
    margin-bottom: 4rem;
    padding: 3rem 0;
  }

  .solution-section h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 3rem;
    color: var(--text-primary);
  }

  .solution-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .solution-item {
    text-align: center;
    padding: 2rem;
    background-color: var(--bg-secondary);
    border-radius: 0.75rem;
    transition: transform 0.2s ease;
  }

  .solution-item:hover {
    transform: translateY(-4px);
  }

  .solution-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .solution-item h3 {
    font-size: 1.25rem;
    margin: 0 0 1rem;
    color: var(--text-primary);
  }

  .solution-item p {
    font-size: 0.875rem;
    color: var(--text-secondary);
    line-height: 1.5;
    margin: 0;
  }

  /* Social Proof */
  .social-proof {
    background-color: var(--bg-secondary);
    padding: 3rem;
    border-radius: 1rem;
    margin-bottom: 4rem;
  }

  .proof-strip {
    text-align: center;
  }

  .credibility-header {
    margin-bottom: 2rem;
  }

  .credibility-header h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
  }

  .credibility-header p {
    color: var(--text-secondary);
    font-size: 1rem;
  }

  .credentials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .credential-item {
    background-color: var(--bg-primary);
    padding: 1.5rem;
    border-radius: 0.75rem;
    text-align: center;
  }

  .credential-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .credential-item h4 {
    margin: 0 0 0.5rem;
    color: var(--text-primary);
    font-size: 1.125rem;
  }

  .credential-item p {
    margin: 0;
    color: var(--text-secondary);
    font-size: 0.875rem;
    line-height: 1.4;
  }

  .founder-quote {
    max-width: 600px;
    margin: 0 auto;
  }

  .founder-quote blockquote {
    font-size: 1.125rem;
    font-style: italic;
    color: var(--text-primary);
    margin: 0 0 1rem;
    line-height: 1.6;
  }

  .founder-quote cite {
    display: block;
    font-style: normal;
    font-size: 0.875rem;
    color: var(--text-secondary);
    font-weight: 600;
  }

  /* How It Works */
  .how-it-works {
    margin-bottom: 4rem;
  }

  .how-it-works h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 3rem;
    color: var(--text-primary);
  }

  .steps {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    max-width: 1000px;
    margin: 0 auto;
  }

  .step {
    text-align: center;
    position: relative;
  }

  .step-number {
    width: 3rem;
    height: 3rem;
    background-color: var(--accent);
    color: var(--bg-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.25rem;
    margin: 0 auto 1rem;
  }

  .step h3 {
    font-size: 1.125rem;
    margin: 0 0 1rem;
    color: var(--text-primary);
  }

  .step p {
    font-size: 0.875rem;
    color: var(--text-secondary);
    line-height: 1.5;
    margin: 0;
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    .columns {
      flex-direction: column;
      gap: 1rem;
    }

    .left-col,
    .right-col {
      flex: 1 1 100%;
    }

    .right-col {
      justify-content: flex-start;
    }

    h1 {
      font-size: 2rem;
    }

    .solution-grid,
    .steps,
    .credentials-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .solution-item {
      padding: 1.5rem;
    }

    .social-proof {
      padding: 2rem 1.5rem;
    }
  }
</style>
