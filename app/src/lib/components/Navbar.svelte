<script>
    import Lightbulb from "$lib/icons/Lightbulb.svelte";
    import { onMount } from 'svelte';

    let isDark = false;

    onMount(() => {
        update_theme();
    });

    const update_theme = () => {
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        isDark = newTheme === 'dark';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }
</script>

<div class="navbar serif-font">
    <a href="/">
        <img class="rounded-md" src={isDark ? "/Logomark-light.svg" : "/Logomark.svg"} alt={"Stoa Medical's logomark: the sigma (summation) integrated with a snake"} width="32rem" height="32rem"/>
    </a>
    <nav>
        <ul class="flex items-center gap-6">
            <li><a href="/products" class="theme-toggle">Products</a></li>
            <li><a href="/services" class="theme-toggle">Services</a></li>
            <li><a href="/about" class="theme-toggle">About us</a></li>
            <li>
                <a href="https://calendly.com/eric-pan-stoamedical/30min" class="theme-toggle" target="_blank">Book a call</a>
            </li>
            <li>
                <button 
                    class="theme-toggle"
                    on:click={update_theme}
                >
                <Lightbulb dark={isDark}/>
                </button>
            </li>
        </ul>
    </nav>
</div>

<style>
    .navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 1rem;
    }
    
    /*    TODO: find way to toggle entire background with papyrus-light (not just navbar)
    :global([data-theme="light"]) .navbar {
        background-color: var(--papyrus-light);
        color: var(--ink);
    }
     */
    .theme-toggle {
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 0.375rem;
    }
    
    :global([data-theme="dark"]) .theme-toggle:hover {
        background-color: var(--sea-mid);
    }
    
    :global([data-theme="light"]) .theme-toggle:hover {
        background-color: var(--papyrus-mid);
    }
</style>