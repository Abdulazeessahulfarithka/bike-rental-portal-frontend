/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["poppins"],
        backgroundImage: {
          " hero-pattern":
            "url()",
        },
      },
    },
  },
  plugins: [],
};
