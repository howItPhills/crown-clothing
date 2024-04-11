/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height, padding",
        padding: "padding",
        width: "width",
      },
    },
  },
  plugins: [],
};
