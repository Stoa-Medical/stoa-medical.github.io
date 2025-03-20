<!-- src/routes/+layout.svelte -->
<script>
    import '$lib/styles/app.css';
    import Navbar  from '$lib/components/Navbar.svelte'
</script>

<div class="container">
    <aside class="sidebar m-4">
        <Navbar />
    </aside>
    <main>
        <div class="h-8"></div>
        <slot />
    </main>
</div>