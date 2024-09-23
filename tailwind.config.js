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
    screens: {
      // 'tablet': '640px',
      // 'laptop': '1024px',
      // 'desktop': '1280px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    }

  },
  plugins: [],
}
