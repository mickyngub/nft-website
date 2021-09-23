module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "press-start": ['"Press Start 2P"', "cursive"],
      },
      backgroundImage: {
        "8bit-background": "url(./assets/8bitwallpaper.jpg)",
      },
      borderWidth: {
        16: "16px",
        32: "32px",
        48: "48px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
