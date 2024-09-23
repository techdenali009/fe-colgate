/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hero: ['Hero', 'sans-serif'],
        heroNewLight: ['Hero New Light', 'sans-serif'], // Add the custom font
      },
      width: {
        '40.6rem': '40.6rem', // Custom width value
      },
      height:{
        '31rem': '31rem',
        '40.6':'40.6'
      },
      fontSize:{
        '33px': '33px',
      }
    },
  },
  plugins: [],
}
