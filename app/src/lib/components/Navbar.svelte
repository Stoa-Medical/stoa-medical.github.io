<script>
    import Lightbulb from "$lib/icons/Lightbulb.svelte";
    export let imgText = "Stoa Medical's logo — the greek letter sigma (Σ) and the Rod of Asclepius.";

    let isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    const update_theme = () => {
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        isDark = newTheme === 'dark';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }
</script>

<div class="flex items-center justify-between w-full">
    <a href="/">
        <img class="bg-zinc-50 rounded-md fill-transparent" src="/Logomark.svg" alt={imgText} width="32rem" height="32rem"/>
    </a>
    <nav>
        <ul class="flex items-center gap-6">
            <li><a href="/products">Products</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About us</a></li>
            <li>
                <a href="https://calendly.com/eric-pan-stoamedical/30min" class="bg-teal-400 text-white px-4 py-2 rounded-md" target="_blank">Book a call</a>
            </li>
            <li>
                <button 
                    class="bg-transparent border-none cursor-pointer p-2 rounded-md hover:bg-zinc-800"
                    on:click={update_theme}
                >
                <Lightbulb dark={isDark}/>
                </button>
            </li>
        </ul>
    </nav>
</div>