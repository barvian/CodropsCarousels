import containerQueries from '@tailwindcss/container-queries'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'sans-serif'],
        serif: ['Cardo', 'serif']
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
    containerQueries
  ]
}

