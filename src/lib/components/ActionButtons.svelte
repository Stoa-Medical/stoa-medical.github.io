<script>
  import { ArrowUpRightFromSquareOutline, MugHotOutline } from "flowbite-svelte-icons";
</script>

<div class="flex flex-col sm:flex-row gap-4 justify-center pb-12 mt-8">
  <a href="mailto:eric.pan@stoamedical.com" target="_blank" class="flex flex-row gap-1 justify-center">Get in touch<MugHotOutline /></a>
  <a href="https://forms.gle/sDCEjktYkP8tXrUM8" target="_blank" class="flex flex-row gap-1 justify-center">Join the waitlist<ArrowUpRightFromSquareOutline /></a>
</div>

<style>
  a {
    border-radius: 0.375rem;
    padding: 0.25rem;
  }

  a:hover {
    background-color: var(--bg-secondary);
  }
</style>