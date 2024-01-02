/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  borderWidth: {
    DEFAULT: "1px",
    0: "0",
    2: "2px",
  },
};
