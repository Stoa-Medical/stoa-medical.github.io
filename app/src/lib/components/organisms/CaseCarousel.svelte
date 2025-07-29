<script>
  import CaseStudyCard from "$lib/components/molecules/CaseStudyCard.svelte";

  let {
    title = "Some of the ways we've helped others 10x their integrations",
    cases = [],
    class: className = "",
  } = $props();
</script>

<section class="case-carousel {className}">
  <h3 class="case-carousel__title">{title}</h3>
  <div class="case-carousel__container">
    <div class="case-carousel__track">
      {#each cases as caseStudy}
        <CaseStudyCard
          title={caseStudy.title}
          metric={caseStudy.metric}
          metricLabel={caseStudy.metricLabel}
        />
      {/each}
    </div>
  </div>
</section>

<style>
  .case-carousel {
    padding: 4rem 2rem;
    overflow: hidden;
  }

  .case-carousel__title {
    font-family: var(--font-primary);
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--text-primary);
    text-align: center;
    margin: 0 0 3rem 0;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .case-carousel__container {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
    scrollbar-color: var(--text-secondary) transparent;
  }

  .case-carousel__track {
    display: flex;
    gap: 1.5rem;
    padding-bottom: 1rem;
    min-width: max-content;
  }

  @media (max-width: 768px) {
    .case-carousel {
      padding: 3rem 0 3rem 1rem;
    }

    .case-carousel__title {
      font-size: 1.25rem;
      padding: 0 1rem;
    }

    .case-carousel__track {
      gap: 1rem;
    }
  }
</style>
