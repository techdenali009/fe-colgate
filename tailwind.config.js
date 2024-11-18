/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
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
      'tm': { 'max': '1020px' },  // max-width 1020px
      'tl': { 'min': '1021px' },  // min-width 1021px
      'lg': '1024px',
      'xl': '1280px',
      'xs': '425px',
      '2xs': '320px'
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
        SwiperIconns: ['swiper-icons'],
        HeroNewMedium: ['Hero New Medium'],
        HeroNewSuper: ['Hero New Super'],
        SansSerif:['Sans Serif'],
        
      },
      padding: {
        'appPaddingLeft': '6rem',
        'appPaddingRight': '6rem',
      },
      colors: {
        'appTheme': 'rgb(var(--primary-color))',
        'appBlackTheme': 'var(--secondary-color)',
        'appTextColor': 'var(--secondary-color)',
        'appErrorMessage': 'var(--app-errorMessage-color)',
        'formFieldBorder': 'var(--form-field-border)',
        'lightGray':'var(--app-light-gray-color)',
        'darkGray':'var(--app-dark-gray-color)',
        'hoverIconColor':'var(--hover-icon-color)',
        'appdarkcolor':'var(--app-dark-color)',
        'appModalColor':'var(--app-modal-color)',
        'appInputFieldColor':'var(--app-inputField-color)',
        'appTheme-opacity-10': 'rgba(var(--primary-color), 0.1)',
        'appTheme-opacity-20': 'rgba(var(--primary-color), 0.2)',
        'appTheme-opacity-30': 'rgba(var(--primary-color), 0.3)',
        'appTheme-opacity-40': 'rgba(var(--primary-color), 0.4)',
        'appTheme-opacity-50': 'rgba(var(--primary-color), 0.5)',
        'appTheme-opacity-60': 'rgba(var(--primary-color-rgb), 0.6)',
        'appTheme-opacity-70': 'rgba(var(--primary-color), 0.7)',
        'appTheme-opacity-80': 'rgba(var(--primary-color), 0.8)',
        'appTheme-opacity-90': 'rgba(var(--primary-color), 0.9)',
        'appTheme-opacity-100': 'rgba(var(--primary-colo), 1)',
        'appWhiteTheme-opacity-10':'rgba(var(--app-White), 0.1)',
        'appWhiteTheme-opacity-20':'rgba(var(--app-White), 0.2)',
        'appWhiteTheme-opacity-30':'rgba(var(--app-White), 0.3)',
        'appWhiteTheme-opacity-40':'rgba(var(--app-White), 0.4)',
        'appWhiteTheme-opacity-50':'rgba(var(--app-White), 0.5)',
        'appWhiteTheme-opacity-60':'rgba(var(--app-White), 0.6)',
        'appWhiteTheme-opacity-70':'rgba(var(--app-White), 0.7)',
        'appWhiteTheme-opacity-80':'rgba(var(--app-White), 0.8)',
        'appWhiteTheme-opacity-90':'rgba(var(--app-White), 0.9)',
        'appWhiteTheme-opacity-100':'rgba(var(--app-White), 1)',
      }

    },
    // this is for hover effect in the backgroundImage
    variants: {
      extend: {

        backgroundImage: ['hover'],
      },
      fontSize: {
        '33px': '33px',
        '24px': '24px',
      },
      borderradius: {

      },
    },
    animation: {
      slideIn: 'slideIn 0.8s forwards',
      slideOut: 'slideOut 0.8s forwards',
      pulse: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    },
    keyframes: {
      slideIn: {
        '0%': { transform: 'translateY(-100%)' },
        '100%': { transform: 'translateY(0)' },
      },
      slideOut: {
        '0%': { transform: 'translateY(0)' },
        '100%': { transform: 'translateY(-100%)' },
      },
      pulse: {
        '0%, 100%': { opacity: 1 },
        '50%': { opacity: 0.5 },
      },
    },
  },
  plugins: [animations],
  
};
