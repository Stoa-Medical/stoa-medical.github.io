<!-- src/routes/+layout.svelte -->
<script>
    import '$lib/styles/app.css';
    import Navbar from '$lib/components/Navbar.svelte';
</script>

<div class="flex flex-col w-full">
    <header class="p-4">
        <Navbar />
    </header>
    <div class="p-4">
        <slot />
    </div>
</div>
