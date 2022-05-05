module.exports = {
  content: [
      "./**/*.{html,js}"
  ],
  safelist: process.env.NODE_ENV === "development" ? [{ pattern: /.*/ }] : [],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
  },

  plugins: [],
}
