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
      backgroundImage: {
        'navigatenextblue': "url('/path/to/Navigatenextblue.svg')",
        'navigateprevblue': "url('/path/to/Navigateprevblue.svg')",
        'navigatenextbluedark': "url('/path/to/Navigatenextbluedark.svg')",
        'navigateprevbluedark': "url('/path/to/Navigateprevbluedark.svg')",
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
   
  },
  plugins: [],
};
