console.log("----------", process.env.node_env);
module.exports = {
  purge:
    process.env.node_env === "production"
      ? ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"]
      : [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
