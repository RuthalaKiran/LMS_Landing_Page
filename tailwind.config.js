/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient1":
          "linear-gradient(72deg,rgba(48, 60, 230, 1) 0%, rgba(122, 130, 222, 1) 100%)",
        "custom-gradient2":
          "linear-gradient(250deg,rgba(48, 60, 230, 1) 0%, rgba(122, 130, 222, 1) 100%)",
      },
    },
  },
  plugins: [],
};
