/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: {
	files: ['./src/**/*.{astro,svelte,js}'],
  },
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#ffffff',
      primary: {
        '50': '#f6f7f9',
        '100': '#ecedf2',
        '200': '#d5d8e2',
        '300': '#b0b6c9',
        '400': '#858fab',
        '500': '#657192',
        '600': '#515a78',
        '700': '#424962',
        '800': '#393f53',
        '900': '#333747',
        '950': '#1f212b',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.25rem'],
      base: ['1rem', '1.75rem'],
      lg: ['1.125rem', '2rem'],
      xl: ['1.25rem', '2.125rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.375rem'],
      '4xl': ['2.25rem', '2.75rem'],
      '5xl': ['3rem', '3.5rem'],
      '6xl': ['3.75rem', '4.25rem'],
    },
  },
};
