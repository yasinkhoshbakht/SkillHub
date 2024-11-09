/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5",
        secondary: "#ec4899",
        accent: "#22c55e",
        background: "#f3f4f6",
      },
    },
  },
  plugins: [],
};
