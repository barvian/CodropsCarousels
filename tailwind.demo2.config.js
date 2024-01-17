import contanierQueries from '@tailwindcss/container-queries'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index2.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'sans-serif'],
        serif: ['Cardo', 'serif']
      },
      screens: {
        '3xl': '1800px'
      },
      fontSize: {
        '5xl': '2.75rem',
        '9xl': ['7.5rem', '1']
      },
      spacing: {
        '14': '3.5rem'
      },
      colors: {
        neutral: {
          '750': '#2d2d2d'
        }
      },
      letterSpacing: {
        widest: '0.3em'
      },
      supports: {
        sda: 'timeline-scope: none'
      }

    }
  },
  plugins: [
    contanierQueries
  ]
}

