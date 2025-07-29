<script>
  let {
    title = "",
    metric = "",
    metricLabel = "",
    class: className = "",
  } = $props();
</script>

<div class="case-study-card {className}">
  <h4 class="case-study-card__title">{title}</h4>
  <div class="case-study-card__metric">
    <span class="case-study-card__metric-value">{metric}</span>
    <span class="case-study-card__metric-label">{metricLabel}</span>
  </div>
</div>

<style>
  .case-study-card {
    padding: 1.5rem;
    background-color: var(--bg-secondary);
    border-radius: 0.5rem;
    min-width: 280px;
    transition: transform 0.2s ease;
  }

  .case-study-card:hover {
    transform: translateY(-4px);
  }

  .case-study-card__title {
    font-family: var(--font-primary);
    font-size: 1rem;
    font-weight: 500;
    color: var(--text-primary);
    margin: 0 0 1rem 0;
    line-height: 1.4;
  }

  .case-study-card__metric {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .case-study-card__metric-value {
    font-family: var(--font-secondary);
    font-size: 2rem;
    font-weight: 300;
    color: var(--accent);
  }

  .case-study-card__metric-label {
    font-family: var(--font-primary);
    font-size: 0.875rem;
    color: var(--text-secondary);
  }

  @media (max-width: 768px) {
    .case-study-card {
      min-width: 240px;
    }
  }
</style>
