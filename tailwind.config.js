const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: {
          100: '#EFF9FF',
          200: '#1D9BF0',
          300: '#2795D9'
        },
        cyan: {
          100: '#F5f8FA',
          200: '#E1E8ED',
          300: '#AAB8C2',
          400: '#657786'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
