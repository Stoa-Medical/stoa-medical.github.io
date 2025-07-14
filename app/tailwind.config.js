/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        // Default sans font -> Helvetica Regular
        sans: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        // Primary serif font -> EB Garamond
        garamond: ["EB Garamond", "serif"],
      },
      letterSpacing: {
        // -1% for Helvetica Regular
        sans: "-0.01em",
        // -2% for EB Garamond Medium
        garamond: "-0.02em",
        // +1% for EB Garamond Regular (optional second serif)
        "garamond-wide": "0.01em",
      },
    },
  },
  plugins: [],
};
