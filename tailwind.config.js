/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "moderate-blue": "hsl(238, 40%, 52%)",
      "soft-red": "hsl(358, 79%, 66%)",
      "light-greyish-blue": "hsl(239, 57%, 85%)",
      "pale-red": "hsl(357, 100%, 86%)",
      "dark-blue": "hsl(212, 24%, 26%)",
      "greyish-blue": "hsl(211, 10%, 45%)",
      "light-grey": "hsl(223, 19%, 93%)",
      "very-light-grey": "hsl(228, 33%, 97%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    screens: {
      sm: "500px",
      // => @media (min-width: 375px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      spacing: {
        1: "8px",
        2: "12px",
        3: "16px",
        4: "24px",
        5: "32px",
        6: "48px",
      },
      gridTemplateColumns: {
        "commnet__container-row": "1fr 28px",
        "commnet__container-col": "28px 1fr 64px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      height: {
        commnet__container: "70vh",
      },
    },
  },
  plugins: [],
};
