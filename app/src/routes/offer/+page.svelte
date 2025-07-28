<script>
  import Button from "$lib/components/Button.svelte";
  import { onMount } from "svelte";

  let spotsRemaining = $state(3);
  let timeLeft = $state({ days: 30, hours: 0, minutes: 0 });
  let isFormSubmitted = $state(false);
  
  // Form fields
  let companyName = $state("");
  let contactName = $state("");
  let email = $state("");
  let phone = $state("");
  let currentEHR = $state("");
  let bedCount = $state("");
  let urgency = $state("");
  let challenges = $state("");

  // Countdown timer
  onMount(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 30);
    
    const timer = setInterval(() => {
      const now = new Date();
      const diff = endDate - now;
      
      if (diff > 0) {
        timeLeft = {
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        };
      } else {
        clearInterval(timer);
      }
    }, 60000); // Update every minute
    
    return () => clearInterval(timer);
  });

  function handleSubmit(event) {
    event.preventDefault();
    // TODO: Integrate with form submission service
    isFormSubmitted = true;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: "Founding Partner Pilot Program",
    description: "Transform your EHR data into AI-ready infrastructure in 30 days with 50% off implementation",
    price: "10000",
    priceCurrency: "USD",
    availability: "https://schema.org/LimitedAvailability",
    seller: {
      "@type": "Organization",
      name: "Stoa Medical",
      url: "https://stoamedical.com"
    }
  };
</script>

<svelte:head>
  <title>Founding Partner Pilot Program - Stoa Medical</title>
  <meta
    name="description"
    content="Limited offer: First 3 health systems get 50% off our EHR integration implementation. Go live in 30 days or we work free."
  />
  {@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
</svelte:head>

<section class="offer-page">
  <!-- Urgency Banner -->
  <div class="urgency-banner">
    <div class="banner-content">
      <span class="banner-icon">⏰</span>
      <span>Limited Time: Only <strong>{spotsRemaining} spots</strong> remaining at 50% off</span>
      <div class="countdown">
        <span>{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m left</span>
      </div>
    </div>
  </div>

  <!-- Hero Section -->
  <div class="hero-section">
    <div class="pilot-badge">🚀 Founding Partner Pilot</div>
    <h1>Turn Your EHR Data Into AI-Ready Infrastructure in <span class="highlight">30 Days</span></h1>
    <h2 class="guarantee">Work directly with our founder to build the integration solution you need</h2>
    
    <div class="hero-stats">
      <div class="stat">
        <div class="stat-value">50%</div>
        <div class="stat-label">Off Implementation</div>
      </div>
      <div class="stat">
        <div class="stat-value">$10K</div>
        <div class="stat-label">One-Time Setup</div>
      </div>
      <div class="stat">
        <div class="stat-value">1-on-1</div>
        <div class="stat-label">Founder Access</div>
      </div>
    </div>
  </div>

  <!-- Value Stack Section -->
  <div class="value-section">
    <h2>The Healthcare Integration Transformation Stack</h2>
    
    <div class="value-table">
      <div class="value-header">
        <div>What You Get</div>
        <div>Value</div>
        <div>Your Price</div>
      </div>
      
      <div class="value-row">
        <div class="value-item">
          <h3>✅ Custom EHR Integration</h3>
          <p>Direct 1-on-1 work with our founder to build the exact integration your organization needs</p>
        </div>
        <div class="value-price">$15,000</div>
        <div class="your-price">Included</div>
      </div>

      <div class="value-row">
        <div class="value-item">
          <h3>✅ AI-Ready Data Pipeline</h3>
          <p>Transform your EHR data into clean, structured formats ready for machine learning and analytics</p>
        </div>
        <div class="value-price">$12,000</div>
        <div class="your-price">Included</div>
      </div>

      <div class="value-row">
        <div class="value-item">
          <h3>✅ Founder Advisory Access</h3>
          <p>12 months of direct access to our founder for architecture reviews, troubleshooting, and strategic guidance</p>
        </div>
        <div class="value-price">$8,000</div>
        <div class="your-price">FREE Bonus</div>
      </div>

      <div class="value-row">
        <div class="value-item">
          <h3>✅ Compliance Documentation</h3>
          <p>Complete HIPAA and security documentation package based on Epic/Stanford best practices</p>
        </div>
        <div class="value-price">$5,000</div>
        <div class="your-price">FREE Bonus</div>
      </div>

      <div class="value-row">
        <div class="value-item">
          <h3>✅ Source Code Ownership</h3>
          <p>Full source code delivery - no vendor lock-in, extend and modify as needed for your organization</p>
        </div>
        <div class="value-price">$6,000</div>
        <div class="your-price">FREE Bonus</div>
      </div>

      <div class="value-total">
        <div>Total Value</div>
        <div class="total-value">$46,000</div>
        <div class="total-price">
          <span class="strike">$20,000</span>
          <span class="final-price">$10,000</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Problem/Solution Section -->
  <div class="problem-solution">
    <div class="problem">
      <h2>The Hidden Cost of Legacy Integration</h2>
      <ul>
        <li>❌ <strong>6-12 months</strong> to deploy traditional interface engines</li>
        <li>❌ <strong>$250K+</strong> in consulting fees before seeing any data</li>
        <li>❌ <strong>Zero flexibility</strong> for modern AI/ML workflows</li>
        <li>❌ <strong>PHI surprises</strong> that derail your compliance</li>
        <li>❌ <strong>Vendor lock-in</strong> with proprietary formats</li>
      </ul>
    </div>
    
    <div class="solution">
      <h2>The Stoa Medical Difference</h2>
      <ul>
        <li>✅ <strong>30-day deployment</strong> with our proven playbooks</li>
        <li>✅ <strong>Fixed $10K price</strong> for complete implementation</li>
        <li>✅ <strong>Python-native</strong> for seamless AI integration</li>
        <li>✅ <strong>PHI tagging</strong> automated from day one</li>
        <li>✅ <strong>Open-source core</strong> you can extend forever</li>
      </ul>
    </div>
  </div>

  <!-- How It Works -->
  <div class="how-it-works">
    <h2>Your 30-Day Transformation</h2>
    
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-number">1</div>
        <div class="timeline-content">
          <h3>Week 1: Discovery & Architecture</h3>
          <p>Deep dive into your EHR setup, data requirements, and AI use cases. Define the integration architecture that fits your specific needs.</p>
        </div>
      </div>
      
      <div class="timeline-item">
        <div class="timeline-number">2</div>
        <div class="timeline-content">
          <h3>Week 2-3: Custom Development</h3>
          <p>Build your integration solution with daily check-ins and iterative feedback. Full transparency into the development process.</p>
        </div>
      </div>
      
      <div class="timeline-item">
        <div class="timeline-number">3</div>
        <div class="timeline-content">
          <h3>Week 4: Testing & Handoff</h3>
          <p>Comprehensive testing, documentation, and knowledge transfer. You get the source code and understand how everything works.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Application Form -->
  <div class="application-section" id="apply">
    <div class="form-container">
      {#if isFormSubmitted}
        <div class="success-message">
          <div class="success-icon">🎉</div>
          <h3>Application Received!</h3>
          <p>Thank you for applying to our Founding Partner Pilot. We'll review your application and get back to you within 24 hours.</p>
          <p class="next-steps">
            <strong>Next steps:</strong> Check your email for confirmation and prepare for a 30-minute discovery call where we'll discuss your specific integration needs.
          </p>
          <Button href="/book" variant="secondary">Schedule Discovery Call Now</Button>
        </div>
      {:else}
        <h2>Apply for Founding Partner Status</h2>
        <p class="form-intro">Only {spotsRemaining} spots remaining. Applications reviewed within 24 hours.</p>
        
        <form onsubmit={handleSubmit} class="pilot-form">
          <div class="form-grid">
            <div class="form-group">
              <label for="company">Health System Name *</label>
              <input
                id="company"
                type="text"
                bind:value={companyName}
                required
                placeholder="Regional Medical Center"
              />
            </div>
            
            <div class="form-group">
              <label for="contact">Your Name *</label>
              <input
                id="contact"
                type="text"
                bind:value={contactName}
                required
                placeholder="Dr. Sarah Johnson"
              />
            </div>
            
            <div class="form-group">
              <label for="email">Work Email *</label>
              <input
                id="email"
                type="email"
                bind:value={email}
                required
                placeholder="sarah.johnson@hospital.org"
              />
            </div>
            
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input
                id="phone"
                type="tel"
                bind:value={phone}
                placeholder="(555) 123-4567"
              />
            </div>
            
            <div class="form-group">
              <label for="ehr">Current EHR System *</label>
              <select id="ehr" bind:value={currentEHR} required>
                <option value="">Select your EHR...</option>
                <option value="epic">Epic</option>
                <option value="cerner">Cerner/Oracle</option>
                <option value="allscripts">Allscripts</option>
                <option value="athena">athenahealth</option>
                <option value="nextgen">NextGen</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="beds">Bed Count</label>
              <select id="beds" bind:value={bedCount}>
                <option value="">Select range...</option>
                <option value="<100">Less than 100</option>
                <option value="100-500">100-500</option>
                <option value="500-1000">500-1000</option>
                <option value=">1000">More than 1000</option>
              </select>
            </div>
          </div>
          
          <div class="form-group full-width">
            <label for="urgency">Timeline for Implementation *</label>
            <select id="urgency" bind:value={urgency} required>
              <option value="">Select timeline...</option>
              <option value="immediate">Immediate (This quarter)</option>
              <option value="3months">Next 3 months</option>
              <option value="6months">Next 6 months</option>
              <option value="exploring">Just exploring options</option>
            </select>
          </div>
          
          <div class="form-group full-width">
            <label for="challenges">Current Integration Challenges</label>
            <textarea
              id="challenges"
              bind:value={challenges}
              rows="4"
              placeholder="Our data team has been waiting 6 months for a simple patient demographics feed from Epic. We need to get our ML models running on real data..."
            ></textarea>
          </div>
          
          <div class="form-footer">
            <p class="disclaimer">
              By submitting this application, you agree to our <a href="/legal/terms">Terms of Service</a> and <a href="/legal/privacy">Privacy Policy</a>.
            </p>
            
            <Button variant="primary" class="submit-button">
              Apply for Pilot Program →
            </Button>
          </div>
        </form>
      {/if}
    </div>
  </div>

  <!-- FAQ Section -->
  <div class="faq-section">
    <h2>Common Questions</h2>
    
    <div class="faq-grid">
      <div class="faq-item">
        <h3>What if we need more than 30 days?</h3>
        <p>If scope expands during development, we'll continue working at no additional cost until you have a functional integration. Our goal is your success, not arbitrary timelines.</p>
      </div>
      
      <div class="faq-item">
        <h3>Do you work with our existing IT team?</h3>
        <p>Absolutely. We collaborate closely with your IT and data teams throughout the process. This is a partnership, not a black-box consulting engagement.</p>
      </div>
      
      <div class="faq-item">
        <h3>What about HIPAA compliance?</h3>
        <p>All integrations are built with HIPAA compliance from day one. We provide comprehensive documentation and security reviews based on Epic and Stanford best practices.</p>
      </div>
      
      <div class="faq-item">
        <h3>Can we extend beyond the pilot?</h3>
        <p>Yes! Many pilot partners continue working with us on additional integrations and AI initiatives. This pilot is designed to be the foundation for long-term partnership.</p>
      </div>
    </div>
  </div>

  <!-- Final CTA -->
  <div class="final-cta">
    <h2>Ready to Transform Your Healthcare Data?</h2>
    <p>Join the first 3 health systems building the future of healthcare AI</p>
    <Button href="#apply" variant="primary" size="large">
      Claim Your Founding Partner Spot →
    </Button>
    <p class="cta-disclaimer">Only {spotsRemaining} slots available for Q{currentQuarter} • No obligation to proceed after application</p>
  </div>
</section>

<style>
  .offer-page {
    max-width: 1200px;
    margin: 0 auto;
  }

  /* Urgency Banner */
  .urgency-banner {
    background-color: var(--accent);
    color: var(--bg-primary);
    padding: 1rem;
    position: sticky;
    top: 0;
    z-index: 100;
    margin: -2rem -2rem 2rem -2rem;
  }

  .banner-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .banner-icon {
    font-size: 1.5rem;
    animation: pulse 2s infinite;
  }

  .countdown {
    background-color: rgba(0, 0, 0, 0.2);
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.875rem;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  /* Hero Section */
  .hero-section {
    text-align: center;
    margin-bottom: 4rem;
  }

  .pilot-badge {
    display: inline-block;
    background-color: var(--bg-secondary);
    padding: 0.5rem 1.5rem;
    border-radius: 9999px;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .hero-section h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .highlight {
    color: var(--accent);
    font-weight: 700;
  }

  .guarantee {
    font-size: 1.5rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
  }

  .hero-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    max-width: 600px;
    margin: 0 auto;
  }

  .stat {
    text-align: center;
  }

  .stat-value {
    font-size: 3rem;
    font-weight: 700;
    color: var(--accent);
  }

  .stat-label {
    color: var(--text-secondary);
    font-size: 0.875rem;
  }

  /* Value Stack */
  .value-section {
    background-color: var(--bg-secondary);
    padding: 3rem;
    border-radius: 1rem;
    margin-bottom: 4rem;
  }

  .value-section h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .value-table {
    max-width: 900px;
    margin: 0 auto;
  }

  .value-header {
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 2rem;
    padding: 1rem;
    border-bottom: 2px solid var(--accent);
    font-weight: 600;
    color: var(--text-secondary);
  }

  .value-row {
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 2rem;
    padding: 1.5rem 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    align-items: center;
  }

  .value-item h3 {
    margin: 0 0 0.5rem;
    color: var(--text-primary);
  }

  .value-item p {
    margin: 0;
    font-size: 0.875rem;
    color: var(--text-secondary);
  }

  .value-price {
    font-weight: 600;
    color: var(--text-secondary);
    text-decoration: line-through;
  }

  .your-price {
    font-weight: 700;
    color: var(--accent);
  }

  .value-total {
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 2rem;
    padding: 2rem 1rem 1rem;
    font-weight: 700;
    font-size: 1.25rem;
  }

  .total-value {
    text-decoration: line-through;
    color: var(--text-secondary);
  }

  .strike {
    text-decoration: line-through;
    color: var(--text-secondary);
    margin-right: 1rem;
  }

  .final-price {
    color: var(--accent);
    font-size: 1.5rem;
  }

  /* Problem/Solution */
  .problem-solution {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin-bottom: 4rem;
  }

  .problem, .solution {
    padding: 2rem;
    border-radius: 0.75rem;
  }

  .problem {
    background-color: rgba(255, 0, 0, 0.05);
  }

  .solution {
    background-color: rgba(0, 255, 0, 0.05);
  }

  .problem h2, .solution h2 {
    margin-bottom: 1.5rem;
  }

  .problem ul, .solution ul {
    list-style: none;
    padding: 0;
  }

  .problem li, .solution li {
    margin-bottom: 1rem;
    padding-left: 2rem;
    position: relative;
  }

  .problem li::before,
  .solution li::before {
    position: absolute;
    left: 0;
    font-size: 1.25rem;
  }

  /* How It Works */
  .how-it-works {
    margin-bottom: 4rem;
  }

  .how-it-works h2 {
    text-align: center;
    margin-bottom: 3rem;
  }

  .timeline {
    max-width: 800px;
    margin: 0 auto;
  }

  .timeline-item {
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
    align-items: flex-start;
  }

  .timeline-number {
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
    flex-shrink: 0;
  }

  .timeline-content h3 {
    margin: 0 0 0.5rem;
    color: var(--text-primary);
  }

  .timeline-content p {
    margin: 0;
    color: var(--text-secondary);
  }

  /* Application Form */
  .application-section {
    background-color: var(--bg-secondary);
    padding: 3rem;
    border-radius: 1rem;
    margin-bottom: 4rem;
  }

  .form-container {
    max-width: 800px;
    margin: 0 auto;
  }

  .form-intro {
    text-align: center;
    color: var(--text-secondary);
    margin-bottom: 2rem;
  }

  .pilot-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form-group.full-width {
    grid-column: span 2;
  }

  .form-group label {
    font-weight: 600;
    color: var(--text-primary);
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    padding: 0.75rem;
    border: 1.5px solid var(--accent);
    border-radius: 0.375rem;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    font-size: 0.875rem;
  }

  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: var(--text-primary);
  }

  .form-footer {
    margin-top: 2rem;
    text-align: center;
  }

  .disclaimer {
    font-size: 0.75rem;
    color: var(--text-secondary);
    margin-bottom: 1rem;
  }

  .disclaimer a {
    color: var(--accent);
  }

  .submit-button {
    min-width: 300px;
    justify-content: center;
  }

  /* Success Message */
  .success-message {
    text-align: center;
    padding: 2rem;
  }

  .success-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
  }

  .success-message h3 {
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  .success-message p {
    color: var(--text-secondary);
    margin-bottom: 1rem;
  }

  .next-steps {
    background-color: var(--bg-primary);
    padding: 1.5rem;
    border-radius: 0.5rem;
    margin: 2rem 0;
  }

  /* FAQ Section */
  .faq-section {
    margin-bottom: 4rem;
  }

  .faq-section h2 {
    text-align: center;
    margin-bottom: 3rem;
  }

  .faq-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  .faq-item {
    background-color: var(--bg-secondary);
    padding: 1.5rem;
    border-radius: 0.75rem;
  }

  .faq-item h3 {
    margin: 0 0 1rem;
    color: var(--text-primary);
  }

  .faq-item p {
    margin: 0;
    color: var(--text-secondary);
    font-size: 0.875rem;
  }

  /* Final CTA */
  .final-cta {
    text-align: center;
    padding: 4rem 2rem;
    background-color: var(--bg-secondary);
    border-radius: 1rem;
    margin-bottom: 2rem;
  }

  .final-cta h2 {
    margin-bottom: 1rem;
  }

  .final-cta p {
    color: var(--text-secondary);
    margin-bottom: 2rem;
  }

  .cta-disclaimer {
    font-size: 0.875rem;
    margin-top: 1rem;
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    .hero-section h1 {
      font-size: 2rem;
    }

    .hero-stats {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .value-header,
    .value-row,
    .value-total {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .problem-solution {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .form-grid {
      grid-template-columns: 1fr;
    }

    .form-group.full-width {
      grid-column: span 1;
    }

    .faq-grid {
      grid-template-columns: 1fr;
    }

    .submit-button {
      width: 100%;
    }
  }
</style>