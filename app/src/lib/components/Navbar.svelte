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

<div class="navbar serif-font">
    <div class="flex items-center justify-between w-full">
        <a href="/">
            <img class="rounded-md" src={isDark() ? "/Logomark-light.svg" : "/Logomark.svg"} alt={"Stoa Medical's logomark: the sigma (summation) integrated with a snake"} width="32rem" height="32rem"/>
        </a>
        <nav>
            <ul class="flex items-center gap-6">
                <li><a href="/products">Products</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="https://github.com/Stoa-Medical" class="theme-toggle"><GitHubIcon/></a></li>
                <li>
                    <button 
                        class="theme-toggle"
                        onclick={updateTheme}
                    >
                    <LightbulbIcon />
                    </button>
                </li>
            </ul>
        </nav>
    </div>
</div>

<style>
    .navbar {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 1rem;
        position: relative;
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