/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts,svx}",
    "./node_modules/flowbite/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
