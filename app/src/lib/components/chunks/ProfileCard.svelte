<script>
  let {
    name = "",
    role = "",
    img = "",
    copy = "",
    linkedin = "",
    class: className = "",
  } = $props();
</script>

<div class="profile-card {className}">
  {#if img}
    <div class="profile-card__image">
      <img src={img} alt={name} />
    </div>
  {/if}
  <div class="profile-card__content">
    <h3 class="profile-card__name">
      {name}
      {#if linkedin}
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          class="profile-card__linkedin"
        >
          LinkedIn
        </a>
      {/if}
    </h3>
    {#if role}
      <p class="profile-card__role">{role}</p>
    {/if}
    <p class="profile-card__copy">{copy}</p>
  </div>
</div>

<style>
  .profile-card {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
    padding: 2rem;
    background-color: var(--bg-secondary);
    border-radius: 0.5rem;
  }

  .profile-card__image {
    flex-shrink: 0;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    background-color: var(--ink-light);
  }

  .profile-card__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .profile-card__content {
    flex: 1;
  }

  .profile-card__name {
    font-family: var(--font-secondary);
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0 0 0.25rem 0;
    color: var(--text-primary);
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .profile-card__linkedin {
    font-family: var(--font-primary);
    font-size: 0.875rem;
    color: var(--accent);
    text-decoration: none;
  }

  .profile-card__linkedin:hover {
    text-decoration: underline;
  }

  .profile-card__role {
    font-family: var(--font-primary);
    font-size: 1rem;
    color: var(--text-secondary);
    margin: 0 0 1rem 0;
  }

  .profile-card__copy {
    font-family: var(--font-primary);
    font-size: 1rem;
    line-height: 1.6;
    color: var(--text-primary);
    margin: 0;
  }

  @media (max-width: 768px) {
    .profile-card {
      flex-direction: column;
      gap: 1.5rem;
      padding: 1.5rem;
    }

    .profile-card__name {
      font-size: 1.25rem;
    }
  }
</style>
