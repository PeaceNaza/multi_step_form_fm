/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
      },
      colors: {
        primary: {
          100: "hsl(213, 96%, 18%)",
          200: "hsl(243, 100%, 62%)",
          300: "hsl(228, 100%, 84%)",
          400: "hsl(206, 94%, 87%)",
          500: "hsl(354, 84%, 57%)",
        },
        secondary: {
          100: "hsl(231, 11%, 63%)",
          200: "hsl(229, 24%, 87%)",
          300: "hsl(217, 100%, 97%)",
          400: "hsl(231, 100%, 99%)",
          500: "hsl(0, 0%, 100%)",
        },
      }
    },
  },
  plugins: [],
};
