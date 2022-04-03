module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    colors: {
      primary: "#25BB87",
      secondary: "#6837EF",
      gray: "#FAFAFA",
      textPrimary: "#060213",
      textSecondary: "#696D8C",
      placeholder: "#A3A3C2",
      border: "#E1E1EB",
      notification: "#F25A68",
      white: "#fff",
    },
    fontSize: {
      default: "12px",
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "20px",
      xxl: "24px",
    },
    fontWeight: {
      bold: "400",
      bolder: "600",
    },
    extend: {
      spacing: {
        8: "8px",
        12: "12px",
        16: "16px",
        18: "18px",
        24: "24px",
        32: "32px",
        36: "36px",
        40: "40px",
      },
      borderRadius: {
        sm: "8px",
        md: "10px",
      },
    },
  },
  plugins: [],
};
