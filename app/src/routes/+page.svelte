<script lang="ts">
  import LandingLayout from "$lib/components/structures/LandingLayout.svelte";
  import HeroSection from "$lib/components/organisms/HeroSection.svelte";
  import HeroCopy from "$lib/components/molecules/HeroCopy.svelte";
  import LinkButton from "$lib/components/atoms/LinkButton.svelte";
  import StepList from "$lib/components/organisms/StepList.svelte";
  import SocialProof from "$lib/components/organisms/SocialProof.svelte";
  import CaseCarousel from "$lib/components/organisms/CaseCarousel.svelte";
  import ProfileCard from "$lib/components/molecules/ProfileCard.svelte";

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

<LandingLayout>
  <svelte:fragment slot="hero">
    <HeroSection>
      <svelte:fragment slot="left">
        <HeroCopy
          headline="We're building the future of EHR integrations with AI agents, workflows and software."
          sub="An AI Healthcare Integrations Company"
        >
          <LinkButton href="https://cal.com/eric-pan/intro" external={true}>
            Book a call ↗
          </LinkButton>
        </HeroCopy>
      </svelte:fragment>
      <svelte:fragment slot="below">
        <p
          style="color: var(--text-secondary-dark); font-size: 1.125rem; max-width: 600px; margin: 0 auto;"
        >
          You've been there. Waiting months for simple EHR feeds and every
          integration feels slow.
        </p>
      </svelte:fragment>
    </HeroSection>
  </svelte:fragment>

  <section style="padding: 4rem 2rem; text-align: center;">
    <h2
      style="font-family: var(--font-secondary); font-size: 2.5rem; font-weight: 300; margin: 0 0 1rem 0; color: var(--text-primary-dark);"
    >
      The Modern Alternative to Legacy Healthcare Integrations.
    </h2>
    <LinkButton href="https://cal.com/eric-pan/intro" external={true}>
      Book a call ↗
    </LinkButton>
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
</LandingLayout>
