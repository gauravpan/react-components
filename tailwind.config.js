console.log(
  "----------",
  process.env.node_env === "production"
    ? ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"]
    : []
);
module.exports = {
  purge: {
    enabled: process.env.node_env === "production",
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
