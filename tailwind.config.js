/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './components/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway'],
        roboto: ['Roboto'],
      },

      colors: {
        blue: '#24A0F5',
        white: '#FFFFFF',
        gray: '#A6AEBF',
        turquoise: '#2AF3F3',
        'contrast-blue': '#0C223C',
        'blue-dark': '#0D1C47',
        'bright-turquoise': '#2AF3F3',
        'violet-blue': '#2D4D70',
      },

      backgroundImage: {
        'linear-dark-blue':
          'linear-gradient(270deg, #2D4D70 11.98%, #213B57 44.89%, #14273C 100%)',
      },

      boxShadow: {
        'wallet-elips': '0px 0px 10px rgba(42, 243, 243, 0.55)',
        'neon-blue': '0px 18px 34px rgba(34, 39, 47, 0.55)',
      },
    },
  },
  plugins: [],
};
