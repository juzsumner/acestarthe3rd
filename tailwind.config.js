/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%': { transform: 'translate(-2.5px,0)' },
          '1%': { transform: 'translate(2.5px,0)' },
          '2%': { transform: 'translate(-2.5px,0)' },
          '3%': { transform: 'translate(2.5px,0)' },
          '4%': { transform: 'translate(-2.5px,0)' },
          '5%': { transform: 'translate(2.5px,0)' },
          '6%': { transform: 'translate(-2.5px,0)' },
          '6.5%': { transform: 'translate(0)' },
          '100%': { transform: 'translate(0)' },
        },
        'gradient-x': {
          '0%': { 'background-size': '400% 400%', 'background-position': '20% 50%' },
          '50%': { 'background-size': '400% 400%', 'background-position': '80% 50%' },
          '100%': { 'background-size': '400% 400%', 'background-position': '20% 50%' },
        }
      },
      animation: {
        shake: 'shake 10s ease-in-out infinite',
        'gradient-x': 'gradient-x 20s ease infinite',
      },
    },
  },
  plugins: [],
}