module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "home-bg": "url('/public/images/bg.jpeg)",
      },
      maxHeight: {
        bannerHeight: "28.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
