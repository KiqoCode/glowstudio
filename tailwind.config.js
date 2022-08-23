/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      'mb': {'max': '480px'},
      'lg': {'max': '1024px'},
      'xlg': {'max': '1712px'},
    },
    extend: {
      colors: {
        'mattis-pink': '#AA6F6E',
        'mattis-light-pink': '#FEEFEF'
      },
      backgroundImage: {
        'mattis-img': 'url("assets/createbymattis-bg.jpg")',
      },
      animation: {
        'slide-up': 'transform 1s',
      }
    },
  },
  plugins: [],
};