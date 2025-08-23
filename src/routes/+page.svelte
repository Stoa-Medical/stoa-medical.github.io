<script>
</script>

<svelte:head>
  <title>Stoa Medical</title>
  <meta
    name="description"
    content="We're building the future of EHR integrations with AI and human-centric software."
  />
</svelte:head>

<div class="page-content">
  <h1 class="main-title">
    We're building the future of EHRs with AI integrations and user-centric
    design for patients.
  </h1>

  <h2 class="section-title">What we believe to be true</h2>

  <div class="beliefs-container">
    <div class="belief-section">
      <h3 class="belief-category">Patients</h3>
      <hr class="section-divider" />
      <div class="belief-list">
        <p class="belief-item">
          <span class="roman">I.</span> Healthcare should serve your wellness, not
          the other way around.
        </p>
        <p class="belief-item">
          <span class="roman">II.</span> Health is personal, and you should have
          a voice in what that means to you and your loved ones.
        </p>
        <p class="belief-item">
          <span class="roman">III.</span> Your data belongs to you.
        </p>
        <p class="belief-item">
          <span class="roman">IV.</span> Technology should enable community: a reminder
          that you're not alone in your health journey.
        </p>
      </div>
    </div>

    <div class="belief-section">
      <h3 class="belief-category">Providers</h3>
      <hr class="section-divider" />
      <div class="belief-list">
        <p class="belief-item">
          <span class="roman">V.</span> You should love your computers, and it should be your choice on whether that's true or not.
        </p>
        <p class="belief-item">
          <span class="roman">VI.</span> It should be simple to get the latest, most accurate data you need for your patients.
        </p>
        <p class="belief-item">
          <span class="roman">VII.</span> You should be able to focus on your expression and practice of medicine.
        </p>
        <p class="belief-item">
          <span class="roman">VIII.</span> Technology should augment the healing spirit of the medical community.
        </p>
      </div>
    </div>

    <div class="belief-section">
      <h3 class="belief-category">Community Health Systems</h3>
      <hr class="section-divider" />
      <div class="belief-list">
        <p class="belief-item">
          <span class="roman">IX.</span> Your IT systems should be best-in-class like in "regular tech": secure, robust, and competitive.
        </p>
        <p class="belief-item">
          <span class="roman">X.</span> Learnings should be shared for the benefit of all: "infinite game" mindsets will win.
        </p>
        <p class="belief-item">
          <span class="roman">XI.</span> Technology is a tool, and the focus should be on simplicity and effectiveness over novelty.
        </p>
        <p class="belief-item">
          <span class="roman">XII.</span> Solutions should be elegant and personalizable without the need for unreasonable compromise.
        </p>
      </div>
    </div>

    <div class="belief-section">
      <h3 class="belief-category">Society</h3>
      <hr class="section-divider" />
      <div class="belief-list">
        <p class="belief-item">
          <span class="roman">XIII.</span> Leveraging AI in safe, private, and user-centric ways will be essential for fostering wellness and human flourishing.
        </p>
      </div>
    </div>
  </div>

  <div class="about-section">
    <h3 class="belief-category">About</h3>
    <hr class="section-divider" />

    <div class="about-container">
      <div class="about-content">
        <p class="about-text">
          Stoa Medical is an early healthtech startup with the mission to fix
          how healthcare works by integrating biomedicine and wellness.
        </p>
        <p class="about-text">
          In the short-term, this means building AI-native integration tools and
          applications for healthcare consumers (patients, providers, and health
          systems).
        </p>
        <p class="about-text">
          Based on experiences working as an engineer across enterprises (Epic),
          academia (UCLA, Georgia Tech, Stanford), and startups (1upHealth,
          Canvas Medical): I'm building Stoa to serve patients, providers, and
          health systems with first-principles, AI-native software that I wish
          existed.
        </p>
        <p class="about-text">
          Right now, it's just me bootstrapping (solo founder + some help from
          friends & freelancers).
        </p>
        <p class="about-text">
          If you're working in healthcare I'd love for you to try what I'm
          building. <a href="/contact" class="waitlist-link"
            >Join the waitlist</a
          >
        </p>
      </div>
      <div class="founder-info">
        <img src="/DBDS-ericpan1.jpg" alt="Eric Pan" class="founder-photo" />
        <div class="founder-caption">
          <p>Eric Pan</p>
          <p>Engineer & Founder</p>
          <p>Stoa Medical</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .page-content {
    max-width: 64rem;
    margin: 0 auto;
    padding: 3rem 1.5rem;
  }

  .main-title {
    font-family: var(--font-primary);
    font-size: 5rem;
    line-height: 1.2;
    letter-spacing: -0.03em;
    color: var(--text-primary);
    margin-bottom: 6rem;
    max-width: 56rem;
  }

  .section-title {
    font-family: var(--font-primary);
    font-size: 2.5rem;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    margin-bottom: 3rem;
  }

  .beliefs-container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .belief-section {
    margin-bottom: 1rem;
  }

  .belief-category {
    font-family: var(--font-primary);
    font-style: italic;
    font-size: 1rem;
    font-weight: normal;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    margin-bottom: 0.75rem;
  }

  .section-divider {
    border: none;
    border-top: 1px solid var(--text-primary);
    opacity: 0.2;
    margin: 0.75rem 4rem 1.5rem 0;
  }

  .belief-list {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.5rem 1rem;
    max-width: 52rem;
  }

  .belief-item {
    display: contents;
  }

  .roman {
    font-family: var(--font-primary);
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: var(--text-primary);
    text-align: left;
  }

  .belief-item::after {
    content: attr(data-text);
    font-family: var(--font-primary);
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: var(--text-primary);
  }

  .belief-list p {
    font-family: var(--font-primary);
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: var(--text-primary);
    margin: 0;
    grid-column: 1 / -1;
    display: flex;
    gap: 1rem;
  }

  .about-section {
    margin-top: 4rem;
  }

  .about-container {
    display: flex;
    gap: 3rem;
    align-items: flex-start;
  }

  .about-content {
    flex: 1;
    max-width: 40rem;
  }

  .about-text {
    font-family: var(--font-primary);
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
  }

  .waitlist-link {
    font-style: italic;
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .founder-info {
    flex-shrink: 0;
    text-align: right;
  }

  .founder-photo {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  .founder-caption {
    font-family: var(--font-primary);
    font-style: italic;
    font-size: 1rem;
    line-height: 1.5;
    color: var(--text-primary);
    letter-spacing: -0.02em;
  }

  .founder-caption p {
    margin: 0;
  }
</style>
