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
        SwiperIconns: ['swiper-icons']
      },
      padding: {
        'appPaddingLeft': '6rem',
        'appPaddingRight': '6rem',
      },
      colors: {
        'appTheme': 'var(--primary-color)',
        'appBlackTheme': 'var(--secondary-color)',
        'appTextColor': 'var(--app-text-color)',
        'appErrorMessage': 'var(--app-errorMessage-color)',
        'formFieldBorder': 'var(--form-field-border)'
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
    },
  },
  plugins: [animations],
};
