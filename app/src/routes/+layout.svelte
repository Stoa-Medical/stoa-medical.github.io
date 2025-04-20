<!-- src/routes/+layout.svelte -->
<script>
    import Navbar from '$lib/components/Navbar.svelte';
</script>

<div class="flex flex-col w-full">
    <header class="p-4">
        <Navbar />
    </header>
    <!-- TODO: Replace the slot with a snippet (Svelte 5) -->
    <div class="p-4">
        <slot />
    </div>
</div>