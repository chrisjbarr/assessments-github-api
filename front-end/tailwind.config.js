/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': {
          100: '#d1ebf7',
          200: '#a3d7ee',
          300: '#75c2e6',
          400: '#47aedd',
          500: '#199AD5',
          600: '#147baa',
          700: '#0f5c80',
          800: '#0a3e55',
          900: '#051f2b'
        },

        'brand-black': {
          100: '#acb1bb',
          200: '#828998',
          300: '#596276',
          400: '#2f3b54',
          500: '#42454d',
          600: '#262f43',
          700: '#1c2332',
          800: '#131822',
          900: '#090c11'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
