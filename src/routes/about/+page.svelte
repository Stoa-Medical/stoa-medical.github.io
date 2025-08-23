<script>
  const title = "About Stoa Medical";
  const description =
    "Learn about our mission to fix how healthcare works through technology that empowers patients and providers.";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>

<div class="page-content">
  <div class="page-header">
    <p class="page-label">About</p>
    <h1 class="page-title">A Stoa For Healthcare</h1>
  </div>

  <div class="intro-section">
    <p class="intro-text">
      In ancient Athens, the Stoa was a covered walkway where philosophers gathered to teach, debate, and explore how to live better lives. It was a place of learning, public discourse, and practical wisdom - where complex ideas became accessible to all.
    </p>
    <p class="intro-text">
      I'm building Stoa Medical to carry forward this tradition in healthcare - a modern place where patients, providers, and healthcare organizations can come together to learn, make better decisions, and improve outcomes.
    </p>
  </div>

  <div class="content-section">
    <h2 class="section-title">My Mission</h2>
    <div class="section-content">
      <p class="body-text">
        Healthcare's biggest problems aren't technical - they're human. I've watched patients lose control of their own health data, brilliant clinicians waste time fighting clunky systems instead of caring for people, and families manage "mom binders" that doctors never have time to read.
      </p>
      <p class="body-text">
        I'm building technology that fixes the invisible barriers preventing healthcare from feeling good. By treating data integration as collaborative art rather than technical plumbing, I'm creating tools where patients truly own their health story and clinicians love their computers again.
      </p>
    </div>
  </div>

  <div class="content-section">
    <h2 class="section-title">My Story</h2>
    <div class="section-content">
      <p class="body-text">
        Like many healthcare innovations, Stoa Medical started with frustration. After working inside major EHR companies (Epic, Canvas Medical, 1upHealth) and watching brilliant clinicians struggle with systems that fight against them, I realized something: the problem isn't just technical - it's cultural.
      </p>
      <p class="body-text">Healthcare has accepted that technology should be painful. I disagree.</p>
      <p class="body-text">
        Through years of building integration systems, teaching health informatics at Stanford and Georgia Tech, and conducting research on everything from cryptographic protocols to clinical AI, I've learned that the best healthcare technology disappears into the background, letting human connection and healing take center stage.
      </p>
      <p class="body-text">
        Right now, I'm solo and bootstrapping - which means you'll work directly with me to shape solutions that actually solve your problems. No layers of management, no corporate bureaucracy, just someone who genuinely cares about fixing healthcare's technology mess.
      </p>
    </div>
  </div>

  <hr class="section-divider" />

  <div class="content-section">
    <h2 class="section-title">Stoa Medical's Philosophy</h2>
    
    <div class="philosophy-item">
      <h3 class="philosophy-label">User-Centred Design</h3>
      <p class="philosophy-text">
        Healthcare technology should serve the people who use it, not the other way around. Every interface, every workflow, and every decision I make starts with understanding real human needs - not what some committee thinks users should want.
      </p>
    </div>

    <div class="philosophy-item">
      <h3 class="philosophy-label">Evidence-Based Approach</h3>
      <p class="philosophy-text">
        Like the ancient Stoics who grounded their philosophy in reason and observation, I build solutions on solid data and proven methodologies. Every feature is designed to improve measurable outcomes, not just look impressive in demos.
      </p>
    </div>

    <div class="philosophy-item">
      <h3 class="philosophy-label">Continuous Innovation</h3>
      <p class="philosophy-text">
        Healthcare is constantly evolving, and so am I. I'm embracing new technologies (like AI coding tools that've 4x'd my development speed) while maintaining the reliability and trust that healthcare demands.
      </p>
    </div>
  </div>

  <hr class="section-divider" />

  <div class="content-section">
    <h2 class="section-title">Stoa Medical's Technology</h2>
    <div class="section-content">
      <p class="body-text">I build with tools that prioritize elegance and reliability:</p>
      <ul class="tech-list">
        <li>Python and Rust for systems that scale without breaking</li>
        <li>Modern web frameworks for interfaces that feel effortless</li>
        <li>AI tools that augment human intelligence rather than replace it</li>
        <li>Open standards (FHIR, OMOP) that break down data silos</li>
      </ul>
      <p class="body-text">
        My technical choices reflect my philosophy: powerful systems should feel simple, and complex problems deserve thoughtful solutions. Plus, working solo means I can move fast and actually ship things that work.
      </p>
    </div>
  </div>

  <hr class="section-divider" />

  <div class="content-section">
    <h2 class="section-title">Let's Build Together</h2>
    <div class="section-content">
      <p class="body-text">
        I'm looking for healthcare organizations ready to move beyond "that's just how things work" and toward "this is how things should work." Whether you're a health system tired of integration headaches, a startup needing bulletproof FHIR APIs, or a patient advocate dreaming of true data ownership - let's build the future together.
      </p>
      <p class="body-text">
        The best part about working with a solo founder? You get my full attention, direct communication, and solutions built specifically for your needs. No sales teams, no account managers, just me and my laptop solving your problems.
      </p>
      <p class="body-text">
        Ready to join this modern Stoa? Let's prove that healthcare technology can feel as good as it works.
      </p>
    </div>
  </div>

  <div class="cta-section">
    <a href="/contact" class="contact-link">Get in touch</a>
  </div>
</div>

<style>
  .page-content {
    max-width: 64rem;
    margin: 0 auto;
    padding: 4.5rem 1.5rem 6rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  .page-header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .page-label {
    font-family: var(--font-primary);
    font-style: italic;
    font-size: 1rem;
    color: var(--text-primary);
    margin: 0;
    letter-spacing: -0.02em;
  }

  .page-title {
    font-family: var(--font-primary);
    font-size: 5rem;
    line-height: 1.2;
    letter-spacing: -0.03em;
    color: var(--text-primary);
    margin: 0;
  }

  .intro-section {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
  }

  .intro-text {
    font-family: var(--font-primary);
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: var(--text-primary);
    margin: 0;
    letter-spacing: -0.02em;
  }

  .content-section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .section-title {
    font-family: var(--font-primary);
    font-size: 2.5rem;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    margin: 0;
  }

  .section-content {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
  }

  .body-text {
    font-family: var(--font-primary);
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: var(--text-primary);
    margin: 0;
    letter-spacing: -0.02em;
  }

  .philosophy-item {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .philosophy-label {
    font-family: var(--font-primary);
    font-style: italic;
    font-size: 1rem;
    color: var(--text-primary);
    margin: 0;
    letter-spacing: -0.02em;
  }

  .philosophy-text {
    font-family: var(--font-primary);
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: var(--text-primary);
    margin: 0;
    letter-spacing: -0.02em;
  }

  .tech-list {
    font-family: var(--font-primary);
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: var(--text-primary);
    letter-spacing: -0.02em;
    margin: 1.75rem 0;
    padding-left: 1.75rem;
  }

  .tech-list li {
    margin-bottom: 0;
  }

  .section-divider {
    border: none;
    border-top: 1px solid var(--text-primary);
    opacity: 0.2;
    width: 100%;
    margin: 2rem 0;
  }

  .cta-section {
    display: flex;
    justify-content: flex-start;
  }

  .contact-link {
    font-family: var(--font-primary);
    font-style: italic;
    font-size: 1rem;
    color: var(--text-primary);
    text-decoration: underline;
    text-underline-offset: 2px;
    letter-spacing: -0.02em;
  }

  .contact-link:hover {
    opacity: 0.7;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .page-title {
      font-size: 3.5rem;
    }
    
    .section-title {
      font-size: 2rem;
    }
    
    .page-content {
      padding: 3rem 1rem 4rem;
      gap: 3rem;
    }
  }
</style>