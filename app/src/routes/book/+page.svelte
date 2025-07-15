<script>
  import Button from "$lib/components/Button.svelte";
</script>

<svelte:head>
  <title>Book a Discovery Call - Stoa Medical</title>
  <meta
    name="description"
    content="Schedule a discovery call to discuss your healthcare data integration needs."
  />
</svelte:head>

<section class="book-page">
  <div class="hero-section">
    <div class="urgency-banner">
      <span class="urgency-icon">🔥</span>
      <span>Limited Time: Founding Partner Pilot - Only 3 spots at $10K (50% off)</span>
    </div>
    
    <h1>Book Your Discovery Call</h1>
    <p class="hero-subtitle">
      Let's discuss how we can transform your healthcare data integration
      challenges into competitive advantages in just 30 days.
    </p>
    
    <div class="pricing-anchor">
      <div class="price-badge">
        <span class="price-label">Pilot Program</span>
        <span class="price-amount">$10,000</span>
        <span class="price-note">One-time implementation fee</span>
      </div>
      <div class="guarantee-badge">
        <span class="guarantee-icon">✅</span>
        <span>30-day guarantee or we work free</span>
      </div>
    </div>
  </div>

  <div class="content-grid">
    <div class="call-info">
      <h2>What to expect</h2>

      <div class="expectation-item">
        <div class="expectation-icon">🎯</div>
        <div>
          <h3>Needs Assessment</h3>
          <p>
            We'll understand your current data challenges, integration pain
            points, and strategic objectives.
          </p>
        </div>
      </div>

      <div class="expectation-item">
        <div class="expectation-icon">💡</div>
        <div>
          <h3>Solution Design</h3>
          <p>
            Based on your needs, we'll outline a tailored approach using our
            Portico platform and services.
          </p>
        </div>
      </div>

      <div class="expectation-item">
        <div class="expectation-icon">🚀</div>
        <div>
          <h3>Implementation Roadmap</h3>
          <p>
            We'll provide a clear timeline, milestones, and next steps to get
            your project moving quickly.
          </p>
        </div>
      </div>

      <div class="call-details">
        <h3>Call Details</h3>
        <ul>
          <li><strong>Duration:</strong> 30 minutes</li>
          <li><strong>Format:</strong> Video call via Google Meet</li>
          <li><strong>Preparation:</strong> No prep required</li>
          <li>
            <strong>Follow-up:</strong> Technical proposal within 48 hours
          </li>
        </ul>
      </div>
    </div>

    <div class="booking-section">
      <div class="booking-card">
        <div class="calendar-urgency">
          <span class="urgency-dot"></span>
          <span>3 spots remaining this month</span>
        </div>
        
        <h3>Schedule Your Call</h3>
        <p>
          Ready to transform your healthcare data integration? Let's connect!
        </p>

        <div class="calendly-embed">
          <div class="embed-content">
            <div class="calendar-icon">📅</div>
            <p>_CALENDLY_EMBED_CODE_</p>
            <p class="embed-note">
              Select a time that works for you. All calls are 30 minutes and include a custom technical proposal.
            </p>
          </div>
        </div>

        <div class="booking-benefits">
          <h4>What you'll get from this call:</h4>
          <ul>
            <li>✅ Custom integration assessment</li>
            <li>✅ 30-day implementation timeline</li>
            <li>✅ Exact pricing (no surprises)</li>
            <li>✅ Technical proposal within 48 hours</li>
          </ul>
        </div>

        <div class="alternative-contact">
          <h4>Questions before booking?</h4>
          <div class="contact-options">
            <Button href="mailto:hello@stoamedical.com" variant="secondary">
              Send us an email
            </Button>
            <Button href="/offer" variant="primary">
              View Pilot Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="testimonial-section">
    <blockquote>
      "I've seen the same EHR integration problems at Epic, Canvas, and Stanford. Each time, I wished we had a modern solution built specifically for AI-first healthcare teams. That's why I'm building Stoa Medical."
    </blockquote>
    <cite>— Eric Pan, Founder</cite>
    
    <div class="social-proof-stats">
      <div class="stat">
        <span class="stat-number">Epic</span>
        <span class="stat-label">EHR Platform Experience</span>
      </div>
      <div class="stat">
        <span class="stat-number">Canvas</span>
        <span class="stat-label">Healthcare AI Startup</span>
      </div>
      <div class="stat">
        <span class="stat-number">Stanford</span>
        <span class="stat-label">Academic Medical Center</span>
      </div>
    </div>
  </div>
</section>

<style>
  .book-page {
    max-width: 1200px;
    margin: 0 auto;
  }

  .hero-section {
    text-align: center;
    margin-bottom: 4rem;
  }

  .urgency-banner {
    background-color: var(--accent);
    color: var(--bg-primary);
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    animation: pulse 2s infinite;
  }

  .urgency-icon {
    font-size: 1.25rem;
  }

  .hero-subtitle {
    font-size: 1.25rem;
    color: var(--text-secondary);
    margin-top: 1rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;
  }

  .pricing-anchor {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
    flex-wrap: wrap;
  }

  .price-badge {
    background-color: var(--bg-secondary);
    padding: 1rem 1.5rem;
    border-radius: 0.75rem;
    text-align: center;
    border: 2px solid var(--accent);
  }

  .price-label {
    display: block;
    font-size: 0.75rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  .price-amount {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    color: var(--accent);
    margin-bottom: 0.25rem;
  }

  .price-note {
    display: block;
    font-size: 0.75rem;
    color: var(--text-secondary);
  }

  .guarantee-badge {
    background-color: var(--bg-secondary);
    padding: 1rem 1.5rem;
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-primary);
    font-weight: 600;
  }

  .guarantee-icon {
    font-size: 1.25rem;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }

  .content-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin-bottom: 4rem;
  }

  .expectation-item {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    align-items: flex-start;
  }

  .expectation-icon {
    font-size: 2rem;
    flex-shrink: 0;
  }

  .expectation-item h3 {
    margin: 0 0 0.5rem;
    color: var(--text-primary);
  }

  .expectation-item p {
    margin: 0;
    color: var(--text-secondary);
    font-size: 0.875rem;
    line-height: 1.5;
  }

  .call-details {
    background-color: var(--bg-secondary);
    padding: 1.5rem;
    border-radius: 0.75rem;
    margin-top: 2rem;
  }

  .call-details h3 {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .call-details ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .call-details li {
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    color: var(--text-secondary);
  }

  .booking-card {
    background-color: var(--bg-secondary);
    padding: 2rem;
    border-radius: 0.75rem;
    height: fit-content;
  }

  .booking-card h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    color: var(--text-primary);
  }

  .calendar-urgency {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    padding: 0.5rem;
    background-color: rgba(255, 0, 0, 0.1);
    border-radius: 0.375rem;
    font-size: 0.875rem;
    color: var(--text-primary);
  }

  .urgency-dot {
    width: 8px;
    height: 8px;
    background-color: red;
    border-radius: 50%;
    animation: pulse 1s infinite;
  }

  .booking-card > p {
    margin-bottom: 2rem;
    color: var(--text-secondary);
  }

  .calendly-embed {
    background-color: var(--bg-primary);
    border: 2px solid var(--accent);
    border-radius: 0.5rem;
    padding: 2rem 1.5rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  .calendar-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .embed-content p {
    margin-bottom: 0.5rem;
    color: var(--text-secondary);
  }

  .embed-note {
    font-size: 0.875rem;
    font-style: italic;
    color: var(--text-secondary);
  }

  .booking-benefits {
    background-color: var(--bg-primary);
    padding: 1.5rem;
    border-radius: 0.5rem;
    margin-bottom: 2rem;
  }

  .booking-benefits h4 {
    margin: 0 0 1rem;
    color: var(--text-primary);
    font-size: 1rem;
  }

  .booking-benefits ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .booking-benefits li {
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    color: var(--text-secondary);
  }

  .alternative-contact {
    border-top: 1px solid var(--accent);
    padding-top: 1.5rem;
  }

  .alternative-contact h4 {
    margin: 0 0 1rem;
    color: var(--text-primary);
    font-size: 1rem;
  }

  .contact-options {
    display: flex;
    justify-content: center;
  }

  .testimonial-section {
    background-color: var(--bg-secondary);
    padding: 3rem;
    border-radius: 0.75rem;
    text-align: center;
    margin-top: 2rem;
  }

  .testimonial-section blockquote {
    font-size: 1.125rem;
    font-style: italic;
    color: var(--text-primary);
    margin: 0 0 1rem;
    line-height: 1.6;
  }

  .testimonial-section cite {
    color: var(--text-secondary);
    font-size: 0.875rem;
    font-style: normal;
    display: block;
    margin-bottom: 2rem;
  }

  .social-proof-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 2rem;
  }

  .stat {
    text-align: center;
  }

  .stat-number {
    display: block;
    font-size: 2rem;
    font-weight: 700;
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

    .expectation-item {
      flex-direction: column;
      text-align: center;
    }

    .pricing-anchor {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    .calendly-embed {
      padding: 1.5rem 1rem;
    }

    .testimonial-section {
      padding: 2rem 1.5rem;
    }

    .testimonial-section blockquote {
      font-size: 1rem;
    }

    .social-proof-stats {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .contact-options {
      flex-direction: column;
      gap: 1rem;
    }
  }
</style>
