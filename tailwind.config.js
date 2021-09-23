module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme("colors"),
      primary: "#3490dc",
      secondary: "#0d1722",
      indigo: "#1D2C3C",
      beige: "#DACDC2",
      danger: "#e3342f",
    }),
    extend: {
      fontFamily: {
        spartan: ["Spartan"],
        oswald: ["Oswald"],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
}
