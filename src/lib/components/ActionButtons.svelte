<script>
  import {
    ArrowUpRightFromSquareOutline,
    MugHotOutline,
  } from "flowbite-svelte-icons";
</script>

<div class="action-buttons">
  <a
    href="https://cal.com/eric-pan-stoamedical"
    target="_blank"
    class="action-link">Get in touch<MugHotOutline /></a
  >
  <a
    href="https://forms.gle/sDCEjktYkP8tXrUM8"
    target="_blank"
    class="action-link">Join the waitlist<ArrowUpRightFromSquareOutline /></a
  >
</div>

<style>
  .action-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    padding-bottom: 3rem;
    margin-top: 2rem;
  }

  @media (min-width: 640px) {
    .action-buttons {
      flex-direction: row;
    }
  }

  .action-link {
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    justify-content: center;
    border-radius: 0.375rem;
    padding: 0.25rem;
    text-decoration: none;
  }

  .action-link:hover {
    background-color: var(--bg-secondary);
  }
</style>
