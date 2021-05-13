module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
