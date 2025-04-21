import { browser } from "$app/environment";

/**
 * Theme type - can be 'light' or 'dark'
 */
export type Theme = "light" | "dark";

/**
 * Get the current theme from system preference or stored preference
 * @returns The current theme ('light' or 'dark')
 */
export function getInitialTheme(): Theme {
  if (!browser) return "light";

  // Check for stored preference first
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "light" || storedTheme === "dark") return storedTheme;

  // Then try data-theme attribute on HTML
  const docTheme = document.documentElement.getAttribute("data-theme");
  if (docTheme === "light" || docTheme === "dark") return docTheme;

  // Fall back to system preference
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * Apply theme to document and save preference
 * @param theme - Theme to apply ('light' or 'dark')
 */
export function applyTheme(theme: Theme): void {
  if (!browser) return;

  // Apply theme to document
  document.documentElement.setAttribute("data-theme", theme);

  // Save preference
  localStorage.setItem("theme", theme);
}

/**
 * Toggle current theme between light and dark
 * @returns New theme after toggling
 */
export function toggleTheme(): Theme {
  if (!browser) return "light";

  const currentTheme =
    (document.documentElement.getAttribute("data-theme") as Theme) || "light";
  const newTheme: Theme = currentTheme === "dark" ? "light" : "dark";

  applyTheme(newTheme);
  return newTheme;
}

/**
 * Create a mutation observer to watch for theme changes
 * @param callback - Function to call when theme changes
 * @returns Cleanup function to disconnect the observer
 */
export function watchTheme(callback: (theme: Theme) => void): () => void {
  if (!browser) return () => {};

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "data-theme"
      ) {
        const newTheme = document.documentElement.getAttribute("data-theme");
        // Ensure we only pass 'light' or 'dark'
        callback(newTheme === "dark" ? "dark" : "light");
      }
    }
  });

  observer.observe(document.documentElement, { attributes: true });

  // Return cleanup function
  return () => observer.disconnect();
}
