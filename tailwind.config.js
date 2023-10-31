const { initFlowbite } = require('flowbite');
const { default: plugin } = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: '#0779e4',
        secondary: '#3e9ff9',
      },
    },
  },
  plugins: [require('tailwindcss'), require('flowbite/plugin')],
};
