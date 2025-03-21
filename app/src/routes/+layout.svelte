<!-- src/routes/+layout.svelte -->
<script>
    import '$lib/styles/app.css';
    import Navbar from '$lib/components/Navbar.svelte';
    import { Button } from 'flowbite-svelte';
</script>

<div class="flex flex-col w-full">
    <header class="bg-zinc-900 text-white p-4">
        <Navbar />
    </header>
    <main>
        <div class="h-8"></div>
        <slot />
    </main>
</div>