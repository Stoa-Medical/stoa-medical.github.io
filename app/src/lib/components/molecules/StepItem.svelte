<script>
  let { num = 1, title = "", copy = "", class: className = "" } = $props();
</script>

<div class="step-item {className}">
  <div class="step-item__number">{num}</div>
  <div class="step-item__content">
    <h3 class="step-item__title">{title}</h3>
    <p class="step-item__copy">{copy}</p>
  </div>
</div>

<style>
  .step-item {
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
  }

  .step-item__number {
    flex-shrink: 0;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--accent);
    color: var(--bg-primary);
    font-size: 1.5rem;
    font-weight: 600;
    font-family: var(--font-secondary);
  }

  .step-item__content {
    flex: 1;
  }

  .step-item__title {
    font-family: var(--font-primary);
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
    color: var(--text-primary);
  }

  .step-item__copy {
    font-family: var(--font-primary);
    font-size: 1rem;
    line-height: 1.6;
    margin: 0;
    color: var(--text-secondary);
  }

  @media (max-width: 768px) {
    .step-item {
      gap: 1rem;
    }

    .step-item__number {
      width: 2.5rem;
      height: 2.5rem;
      font-size: 1.25rem;
    }

    .step-item__title {
      font-size: 1.125rem;
    }

    .step-item__copy {
      font-size: 0.875rem;
    }
  }
</style>
