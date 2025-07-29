<script>
  let {
    title = "Trusted by leading healthcare organizations",
    logos = [],
    class: className = "",
  } = $props();
</script>

<section class="social-proof {className}">
  <h3 class="social-proof__title">{title}</h3>
  <div class="social-proof__logos">
    <div class="social-proof__track">
      {#each logos as logo}
        <div class="social-proof__logo">
          {#if logo.url}
            <a href={logo.url} target="_blank" rel="noopener noreferrer">
              <img src={logo.src} alt={logo.alt} />
            </a>
          {:else}
            <img src={logo.src} alt={logo.alt} />
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .social-proof {
    padding: 4rem 2rem;
    text-align: center;
    overflow: hidden;
  }

  .social-proof__title {
    font-family: var(--font-primary);
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--text-secondary);
    margin: 0 0 3rem 0;
  }

  .social-proof__logos {
    position: relative;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .social-proof__logos::-webkit-scrollbar {
    display: none;
  }

  .social-proof__track {
    display: flex;
    gap: 3rem;
    align-items: center;
    justify-content: center;
    min-width: max-content;
    padding: 0 2rem;
  }

  .social-proof__logo {
    flex-shrink: 0;
    height: 60px;
    opacity: 0.6;
    transition: opacity 0.2s ease;
  }

  .social-proof__logo:hover {
    opacity: 1;
  }

  .social-proof__logo img {
    height: 100%;
    width: auto;
    filter: grayscale(100%);
    transition: filter 0.2s ease;
  }

  .social-proof__logo:hover img {
    filter: grayscale(0%);
  }

  @media (max-width: 768px) {
    .social-proof {
      padding: 3rem 0;
    }

    .social-proof__title {
      font-size: 1.125rem;
      padding: 0 1rem;
    }

    .social-proof__track {
      gap: 2rem;
      justify-content: flex-start;
    }

    .social-proof__logo {
      height: 40px;
    }
  }
</style>
