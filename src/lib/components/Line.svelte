<script lang="ts">
  import { theme } from "$lib/stores/theme";
  // Subscribe to the theme store (automatically handled by Svelte)
  let {
    from = 0, // start in pixels
    to = null as number | null, // if null → runs to bottom
    color = null as string | null,
    thickness = "2px",
    x = "1.25rem", // horizontal position
    z = 10,
  } = $props();

  // This derived value will react to changes in the theme store
  const isDark = $derived($theme === "dark");

  // If a color prop is passed, use it; otherwise, fall back to the reactive theme-based color.
  const effectiveColor = $derived(color ?? (isDark ? "var(--sea)" : "var(--ink)"));

  // Compute the style string using the new effectiveColor
  const styleString = $derived(() => {
    let style = `top: ${from}px; left: ${x}; width: ${thickness}; background: ${effectiveColor}; z-index: ${z};`;
    if (to !== null) {
      style += ` height: ${to - from}px;`;
    } else {
      style += " bottom: 0;";
    }
    return style;
  });
</script>

<div class="line" style={styleString()}></div>

<style>
  .line {
    position: absolute;
    transform: translateX(-50%);
  }
</style>
