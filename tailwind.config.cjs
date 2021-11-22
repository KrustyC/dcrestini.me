const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.svelte"],
  darkMode: false,
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      ...colors,
      primary: "#233554",
      accent: "#64FFDA",
    },
    textColor: {
      primary: "#233554",
      secondary: "#8892b0",
      accent: "#64FFDA",
    },
    fontFamily: {
      mono: ['VT323', "monospace"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
