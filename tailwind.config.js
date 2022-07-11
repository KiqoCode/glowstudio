/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'mattis-pink': '#AA6F6E',
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