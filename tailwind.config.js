/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // Enable JIT mode
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
      //Here you havre to add the path for the backgroundImage
      backgroundImage: {
        'NavigatePrevBlue': "url('src/libs/ui/assests/Navigate-prev-blue.svg')",
        'NavigatePrevBlueDark': "url('src/libs/ui/assests/Navigate-prev-blue-dark.svg')", 
        'NavigateNextBlue':"url(src/libs/ui/assests/Navigate-next-blue.svg)",
        'NavigateNextBluedark':"url(src/libs/ui/assests/Navigate-next-blue-dark.svg)"
      },
      fontFamily: {
        HeroNewBold: ['Hero New Bold'],
        HeroNewExtraBold: ['Hero New ExtraBold'],
        HeroNewLight: ['Hero New Light'],
        HeroNewRegular: ['Hero New Regular'],
        HeroNewSemiBold: ['Hero New SemiBold'],
        HeroNewThin: ['Hero New Thin'],
        HeroNewUltraLight: ['Hero New UltraLight']
      },
    },
    // this is for hover effect in the backgroundImage
    variants: {
      extend: {
       
         backgroundImage: ['hover'], 
      },
    },
  },
  plugins: [],
};
