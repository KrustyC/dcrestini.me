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
      primary: "#22577A",
      "primary-soft": "#2D719F",
      accent: "#80ED99",
    },
    backgroundColor: {
      ...colors,
      primary: "#22577A",
      "primary-soft": "#2D719F",
      accent: "#80ED99",
    },
    textColor: {
      primary: "#F9DEC9",
      secondary: "#F9DEC9",
      accent: "#80ED99",
      "primary-on-accent": "#19323C",
      "background-primary": "#22577A",
    },
    fontFamily: {
      mono: ["VT323", "monospace"],
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
