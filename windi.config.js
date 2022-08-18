import { defineConfig } from 'windicss/helpers'

const defaultTheme = require('windicss/defaultTheme')

export default defineConfig({
  attributify: { prefix: 'css:' },
  darkMode: 'class',
  plugins: [require('windicss/plugin/forms')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        DEFAULT: '3px 3px #000',
        lg: '5px 5px #000'
      },
      animation: {
        bgfade: 'bgfade 120s linear infinite'
      },
      keyframes: {
        bgfade: {
          '0%, 100%': {
            'background-color': '#ecfccb'
          },
          '10%': {
            'background-color': '#d1fae5'
          },
          '20%': {
            'background-color': '#cffafe'
          },
          '30%': {
            'background-color': '#dbeafe'
          },
          '40%': {
            'background-color': '#ede9fe'
          },
          '50%': {
            'background-color': '#fae8ff'
          },
          '60%': {
            'background-color': '#ede9fe'
          },
          '70%': {
            'background-color': '#dbeafe'
          },
          '80%': {
            'background-color': '#cffafe'
          },
          '90%': {
            'background-color': '#d1fae5'
          }
        }
      }
    }
  }
})
