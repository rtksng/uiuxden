/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        'calc-minus-80': 'calc(100% - 80px)',
      },
      maxWidth: {
        "screen-1600": "1600px",
      },
      backgroundImage: {
        "gradient-fill":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(200, 214, 130, 0.40) 100%)",
          "gradient-fill-lr": "linear-gradient(-90deg, rgba(255, 255, 255, 0.00) 0%, rgba(200, 214, 130, 0.40) 100%)",
      },
      colors: {
        primary: {
          dark: "#393939",
          dark2: "#1a1a1a",
          dark3: "#222222",
          dark4: "#3ABF88"
        },
        secondary: {
          DEFAULT: "#64748B",
          light: "#67D17E",
          light2: "#3ABF88",
          dark: "#5A5A5A",

        },
        success: "#10B981",
        danger: "#EF4444",
        warning: "#F59E0B",
        info: "#3B82F6",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".border-gradient-b": {
          position: "relative",
        },
        ".border-gradient-b::after": {
          content: '""',
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "100%",
          height: "1px", // Adjust border thickness
          background:
            "linear-gradient(90deg, #FFF 0%, #C7C7C7 50.17%, #FFF 100%)",
        },
        ".border-gradient-lr": {
          position: "relative",
        },
        ".border-gradient-lr::before": {
          content: '""',
          position: "absolute",
          top: "0",
          left: "0",
          width: "1px",
          height: "100%",
          background:
            "linear-gradient(180deg, #FFF 0%, #C7C7C7 50.17%, #FFF 100%)",
        },
      });
    },
  ],
};
