<script>
    import Lightbulb from "$lib/icons/Lightbulb.svelte";
    import GitHub from "$lib/icons/GitHub.svelte";
    import { onMount, onDestroy } from 'svelte';
    import { browser } from '$app/environment';

    let isDark = false;
    let isMobile = false;
    let isMenuOpen = false;

    onMount(() => {
        if (browser) {
            updateTheme();
            checkMobile();
            window.addEventListener('resize', checkMobile);
        }
    });

    onDestroy(() => {
        if (browser) {
            window.removeEventListener('resize', checkMobile);
        }
    });

    const checkMobile = () => {
        if (browser) {
            isMobile = window.innerWidth < 768;
            if (!isMobile) isMenuOpen = false;
        }
    };

    const updateTheme = () => {
        if (browser) {
            const html = document.documentElement;
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            isDark = newTheme === 'dark';
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        }
    }

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
    }
</script>

<div class="navbar serif-font">
    <div class="flex items-center justify-between w-full">
        <a href="/">
            <img class="rounded-md" src={isDark ? "/Logomark-light.svg" : "/Logomark.svg"} alt={"Stoa Medical's logomark: the sigma (summation) integrated with a snake"} width="32rem" height="32rem"/>
        </a>

        {#if !isMobile}
            <nav>
                <ul class="flex items-center gap-6">
                    <li><a href="/products">Products</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="https://github.com/Stoa-Medical" class="theme-toggle"><GitHub dark={isDark}/></a></li>
                    <li>
                        <button 
                            class="theme-toggle"
                            on:click={updateTheme}
                        >
                        <Lightbulb dark={isDark}/>
                        </button>
                    </li>
                </ul>
            </nav>
        {:else}
            <div class="flex items-center gap-4">
                <a href="https://github.com/Stoa-Medical" class="theme-toggle"><GitHub dark={isDark}/></a>
                <button class="theme-toggle" on:click={updateTheme}>
                    <Lightbulb dark={isDark}/>
                </button>
                <button class="menu-toggle" on:click={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"/>
                        <line x1="3" y1="6" x2="21" y2="6"/>
                        <line x1="3" y1="18" x2="21" y2="18"/>
                    </svg>
                </button>
            </div>
        {/if}
    </div>

    {#if isMobile && isMenuOpen}
        <div class="mobile-menu-overlay" on:click={toggleMenu}>
            <nav class="mobile-menu" on:click|stopPropagation>
                <ul class="flex flex-col gap-4">
                    <li><a href="/products" on:click={toggleMenu}>Products</a></li>
                    <li><a href="/services" on:click={toggleMenu}>Services</a></li>
                    <li><a href="/about" on:click={toggleMenu}>About</a></li>
                </ul>
            </nav>
        </div>
    {/if}
</div>

<style>
    .navbar {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 1rem;
        position: relative;
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
    
    .menu-toggle {
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 0.375rem;
    }
    
    :global([data-theme="dark"]) .theme-toggle:hover,
    :global([data-theme="dark"]) .menu-toggle:hover {
        background-color: var(--sea-mid);
    }
    
    :global([data-theme="light"]) .theme-toggle:hover,
    :global([data-theme="light"]) .menu-toggle:hover {
        background-color: var(--papyrus-mid);
    }

    .mobile-menu-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 100;
        display: flex;
        justify-content: flex-end;
        padding: 1rem;
    }

    .mobile-menu {
        background-color: var(--papyrus-light);
        padding: 1rem;
        border-radius: 0.375rem;
        width: 100%;
        max-width: 300px;
    }

    :global([data-theme="dark"]) .mobile-menu {
        background-color: var(--ink);
    }

    .mobile-menu a {
        display: block;
        padding: 0.5rem;
        border-radius: 0.375rem;
    }

    .mobile-menu a:hover {
        background-color: var(--papyrus-mid);
    }

    :global([data-theme="dark"]) .mobile-menu a:hover {
        background-color: var(--sea-mid);
    }
</style>