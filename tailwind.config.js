/** @type {import('tailwindcss').Config} */
export default {
  content: ["*"],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'system-ui'],
      'lobster': ['Lobster', 'sans-serif']
    },
    extend: {},
  },
  plugins: [require('preline/plugin'), require('tailwindcss-animated')],
}