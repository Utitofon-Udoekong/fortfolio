module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Lato', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('./assets/images/citylandscape.jpg')",
        'footer-texture': "url('./assets/images/officespace.jpg')",
        'headphones': "url('./assets/images/headphones.jpg')",
        'login-texture': "url('./assets/images/mansitting.jpg')",
        'login-texture-f': "url('./assets/images/womantyping.jpg')"
       },
       colors: {
         brand: {
           blue: "#03426d",
           lightblue: "#00ADEE"
         }
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
