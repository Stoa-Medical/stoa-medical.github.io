<script lang="ts">
  import HeroSection from "$lib/components/blocks/HeroSection.svelte";
  import HeroCopy from "$lib/components/chunks/HeroCopy.svelte";
  import StepList from "$lib/components/blocks/StepList.svelte";
  import SocialProof from "$lib/components/blocks/SocialProof.svelte";
  import CaseCarousel from "$lib/components/blocks/CaseCarousel.svelte";
  import ProfileCard from "$lib/components/chunks/ProfileCard.svelte";

  // Step items data
  const steps = [
    {
      title:
        "We'll build your planned EHR integrations 5x faster for 50% of the cost.",
      copy: "We're writing the playbook for AI-powered EHR integrations. To cut implementation time and provider pain by 10x. We're writing the playbook for AI-powered EHR integrations. To cut implementation time and provider pain by 10x.",
    },
    {
      title:
        "We'll hand over our process and software to your IT team to use forever.",
      copy: "We're writing the playbook for AI-powered EHR integrations. To cut implementation time and provider pain by 10x.",
    },
    {
      title:
        "Watch your EHR integrations unlock revenue and growth for your healthcare service.",
      copy: "We're writing the playbook for AI-powered EHR integrations. To cut implementation time and provider pain by 10x.",
    },
  ];

  // Case studies data (placeholder)
  const caseStudies = [
    {
      title: "A dashboard for post-appointment patient care follow-ups",
      metric: "+67%",
      metricLabel: "Patient retention",
    },
    {
      title: "A dashboard for post-appointment patient care follow-ups",
      metric: "+67%",
      metricLabel: "Patient retention",
    },
    {
      title: "A dashboard for post-appointment patient care follow-ups",
      metric: "+67%",
      metricLabel: "Patient retention",
    },
    {
      title: "A dashboard for post-appointment patient care follow-ups",
      metric: "+67%",
      metricLabel: "Patient retention",
    },
  ];

  // Social proof logos (placeholder)
  const logos: Array<{ src: string; alt: string; url?: string }> = [];
</script>

<svelte:head>
  <title>Stoa Medical - AI Healthcare Integrations Company</title>
  <meta
    name="description"
    content="We're building the future of EHR integrations with AI agents, workflows and software."
  />
</svelte:head>


<HeroSection>
  <svelte:fragment slot="content">
    <HeroCopy
      headline="We're building the future of EHR integrations with AI agents, workflows and software."
    >
      <button>Book a call ↗</button>
    </HeroCopy>
  </svelte:fragment>
  <svelte:fragment slot="subtitle">
    <p
      style="color: var(--text-secondary-dark); font-size: 0.875rem; margin: 0;"
    >
      An AI Healthcare Integrations Company
    </p>
  </svelte:fragment>
  <svelte:fragment slot="nav">
    <nav style="display: flex; gap: 2rem; font-size: 0.875rem;">
      <a
        href="/about"
        style="color: var(--text-secondary-dark); text-decoration: none;"
        >About</a
      >
      <a
        href="/products"
        style="color: var(--text-secondary-dark); text-decoration: none;"
        >Products</a
      >
      <a
        href="/services"
        style="color: var(--text-secondary-dark); text-decoration: none;"
        >Services</a
      >
    </nav>
  </svelte:fragment>
</HeroSection>

<section style="padding: 4rem 2rem; text-align: center;">
  <h2
    style="font-family: var(--font-secondary); font-size: 2.5rem; font-weight: 300; margin: 0 0 1rem 0; color: var(--text-primary-dark);"
  >
    The Modern Alternative to Legacy Healthcare Integrations.
  </h2>
  <button>Book a call ↗</button>
</section>

<StepList items={steps} />

{#if logos.length > 0}
  <SocialProof {logos} />
{/if}

<CaseCarousel cases={caseStudies} />

<section style="padding: 4rem 2rem;">
  <div style="max-width: 800px; margin: 0 auto;">
    <h2
      style="font-family: var(--font-secondary); font-size: 2rem; font-weight: 300; margin: 0 0 3rem 0; color: var(--text-primary-dark); text-align: center;"
    >
      About Stoa Medical
    </h2>
    <ProfileCard
      name="Stoa Medical Founder, Eric Pan"
      copy="We're writing the playbook for AI-powered EHR integrations. To cut implementation time and provider pain by 10x. We're writing the playbook for AI-powered EHR integrations. To cut implementation time and provider pain by 10x. We're writing the playbook for AI-powered EHR integrations. To cut implementation time and provider pain by 10x."
      linkedin="https://linkedin.com"
    />
  </div>
</section>

