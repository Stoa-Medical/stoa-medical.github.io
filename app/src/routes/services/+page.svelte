<script>
  import Button from "$lib/components/Button.svelte";
</script>

<section>
  <div class="announcement-banner">
    <span class="announcement-icon">🎉</span>
    <span
      >Limited time: <strong>80% discount</strong> for our first 50 customers</span
    >
  </div>

  <h1>Services</h1>
  <h2>Fixed-rate engagements designed for healthcare innovation</h2>

  <div class="pricing-grid">
    <div class="pricing-card">
      <h3 class="plan-name">Pilot</h3>
      <div class="plan-scope">Single interface • 1 month</div>
      <div class="plan-price">from <span class="price-amount">$8k</span></div>
      <ul class="plan-features">
        <li>One EHR or data source integration</li>
        <li>Basic data transformation pipeline</li>
        <li>Documentation & handoff</li>
        <li>30-day support included</li>
      </ul>
      <Button href="/book" variant="secondary">Start pilot</Button>
    </div>

    <div class="pricing-card featured">
      <div class="featured-badge">Most Popular</div>
      <h3 class="plan-name">Growth</h3>
      <div class="plan-scope">3 interfaces • 3 months</div>
      <div class="plan-price">from <span class="price-amount">$24k</span></div>
      <ul class="plan-features">
        <li>Multiple EHR/system integrations</li>
        <li>Advanced AI pipeline setup</li>
        <li>Custom agent development</li>
        <li>90-day support included</li>
        <li>Training for your team</li>
      </ul>
      <Button href="/book" variant="primary">Book discovery call</Button>
    </div>

    <div class="pricing-card">
      <h3 class="plan-name">Embedded</h3>
      <div class="plan-scope">Unlimited • Retainer</div>
      <div class="plan-price"><span class="price-amount">Custom</span></div>
      <ul class="plan-features">
        <li>Dedicated engineering resources</li>
        <li>Unlimited integrations</li>
        <li>Priority feature development</li>
        <li>24/7 support & monitoring</li>
        <li>Quarterly business reviews</li>
      </ul>
      <Button href="/book" variant="secondary">Contact us</Button>
    </div>
  </div>

  <div class="additional-info">
    <h3>All plans include:</h3>
    <ul class="included-features">
      <li>HIPAA-compliant infrastructure</li>
      <li>Source code ownership</li>
      <li>No vendor lock-in</li>
      <li>1-year post-deployment support</li>
    </ul>
  </div>
</section>

<style>
  .announcement-banner {
    background-color: var(--accent);
    color: var(--bg-primary);
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 2rem;
    font-weight: 500;
  }

  .announcement-icon {
    font-size: 1.25rem;
  }

  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin: 3rem 0;
  }

  .pricing-card {
    background-color: var(--bg-secondary);
    border-radius: 0.75rem;
    padding: 2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    transition: transform 0.2s ease;
  }

  .pricing-card:hover {
    transform: translateY(-4px);
  }

  .pricing-card.featured {
    border: 2px solid var(--accent);
  }

  .featured-badge {
    position: absolute;
    top: -0.75rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--accent);
    color: var(--bg-primary);
    padding: 0.25rem 1rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  .plan-name {
    font-size: 1.5rem;
    margin: 0 0 0.5rem;
    color: var(--text-primary);
  }

  .plan-scope {
    color: var(--text-secondary);
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }

  .plan-price {
    font-size: 0.875rem;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
  }

  .price-amount {
    font-size: 2rem;
    font-weight: 600;
    color: var(--text-primary);
  }

  .plan-features {
    list-style: none;
    padding: 0;
    margin: 0 0 2rem;
    flex-grow: 1;
  }

  .plan-features li {
    padding-left: 1.5rem;
    position: relative;
    margin-bottom: 0.75rem;
    font-size: 0.875rem;
    color: var(--text-secondary);
  }

  .plan-features li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: var(--accent);
    font-weight: bold;
  }

  .additional-info {
    margin-top: 4rem;
    padding: 2rem;
    background-color: var(--bg-secondary);
    border-radius: 0.75rem;
  }

  .additional-info h3 {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .included-features {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 0.75rem;
  }

  .included-features li {
    padding-left: 1.5rem;
    position: relative;
  }

  .included-features li::before {
    content: "→";
    position: absolute;
    left: 0;
    color: var(--accent);
  }

  @media (max-width: 768px) {
    .pricing-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
