const plugin = require('tailwindcss/plugin')
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        mono: ['var(--font-mono)', ...fontFamily.mono],
      },
      listStyleType: {
        square: 'square',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
        'bounce-right': {
          '0%, 100%': {
            transform: 'translateX(-15%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateX(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        wiggle: 'wiggle 1s ease-in-out infinite',
        'bounce-right': 'bounce-right 1s ease-in-out infinite',
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.bg-color': {
          '@apply bg-slate-50 dark:bg-slate-900': {},
        },
        '.bg-color-secondary': {
          '@apply bg-slate-200 dark:bg-slate-800': {},
        },
        '.border-color': {
          '@apply border-slate-200 dark:border-slate-800': {},
        },
        '.text-color': {
          '@apply text-slate-900 dark:text-slate-50': {},
        },
        '.text-color-secondary': {
          '@apply text-slate-700 dark:text-slate-200': {},
        },
      })
    }),
    require('tailwindcss-animate'),
  ],
}
