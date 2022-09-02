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
    keyframes: {
        starAnimation: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(4deg)' },
          '20%': { transform: 'rotate(-4deg)' },
          '30%': { transform: 'rotate(4deg)' },
          '40%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        'star-animation': 'starAnimation 2s linear infinite',
      },
  }
  },
  plugins: [],
}
