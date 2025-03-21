<!-- src/routes/+layout.svelte -->
<script>
    import '$lib/styles/app.css';
    import Navbar from '$lib/components/Navbar.svelte';

    export const prerender = true;
</script>

<div class="flex flex-col w-full">
    <header class="p-4">
        <Navbar />
    </header>
    <main class="p-4">
        <slot />
    </main>
</div>
