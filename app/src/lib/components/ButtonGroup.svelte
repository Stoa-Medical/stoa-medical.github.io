<script>
  import Button from "./Button.svelte";

  let {
    primary = "",
    secondary = "",
    primaryText = "Book a discovery call",
    secondaryText = "Join the wait-list",
  } = $props();
</script>

<div class="button-group">
  {#if primary}
    <Button href={primary} variant="primary">{primaryText}</Button>
  {/if}
  {#if secondary}
    <Button href={secondary} variant="secondary">{secondaryText}</Button>
  {/if}
</div>

<style>
  .button-group {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
    flex-wrap: wrap;
  }

  @media (max-width: 640px) {
    .button-group {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
