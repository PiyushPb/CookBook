const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E7073D",
        secondary: "#FFCCD8",
        text: "#333333",
        lightGray: "#757575",
      },
    },
  },
  plugins: [],
});
