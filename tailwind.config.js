module.exports = {
  important: false,
  content: ["./src/**/*.{js,html,md,njk}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      maxHeight: {
        128: "32rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
