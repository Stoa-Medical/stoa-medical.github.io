<script lang="ts">
  import StoaMedicalIcon from "$lib/icons/StoaMedicalIcon.svelte";
  import { theme } from "$lib/stores/theme";

  let { size = "md" }: { size?: "sm" | "md" | "lg" } = $props();

  const sizes = {
    sm: { width: 24, height: 32 },
    md: { width: 32, height: 44 },
    lg: { width: 48, height: 64 },
  };

  const { width, height } = $derived(sizes[size]);
</script>

<StoaMedicalIcon
  {width}
  {height}
  variant={$theme === "dark" ? "grey" : "tan"}
/>
