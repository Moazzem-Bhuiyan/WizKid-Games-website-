/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cinzel Decorative"', 'serif'],
        heading: ['Cinzel', 'serif'],
        body: ['"Crimson Pro"', 'Georgia', 'serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#c9a84c',
          light: '#e8c97a',
          dark: '#8a6a1f',
        },
        ember: {
          DEFAULT: '#d4522a',
          light: '#f07040',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'ember': 'emberPulse 3s ease-in-out infinite',
        'fadeInUp': 'fadeInUp 0.8s ease forwards',
        'fadeIn': 'fadeIn 1s ease forwards',
      },
    },
  },
  plugins: [],
}
