module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
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
        'josefin': ['"Josefin Sans"', 'sans-serif'],
        'roboto': ['"Roboto"', 'sans-serif'],
        'montserrat': ['"Montserrat"', 'sans-serif'],
      },
    }
  },
  plugins: [],
}
