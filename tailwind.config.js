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
