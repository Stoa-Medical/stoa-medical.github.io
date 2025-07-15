<script>
  let activeTab = $state("modeler");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Portico Integration Engine",
    description:
      "The intelligent data fabric that connects your healthcare ecosystem",
    applicationCategory: "HealthcareApplication",
    operatingSystem: "Web-based",
    offers: {
      "@type": "Offer",
      price: "Contact for pricing",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "Stoa Medical",
      url: "https://stoamedical.com",
    },
    url: "https://stoamedical.com/platform",
    sameAs: "https://github.com/Stoa-Medical/Portico",
    featureList: [
      "Visual Data Modeler",
      "Agent Orchestration",
      "Compliance & Audit",
      "FHIR resource mapping",
      "Real-time data preview",
      "Auto-generated SDKs",
    ],
  };
</script>

<svelte:head>
  <title>Portico Integration Engine - Stoa Medical</title>
  <meta
    name="description"
    content="The intelligent data fabric that connects your healthcare ecosystem. Visual modeler, agent orchestration, and compliance tools."
  />
  {@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<section>
  <h1>Portico Integration Engine</h1>

  <div class="open-core-badge">
    <span class="badge-icon">🔓</span>
    <span>Open-core</span>
    <a
      href="https://github.com/Stoa-Medical/Portico"
      target="_blank"
      class="github-link"
    >
      View on GitHub →
    </a>
  </div>

  <h2>Ship production-ready healthcare AI in days, not months</h2>
  
  <div class="value-proposition">
    <div class="value-stat">
      <span class="stat-number">48h</span>
      <span class="stat-label">FHIR to Vector Pipeline</span>
    </div>
    <div class="value-stat">
      <span class="stat-number">$250K+</span>
      <span class="stat-label">Saved vs Legacy Integration</span>
    </div>
    <div class="value-stat">
      <span class="stat-number">99.9%</span>
      <span class="stat-label">Uptime SLA</span>
    </div>
  </div>

  <div class="tabs">
    <button
      class="tab"
      class:active={activeTab === "modeler"}
      onclick={() => (activeTab = "modeler")}
    >
      Modeler
    </button>
    <button
      class="tab"
      class:active={activeTab === "orchestration"}
      onclick={() => (activeTab = "orchestration")}
    >
      Agent Orchestration
    </button>
    <button
      class="tab"
      class:active={activeTab === "audit"}
      onclick={() => (activeTab = "audit")}
    >
      Audit
    </button>
  </div>

  <div class="tab-content">
    {#if activeTab === "modeler"}
      <div class="tab-value-card">
        <h3>Visual Data Modeler</h3>
        <div class="outcome-highlight">
          <span class="outcome-icon">⚡</span>
          <span><strong>Outcome:</strong> Go from raw EHR data to production-ready APIs in 48 hours</span>
        </div>
        <p>
          Stop writing custom parsers for every EHR feed. Our visual interface handles the complex mapping between FHIR resources and your internal schemas automatically.
        </p>
        
        <div class="value-cards">
          <div class="value-card">
            <h4>🎯 What You Get</h4>
            <ul>
              <li>Drag-and-drop FHIR resource mapping</li>
              <li>Real-time data preview and validation</li>
              <li>Auto-generated TypeScript/Python SDKs</li>
            </ul>
          </div>
          
          <div class="value-card">
            <h4>💰 Business Impact</h4>
            <ul>
              <li>Reduce integration time by 80%</li>
              <li>Eliminate custom parser development</li>
              <li>Accelerate AI model deployment</li>
            </ul>
          </div>
        </div>
      </div>
    {:else if activeTab === "orchestration"}
      <div class="tab-value-card">
        <h3>Agent Orchestration</h3>
        <div class="outcome-highlight">
          <span class="outcome-icon">🤖</span>
          <span><strong>Outcome:</strong> Deploy healthcare AI agents with built-in compliance and error handling</span>
        </div>
        <p>
          Deploy LLMs that understand healthcare workflows without worrying about PHI leaks or regulatory compliance.
        </p>
        
        <div class="value-cards">
          <div class="value-card">
            <h4>🎯 What You Get</h4>
            <ul>
              <li>Pre-built agents for common EHR tasks</li>
              <li>Natural language workflow definitions</li>
              <li>Automatic retry and error handling</li>
            </ul>
          </div>
          
          <div class="value-card">
            <h4>💰 Business Impact</h4>
            <ul>
              <li>Ship AI features 5x faster</li>
              <li>Reduce operational overhead</li>
              <li>Maintain 99.9% uptime SLA</li>
            </ul>
          </div>
        </div>
      </div>
    {:else if activeTab === "audit"}
      <div class="tab-value-card">
        <h3>Compliance & Audit</h3>
        <div class="outcome-highlight">
          <span class="outcome-icon">🔒</span>
          <span><strong>Outcome:</strong> Pass HIPAA and SOC 2 audits with zero surprises</span>
        </div>
        <p>
          Complete audit trails and PHI detection built into every data transformation. Your compliance team will thank you.
        </p>
        
        <div class="value-cards">
          <div class="value-card">
            <h4>🎯 What You Get</h4>
            <ul>
              <li>Immutable audit logs with blockchain verification</li>
              <li>Automated PHI detection and tagging</li>
              <li>One-click compliance reports</li>
            </ul>
          </div>
          
          <div class="value-card">
            <h4>💰 Business Impact</h4>
            <ul>
              <li>Reduce audit prep time by 90%</li>
              <li>Eliminate PHI breach risks</li>
              <li>Accelerate SOC 2 certification</li>
            </ul>
          </div>
        </div>
      </div>
    {/if}
  </div>

  <!-- Customer Success Section -->
  <div class="success-section">
    <h2>Real Results from Real Customers</h2>
    
    <div class="success-metrics">
      <div class="metric">
        <div class="metric-value">80%</div>
        <div class="metric-label">Faster Integration</div>
        <div class="metric-description">Average time reduction vs legacy systems</div>
      </div>
      
      <div class="metric">
        <div class="metric-value">$2M+</div>
        <div class="metric-label">Cost Savings</div>
        <div class="metric-description">Eliminated consulting fees per customer</div>
      </div>
      
      <div class="metric">
        <div class="metric-value">99.9%</div>
        <div class="metric-label">Uptime</div>
        <div class="metric-description">Production reliability guarantee</div>
      </div>
    </div>
    
    <blockquote class="customer-quote">
      "Having worked across Epic implementations, healthcare AI startups, and academic medical centers, I've seen the same integration challenges everywhere. Stoa Medical is the solution I always wished existed."
      <cite>— Eric Pan, Founder</cite>
    </blockquote>
  </div>

  <!-- CTA Section -->
  <div class="platform-cta">
    <h2>Ready to Transform Your Healthcare Data?</h2>
    <p>See how our Founding Partner Pilot can get you to production in 30 days</p>
    
    <div class="cta-buttons">
      <a href="/offer" class="cta-primary">See Pilot Scope</a>
      <a href="/book" class="cta-secondary">Book Discovery Call</a>
    </div>
    
    <div class="cta-guarantee">
      <span class="guarantee-icon">✅</span>
      <span>30-day implementation guarantee or we work free</span>
    </div>
  </div>
</section>

<style>
  .open-core-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background-color: var(--bg-secondary);
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    margin: 1rem 0;
    font-size: 0.875rem;
  }

  .badge-icon {
    font-size: 1rem;
  }

  .github-link {
    margin-left: 0.5rem;
    color: var(--accent);
    text-decoration: none;
    font-weight: 500;
  }

  .github-link:hover {
    text-decoration: underline;
  }

  .tabs {
    display: flex;
    gap: 0.5rem;
    margin: 2rem 0 1.5rem;
    border-bottom: 2px solid var(--bg-secondary);
  }

  .tab {
    padding: 0.75rem 1.5rem;
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    color: var(--text-secondary);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-bottom: -2px;
  }

  .tab:hover {
    color: var(--text-primary);
  }

  .tab.active {
    color: var(--accent);
    border-bottom-color: var(--accent);
  }

  .tab-content {
    padding: 1.5rem 0;
  }

  .tab-content h3 {
    margin-top: 0;
    color: var(--text-primary);
  }

  .tab-content ul {
    list-style-type: none;
    padding-left: 0;
    margin-top: 1rem;
  }

  .tab-content li {
    padding-left: 1.5rem;
    position: relative;
    margin-bottom: 0.5rem;
  }

  .tab-content li::before {
    content: "→";
    position: absolute;
    left: 0;
    color: var(--accent);
  }

  /* Value Proposition */
  .value-proposition {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin: 3rem 0;
  }

  .value-stat {
    text-align: center;
    padding: 1.5rem;
    background-color: var(--bg-secondary);
    border-radius: 0.75rem;
  }

  .stat-number {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--accent);
    margin-bottom: 0.5rem;
  }

  .stat-label {
    font-size: 0.875rem;
    color: var(--text-secondary);
  }

  /* Tab Value Cards */
  .tab-value-card {
    margin-top: 1rem;
  }

  .outcome-highlight {
    background-color: var(--bg-secondary);
    padding: 1rem;
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .outcome-icon {
    font-size: 1.5rem;
  }

  .value-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .value-card {
    background-color: var(--bg-secondary);
    padding: 1.5rem;
    border-radius: 0.75rem;
  }

  .value-card h4 {
    margin: 0 0 1rem;
    color: var(--text-primary);
    font-size: 1rem;
  }

  .value-card ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .value-card li {
    padding-left: 1.5rem;
    position: relative;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    color: var(--text-secondary);
  }

  .value-card li::before {
    content: "→";
    position: absolute;
    left: 0;
    color: var(--accent);
  }

  /* Success Section */
  .success-section {
    background-color: var(--bg-secondary);
    padding: 3rem;
    border-radius: 1rem;
    margin: 3rem 0;
    text-align: center;
  }

  .success-section h2 {
    margin-bottom: 2rem;
  }

  .success-metrics {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .metric {
    padding: 1.5rem;
    background-color: var(--bg-primary);
    border-radius: 0.75rem;
  }

  .metric-value {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--accent);
    display: block;
    margin-bottom: 0.5rem;
  }

  .metric-label {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-primary);
    display: block;
    margin-bottom: 0.5rem;
  }

  .metric-description {
    font-size: 0.75rem;
    color: var(--text-secondary);
  }

  .customer-quote {
    font-size: 1.25rem;
    font-style: italic;
    color: var(--text-primary);
    margin: 0;
    line-height: 1.6;
  }

  .customer-quote cite {
    display: block;
    font-style: normal;
    font-size: 0.875rem;
    color: var(--text-secondary);
    margin-top: 1rem;
  }

  /* CTA Section */
  .platform-cta {
    text-align: center;
    padding: 3rem;
    background-color: var(--bg-secondary);
    border-radius: 1rem;
    margin: 3rem 0;
  }

  .platform-cta h2 {
    margin-bottom: 1rem;
  }

  .platform-cta p {
    color: var(--text-secondary);
    margin-bottom: 2rem;
  }

  .cta-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .cta-primary,
  .cta-secondary {
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.2s ease;
  }

  .cta-primary {
    background-color: var(--accent);
    color: var(--bg-primary);
  }

  .cta-primary:hover {
    background-color: var(--text-primary);
  }

  .cta-secondary {
    background-color: var(--bg-primary);
    color: var(--text-primary);
    border: 2px solid var(--accent);
  }

  .cta-secondary:hover {
    background-color: var(--accent);
    color: var(--bg-primary);
  }

  .cta-guarantee {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: var(--text-secondary);
    font-size: 0.875rem;
  }

  .guarantee-icon {
    font-size: 1.25rem;
    color: var(--accent);
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    .value-proposition,
    .success-metrics {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .value-cards {
      grid-template-columns: 1fr;
    }

    .cta-buttons {
      flex-direction: column;
      align-items: center;
    }

    .cta-primary,
    .cta-secondary {
      width: 100%;
      max-width: 300px;
    }
  }
</style>
