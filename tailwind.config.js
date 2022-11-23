/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#9a8bef",

          secondary: "#52d84b",

          accent: "#7686e0",

          neutral: "#28343E",

          "base-100": "#f3f4f6",

          info: "#98BAE6",

          success: "#5AEDA3",

          warning: "#C48003",

          error: "#F74A4D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
