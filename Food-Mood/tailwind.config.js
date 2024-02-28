/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../Food-Mood/src/assets/food_bg-1.jpg')",

      }
    },
  },
  plugins: [],
}

