/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.html",
    "./static/src/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    spacing: {
      '0': '0rem',  // 0px
      '2': '0.5rem', // 8px
      '4': '1rem',   // 16px
      '8': '2rem',   // 32px
      '12': '3rem',  // 48px
      '16': '4rem',  // 64px
      '24': '6rem',  // 96px
      '32': '8rem',  // 128px
      '48': '12rem', // 192px
      '64': '16rem', // 256px
      '96': '24rem', // 384px
      '128': '32rem', // 512px
      '192': '48rem', // 768px
      '256': '64rem', // 1024px
      '384': '96rem', // 1536px
      '512': '128rem', // 2048px
      '640': '160rem', // 2560px
      '768': '192rem', // 3072px
    },
    fontSize: {
      'xs': '.75rem', // 12px
      'sm': '.875rem', // 14px
      'base': '1rem', // 16px
      'lg': '1.125rem', // 18px
      'xl': '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
      '6xl': '4rem', // 64px
      '7xl': '5rem', // 80px
      '8xl': '6rem', // 96px
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: 'hsl(210, 36%, 96%)',
      primary: {  // these are the splashes of color that should appear the most in your UI
        100: 'hsl(205, 100%, 21%)',
        200: 'hsl(205, 87%, 29%)',
        300: 'hsl(205, 82%, 33%)',
        400: 'hsl(205, 76%, 39%)',
        500: 'hsl(205, 67%, 45%)',
        600: 'hsl(205, 65%, 55%)',
        700: 'hsl(205, 74%, 65%)',
        800: 'hsl(205, 84%, 74%)',
        900: 'hsl(205, 97%, 85%)',
        1000: 'hsl(205, 79%, 92%)',
      },
      neutral: {  // these are the colors you will use the most and will make up the majority of your UI (text, background, and boarders)
        100: 'hsl(209, 61%, 16%)',
        200: 'hsl(211, 39%, 23%)',
        300: 'hsl(209, 34%, 30%)',
        400: 'hsl(209, 28%, 39%)',
        500: 'hsl(210, 22%, 49%)',
        600: 'hsl(209, 23%, 60%)',
        700: 'hsl(211, 27%, 70%)',
        800: 'hsl(210, 31%, 80%)',
        900: 'hsl(212, 33%, 89%)',
        1000: 'hsl(210, 36%, 96%)',
      },
      teal: {   // these colors should be used fairly conservatively
        100: 'hsl(167, 100%, 13%)',
        200: 'hsl(172, 98%, 20%)',
        300: 'hsl(172, 94%, 26%)',
        400: 'hsl(170, 91%, 32%)',
        500: 'hsl(168, 78%, 41%)',
        600: 'hsl(166, 64%, 49%)',
        700: 'hsl(164, 70%, 63%)',
        800: 'hsl(162, 73%, 74%)',
        900: 'hsl(163, 75%, 87%)',
        1000: 'hsl(165, 67%, 96%)',
      },
      red: {   // these colors should be used fairly conservatively}
        100: 'hsl(360, 92%, 20%)',
        200: 'hsl(360, 85%, 25%)',
        300: 'hsl(360, 79%, 32%)',
        400: 'hsl(360, 72%, 38%)',
        500: 'hsl(360, 67%, 44%)',
        600: 'hsl(360, 64%, 55%)',
        700: 'hsl(360, 71%, 66%)',
        800: 'hsl(360, 77%, 78%)',
        900: 'hsl(360, 82%, 89%)',
        1000: 'hsl(360, 100%, 97%)',
      },
      yellow: {   // these colors should be used fairly conservatively}
        100: 'hsl(43, 86%, 17%)',
        200: 'hsl(43, 77%, 27%)',
        300: 'hsl(43, 72%, 37%)',
        400: 'hsl(42, 63%, 48%)',
        500: 'hsl(42, 78%, 60%)',
        600: 'hsl(43, 89%, 70%)',
        700: 'hsl(43, 90%, 76%)',
        800: 'hsl(45, 86%, 81%)',
        900: 'hsl(45, 90%, 88%)',
        1000: 'hsl(45, 100%, 96%)',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}