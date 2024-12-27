/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "calc-minus-80": "calc(100% - 80px)",
      },
      maxWidth: {
        "screen-1600": "1600px",
      },
      backgroundImage: {
        "gradient-fill":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(200, 214, 130, 0.40) 100%)",
        "gradient-fill-lr":
          "linear-gradient(-90deg, rgba(255, 255, 255, 0.00) 0%, rgba(200, 214, 130, 0.40) 100%)",
        "gradient-fill2":
          "linear-gradient(90.12deg, #F9DE80 0.52%, #3ABF88 100.03%)",
        "radial-gradient":
          "radial-gradient(44.94% 112.59% at 11.28% 39.72%, #DFDDCD 0%, #97DE9A 100%), radial-gradient(34.64% 157.63% at 80.39% 67.39%, #DFDDCD 0%, rgba(255, 255, 255, 0) 100%)",
        "gradient-fill3":
          "linear-gradient(-90deg, rgba(255, 255, 255, 0.00) 43.16%, rgba(200, 214, 130, 0.40) 95.97%);",

        "gradient-fill4": "linear-gradient(121deg, rgba(255, 255, 255, 0.00) 43.16%, rgba(200, 214, 130, 0.40) 95.97%);"

        , "grey-bottom-gradient": " linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(200, 214, 130, 0.40) 100%);",

        "grey-top-gradient": "linear-gradient(-360deg, rgba(255, 255, 255, 0.00) 0%, rgba(200, 214, 130, 0.40) 100%);",
        
        "contactus-gradient": "linear-gradient(180deg, #9FF8BE 0%, #F8EDBA 87.46%);",




      },
      colors: {
        primary: {
          dark: "#393939",
          dark2: "#1a1a1a",
          dark3: "#222222",
          dark4: "#3ABF88",
          dark5: '#212121',
        },
        secondary: {
          DEFAULT: "#64748B",
          light: "#67D17E",
          light2: "#3ABF88",
          light3: "#ABF9C4",
          dark: "#5A5A5A",
          dark2: '#2D2D2D',
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
