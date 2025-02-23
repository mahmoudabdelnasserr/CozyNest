/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#B31BD5',
        'light': '#C9FFE3',
        'secondary': '#ffed4a',
        'danger': '#e3342f',
    },
  },
  plugins: [],
}}