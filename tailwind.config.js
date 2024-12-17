module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#2E3437',
      },
      translate: {
        '[-72%]': '-72%',
        '[-135%]': '-135%',
      },
      fontFamily: {
        josefin: ['"Josefin Sans"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.bg-gradient': {
          '@apply bg-gradient-to-r from-indigo-500 to-purple-500': {},
        },
        '.text-gradient': {
          '@apply font-bold bg-gradient to-purple-500 text-transparent bg-clip-text':
            {},
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
