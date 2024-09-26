/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  mode: 'jit', // Enable JIT mode
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
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
      
      },
      fontFamily: {
        HeroNewBold: ['Hero New Bold'],
        HeroNewExtraBold: ['Hero New ExtraBold'],
        HeroNewLight: ['Hero New Light'],
        HeroNewRegular: ['Hero New Regular'],
        HeroNewSemiBold: ['Hero New SemiBold'],
        HeroNewThin: ['Hero New Thin'],
        HeroNewUltraLight: ['Hero New UltraLight'],
        SwiperIconns:['swiper-icons']
      },
      padding: {
        'appPaddingLeft': '3.5rem',
        'appPaddingRight': '3.5rem',
      }
    },
   
    
  },
  plugins: [],
};
