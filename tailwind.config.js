/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hero: ['Hero', 'sans-serif'],
        heroNewLight: ['Hero New Light', 'sans-serif'], 
        heroBold: ['Hero Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
