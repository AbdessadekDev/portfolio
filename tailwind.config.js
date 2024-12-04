/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Light Mode Colors
        'primary-bg-light': '#ffffff',
        'secondary-bg-light': '#f7f7f7',
        'primary-light': '#2f130f',
        'secondary-light': '#877277',
        'accent-light': '#ad5530',
        'accent-2-light': '#623121',

        // Dark Mode Colors
        'primary-bg-dark': '#2f130f',
        'secondary-bg-dark': '#3c1f18',
        'primary-dark': '#c8a9a9',
        'secondary-dark': '#877277',
        'accent-dark': '#ad5530',
        'accent-2-dark': '#623121',
      },
      keyframes: {
        'bounce-30': {
          '0%, 100%': {
            transform: 'translateY(-30px)',
            'animation-timing-function': 'cubic-bezier(0.8,0,1,1)'
          },
          '50%': {
            transform: 'none',
            'animation-timing-function': 'cubic-bezier(0,0,0.2,1)' 
          },
        }
      },
      animation: {
        'bounce-30' : 'bounce-30 1s infinite',
        'bounce-30-100' : 'bounce-30 1s infinite 100ms',
        'bounce-30-200' : 'bounce-30 1s infinite 200ms',
        'bounce-30-300' : 'bounce-30 1s infinite 300ms',
        'bounce-30-400' : 'bounce-30 1s infinite 400ms',
        "spin-slow": 'spin 3s linear infinite',
        'ping-slow': 'ping 3s linear infinite',
        'bounce-slow': 'bounce 3s linear infinite'
      }
    },
  },
  plugins: [],
}
