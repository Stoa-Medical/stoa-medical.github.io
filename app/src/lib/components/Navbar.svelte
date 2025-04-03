<script>
    import Lightbulb from "$lib/icons/Lightbulb.svelte";
    import GitHub from "$lib/icons/GitHub.svelte";
    import { onMount } from 'svelte';

    let isDark = false;
    let isMobile = false;

    onMount(() => {
        update_theme();
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    });

    const checkMobile = () => {
        isMobile = window.innerWidth < 768;
    };

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
                        on:click={update_theme}
                    >
                    <Lightbulb dark={isDark}/>
                    </button>
                </li>
            </ul>
        </nav>
    {/if}
</div>

{#if isMobile}
    <nav class="mobile-nav">
        <ul class="flex items-center justify-between px-4">
            <li>
                <a href="/products" class="mobile-nav-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 7h-7m7 10h-7M7 7h0m0 10h0"/>
                        <path d="M12 21H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-8"/>
                        <path d="M12 3v18"/>
                    </svg>
                    <span>Products</span>
                </a>
            </li>
            <li>
                <a href="/services" class="mobile-nav-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 2v20M2 12h20"/>
                        <path d="M12 2a10 10 0 0 1 10 10"/>
                        <path d="M12 22a10 10 0 0 1-10-10"/>
                    </svg>
                    <span>Services</span>
                </a>
            </li>
            <li>
                <a href="/about" class="mobile-nav-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 16v-4"/>
                        <path d="M12 8h.01"/>
                    </svg>
                    <span>About</span>
                </a>
            </li>
            <li>
                <a href="https://github.com/Stoa-Medical" class="mobile-nav-item">
                    <GitHub dark={isDark}/>
                    <span>GitHub</span>
                </a>
            </li>
            <li>
                <button 
                    class="mobile-nav-item"
                    on:click={update_theme}
                >
                    <Lightbulb dark={isDark}/>
                    <span>Theme</span>
                </button>
            </li>
        </ul>
    </nav>
{/if}

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

    .mobile-nav {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: var(--papyrus-light);
        padding: 0.5rem 0;
        border-top: 1px solid var(--papyrus-mid);
        z-index: 50;
    }

    :global([data-theme="dark"]) .mobile-nav {
        background-color: var(--ink);
        border-top-color: var(--ink-mid);
    }

    .mobile-nav-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.25rem;
        color: inherit;
        text-decoration: none;
        font-size: 0.75rem;
        padding: 0.5rem;
        border-radius: 0.375rem;
    }

    .mobile-nav-item span {
        font-size: 0.75rem;
    }

    .mobile-nav-item:hover {
        background-color: var(--papyrus-mid);
    }

    :global([data-theme="dark"]) .mobile-nav-item:hover {
        background-color: var(--sea-mid);
    }

    @media (min-width: 768px) {
        .mobile-nav {
            display: none;
        }
    }
</style>