const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth:{
        '10':'10px'
      },
      height:{
        '172':'43rem'
      },
      width:{
        '120':'30rem'
      },
      colors:{
        'fuchsia': colors.fuchsia
      },
      fontSize:{
        'xxs':'0.5rem'
      },
      maxWidth:{
        '32':'8rem'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
