/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
   
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
    extend: {
      fontFamily: {
        HeroNewBold:['Hero New Bold'],
        HeroNewExtraBold:['Hero New ExtraBold'],
        HeroNewLight:['Hero New Light'],
        HeroNewRegular:['Hero New Regular'],
        HeroNewSemiBold:['Hero New SemiBold'],
        HeroNewThin:['Hero New Thin'],
        HeroNewUltraLight:['Hero New UltraLight']
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    }
  },
  plugins: [],
}
