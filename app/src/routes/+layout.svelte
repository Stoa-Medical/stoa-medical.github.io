<!-- src/routes/+layout.svelte -->
<script>
    import '../app.css';
    let img_text = "Stoa Medical's logo — the greek letter sigma (Σ) and the Rod of Asclepius.";
</script>

<div class="container">
    <aside class="sidebar m-4">
        <a href="/">
            <img class="bg-zinc-50 rounded-md" src="/logo.png" alt={img_text} width="64rem" height="64rem"/>
        </a>
        <nav>
            <ul>
                <li><a class="border-b-2" href="/about">about</a></li>
                <li><a class="border-b-2" href="/projects">projects</a></li>
            </ul>
        </nav>
    </aside>
    <main>
        <div class="h-8"></div>
        <slot />
    </main>
</div>