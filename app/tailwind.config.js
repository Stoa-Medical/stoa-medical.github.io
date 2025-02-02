/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Cormorant Garamond', 'serif'], // Override the default sans font
      },
    },
  },
  plugins: []
};
