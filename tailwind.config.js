module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': "url('/public/images/bg.jpeg)",
        
      },
     
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
