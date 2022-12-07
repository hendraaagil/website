/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      mono: ['Fira Code', 'monospace'],
      sans: ['Plus Jakarta Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        brand: {
          blue: '#2a61cc',
          dark: '#1d1f28',
          light: '#eff4f6',
        },
      },
    },
  },
  plugins: [],
}
