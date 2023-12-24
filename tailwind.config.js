/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "440px",
      // => @media (min-width: 440px) { ... }

      md: "547px",
      // => @media (min-width: 547px) { ... }

      lg: "768px",
      // => @media (min-width: 768px) { ... }

      xl: "1024px",
      // => @media (min-width: 1024px) { ... }

      "2xl": "1200px",
      // => @media (min-width: 1200px) { ... }
    },
    colors: {
      Tesla_black: "#171A20CC",
      Tesla_gray: "#F4F4F4A6",
      Tesla_ft: "#D0D1D2",
    },
    extend: {},
  },
  plugins: [],
};
