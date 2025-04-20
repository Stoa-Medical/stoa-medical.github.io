import { writable, type Writable } from 'svelte/store';
import { browser } from '$app/environment';
import { 
  getInitialTheme, 
  applyTheme, 
  watchTheme,
  type Theme 
} from '$lib/utils/theme';

// Create a store with the initial theme value
export const theme: Writable<Theme> = writable(getInitialTheme());

// Apply initial theme when in browser environment
if (browser) {
  // Apply theme changes whenever store value changes
  theme.subscribe((value: Theme) => {
    applyTheme(value);
  });

  // Set up a watcher to update store when theme changes from other sources
  // (like system preference changes or other components)
  watchTheme((newTheme: Theme) => {
    theme.set(newTheme);
  });
}

/**
 * Toggle between light and dark theme
 */
export function toggleTheme(): void {
  theme.update((current: Theme): Theme => 
    current === 'dark' ? 'light' : 'dark'
  );
} 