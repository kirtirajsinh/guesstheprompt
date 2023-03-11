/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "p-bg": "var(--background)",
        "s-bg": "var(--background-secondary)",
        "p-text": "var(--text-primary)",
        "s-text": "var(--text-secondary)",
      },
      fontFamily: {
        "font-heading": "var(--font-luckiestGuy)",
      },
    },
  },
  plugins: [],
};
