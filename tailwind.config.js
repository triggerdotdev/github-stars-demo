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
        starEntrance: {
          '0%': { transform: 'rotate(-540deg) scale(0)' },
          '1%': { filter: 'opacity(0)' },
          '80%': { transform: 'rotate(20deg) scale(1.1)' },
          '99%': { transform: 'rotate(0deg) scale(1)' },
          '100%': { filter: 'opacity(1)' },
          }
      },
      animation: {
        'star-animation': 'starEntrance 0.6s ease-out both',
        },
      },
    }, 
  plugins: [],
}