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
        'login-texture-f': "url('./assets/images/womantyping.jpg')",
        'network-texture': "url('https://www.investopedia.com/thmb/513SZ-nXDzK3nLYG6hOlQr_mSL4=/2121x1193/smart/filters:no_upscale()/Investingjourneypic-12651a1840124b9d84467deb065e7b26-bfb2d9b73a524490acbed28a3c4ffecf.jpg')",
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
