<script>
  import { theme } from "$lib/stores/theme";

  // Props with defaults
  let {
    size = "medium", // small, medium, large
    color = undefined, // optional override for theme-based color
    showText = false, // whether to show the text alongside the logo
  } = $props();

  // Calculate dimensions based on size while maintaining 250/343 ratio
  const dimensions = $derived.by(() => {
    const baseWidth = 250;
    const baseHeight = 343;
    const ratio = baseHeight / baseWidth; // 343/250 = 1.372

    switch (size) {
      case "small":
        return { width: 25, height: Math.round(50 * ratio) }; // ~68px height
      case "medium":
        return { width: 50, height: Math.round(100 * ratio) }; // ~137px height
      case "large":
        return { width: 100, height: Math.round(400 * ratio) }; // ~549px height
      default:
        return { width: 50, height: Math.round(100 * ratio) }; // Original size
    }
  });

  const currentColor = $derived.by(() => {
    // Set color based on the color prop
    switch (color) {
      case "white":
        return "var(--white)";
      case "ink":
        return "var(--ink)";
      case "papyrus":
        return "var(--papyrus)";
      case "sky":
        return "var(--sky)";
      case "sea":
        return "var(--sea)";
      default:
        // Fallback to theme-based color if no color is specified
        return $theme === "dark" ? "var(--sea)" : "var(--ink)";
    }
  });
</script>

<div
  class="logo-container"
  data-size={size}
  style="--logo-color: {currentColor}"
>
  <svg
    width={dimensions.width}
    height={dimensions.height}
    viewBox="0 0 250 343"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Stoa Medical logomark: the sigma (summation) integrated with a snake"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M227.678 44.463H235.13C243.343 44.463 250 37.8118 250 29.6072V17.1072C250 7.65918 242.334 0 232.877 0H77.3726C66.0047 0 57.7926 10.8635 60.9026 21.7874L69.6592 52.5449C69.6579 52.5448 69.6566 52.5447 69.6553 52.5446L84.3227 104.051C88.5984 105.173 94.1357 106.362 99.7556 106.942C105.651 107.552 112.952 107.727 119.368 107.674L113.269 87.0966C115.051 87.2748 116.765 87.4405 118.392 87.5878C130.588 88.6922 137.064 90.3116 146.116 92.5752C150.657 93.7107 155.847 95.0086 162.732 96.4846C183.342 100.903 221.219 97.0369 219.548 85.4385C217.877 73.84 181.113 56.1669 167.188 55.0623C158.462 54.3702 154.111 56.2802 150.022 58.0749C147.585 59.1444 145.242 60.1729 142.122 60.5854C135.413 60.5854 123.816 59.0708 109.731 57.2313C107.928 56.9958 106.084 56.7549 104.204 56.5113L99.4952 40.6242C97.8705 35.1424 101.982 29.642 107.705 29.642H212.843C216.94 29.642 220.26 32.9598 220.26 37.0525C220.26 41.1452 223.581 44.463 227.678 44.463ZM176.963 75.4978C176.57 78.05 171.922 79.4532 166.581 78.6322C161.239 77.8111 157.228 75.0766 157.621 72.5244C158.014 69.9723 162.663 68.569 168.004 69.3901C173.345 70.2112 177.357 72.9457 176.963 75.4978Z"
      fill={currentColor}
    />
    <path
      d="M96.2181 145.833C14.9426 142.467 -5.55149 116.5 1.19615 80.4677C6.37063 52.836 31.4379 49.8423 60.5418 51.8034L69.597 83.564C58.4832 83.3958 49.8677 84.4682 47.9859 88.2C43.9302 96.2427 57.1246 113.241 118.965 116.231C119.964 116.225 120.943 116.213 121.894 116.196L121.943 116.363C127.197 116.573 132.79 116.685 138.737 116.685C186.721 116.685 227.904 135.699 228.461 172.704C229.018 209.708 229.196 261.05 200.052 278.193C182.206 288.691 146.455 292.674 111.353 292.53L119.677 260.673C127.953 260.501 135.696 260.041 142.122 259.416C170.531 256.654 189.313 250.579 193.925 211.917C199.541 164.841 185.277 148.858 130.881 146.517L134.773 159.652C135.661 162.646 135.711 165.826 134.918 168.847L133.111 175.734C129.854 175.013 126.503 174.329 123.223 173.712C115.908 172.337 107.049 170.987 99.8403 170.306L100.247 168.776C101.038 165.8 101.01 162.666 100.167 159.705L96.2181 145.833Z"
      fill={currentColor}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M97.6056 178.714L97.6109 178.694C98.2027 178.743 98.8114 178.799 99.4346 178.859C105.591 179.372 111.86 180.118 118.17 180.987C158.276 186.511 167.188 202.29 162.732 207.499C161.008 209.515 153.281 208.411 142.622 206.89C137.485 206.156 131.666 205.325 125.51 204.7L110.803 260.742C110.806 260.742 110.808 260.742 110.81 260.742L102.537 292.408C102.522 292.407 102.508 292.407 102.494 292.407L99.8096 302.635C98.3868 308.057 102.481 313.358 108.091 313.358H212.843C216.94 313.358 220.26 310.04 220.26 305.948C220.26 301.855 223.581 298.537 227.678 298.537H235.13C243.343 298.537 250 305.188 250 313.393V325.893C250 335.341 242.334 343 232.877 343H76.2022C64.9591 343 56.7669 332.358 59.6525 321.502L67.9593 290.25C55.1353 288.912 43.7744 287.047 35.1744 284.822C-3.18431 274.9 3.60192 238.783 21.2489 207.499C36.4513 180.549 65.3696 176.265 97.6056 178.714ZM90.5807 205.143C63.7175 209.827 40.3393 225.724 45.2008 243.399C47.3794 251.32 60.1505 255.947 76.4247 258.401L90.5807 205.143Z"
      fill={currentColor}
    />
  </svg>

  {#if showText}
    <span class="stoa-logo-text">Stoa Medical</span>
  {/if}
</div>

<style>
  .logo-container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  svg {
    display: block;
    flex-shrink: 0;
  }

  .stoa-logo-text {
    font-family: var(--font-secondary);
    letter-spacing: -0.02em;
    font-weight: var(--font-weight-heavy);
    color: var(--logo-color, var(--text-primary));
    /* Scale text size based on logo size */
    font-size: calc(2rem * var(--logo-scale, 1));
  }

  /* Size-specific scaling */
  :global(.logo-container[data-size="small"]) {
    --logo-scale: 1;
  }
  :global(.logo-container[data-size="medium"]) {
    --logo-scale: 2;
  }

  :global(.logo-container[data-size="large"]) {
    --logo-scale: 4;
  }
</style>
