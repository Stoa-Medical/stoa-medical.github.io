<script>
    import LightbulbIcon from "$lib/icons/LightbulbIcon.svelte";
    import GitHubIcon from "$lib/icons/GitHubIcon.svelte";
    import { browser } from '$app/environment';

    // Session-only theme state (default: light)
    let theme = $state('light');
    let isDark = $derived(() => theme === 'dark');

    $effect(() => {
        if (browser) {
            document.documentElement.setAttribute('data-theme', theme);
        }
    })

    function updateTheme() {
        theme = theme === 'dark' ? 'light' : 'dark';
    }
</script>

<header class="navbar serif-font">
    <a href="/" class="brand">
        <img class="rounded-md" src={isDark() ? "/Logomark-light.svg" : "/Logomark.svg"} alt={"Stoa Medical's logomark: the sigma (summation) integrated with a snake"} width="32" height="32"/>
    </a>
    <nav>
        <ul class="nav-links">
            <li><a href="/products">Products</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="https://github.com/Stoa-Medical" class="theme-toggle" aria-label="GitHub"><GitHubIcon dark={isDark()}/></a></li>
            <li>
                <button 
                    class="theme-toggle"
                    onclick={updateTheme}
                    aria-label="Toggle theme"
                >
                <LightbulbIcon dark={isDark()}/>
                </button>
            </li>
        </ul>
    </nav>
</header>

<style>
    .navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 1rem;
    }
    
    .brand {
        display: flex;
        align-items: center;
    }
    
    .nav-links {
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }
    
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