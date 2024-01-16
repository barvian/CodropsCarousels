import containerQueries from '@tailwindcss/container-queries'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index3.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', 'sans-serif'],
        serif: ['Cardo', 'serif']
      },
      backgroundImage: {
        noise: 'url("/img/3/noise.png")'
      }
    }
  },
  plugins: [
    containerQueries
  ]
}

