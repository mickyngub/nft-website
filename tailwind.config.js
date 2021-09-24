module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "press-start": ['"Press Start 2P"', "cursive"],
      },
      backgroundImage: {
        "8bit-background": "url(./assets/8bitwallpaper.jpg)",
      },
      height: {
        "85-vh": "85vh",
        22: "5.5rem",
      },
      width: {
        22: "5.5rem",
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
