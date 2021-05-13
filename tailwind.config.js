console.log("----------", JSON.stringify(process.env, null, 2));
module.exports = {
  purge: {
    // enabled: process.env.node_env === "production",
    enabled: true,
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
