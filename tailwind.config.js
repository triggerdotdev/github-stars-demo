/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
       fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      dropShadow: {
        '2xl': '0 0 5px rgba(211, 172, 83, 0.8)',
    },
  }
  },
  plugins: [],
}
