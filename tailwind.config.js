/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [`./build/**/*.{html, js}`],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#ddd",
        flatblack: "#333",
        lightblack: "#323",
      },
      fontFamily: {
        sans: [`Montserrat`, `sans`],
        cursive: [`Allura`, `cursive`],
      },
      keyframes: {
        "icon-float": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(2vh)" },
        },
      },
      animation: {
        "icon-float": "icon-float 5s linear 0s infinite alternate",
      },
    },
  },
  plugins: [],
};
