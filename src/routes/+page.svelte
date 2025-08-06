<script>
  import Typewriter from "$lib/components/Typewriter.svelte";
  import ActionButtons from "$lib/components/ActionButtons.svelte";
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
    design <br/> for <Typewriter
    texts={["patients", "providers", "health systems", "you"]}
    typeSpeed={80}
    deleteSpeed={80}
    repeat={0}
    blinkingCursor={true}
  />.
  </h1>

  <h2 class="section-title">What we believe to be true:</h2>

  <div class="beliefs-container">
    <div class="belief-section">
      <h3 class="belief-title">PATIENTS</h3>
      <div class="belief-list">
        <p class="belief-item"><span class="belief-number">I.</span> Healthcare should serve your wellness, not the other way around.</p>
        <p class="belief-item"><span class="belief-number">II.</span> Health is personal, and you should have a voice in what that means to you and your loved ones.</p>
        <p class="belief-item"><span class="belief-number">III.</span> Your data belongs to you.</p>
        <p class="belief-item"><span class="belief-number">IV.</span> Technology should enable community: a reminder that you're not alone in your health journey.</p>
      </div>
    </div>

    <div class="belief-section">
      <h3 class="belief-title">PROVIDERS</h3>
      <div class="belief-list">
        <p class="belief-item"><span class="belief-number">V.</span> You should love your computers, and it should be your choice on whether that's true or not.</p>
        <p class="belief-item"><span class="belief-number">VI.</span> It should be simple to get the latest, most accurate data you need for your patients.</p>
        <p class="belief-item"><span class="belief-number">VII.</span> You should be able to focus on your expression and practice of medicine.</p>
        <p class="belief-item"><span class="belief-number">VIII.</span> Technology should augment the healing spirit of the medical community.</p>
      </div>
    </div>

    <div class="belief-section">
      <h3 class="belief-title">HEALTH SYSTEMS</h3>
      <div class="belief-list">
        <p class="belief-item"><span class="belief-number">IX.</span> Your IT systems should be best-in-class like in "regular tech": secure, robust, and competitive.</p>
        <p class="belief-item"><span class="belief-number">X.</span> Learnings should be shared for the benefit of all: "infinite game" mindsets will win.</p>
        <p class="belief-item"><span class="belief-number">XI.</span> Technology is a tool, and the focus should be on simplicity and effectiveness over novelty.</p>
        <p class="belief-item"><span class="belief-number">XII.</span> Solutions should be elegant and personalizable without the need for unreasonable compromise.</p>
      </div>
    </div>

    <div class="belief-section">
      <h3 class="belief-title">SOCIETY</h3>
      <div class="belief-list">
        <p class="belief-item"><span class="belief-number">XIII.</span> Leveraging AI in safe, private, and user-centric ways will be essential for fostering wellness and human flourishing.</p>
      </div>
    </div>
  </div>

  <h2 class="section-title">About Stoa Medical</h2>

  <div class="about-container">
    <div class="about-text">
      <p class="about-paragraph">
        Stoa Medical is an early healthtech startup with the mission to fix how healthcare works by integrating biomedicine and wellness.
      </p>
      <p class="about-paragraph">
        In the short-term, this means building AI-native integration tools and applications for healthcare consumers (patients, providers, and health systems).
      </p>
      <p class="about-paragraph">
        Based on experiences working as an engineer across enterprises (Epic), academia (UCLA, Georgia Tech, Stanford), and startups (1upHealth, Canvas Medical): I'm building Stoa to serve patients, providers, and health systems with first-principles, AI-native software that I wish existed.
      </p>
      <p class="about-paragraph">
        Right now, it's just me bootstrapping (solo founder + some help from friends & freelancers). Please reach out if you'd like to connect and be an early adopter!
      </p>
    </div>
    <div class="about-image">
      <img src="/DBDS-ericpan1.jpg" alt="Eric S Pan from Stoa Medical" class="founder-photo" />
      <p class="founder-caption"><em><a href="https://www.linkedin.com/in/ericpan64/">Eric S Pan</a>, Engineer + Founder @ Stoa Medical</em></p>
    </div>
  </div>

  <p class="quote"><em>"If your choices are beautiful, so too will you be." - Epictetus</em></p>
  <ActionButtons />
</div>

<style>
  .page-content {
    max-width: 64rem;
    margin: 0 auto;
    padding: 3rem 1.5rem;
  }

  .main-title {
    text-align: center;
    margin-bottom: 4rem;
  }

  .section-title {
    text-align: left;
    margin-top: 5rem;
    margin-bottom: 2.5rem;
  }

  .beliefs-container > .belief-section + .belief-section {
    margin-top: 2.5rem;
  }

  .belief-title {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin-bottom: 1rem;
  }

  .belief-list > .belief-item + .belief-item {
    margin-top: 0.5rem;
  }

  .belief-item {
    line-height: 1.625;
  }

  .belief-number {
    font-weight: 500;
  }

  .about-container {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
  }

  .about-text {
    flex: 1;
  }

  .about-text > .about-paragraph + .about-paragraph {
    margin-top: 1rem;
  }

  .about-paragraph {
    line-height: 1.625;
  }

  .about-image {
    width: 33.333333%;
    flex-shrink: 0;
  }

  .founder-photo {
    width: 100%;
    border-radius: 0.75rem;
  }

  .founder-caption {
    text-align: center;
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin-top: 0.5rem;
  }

  .quote {
    text-align: center;
    margin-top: 4rem;
    margin-bottom: 2rem;
  }
</style>
