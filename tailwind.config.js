/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0b0b",
        cream: "#f7f7f5",
        oak: "#c3a26b",
        olive: "#4a453c",
        stone: "#efede8",
        charcoal: "#141414",
        clay: "#b0844c",
        sun: "#d0a76d",
        sage: "#8d8578",
        ember: "#6b4a2c"
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Karla'", "sans-serif"]
      }
    }
  },
  plugins: []
};
