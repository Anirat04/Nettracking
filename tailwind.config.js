/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        textPrimary: "#696B76",
        textSecondHeading: "#87888D",
        testimonialUserText: "#CACACA",
        menuTextCol: "#a0a1a5",
        pricePlanPrimaryText: "#606266",
        pricePlanSecondaryText: "#8C8F93"
      },
      backgroundColor:{
        bgPrimary: "#1E2029",
        bodyBg: "#12141D",
        bgPrimaryOrange: "#FF664F"
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

