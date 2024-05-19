import { createTheme } from "@mui/material/styles";
// ight mode, isDarkMode is false
const theme = (isDarkMode) =>
  createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#dc004e",
      },
      background: {
        default: isDarkMode ? "#121212" : "#f0f0f0",
        paper: isDarkMode ? "#1d1d1d" : "#fff",
        buttonBox: isDarkMode ? "#28124D" : "#6C40B5",
        searchBar: isDarkMode
          ? "rgba(26, 26, 26, 0.5)"
          : "rgba(255, 255, 255, 0.2)",
        searchHistory: isDarkMode
          ? "rgba(26, 26, 26, 0.5)"
          : "rgba(255, 255, 255, 0.4)",
        searchHistoryButton: isDarkMode
          ? "transparent"
          : "rgba(255, 255, 255, 0.1)",
      },
    },
    typography: {
      degree: {
        fontFamily: "Noto Sans",
        fontSize: "80px",
        fontWeight: 600,
        color: isDarkMode ? "#FFFFFF" : "#6C40B5",
        lineHeight: "80px",
        "@media (max-width:600px)": {
          fontSize: "50px",
          lineHeight: "50px",
        },
      },
      details: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        fontFamily: "Noto Sans",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "22px",
        "@media (max-width:600px)": {
          fontSize: "12px",
          lineHeight: "16px",
        },
      },
      remainingDetails: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        fontFamily: "Noto Sans",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "22px",
        color: isDarkMode ? "#FFFFFF" : "#666666",
        "@media (max-width:600px)": {
          fontSize: "12px",
          lineHeight: "16px",
        },
      },
      searchHistoryDateAndTIme: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        fontFamily: "Noto Sans",
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "22px",
        color: isDarkMode ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 1)",
        "@media (max-width:600px)": {
          fontSize: "10px",
          lineHeight: "14px",
        },
      },
      searchBar: {
        fontFamily: "Noto Sans",
        fontSize: "10px",
        fontWeight: 400,
        lineHeight: "14px",
        color: isDarkMode ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.4)",
        "@media (max-width:600px)": {
          fontSize: "8px",
          lineHeight: "12px",
        },
      },
    },
  });

export default theme;
