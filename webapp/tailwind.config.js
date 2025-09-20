/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        lavender: "#F6F0FA",
        indigo: "#44437F",
        coral: "#E47888",
        teal: "#4CB7A9",
      },
    },
  },
  plugins: [],
};
