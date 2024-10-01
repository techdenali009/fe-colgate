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
      'xl': '1280px',
      'xs': '425px',
      '2xs':'320px'
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
        'appPaddingLeft': '4.5rem',
        'appPaddingRight': '4.5rem',
      },
      colors:{
        'appTheme': 'var(--primary-color)',
        'appBlackTheme':'var(--secondary-color)',
        'appTextColor': 'var(--app-text-color)',
        'appErrorMessage':'var(--app-errorMessage-color)',
        'formFieldBorder':'var(--form-field-border)'
      }
     
    },
    // this is for hover effect in the backgroundImage
    variants: {
      extend: {
       
        backgroundImage: ['hover'], 
      },
      fontSize:{
        '33px': '33px',
        '24px': '24px',
      },
      borderradius:{
    
      },
    },
  },
  plugins: [],
};
